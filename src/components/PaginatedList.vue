<template>
  <div>
    <table>
      <tr>
        <th>NO</th>
        <th>TEL</th>
        <th>ADDRESS</th>
        <th>NAME</th>
      </tr>
      <tr v-for="p in paginatedData" :key="p.no">
        <td>{{ p.no }}</td>
        <td>{{ p.tel }}</td>
        <td>{{ p.address }}</td>
        <td>{{ p.name }}</td>
      </tr>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  name: 'paginated-list',
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  setup(props) {
    const pageNum = ref(0)
    const nextPage = () => {
      pageNum.value += 1;
    }
    const prevPage = () => {
      pageNum.value -= 1;
    }
    const pageCount = computed(()=> {
      let listLeng = props.listArray.length,
      listSize = props.pageSize,
      page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    })
    const paginatedData = computed(()=> {
      const start = pageNum.value * props.pageSize,
              end = start + props.pageSize;
      return props.listArray.slice(start, end);
    })

    return {
      pageNum,
      nextPage,
      prevPage,
      pageCount,
      paginatedData
    }
  },
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
table th {
  font-size: 1.2rem;
}
table tr {
  height: 2rem;
  text-align: center;
  border-bottom: 1px solid #505050;
}
table tr:first-of-type {
  border-top: 2px solid #404040;
}
table tr td {
  padding: 1rem 0;
  font-size: 1.1rem;
}
.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
</style>