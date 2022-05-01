<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import ListItem from '../components/ListItem.vue';
import emiter from '../utils/emiter'

export default {
  components: { ListItem },
  setup() {
    const store = useStore();
    const createApiAsk = (()=> {
      emiter.emit('start:spinner');
      setTimeout(()=> {
        store.dispatch('FETCH_ASK')
        .then(()=> {
           emiter.emit('end:spinner');
        })
        .catch((err)=> console.log(err))
      },1000)
     
    })
    createApiAsk();

  }
}
</script>

<style>
</style>