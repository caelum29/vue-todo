<template>
  <div class="home">
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoList from '@/components/TodoList.vue';
import TodoForm from '../components/TodoForm.vue';

@Options({
  components: {
    TodoList,
    TodoForm,
  },
})
export default class List extends Vue {}
</script>
