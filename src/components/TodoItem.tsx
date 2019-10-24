import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import { Todo } from '@/types/todo';

@Component
export default class TodoItem extends Vue {
  // prop
  @Prop(Object) public item !: Todo;

  public i: number = 0;
  // 向父级发送事件，如果不传参数，默认函数名和父级传过来的值要一一对应，如果传入父级给的函数名的参数，那么子级中的函数名可以任意起名字
  // 方式1： 默认事件名
  @Emit()
  public say() {
    return 'hello';
  }
  // 方式2：起别名
  @Emit('say')
  public sayHello() {
    return 'helloWorld';
  }
  public increase() {
    this.i += 1;
  }
  @Watch('i')
  public fn(): void {
    console.log('监听到数据i的变化' + this.i);
  }
  public render() {
    return <div>
      <el-button type='text'>{this.item.text}</el-button>
      <el-button type='primary' onClick={this.sayHello} style={{margin: '0 10px'}}>向父级发送消息</el-button>
      <el-button type='primary' onClick={this.increase}>监视i的变化：{this.i}</el-button>
    </div>;
  }
}
