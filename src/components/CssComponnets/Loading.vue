<template>
  <div>
    <div class="load-container">
      <div class="boxLoading"></div>
    </div>
    <hr>
    <div class="load"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Loading extends Vue {
}
</script>

<style lang="scss" scoped>
  .load-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    /* 垂直居中 */
    .boxLoading {
      width: 50px;
      height: 50px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      &:before {
        content: '';
        width: 50px;
        height: 5px;
        background: #000;
        position: absolute;
        opacity: .1;
        top: 59px;
        left: 0;
        animation: shadow .5s linear infinite;
      }
      &:after {
        content: '';
        width: 50px;
        height: 50px;
        background: #00adb5;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
        animation: animate .5s linear infinite;
      }
    }
  }
  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
  @keyframes shadow {
    0%,
    100% {
      transform: scale(1,1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
  .load {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(0, 169, 178, .2);
    &::before {
      content: '';
      width: 70px;
      height: 70px;
      background-color: #00adb5;
      position: absolute;
      left: 50%;
      bottom: 50%;
      z-index: 1;
      transform-origin: left bottom;
      animation: rotate 1.5s infinite linear;
    }
    &::after {
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: #fff;
      z-index: 2;
      border-radius: 50%;

    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>