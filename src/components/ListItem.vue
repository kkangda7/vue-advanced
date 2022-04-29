<template>
  <div>
    <ul class="news-list">
      <li 
        v-for="item in listItems" 
        :key="item" 
        class="post"
      >
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item .title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">{{ item.time_ago }} by
            <router-link 
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
            >{{ item.user }}
            </router-link> 
            <a 
              v-else
              :href="item.url"
            >{{ item.domain }}
            </a> 
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const name = route.name
   
    // eslint-disable-next-line vue/return-in-computed-property
    const listItems = computed(() => {
        if(name === 'news') {
          return store.state.news
        } else if (name === 'ask') {
          return store.state.asks
        } else if (name === 'jobs') {
          return store.state.jobs
        }
    })
    const createApiNews = () => {
      if(name === 'news') {
        store.dispatch('FETCH_NEWS');
      } else if(name === 'ask') {
        store.dispatch('FETCH_ASK');
      } else if(name === 'jobs') {
        store.dispatch('FETCH_JOBS')
      }
    }
    createApiNews();


    return {
      name,
      listItems
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee ;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>