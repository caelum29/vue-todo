<template>
  <div class="container flex flex-col justify-center">
    <h3>TodoList</h3>
    <ul v-for="todo of allTodos" :key="todo.id" class="list flex-col justify-center">
      <TodoItem/>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex';
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoLIst',
  components: { TodoItem },
  computed: {
    ...mapGetters(['allTodos']),
  },
};
</script>

<style scoped>

</style>
