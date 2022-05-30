import axios from 'axios';
import emiter from '@/utils/emiter'

export default {
   namespaced: true,
   state:{
     users: {},
     todos: [],
     company: {},
     address: {},

   },
   mutations: {
     UPDATE_USER (state, payload) {
      state.users = payload
     },
     UPDATE_TODOS (state, payload) {
      state.todos = payload
     },
     UPDATE_COMPANY (state, payload) {
      state.company = payload
     },
     UPDATE_ADDRESS (state, payload) {
      state.address = payload
     }
   },
   actions: {
     async loginUser({ commit }) {
       try {
        emiter.emit('start:spinner')
        const response = await axios.get('http://jsonplaceholder.typicode.com/users/1')
        commit('UPDATE_USER', response.data)
        commit('UPDATE_COMPANY', response.data.company)
        commit('UPDATE_ADDRESS', response.data.address)
        const res = await axios.get('http://jsonplaceholder.typicode.com/todos')
        commit('UPDATE_TODOS', res.data)
        setTimeout(() => {
          emiter.emit('end:spinner') 
        }, 1000);
        
       }
       catch (err) {
         console.log(err)
       }
     }
   }
}