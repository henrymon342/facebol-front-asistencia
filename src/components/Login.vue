<template>
  <main>
    <div class="logo-content col-md-6">
      <div class="logo">
        <img class="logo-img" src="../assets/logo-facebol.png" alt="" />
      </div>
      <div class="title">
        <h5>
            Sistema de asistencia
        </h5>
        <h5>
            Facebol
        </h5>
      </div>
    </div>
    <div class="login-content col-md-6">
      <h5 class="pb-3">Inicio de sesión</h5>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="username@facebol.com"
          v-model="usuario.email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="password"
          v-model="usuario.password"
        />
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" @click="login">Entrar</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
  export default {
    name: "login",
    data() {
      return {
        usuario: {
          email: "",
          password: ""
        }
        // email,
        // password
      };
    },
    methods: {
      login(){
        // console.log(this.usuario);
        axios.post('http://192.168.0.2/asitenback/public/api/v1/usuarios/login', { email: this.usuario.email, password: this.usuario.password }).then((result) => {
          console.log( result );
        }).catch((err) => {
          console.log(err);
        });
    },
    }
  }


</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:url('../assets/bg4.jpg');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;	
}

.logo-content{
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo {
  display: flex;
  justify-content: center;
}
.logo-img {
  width: 100px;
  /* height: 80px; */
}

input {
  width: 430px;
  max-width: 330px;
  padding: 8px;
  margin: auto;
}

.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #eee;
}

h5 {
    text-align: left;
    /* margin: 32px; */
    
    color: #eee;
  }
</style>
