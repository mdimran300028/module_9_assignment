<script setup>
import {onBeforeMount,onMounted,ref} from "vue";
const myData = ref([])
onBeforeMount(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then(response=>response.json())
      .then(data=>{
        myData.value = data
      })
})
export {myData}
</script>

<template>

</template>

<style scoped>

</style>
