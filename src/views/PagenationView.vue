<template>
  <div>
    <h1>TABLE PAGINATION</h1>
    <paginated-list :list-array="pageArray" />
  </div>
</template>

<script>
import axios from 'axios'
import PaginatedList from '../components/PaginatedList.vue'
import emiter from '@/utils/emiter'
import { ref } from '@vue/reactivity'
export default {
  name: 'simple-pagination',
  components: {
    PaginatedList
  },
  setup() {
    const pageArray = ref([])

    const createdApi = async () => {
      try {
        emiter.emit('start:spinner')
        const response = await axios.get('http://sample.bmaster.kro.kr/contacts')
        pageArray.value = response.data.contacts;
        emiter.emit('end:spinner')
      }
      catch(err) {
        console.log(err);
      }
    }
    createdApi();

    return {
      pageArray
    }
  }
}
</script>

<style scoped>
h1 {
  color: #454545;
  text-align: center;
  margin-bottom: 0;
}
</style>