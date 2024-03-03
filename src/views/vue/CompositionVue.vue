<template>
  <h3>Composition寫法</h3>


  <!-- count範例 -->
  <div class="outline p-3">
    <h4>
        count範例
    </h4>
    count:{{ count }}<br />
    comupted:{{ doubleCount }}<br />
    <button class="btn btn-secondary" @click="addCount">count++</button>
    <button class="btn btn-secondary" @click="stopWatch">stopWatch</button>
    <button class="btn btn-secondary" @click="stopWatchEffect">stopWatchEffect</button>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

const count = ref(0)
function addCount() {
  count.value++
}



// computed
const doubleCount = computed(() => {
  return count.value * 2
})



//watch
const stopWatch = watch(count,(newVal,oldVal)=>{
    console.log(`watch新值為:${newVal},watch舊值為${oldVal}`)
    
},
{
  deep:true,    //深層監視
  immediate:true//立即監視
})



//watchEffect
const stopWatchEffect = watchEffect(()=>{
    console.log(`watchEffect${count.value}變化了`)
})
</script>







<style scoped>
.btn{
    margin:5px 10px;
}
.outline {
  box-shadow: 0 0 5px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 15px;
}
</style>
