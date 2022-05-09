<template>
  <div class="wrap">
    <div class="login">
      <button @click="loginUser">login</button>
    </div>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>company</th>
        <th>address</th>
      </tr>
      <tr>
        <td>{{ users.id }}</td>
        <td>{{ users.name }}</td>
        <td>{{ users.username }}</td>
        <td>{{ users.email }}</td>
        <td>{{ company.name }} </td>
        <td>{{ address.street }} </td>
      </tr>
    </table>
    <br>
    <table>
      <tr>
        <th>userId</th>
        <th>title</th>
        <th>completed</th>
      </tr>
      <tr v-for="todo in todos" :key="todo">
        <td>{{ todo.userId }}</td>
        <td>{{ todo.title }} </td>
        <td>{{ todo.completed }} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
export default {
  setup() {
    const users = ref([])
    const todos = ref({})
    const company = ref({})
    const address = ref({})
    // const loginUser = () => {
    //   axios.get('http://jsonplaceholder.typicode.com/users/1')
    //   .then((response)=> {
    //     users.value = response.data
    //     if(response.data.id === 1) {
    //       axios.get('http://jsonplaceholder.typicode.com/todos')
    //       .then((response)=> {
    //         console.log(response.data[1]);
    //         todos.value = response.data
    //       })
    //       .catch(error => console.log(error))
    //     }
    //   })
    //   .catch(error => console.log(error))
    // }
    const loginUser = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users/1');
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
;    return {
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>