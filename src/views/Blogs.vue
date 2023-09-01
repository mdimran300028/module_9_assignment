<script setup>
import {useRoute} from "vue-router";
import {onBeforeMount, onMounted, reactive, ref, computed, watch} from "vue";
import PreLoader from "../components/includes/PreLoader.vue";
const loaded = ref(null)
const route = useRoute()
let postListAPI = ref('https://basic-blog.teamrabbil.com/api/post-list/'+route.params.id)

const postList = reactive([])
const getPostList = ()=>{
  loaded.value = false
  postList.length = 0
  fetch(postListAPI.value)
      .then(response=>response.json())
      .then((data)=>{
        data.forEach(post=>{
          postList.push({
            id:post.id,
            title:post.title,
            img:post.img,
            short:post.short,
            categoryId:post.category_id
          })
        })
        loaded.value = true
      })
}

onBeforeMount(()=>{
  getPostList()
})

// Create a computed property to get and watch the 'id' parameter from the route
const idFromRoute = computed(() => route.params.id);

// Use a watcher to update userId when the 'id' parameter changes
watch(idFromRoute, (newId) => {
  if (newId !== 'latest'){
    postListAPI.value = 'https://basic-blog.teamrabbil.com/api/post-list/'+newId
  }else {
    postListAPI.value = 'https://basic-blog.teamrabbil.com/api/post-newest'
  }
  getPostList()
});

</script>

<template>
  <div class="container">
    <div class="row">
<!--      <h1>{{postListAPI}}</h1>-->
      <div class="col-4" v-for="post in postList" :key="post.id">
        <router-link :to="{name:'blog',params:{id:post.id}}" class="text-decoration-none hover">
          <div class="card mt-2 flex">
            <div class="card-header">
              <h5 class="mb-0 fw-bold">{{post.title}}</h5>
            </div>
            <div class="card-body">
              <p>
                <img :src="post.img" class="w-25" alt="">
                {{post.short}}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <PreLoader v-if="!loaded"/>
</template>

<style scoped>

</style>
