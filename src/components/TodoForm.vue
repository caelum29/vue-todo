<template>
  <h3>TodoForm</h3>
  <form >
    <input type="text" class="input" v-model="titleInput">
    <textarea class="input" v-model.trim="descriptionInput"></textarea>
    <button @click="addTodoFromInput" type="button" class="btn">
      Save
    </button>
  </form>
</template>

<script lang="ts">
import { v1 } from 'uuid';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
// import { Todo } from '../types/Todo';

export default defineComponent({
  data(): { titleInput: string, descriptionInput: string} {
    return {
      titleInput: '',
      descriptionInput: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    addTodoFromInput(): void {
      this.addTodo({
        id: v1(),
        title: this.titleInput,
        description: this.descriptionInput,
      });
      this.titleInput = '';
      this.descriptionInput = '';
    },
  },
});
</script>

<style scoped>

</style>
