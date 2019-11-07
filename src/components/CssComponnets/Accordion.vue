<template>
  <div class="accordion-container">
    <li class="accordion-item" v-for="(item,index) in data" :key="item.id" :style="item.imgStyle">
      <p class="accordion-title" >{{item.text}}</p>
    </li>
  </div>
</template>

<script lang="ts">
  import {Vue, Component } from 'vue-property-decorator';
  import bg7 from '@/assets/imgs/bg7.jpeg';
  import bg9 from '@/assets/imgs/bg9.jpeg';
  import bg10 from '@/assets/imgs/bg10.jpeg';
  interface Style {
    [key: string]: string;
  }
  interface Data {
    id: string;
    imgStyle: Style;
    text: string;
  }
  @Component
  export default class Accordion extends Vue {
    public data: Data[] = [
      {id: '1', imgStyle: { backgroundImage: `url(${bg7})`}, text: '背景1'},
      {id: '2', imgStyle: { backgroundImage: `url(${bg9})`}, text: '背景2'},
      {id: '3', imgStyle: { backgroundImage: `url(${bg10})`}, text: '背景3'},
      {id: '4', imgStyle: { backgroundImage: `url(${bg7})`}, text: '背景4'},
      {id: '5', imgStyle: { backgroundImage: `url(${bg9})`}, text: '背景5'},
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
      &:not(:hover) {
        width: 20%;
      }
      &:hover {
        width: 800px;
        &::after {
          opacity: 1;
        }
      }
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .4);
        z-index: 1;
        opacity: 0;
        transition: opacity 0.5s;
      }
      .accordion-title {
        color: #fff;
        font-size: 18px;
        z-index: 2;
      }
    }

  }
</style>