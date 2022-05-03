<script setup>
import InstagramGallery from "./components/InstagramGallery.vue";
</script>

<template>
  <InstagramGallery :count="24" accessToken="" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
