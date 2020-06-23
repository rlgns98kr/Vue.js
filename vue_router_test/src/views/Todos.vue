<template>
  <div>
    <h1>Todos</h1>
    <input @keypress.enter="pushTodo" v-model="inputContent" type="test" />
    <p v-for="todo in initTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.isCompleted" />
      {{todo.content}}
    </p>
    <p v-for="todo in todos" :key="todo.createdAt">
      <input type="checkbox" v-model="todo.isCompleted" />
      {{todo.content}}
    </p>
    <p />
    <p />
  </div>
</template>

<script>
import db from "@/firebase/init.js";

export default {
  name: "Todos",
  data() {
    return {
      todos: [],
      initTodos: [],
      inputContent: ""
    };
  },
  created() {
    db.collection("todos")
      .orderBy("createdAt", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.exists) {
            this.initTodos.push({
              id: doc.data().id,
              content: doc.data().content,
              isCompleted: doc.data().isCompleted,
              createdAt: doc.data().createdAt
            });
          }
        });
      });
  },
  watch: {
    todos: {
      handler: function(val) {
        this.addTodo(val[val.length - 1]);
      },
      deep: true
    }
  },
  methods: {
    addTodo(val) {
      db.collection("todos").add({
        content: val.content,
        isCompleted: val.isCompleted,
        createdAt: val.createdAt
      });
    },
    pushTodo() {
      this.todos.push({
        content: this.inputContent,
        isCompleted: false,
        createdAt: Date.now()
      });
    }
  }
};
</script>

<style>
</style>