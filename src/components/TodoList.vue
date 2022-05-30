<template>
  <div>
    <list-view :items="todos">
      <template v-slot:default="{ item, index }">
        <div 
          class="card-body p-2 d-flex align-items-center"
          style="cursor: pointer"
          @click="moveToPage(item.id)"
        >
          <div class="form-check flex-grow-1">
            <input 
              type="checkbox"
              class="form-check-input"
              :checked="item.completed"
              @change="toggleTodo(index, $event)"
              @click.stop
            >
            <label 
              :class="{ todo: item.completed }"
              class="form-check-lable"
              style="cursor: pointer"
            >
            {{ item.subject }}
            </label>
          </div>
          <div>
            <button 
              class="btn btn-danger"
              @click.stop="openModal(item.id)"
            >Delete</button>
          </div>
        </div>
      </template>
    </list-view>
    <teleport to='#modal'>
      <modal-view 
        v-if="showModal" 
        @close="closeModal"
        @delete="deleteTodo()"
      ></modal-view>
    </teleport>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import ModalView from './atom/DeleteModal.vue';
import ListView from '@/components/ListView.vue'

export default {
  components: {
    ModalView,
    ListView
  },
  props: {
    todos: {
      type: undefined,
    }
  },
  emits: ['toggle-todo','delete-todo'],
  setup(_,{ emit }) {
    const router = useRouter()
    const showModal = ref(false)
    const todoDeleteId = ref(null)

    const openModal = (id) => {
      todoDeleteId.value = id
      showModal.value = true
    }
    const closeModal = () => {
      todoDeleteId.value = null
      showModal.value = false
    }

    const toggleTodo = (index, event) => {
      emit('toggle-todo', index, event.target.checked)
    }
    const deleteTodo = () => {
      emit('delete-todo', todoDeleteId.value)
      showModal.value = false
    }
    const moveToPage = (id) => {
      router.push(`/todolist/${id}`)
    }

    return {
      toggleTodo,
      deleteTodo,
      moveToPage,
      showModal,
      openModal,
      closeModal
    }
  }
// style bind
// :style="todo.completed ? todoStyle : ''"
// const todoStyle = {
//   textDecoration: 'line-through',
//   color: 'gray'
// }
}
</script>

<style scoped>
 .todo {
   color: gray;
   text-decoration: line-through;
 }
</style>