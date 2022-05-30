<template>
  <div class="container">
    <h5>Home</h5>
    <div>toRefs:{{ count }}</div>
    <button @click="count++">Add</button>
  </div>
</template>

<script>
import { useCount } from '@/composables/count'

export default {
  setup() {
    const { count } = useCount()

    return {
      count
    }
  }
}
</script>

<style>

</style>