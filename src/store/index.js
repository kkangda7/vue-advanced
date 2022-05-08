import { createStore } from 'vuex'
import {
  fetchNewsList,
  fecthAskList,
  fecthJobsList,
  fetchUserList,
  fecthItemList
} from '../api/index'

export default createStore({
  state: {
    news: [],
    asks: [],
    jobs: [],
    user: {},
    item: {}
  },
  getters: {
    // fecthedItem(state) {
    //   return state.item;
    // }
  }, 
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_ASK(state, payload) {
      state.asks = payload;
    },
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_ITEM(state, payload) {
      state.item = payload
    }
  },
  actions: {
    async FETCH_NEWS(context) {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data)
      return response;
    },
    async FETCH_ASK({ commit }) {
      try {
        const response = await fecthAskList()
        commit('SET_ASK', response.data)
        return response
      }
      catch (err) {
        console.log(err)
      }
    },
    async FETCH_JOBS({ commit }) {  
      try {
        const response = await fecthJobsList()
        commit('SET_JOBS', response.data)
        return response
      }
      catch (err) {
        console.log(err)
      } 
    },
    FETCH_USER({ commit },name) {
      return fetchUserList(name)
        .then((response) => {
          commit('SET_USER', response.data)
          return response
        })
      .catch(err => {console.log(err)})
    },
    FETCH_ITEM({ commit },item ) {
      return fecthItemList(item)
        .then((response) => {
          commit('SET_ITEM', response.data)
          return response
        })
        .catch((err) => {
        console.log(err)
      })
    },
  },
  modules: {
  }
})
