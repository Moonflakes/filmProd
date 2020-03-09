<template>
  <section class="section body-section">
        <div class="columns is-multiline">
            <router-link :to="{name: 'film', params: {id: film.id}}" class="column is-full" v-for="film in films" :key="film.id" @click="clickColumn(film.id)">
                <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-3by4" style="width: 100px">
                            <img src="../assets/fffff.png">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{film.title}}</strong> 
                            <br>
                                {{film.date}}                                 
                            <br>
                            <br>
                                <strong>Synopsis</strong>
                            <br>
                                {{film.synopsis}}
                            </p>
                        </div>
                    </div>
                </article>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
        methods: {
            clickColumn(a) {
                console.log(a)
            }
        },
        computed: {
            films() {
                let films = this.$store.state.films;
                let filteredFilms = films;

                // if (this.filmTitle) {
                //     filteredActors = actors.filter(actor => actor.films.find(film => film.title == this.filmTitle))
                // }
                // if (this.sort != 'default') 
                //     filteredActors = filteredActors.sort(function(a, b) {
                //         if (a[this.sort] < b[this.sort])
                //             return -1;
                //         if (b[this.sort] < a[this.sort])
                //             return 1;
                //         return 0;
                //     }.bind(this));
                return filteredFilms
            },
            // ...mapGetters({
            //     films: 'filmsTitles'
            // }),
        }
    };
</script>
<style scoped>
    :hover.column {
        transform: scale(1.025);
        transition: .2s ease-in;
        cursor: pointer;
    }
</style>
