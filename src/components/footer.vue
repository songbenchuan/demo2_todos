<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allCheck"/>
    </label>
    <span>
          <span>已完成{{completeLength}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeLength>0" @click="removeComplete">清除已完成任务</button>
  </div>
</template>

<script>
  export default {


      props: ['todos', 'removeCompleteTodo', 'allCheckTodo'],

      computed: {
        completeLength () {
//              return this.todos.filter(todo => todo.complete).length
              return this.todos.reduce((preTotal, todo) => {
                 return preTotal += (todo.complete ? 1 : 0)
              }, 0)
        },
        allCheck: {
            get () {
                return this.completeLength === this.todos.length && this.todos.length>0
            },
            set (value) {
                this.allCheckTodo(value)
            }
        }
      },
      methods: {
          removeComplete () {
              if(confirm(`确定要删除已选择的任务吗？`))
              this.removeCompleteTodo()

          }
      }

  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
