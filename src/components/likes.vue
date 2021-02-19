<template>
  <div >
      <button v-if="liked" @click="i9lebliked">Unliked</button>
      <button v-if="!liked" @click="i9lebliked">liked</button>
      {{likes}}

  </div>

</template>

<script>
import {mapGetters,mapActions}from 'vuex'
export default {
computed:{
    ...mapGetters(['likes','liked']),
},
methods:{
    ...mapActions(['i9lebliked'])}

}
</script>

<style>

</style>