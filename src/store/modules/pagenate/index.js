import axios from "axios"
import emiter from '@/utils/emiter'

export default {
  namespaced: true,
  state: {
    pageArray: []
  },
  mutations: {
    UPDATE_PAGE_ARRAY (state, payload) {
      state.pageArray = payload
    }
  },
  actions: {
    async pageApi ({ commit }) {
      try {
        emiter.emit('start:spinner')
        const response = await axios.get('http://sample.bmaster.kro.kr/contacts')
        console.log(response.data)
        commit('UPDATE_PAGE_ARRAY', response.data.contacts)
        emiter.emit('end:spinner')
      }
      catch (err) {
        console.log(err)
      }
    }
  },
}