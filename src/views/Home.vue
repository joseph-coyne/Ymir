<template>
  <div class="page-wrapper">
    <h1 class="home-page-title">{{ appTitle }}</h1>
    <img alt="logo" class="logo" src="@/assets/img/project-logo.svg" />

    <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="https://project.netlify.com/"
      >Documentation →</a
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style scoped>

</style>
