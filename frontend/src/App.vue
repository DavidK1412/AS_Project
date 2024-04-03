<template>
  <router-view
      v-on:loadUserView="loadUserView"
      v-on:loadAdminView="loadAdminView"
      v-on:logOut="logout"
  />
</template>

<script>
import jwtDecode from "jwt-decode";

export default {
  name: 'App',
  computed: {
    isAuthenticated: {
      get: function (){
        return !!localStorage.getItem('token');
      },
      set: function(){}
    }
  },
  methods: {
    logout: function(){
      localStorage.removeItem('token');
      this.isAuthenticated = false;
      this.$router.push({name: 'LogIn'});
    },
    loadAdminView: function(){
      this.isAuthenticated = true;
      this.$router.push({name: 'AdminView'});
    },
    loadUserView: function(){
      this.isAuthenticated = true;
      this.$router.push({name: 'UserView'});
    },
  },
  created: function (){
    if(this.isAuthenticated){
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      if(decoded.role === 1){
        this.loadAdminView();
      } else {
        this.loadUserView();
      }
    } else {
      this.$router.push({name: 'LogIn'});
    }

  }
}
</script>

<style scoped>

</style>
