<template>
  <div id="seach">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search title.."/>
    </div>
    <div class="wrapper">
      <div class="card" v-for="post in filteredList" :key="post">
        <a v-bind:href="post.link" target="_blank">
          <img v-bind:src="post.img"/>
          <small>posted by: {{ post.author }}</small>
          {{ post.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'


  class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

export default {
  setup() {
    const search = ref('')
    const postList = ref([
      new Post(
        'Vue.js', 
        'https://vuejs.org/', 
        'Chris', 
        'https://vuejs.org//images/logo.png'
      ),
      new Post(
        'React.js', 
        'https://facebook.github.io/react/', 
        'Tim',
        'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
      ),
      new Post(
        'Angular.js', 
        'https://angularjs.org/', 
        'Sam', 
        'https://angularjs.org/img/ng-logo.png'
      ),
      new Post(
        'Ember.js', 
        'http://emberjs.com/', 
        'Rachel',
        'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
      ),
      new Post(
        'Meteor.js', 
        'https://www.meteor.com/', 
        'Chris', 
        'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
      ),
      new Post(
        'Aurelia', 
        'http://aurelia.io/', 
        'Tim',
        'https://cdn.auth0.com/blog/aurelia-logo.png'
      ),
      new Post(
        'Node.js', 
        'https://nodejs.org/en/', 
        'A. A. Ron',
        'https://code-maven.com/img/node.png'
      ),
      new Post(
        'Pusher', 
        'https://pusher.com/', 
        'Alex', 
        'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
      ),
      new Post(
        'Feathers.js', 
        'http://feathersjs.com/', 
        'Chuck',
        'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
      ),
    ])
    const filteredList = computed(()=> {
      return postList.value.filter(post => {
        return post.title.toLowerCase().includes(search.value.toLowerCase())
      })
    })  

    
    return {
      search,
      postList,
      filteredList,
    }
  }
}

</script>

<style scoped>


div#seach {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.search-wrapper {
  padding-top: 30px;
  width: 444px;
  position: relative;
}
.wrapper {
  display: flex;
  max-width: 444px;
  flex-wrap: wrap;
  padding-top: 12px;
}
input {
  width: inherit;
  padding: 4px 12px;
  color: rgba(0,0,0,.70);
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 8px;
  transition: .15s all ease-in-out;
  background: white;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 124px;
  margin: 12px;
  transition: .15s all ease-in-out;
}
a {
  text-decoration: none;
  padding: 12px;
  color: #03A9F4;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  height: 100px;
}
small {
  font-size: 10px;
  padding: 4px;
}

label {
  position: absolute;
  font-size: 12px;
  color: rgba(0,0,0,.50);
  top: 8px;
  left: 12px;
  z-index: -1;
  transition: .15s all ease-in-out;
}

.hotpink {
  background: hotpink;
}
.green {
   background: green;
}
.box {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0,0,0,.12);
}
</style>