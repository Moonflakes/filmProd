<template>
    <section class="section body-section">
        <img src="../assets/fffff.png" class="affiche">
        <strong class="title is-1">{{film.title}}</strong> 
        <br>
        {{film.date}}                                 
        <br>
        <br>
        <strong>Synopsis</strong>
        <br>
        {{film.synopsis}}
    </section>
</template>

<script>
export default {
        methods: {
            
        },
        computed: {
            film() {
                // console.log(this.$route)
                let findFilm = this.$store.state.films.filter(film =>
                    film.id == this.$route.params.id)[0]
                return findFilm
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
</style>
