<template>
  <div class="cursor-container">
    <div class="cursor-item" v-for="(item, index) in data" :key="index" :style="item.style">
      {{item.style.cursor}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
interface Data {
  style: {
    cursor: string;
  };
}
@Component
export default class Cursor extends Vue {
  public data: Data[] = [
    { style: {cursor: 'auto'}},
    { style: {cursor: 'text'}},
    { style: {cursor: 'default'}},
    { style: {cursor: 'none'}},
    { style: {cursor: 'help'}},
    { style: {cursor: 'pointer'}},
    { style: {cursor: 'progress'}},
    { style: {cursor: 'wait'}},
    { style: {cursor: 'cell'}},
    { style: {cursor: 'crosshair'}},
    { style: {cursor: 'vertical-text'}},
    { style: {cursor: 'alias'}},
    { style: {cursor: 'copy'}},
    { style: {cursor: 'no-drop'}},
    { style: {cursor: 'not-allowed'}},
    { style: {cursor: 'grab'}},
    { style: {cursor: 'grabbing'}},
    { style: {cursor: 'all-scroll'}},
    { style: {cursor: 'move'}},
    { style: {cursor: 'col-resize'}},
    { style: {cursor: 'row-resize'}},
    { style: {cursor: 'n-resize'}},
    { style: {cursor: 'se-resize'}},
    { style: {cursor: 's-resize'}},
    { style: {cursor: 'ns-resize'}},
    { style: {cursor: 'e-resize'}},
    { style: {cursor: 'w-resize'}},
    { style: {cursor: 'ne-resize'}},
    { style: {cursor: 'nw-resize'}},
    { style: {cursor: 'sw-resize'}},
    { style: {cursor: 'ew-resize'}},
    { style: {cursor: 'nesw-resize'}},
    { style: {cursor: 'nwse-resize'}},
    { style: {cursor: 'zoom-in'}},
    { style: {cursor: 'zoom-out'}},
  ];
}
</script>

<style lang="scss" scoped>
  .cursor-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .cursor-item {
      width: 90px;
      height: 90px;
      border: 1px solid #99a9bf;
      font-size: 16px;
      border-radius: 50%;
      color: #1f2f3d;
      display: inline-block;
      line-height: 90px;
      text-align: center;
      margin: 5px;
      background: #e5e9f2;
    }
  }
</style>