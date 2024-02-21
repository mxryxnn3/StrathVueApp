<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <v-app>
    <navbar></navbar>  
     <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

