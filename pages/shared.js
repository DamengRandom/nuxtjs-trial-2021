import axios from 'axios';

export async function initTodos({store, redirect, isClient}) {
  // console.log('😃😃😃😃', store.todos, isClient);
  // if (store.todos && store.todos.length > 0) return store.todos; // avoid unnecessary re-rendering ..

  try {
    const response = await axios.get('http://localhost:3777/todos');
    store.commit('init', response.data);
  } catch (error) {
    // store.commit('init', []); option 1 for error handling
    redirect('/error'); // option 2 for error handling
  }
};
