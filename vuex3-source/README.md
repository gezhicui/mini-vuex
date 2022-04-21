# vuex3-source

vuex3 主要实现原理

- `src/store.js`文件，中导入 Vuex，然后 Vue.use 调用 Vuex 的 install 方法，install 方法在根节点创建时的 beforeCreate 生命周期，
  把 store 实例挂载到 vue 原型上，这样每个子组件都能使用$store

- 用户定义了 store 参数，并 new 了 Vuex 的实例，暴露给 main.js,创建实例时，vuex 做了以下几件事：

1、获取用户配置，把 actions 处理，传入 state，然后把 state 和 actions 处理完的对象作为 vue 的数据和计算属性，new 一个 Vue(this.vm)存放（感觉就是事件总线）
2、定义 get 方法，用户获取 state 时返回 this.vm(事件总线 Vue 实例)
3、定义 get 方法，用户获取 getters 时返回 this.vm(事件总线 Vue 实例)
4、定义 commit 方法，处理用户配置传入的 mutations 传入 state
5、定义 dispatch 方法，处理用户配置传入的 actions 传入 store 实例

- main.js 中创建 vue 实例，创建根实例时触发 beforeCreate 生命周期， 把 store 实例挂载到 vue 原型上，大功告成
