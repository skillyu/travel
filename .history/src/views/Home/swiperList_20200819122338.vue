<template>
    <div class="list">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
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
    components:{
        swiper,
        swiperSlide
    },
    data () {
        return {
           swiperOption:{
                pagination: '.swiper-pagination',
                loop: true,
                observer: true,
                observeParents: true 
            },
 
        }
    }

}
</script>

<style scoped>
    .list{
        width: 100%;
        overflow: hidden;
    }
    .list img{
        width: 100%;
    }
</style>