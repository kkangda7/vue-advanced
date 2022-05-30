<template>
  <div>
    <div v-if="loading">
      Loading...
    </div>
    <form v-else @submit.prevent="onSave">
      <div class="row">
        <todo-input 
          :subjectError="subjectError"
          label="Subject"
          :modelValue="todo.subject"
          v-model="todo.subject"
          type="text"
        />
        <div v-if="editing" class="col-6">
          <div class="form-group">
            <label>Status</label>
            <div>
              <button 
                class="btn"
                type="button"
                :class="todo.completed ? 'btn-success' : 'btn-danger'"
                @click="toggleTodoStatus"
              >
                {{ todo.completed ? 'Completed' : 'Incompleted' }}
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="form-group">
            <label>Body</label>
            <textarea 
              v-model="todo.body" 
              class="form-control" 
              cols="30" 
              rows="10" />
          </div>
        </div>
      </div>
      <button 
        type="submit" 
        class="btn btn-primary me-2"
        :disabled="todoUpdate"
      >
        {{ editing ? 'Update' : 'Create' }}
      </button>
      <button 
        class="btn btn-outline-dark"
        @click="moveToTodoListPage"
      >
      Cancle
      </button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import _ from 'lodash'
import axios from '@/axios';
import TodoInput from '@/components/atom/TodoInput.vue'
import { useToast } from '@/composables/modalToast'

export default {
  components: {
    TodoInput
  },
  props: {
    editing: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const todo = ref({
      subject: '',
      completed: false,
      body: ''
    })
    const originalTodo = ref(null)
    const loading = ref(false)    
    const todoId = route.params.id
    const subjectError = ref('')

    const { showToast,
            toastMessage,
            toastAlertType,
            triggerToast
          } = useToast()

    const getTodo = async() => {
      loading.value = true
      try {
        const res = await axios.get(`todos/${todoId}`)
        todo.value = {...res.data}
        originalTodo.value = {...res.data}
        loading.value = false
      }
      catch (err) {
        loading.value = false
        console.log(err)
        triggerToast('Something went wrong','danger')
      }
    }
    if(props.editing) {
       getTodo();
    }
   

    const todoUpdate = computed(()=> {
      return _.isEqual(todo.value, originalTodo.value)
    })

    const toggleTodoStatus = async() => {
      todo.value.completed = !todo.value.completed 
    }
    const moveToTodoListPage = () => {
      router.push({
        name: 'todolist'
      })
    }
    const onSave = async() => {
      subjectError.value = ''
      if(!todo.value.subject){
        subjectError.value = 'Subject is required';
        return;
      }
      try {
        let res;
        const data = {
        subject: todo.value.subject,
        completed: todo.value.completed,
        body: todo.value.body
        }
        if (props.editing) {
          res = await axios.put(`todos/${todoId}`,data)
          originalTodo.value = {...res.data}
        } else {
          res = await axios.post('todos',data)
          todo.value.subject = ''
          todo.value.body = ''
        }
         
         const message = 'Successfully' + (props.editing ? 'Updated!': 'Saved!')
         triggerToast(message)
         if(!props.editing) {
            router.push('/todolist')
         }
      }
      catch (err) {
        console.log(err)
        triggerToast('Something went wrong','danger')
      }
    }

    return {
      todo,
      loading,
      toggleTodoStatus,
      moveToTodoListPage,
      onSave,
      todoUpdate,
      showToast,
      toastMessage,
      toastAlertType,
      subjectError,
    }
  }
}
</script>
