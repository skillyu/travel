<template>
  <div>
      <div class="title">热门推荐</div>
      <ul class="recomd">
          <li class="item" v-for="item in recommendList" :key="item.id">
              <img class="item_img" :src="item.imgUrl" alt="">
              <div class="item_info">
                  <p>{{item.title}}</p>
                  <p>{{item.desc}}</p>
                  <button>查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script scoped>
export default {
    name:'HomeRecomend',
    props:{
        recommendList:Array
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.title{
    width: 100%;
    height: 40px;
    background: #eee;
    line-height: 40px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
}

@media screen and (min-width: 1200px){
    .recomd{
        list-style: none;
        width: auto;
        padding: 0;
        margin: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        overflow: hidden;
        }
    .item{
        display: flex;
        align-items: flex-start;
        text-align: left;
        justify-content:center;
    }
    .item p{
        margin-top: 5px;
        }
    .item_img{
        width:  2.5rem;
        height: 2.5rem;
    } 
    .item_info{
        margin-left: 5px;
        font-size: 15px;
    }
    .item_info p:nth-child(2){
        font-size: 14px;
        color:#ccc;
    }
    .item_info button{
        background: #ff9300;
        border-radius: 5px;
        border: #ff9300;
        line-height: 20px;
        margin-top: 20px;
        padding: 5px 10px;
    }
}

@media screen and (max-width: 768px){
    .recomd{
        list-style: none;
        width: auto;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    .item{
        width: 100%;
        display: flex;
        margin: 10px;
        padding: 0;
    }
    .item_img{
        width:  2.5rem;
        height: 2.5rem;
    }
    .item_info{
        width: auto;
        height: 2.5rem;
        font-size: 16px;
        margin-left: 10px;
    } 
    .item_info p{
        margin: 5px 0 ;
    }
    .item_info p:nth-child(2){
         font-size: 15px;
         color: #ccc;
     }
     .item_info button{
         background: #ff9300;
         border:1px solid #ff9300;
         border-radius: 4px;
         padding: 4px 10px;
     }
}
</style>