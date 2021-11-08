import { createStore } from 'vuex';
import { Todo } from '@/types/Todo';

// interface State {
//   todos: Todo[]
// }

export default createStore({
  state: {
    todos: [] as Array<Todo>,
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, payload: Todo) {
      commit('add_todo', payload);
    },
  },
  mutations: {
    add_todo(state, payload: Todo) {
      state.todos.push(payload);
      console.log(payload);
    },
  },
  modules: {
  },
});
