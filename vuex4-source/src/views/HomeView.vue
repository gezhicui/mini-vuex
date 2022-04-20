<template>
  <div class="home">
    <h1>我的年龄：{{$store.age}}</h1>
    <!-- <h1>我的年龄：{{age}}</h1>
    <h1>我gg的年龄：{{$store.getters.changeAge}}</h1>
    <button @click="addAge">同步修改</button>
    <button @click="ayAge">异步修改</button> -->
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
// @ is an alias to /src
import { useStore } from '@/vuex'
export default {
  name: 'HomeView',
  setup() {
    let store = useStore()
    console.log(store);
    function addAge() {
      store.commit('addAge', 50)
    }
    function ayAge() {
      store.dispatch('ayAge', 50)
    }
    return {
      age: computed(() => {
        return store.state.age
      }),
      addAge,
      ayAge
    }
  }
}
</script>
