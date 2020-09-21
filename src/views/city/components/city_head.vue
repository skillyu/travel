<template>
  <div>
    <div class="city_head">
      <router-link to="/">
        <span class="iconfont">&#xe652;</span>
      </router-link>
      <span class="city_choose">城市选择</span>
      <el-input v-model="keyword" placeholder="输入城市名或拼音"></el-input>
    </div>
    <div class="seach_show" v-show="keyword">
      <ul>
        <li class="seach_city" v-for="item of list" :key="item.id">
          {{ item.name }}
        </li>
        <li v-show="!list.length">没有找到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            console.log(value.spell.indexOf);
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
};
</script>

<style scoped>
.city_head {
  height: 70px;
  background: #00bcd4;
  color: white;
}
.city_head a {
  text-decoration: none;
  text-align: center;
  line-height: 30px;
}
.city_choose {
  display: inline-block;
  width: 90%;
  text-align: center;
}
.iconfont {
  color: white;
  font-size: 18px;
}
.el-input {
  width: 96%;
  display: block;
  margin: auto;
}
.city_head >>> .el-input__inner {
  height: 30px;
  text-align: center;
}
.seach_show {
  position: absolute;
  width: 100%;
  background: #ccc;
  line-height: 30px;
  z-index: 10;
}
.seach_show ul {
  margin: 0;
  padding: 0;
}
.seach_show li {
  text-align: left;
  list-style: none;
  border-bottom: 1px solid #fff;
}
</style>
