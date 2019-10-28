<template>
  <div>
    <!-- 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件名  -->
    <!-- 修饰符 .sync 在父组件中绑定， 子组件中相当于有变量options 和自定义事件update:options触发父组件 -->
    <Cascader :options.sync = "options" v-model="value" :lazyload="lazyload"></Cascader>
  </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
// @ts-ignore
import Cascader from '@/components/Cascader';
import cityList from '../mock/data.json';
import { City, CallbackFun } from '@/types/city';


const fetchData = (id: string) => new Promise<City[]>((resolve, reject) => {
  setTimeout(() => {
    const result = cityList.filter((item: City) =>  item.pid === id);
    resolve(result);
  }, 1000);
});
@Component({
  components: {
    Cascader,
  },
})
export default class CascaderApp extends Vue {
  public options: City[] = []; // 数据
  public value: City[] = []; // 存储选中的结果

  public async lazyload(id: string, callback: CallbackFun) {
    const children = await fetchData(id);
    callback(children);
  }
  private async mounted() {
    const r = await fetchData('0');
    this.options = r;

  }
}
</script>