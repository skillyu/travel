<template>
  <ul class="list">
      <li v-for="(item,key) of cities" :key="key"
        @click="handClick"
        @touchstart='handTouchStart'
        @touchmove='handTouchMove'
        @touchend='handTouchEnd'
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
    data(){
        return{
            touchStatus:false
        }
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
                console.log(letters)
            }
            return letters
        }
    },
    methods:{
        handClick(e){
            this.$emit('change',e.target.innerText)
        },
        handTouchStar(){
            
        },
        handTouchMove(){

        },
        handTouchEnd(){

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