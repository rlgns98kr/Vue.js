<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      <h1>Image uploader</h1>
    </a>
    <div class="right menu">
      <a href="#" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style>
</style>