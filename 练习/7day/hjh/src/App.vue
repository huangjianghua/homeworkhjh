<template>
  <div id="app">
      <!-- <Inputs></Inputs> -->
    <panel></panel>
  </div>
</template>

<script>
import panel from '@/components/Panel'
import Inputs from '@/components/Input'
import Imges from '@/assets/tianmao.png'
export default {
  name: 'App',
  components: {
    Inputs,
    panel
   
  },
  data(){
    return{
      Imges 
    }
  }
}
</script>

<style>
.app{
  width: 100%;
  height: 600px;
  background: url(./assets/tianmao.png) no-repeat center transparent ;
}

</style>
