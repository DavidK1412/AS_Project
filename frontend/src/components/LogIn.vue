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
            <p>Inicia sesión para agendar una cita!</p>
          </div>
          <div class="input-group mb-3">
            <input v-model="user.email" type="email" class="form-control form-control-lg fs-6" placeholder="Usuario">
          </div>
          <div class="input-group mb-1">
            <input v-model="user.password" type="password" class="form-control form-control-lg fs-6" placeholder="Contraseña">
          </div>
          <div class="input-group mb-3">
            <button v-on:click="logIn" class="btn btn-lg btn-primary w-100 fs-6">Iniciar Sesión</button>
          </div>
          <div class="input-group mb-3">
            <small class="text-info" v-on:click="redirectRegister">¿Aún no tienes cuenta?</small>
            <small class="text-danger" v-if="authError">Usuario o contraseña incorrectos</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jwtDecode from "jwt-decode";
export default {
  name: 'LogIn',
  computed: {
    isAuthenticated: {
      get: function (){
        return this.$route.meta.requiresAuth;
      },
      set: function (){}
    }
  },
  data: function () {
    return {
      user: {
        email: '',
        password: ''
      },
      authError: false
    }
  },
  methods: {
    logIn: function (){
      axios.post(
          'https://as-project-backend.vercel.app/auth/login',
          this.user
      ).then((response) => {
        localStorage.setItem('token', response.data.token);
        const tokenData = jwtDecode(response.data.token);
        if (tokenData.role === 1) {
          this.$emit('loadAdminView');
        } else {
          this.$emit('loadUserView');
        }
      }).catch((error) => {
        this.authError = true;
      });
    },
    redirectRegister: function (){
      this.$router.push({name: 'Register'});
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
body{
  font-family: 'Poppins', sans-serif;
}
/*------------ Login container ------------*/
.box-area{
  width: 930px;
}
/*------------ Right box ------------*/
.right-box{
  padding: 40px 30px 40px 40px;
}
/*------------ Custom Placeholder ------------*/
::placeholder{
  font-size: 16px;
}
.rounded-4{
  border-radius: 20px;
}
.rounded-5{
  border-radius: 30px;
}
/*------------ For small screens------------*/
@media only screen and (max-width: 768px){
  .box-area{
    margin: 0 10px;
  }
  .left-box{
    height: 100px;
    overflow: hidden;
  }
  .right-box{
    padding: 20px;
  }
}
</style>