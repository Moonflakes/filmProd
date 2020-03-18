<template>
    <section class="section body-section">
        <div>
            <img src="../assets/fffff.png" class="affiche">
            <strong class="title is-1">{{film.title}}</strong> 
            <br>
            {{film.date}}                               
            <br>
            <i>{{film.status}}</i>
            <br>
            <br>
            <strong>Synopsis</strong>
            <br>
            {{film.synopsis}}
        </div>
        <div class="casting">
            <h5 class="castTitle title is-4"><strong>Casting</strong></h5>
            <article class="media" v-for="cast in filteredCasts" :key="cast.id">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img :src="cast.avatar">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                    <p>
                        <strong>{{cast.firstName}} {{cast.lastName}}</strong> <small>{{cast.age}}ans</small>
                        <br>
                        <i>Role : </i>{{cast.role}}
                    </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
        methods: {
            
        },
        computed: {
            film() {
                let findFilm = this.$store.state.films.filter(film =>
                    film.id == this.$route.params.id)[0]
                return findFilm
            },
            filteredCasts() {
                let casts = this.$store.state.actors.filter(actor => 
                    actor.films.find(film => 
                        film.title == this.film.title))
                casts.map(cast => {
                    cast.films.forEach(film => {
                        if (film.title == this.film.title)
                            cast['role'] = film.role
                    });
                })
                return casts
            }
        }
    };
</script>
<style scoped>
    .affiche {
        width: 210px;
        float: left;
        margin: 0px 20px 10px 0px;
    }
    .casting {
        margin-top: 20px;
    }
    .castTitle  {
        margin-bottom: 10px;
    }
</style>
