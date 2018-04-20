

Vue.component('todo-item',{
    props:['content','index'],
    template:'<li @click="handleDelete">{{content}}</li>',
    methods:{
        handleDelete:function(){
            this.$emit('delete',this.index)
        }
    }
})


new Vue({
    el:"#app",
    data:{
        inputText:'',
        todoList:[],
    },
    methods:{
        handleSubmit:function(){
            if(this.inputText!==''){
                this.todoList.push(this.inputText);
                this.inputText = '';
            }
           
        },
        handleDelete:function(index){
           this.todoList.splice(index,1);
        }
    }
})