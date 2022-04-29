<template>
  <div>
    <section>
      <user-profile :info="item">
        <template v-slot:username>
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </template>
        <template v-slot:time>
          {{ 'Posted ' + item.time_ago }}
        </template>
      </user-profile>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core';
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const item = computed(()=> {
      return store.state.item
    })

    const createApiItem = () => {
      const itemName = route.params.id
      store.dispatch('FETCH_ITEM',itemName)
    }
    createApiItem();

    return {
      item
    }
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>