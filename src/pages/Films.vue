<template>
  <section class="body-section">
        <b-button class="is-purple" @click="clickMe">Click Me</b-button>
    </section>
</template>

<script>
export default {
        methods: {
            clickMe() {
                console.log(this.$route.path)
                this.$buefy.notification.open('Clicked!!')
            }
        }
    };
</script>
