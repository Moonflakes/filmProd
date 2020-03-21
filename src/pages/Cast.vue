<template>
    <section class="section body-section">
        <b-field grouped group-multiline class="filters is-8">
            <b-select v-model="sort" expanded>
                <option value="default">Default sort</option>
                <option value="firstName">Sort by fisrt name ascendent</option>
                <option value="lastName">Sort by last name ascendent</option>
                <option value="age">Sort by last age ascendent</option>
            </b-select>
            <b-field horizontal expanded label="Find a film">
            <b-autocomplete
                v-model="filmTitle"
                placeholder="e.g. Title of the film"
                :keep-first="true"
                :open-on-focus="true"
                :data="films"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
        </b-field>
        <div class="columns is-multiline">
            <div class="column" v-for="(cast, index) in casts" :key="'key'+index">
                <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img :src="cast.avatar" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{cast.firstName+' '+cast.lastName}}</strong> 
                            <br>
                                {{cast.age}} ans                                 
                            <br>
                            <br>
                                <strong>Films</strong>
                            <br>
                                <b-table :data="cast.films" :columns="columns"></b-table>
                            <br>
                            
                            </p>
                            <div v-if="castIdIsActive == cast.id">
                                <b-field grouped>
                                    <b-field label="Film"
                                        label-position='on-border'>
                                        <b-autocomplete
                                            ref="filmTitle"
                                            v-model="filmAdd"
                                            placeholder="Search a film"
                                            :keep-first="true"
                                            :open-on-focus="true"
                                            :data="filteredNoFilmsArray"
                                            @select="option => selected = option"
                                            required>
                                            <template slot="empty">No results for {{filmAdd}}</template>
                                        </b-autocomplete>
                                    </b-field>
                                    <b-field label="Role"
                                        label-position='on-border'>
                                        <b-input
                                            ref="role"
                                            v-model="role"
                                            :value="role"
                                            placeholder="Role"
                                            required>
                                        </b-input>
                                    </b-field>
                                    <a aria-label="add film" @click="updateCastFilms()">
                                        <font-awesome-icon icon="plus-circle"/>
                                    </a>
                                    <a aria-label="add film" @click="castIdIsActive = -1">
                                        <font-awesome-icon icon="times"/>
                                    </a>
                                </b-field>
                            </div>
                            <div>
                                <a aria-label="add film" @click="castIdIsActive = cast.id" v-if="addFilm(cast.id)">
                                    <font-awesome-icon icon="plus-square" /> Add a film
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="media-right">
                        
                    </div>
                </article>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
            return {
                sort: 'default',
                columns: [
                    {
                        field: 'title',
                        label: 'Title',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'role',
                        label: 'Role',
                    }
                ],
                filmTitle: '',
                filmAdd: '',
                role: '',
                castIdIsActive: -1
            }
    },

    methods: {
        updateCastFilms() {
            let title = false
            const role = this.$refs.role[0].checkHtml5Validity()
            if (!this.$refs.filmTitle[0].selected) {
                this.$refs.filmTitle[0].setInvalid()
                this.$refs.filmTitle[0].statusMessage = "This film does not existe"
            }
            else
                title = true
            // console.log(this.$refs.filmTitle[0])
            if (title && role) {
                this.$store.commit('updateCastFilms', {
                    castId: this.castIdIsActive, 
                    filmTitle: this.filmAdd, 
                    role: this.role
                })
                this.filmAdd = ''
                this.role = ''
                this.castIdIsActive = -1
            }
        },
        addFilm(castId) {
            if (this.castIdIsActive != castId && this.films.length != this.casts[castId].films.length)
                return true
            return false
        }
    },

    computed: {
        casts() {
            let actors = this.$store.state.actors;
            let filteredActors = actors;

            if (this.filmTitle) {
                filteredActors = actors.filter(actor => actor.films.find(film => film.title == this.filmTitle))
            }
            if (this.sort != 'default') 
                filteredActors = filteredActors.sort(function(a, b) {
                    if (a[this.sort] < b[this.sort])
                        return -1;
                    if (b[this.sort] < a[this.sort])
                        return 1;
                    return 0;
                }.bind(this));
            
            return filteredActors
        },
        ...mapGetters({
            films: 'filmsTitles'
        }),
        filteredNoFilmsArray() {
            if (this.castIdIsActive > -1) {
                const filmsCastId = this.casts.filter(cast => 
                    cast.id == this.castIdIsActive)[0].films.map(film => film.title)
                let noFilmsCast = this.films.filter(film => !filmsCastId.includes(film))

                return noFilmsCast.filter(option => option.toString()
                            .toLowerCase()
                            .indexOf(this.filmAdd.toLowerCase()) >= 0)
            }
            return []
        }
    }
};
</script>
<style scoped>
    .card {
        border-radius: 15px;
        cursor: pointer;
    }
    .filters{
        align-items: center;
        margin-bottom: 20px !important;
    }
</style>