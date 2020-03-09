<template>
<v-app>
    <div class="content-body">
      <section class="hero is-warning is-medium">
        <div class="hero-head">
          <nav class="navbar">
            <div class="content-nav">
              <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <img src="./assets/blou.png" style="width: 50%; max-height: none;">
                </router-link>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroB" class="navbar-menu">
                    <div class="navbar-end">
                      <router-link class="navbar-item" to='/films'>
                        Films
                      </router-link>
                      <router-link class="navbar-item" to="/cast">
                        Cast
                      </router-link>
                    </div>
                  </div>
                </div>
          </nav>
        </div>
        <div class="hero-body" v-if="hiddenContainer">
          <div class="container">
          </div>
        </div>
      </section>
      <router-view >
      </router-view>
      <footer class="footer has-background-warning"></footer>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  computed: {
    hiddenContainer() {
      console.log(this.$route.path)
      if (this.$route.path != '/')
        return false
      return true
    }
  }
};
</script>
<style>
  .content-nav {
    width: 100%;
    display: flex;
    padding: 15px;
  }
  .content-body{
    height: 100%;
  }
  .navbar-burger {
    position: absolute !important;
    right: 20px;
  }
  .navbar-end {
    padding-right: 15px;
  }
  .navbar .has-shadow {
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075) !important;
  }
  .body-section {
    height: 100%;
    padding-bottom: 0px;
    background-color: whitesmoke;
  }
</style>
