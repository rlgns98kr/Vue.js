<template>
  <div>
    <div>
      <img
        v-for="catImage in catImages"
        :key="catImage.key"
        :src="catImage.message"
        width="200"
        height="200"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CatImage",
  props: {
    catImages: Array
  }
};
</script>

<style>
</style>