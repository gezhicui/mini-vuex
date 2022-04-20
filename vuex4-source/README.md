# vuex-source 目录结构

vuex 实现在 src/vuex 下

-index.js：vuex 实现，包含 vuex 实现类、install 方法、createStore 实现、useStore 实现

-utils.js：工具类，提供循环对象每个属性的工具方法

# 实现原理

- 在 vue3 的 setup()函数里面，没有 this，所以我们要通过 useStore 拿到 store 实例

- useStore 是通过 provide inject 这种组件间传值方式，在根组件挂载了数据，这样在所有子组件中就能用到数据

- createStore 用于创建一个 vuex 实例，让 vue 在注册的时候能调用 vuex 的 install 方法

- state 使用 reactive，把用户传入的 state 变成响应式数据

总的来说，vuex 的核心原理还是比较简单的，希望之后能看懂官方源码
