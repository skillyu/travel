<template>
  <div>
      <Head></Head>
      <List></List>
      <alphabet></alphabet>
  </div>
</template>

<script>
import Head from './components/city_head'
import List from './components/city_list'
import alphabet from './components/city_alphabet'
export default {
    name:'city',
    data(){
        return{

        }
    },
    components:{
        Head,
        List,
        alphabet
    },
   methods:{
    getHCityinfo(){
      axios.get('/city.json').then(this.getHomeinfoSucc)
    },
    getHomeinfoSucc(res){
      console.log(res)
    //   res = res.data
    //   if(res.ret&&res.data){
        
    //    }
     }
  }
    
}
</script>

<style>

</style>