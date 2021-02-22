<template>
  <div>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Active todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li class="ph3 pv3 bb b--light-silver flex items-center"
          v-for="todo of todos"
          :key="todo.id"
        >
          <span class="flex-auto" v-bind:class="{strike: todo.done}">
            {{todo.id+1}}. {{todo.text}}
          </span>
        </li>
      </ul>
    </article>
  </div>
  
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        todos: state => state.todos.filter(todo => !todo.done),
      }),
    }
  }
</script>
