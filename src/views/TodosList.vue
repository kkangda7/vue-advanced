<template>
  <div class="vue">
    <ul class="tabs">
      <li @click="change('1')" :class="{'active': isActive === '1'}">Home</li>
      <li @click="change('2')" :class="{'active': isActive === '2'}">Todos</li>
      <li @click="change('3')" :class="{'active': isActive === '3'}">タブ3</li>
    </ul>
    <ul class="contents">
      <li v-if="isActive === '1'">
        <home-view></home-view>
      </li>
      <li v-else-if="isActive === '2'">
        <todo-view></todo-view>
      </li>
      <li v-else-if="isActive === '3'">
      </li>
    </ul>
    <transition name="slide">
      <modal-toast 
        v-if="showToast"
        :message="toastMessage" 
        :type="toastAlertType"
      />
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import HomeView from '@/pages/indexView.vue'
import TodoView from '@/pages/todos/indexView.vue'
import ModalToast from '@/components/atom/modalToast.vue'
import { useToast } from '@/composables/modalToast'

export default {
  components: {
    TodoView,
    HomeView,
    ModalToast
  },
  setup(){
    const isActive = ref('2')
    const change = (num) => {
      isActive.value = num
    }
    const { showToast,
            toastMessage, 
            toastAlertType, 
            triggerToast  } = useToast()


    return {
      isActive,
      change,
      showToast,
      toastMessage,
      toastAlertType,
      triggerToast,
    }
  }
}
</script>

<style scoped>
 ul{
    margin: 10px 10px 0 10px;
    padding: 0;
  }
  li{
    list-style: none;
  }
  .tabs {
    overflow: hidden;
  }
  .tabs li,
  .tabs label {
    float: left;
    padding: 10px 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: .3s;
  }
  .tabs li:not(:first-child),
  .tabs label:not(:first-of-type) {
    border-left: none;
  }
  .tabs li.active,
  .tabs :checked + label {
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
    cursor: auto;
  }
  .contents{
    overflow: hidden;
    margin-top: -1px;
  }
  .contents li {
    width: inherit;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .slide-enter-acrive,
  .slide-leave-acrive {
    transition: all 0.5s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .slide-enter-to,
  .slide-leave-from {
    opacity: 1;
    transform: translateY(0px);
  }
</style>