<template>
  <footer v-show="hasItem" class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{leftItem}}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a :class="{selected: sel === 'all'}" @click="choose('all')" href="#/">All</a>
      </li>
      <li>
        <a :class="{selected: sel === 'active'}" @click="choose('active')" href="#/active">Active</a>
      </li>
      <li>
        <a :class="{selected: sel === 'completed'}" @click="choose('completed')" href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button @click="clear" v-show="hasCompleted" class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['list']),
    leftItem () {
      return this.list.filter(item => item.done === false).length
    },
    hasCompleted () {
      return this.list.some(item => item.done === true)
    },
    hasItem () {
      return this.list.length > 0
    }
  },
  methods: {
    clear () {
      this.$store.commit('clear')
    },
    choose (str) {
      this.sel = str
    }
  },
  data () {
    return {
      sel: 'all'
    }
  }
}
</script>

<style lang='less'>
</style>
