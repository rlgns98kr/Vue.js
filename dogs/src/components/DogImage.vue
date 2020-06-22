<template>
  <div>
    <div>
      <img
        v-for="dogImage in dogImages"
        :key="dogImage.key"
        :src="dogImage.message"
        width="200"
        height="200"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DogImage",
  props: {
    dogImages: Array
  }
};
</script>

<style>
</style>