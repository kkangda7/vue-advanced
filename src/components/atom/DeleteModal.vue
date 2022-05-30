<template>
  <div>
    <modal-view @close="$emit('close')">
      <template #header>
        <h5 class="modal-title">
          Delete-Todo
        </h5>  
      </template>
      <template #body> 
        Are you sure you want to delete the todo?
      </template>
      <template #footer> 
        <button 
          type="button" 
          class="btn btn-secondary" 
          @click="$emit('close')"
        >Close</button>
        <button 
          type="button" 
          class="btn btn-danger"
          @click="$emit('delete')"
        >Delete</button>
      </template>
    </modal-view>
  </div>
</template>

<script>
import ModalView from './ModalView.vue';

export default {
  components: {
    ModalView
  },
}
</script>

<style>

</style>