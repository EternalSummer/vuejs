<template>
    <li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props:['content','index'],
  methods:{
    handleDelete(){
        this.$emit("delete",this.index);
    }
  }
}
</script>

<style scoped>
.item{
  color:rgb(253, 122, 0)
}
</style>
