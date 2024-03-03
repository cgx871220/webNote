<script setup lang="ts">
import {RouterView ,RouterLink} from 'vue-router'

</script>

<template>
  <h1 class="h1 text-center p-3">前端筆記</h1>
  <div class="container">
    <div class="row g-4">
      <div class="col-3">
        <div class="list-group">
          <router-link to="/git" active-class="active" class="list-group-item list-group-item-action" aria-current="true">
            git
          </router-link>
          <router-link to="/" active-class="active" class="list-group-item list-group-item-action" aria-current="true">
            vue
          </router-link>
          
          <router-link to="/" active-class="active" class="list-group-item list-group-item-action" aria-current="true">
            vue-router
          </router-link>
          
          <router-link to="/" active-class="active" class="list-group-item list-group-item-action" aria-current="true">
            router組件資料傳遞方式
          </router-link>
          
        </div>
      </div>
      <div class="col-9">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
