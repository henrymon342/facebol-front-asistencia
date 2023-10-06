<script>
import Alert from './components/modal/Alert.vue';
  export default{
    name: 'App',
    components:{
      Alert
    },
    data(){
      return{
        obj: {
          nombre: 'carlos',
          edad: '22'
        }
      }
    }
  }
</script>

<template>
  <!-- <Navbar /> -->
  <router-view></router-view>
  <Alert nombre=obj.nombre visible="false" variant="success"></Alert>
</template>

<style scoped>

</style>
