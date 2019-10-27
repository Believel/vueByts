<template>
  <div class="cascader">
    <div class="title">
      北京市/朝阳区
    </div>
    <transition name="fade">
      <div class="cascader-content" v-show="visible">
        <CascaderItem></CascaderItem>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import CascaderItem from '@/components/CascaderItem';
@Component({
  components: {
    CascaderItem
  }
})
export default class Cascader extends Vue {
  visible: boolean = false;
}
</script>
<style lang="scss" scoped>
  .cascader {
    display: inline-block;
    .title {
      width: 240px;
      height: 40px;
      line-height: 40px;
      padding-left: 5px;
      border: 1px solid #cccccc;
      border-radius:4px;
      text-align: left;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    .cascader-content {
      margin-top: 10px;
    }
  }
</style>