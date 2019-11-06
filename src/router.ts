import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './views/TodoList.vue';
import CascaderApp from './views/CascaderApp.vue';
import TreeApp from './views/TreeApp.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoList,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: CascaderApp,
    },
    {
      path: '/tree',
      name: 'tree',
      component: TreeApp,
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ './views/Demo.vue'),
      children: [
        {
          path: '/css/popup',
          name: 'popup',
          component: () => import(/* webpackChunkName: "popup" */ './components/CssComponnets/Popup.vue')
        },
        {
          path: '/css/accordion',
          name: 'accordion',
          component: () => import(/* webpackChunkName: "accordion" */ './components/CssComponnets/Accordion.vue')
        },
        {
          path: '/css/hover',
          name: 'hover',
          component: () => import(/* webpackChunkName: "hover" */ './components/CssComponnets/Hover.vue')
        },
        {
          path: '/css/flash',
          name: 'flash',
          component: () => import(/* webpackChunkName: "flash" */ './components/CssComponnets/Flash.vue')
        },
        {
          path: '/css/loading',
          name: 'loading',
          component: () => import(/* webpackChunkName: "loading" */ './components/CssComponnets/Loading.vue')
        },
        {
          path: '/css/sticky',
          name: 'sticky',
          component: () => import(/* webpackChunkName: "sticky" */ './components/CssComponnets/Sticky.vue')
        },
        {
          path: '/css/static',
          name: 'static',
          component: () => import(/* webpackChunkName: "static" */ './components/CssComponnets/Static.vue')
        },
        {
          path: '/css/scroll',
          name: 'scroll',
          component: () => import(/* webpackChunkName: "scroll" */ './components/CssComponnets/Scroll.vue')
        },
        {
          path: '/css/cursor',
          name: 'cursor',
          component: () => import(/* webpackChunkName: "cursor" */ './components/CssComponnets/Cursor.vue')
        },
        {
          path: '/css/shadow',
          name: 'shadow',
          component: () => import(/* webpackChunkName: "shadow" */ './components/CssComponnets/Shadow.vue')
        },
        {
          path: '/css/center',
          name: 'center',
          component: () => import(/* webpackChunkName: "center" */ './components/CssComponnets/Center.vue')
        },
        {
          path: '/css/bottom',
          name: 'bottom',
          component: () => import(/* webpackChunkName: "bottom" */ './components/CssComponnets/BottomSticky.vue')
        },
        {
          path: '/css/glass',
          name: 'glass',
          component: () => import(/* webpackChunkName: "glass" */ './components/CssComponnets/Glass.vue')
        },
        {
          path: '/css/tab',
          name: 'tab',
          component: () => import(/* webpackChunkName: "tab" */ './components/CssComponnets/Tab.vue')
        },
      ]
    }
  ],
});
