<template>
  <div>
      counter:{{number}}</div>
</template>

<script>
export default {
computed:{
    number(){
        return this.$store.state.counter;
    }
}
}
</script>

<style>

</style>