<template>
  <nav class="pa3 pa4-ns">
    <nuxt-link class="link dim grey b f6 f5-ns dib mr3" exact to="/" title="Home">Home</nuxt-link>
    <nuxt-link class="link dim grey b f6 f5-ns dib mr3" to="/active" title="Active">Active</nuxt-link>
    <nuxt-link class="link dim grey b f6 f5-ns dib mr3" to="/completed" title="Completed">Completed</nuxt-link>
  </nav>
</template>
<style scoped>
  a.nuxt-link-active {
    font-weight: bold;
    color: black;
    font-size: 1.2rem;
  }
</style>
