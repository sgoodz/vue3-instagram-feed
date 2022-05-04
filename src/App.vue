<script setup>
import InstagramGallery from "./components/InstagramGallery.vue";
</script>

<template>
  <InstagramGallery
    :count="5"
    accessToken="IGQVJXREN4ZA1VZARXItZAGphaXpwb2tObWk4S1NQbTlCczMzWHV4X2xYVjYtTHM5VngwNjdUZAF9ORjFLTmc0SDdhRTZARTGVWR3ZAvZAHAwVWQweVJSczE0M3ZAzRVM0T210NzVOb0NVMU1Ua3MwN0pJZA3U5VwZDZD"
    :pagination="true"
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
