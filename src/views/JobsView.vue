<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import ListItem from '../components/ListItem.vue';
import emiter from '@/utils/emiter';

export default {
  components: { ListItem },
    setup() {
      onMounted(()=> {
        emiter.emit('end:spinner')
      }) 
  }
  // 외부 라이브러리 모듈화
  // -이유 :  vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할수 있어야 함.
  // -종류 : 차트, 데이트 피커, 테이블라이브러리, 스피너
}
</script>

<style>
</style>