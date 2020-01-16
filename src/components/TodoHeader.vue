<template>
  <header class="header">
    <h1>todos</h1>
    <input @keyup.enter="add" v-model="name" class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    add () {
      if (this.name.trim().length === 0) return
      this.$store.commit('add', { name: this.name })
      this.name = ''
    }
  }
}
</script>

<style lang='less'>
</style>
