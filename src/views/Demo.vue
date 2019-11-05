<template>
  <div class="demo">
    <h4>css学习</h4>
    <el-button :type="item.type" :plain="item.isActive" :disabled="!item.isActive" @click="goCssPage(item.pageName, item)" v-for="(item, index) in data" :key="index">
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
      { type: 'warning', isActive: true, pageName: 'popup2', text: '弹出气泡'},
      { type: 'danger', isActive: true, pageName: 'popu4', text: '弹出气泡'},
      { type: 'success', isActive: true, pageName: 'popu5', text: '弹出气泡'},
    ];
    public goCssPage(type: string, item: Data): void {
      item.isActive = false;
      this.$router.push({ path: `/css/${type}`});
    }
  }
</script>

<style lang="scss" scoped>
  .demo {
    .demo-content {
      padding: 30px;
    }
  }
</style>