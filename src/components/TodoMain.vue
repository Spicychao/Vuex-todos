<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{completed: item.done,editing: current === item.id}"
        v-for="item in list"
        :key="item.id"
      >
        <div class="view">
          <input
            @click="checkOrNot({id:item.id,done:item.done})"
            class="toggle"
            type="checkbox"
            :checked="item.done"
          >
          <label @dblclick="showEdit(item.id)">{{item.name}}</label>
          <button class="destroy" @click="del({id:item.id})"></button>
        </div>
        <input class="edit" @keyup.enter="changeName(item.id,$event)" :value="item.name">
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      current: -1
    }
  },
  computed: {
    ...mapState(['list']),
    isAll: {
      get () {
        return this.list.every(item => item.done === true)
      },
      set (value) {
        this.$store.commit('changeAll', { done: value })
      }
    }
  },
  methods: {
    ...mapMutations(['del', 'checkOrNot']),
    showEdit (id) {
      this.current = id
    },
    changeName (id, e) {
      this.$store.commit('changeName', { id, name: e.target.value })
      this.current = -1
    }
  }
}
</script>

<style lang='less'>
</style>
