<template>
  <div class="container">
    <h1>To-do page</h1>
    <todo-form :editing="true"></todo-form>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
export default {
  components: {
    TodoForm
  }
}
</script>

<style>

</style>