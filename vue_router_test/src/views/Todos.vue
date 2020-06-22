<template>
  <div>
    <h1>Todos</h1>
    <input type="test" />
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        <input type="checkbox" v-model="todo.isCompleted" />
        {{todo.content}}
      </li>
    </ul>
  </div>
</template>

<script>
import db from "@/firebase/init.js";

export default {
  name: "Todos",
  data() {
    return {
      todos: []
    };
  },

  created() {
    db.collection("todos")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.exists) {
            this.todos.push({
              id: doc.id,
              content: doc.data().content,
              isCompleted: doc.data().isCompleted
            });
          }
        });
      });
  }
};
</script>

<style>
</style>