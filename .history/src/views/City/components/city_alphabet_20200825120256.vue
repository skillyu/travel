<template>
  <ul class="list">
      <li v-for="(item,key) of cities" :key="key"
        ref="key"
        @click="handClick"
      >
        {{key}}
      </li>
  </ul>
</template>

<script>
export default {
    name:'alphabet',
    props:{
        cities:Object
    },
    methods:{
        handClick(e){
            this.$emit('change',e.target.innerText)
        }
    }
}
</script>

<style scoped>
    .list{  
        list-style: none;
        position: absolute;
        right: 0;
        bottom: 0;
        top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: #00bcd4 ;
    }
    .list li{
        line-height: 1.5rem;
        font-size: 1rem;
    }
</style>