<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">
      {{result}}
    </div>
    <transition name="fade">
      <div class="cascader-content" v-show="visible">
        <CascaderItem :options="options" :value="value" @change="change" :level="0"></CascaderItem>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
// 1. 实现点击title元素显示或隐藏，点击cascader外部区域隐藏
// 2. 数据渲染
// 3. 递归组件封装
// 4. 获取选中的值   (在最外层的父组件中定义选中的值)
// 5. 计算需要显示出的正确面板 （拿到选中的之后计算成想渲染的结果）
// 6. 解决数据源不能及时渲染新的数据的问题 （computed缓存的作用）
// 7. 动态的获取数据源 （孩子数组还是交给组件内部处理，组成想要的格式）
//    7.1 根组件获取第一层的数据
//    7.2 根组件把获取其他层的数据交给组件内部处理，这里只传入父级id和对应的children数据
//    7.3 内部组件要把对应的children放在对应的id里面，这里用到了树的广度遍历
// 8. 选中值在对应的列表中高亮显示
import { Vue, Component, Prop, Model} from 'vue-property-decorator';
import CascaderItem from '@/components/CascaderItem.vue';
import { City, Lazyload } from '@/types/city';
import util from '@/directives/clickOutside';
import cloneDeep from 'lodash/cloneDeep';
@Component({
  components: {
    CascaderItem,
  },
  directives: {
    clickOutside: util.clickOutside,
  },
})
export default class Cascader extends Vue {
  @Model('input', { type: Array}) public value!: City[];
  @Prop(Array) public options!: City[];
  @Prop(Function) public lazyload!: Lazyload;
  public visible: boolean = false;
  get result() {
    return this.value.map((item) => item.label).join('/ ');
  }
  /**
   * id: 当前点击的元素的id值
   * children: 根据当前id查找到的孩子数据
   */
  public handle(id: string, children: City[]) {
    const cloneOptions = cloneDeep(this.options);
    let stack = [...cloneOptions];
    // 树可以深度遍历， 也可以广度遍历
    let index: number = 0;
    let current: City;
    // !采用广度遍历实现
    while (current = stack[index++]) {
      // 当前id 和 id不一样
      if (current.id !== id) {
        if (current.children) {
          // 存储孩子节点
          stack = stack.concat(current.children);
        }
      } else {
        break;
      }
    }
    // 找到匹配的说明有值
    if (current) {
      current.children = children;
      // 更新父级传过来的props中的options
      this.$emit('update:options', cloneOptions);
    }
  }
  public change(value: City[]) {
    // 现在点击的对象
    const lastIterm = value[value.length - 1];
    const { id } = lastIterm;
    if (this.lazyload) {
      this.lazyload(id, (children) => this.handle(id, children));
    }
    // 通知父级value值发生了变化
    this.$emit('input', value);
  }
  private toggle(): void {
    this.visible = !this.visible;
  }
  private close(): void {
    this.visible = false;
  }
}
</script>
<style lang="scss" scoped>
  .cascader {
    display: inline-block;
    .title {
      width: 240px;
      height: 40px;
      line-height: 40px;
      padding-left: 5px;
      border: 1px solid #cccccc;
      border-radius:4px;
      text-align: left;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    .cascader-content {
      margin-top: 10px;
    }
  }
</style>