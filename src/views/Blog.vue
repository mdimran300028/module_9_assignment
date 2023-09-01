<script setup>
import {useRoute} from "vue-router";
import {onBeforeMount, ref} from "vue";
import PreLoader from "../components/includes/PreLoader.vue";
const loaded = ref(null)
const route = useRoute()
let postAPI = ref('https://basic-blog.teamrabbil.com/api/post-details/'+53)

const post = ref([])
const getPost = ()=>{
  loaded.value = false
  post.length = 0
  fetch(postAPI.value)
      .then(response=>response.json())
      .then((data)=>{
        post.value.push({
          id:data.postDetails.id,
          title:data.postDetails.title,
          img:data.postDetails.img,
          short:data.postDetails.content,
          listId:data.postDetails.list_id
        })

        // console.log(post)
        loaded.value = true
      })
}

onBeforeMount(()=>{
  getPost()
})

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card mt-2 flex">
          <div class="card-header">
            <h5 class="mb-0 fw-bold">{{post[0]['title']}}</h5>
          </div>
          <div class="card-body">
            <p style="text-align: justify;">
              <img :src="post[0]['img']" class="w-50" alt="">
              {{post[0]['short']}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PreLoader v-if="!loaded"/>
</template>

<style scoped>

</style>
