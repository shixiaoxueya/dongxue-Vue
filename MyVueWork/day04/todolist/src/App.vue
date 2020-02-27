<template>
<div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addTodo="addTodo"></todo-header>
        <todo-list :listArr="listArr"></todo-list>
        <todo-footer :listArr="listArr" @clearAll="clearAll"></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
import todoHeader from "./components/todoHeader"
import todoList from "./components/todoList"
import todoFooter from "./components/todoFooter"

export default {
  name: 'App',
  data(){
    return {
      listArr:[
        {id:0,content:"三级甲",checked:false},
        {id:1,content:"三级头",checked:false},
        {id:2,content:"三级包",checked:false},
      ]
    }
  },
  methods:{
    addTodo(item){
      this.listArr.unshift(item)
    },
    clearAll(){
      //将checked为true的过滤掉
      this.listArr = this.listArr.filter((item)=>{
          return !item.checked
      })
    }
  },
  components: {
    "todo-header":todoHeader,
    "todo-list":todoList,
    "todo-footer":todoFooter,
  },
  mounted(){
    this.bus.$on("change",(id,checked)=>{
      //id: 代表todolist中操作的是哪一个item
      //checked  代表当前item的状态
      // console.log(checked,id,"app");
      this.listArr.forEach((item)=>{
          if (item.id === id) {
             item.checked = checked;
          }
      })
    })
     this.bus.$on("delTodo",(id)=>{
         this.listArr = this.listArr.filter((item)=>{
             return  item.id !== id
       })
    })
  },
}
</script>
// scoped 可以保证组件内部的样式只作用当前的组件  不会污染别的组件
<style scoped>
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
