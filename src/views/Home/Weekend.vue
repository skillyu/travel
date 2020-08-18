<template>
  <div>
      <div class="weekHead">
          <p>周末去哪儿</p>
      </div>
       
       <div class="week">
           <ul>
               <li class="weekItem" v-for="(item,index) in weekendList" :key="index">
                   <img class="weekImg" :src="item.imgUrl"/>
                   <p class="weektitle">{{item.title}}</p>
                   <p class="desc">{{item.desc}}</p>
               </li>
           </ul>
       </div>
  </div>
</template>

<script scoped>
export default {
    name:'Weekend',
    props:{
        weekendList:Array
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    .weekHead{
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        background: #eee;
        padding-left: 10px;
    }
    .week ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .weekItem{
        font-size: 5vw;    
    }
    .weekImg{
        width: 100vw;
    }
    .weektitle{
        background: none;
        margin: 0;
        margin-left: 10px;
        font-size: 5vw;
    }
    .desc{
        color: #ccc;
        padding-left: 10px;
        margin: 0;
        margin-bottom: 10px;
    }
</style>