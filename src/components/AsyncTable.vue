<template>
  <div>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>company</th>
        <th>address</th>
      </tr>
      <tr>
        <td>{{ users.id }}</td>
        <td>{{ users.name }}</td>
        <td>{{ users.username }}</td>
        <td>{{ users.email }}</td>
        <td>{{ company.name }} </td>
        <td>{{ address.street }} </td>
      </tr>
    </table>
    <br>
    <table>
      <tr>
        <th>id</th>
        <th>title</th>s
        <th>completed</th>
      </tr>
      <tr v-for="todo in paginatedData" :key="todo">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }} </td>
        <td>{{ todo.completed }} </td>
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
  props: {
    users: {
      type: Object,
      requred: true
    },
    company: {
      type: Object,
      requred: true
    },
    address: {
      type: Object,
      requred: true
    },
    listArray: {
      type: Array,
      requred: true
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
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
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