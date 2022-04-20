import { reactive, inject } from "vue";
import { foreach } from './utils'
//给storekey一个默认值
let storeKey = 'store'
class Store {
  constructor(options) {

    //state响应式
    this.state = reactive(options.state)

    //getters 
    let getters = options.getters //
    this.getters = {}
    foreach(getters, (key, value) => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return value(this.state)
        }
      })
    })

    //mutation
    let mutations = options.mutations
    this.mutations = {}
    foreach(mutations, (key, value) => {
      this.mutations[key] = (data) => {
        value(this.state, data)
      }
    })

    //actions
    let actions = options.actions
    this.actions = {}
    foreach(actions, (key, value) => {
      this.actions[key] = (data) => {
        value(this, data)
      }
    })
  }

  commit = (key, data) => {
    this.mutations[key](data)
  }
  dispatch = (key, data) => {
    this.actions[key](data)
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
export function createStore(options) {
  console.log(options);
  return new Store(options)
}

//在你使用的组件中得到一个store
export function useStore(key = null) {
  return inject(key || storeKey)
}