<template>
  <main class="container-fluid p-3">
    <h3>Registro de personal</h3>
    <form actio class="form" @submit.prevent="contact">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <label class="form-label" for="#nombres">Nombre(s)</label>
              <input
                type="text"
                class="form-control"
                id="nombres"
                v-model="form.nombres"
              />
              <label class="form-label" for="#apellido1">Apellido 1</label>
              <input
                type="text"
                class="form-control"
                id="apellidos1"
                v-model="form.apellido1"
              />
              <label class="form-label" for="#apellido2">Apellido 2</label>
              <input
                type="text"
                class="form-control"
                id="apellidos2"
                v-model="form.apellido2"
              />
              <div class="row">
                <div class="col">
                  <label class="form-label" for="#ci">CI</label>
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
              <label class="form-label" for="#direccion">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    id="direccion"
                    v-model="form.direccion"
                  />
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

              <label class="form-label" for="#carrera">Carrera</label>
              <select class="form-select">
                <option v-for="(carre, index) in form.carrera" :value="index">
                  {{ carre.nombre_carrera }}
                </option>
              </select>

              <label class="form-label" for="#areas">Áreas</label>
              <select class="form-select">
                <option v-for="(area, index) in form.areas" :value="index">
                  {{ area.nombre_area }}
                </option>
              </select>

              <label class="form-label" for="#codigo"
                >Generación</label
              >
              <input
                type="text"
                class="form-control"
                id="codigo"
                v-model="form.generacion"
              />

              <label class="form-label" for="#email">Correo</label>
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="form.email"
              />

              <label class="form-label" for="#password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="form.password"
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
            <button class="btn btn-primary col-2" type="submit">
              Registrar
            </button>
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
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import UsuarioService from "./../../../services/usuario.service";
export default {
  name: "registro",
  components: { VueDatePicker },
  onMounted() {
    console.log("funcion cuando se inicia el componente!");
  },
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
        carrera: [],
        areas: [],
        direccion: "",
        generacion: "",
        email: "",
        password: ""
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
      console.log(this.horarios);
    },
    getUsuarios() {
      UsuarioService.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async getCarreras() {
      try {
        const carreras = await axios.get(
          "http://192.168.0.2/asitenback/public/api/v1/carreras"
        );

        console.log(carreras.data);

        this.form.carrera = carreras.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getAreas() {
      try {
        const areas = await axios.get(
          "http://192.168.0.2/asitenback/public/api/v1/areas"
        );

        console.log(areas.data);
        this.form.areas = areas.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getTipoUsuarios() {
      try {
        const tipos = await axios.get(
          "http://192.168.0.2/asitenback/public/api/v1/tipousuarios"
        );

        console.log(tipos.data);
        // this.form.tipos = tipos.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getInstitutosUniv() {
      try {
        const univins = await axios.get(
          "http://192.168.0.2/asitenback/public/api/v1/uniins"
        );

        console.log(univins.data);
        // this.form.tipos = tipos.data;
      } catch (e) {
        console.log(e);
      }
    },
    // async getCodigoTarjeta() {
    //   try {
    //     const codigoTarjeta = await axios.post(
    //       "http://192.168.0.2/asitenback/public/api/v1/tarjetas"
    //     );

    //     console.log(codigoTarjeta.data);
    //     this.form.codigo = codigoTarjeta.data.id;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
  mounted() {
    this.getUsuarios();
    this.getCarreras();
    this.getAreas();
    this.getTipoUsuarios();
    this.getInstitutosUniv();
    // this.getCodigoTarjeta();
  },
};
</script>

<style scoped></style>
