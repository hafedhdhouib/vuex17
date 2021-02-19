<template>
<div>
    double {{double}}
  <counterInfo/>
</div>
</template>

<script>
import counterInfo from './CounterInfo'
export default {
components:{
    counterInfo
},
computed:{
    double(){
        return this.$store.getters.doublecounter
}
}}
</script>

<style>

</style>