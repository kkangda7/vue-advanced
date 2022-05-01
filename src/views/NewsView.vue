<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import ListItem from '../components/ListItem.vue';
import emmiter from '../utils/emiter'


export default {
  components: { ListItem },
  setup() {
    const store = useStore();
    const createApiNews = (()=> {
      emmiter.emit('start:spinner');
      setTimeout(() => {
      store.dispatch('FETCH_NEWS')
      .then(()=> {
        emmiter.emit('end:spinner')
      })
      .catch((err) => {
      console.log(err)
      })
      },1000)
    })
    createApiNews();

  }
}
</script>
<style>
</style>
