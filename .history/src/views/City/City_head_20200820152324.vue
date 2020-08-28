<template>
  <div class="city_head">
    <router-link to="/">
      <span class="iconfont" >&#xe652;</span>     
    </router-link>
    <el-input :v-model="city" placeholder="输入城市/景点/游玩主题"></el-input>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .iconfont{
    text-decoration: none;
  }
</style>