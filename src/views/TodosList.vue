<template>
  <div class="container">
    <h2>To-do List</h2>
    <TodoSimpleForm 
      :todos="todos"
      @add-todo="addTodo"
    />
    <div v-if="!todos.length">추가된 Todo가 없습니다</div>
    <TodoList 
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import TodoSimpleForm from '../components/TodoSimpleForm.vue'
import TodoList from '../components/TodoList.vue'
import { ref } from 'vue'

export default {
  components: {
    TodoSimpleForm,
    TodoList
  },
  setup() {
    const todos = ref([])

    const deleteTodo = (index) => {
      todos.value.splice(index, 1)
    }
     const toggleTodo = (index) => {
       todos.value[index].completed = !todos.value[index].completed
     }

    const addTodo = (todo) => {
      todos.value.push(todo)
    }

    return {
      todos,
      deleteTodo,
      addTodo,
      toggleTodo,
    }
  }
}
// style bind
// :style="todo.completed ? todoStyle : ''"
// const todoStyle = {
//   textDecoration: 'line-through',
//   color: 'gray'
// }
</script>

<style scoped>

</style>