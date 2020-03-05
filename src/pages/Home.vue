<template>
    <section class="section  ">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content" @click="isComponentModalActive  = true">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                    <b-modal
                        :active.sync="isComponentModalActive"
                        :component="ModalForm"
                        :props="formProps"
                        :width="700">
                    </b-modal>
                </div>
            </div>
            <div class="column">
               <div class="card">
                    <div class="card-content" @click="formFilm()">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content" @click="formFilm()">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content" @click="formFilm()">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ModalForm from '../components/ModalForm'
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
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            },

            formFilm() {
                this.$buefy.modal.open({
                    parent: this,
                    component: ModalForm,
                    // hasModalCard: true,
                    // customClass: 'custom-class custom-class-2',
                    // trapFocus: true
                })
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
    }
    :hover.card {
        background-color: rgba(44, 32, 81, 0.623);
    }
    :hover.card h1, :hover.card h2{
        color: white;
    }
    .section {
        padding-top: 3rem;
        padding-right: 10rem;
        padding-left: 10rem;
    }
    h2 {
        text-align: center;
    }
</style>