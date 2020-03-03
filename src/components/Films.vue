<template>
  <section>
        <b-button class="is-primary" @click="clickMe">Click Me</b-button>
    </section>
</template>

<script>
export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    };
</script>
