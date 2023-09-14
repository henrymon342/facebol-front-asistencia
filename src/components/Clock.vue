<template>
    <div>
      <h6 class="display-4 clock"> {{ currentTime }} </h6>
    </div>
  </template>
  
  <script>
  export default {
    name: "Clock",
    component: "Clock",
    data() {
      return {
        currentTime: new Date().toLocaleTimeString(),
      };
    },
    mounted() {
      // Actualiza la hora cada segundo
      setInterval(() => {
        this.currentTime = new Date().toLocaleTimeString();
      }, 1000);
    },
  };
  </script>

<style scoped>
    .clock{
    font-family: 'Orbitron', sans-serif;
    }
</style>

  
  
  
  
  
  