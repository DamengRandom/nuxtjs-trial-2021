import axios from 'axios';

export const state = {
  counter: 0,
  todos: [
    // {
    //   id: 1,
    //   task: 'eat'
    // },
    // {
    //   id: 2,
    //   task: 'sleep'
    // },
    // {
    //   id: 3,
    //   task: 'toilet'
    // },
    // {
    //   id: 4,
    //   task: 'code'
    // },
  ]
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  init(state, todos) {
    console.log(todos);
    state.todos = todos;
  },
  add(state, todo) {
    state.todos = [...state.todos, todo];
  },
  remove(state, todo) {
    state.todos = state.todos.filter(t => t.id !== todo.id);
  },
  toggle(state, todo) {
    state.todos = state.todos.map(t => t.id === todo.id ? todo : t);
  },
};

export const actions = {
  async add({commit}, text) {
    const response = await axios.post('http://localhost:3777/todos', {text, done: false});
    commit('add', response.data);
  },
  async remove({commit}, todo) {
    await axios.delete(`http://localhost:3777/todos/${todo.id}`);
    commit('remove', todo);
  },
  async toggle({commit}, todo) {
    const response = await axios.patch(`http://localhost:3777/todos/${todo.id}`, {done: !todo.done});
    commit('toggle', response.data);
  }
};
