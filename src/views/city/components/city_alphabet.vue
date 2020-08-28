<template>
  <ul class="list">
      <li v-for="item of letters" :key="item"
        :ref="item"
        @click="handClick"
        @touchstart='handTouchStar'
        @touchmove='handTouchMove'
        @touchend='handTouchEnd'
      >
        {{item}}
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
            touchStatus:false,
            startY:0,
            timer:''
        }
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handClick(e){
            this.$emit('change',e.target.innerText)
        },
        handTouchStar(){
             this.touchStatus = true
        },
        handTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const startY = this.$refs['A'][0].offsetTop
                    const touchY = e.touches[0].clientY -79
                    const index = Math.floor((touchY-startY) / 20)
                    if(index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                }, 16);
               
            }
        }, 
        handTouchEnd(){
            this.touchStatus = false
        },  
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