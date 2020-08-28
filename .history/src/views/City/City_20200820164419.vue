<template>
  <div>
      <Head></Head>
      <List></List>
  </div>
</template>

<script>
import Head from './components/city_head'
import List from './components/city_list'
export default {
    name:'city',
    data(){
        return{

        }
    },
    components:{
        Head,
        List
    }
    
}
</script>

<style>

</style>