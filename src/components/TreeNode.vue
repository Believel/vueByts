<template>
  <div class="tree-node">
    <div class="inner">
      <!-- 箭头 -->
      <span :class="['collapse', syncData.collapsed ? 'caret-right':'caret-down' ]" v-if="syncData.children && syncData.children.length > 0" @click="onCollapse(syncData.key)">
      </span>
      <img v-if="!syncData.children && syncData.loading" class="collapse" :style="{width:'14px', top: '50%', marginTop:'-7px'}" :src="loadingSrc"/>
      <span v-else-if="!syncData.children && !syncData.loading" class="collapse caret-right" @click="onCollapse(syncData.key)"></span>
      <span class="content">
        <!-- 复选框 -->
        <input type="checkbox" :checked="syncData.checked" @change="onCheck(syncData.key)">
        <!-- 文件夹或者文件 -->
        <img :src="showImgSrc(syncData)" :style="{width:'20px'}">
        {{syncData.name}}
      </span>
    </div>
    <div class="children" v-if="syncData.children.length > 0 && !syncData.collapsed" v-for="(item,index) in syncData.children">
      <TreeNode :data.sync="item" :key="item.key" @onCollapse="onCollapse" @onCheck="onCheck"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, PropSync} from 'vue-property-decorator';
import { TreeData } from '@/types/tree';
import file from '@/assets/file.png';
import closedFolder from '@/assets/closed-folder.png';
import openedFolder from '@/assets/opened-folder.png';
import loadingSrc from '@/assets/loading.gif';
@Component
export default class TreeNode extends Vue {
  @PropSync('data', { type: Object}) public syncData!: TreeData;
  public file = file;
  public closedFolder = closedFolder;
  public openedFolder = openedFolder;
  public loadingSrc = loadingSrc;
  public showImgSrc(data: TreeData) {
    let icon = null;
    if (data.children) {
      if (data.children.length > 0) {
        icon = data.collapsed ? closedFolder : openedFolder;
      } else {
        icon = file;
      }
    } else {
      icon = closedFolder;
    }
    return icon;
  }
  public onCollapse(key: string): void {
    this.$emit('onCollapse', key);
  }
  public onCheck(key: string): void {
    this.$emit('onCheck', key);
  }
}
</script>
<style lang="scss" scoped>
  .tree-node {
    .inner {
      position: relative;
      color: #000;
      font-size: 20px;
      cursor: pointer;
      padding-left: 10px;
      .collapse {
        position: absolute;
        left: 0;
        cursor: pointer;
      }
      .caret-right:before {
        content: '\25B8';
      }
      .caret-down:before {
        content: '\25BE';
      }
      .content {
        display: inline-block;
        width: 100%;
        padding: 4px 5px;
      }
    }
    .children {
      padding-left: 20px;
    }
  }
</style>