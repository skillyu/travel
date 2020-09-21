<template>
  <div class="about">
      <div class="back">
        <span class="iconfont icon1">&#xe652;</span>
      </div>        
      <el-input  placeholder="输入城市/景点/游玩主题"></el-input>
      <div class="city">
        <router-link to="/city">
          <span>{{this.$store.state.city}}</span>
          <i class="iconfont">&#xe658;</i>
        </router-link>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
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
    justify-content:space-between;
    align-items: center;
  }
  .back{
    width: 5%;
    position: relative;
  }
  .back .iconfont{
    font-size: 24px;
  }
  .el-input{
    max-width: 70%;
    margin: 0; 
  }
  .about >>> .el-input__inner{
    height: 30px;
  }
  .city{
    min-width: 15%;
    color: white;
    font-size: 16px;
  }
  .city a{
    text-decoration: none;
    text-decoration-color: none;
    color: white;
  }
  .iconfont{
    color: white;
    font-size: 14px;
    margin-left: 0.5vw;
  }
</style>