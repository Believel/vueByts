<template>
  <div class="scroll-container">
    <p>海客談瀛洲，煙濤微茫信難求</p>
    <p>越人語天姥，雲霞明滅或可覩</p>
    <p>天姥連天向天橫，勢拔五嶽掩赤城</p>
    <p>天台四萬八千丈，對此欲倒東南傾</p>
    <p>我欲因之夢吳越，一夜飛渡鏡湖月</p>
    <p>湖月照我影，送我至剡溪</p>
    <p>謝公宿處今尚在，淥水蕩漾清猨啼</p>
    <p>腳著謝公屐，身登青雲梯</p>
    <p>半壁見海日，空中聞天雞</p>
    <p>千巖萬轉路不定，迷花倚石忽已暝</p>
    <p>熊咆龍吟殷巖泉，慄深林兮驚層巔</p>
    <p>雲青青兮欲雨，水澹澹兮生煙</p>
    <p>列缺霹靂，丘巒崩摧</p>
    <p>洞天石扉，訇然中開</p>
    <p>青冥浩蕩不見底，日月照耀金銀臺</p>
    <p>霓爲衣兮風爲馬，雲之君兮紛紛而來下</p>
    <p>虎鼓瑟兮鸞迴車，仙之人兮列如麻</p>
    <p>忽魂悸以魄動，怳驚起而長嗟</p>
    <p>惟覺時之枕席，失向來之煙霞</p>
    <p>世間行樂亦如此，古來萬事東流水</p>
    <p>別君去兮何時還？且放白鹿青崖間，須行即騎訪名山</p>
    <p>安能摧眉折腰事權貴，使我不得開心顏</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Hover extends Vue {
}
</script>

<style lang="scss" scoped>
  .scroll-container {
    height: 250px;
    border: 1px solid #ddd;
    padding: 15px;
    overflow: auto;
    p {
      margin: 0;
      line-height: 1.5;
    }
    &::-webkit-scrollbar {
      width: 8px;
      background: white;
    }
    /* 滚动条角落 */
    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-track {
      border-radius: 4px;
    }
    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-track {
      /*滚动条轨道*/
      background-color: rgba(180, 160, 120, .1);
      box-shadow: inset 0 0 1px rgba(180, 160, 120, .5);
    }
    &::-webkit-scrollbar-thumb {
      /* 滚动条手柄*/
      background-color: #00adb5;
    }
  }

.landscape-container {
  position: absolute;
  overflow: hidden;
}
  /* orientation 方向 */
  /* 横屏landscape */
@media screen and (orientation:landscape){
  .landscape-container {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: none;
    transform-origin: 50% 50%;
  }
}
/* 竖屏 */
@media screen and (orientation:portrait){
  .landscape-container {
    width: 100vh;
    height: 100vw;
    top: calc((100vh - 100vw) / 2);
    left: calc((100vw - 100vh) / 2);
    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }
}
/* 窗口宽度<960,设计宽度=768 */
@media screen and (max-width:959px){
}
/* 窗口宽度<768,设计宽度=640 */
@media screen and (max-width:767px){
}
/* 窗口宽度<640,设计宽度=480 */
@media screen and (max-width:639px){
}
/* 窗口宽度<480,设计宽度=320 */
@media screen and (max-width:479px){
}
/* 设备像素比为2 */
/* 常用于1px边框，还应规定 3dppx 的情况 */
@media (min-resolution: 2dppx) {
}
/* windows UI 贴靠 */
@media screen and (-ms-view-state:snapped){ 
}
/* 打印 */
@media print{
}
</style>