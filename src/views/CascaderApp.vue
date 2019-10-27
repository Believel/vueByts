<template>
  <div>
    <Cascader :options.sync = "options" v-model="value" :lazyload="lazyload"></Cascader>
  </div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import Cascader from '../components/Cascader';
import cityList from '../mock/data.json';
import { City } from '@/types/city';

const fetchData = (id:string) => new Promise<City[]>((resolve, reject) => {
  setTimeout(() => {
    const result = cityList.filter((item: City) =>  item.pid == id);
    resolve(result);
  }, 1000)
})
@Component({
  components: {
    Cascader
  }
})
export default class CascaderApp extends Vue {
  options:City[] = []; // 数据
  value:City[] = []; // 存储选中的结果

  async lazyload(id: string, callback:Function) {
    const children = await fetchData(id);
    callback(children)
  }
  private async mounted () {
    const r = await fetchData('0');
    this.options = r;

  }
}
</script>