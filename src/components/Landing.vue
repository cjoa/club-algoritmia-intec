<template>
  <div class="headerContainer">
    <v-navbar></v-navbar>
    <div class="jumbotron vertical-center">
      <div class="container">
        <h1>Club Algoritmia INTEC</h1>
        <v-button></v-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '../../src/Components/Button';
  import Navbar from '../../src/Components/NavBar';
export default {
  name: 'LandingPage',
  components: {
    'v-navbar' : Navbar,
    'v-button' : Button
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .jumbotron {
    margin: 0 0 0 0;
    text-align: center;
    height : 95vh;
  }



</style>
