<template>
  <div class="dropper">
    <input type="file" />
    <span>Drag and Drop Images here</span>
  </div>
</template>

<script>
export default {
  name: "UploadForm"
};
</script>

<style>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.dropper:hover {
  background: lightblue;
}
</style>