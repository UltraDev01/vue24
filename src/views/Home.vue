<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Carousel />
    <Service />
    <Consult />

  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Service from '@/components/Service'
import Consult from '@/components/Consult'

export default {
  name: 'home',
  components: {
    Carousel,
    Service,
    Consult
  }
}
</script>
