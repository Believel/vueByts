<template>
  <div class="shadow-container">
    <div class="panel">
      <p>无偏移投影</p>
      <div class="box shadow1"></div>
    </div>
    <div class="panel">
      <p>下侧投影</p>
      <div class="box shadow2"></div>
    </div>
    <div class="panel">
      <p>右侧投影</p>
      <div class="box shadow3"></div>
    </div>
    <div class="panel">
      <p>双侧投影</p>
      <div class="box shadow4"></div>
    </div>
    <div class="panel">
      <p>菜单投影</p>
      <div class="box shadow5"></div>
    </div>
    <div class="panel">
      <p>投影边框</p>
      <div class="box shadow6"></div>
    </div>
    <div class="panel">
      <div class="shadow-dotted"></div>
    </div>
    <div class="panel">
      <div class="shadow-triangle"></div>
    </div>
    <div class="panel">
      <div class="circle-square"></div>
    </div>
    <div class="panel">
      <div class="tip"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Hover extends Vue {
}
</script>

<style lang="scss" scoped>
  .shadow-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .panel {
      box-sizing: border-box;
      width: 24%;
      height: 180px;
      p {
        text-align: center;
      }
      .box {
        width: 150px;
        height: 80px;
        background-color: #00adb5;
        margin: 0 auto;
      }
      .shadow1 {
        box-shadow: 0 0 12px rgba(0, 173, 181, .8);
      }
      .shadow2 {
        /* 水平阴影位置  垂直阴影位置  模糊距离 阴影大小 阴影的颜色 */
        box-shadow: 0 6px 12px -4px rgba(0, 173, 181, .8);
      }
      .shadow3 {
        box-shadow: 6px 6px 12px -5px rgba(0, 173, 181, .8);
      }
      .shadow4 {
        box-shadow: 6px 0 12px -5px rgba(0, 173, 181, .8), -6px 0 12px -5px rgba(0, 173, 181, .8);
      }
      .shadow5 {
        box-shadow: 0 3px 12px rgba(0, 173, 181, .8);
      }
      .shadow6 {
        box-shadow: 0 0 0 1px rgba(0, 173, 181, 0.8);
        background-color: rgb(255, 255, 255);
      }
      /* 虚线阴影 */
      .shadow-dotted {
        width: 120px;
        height: 120px;
        border: 6px dotted #00adb5;
        filter: drop-shadow(2px 2px 2px rgba(64, 158, 255, .9))
      }
      /* 三角形阴影 */
      .shadow-triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 50px 50px 50px;
        border-color: transparent transparent #00adb5 transparent;
        filter: drop-shadow(10px 0 10px rgba(39, 92, 171, .5));
      }
      /* 右缺圆角阴影 */
      .circle-square {
        width: 120px;
        height: 120px;
        /* radial-gradient 参数1：指定圆的类型, 参数其他：颜色 渐变大小*/
        background: radial-gradient(circle at bottom right, transparent 49px, #00adb5 34px);
        filter: drop-shadow(2px 2px 2px rgba(64, 158, 225, .9));
      }
      /* 信息窗口 */
      .tip {
        width: 140px;
        height: 80px;
        border: 1px solid #00adb5;
        border-radius: 4px;
        position: relative;
        background-color: #fff;
        filter: drop-shadow(0 2px 4px rgba(64, 158, 225, .9));
        &::before {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 10px 10px 10px;
          border-color: transparent transparent #fff transparent;
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          margin: auto;
          z-index: 2;
        }
        &::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 10px 10px 10px;
          border-color: transparent transparent #00adb5 transparent;
          position: absolute;
          top: -11px;
          left: 0;
          right: 0;
          margin: auto;
          z-index: 1;
        }
      }
    }
  }
</style>