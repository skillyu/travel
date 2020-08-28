<template>
  <div>
      <Head ></Head>
      <List :cities='cities' :hot='hotcities'></List>
      <alphabet :cities='cities'></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import Head from './components/city_head'
import List from './components/city_list'
import alphabet from './components/city_alphabet'
export default {
    name:'city',
    data(){
        return{
            cities:[],
            hotcities:[]
        }
    },
    components:{
        Head,
        List,
        alphabet
    },
   methods:{
    getCityinfo(){
      axios.get('/city.json').then(this.getCityinfoSucc)
    },
    getCityinfoSucc(res){
      console.log(res)
      res = res.data
      if(res.ret&&res.data){
          this.cities = res.data.cities,
          this.hotcities = res.data.hotCities
       }
     }
  },
  mounted(){
      this.getCityinfo()
  }
    
}
</script>

<style>

</style>