<script setup>
//imports
import { ref, onMounted } from "vue";

//prop definition
const props = defineProps({
  accessToken: String,
  count: Number,
  pagination: Boolean,
});

//register state
const loading = ref(true);
const error = ref(false);
const instagramData = ref(null);
const usePagination = ref(false);
const paginationNextUrl = ref("");
const paginationPrevUrl = ref("");

//main fetch function
const fetchInstagramData = async (url) => {
  console.log(props.accessToken);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log({ data });
      if (data.hasOwnProperty("error")) {
        loading = false;
        error = true;
      } else {
        instagramData = data;
        loading = false;
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      error = true;
      loading = false;
    });
};

fetchInstagramData(
  `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${props.accessToken}`
);
</script>

<template>
  <h1>INSTAGRAM GALLERY</h1>
</template>

<style></style>
