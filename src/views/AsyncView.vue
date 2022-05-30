<template>
  <div class="wrap">
    <div class="login">
      {{  }}
      <input-field 
        v-model="form.mailAddress"
        label="E-mail"
        :subjectError="subjectError"
        type="email"
        />
      <input-field 
        v-model="form.password" 
        label="Password"
        :subjectError="subjectError"
        type="password"
      />
      <div class="button-wrapper col-6">
        <button 
          type="button"
          class="btn btn-primary"
          @click="loginUser">Login</button>
      </div>
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
import { computed, ref } from 'vue'
import AsyncTable from '../components/AsyncTable.vue'
import InputField from '../components/atom/TodoInput.vue'
import { useStore } from 'vuex'

export default {
  components: {
    AsyncTable,
    InputField,
  },
  setup() {
    const store = useStore()
    const users = computed(() => store.state.async.users)
    const todos = computed(() => store.state.async.todos)
    const company = computed(() => store.state.async.company)
    const address = computed(() => store.state.async.address)
    const subjectError = ref('')
    const form = ref({
      mailAddress: "",
      password: "",
    });

    const loginUser = () => {
      store.dispatch('async/loginUser');
    }

   return {
      loginUser,
      users,
      todos,
      company,
      address,
      form,
      subjectError
    }
  }
}
</script>

<style scoped>
.wrap {
  padding: 38px;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 624px;
  /* height: calc(100vh - 108px); */
  margin: 0 auto;
}
  .form {
    width: inherit;
  }
  .title {
    font-size: 20px;
    color: black;
    text-align: center;
  }
  label {
    font-family: arial, sans-serif;
    font-size: 18px;
    color: #212529;
    font-weight: 500;
  }
  input[type="text"],
  input[type="password"] {
    margin: 5px 0;
  }
  .btn {
    width: 100%;
    border-radius: 8px;
  }
  .button-wrapper {
    padding:20px 0;
  }
</style>