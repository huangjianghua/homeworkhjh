<template>
  <div id="app">
    <Btn size="sm"></Btn>
    <shut></shut>
    <Banner></Banner>
    <router-view/>
  </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import shut from '@/components/shuttiecopmponent.vue'
import Btn from '@/components/btn.vue'
export default {
  components:{
    Banner,
    shut,
    Btn
  }
}
</script>

<style>

</style>
