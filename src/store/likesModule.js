const moduleA={
    state:{
        
        likes:10,
        liked:false
    },
    getters:{
        
        likes(state,getters,rootState){
            console.log(rootState.moduleTest.test);
            return state.likes;
        },
        liked(state){
            return state.liked
        }
    },
    actions:{
        i9lebliked(context){
            context.commit("i9lebliked");
            if (context.state.liked){
                context.commit("zid")
            }else{
                context.commit("na9as")
            }
        }
    },
    mutations:{
        i9lebliked(state){
            state.liked=!state.liked;
        },
        zid(state){
            state.likes++;
        },
        na9as(state){
            state.likes--;
        }

    }
}
export default moduleA;