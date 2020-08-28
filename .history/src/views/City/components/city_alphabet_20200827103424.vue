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
     methods: {
    handleLetterClick (e) {
      this.$emit('change',e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if(this.touchStatus){
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY -79
        const index = Math.floor((touchY-startY) / 20)
        if(index >= 0 && index < this.letters.length) {
          this.$emit('change',this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
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