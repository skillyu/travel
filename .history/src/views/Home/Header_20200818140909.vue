<template>
  <div class="about">
      <div class="back">
        <span class="iconfont">&#xe652;</span>
      </div>        
      <el-input :v-model="city" placeholder="输入城市/景点/游玩主题"></el-input>
      <div class="city">
        <span>{{this.city}}</span>
        <i class="iconfont">&#xe658;</i>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props:{
    city: String
  },
  data(){
    return{
  
    }
  }
}
</script>
<style scoped>
  .about{
    width: auto;
    height: 44px;
    color: #333;
    background-color: #00bcd4;
    display: flex;
    align-items: center;
  }
  .back{
    font-size: 16px;
    padding: 0.1rem;
  }
  .el-input{
    width: 75%;
  }
  .about >>> .el-input__inner{
    width: 100%;
    height: 30px;
  }
  .city{
    color: white;
    width: 4rem;
    font-size: 16px;
    margin-left: 0.1rem;
  }
  .back .iconfont{
    color: white;
    font-size: 24px;
  }
</style>