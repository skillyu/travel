<template>
  <div class="city_head">
    <router-link to="/">
      <span class="iconfont" >&#xe652;</span>     
    </router-link>
    <span class="city_choose">城市选择</span>
    <el-input v-model="keyword" placeholder="输入城市名或拼音"></el-input>
  </div>
</template>

<script>
export default {
  props:{
    cities:Object
  },
  data(){
    return{
      keyword:'',
      list:[],
      timer:null
    }
  },
  watch:{
    keyword(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.cities){
          this.cities[i].forEach(value => {
           if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1){
                result.push(value)
              }
          });
        }
        this.list = result
      }, 100);
    }
  }
}
</script>

<style scoped>
  .city_head{
    height: 70px;
    background: #00bcd4;
    color: white;
  }
  .city_head a{
    text-decoration: none;
    text-align: center  ;
    line-height: 30px;
  }
  .city_choose{
    display:inline-block;
    width: 90%;
  }
  .iconfont{
    color: white;
    font-size: 18px;
  }
  .el-input{
    width: 96%;
    margin: auto;
    
  }
  .city_head >>>.el-input__inner{
    height: 30px;
    text-align: center;
  }
</style>