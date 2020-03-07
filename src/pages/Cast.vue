<template>
    <section class="section">
        <b-field grouped group-multiline>
            <b-select v-model="defaultSortDirection">
                <option value="asc">Default sort direction: ASC</option>
                <option value="desc">Default sort direction: DESC</option>
            </b-select>
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
                                <strong>{{cast.name}}</strong> 
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
// import { mapGetters } from 'vuex';

export default {
    data() {
            return {
                defaultSortDirection: 'asc',
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
                ]
            }
    },

    methods: {
        // avatarMaker() {
        //     let result           = '';
        //     let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        //     let charactersLength = characters.length;
        //     for ( var i = 0; i < 5; i++ ) {
        //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
        //     }

        //     this.$store.commit('addAvatar', "https://api.adorable.io/avatars/104/"+result+"@adorable.io.png")
        //     console.log(result)
        //     // return "https://api.adorable.io/avatars/104/"+result+"@adorable.io.png"
        // }
    },

    computed: {
        casts() {
            return this.$store.state.actors
        }
    }
};
</script>
<style scoped>
    .card {
        border-radius: 15px;
        cursor: pointer;
    }
    .section {
        padding-top: 3rem;
        padding-right: 10rem;
        padding-left: 10rem;
    }
</style>