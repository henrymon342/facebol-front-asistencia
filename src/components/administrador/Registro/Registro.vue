<template>
  <main class="container-fluid p-3">
    <h3>Registro de personal</h3>
    <form actio class="form" @submit.prevent="contact">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <label class="form-label" for="#nombres"
                >Nombre(s)</label
              >
              <input
                type="text"
                class="form-control"
                
                id="nombres"
                v-model="form.nombres"
              />
              <label class="form-label" for="#apellido1"
                >Apellido 1</label
              >
              <input
                type="text"
                class="form-control"
                
                id="apellidos1"
                v-model="form.apellido1"
              />
              <label class="form-label" for="#apellido2"
                >Apellido 2</label
              >
              <input
                type="text"
                class="form-control"
                
                id="apellidos2"
                v-model="form.apellido2"
              />
              <div class="row">
                <div class="col">
                  <label class="form-label" for="#ci"
                    >CI</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="ci"
                    
                    v-model="form.ci"
                  />
                  <label class="form-label" for="#fecha"
                    >Fecha de Nacimiento</label
                  >
                  <VueDatePicker id="fecha" v-model="form.date"></VueDatePicker>
                </div>
                <div class="col">
                  <label class="form-label" for="#celular"
                    >Número de Cel.</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="celular"
                    
                    v-model="form.celular"
                  />
                  <div class=""></div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <label class="form-label" for="#instituto"
                >Intituto o Universidad</label
              >
              <input
                type="text"
                class="form-control"
                id="instituto"
                
                v-model="form.instituto"
              />
              <label class="form-label" for="#carrera"
                >Carrera</label
              >
              <input
                type="text"
                class="form-control"
                id="carrera"
                
                v-model="form.carrera"
              />
              <label class="form-label" for="#direccion"
                >Dirección</label
              >
              <input
                type="text"
                class="form-control"
                id="direccion"
                
                v-model="form.direccion"
              />
              <label class="form-label" for="#codigo"
                >Codigo de credencial</label
              >
              <input
                type="text"
                class="form-control"
                id="codigo"
                
                v-model="form.codigo"
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
            
            <button class="btn btn-primary col-2" type="submit">Registrar</button>
          </div>
        </div>
        <div class="col-4">
          <img src="../../../assets/bg2.jpg" class="img-thumbnail p-0" alt="" />
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import UsuarioService from "./../../../services/usuario.service";
export default {
  name: "registro",
  components: { VueDatePicker },
  data() {
    return {
      usuarios: [],
      form: {
        nombres: "",
        apellido1: "",
        apellido2: "",
        ci: "",
        date: null,
        celular: "",
        instituto: "",
        carrera: "",
        direccion: "",
        codigo: ""

      },
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
    contact() {
      console.log(this.form);
    },
    getUsuarios() {
      UsuarioService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getUsuarios();
  }

};
</script>

<style scoped></style>
