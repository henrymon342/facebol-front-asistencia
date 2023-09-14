<template>
  <main class="container-fluid p-3">
    <h3>Registro de personal</h3>
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-6">
            <label for="exampleFormControlInput1" class="form-label"
              >Nombre(s)</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="nombres"
            />
            <label for="exampleFormControlInput1" class="form-label"
              >Apellidos</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="apellidos"
            />
            <div class="row">
              <div class="col">
                <label for="exampleFormControlInput1" class="form-label"
                  >CI</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ci"
                />
                <label for="exampleFormControlInput1" class="form-label"
                  >Fecha de Nacimiento</label
                >
                <VueDatePicker v-model="date"></VueDatePicker>
              </div>
              <div class="col">
                <label for="exampleFormControlInput1" class="form-label"
                  >Número de Cel.</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="celular"
                />
                <label for="exampleFormControlInput1" class="form-label"
                  >Nombre(s)</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="nombres"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <label for="exampleFormControlInput1" class="form-label"
              >Intituto o Universidad</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="instuto o universidad"
            />
            <label for="exampleFormControlInput1" class="form-label"
              >Carrera</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="carrera"
            />
            <label for="exampleFormControlInput1" class="form-label"
              >Dirección</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="dirección"
            />
            <label for="exampleFormControlInput1" class="form-label"
              >Codigo de targeta</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="codigo"
              disabled
            />
          </div>
          <div class="col-12">
            <div class="table-responsive">
              <h5 class="pt-5 pb-3 text-center">Horario</h5>
              <table class="table table-striped table-sm">
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
                  <tr>
                    <td>{{ horario.hora[0] }}</td>
                    <td v-for="(hora, j) in horario.data" :key="j">
                      <!-- {{ hora[0] }} -->
                      <button
                        v-if="hora[0] == 0"
                        type="button"
                        class="btn btn-light"
                        @click="hora[0] = !hora[0]"
                      >
                        mañana
                      </button>
                      <button
                        v-else
                        type="button"
                        class="btn btn-warning"
                        @click="hora[0] = !hora[0]"
                      >
                        mañana
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>{{ horario.hora[1] }}</td>
                    <td v-for="(hora, k) in horario.data" :key="k">
                      <!-- {{ hora[1] }}  -->
                      <button
                        v-if="hora[1] == 0"
                        type="button"
                        class="btn btn-light"
                        @click="hora[1] = !hora[1]"
                      >
                        tarde
                      </button>
                      <button
                        v-else
                        type="button"
                        class="btn btn-warning"
                        @click="hora[1] = !hora[1]"
                      >
                        tarde
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="flex text-center">
          
          <button type="button" class="btn btn-primary col-2">Registrar</button>
        </div>
      </div>
      <div class="col-4">
        <img src="../../../assets/bg2.jpg" class="img-thumbnail p-0" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "registro",
  components: { VueDatePicker },
  data() {
    return {
      date: null,
      horario: {
        dias: [
          "hora",
          "lunes",
          "martes",
          "miercoles",
          "jueves",
          "viernes",
          "sabado",
          "domingo",
        ],
        hora: ["9:00", "14:00"],
        turno: ["mañana", "tarde"],
        data: [
          [0, 1],
          [1, 0],
          [1, 0],
          [0, 1],
          [0, 1],
          [0, 1],
          [0, 1],
        ],
      },
    };
  },
  methods: {
    cambio(estado) {},
  },
};
</script>

<style scoped></style>
