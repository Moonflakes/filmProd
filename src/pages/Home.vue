<template>
    <section class="section body-section">
        <div class="is-flex home-columns">
                <div class="card">
                    <div class="card-content add-project" @click="isComponentModalActive = true">
                        <h2 class="title is-2">+</h2>
                        <h1 class="title is-6">Ajouter un projet</h1>
                    </div>
                    <b-modal
                        :active.sync="isComponentModalActive"
                        :component="ModalForm"
                        :props="formProps"
                        :width="700">
                    </b-modal>
                </div>
               <div class="card project" v-for="film in films" :key="film.id">
                    <div class="card-content" href='/films'>
                        <h1 class="title is-5">{{film.title}}</h1>
                        <h3 class="subtitle is-6"><i>{{film.status}}</i></h3>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
import ModalForm from '../components/ModalForm'
// import Actors from '../assets/actors.json'

export default {
    
    data() {
        return {
            ModalForm,
            formProps: {
                email: 'evan@you.com',
                password: 'testing'
            },
            isComponentModalActive: false,
        }
    },
    
    methods: {
        formFilm() {
            this.$buefy.modal.open({
                parent: this,
                component: ModalForm
            })
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
        height: 100%;
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
        padding-top: 35%;
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
    .body-section {
        height: 100%;
        padding-bottom: 0px;
        background-color: whitesmoke;
    }
    .home-columns {
        width: 100%;
        height: 280px;
        position: absolute;
        top: 218px;
        left: 0;
        padding-left: 10%;
        padding-right: 10%;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
</style>