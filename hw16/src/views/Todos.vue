<template>
  <div>
    <h2>Todo List</h2>
    <AddTodo
        @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <TodoList
        v-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Buy milk', completed: false},
        {id: 2, title: 'Buy bread', completed: false}, 
      ],
      filter: 'all'
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
    }
  },
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   }
  // },
  // mounted() {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
  //       .then(response => response.json())
  //       .then(json => {
  //         this.todos = json
  //       })
  // },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  components: {
    TodoList,
    AddTodo
  }
}
</script>