let Vue

class Store {
  constructor(options) {

    //处理state和getter
    let computed = {}
    Object.keys(options.getters).forEach(key => {
      let fn = options.getters[key];
      computed[key] = function () {
        return fn(options.state);
      }
    })

    // new 一个Vue实例，让state和getters挂在该实例上，使其响应化
    this._vm = new Vue({
      data: options.state,
      computed: computed
    })

    //处理mutations和actions
    this.mutations = options.mutations
    this.actions = options.actions
  }

  // 当使用this.$store.getters的时候，指向_vm
  get getters() {
    return this._vm
  }

  // 当使用this.$store.state的时候，指向_vm
  get state() {
    console.log(this._vm);
    return this._vm;
  }

  //定义commit和dispatch 一定要用箭头函数，this指向对象实例
  commit = (type, payload) => {
    //type 是用户options中定义的mutauion方法，给用户方法传入state和参数
    let mutationsFn = this.mutations[type]
    mutationsFn(this.state, payload)
  }
  dispatch = (type, payload) => {
    //type 是用户options中定义的action方法，给用户方法传入对象实例和参数，对象实例能解构出commit，就可以在action返回执行结果时调用commit
    let actionsFn = this.actions[type]
    actionsFn(this, payload)
  }
}

// 注册插件的时候调用的方法
function install(_Vue) {
  Vue = _Vue;
  // 混入，为了可以在所有Vue实例中通过this.$store访问store实例
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

// 导出的vuex
export default {
  // store构造函数
  Store,
  // 注册插件调用的方法
  install
}
