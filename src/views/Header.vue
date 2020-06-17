<template>
  <div class="about">
      <div class="back">
        <span class="iconfont">&#xe652;</span>
      </div>        
      <el-input v-model="city" placeholder="输入城市/景点/游玩主题"></el-input>
      <div class="city">
        <span>上海</span>
        <i class="iconfont">&#xe658;</i>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data(){
    return{
      city:""
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
    justify-content: space-between;
  }
  .back{
    width: 5%;
    
  }
  .back .iconfont{
    font-size: 24px;
  }
  .about >>> .el-input__inner{
    width: 100%;
    height: 30px;
  }
  .city{
    width: 8%;
  }
</style>