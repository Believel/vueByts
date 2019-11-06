<template>
  <div class="tab-box">
    <div class="tab-container">
      <div class="title">追随动画</div>
      <ul class="tabs">
        <li class="tab-item" @click="handleClickTab(item)" v-for="(item, index) in tabs" :key="index" :class="{'active': item.isActive}">
          {{item.text}}
        </li>
      </ul>
    </div>
    <div class="tab-container2">
      <div class="title">中间展开</div>
      <ul class="tabs">
        <li class="tab-item" @click="handleClickTab2(item)" v-for="(item, index) in tabs2" :key="index" :class="{'active': item.isActive}">
          {{item.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
interface TabData {
  text: string;
  isActive: boolean;
}
@Component
export default class Tab extends Vue {
  public tabs: TabData[] = [
    { text: 'tab1', isActive: false},
    { text: 'tab2', isActive: false},
    { text: 'tab3', isActive: false},
    { text: 'tab4', isActive: false},
  ];
  public tabs2: TabData[] = [
    { text: 'tab1', isActive: false},
    { text: 'tab2', isActive: false},
    { text: 'tab3', isActive: false},
    { text: 'tab4', isActive: false},
  ];
  public handleClickTab(item: TabData) {
    this.tabs.forEach((v) => {
      v.isActive = false;
    });
    item.isActive = true;
  }
  public handleClickTab2(item: TabData) {
    this.tabs2.forEach((v) => {
      v.isActive = false;
    });
    item.isActive = true;
  }
}
</script>

<style lang="scss" scoped>
  .tab-container {
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .title {
      padding-left: 30px;
      font-size: 12px;
      color: #ddd;
      text-align: left;
    }
    .tabs {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .tab-item {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
          content: '';
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 100%;
          bottom: 0;
          transition: all .4s;
        }
        // &:hover {
        //   color: #00adb5;
        //   &::after {
        //     width: 100%;
        //     left: 0;
        //     transition-delay: .1s;
        //   }
        //   & ~ li::after {
        //     left: 0;
        //   }
        // }
      }
      .active {
        color: #00adb5;
        &::after {
          width: 100%;
          left: 0;
          transition-delay: .1s;
        }
        & ~ li::after {
          left: 0;
        }
      }
    }
  }
  .tab-container2 {
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .title {
      padding-left: 30px;
      font-size: 12px;
      color: #ddd;
      text-align: left;
    }
    .tabs {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .tab-item {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
          content: '';
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transition: width .4s;
        }
      }
      .active {
        &::after {
          width: 100%;
        }
      }
    }
  }
</style>