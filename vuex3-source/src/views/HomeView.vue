<template>
  <div class="home">
    <h1>myage:{{$store.state.age}}</h1>
    <button @click="$store.state.age = 39">修改</button>
    <h1>mygg age {{$store.getters.changeAge}}</h1>
    <button @click="addAge">同步修改</button>
    <button @click="ayAge">异步修改</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  created() {
    console.log(this.$store.state.age);
  },
  methods: {
    addAge() {
      this.$store.commit('addAge', 50)
    },
    ayAge() {
      this.$store.dispatch('ayAge', 50)
    }
  }
}
</script>
