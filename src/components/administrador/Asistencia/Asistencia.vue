<template>
  <main class="">
    asistencia
    <button @click="obtenerEstudiantes">Get users</button> <br />

    <div class="users" v-for="user in users" :key="user.id">
      <h2>{{ user.nombre }}</h2>
      <p>{{ user.apellido }}</p>
    </div>
  </main>
</template>

<script>
import axios from "axios";

// http://localhost:8080/asitenback/public/api/v1/estudiantes
export default {
  name: "asistencia",
  data() {
    return {
      users: []
    };
  },
  methods: {
    async obtenerEstudiantes() {
      try {
        const users = await axios.get(
          "http://localhost:8080/asitenback/public/api/v1/estudiantes"
        );

        this.users = users.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped></style>
