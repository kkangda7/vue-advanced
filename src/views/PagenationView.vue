<template>
  <div>
    <h1>TABLE PAGINATION</h1>
    <paginated-list :list-array="pageArray" />
  </div>
</template>

<script>
import PaginatedList from '../components/PaginatedList.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
export default {
  name: 'simple-pagination',
  components: {
    PaginatedList
  },
  setup() {
    const store = useStore()
    const pageArray = computed(() => store.state.pagenate.pageArray)

    onMounted (() => {
      store.dispatch('pagenate/pageApi')
    })

    return {
      pageArray,
      store
    }
  }
}
</script>

<style scoped>
h1 {
  color: #454545;
  text-align: center;
  margin-bottom: 0;
  margin-top: 30px;
}
</style>