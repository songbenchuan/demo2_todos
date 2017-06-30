<template>
  <li @mouseenter="isShow(true)" @mouseleave="isShow(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isDisplay" @click="remove(index)">删除</button>
  </li>

</template>

<script>
  export default {
      data () {
          return {
              bgColor: 'white',
              isDisplay: false
          }
      },
      props: {
          todo: Object,
          index: Number,
          removeTodo: Function
      },
      methods: {
          isShow (isShow) {
              this.isDisplay = isShow
              this.bgColor = isShow ?'#DFDFDF':'white'
          },
          remove (index) {
              if(confirm(`确定要删除${this.todo.name}吗`))
              this.removeTodo(index)
          }
      }

  }
</script>

<style>

</style>
