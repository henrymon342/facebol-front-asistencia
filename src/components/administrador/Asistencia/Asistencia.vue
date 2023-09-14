<template>
  
  <main class="">
    <!-- asistencia
    <button @click="obtenerEstudiantes">Get users</button> <br />

    <div class="users" v-for="user in users" :key="user.id">
      <h2>{{ user.nombre }}</h2>
      <p>{{ user.apellido }}</p>
    </div> -->

    <div class="bg-dark text-white px-4 py-5 text-center">
      <div class="pricing-header mx-auto text-center">
        <!-- <h6 class="display-4 clock">{{ clock }} 12:21 pm</h6> -->
        <Clock />
      </div>
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white"> Sistema de asistencias </h1>
      <div class="col-lg-10 mx-auto">
        <div class="table-responsive">
              <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      v-for="(dia, index) in horario.dias"
                      :key="dia"
                    >
                      {{ dia }}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(data, i) in horario.data" :key="i">
                    <td> {{ data.llegada }} </td>
                    <td> {{ data.codigo }} </td>
                    <td> {{ data.nombre }} </td>
                    <td> {{ data.obs }} </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Historial</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Generar reporte</button>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>

<script>
import Clock from "../../Clock.vue"
import axios from "axios";

// http://localhost:8080/asitenback/public/api/v1/estudiantes
export default {
  name: "asistencia",
  components: {
    Clock,
  },
  data() {
    return {
      users: [],
      clock: 10,
      horario: {
        dias: [
          "hora llegada",
          "codigo",
          "nombre",
          "Observación",
        ],
        data: [
        { llegada: '9:10 am', codigo: 'SIS1709', nombre: 'Pepito Perez', obs: 'Multa: 1 Bs' },
        { llegada: '9:11 am', codigo: 'SIS1704', nombre: 'Marquito Ortiz', obs: 'Multa: 2 Bs' },
        { llegada: '9:12 am', codigo: 'SIS1702', nombre: 'Maria Alani', obs: 'Multa: 2 Bs' },
        { llegada: '9:12 am', codigo: 'SIS1707', nombre: 'Coquito Paredes', obs: 'Multa: 4 Bs' }
        ]
      },
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
    countDownTimer () {
                if (this.clock > 0) {
                    setTimeout(() => {
                        this.clock -= 1
                        this.countDownTimer()
                    }, 1000)
                }
            },
    created () {
      this.countDownTimer()
    }
  },
};
</script>

<style scoped>
  .clock{
    font-family: 'Orbitron', sans-serif;
  }
</style>
