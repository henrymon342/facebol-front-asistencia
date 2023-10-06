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
              <label class="form-label" for="#carrera">Universidad o instituto</label>
              <select class="form-select" v-model="form.instituto">
                <option v-for="(ins) in uniins" :value="ins.id">
                  {{ ins.nombre_uniins }}
                </option>
              </select>

              <label class="form-label" for="#carrera">Carrera</label>
              <select class="form-select" v-model="form.carrera">
                <option v-for="(carre) in carrerasView" :value="carre.id">
                  {{ carre.nombre_carrera }}
                </option>
              </select>

              <label class="form-label" for="#areas">Áreas</label>
              <select class="form-select" v-model="form.areas">
                <option v-for="(area) in areasView" :value="area.id">
                  {{ area.nombre_area }}
                </option>
              </select>

              <label class="form-label" for="#generacion"
                >Generación</label
              >
              <select class="form-select" v-model="form.generacion_id">
                <option v-for="(gen) in generaciones" :value="gen.id">
                  {{ gen.generacion }}
                </option>
              </select>

              <label class="form-label" for="#tiposdeusuario">Tipos de usuario</label>
              <select class="form-select" v-model="form.tipodeusuario">
                <option v-for="(type) in usertypes" :value="type.id">
                  {{ type.tipousuario }}
                </option>
              </select>


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
            <button class="btn btn-primary col-2" @click="showPopup">
              modal
            </button>
          </div>
        </div>
        <div class="col-4">
          <img src="../../../assets/bg2.jpg" class="img-thumbnail p-0" alt="" />
        </div>
      </div>
    </form>
    <!-- <Alert /> -->
  </main>

  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
</template>



<script>
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import Alert from "../../modal/Alert.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import UsuarioService from "./../../../services/usuario.service";
export default {
  name: "registro",
  components: { VueDatePicker },
  onMounted() {
    this.myModal = new bootstrap.Modal(document.getElementById('alertPopup'))
    console.log("funcion cuando se inicia el componente!");
  },
  data() {
    return {
      usuarios: [],
      myModal: {},
      areasView: "",
      usertypes: [ 
        { id: 1, tipousuario: "ADMINISTRADOR" },
        { id: 2, tipousuario: "PASANTE" }
      ],
      uniins: [],
      carrerasView: "",
      generaciones: "",
      form: {
        nombres: "",
        apellido1: "",
        apellido2: "",
        ci: "",
        date: null,
        celular: "",
        instituto: "",
        carrera: "",
        areas: "",
        direccion: "",
        generacion_id: "",
        email: "",
        password: "",
        tipodeusuario: ""
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

        this.carrerasView = carreras.data;
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
        this.areasView = areas.data;
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
        this.usertypes = tipos.data;
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
        this.uniins = univins.data;
        // this.form.tipos = tipos.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getGeneraciones() {
      try {
        const geners = await axios.get(
          "http://192.168.0.2/asitenback/public/api/v1/generacions"
        );

        console.log(geners.data);
        this.generaciones = geners.data;
        // this.form.tipos = tipos.data;
      } catch (e) {
        console.log(e);
      }
    },
    showPopup(){
      this.myModal.show();
    }
  },
  mounted() {
    this.getUsuarios();
    this.getCarreras();
    this.getAreas();
    this.getTipoUsuarios();
    this.getInstitutosUniv();
    this.getGeneraciones();
  },
};
</script>

<style scoped></style>
