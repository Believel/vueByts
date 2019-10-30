<template>
  <Tree :data.sync="treeData"></Tree>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tree from '@/components/Tree.vue';
import treeData from '@/mock/treeData.json';
import { TreeData } from '@/types/tree';
@Component({
  components: {
    Tree,
  },
})
export default class TreeApp extends Vue {
  public treeData: TreeData = treeData;
}
</script>