<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import ListItem from '../components/ListItem.vue';
import emiter  from '../utils/emiter'

export default {
  components: { ListItem },
    setup() {
    const store = useStore();
    const createApiJobs = (()=> {
      emiter.emit('start:spinner')
      setTimeout(()=>{
        store.dispatch('FETCH_JOBS')
        .then(()=> {
          emiter.emit('end:spinner')
        })
        .catch(err => console.log(err))
      },1000)
      
    })
    createApiJobs();

  }
}
</script>

<style>
</style>