<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <Icon></Icon>
  </div>
</template>

<script>
import HomeHeader from '../Header'
import Icon from './Icon.vue'

export default {
  name: 'Home',
  components: {
   HomeHeader,
   Icon
  }
}
</script>
<style scoped>
  .home{
    width:auto;
    height:1000px;
  }
</style>
