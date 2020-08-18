<template>
  <div class="home">
    <HomeHeader :city='city'></HomeHeader>
    <swiper-list :swiperList="swiperList"></swiper-list>
    <Icon :iconList='iconList'></Icon>
    <Recommend :recommendList = 'recommendList'></Recommend>
    <Weekend :weekendList='weekendList'></Weekend>
  </div>
</template>

<script>
import HomeHeader from './Header'
import swiperList from './swiperList'
import Icon from './icons.vue'
import Recommend from './Recommend'
import Weekend from './Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
   HomeHeader,
   swiperList,
   Icon,
   Recommend,
   Weekend
  },
  data(){
    return{
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted(){
    this.getHomeinfo()
  },
  methods:{
    getHomeinfo(){
      axios.get('/index.json').then(this.getHomeinfoSucc)
    },
    getHomeinfoSucc(res){
      console.log(res)
      res = res.data
      if(res.ret&&res.data){
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
       }
     }
  }
}
</script>
<style scoped>
  body{
    margin: 0;
    padding: 0;
  }
  .home{
    width:auto;
    height:1000px;
  }
</style>
