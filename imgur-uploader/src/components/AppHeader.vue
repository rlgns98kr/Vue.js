<template>
  <div class="ui secondary pointing menu">
    <router-link :to="{name:'ImageList'}" class="active item">Imgur uploader</router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link :to="{name:'ImageList'}" class="item">Gallery</router-link>
        <router-link :to="{name:'UploadForm'}" class="item">Upload</router-link>
        <a @click="logout" class="item">Logout</a>
      </div>
      <div v-else>
        <a @click="login" class="item">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>