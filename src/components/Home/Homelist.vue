<template>
  <div>
    <HomeHeader ></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
  import HomeHeader from './sub-components/Header.vue'
  import HomeSwiper from './sub-components/Swiper.vue'
  import HomeIcons from './sub-components/icons.vue'
  import HomeRecommend from './sub-components/Recommend'
  import HomeWeekend from './sub-components/Weekend'
  import axios from 'axios'
  import { mapState } from 'vuex'
export  default {
  name:"Home",
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
    return{
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data

        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      // console.log(res)
    }

  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }

}


</script>

<style>


</style>
