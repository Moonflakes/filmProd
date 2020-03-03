<template>
<v-app>
    <v-content>
      <b-navbar class="is-primary-light">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="./assets/filmprod_logo.png" style="width: 100%; max-height: none;"
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
