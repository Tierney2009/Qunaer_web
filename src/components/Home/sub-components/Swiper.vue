<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item in list " :key="item.id">

      <img  class="swipe_img" :src="item.imgUrl" alt="">

    </swiper-slide>


    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  props:{
    list:Array
  },
  data (){
    return{
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true,
      },
      swiperList:[]
    }
  },
  computed:{
    showSwiper () {
      return this.list.length
    }
  },

}

</script>

<style>
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 30.25%;
    background-color: #dfdfdf;
  }
  .wrapper .swiper-pagination-bullet-active{
    background-color: #fff;
  }
  .swipe_img{
    width: 100%;
  }
</style>
