<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :addTodo="addTodo"></todoHeader>
      <list :todos="todos" :removeTodo="removeTodo"></list>
      <todoFooter :todos="todos" :remove-complete-todo="removeCompleteTodo" :all-check-todo="allCheckTodo"></todoFooter>
    </div>
  </div>
</template>

<script>
  import Header from './header.vue'
  import List from './list.vue'
  import Footer from './footer.vue'
  import save from './save'
  export default {
      data () {
          return {
              todos: [
                {name: '吃饭', complete: false},
                {name: '睡觉', complete: true},
                {name: '打豆豆', complete: false}
              ]
          }
      },
      created () {
          this.todos = save.read()
      },
      components: {
        todoHeader:Header,
        List,
        todoFooter:Footer
      },
      methods: {
          addTodo (todo) {
              this.todos.unshift(todo)
          },
          removeTodo (index) {
              this.todos.splice(index, 1)
          },
          removeCompleteTodo () {
              this.todos = this.todos.filter(todo => !todo.complete)
          },
          allCheckTodo (isCheck) {
              this.todos.forEach(todo => {
                  todo.complete = isCheck
              })
          }
      },
      watch: {
          todos: {
              handler: save.save,
              deep: true
          }
      }
  }
</script>

<style>

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
