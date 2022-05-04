<script setup>
import InstagramFeed from "./components/InstagramFeed.vue";
</script>

<template>
  <InstagramFeed
    :count="10"
    accessToken="<your token here>"
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
