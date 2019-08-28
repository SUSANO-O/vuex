import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculasHome: [],
    peliculasAbout: [],
    peliculasArchivo: [],
    menu: false,
  },
  mutations: {
    addHome(state, item) {
      state.peliculasHome.push(item)
    },
    addAbout(state, item) {
      state.peliculasAbout.push(item)
    },
    addArchivo(state, item) {
      state.peliculasArchivo.push(item)
    },
    removeHome(state, item) {
      state.peliculasHome.splice(state.peliculasHome.indexOf(item), 1)
    },
    removeAbout(state, item) {
      state.peliculasAbout.splice(state.peliculasAbout.indexOf(item), 1)
    },
    removeArchivo(state, item) {
      state.peliculasArchivo.splice(state.peliculasArchivo.indexOf(item), 1)
    },


  },
  actions: {
    addHome({
      state,
      commit
    }, obj) {
      commit('addHome', obj)
      commit('removeAbout', obj)

    },
    addAbout({
      state,
      commit
    }, obj) {
      commit('addAbout', obj)
      commit('removeHome', obj)

    },
    addArchivo({
      state,
      commit
    }, obj) {
      commit('addArchivo', obj)
      commit('removeHome', obj)
    },
    removeArchivo({
      state,
      commit
    }, obj) {
      commit('removeArchivo')
    }

  }
})