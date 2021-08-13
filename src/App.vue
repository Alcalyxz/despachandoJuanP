<template>
  <v-app class="app">
    <Navbar></Navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/footer.vue';
import Navbar from './components/navbar.vue';

export default {
  name: 'App',

  components: {
    Footer,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app{
  margin: 0 2%;
}

</style>
