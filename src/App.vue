<template>
  <div>
    <tool-bar></tool-bar>
   <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
      <loading-spinner :loading="loadingStaters"></loading-spinner>
    </router-view>
  </div>
</template>

<script>
import ToolBar from "../src/components/ToolBar.vue"
import LoadingSpinner from "./components/LoadingSpinner.vue"
import emitter from "../src/utils/emiter"
import { ref } from '@vue/reactivity'

export default {
  components: { 
    ToolBar,
    LoadingSpinner,
  },
  setup() {
    const loadingStaters = ref(false)
    const startSpinner = () => {
      loadingStaters.value = true
    }
    const endSpinner = () => {
      loadingStaters.value = false
    };

    const createSpinner = () => {
      emitter.on('start:spinner', startSpinner )
      emitter.on('end:spinner',endSpinner)
    }
    createSpinner();

    return {
      loadingStaters
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color:#42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
