<template>
    <div class="vue">
      <ul class="tabs">
        <li @click="change('1')" :class="{'active': isActive === '1'}">タブ1</li>
        <li @click="change('2')" :class="{'active': isActive === '2'}">タブ2</li>
        <li @click="change('3')" :class="{'active': isActive === '3'}">タブ3</li>
      </ul>
      <ul class="contents">
        <li v-if="isActive === '1'">화면1</li>
        <li v-else-if="isActive === '2'">화면2</li>
        <li v-else-if="isActive === '3'">화면3</li>
      </ul>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup(){
    const isActive = ref('1')
    const change = (num) => {
      isActive.value = num
    }
    return {
      isActive,
      change
    }
  }
}
</script>

<style scoped>
 ul{
    margin: 10px 10px 0 10px;
    padding: 0;
  }
  li{
    list-style: none;
  }
  .tabs {
    overflow: hidden;
  }
  .tabs li,
  .tabs label {
    float: left;
    padding: 10px 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: .3s;
  }
  .tabs li:not(:first-child),
  .tabs label:not(:first-of-type) {
    border-left: none;
  }
  .tabs li.active,
  .tabs :checked + label {
    background-color: #000;
    border-color: #000;
    color: #fff;
    cursor: auto;
  }
  .contents{
    overflow: hidden;
    margin-top: -1px;
  }
  .contents li {
    width: inherit;
    padding: 20px;
    border: 1px solid #ccc;
  }
</style>