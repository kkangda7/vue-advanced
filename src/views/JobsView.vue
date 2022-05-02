<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import ListItem from '../components/ListItem.vue';
import emiter from '@/utils/emiter';

export default {
  components: { ListItem },
    setup() {
      onMounted(()=> {
        emiter.emit('end:spinner')
      }) 
  }
}
</script>

<style>
</style>