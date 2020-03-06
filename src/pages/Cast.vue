<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="box">
                <article class="media">
                    <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://api.adorable.io/avatars/104/mimou@adorable.io.png" alt="Image">
                    </figure>
                    </div>
                    <div class="media-content">
                    <div class="content">
                        <p>
                        <strong>John Smith</strong> 
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                        <a class="level-item" aria-label="reply">
                            <span class="icon is-small">
                                <b-icon
                                    pack="fas"
                                    icon="reply">
                                </b-icon>
                                <fa-icon icon="reply" />
                            <!-- <i class="fas fa-reply" aria-hidden="true"></i> -->
                            </span>
                        </a>
                        <a class="level-item" aria-label="retweet">
                            <span class="icon is-small">
                                <b-icon
                                    pack="fas"
                                    icon="retweet">
                                </b-icon>
                            <!-- <i class="fas fa-retweet" aria-hidden="true"></i> -->
                            </span>
                        </a>
                        <a class="level-item" aria-label="like">
                            <span class="icon is-small">
                                <b-icon
                                    pack="fas"
                                    icon="heart">
                                </b-icon>
                            <!-- <i class="fas fa-heart" aria-hidden="true"></i> -->
                            </span>
                        </a>
                        </div>
                    </nav>
                    </div>
                </article>
                </div>

                <!-- <div class="card">
                    <div class="card-content">
                        <img src="https://api.adorable.io/avatars/104/mimou@adorable.io.png">
                    </div>
                </div> -->
            </div>
            <div class="column">
               <div class="card">
                    <div class="card-content">
                        <img src="https://api.adorable.io/avatars/104/didi@adorable.io.png">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <img src="https://api.adorable.io/avatars/104/pritou@adorable.io.png">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <img src="https://api.adorable.io/avatars/104/loulou@adorable.io.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
    data() {
            return {
            }
    },
    methods: {

    }
};
</script>
<style scoped>
    .card {
        border-radius: 15px;
        cursor: pointer;
    }
    /* :hover.card {
        background-color: rgba(44, 32, 81, 0.623);
    }
    :hover.card h1, :hover.card h2{
        color: white;
    } */
    .section {
        padding-top: 3rem;
        padding-right: 10rem;
        padding-left: 10rem;
    }
    /* h2 {
        text-align: center;
    } */
</style>