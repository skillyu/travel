<template>
  <div>
      <div class="area">您的位置</div>
      <div class="button">北京</div>
      <div class="area">热门城市</div>
      <div class="hot_city">
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
      </div>
      <div class="area">a</div>
      <div class="hot_city">
          <div class="button">北京</div>
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
</template>

<script>
export default {

}
</script>

<style scoped>
    .area{
        width: 100%;
        height: 30px;
        background: #f4f4f4;
        line-height: 30px;
        text-align: left;
        padding-left: 10px;
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
</style>