<template>
  <div>
    <!-- event modifiers .prevent >> 리로딩 방지 -->
    <form
      @submit.prevent="onSubmit"
    > 
      <div class="d-flex" >
        <div class="flex-grow-1 me-2">
          <input 
            class="form-control"
            type="text" 
            v-model="todo"
            placeholder="Type new To-do"
          >
        </div>
        <div>
          <button 
            class="btn btn-primary"
            type="submit"
          >Add</button>
        </div>
      </div>
      <div v-show="hasError" style="color : red">
        This field cannot be empty
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits:['add-todo'],
  setup(_,{emit}) {
    const todo = ref('')
    const hasError = ref(false)
    const onSubmit = () => {
      console.log(todo.value);
      if(todo.value == '') {
          hasError.value = true
      } else {
        emit('add-todo',{
          id: Date.now(),
          subject: todo.value,
          completed: false
        })
        hasError.value = false 
        todo.value = '';
      }
    }

    return {
      onSubmit,
      todo,
      hasError
    }
  }

}
</script>

<style>

</style>