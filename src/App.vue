<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import 'bootstrap/dist/js/bootstrap.bundle.js'

</script>

<template>
  <h1 class="h1 text-center p-3">前端筆記</h1>
  <div class="container">
    <div class="row g-4">
      <div class="col-3">
        <div class="list-group">
          <router-link
            to="/git"
            active-class="active"
            class="list-group-item list-group-item-action list-group-item-primary"
            aria-current="true"
          >
            Git
          </router-link>
          <router-link
            to="/vue/option"
            active-class="active"
            class="list-group-item list-group-item-action list-group-item-primary"
            aria-current="true"
          >
            Vue
          </router-link>

          <router-link
            to="/vuerouter"
            active-class="active"
            class="list-group-item list-group-item-action list-group-item-primary"
            aria-current="true"
          >
            Vue-Router
          </router-link>

          <router-link
            to="/componentdata"
            active-class="active"
            class="list-group-item list-group-item-action list-group-item-primary"
            aria-current="true"
          >
            Router組件資料傳遞方式
          </router-link>
          <router-link
            to="/bootstrap"
            active-class="active"
            class="list-group-item list-group-item-action list-group-item-primary"
            aria-current="true"
          >
            Bootstrap
          </router-link>
        </div>
      </div>
      <div class="col-9">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  background-color: rgb(238, 231, 217);
}
h2::after {
  margin-top: 10px;
  content: '';
  display: block;
  width: 100%;
  border-bottom: 1px solid #c28989;
}
</style>
<style scoped></style>
