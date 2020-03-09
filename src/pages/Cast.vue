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
                @select="option => selected = option"
                @change="filteredActors">
            </b-autocomplete>
        </b-field>
        </b-field>
        <div class="columns is-multiline">
            <div class="column" v-for="cast in casts" :key="cast.id">
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
                            </p>
                        </div>
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
                filmTitle: ''
            }
    },

    methods: {
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