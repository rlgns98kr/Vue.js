<template>
  <div class="lunch">
    <h1>점심메뉴 추천</h1>
    <button @click="pick">랜덤메뉴 추천</button>
    <div>{{choice}}</div>
  </div>
</template>

<script>
export default {
  name: "Lunch",
  data() {
    return {
      choice: "",
      menu: ["노랑통닭", "소풍", "김밥카페", "양자강", "순남시레기"]
    };
  },
  methods: {
    pick() {
      this.choice = this.menu[parseInt(Math.random() * 5)];
    }
  }
};
</script>