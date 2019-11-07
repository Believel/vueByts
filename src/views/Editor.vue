<template>
  <div class="editor-container">
    <!-- 按钮区 -->
    <div class="nav">
      <el-button @click="execCommand('bold')">加粗</el-button>
      <el-button @click="execCommand('insertUnorderedList')">无序列表</el-button>
      <el-button @click="execCommand('insertHorizontalRule')">水平线</el-button>
      <el-button @click="execCommand('undo')">后退</el-button>
      <el-button @click="execCommand('redo')">前进</el-button>
      <el-button @click="execCommand('formatBlock', '<p>')">段落</el-button>
      <el-button @click="execCommand('formatBlock', '<h1>')">h1</el-button>
      <el-button @click="createLink('createLink')">链接url</el-button>
      <el-button @click="createLink('insertImage')">插入图片地址</el-button>
      <el-button class="nav_img">
        插入图片
        <input type="file"  accept="image/gif,image/jpeg,image/png" @input="insertImg" class="nav_file">
      </el-button>
    </div>
    <!-- 编辑区 -->
    <div class="editor" contenteditable="true" @input="print" ref="editor">

    </div>

    <div class="content">
      {{html}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        html: '',
        editor: '',
        nowImg: '',
        selectedRange: this.saveSelection()
      };
    },
    mounted() {
      this.editor = document.querySelector('.editor');
      this.editor.addEventListener('click', this.handleClick);
    },
    methods: {
      execCommand(name, args = null) {
        document.execCommand(name, false, args);
      },
      print() {
        this.html = document.querySelector('.editor').innerHTML;
      },
      createLink(name) {
        // 保存之前的 Range
        this.selectedRange = this.saveSelection();
        this.$prompt('请输入链接地址', '地址', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          // 聚焦焦点
          this.$refs.editor.focus();
          // 重新设置光标位置
          this.restoreSelection();
          this.execCommand(name, value);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      insertImg(e) {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onload = () => {
          const base64Img = reader.result;
          this.$refs.editor.focus();
          this.execCommand('insertImage', base64Img);
          // 解决同一张图片上传无效的问题
          document.querySelector('.nav_img input').value = '';
        };
        reader.readAsDataURL(file);
      },
      handleClick(e) {
        // 判断点击的是否是编辑区里面的图片
        if (e.target && e.target.tagName && e.target.tagName.toUpperCase() === 'IMG') {
          this.handleClickImg(e.target);
        }
      },
      // 点击的是图片就创建大小一样的 div
      handleClickImg(img) {
        this.nowImg = img;
        this.showOverlay();
      },
      showOverlay() {
        // 添加蒙层
        this.overlay = document.createElement('div');
        this.editor.appendChild(this.overlay);
        // 定位蒙层和大小
        this.repositionOverlay();
      },
      // 定位蒙层和大小
      repositionOverlay() {
        const imgRect = this.nowImg.getBoundingClientRect();
        const editorRect = this.editor.getBoundingClientRect();
        // 设置蒙层宽高和位置
        Object.assign(this.overlay.style, {
          position: 'absolute',
          top: `${imgRect.top - editorRect.top + this.editor.scrollTop}px`,
          left: `${imgRect.left - editorRect.left - 1 + this.editor.scrollLeft}px`,
          width: `${imgRect.width}px`,
          height: `${imgRect.height}px`,
          boxSizing: 'border-box',
          border: '1px dashed red'

        });
        // 创建过四个顶点就不用创建了
        if (!this.boxes) {
          // 添加四个顶点拖拽框
          this.createBox();
        }
      },
      createBox() {
        this.boxes = [];
        this.addBox('nwse-resize'); // top left
        this.addBox('nesw-resize'); // top right
        this.addBox('nwse-resize'); // bottom right
        this.addBox('nesw-resize'); // bottom left
        this.positionBoxes(); // 设置四个拖拽框位置
      },
      addBox(cursor) {
        const box = document.createElement('div');
        Object.assign(box.style, {
          position: 'absolute',
          height: '12px',
          width: '12px',
          backgroundColor: 'white',
          border: '1px solid #777',
          boxSizing: 'border-box',
          opacity: '0.8'
        });
        box.style.cursor = cursor;
        // 添加拖拽事件
        box.addEventListener('mousedown', this.handleMousedown);
        this.overlay.appendChild(box);
        this.boxes.push(box);
      },
      // 四个拖拽框位置
      positionBoxes() {
        const handleXOffset = `-6px`;
        const handleYOffset = `-6px`;
        [
          { left: handleXOffset, top: handleYOffset},
          { right: handleXOffset, top: handleYOffset},
          { right: handleXOffset, bottom: handleYOffset},
          {left: handleXOffset, bottom: handleYOffset}
        ].forEach((pos, idx) => {
          Object.assign(this.boxes[idx].style, pos);
        });
      },
      // 拖拽事件方法
      // 按下鼠标时，会改变鼠标样式(就是鼠标会变成调整大小的那种图标)，然后监听 mousemove 和 mouseup 事件，计算出水平拖拽距离，然后重新设置图片大小和浮层大小
      handleMousedown(e) {
        // 当前拖拽的元素
        this.dragBox = e.target;
        // 拖拽的开始X位置
        this.dragStartX = e.clientX;
        // 拖拽前的宽度
        this.preDragWidth = this.nowImg.width;
        // 设置图片的手型
        this.setCursor(this.dragBox.style.cursor);
        document.addEventListener('mousemove', this.handleDrag);
        document.addEventListener('mouseup', this.handleMouseup);
      },
      // 鼠标拖拽移动
      handleDrag(e) {
        // 计算水平拖动距离
        const deltaX = e.clientX - this.dragStartX;
        // 修改图片大小
        if (this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3]) { // 坐边的两个框
          this.nowImg.width = Math.round(this.preDragWidth - deltaX);
        } else {
          // 右边的两个框
          this.nowImg.width = Math.round(this.preDragWidth + deltaX);
        }
        // 同时修改蒙层大小
        this.repositionOverlay();

      },
      // 鼠标弹起
      handleMouseup(e) {
        this.setCursor('');
        // 移除事件
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.handleMouseup);
      },
      setCursor(cursor) {
        // 设置鼠标样式
        [document.body, this.nowImg].forEach((el) => {
          el.style.cursor = cursor;
        });
      },
      // 保存当前Range对象
      saveSelection() {
        // 用户选择的文本范围或插入符号的当前位置
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          // 返回选区开始的节点（Node）
          return selection.getRangeAt(0);
        }
        return null;
      },
      restoreSelection() {
        // 返回一个  Selection 对象，表示用户选择的文本范围或光标的当前位置。
        const selection = window.getSelection();
        if (this.selectedRange) {
          selection.removeAllRanges(); // 清空所有的 Range 对象
          selection.addRange(this.selectedRange); // 恢复保存的 Range
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
.editor-container {
  margin: 50px auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  .nav {
    display: flex;
    .nav_img {
      position: relative;
      .nav_file {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        z-index: 2;
      }
    }
    
    
  }
  .editor {
    text-align: left;
    width: 100%;
    height: 300px;
    border: 1px solid #000;
    position: relative;
  }
  .content {
    margin-top: 10px;
    height: 100px;
    border: 1px solid #000;
    word-break: break-all;
    word-wrap: break-word;
    overflow: scroll;
  }
}
</style>