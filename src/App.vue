<template>
<v-app>
    <v-content>
      <section class="hero is-warning">
        <div class="hero-body">
      <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="./assets/blou.png" style="width: 50%; max-height: none;"
                >
            </b-navbar-item>
        </template>
        <template slot="start" >
            <b-navbar-item href='/films'>
                Films
            </b-navbar-item>
            <b-navbar-item href="/cast">
                Cast
            </b-navbar-item>
        </template>
    </b-navbar>
        </div>
      </section>
      <router-view>
        <!-- Route content goes here. -->
      </router-view>
    </v-content>
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
  .navbar .has-shadow {
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,.075) !important;
  }
</style>
