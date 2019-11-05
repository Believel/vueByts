
// 定义在.vue中引入json文件
declare module '*.json' {
  const value: any;
  export default value;
}
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.svg";
declare module "*.jpeg";