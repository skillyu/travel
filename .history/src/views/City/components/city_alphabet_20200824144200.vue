<template>
  <ul class="list">
      <li v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
    name:'alphabet',
    props:{
        cities:Object
    }
}
</script>

<style scoped>
    .list{
        list-style: none;
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-size: 14px;
        color: #00bcd4 ;
    }
    .list li{
        line-height: 30px;
    }
</style>