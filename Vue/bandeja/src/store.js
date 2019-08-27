import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculasHome: [],
    peliculasAbout: [],
    menu: false,
  },
  mutations: {
    addHome (state, item) {
     state.peliculasHome.push(item)
   },
   addAbout (state, item) {
    state.peliculasAbout.push(item)
  },
  removeHome (state, item) {
    state.peliculasHome.splice(state.peliculasHome.indexOf(item), 1)
  },
  removeAbout (state, item) {
    state.peliculasAbout.splice(state.peliculasAbout.indexOf(item), 1)
  },

 },
  actions: {
    addHome ({ state, commit }, obj ) {
      commit('addHome', obj)
      commit('removeAbout', obj)
    },
    addAbout ({ state, commit }, obj ) {
      commit('addAbout', obj)
      commit('removeHome', obj)
      
    },
  }
})
