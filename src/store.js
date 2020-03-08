import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        films: [ 
            {
               "title":"Ronron petit patapon",
               "date":"12/03/1995",
               "synopsis":"blabla",
               "status":"in progress",
               "budjet":150000
            },
            {
               "title":"Ratata chez les Toupoutoux",
               "date":"12/03/1995",
               "synopsis":"blabla",
               "status":"in progress",
               "budjet":150000
            },
            {
               "title":"Les billes perdues",
               "date":"12/03/1995",
               "synopsis":"blabla",
               "status":"in progress",
               "budjet":150000
            }
         ],
        actors: [
            {
               "id":0,
               "avatar": "https://api.adorable.io/avatars/104/UIwBA@adorable.io.png",
               "firstName":"Victoria",
               "lastName": "Hu",
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
               "firstName":"Pierre",
               "lastName": "Lino",
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
               "firstName":"Marc",
               "lastName": "Lemoine",
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
               "firstName":"Valérie",
               "lastName": "Biloupa",
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
               "firstName":"Victor",
               "lastName": "Jouillot",
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
               "firstName":"Helene",
               "lastName": "Halmina",
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
               "firstName":"Robert",
               "lastName": "Li",
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
               "firstName":"Patrick",
               "lastName": "Louma",
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
               "firstName":"Lamia",
               "lastName": "Ponchoux",
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
               "firstName":"Jerome",
               "lastName": "Niel",
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
         actorsFirstNames(state) {
            return state.actors.map(actor => actor.firstName)
         },
         actorsFilms(state) {
            // console.log(state.actors.map(actor => actor.films))
            return state.actors.map(actor => actor.films)
         },
         filmsTitles(state) {
            return state.films.map(film => film.title)
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