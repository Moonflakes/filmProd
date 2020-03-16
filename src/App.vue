<template>
<v-app>
    <div class="content-body">
      <section class="hero is-warning">
        <div class="hero-head">
          <nav class="navbar">
            <div class="content-nav">
              <div class="navbar-brand">
                <router-link class="navbar-item home-logo" to="/">
                    <img src="./assets/blou.png" style="max-height: none;">
                </router-link>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB" :class="showBurger ? 'is-active' : ''" @click="showBurger = !showBurger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroB" class="navbar-menu" :class="showBurger ? 'is-active' : ''">
                    <div class="navbar-end">
                      <router-link class="navbar-item" to='/'>
                        Home
                      </router-link>
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
      <transition name="view">
        <router-view/>
      </transition>
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
    show: true,
    showBurger: false
  }),
  computed: {
    hiddenContainer() {
      if (this.$route.path != '/')
        return false
      return true
    }
  }
};
</script>
<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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
  .navbar-menu.is-active {
    right: 75px;
    position: absolute;
  }
  .home-logo {
    width: 155px;
  }
  .body-section {
    padding-bottom: 0px;
    background-color: whitesmoke;
    transition: 1s;
  }
  .section {
    padding: 3rem 3rem !important;
  }
  @media screen and (min-width: 769px), print {
    .section {
      padding: 3rem 10rem !important;
    }
    .home-columns .card {
      height: 280px !important;
    }
    .add-project {
      padding-top: 35% !important;
    }
  }
  .router-link-exact-active{
    background-color: #ffdd57 !important;
    color: #EE4C33 !important;
  }
  .hero-body {
    padding-top: 13rem !important;
  }

  .view-enter-active, .view-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  }
  .view-enter-active {
    transition-delay: 0.5s;
  }
  .view-enter, .view-leave-to {
    opacity: 0;
  }
  .view-enter-to, .view-leave {
    opacity: 1;
  }
</style>
