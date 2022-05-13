<template>
  <div>
    <div class="card mt-2" v-for="(todo,index) in todos" :key="index">
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input 
            type="checkbox"
            class="form-check-input"
            :value="todo.completed"
            @change="toggleTodo(index)"
          >
          <label 
            :class="{ todo: todo.completed }"
            class="form-check-lable"
          >
          {{ todo.subject }}
          </label>
        </div>
        <div>
          <button 
            class="btn btn-danger"
            @click="deleteTodo(index)"
          >Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  emits: ['toggle-todo','delete-todo'],
  setup(_,{ emit }) {
    const toggleTodo = (index) => {
      emit('toggle-todo', index)
    }
    const deleteTodo = (index) => {
      emit('delete-todo', index)
    }

    return {
      toggleTodo,
      deleteTodo
    }
  }
}
</script>

<style scoped>
 .todo {
   color: gray;
   text-decoration: line-through;
 }
</style>