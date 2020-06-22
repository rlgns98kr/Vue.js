<template>
  <div>
    <h1>로또번호 추천</h1>
    <button @click="rnd">랜덤번호 추천</button>
    <div>{{a}}</div>
  </div>
</template>

<script>
export default {
  name: "Lotto",
  data() {
    return {
      a: []
    };
  },
  methods: {
    rnd() {
      this.a = [];
      while (this.a.length < 6) {
        let r = parseInt(Math.random() * 45) + 1;
        if (!this.a.find(n => n === r)) this.a.push(r);
      }
      this.a.sort((a, b) => a - b);
    }
  }
};
</script>

<style>
</style>