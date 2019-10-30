<template>
  <div class="tree-container">
    <div class="tree-nodes">
      <TreeNode 
        :data.sync="syncData"
        @onCollapse="onCollapse"
        @onCheck="onCheck"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, PropSync } from 'vue-property-decorator';
import { TreeData } from '@/types/tree';
import TreeNode from './TreeNode.vue';
interface KeyNodeMap {
  // 属性名任意：值是一个TreeData类型
  [key: string]: TreeData;
}
@Component({
  components: {
    TreeNode,
  },
})
export default class Tree extends Vue {
  @PropSync('data', {type: Object}) public syncData!: TreeData;
  public keyNodeMap: KeyNodeMap = {};
  private mounted(): void {
    this.buildKeyMap();
  }
  private buildKeyMap(): void {
    this.keyNodeMap[this.syncData.key] = this.syncData;
    if (this.syncData.children && this.syncData.children.length > 0) {
      this.walk(this.syncData.children, this.syncData);
    }
  }
  private walk(children: TreeData[], parent: TreeData): void {
    children.forEach((item: TreeData) => {
      item.parent = parent; // 在节点上增加一个parent属性，指定自己的父亲
      this.keyNodeMap[item.key] = item;
      if (item.children && item.children.length > 0) {
        this.walk(item.children, item);
      }
    });
  }
  // 点击箭头
  private onCollapse(key: string): void {
    const data = this.keyNodeMap[key];
    if (data) {
      const { children } = data;
      if (children) {
        data.collapsed = !data.collapsed;
        data.children = data.children || [];
      } else { // 如果没有children属性，则说明儿子未加载，需要加载
        data.loading = true;
        setTimeout(() => {
          data.children = [
            {
              name: data.name + '的儿子1',
              key: `${data.key}-1`,
              type: 'folder',
              collapsed: true,
              loading: false,
              children: null,
            },
            {
              name: data.name + '的儿子2',
              key: `${data.key}-2`,
              type: 'folder',
              collapsed: true,
              loading: false,
              children: null,
            },
          ];
          data.loading = false;
          data.collapsed = false;
          this.buildKeyMap();
        }, 2000);
      }
    }
  }
  // 点击复选框
  private onCheck(key: string): void {
    const data = this.keyNodeMap[key];
    if (data) {
      // ! 切记这种复制方式：vue是不能检测他是响应式数据的
      // data.checked = !data.checked;
      this.$set(data, 'checked', !data.checked);
      if (data.checked) {
        this.checkChildren(data.children as TreeData[], true);
        this.checkParent(data.parent as TreeData);
      } else {
        this.checkChildren(data.children as TreeData[], false);
        this.checkParent(data.parent as TreeData);
      }
    }
  }
  private checkChildren(children: TreeData[], checked: boolean) {
    children && children.forEach((item) => {
      // ! 切记这种复制方式：vue是不能检测他是响应式数据的
      // item.checked = checked;
      this.$set(item, 'checked', checked);
      this.checkChildren(item.children as TreeData[], checked);
    });
  }
  private checkParent(parent: TreeData): void {
    while (parent) {
      // ! 切记这种复制方式：vue是不能检测他是响应式数据的
      // parent.checked = ((parent.children) as TreeData[]).every((item: TreeData) => item.checked);
      this.$set(parent, 'checked', ((parent.children) as TreeData[]).every((item: TreeData) => item.checked));
      parent = parent.parent as TreeData;
    }
  }
}
</script>
<style lang="scss" scoped>
  .tree-container {
    width: 50%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #eeeeee;
    text-align: left;
    padding: 10px 0;
    .tree-nodes {
      position: relative;
      overflow: hidden;
    }
  }
</style>