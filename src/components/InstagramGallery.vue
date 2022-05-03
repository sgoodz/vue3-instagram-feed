<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const props = defineProps({
  accessToken: String,
  count: Number,
  pagination: Boolean,
});

const isLoading = ref(true);
const hasError = ref(false);
const instagramData = ref(null);
const usePagination = ref(false);
const paginationNextUrl = ref("");
const paginationPrevUrl = ref("");

onMounted(() => {
  const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response);
      if (response.hasOwnProperty("error")) {
        isLoading.value = false;
        hasError.value = true;
      } else {
        instagramData.value = response.data;
        console.log(instagramData._rawValue);
        isLoading.value = false;
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      hasError.value = true;
      isLoading.value = false;
    });
});
</script>

<template>
  <h1>INSTAGRAM GALLERY</h1>
  <div>
    <h1 v-if="isLoading != false">LOADING...</h1>
    <h1 v-if="hasError != false">Ooops, something went wrong.</h1>
    <h1 v-else>{{ instagramData }}</h1>
  </div>
</template>

<style></style>
