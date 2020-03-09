<template>
  <section class="section body-section">
      <div>{{$route.params.id}}</div>
        <!-- <div class="columns is-multiline">
            <div class="column is-full" v-for="film in films" :key="film.id">
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
            </div>
        </div> -->
    </section>
</template>

<script>
export default {
        methods: {
            
        },
        computed: {
            
        }
    };
</script>
