<script setup>
import {onBeforeMount, onMounted, reactive, ref} from "vue";
let categoryListAPI = 'https://basic-blog.teamrabbil.com/api/post-categories'
const categories = reactive([])

const getCategories = ()=>{
  fetch(categoryListAPI)
      .then(response=>response.json())
      .then((data)=>{
        data.forEach(category=>{
          categories.push({
            id:category.id,
            name:category.name
          })
        })
      })
}

onBeforeMount(()=>{
  getCategories()
})

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name:'home'}">Module<span class="fw-bold text-primary">.9</span> Assignment </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<!--          <li class="nav-item"><router-link class="nav-link" :to="{name:'home'}">Home</router-link></li>-->
          <li class="nav-item"><router-link class="nav-link" :to="{name:'home'}">Home</router-link></li>
<!--          <li class="nav-item"><router-link class="nav-link" :to="{name:'blogs'}">Blogs</router-link></li>-->
          <li class="nav-item" v-for="category in categories" :key="category.id">
            <router-link class="nav-link" :to="{name:'blogs',params:{id:category.id}}">{{category.name}}</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'blogs',params:{id:'latest'}}">নতুন ব্লগ <span class="fw-bold text-danger">*</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
*{
  font-weight: bold;
}
.sticky{
  position: sticky;
  top: 0;
  z-index: 9999;
}

.navbar-brand{
  box-shadow: 0 0 0 0 #888888 !important;
}

.router-link-exact-active {
  color: var(--bs-navbar-active-color);
  box-shadow: 0 0 2px 2px #888888;
  border-radius: 3px;
  transition: all 150ms;
}

@media only screen and (max-width: 992px) {
  .router-link-exact-active {
    padding-left: 10px;
  }
  .navbar-brand{
    padding-left: 0;
  }
}
</style>
