<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" v-model="checked">
      <strong>{{index + 1}}</strong>
      {{todo.title}}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      checked: this.todo.completed
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  .rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  input {
    margin-right: 1rem;
  }

  .done {
    text-decoration: line-through;
  }
</style>