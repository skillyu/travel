<template>
  <div class="city_head">
    <router-link to="/">
      <span class="iconfont" >&#xe652;</span>     
    </router-link>
    <span class="city_choose">城市选择</span>
    <el-input placeholder="输入城市名或拼音"></el-input>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .city_head{
    background: #00bcd4;
    color: white;
  }
  .city_head a{
    text-decoration: none;
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
    width: 72%;
    margin: auto;
  }
  .city_head .el-input__inner{
    height: 30px;
  }
</style>