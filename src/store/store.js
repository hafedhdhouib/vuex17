import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './likesModule'
import moduleTest from './moduleTest'
Vue.use(Vuex);




const store = new Vuex.Store({
    state:{
        counter:0
    },
    getters:{
        doublecounter(state){
            return state.counter*2;
        },
        
        miltuplication:(state)=>(multi)=>{
            return state.counter * multi;
        },
        counter(state){return state.counter}
    },
    mutations:{
        zid(state){
            state.counter++
        },
        na9as(state){
            state.counter--
        },
        zidpara(state,n){
            state.counter += n;
        }
    },
    actions:{
        zidba3dseconda(context){
        setTimeout(()=>{
            context.commit("zid");
        },1000)    
        }
    },
    modules:{
        likes:moduleA,
        moduleTest:moduleTest
    }
}
);
export default store;