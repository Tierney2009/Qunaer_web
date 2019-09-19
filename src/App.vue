<template>
  <div id="app">
    <!--避免重复加载，增加可用性-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
