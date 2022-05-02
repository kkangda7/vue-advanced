<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';


export default {
  components: { ListItem },
  setup() {
    // const store = useStore();
    // const createApiNews = (()=> {
    //   emmiter.emit('start:spinner');
    //   setTimeout(() => {
    //   store.dispatch('FETCH_NEWS')
    //   .then(()=> {
    //     emmiter.emit('end:spinner')
    //   })
    //   .catch((err) => {
    //   console.log(err)
    //   })
    //   },1000)
    // })
    // createApiNews();
    // 데이터 호출 시점
    // 1. 라우터 네비게이션 가드
    // - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
    // 2. 컴포턴트 라이프 사이클 훅
    // - created: 컴포넌트가 생성되자마자 호줄되는 로직
  }
}
</script>
<style>
</style>
