<template>
    <section class="section is-large has-background-white-bis ">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <b-button class="is-purple" @click="clickMe" icon-left="plus"></b-button>
                    </div>
                </div>
            </div>
            <div class="column">
               <div class="card">
                    <div class="card-content">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <b-button class="is-purple" @click="clickMe" icon-left="plus"></b-button>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <b-button class="is-purple" @click="clickMe" icon-left="plus"></b-button>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <b-button class="is-purple" @click="clickMe" icon-left="plus"></b-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import { mdiPlusThick } from '@mdi/js';

export default {
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            }
        }
    };
</script>
<style scoped>
    button {
        width: 100%;
    }
    .card {
        border-radius: 15px;
    }
</style>