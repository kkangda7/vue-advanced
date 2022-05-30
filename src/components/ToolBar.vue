<template>
  <div class="header">
    <img src="@/assets/heart.svg" alt="site logo">
    <router-link to="/news">news</router-link> |
    <router-link to="/jobs">jobs</router-link> |
    <router-link to="/ask">ask</router-link> |
    <router-link to="/seach">seach</router-link> |
    <router-link to="/pagenation">pagenation</router-link> |
    <router-link to="/todolist">todo-list</router-link> |
    <router-link to="/async">async</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header {
    color: #fff;
    background-color: #0d6efd;
    display: flex;
    padding: 8px 12px;
  }
  .header a {
    color: #fff;
  }
  .header .router-link-exact-active {
    color: red;
  }
  a {
    padding-right: 10px;
    text-decoration: none;
  }
  a:not(:nth-child(1)) {
    padding-left: 10px;
  }
  img {
    width: 20px;
  }

</style>