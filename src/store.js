import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        films: [],
        actors: [
            {
                "id":0,
               "name":"Victoria Hu",
               "age":21,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"",
                     "role":"chat"
                  },
                  {
                     "title":"Ratata chez les Toupoutoux",
                     "date":"",
                     "role":"Toupoutoux carré"
                  }
               ]
            },
            {
                "id":1,
               "name":"Pierre Lino",
               "age":43,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"",
                     "role":"boulanger"
                  }
               ]
            },
            {
                "id":2,
               "name":"Marc Lemoine",
               "age":15,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"",
                     "role":"chien"
                  },
                  {
                     "title":"Les billes perdues",
                     "date":"",
                     "role":"jeune"
                  }
               ]
            },
            {
                "id":3,
               "name":"Valérie Biloupa",
               "age":78,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"",
                     "role":"Grand mère"
                  }
               ]
            },
            {
                "id":4,
               "name":"Victor Jouillot",
               "age":33,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"",
                     "role":"papa"
                  },
                  {
                     "title":"Ratata chez les Toupoutoux",
                     "date":"",
                     "role":"Toupoutoux rond"
                  }
               ]
            },
            {
                "id":5,
               "name":"Helene Halmina",
               "age":42,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"",
                     "role":"cliente"
                  }
               ]
            },
            {
                "id":6,
               "name":"Robert Li",
               "age":20,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"",
                     "role":"enfant"
                  }
               ]
            },
            {
                "id":7,
               "name":"Patrick Louma",
               "age":65,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"",
                     "role":"papa"
                  }
               ]
            },
            {
                "id":8,
               "name":"Lamia Ponchoux",
               "age":12,
               "films":[
                  {
                     "title":"Ronron petit patapon",
                     "date":"",
                     "role":"enfant"
                  },
                  {
                     "title":"Ratata chez les Toupoutoux",
                     "date":"",
                     "role":"Ratata"
                  }
               ]
            },
            {
                "id":9,
               "name":"Jerome Niel",
               "age":35,
               "films":[
                  {
                     "title":"Les billes perdues",
                     "date":"",
                     "role":"pêcheur"
                  }
               ]
            }
         ]
    },
    getters: {
        actorsNames(state) {
            return state.actors.map(actor => actor.name)
        }
    },
    mutation: {
        addActor (state, actor) {
            state.actors.push(actor);
        }
    }
})