<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <!----------------------- Login Container -------------------------->
    <div class="row border rounded-5 p-3  shadow box-area">
      <!--------------------------- Left Box ----------------------------->
      <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style="background: #103cbe;">
        <div class="featured-image mb-3">
          <img src="../assets/receptionist-7.png" class="img-fluid" style="width: 250px;">
        </div>
        <p class="text-white fs-2" style="font-family: 'Courier New', Courier, monospace; font-weight: 600;">Petfect 🐕</p>
        <small class="text-white text-wrap text-center" style="width: 17rem;font-family: 'Courier New', Courier, monospace;">El trato que ellos merecen ❤️.</small>
      </div>
      <!-------------------- ------ Right Box ---------------------------->

      <div class="col-md-6 right-box">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>Bienvenido a Petfect!</h2>
            <p>Registrate e inicia sesión para agendar una cita!</p>
          </div>
          <div class="input-group mb-3">
            <input v-model="user.email"  type="email" class="form-control form-control-lg fs-6" placeholder="Email">
          </div>
          <div class="input-group mb-1">
            <input v-model="user.password" type="password" class="form-control form-control-lg fs-6" placeholder="Contraseña">
          </div>
          <div class="input-group mb-3">
            <input v-model="user.name"  type="text" class="form-control form-control-lg fs-6" placeholder="Nombre">
          </div>
          <div class="input-group mb-1">
            <input v-model="user.phone" type="tel" class="form-control form-control-lg fs-6" placeholder="Telefono">
          </div>
          <div class="input-group mb-3">
            <input v-model="user.address" type="text" class="form-control form-control-lg fs-6" placeholder="Dirección">
          </div>
          <div class="input-group mb-3">
            <button v-on:click="register" class="btn btn-lg btn-primary w-100 fs-6">Registrarse</button>
          </div>
          <div class="input-group mb-3">
            <small class="text-info" v-on:click="redirectLogin">¿Ya tienes cuenta?</small>
            <small class="text-danger" v-if="authError">Error de autentificación</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Register',
  data: function () {
    return {
      user: {
        email: '',
        password: '',
        name: '',
        phone: '',
        address: '',
        role_id: 2
      },
      authError: false
    }
  },
  methods: {
    register: function(){
      axios.post(
          'https://as-project-backend.vercel.app/auth/register',
          this.user
      ).then((response) => {
        if(response.status === 201){
          alert('Usuario registrado con éxito, por favor inicie sesión')
          this.$router.push({name: 'LogIn'});
        } else {
          this.authError = true;
        }
      }).catch((error) => {
        this.authError = true;
      });
    },
    redirectLogin: function(){
      this.$router.push({name: 'LogIn'});
    }
  }
}

</script>

<style scoped>

</style>