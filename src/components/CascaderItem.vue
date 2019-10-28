<template>
  <div class="content">
    <div class="content-left">
      <div class="label" v-for="(item, key) in options" :key="key">
        <div @click="select(item)" :class="{'seleted': isSeleted(value, item)}">{{item.label}}</div>
      </div>
    </div>
    <div class="content-right" v-if="lists && lists.length">
      <CascaderItem :options="lists" :value="value" @change="change" :level="level + 1"></CascaderItem>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
import cloneDeep from 'lodash/cloneDeep';
import { City } from '@/types/city';
@Component
export default class CascaderItem extends Vue {
  @Prop(Number) public level!: number;
  @Prop(Array) public value!: City[];
  @Prop(Array) public options!: City[];
  get lists() {
    // 检查这一层是否有值
    if (this.value && this.value[this.level]) {
      // 找到这层的数据对象
      const item = this.options.find((obj) => obj.label === this.value[this.level].label);
      if (item && item.children) {
        return item.children;
      }
    }
  }
  // 点击选择
  public select(item: City): void {
    // !克隆一份props中的value值，因为子组件不允许修改父组件的值
    const cloneValue = cloneDeep(this.value);
    cloneValue[this.level] = item;
    // 将当前选中的层级之后的数据清空
    cloneValue.splice(this.level + 1);
    // 向父级发送事件
    this.$emit('change', cloneValue);
  }
  public change(value: City[]): void {
    this.$emit('change', value);
  }
  // 是否是高亮的
  public isSeleted(value: City[], item: City): boolean {
    return value.some((v) => v.label === item.label);
  }

}
</script>
<style lang="scss" scoped>
  .content {
    display: flex;
    text-align: left;
    .content-left {
      height: 200px;
      border-radius: 4px;
      box-shadow: 0 0 2px inset #cccccc;
      overflow-y: scroll;
      .label {
        width: 80px;
        font-size: 14px;
        line-height: 26px;
        color: #606266;
        padding-left: 10px;
        cursor: pointer;
        .seleted {
          color: #409eff;
        }
        &:hover {
          background: #f5f7fa;
        }
      }
    }
    .content-right {
      margin-left: -1px;
    }
  }
</style>