<template>
    <section class="section  ">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content" @click="formFilm">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                </div>
            </div>
            <div class="column">
               <div class="card">
                    <div class="card-content" @click="formFilm">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content" @click="formFilm">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content" @click="formFilm">
                        <h1 class="title is-5">Ajouter un projet</h1>
                        <h2 class="title is-2">+</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import { mdiPlusThick } from '@mdi/js';
const ModalForm = {
        props: ['email', 'password'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
        `
    }
export default {
    
        methods: {
            clickMe() {
                this.$buefy.notification.open('Clicked!!')
            },

            formFilm() {
                this.$buefy.modal.open({
                    parent: this,
                    component: ModalForm,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    trapFocus: true
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