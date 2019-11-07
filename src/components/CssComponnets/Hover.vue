<template>
  <div class="hover-container">
    <h2>悬停动画</h2>
    <div class="hover-btn">
      <span>hover me to change</span>
    </div>
    <h2>边框动画</h2>
    <div class="border-btn">
      <div class="button_content">
        hover me to change
      </div>
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
.hover-container {
  padding: 10px;
  .hover-btn {
    margin: 40px auto;
    width: 200px;
    height: 60px;
    padding: 0 30px;
    line-height: 60px;
    text-align: center;
    position: relative;
    appearance: none;
    background: #f72359;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 100px;
  }
  .hover-btn span{
    position: relative;
  }
  .hover-btn::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width .2s ease, height .2s ease;
  }
  .hover-btn:hover::before {
    --size: 400px;
  }
  .border-btn {
    width: 200px;
    height: 60px;
    position: relative;
    background: #fff;
    margin: 30px auto;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
    &::before {
      content: '';
      width: 0;
      height: 0;
      background: #00adb5;
      position: absolute;
      top: -1px;
      right: -1px;
      z-index: 0;
      transition: width .5s, height .5s;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      background: #00adb5;
      position: absolute;
      bottom: -1px;
      left: -1px;
      z-index: 0;
      transition: width .5s, height .5s;
    }
    &:hover::before {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }
    &:hover::after {
      /* 宽度比100%的宽度增加2px */
      width: calc(100% + 2px);
      height: calc(100% + 2px);
    }
    .button_content {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background: #fff;
    }
  }
}
</style>