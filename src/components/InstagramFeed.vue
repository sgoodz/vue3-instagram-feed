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

const fetchInstaData = (url) => {
  axios
    .get(url)
    .then((response) => {
      if (response.hasOwnProperty("error")) {
        isLoading.value = false;
        hasError.value = true;
      } else {
        instagramData.value = response.data;
        if (instagramData !== null) {
          paginationNextUrl.value = instagramData._rawValue.paging.next;
          paginationPrevUrl.value = instagramData._rawValue.paging.previous;
        }
        isLoading.value = false;
      }
    })
    .then(() => {
      if (props.pagination) {
        usePagination.value = props.pagination;
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      hasError.value = true;
      isLoading.value = false;
    });
};

onMounted(() => {
  const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
  fetchInstaData(url);
});

const handlePaginationNext = () => {
  fetchInstaData(paginationNextUrl.value);
};

const handlePaginationPrev = () => {
  fetchInstaData(paginationPrevUrl.value);
};
</script>

<template>
  <div class="container">
    <h1 v-if="isLoading">LOADING...</h1>
    <h1 v-else="hasError">Ooops, something went wrong.</h1>
    <div v-else class="gallery">
      <div
        v-for="image in instagramData.data"
        :key="image.id"
        class="gallery-item"
      >
        <a
          :href="image.permalink"
          :key="image.id"
          target="_blank"
          rel="noreferrer"
        >
          <img
            v-if="
              image.media_type === 'IMAGE' ||
              image.media_type === 'CAROUSEL_ALBUM'
            "
            :src="image.media_url"
            :alt="image.caption"
            :key="image.id"
            class="gallery-image"
          />
          <video v-else :key="image.id" class="gallery-image">
            <source :src="image.media_url" type="video/mp4" />
          </video>
        </a>
      </div>
    </div>
    <div v-if="usePagination">
      <div v-if="paginationPrevUrl">
        <button class="" type="button" @click="handlePaginationPrev">
          Previous
        </button>
      </div>
      <div v-if="paginationNextUrl">
        <button class="" type="button" @click="handlePaginationNext">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem, -1rem;
  padding-bottom: 3rem;
}
.gallery-item {
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
}
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
