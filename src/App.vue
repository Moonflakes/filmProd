<template>
<v-app>
    <div class="has-background-white-bis is-marginless">
      <section class="hero is-warning is-medium">
        <div class="hero-head">
          <nav class="navbar">
            <div class="content-nav">
              <div class="navbar-brand">
                <a class="navbar-item" tag="router-link" :to="{ path: '/' }">
            <!-- <template slot="brand">
                <b-navbar-item > -->
                    <img
                        src="./assets/blou.png" style="width: 50%; max-height: none;"
                    >
                </a>
                <!-- </b-navbar-item>
            </template> -->
            <!-- <template slot="start" >
                <b-navbar-item href='/films'>
                    Films
                </b-navbar-item>
                <b-navbar-item href="/cast">
                    Cast
                </b-navbar-item>
            </template> -->
            
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroB" class="navbar-menu">
                    <div class="navbar-end">
                      <a class="navbar-item" href='/films'>
                        Films
                      </a>
                      <a class="navbar-item" href="/cast">
                        Cast
                      </a>
                    </div>
                  </div>
                </div>
          </nav>
        </div>
        <div class="hero-body">
          <div class="container">
            <!-- <h1 class="title">
              Medium title
            </h1>
            <h2 class="subtitle">
              Medium subtitle
            </h2> -->
          </div>
        </div>
      </section>
      <router-view >
        <!-- Route content goes here. -->
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
};
</script>
<style>
  .content-nav {
    width: 100%;
    display: flex;
    padding: 15px 15px 0px 15px;
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
  .columns {
    height: 280px;
    position: absolute;
    top: 218px;
    padding-right: 160px;
  }
</style>
