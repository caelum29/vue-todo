<template>
  <div class="form">
    <TodoForm/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoForm from '@/components/TodoForm.vue';

@Options({
  components: {
    TodoForm,
  },
})
export default class Form extends Vue {}
</script>
