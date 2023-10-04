<template>
  <!-- <Navbar /> -->
  <div class="bg-dark text-secondary text-center vh-100">
    <div class="position-absolute top-50 start-50 translate-middle">
      <h1 class="display-5 fw-bold text-white">Banco de datos Facebol</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 w-5">
          Sistemas de asistencias para el personal de la empresa Facebol. Aqui puedes registrar al personal en la base de datos, tambien la gestión de asistencia.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <router-link type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" to="/asistencia"> Asistencias </router-link>
          <router-link type="button" class="btn btn-outline-light btn-lg px-4" to="registro">Registros</router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="contact">
    <h1 class="title">Contacto</h1>
    <form action class="form" @submit.prevent="contact">
      <label class="form-label" for="#name">Nombre</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#email">Email</label>
      <input
        v-model="email"
        class="form-input"
        type="text"
        id="email"
        placeholder="Email"
      />
      <input class="form-submit" type="submit" value="Contactar" />
    </form>
  </div> -->

</template>

<script >

</script>

<style scoped>

</style>
