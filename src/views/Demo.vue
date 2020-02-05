<template>
  <div class="demo">
    <h4>css学习</h4>
    <el-button :type="item.type" :plain="item.isActive" :disabled="!item.isActive" @click="goCssPage(item.pageName, item)" v-for="(item, index) in data" :key="index" class="btn">
      {{item.text}}
    </el-button>
    <div class="demo-content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';
  interface Data {
    type: string;
    isActive: boolean;
    pageName: string;
    text: string;
  }
  @Component
  export default class Demo extends Vue {
    public data: Data[] = [
      { type: 'primary', isActive: true, pageName: 'popup', text: '弹出气泡'},
      { type: 'info', isActive: true, pageName: 'accordion', text: '手风琴'},
      { type: 'warning', isActive: true, pageName: 'hover', text: '悬停'},
      { type: 'danger', isActive: true, pageName: 'flash', text: '图片闪光'},
      { type: 'success', isActive: true, pageName: 'loading', text: '加载动画'},
      { type: 'primary', isActive: true, pageName: 'sticky', text: '粘性球'},
      { type: 'info', isActive: true, pageName: 'static', text: '清除默认样式'},
      { type: 'warning', isActive: true, pageName: 'scroll', text: '自定义滚动条样式'},
      { type: 'danger', isActive: true, pageName: 'cursor', text: '手型'},
      { type: 'success', isActive: true, pageName: 'shadow', text: '投影'},
      { type: 'primary', isActive: true, pageName: 'center', text: '高度自动撑满'},
      { type: 'info', isActive: true, pageName: 'bottom', text: '底部自适应'},
      { type: 'warning', isActive: true, pageName: 'glass', text: '毛玻璃效果'},
      { type: 'danger', isActive: true, pageName: 'tab', text: 'tab栏底部动画'},
      { type: 'success', isActive: true, pageName: 'input', text: '实现浮动标签效果'},
    ];
    public goCssPage(type: string, item: Data): void {
      this.data.forEach((v) => {
        v.isActive = true;
      });
      item.isActive = false;
      this.$router.push({ path: `/css/${type}`});
    }
  }
</script>

<style lang="scss" scoped>
  .demo {
    .btn {
      margin-bottom: 10px;
    }
    .demo-content {
      padding: 30px;
    }
  }
</style>