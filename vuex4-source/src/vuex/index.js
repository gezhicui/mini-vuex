import { inject } from "vue";

//给storekey一个默认值
let storeKey = 'store'
class Store {
  constructor() {
    this.age = 100
  }
  install(app, key) {//app相当于vue2的实例
    console.log(app);
    //兼容vue2 让每个组件实例有个$store
    app.config.globalProperties.$store = this
    // 全局提供数据
    // provide (key:value)  inject(value)
    app.provide(key || storeKey, this)
  }
}

//创建一个store
export function createStore() {
  return new Store()
}

//在你使用的组件中得到一个store
export function useStore(key = null) {
  return inject(key || storeKey)
}