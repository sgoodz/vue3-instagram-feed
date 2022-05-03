<script setup>
import { ref } from "vue";
import InstagramGallery from "./components/InstagramGallery.vue";
console.log(import.meta.env.VITE_ACCESS_KEY);
</script>

<template>
  <InstagramGallery
    :count="24"
    accessToken="{{import.meta.env.VITE_ACCESS_KEY}}"
  />
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
