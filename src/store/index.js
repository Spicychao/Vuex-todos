import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [{
      id: 1,
      name: '抽烟',
      done: true
    },
    {
      id: 2,
      name: '喝酒',
      done: true
    },
    {
      id: 3,
      name: '烫头',
      done: true
    },
    {
      id: 4,
      name: '打炮',
      done: false
    }
    ]
  },
  mutations: {
    del (state, payload) {
      state.list = state.list.filter(item => item.id !== payload.id)
    },
    add (state, payload) {
      state.list.unshift({
        id: +new Date(),
        name: payload.name,
        done: false
      })
    },
    checkOrNot (state, payload) {
      console.log(state.list.find(item => item.id === payload.id))

      state.list.find(item => item.id === payload.id).done = !payload.done
    },
    changeName (state, payload) {
      state.list.find(item => item.id === payload.id).name = payload.name
    },
    changeAll (state, payload) {
      state.list.forEach(item => { item.done = payload.done })
    },
    clear (state) {
      state.list = state.list.filter(item => item.done === false)
    }
  },
  actions: {},
  modules: {}
})
