<template>
  <h2 class="text-center">Vue</h2>
  <div>
    <p>npm create vite@latest ＜專案名＞ →安裝並創建vue</p>
    <div class="row">
      <div class="col-6">
        <router-link to="/vue/option" class="btn btn-outline-primary" active-class="active">option</router-link>
      </div>
      <div class="col-6">
        <router-link to="/vue/composition" class="btn btn-outline-primary"  active-class="active">composition</router-link>
      </div>
      <div class="col border mt-3 p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
</script>
