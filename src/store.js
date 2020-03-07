import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        films: [ 
            {
               "title":"Ronron petit patapon",
               "date":"12/03/1995"
            },
            {
               "title":"Ratata chez les Toupoutoux",
               "date":"12/03/1995"
            },
            {
               "title":"Les billes perdues",
               "date":"12/03/1995"
            }
         ],
        actors: [
            {
               "id":0,
               "avatar": "https://api.adorable.io/avatars/104/UIwBA@adorable.io.png",
               "name":"Victoria Hu",
               "age":21,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"12/03/1995",
                     "role":"chat"
                  },
                  {
                     "title":"Ratata chez les Toupoutoux",
                     "date":"12/03/1995",
                     "role":"Toupoutoux carré"
                  }
               ]
            },
            {
               "id":1,
               "avatar": "https://api.adorable.io/avatars/104/e6RNF@adorable.io.png",
               "name":"Pierre Lino",
               "age":43,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"12/03/1995",
                     "role":"boulanger"
                  }
               ]
            },
            {
               "id":2,
               "avatar": "https://api.adorable.io/avatars/104/fKYv6@adorable.io.png",
               "name":"Marc Lemoine",
               "age":15,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"12/03/1995",
                     "role":"chien"
                  },
                  {
                     "title":"Les billes perdues",
                     "date":"12/03/1995",
                     "role":"jeune"
                  }
               ]
            },
            {
               "id":3,
               "avatar": "https://api.adorable.io/avatars/104/eXcf8@adorable.io.png",
               "name":"Valérie Biloupa",
               "age":78,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"12/03/1995",
                     "role":"Grand mère"
                  }
               ]
            },
            {
               "id":4,
               "avatar": "https://api.adorable.io/avatars/104/Z2iMT@adorable.io.png",
               "name":"Victor Jouillot",
               "age":33,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"12/03/1995",
                     "role":"papa"
                  },
                  {
                     "title":"Ratata chez les Toupoutoux",
                     "date":"12/03/1995",
                     "role":"Toupoutoux rond"
                  }
               ]
            },
            {
               "id":5,
               "avatar": "https://api.adorable.io/avatars/104/iicuu@adorable.io.png",
               "name":"Helene Halmina",
               "age":42,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"12/03/1995",
                     "role":"cliente"
                  }
               ]
            },
            {
               "id":6,
               "avatar": "https://api.adorable.io/avatars/104/zR7rX@adorable.io.png",
               "name":"Robert Li",
               "age":20,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"12/03/1995",
                     "role":"enfant"
                  }
               ]
            },
            {
               "id":7,
               "avatar": "https://api.adorable.io/avatars/104/ptEU5@adorable.io.png",
               "name":"Patrick Louma",
               "age":65,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"12/03/1995",
                     "role":"papa"
                  }
               ]
            },
            {
               "id":8,
               "avatar": "https://api.adorable.io/avatars/104/V6EpO@adorable.io.png",
               "name":"Lamia Ponchoux",
               "age":12,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"12/03/1995",
                     "role":"enfant"
                  },
                  {
                     "title":"Ratata chez les Toupoutoux",
                     "date":"12/03/1995",
                     "role":"Ratata"
                  }
               ]
            },
            {
               "id":9,
               "avatar": "https://api.adorable.io/avatars/104/C4HVO@adorable.io.png",
               "name":"Jerome Niel",
               "age":35,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"12/03/1995",
                     "role":"pêcheur"
                  }
               ]
            }
         ]
    },
    getters: {
         actorsNames(state) {
            return state.actors.map(actor => actor.name)
         },
         actorsFilms(state) {
            // console.log(state.actors.map(actor => actor.films))
            return state.actors.map(actor => actor.films)
         }
    },
    mutations: {
        addActor (state, actor) {
            state.actors.push(actor);
        },
        addAvatar (state, avatar) {
           state.actors.map(actor => actor["avatar"] = avatar)
        }
    }
})