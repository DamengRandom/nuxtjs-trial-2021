<template>
  <div>
    <!-- Hello {{ counter }} -->
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button> -->
    <form class="f4 bold center mw6" @submit.prevent="add(text)">
      <input v-model="text" type="text" />
      <input type="submit" value="(+)" />
    </form>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li class="ph3 pv3 bb b--light-silver flex items-center"
          v-for="todo of todos"
          :key="todo.id"
        >
          <span class="flex-auto" v-bind:class="{strike: todo.done}">
            {{todo.id+1}}. {{todo.text}}
          </span>
          <button @click="toggle(todo)">(T)</button>
          <button @click="remove(todo)">(X)</button>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { initTodos } from './shared';

  export default {
    data() {
      return {
        text: ''
      }
    },
    fetch: initTodos,
    // async created() {
    //   try {
    //     const response = await axios.get('http://localhost:3777/todos');
    //     this.$store.commit('init', response.data);
    //   } catch (error) {
    //     this.$store.commit('init', []); // option 1 for error handling
    //     // window.location.pathname = '/error';
    //   }
    // },
    fetchOnServer: true, // call fetch only on client-side
    computed: {
      ...mapState({
        counter: state => state.counter,
        todos: state => state.todos,
      }),
    },
    methods: {
      ...mapMutations(['increment', 'decrement']),
      ...mapActions([
        'add',
        'remove',
        'toggle',
      ]),
    }
  };
</script>
<style scoped>
  a.nuxt-link-active {
    font-weight: bold;
    color: black;
  }
</style>
