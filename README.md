# VueCli3.0
## 安装
```js
npm install -g @vue/cli

```
## 创建项目
```js
vue create vuebyts
```
![](https://raw.githubusercontent.com/Believel/MarkdownPhotos/master/vuecli3.0byts/1%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE.png)
![](https://raw.githubusercontent.com/Believel/MarkdownPhotos/master/vuecli3.0byts/2%E9%80%89%E6%8B%A9%E9%85%8D%E7%BD%AE%E9%A1%B9.png)
![](https://raw.githubusercontent.com/Believel/MarkdownPhotos/master/vuecli3.0byts/3%E5%90%AF%E5%8A%A8%E9%A1%B9%E7%9B%AE.png)

## 图形化界面
```js
cd vuebyts
vue ui
```
![](https://raw.githubusercontent.com/Believel/MarkdownPhotos/master/vuecli3.0byts/4%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%95%8C%E9%9D%A2.png)

## 文件结构
```js
.
|-- README.md
|-- babel.config.js
|-- package.json
|-- public
|   |-- favicon.ico
|   `-- index.html
|-- src
|   |-- App.vue
|   |-- assets
|   |-- components
|   |-- main.ts        // 入口文件
|   |-- router.ts      // 路由文件
|   |-- shims-tsx.d.ts // 兼容jsx
|   |-- shims-vue.d.ts // 兼容vue
|   |-- store.ts       // vuex入口文件
|   `-- views
|-- tests
|   `-- unit
|-- tsconfig.json
|-- tslint.json
`-- yarn.lock

```
## 安装插件

1. https://microsoft.github.io/TypeSearch/  查看插件是否可以使用vue+ts项目
2. 利用图形化管理工具安装插件，例如安装axios,就需要下载`axios`和相关ts的`@types/axios`


## `vue-property-decorator`插件的使用
### 1.组件声明
```js
// @Component 不传参时
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TodoItem extends Vue {
    // ...
}

// @Component 传参时
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem';

@Component({
  components: {
    TodoItem
  }
})
export default class Home extends Vue {
    // ...
}
```
### 2.data对象
```js
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TodoItem extends Vue {
    // data
    lists: Todo[] = [
        { text: '吃饭', complete: true},
        { text: '睡觉', complete: false},
        { text: '打豆豆', complete: false}
    ];
    private name: string;
    constructor() {
        super()
        this.name = 'zpp';
    }
}
```
### 3.prop声明
```js
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TodoItem extends Vue {
    @Prop(Object) public item !: Todo;
    @Prop({default: 'default value'}) readonly propB!: string
    @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
```
### 4.自定义方法
```js
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TodoItem extends Vue {
  public say(msg: string):void {
    console.log('收到子组件发送的消息：'+ msg)
  }
}
```
### 5.watch监听属性
```js
import { Component, Vue, Watch } from 'vue-property-decorator';
@Component
export default class TodoItem extends Vue {
    public i: number = 0;
    
    @Watch('i', { immediate: true, deep: true })
    public fn(): void {
        console.log('监听到数据i的变化' + this.i);
    }
}
```
### 6.computed计算属性
```js
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TodoItem extends Vue {
    public get allname() {
       return 'computed ' + this.name;
    }
}
```
### 7. emit事件
```js
import { Component, Vue, Emit } from 'vue-property-decorator';
@Component
export default class TodoItem extends Vue {
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
    
    @Emit()
    addToCount(n: number) {
        // n为传过去的参数
        this.count += n
    }
}
```
## vuex + ts 结合
### 1.安装`npm i vuex-class -S`
### 2.usage
```js
import { Component, Vue } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
@Component
export default class TodoItem extends Vue {
    // 'lists' 是store中定义的属性名
    @State('lists') public lists!:[]
    // 'hello' 是store中mutation中定义的方法名，mutationHello是自己定义的
    @Mutation('hello') public mutationHello!: ()=>void
    private mounted():void {
        this.mutationHello();
        console.log(this.lists)
    }
}

```

## element 的引入
1. 安装 `npm install element-ui babel-plugin-component -D`
2. 在main.ts中
```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```
3. 将 .babelrc 修改为：(按需引入)
```js
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
## axios的使用
1. 安装 `npm install axios @types/axios`
2. 封装 `axios.ts`
```js
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = '/v1/api';
axios.interceptors.response.use(function(response) {
  return response;
}, function(error: AxiosError) {
  return Promise.reject(error);
});

export default axios;

```
3. 调用
```js
export async function getUnits(id: string) {
  // 使用泛型可以服用接口，要定义具体的返回的数据的接口类型，否则就会报unknown的警告
  const response = await axios.get<Units>(`/self/packages/${id}/units`);
  return (response.data) as Units;
}
```
