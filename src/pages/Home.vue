<template>
    <section class="section body-section">
        <div class="is-flex home-columns">
            <div class="card">
                <div class="card-content add-project" @click="openInputModal() ">
                    <h2 class="title is-2">+</h2>
                    <h1 class="title is-6">Ajouter un projet</h1>
                </div>
            </div>
            <router-link class="card project" v-for="film in films" :key="film.id" :to="{name: 'film', params: {id: film.id}}">
                <div class="card-content" >
                    <h1 class="title is-5">{{film.title}}</h1>
                    <h3 class="subtitle is-6"><i>{{film.status}}</i></h3>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
import ModalForm from '../components/ModalForm'

export default {
    
    data() {
        return {
        }
    },
    
    methods: {
        formFilm() {
            this.$buefy.modal.open({
                parent: this,
                component: ModalForm
            })
        },
        openInputModal() {
            this.$buefy.modal.open({
                parent : this,
                component: ModalForm,
                hasModalCard: true,
                fullScreen: true,
                events: {
                    'success-response': function(newFilm) {
                        this.$store.commit('updateFilms', newFilm)
                    }.bind(this)
                }
            });
        }
    },

    computed: {
        films() {
            return this.$store.state.films
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
        cursor: pointer;
        height: 150px;
        margin-left: 2%;
        margin-bottom: 2%;
        flex-basis: 15rem;
    }
    :hover.card {
        background-color: #79738F;
    }
    :hover.card h1, :hover.card h2, :hover.card h3{
        color: white;
    }
    .add-project {
        height: 100%;
        text-align: center;
    }
    .section {
        padding-top: 3rem;
        padding-right: 10rem;
        padding-left: 10rem;
    }
    h2 {
        text-align: center;
    }
    .project {
        background-color:	rgb(255, 143, 121);
    }
    .home-columns {
        position: relative;
        top: -265px;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>