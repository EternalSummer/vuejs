<template>
  <div id="app">
      <input type="text" v-model="inputText" @keyup.enter="handleSubmit"/>
      <button @click="handleSubmit">提交</button>
      <ul>
        <todo-item v-for="(item,index) in todoList" 
                  :content="item"
                  :index="index"
                  :key="index"
                  @delete="handleDelete"
                  >
        </todo-item>
      </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
  name: 'TodoList',
  components:{
    'todo-item':TodoItem
  },
  data(){
    return {
        inputText:'',
        todoList:[]
    }
  },
  methods:{
     handleSubmit(){
       if(this.inputText !== ''){
          this.todoList.push(this.inputText);
          this.inputText='';
       }
     },
     handleDelete(index){
       this.todoList.splice(index,1);
     }
  }
}
</script>

<style >
  input{
    width: 200px;
    height: 20px;
    border:1px solid #c0cbcb;
    border-radius: 3px;
  }
</style>
