import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        films: [ 
            {
               "id":0,
               "title":"Ronron petit patapon",
               "date":"12/03/1995",
               "synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus mi, egestas non neque a, iaculis posuere augue. Nulla blandit augue ex, non suscipit dolor ultrices pretium. Etiam odio erat, varius eu nulla id, lacinia varius tellus. Vivamus sodales et nunc eget accumsan. Cras venenatis ut massa vitae facilisis. Sed a molestie est, lacinia sagittis nisl. Integer convallis lectus a nisi lacinia aliquet. Proin augue mauris, fermentum ut enim et, dictum tristique lorem. Suspendisse tincidunt ante et nisi commodo fringilla in ac augue. Pellentesque ultrices fringilla mi quis tempor. Integer a commodo nisi. Duis varius ultrices hendrerit. Etiam pellentesque congue imperdiet. Aenean ut odio dignissim, imperdiet lacus id, pretium odio.",
               "status":"in progress",
               "budjet":150000
            },
            {
               "id":1,
               "title":"Ratata chez les Toupoutoux",
               "date":"12/03/1995",
               "synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus mi, egestas non neque a, iaculis posuere augue. Nulla blandit augue ex, non suscipit dolor ultrices pretium. Etiam odio erat, varius eu nulla id, lacinia varius tellus. Vivamus sodales et nunc eget accumsan. Cras venenatis ut massa vitae facilisis. Sed a molestie est, lacinia sagittis nisl. Integer convallis lectus a nisi lacinia aliquet. Proin augue mauris, fermentum ut enim et, dictum tristique lorem. Suspendisse tincidunt ante et nisi commodo fringilla in ac augue. Pellentesque ultrices fringilla mi quis tempor. Integer a commodo nisi. Duis varius ultrices hendrerit. Etiam pellentesque congue imperdiet. Aenean ut odio dignissim, imperdiet lacus id, pretium odio.",
               "status":"in progress",
               "budjet":150000
            },
            {
               "id":2,
               "title":"Les billes perdues",
               "date":"12/03/1995",
               "synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus mi, egestas non neque a, iaculis posuere augue. Nulla blandit augue ex, non suscipit dolor ultrices pretium. Etiam odio erat, varius eu nulla id, lacinia varius tellus. Vivamus sodales et nunc eget accumsan. Cras venenatis ut massa vitae facilisis. Sed a molestie est, lacinia sagittis nisl. Integer convallis lectus a nisi lacinia aliquet. Proin augue mauris, fermentum ut enim et, dictum tristique lorem. Suspendisse tincidunt ante et nisi commodo fringilla in ac augue. Pellentesque ultrices fringilla mi quis tempor. Integer a commodo nisi. Duis varius ultrices hendrerit. Etiam pellentesque congue imperdiet. Aenean ut odio dignissim, imperdiet lacus id, pretium odio.",
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
   //  plugins: [ createPersistedState()],
    getters: {
         actorsNamesAge(state) {
            return state.actors.map(function(actor) {
               return {
                  id: actor.id,
                  firstName: actor.firstName,
                  lastName: actor.lastName, 
                  age: actor.age
               }
            })
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
         updateCastFilms (state, updatCast) {
            const actor = state.actors.find(actor => actor.id == updatCast.castId);
            const film = state.films.find(film => film.title = updatCast.filmTitle);
            const actorFilm = {
               title: updatCast.filmTitle,
               date: film.date,
               role: updatCast.role
            }
            actor.films.push(actorFilm)
            state.actors.push(actor)
            return state
         },
         updateFilms (state, newFilmInfos) {
            const newFilm = {
               id: state.films.length,
               title: newFilmInfos.title,
               date: newFilmInfos.date,
               synopsis: newFilmInfos.synopsis,
               status: newFilmInfos.status,
               budjet: newFilmInfos.budjet
            }
            state.films.push(newFilm)
            newFilmInfos.casts.forEach(cast => {
               if (cast.id.toString().charAt(0) != '+')
                  state.actors.forEach(actor => {
                     if (actor.id == cast.id)
                        actor.films.push({
                           title: newFilm.title,
                           date: newFilm.date,
                           role: cast.role
                        })
                  });
               else {
                  let result           = '';
                  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                  let charactersLength = characters.length;
                  for ( var i = 0; i < 5; i++ ) {
                     result += characters.charAt(Math.floor(Math.random() * charactersLength));
                  }
                  state.actors.push({
                     id: state.actors.length,
                     avatar: "https://api.adorable.io/avatars/104/"+result+"@adorable.io.png",
                     firstName: cast.firstName.charAt(0).toUpperCase() + cast.firstName.slice(1),
                     lastName: cast.lastName.charAt(0).toUpperCase() + cast.lastName.slice(1),
                     age: cast.age,
                     films:[
                        {
                           title: newFilm.title,
                           date: newFilm.date,
                           role: cast.role
                        }
                     ]
                  })
               }
            });
            return state
         },
         addActor (state, actor) {
            state.actors.push(actor);
         }
    }
})