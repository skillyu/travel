<template>
  <div class="home">
    <HomeHeader></HomeHeader>
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
import {mapState} from 'vuex'

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
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeinfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeinfo()
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeinfo(){
      axios.get('/index.json?city=' + this.city).then(this.getHomeinfoSucc)
    },
    getHomeinfoSucc(res){
      res = res.data
      if(res.ret&&res.data){
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
    height:auto;
  }
</style>
