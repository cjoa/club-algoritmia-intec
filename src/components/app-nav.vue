<!-- * Serve as the navigation bar of the website, for now the possible
     * sections of the bar could be: home, about and resources (a list of
     * websites to practice c++ and coding contests problems).
     * -->
<!-- * TODO: Complete the app-navbar component as the description says,
     * or add what you want and see fit to the component. -->

<<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse"  data-target="#app-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to="/" class="navbar-brand" href="#">Club Algoritmia</router-link>
    </div>

    <div class="collapse navbar-collapse" id="app-navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="#" href="#">Sobre Nosotros</router-link></li>
        <li><router-link to="#" href="#">Recursos</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-nav'
}
</script>

<style>

</style>
