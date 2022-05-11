<template>
  <div class="wrap">
    <div class="login">
      <button @click="loginUser">login</button>
    </div>
    <async-table
      :users = "users"
      :listArray = "todos"
      :company = "company"
      :address = "address"
    ></async-table>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import AsyncTable from '../components/AsyncTable.vue'

export default {
  components: {
    AsyncTable
  },
  setup() {
    const users = ref({})
    const todos = ref([])
    const company = ref({})
    const address = ref({})

    const loginUser = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users/1');
        console.log(response.data)
        users.value = response.data
        company.value = response.data.company
        address.value = response.data.address
        if(response.data.id === 1) {
          const response = await axios.get('http://jsonplaceholder.typicode.com/todos')
          todos.value = response.data
        }
      }
      catch(err) {
        console.log(err);
      }
    }

   return {
      loginUser,
      users,
      todos,
      company,
      address
    }
  }
}
</script>

<style scoped>
.wrap {
  padding: 38px;
}
.login {
  padding: 20px;
}
button {
  width: 100%;
  height: 30px;
}
</style>