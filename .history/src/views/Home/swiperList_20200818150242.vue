<template>
    <div class="list">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    name:'HomeSwiper',
    props:{
        swiperList:Array
    },
    data () {
        return {
            
        }
    }

}
</script>

<style scoped>
    .list{
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .swiper-slide{

    }
</style>