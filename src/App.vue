<template>
  <div id="app">
    <NavBar />

    <main class="main">
      <router-view/>
    </main>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
  .main {
    padding-top: 56px;
  }
</style>
