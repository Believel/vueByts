<template>
  <div class="flash-container">
    <img :src="imgUrl">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import bg7 from '@/assets/imgs/bg9.jpeg';
@Component
export default class Flash extends Vue {
  public imgUrl: string = bg7;
}
</script>

<style lang="scss" scoped>
  .flash-container {
    width: 300px;
    height: 500px;
    background: #333;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      height: 150%;
      width: 25px;
      background: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: .6;
      filter: blur(6px);
      animation: move 1s infinite ease-out;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  @keyframes move {
    0% {
      transform: translate(-200px, -200px) rotate(45deg);
    }
    100% {
      transform: translate(200px, 200px) rotate(45deg);
    }
  }
</style>