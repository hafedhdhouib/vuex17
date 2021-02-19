<template>
  <div class="hello">
    Counter :{{counter}}
    <br>
    {{doublecounter}}
    <br>
    
    <button @click="zida">zid</button>
    
    <button @click="na9es">na9es</button>
    
        <button @click="zidpara">zid b 5amsa</button>
        <br>
        <button @click="zidba3d">zid ba3d</button>

  </div>
</template>

<script>
import {mapGetters}from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapGetters(['doublecounter','counter']),
    
   /* multi(){
return this.$store.getters.miltuplication(5)      
    }*/
  },
  methods:{
    zida(){this.$store.commit('zid')
    },
    na9es(){
     this.$store.commit('na9as')},
    zidpara(){
      this.$store.commit("zidpara",5)
    },
    zidba3d(){
      this.$store.dispatch('zidba3dseconda')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
