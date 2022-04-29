<template>
  <div>
    <user-profile  :info="userInfo" >
      <template v-slot:username>
        {{ userInfo.id }}
      </template>
      <template v-slot:time>
        <span>{{ 'Joined ' + userInfo.created }}, </span>
      </template>
      <template v-slot:karma>
        <span>{{ userInfo.karma }}</span>
      </template>
    </user-profile>
  </div>
</template>

<script>

import UserProfile from '../components/UserProfile.vue'
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
  
export default {
  components: {
    UserProfile
  },
    setup() {
    const route = useRoute();
    const store = useStore();
    const userInfo = computed(()=> {
      return store.state.user
    })
    const createApiUser = () => {
      const userName = route.params.id
      store.dispatch('FETCH_USER',userName)
    }


    createApiUser();

    return {
      userInfo
    }
  }
}
</script>
