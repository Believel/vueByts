<template>
  <div class="accordion-container">
    <li class="accordion-item">
      <p class="accordion-title">背景1</p>
      <img :src="url" alt="">
    </li>
  </div>
</template>

<script lang="ts">
  import {Vue, Component } from 'vue-property-decorator';
  import bg7 from '@/assets/imgs/bg7.jpeg';
  interface Data {
    url: string;
  }
  @Component
  export default class Accordion extends Vue {
    public url = bg7;
    public data: Data[] = [
      {url: bg7}
    ];
  }
</script>

<style lang="scss" scoped>
  .accordion-container {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .accordion-item {
      list-style: none;
      height: 500px;
      transition: width 0.5s;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
</style>