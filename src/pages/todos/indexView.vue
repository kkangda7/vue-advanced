<template>
  <div class="container">
    <div class="d-flex justify-content-between mb-3">
      <h2>To-do List</h2>
      <button 
        class="btn btn-primary"
        @click="moveToCreatePage"
      >
        create Todo
      </button>
    </div>
    
    <input 
      class="form-control"
      type="text"
      v-model="searchText"
      placeholder="Search"
      @keyup.enter="searchTodo"
    >
    <hr />
    <div style="color : red">{{ error }}</div>
    <div v-if="!todos.length">추가된 Todo가 없습니다</div>
    <TodoList 
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
    <hr />
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li 
          v-if="currentPage !== 1"
          class="page-item">
          <a 
            class="page-link" 
            @click="getTodos(currentPage - 1)"
          >Previous
          </a>
        </li>
        <li 
          class="page-item" 
          :class="currentPage === page ? 'active' : ''"
          v-for="page in numberOfPage" 
          :key="page">
          <a 
            class="page-link"
            @click="getTodos(page)"
          >{{ page }} 
          </a>
        </li>
        <li 
          v-if="currentPage !== numberOfPage"
          class="page-item">
          <a 
            class="page-link" 
            @click="getTodos(currentPage +1)"
          >Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import axios from '@/axios'
import { ref, computed, watch } from 'vue'
import { useToast } from '@/composables/modalToast'
import { useRouter } from 'vue-router'

export default {
  components: {
    TodoList,
  },
  setup() {
    const todos = ref([])
    const searchText = ref('')
    const error = ref('')
    const numberOfTodos = ref(0)
    const limit = 5;
    const currentPage = ref(1)
    const router = useRouter()

    const moveToCreatePage = () => {
      router.push('/todolist/create')
    }

    const { 
            showToast,
            toastMessage,
            toastAlertType,
            triggerToast
          } = useToast()
    
    const numberOfPage = computed(()=> {
      return Math.ceil(numberOfTodos.value/limit)
    })

    const getTodos = async(page = currentPage)=> {
      currentPage.value = page;
      try {
        const res = await axios.get(`todos?_sort=id&_order=desc&subject_like=${searchText.value}&_page=${page}&_limit=${limit}`)
        numberOfTodos.value = res.headers['x-total-count']
        todos.value = res.data
      }
      catch (err) {
        console.log(err)
        error.value = 'Someting went wrong.'
        triggerToast('Something went wrong','danger')
      }
    }
    getTodos();
    // computed를 사용한 서치
    // const filteredTodos = computed(()=> {
    //   if(searchText.value) {
    //     return todos.value.filter(todo => {
    //       return todo.subject.includes(searchText.value)
    //     })
    //   }
    //   return todos.value
    // })
    let timeout = null
    const searchTodo = () => {
      clearTimeout(timeout)
      getTodos(1)
    }
    watch(searchText,()=>{
      clearTimeout(timeout)
      timeout = setTimeout(()=> {
        // watch를 사용한 서치
        getTodos(1)
      },2000)
    })


    const deleteTodo = async(id) => {
      error.value = '';
      try {
      await axios.delete(`todos/${id}`)
      getTodos(1)
      // todos.value.splice(index, 1)
      }
      catch(err) {
        console.log(err)
        error.value = 'Someting went wrong.'
        triggerToast('Something went wrong','danger')
      }
    }
     const toggleTodo = async(index, checked) => {
       const id = todos.value[index].id
       try {
         await axios.patch(`todos/${id}`, {
           completed: checked
         })
         todos.value[index].completed =checked
       } catch(err) {
         console.log(err)
         triggerToast('Something went wrong','danger')
       }
     }

    const addTodo = async(todo) => {
      error.value = '';
      try {
        await axios.post('todos',{
        subject: todo.subject,
        completed: todo.completed
      })
      getTodos(1)
      // todos.value.push(res.data)
      } 
      catch(err) {
        console.log(err)
        error.value = 'Someting went wrong.'
        triggerToast('Something went wrong','danger')
      }
    }

    return {
      todos,
      deleteTodo,
      addTodo,
      toggleTodo,
      searchText,
      error,
      numberOfPage,
      currentPage,
      getTodos,
      searchTodo,
      toastMessage,
      toastAlertType,
      showToast,
      moveToCreatePage
    }
  }
}

</script>

<style scoped>
a {
  cursor: pointer;
}
</style>