<template>
  <div>
    <button @click="dogClicked">강아지 이미지 가져오기</button>
    <button @click="catClicked">고양이 이미지 가져오기</button>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  methods: {
    dogClicked() {
      this.$emit("dogButtonClick");
    },
    catClicked() {
      this.$emit("catButtonClick");
    }
  }
};
</script>

<style>
</style>