<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index"
      >
        <div 
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div> 
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'HomeIcons',
  props:{
    iconList:Array
  },
  components:{
        swiper,
        swiperSlide
    },
  data () {
    return {
      swiperOption:{
        autoplay: false
      },

    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style scoped>
    .swiper-slide{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .icon{

    }
    .icon-img-content{
        width: 24vw;
        height: 80px;
    }
    .icon-desc{
        padding: 0;
        margin: 0;
    }
</style>