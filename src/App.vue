<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import { store } from './store/index'
</script>

<template>
  <div class="page-wrapper">
    <Header @toggleModal="store.toggleModal(true)"/>

    <main class="main">
      <router-view></router-view>
    </main>

    <Modal :isOpen="store.isOpen" @toggleModal="store.toggleModal(false)"/>
    <Footer />
  </div>
</template>

<style scoped>

</style>
