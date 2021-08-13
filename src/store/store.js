import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        email: "Nada aun",
        cartaActual: [],
        restauranteActual: {},
        restaurantes: [],
        log: false,
        infoGoogle:{
            nombre: "",
            foto: "",
            id:"",
        }
    },
    mutations:{
        obtenerRestaurantes(state){
            let usuario = {
                email: state.email
            }
            axios.post('https://despachando.herokuapp.com/getRestaurant',JSON.stringify(usuario), {
                headers: {
                  'Content-Type': 'application/json'
                }})
            .then(response => {
                console.log(response.data.db_result)
                state.restaurantes = response.data.db_result
            }).catch(e=>{
                console.log(e)
            });
            
        },
        getMenu(state) {
            console.log("Llegue aca");
            let usuario = {
                    nit: state.restauranteActual.nit.toString()
            }
            axios.post('https://despachando.herokuapp.com/getMenuAndProducts', JSON.stringify(usuario), {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then( async response =>{
                console.log(response.data.menus);
                state.cartaActual = response.data.menus;
          
            }).catch(e=>{
                console.log(e)
            }); 
          
        },
    },
    actions:{
        getRestaurantes(context){
            context.commit('obtenerRestaurantes')
        },
        obtenerMenu(context){
            context.commit('getMenu')
        }
    }
    
})

