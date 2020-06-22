<template>
  <div id="app">
    <h1>Dogs and Cats</h1>
    <Buttons @dogButtonClick="getDog" @catButtonClick="getCat" />
    <DogImage :dogImages="dogImages" />
    <CatImage :catImages="catImages" />
  </div>
</template>

<script>
import DogImage from "./components/DogImage.vue";
import CatImage from "./components/CatImage.vue";
import Buttons from "./components/Buttons";
import axios from "axios";

export default {
  name: "App",
  components: {
    DogImage,
    CatImage,
    Buttons
  },
  data() {
    return {
      title: "Dog Image Generator",
      catImages: [],
      dogImages: []
    };
  },
  methods: {
    getDog() {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(result => {
          this.dogImages.push({
            message: result.data.message,
            key: Date.now()
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    getCat() {
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then(result => {
          console.log(result);
          this.catImages.push({
            message: result.data[0].url,
            key: Date.now()
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

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
