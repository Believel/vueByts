import Vue from 'vue';
import Vuex from 'vuex';
import { Todo} from '@/types/todo';
Vue.use(Vuex);

interface IStore {
  lists: Todo[];
}
export default new Vuex.Store<IStore>({
  state: {
    lists : [
      { text: '吃饭', complete: true},
      { text: '睡觉', complete: false},
      { text: '打豆豆', complete: false},
    ],
  },
  mutations: {

  },
  actions: {

  },
});
