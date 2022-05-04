import InstagramFeed from "./components/InstagramFeed.vue";

export default {
  install: (app, options) => {
    app.component("InstagramFeed", InstagramFeed);
  },
};
