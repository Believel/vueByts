<template>
  <div class="home">
    <header>
      count: {{count}}
    </header>
    <ul class="todolist">
      <li v-for="(item, index) in lists" :key="index" class="todoitem">
        <TodoItem :item="item" @say="say"></TodoItem>
      </li>
    </ul>
    <hr>
    <el-button type="primary" @click="goAbout">go About page</el-button>
    <el-button type="primary" @click="goCascader">go Cascader page</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Todo } from '../types/todo';
import TodoItem from '@/components/TodoItem';
import { State } from 'vuex-class';
import { getUnits, Unit } from '@/api/demo';

@Component({
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  // data 数据
  // lists: Todo[] = [
  //   { text: '吃饭', complete: true},
  //   { text: '睡觉', complete: false},
  //   { text: '打豆豆', complete: false}
  // ]
  @State('lists') public lists!: [];
  // computed 计算属性
  get count() {
    return this.lists.length;
  }
  public say(msg: string): void {
    console.log('收到子组件发送的消息：' + msg);
  }
  public goAbout(): void {
    this.$router.push({ path: '/about'});
  }
  public goCascader(): void {
    this.$router.push({ path: '/cascader'});
  }
}
</script>
<style lang="scss">
  .todolist {
    list-style: none;
    padding: 10px 0;
    .todoitem {
      padding: 10px 0;
    }
  }
</style>