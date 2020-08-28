<template>
  <div class="list" ref="wrapper">
    <div>
        <div class="area">您的位置</div>
        <div class="button">北京</div>
        <div>
            <div class="area">热门城市</div>
            <div class="hot_city" >
                <div class="button">{{item.name}}</div>
                <div class="button">北京</div>
                <div class="button">北京</div>
                <div class="button">北京</div>
                <div class="button">北京</div>
                <div class="button">北京</div>
                <div class="button">北京</div>
                <div class="button">北京</div>
                <div class="button">北京</div>
            </div>
        </div>
        
        <div class="area">a</div>
        <div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
        </div>
       <div class="area">a</div>
        <div class="city">
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
        </div>
        <div class="area">a</div>
        <div class="city">
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
            <div class="citys">北京</div>
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'list',
    props:{
        hotciyies:Array
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style scoped>
    .list{
        position: absolute;
        top: 70px;
        bottom: 0;
        overflow: hidden;
    }
    .area{
        height: 30px;
        background: #f4f4f4;
        line-height: 30px;
        text-align: left;
        padding-left: 10px;
        border:1px solid #ccc;
        border-left: 0;
        border-right: 0;
    }
    .button{
        width: 100px;
        height: 30px;
        border: 1px solid #ccc;
        line-height: 30px;
        margin: 10px;
    }
    .hot_city{
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
    }
    .citys{
        text-align: left;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }
</style>