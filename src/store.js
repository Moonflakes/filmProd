import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        films: [],
        actors: [
            {
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
    }
})