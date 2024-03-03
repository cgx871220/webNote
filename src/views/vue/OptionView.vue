<template>
  <h3>Option寫法</h3>

  <!-- count範例 -->
  <div class="outline p-3">
    <h4>count範例</h4>
    count:{{ count }}<br />
    computed:{{ doubleCount }}<button type="button" class="btn btn-sm btn-secondary ms-1" @click="doubleCount=100">setter</button><br />
    <button type="button" class="btn btn-secondary" @click="addCount">count++</button>
  </div>

  <!-- v-for展示 -->
  <div class="outline p-3">
    <h4>基本v-for</h4>
    <ul>
      <li v-for="data in dataArray" :key="data.id">{{ data }}</li>
    </ul>

    <hr />

    <h4>v-for混和v-if</h4>
    <ul>
      <template v-for="data in dataArray" :key="data.id">
        <li v-if="data.id !== 'a2'">{{ data }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      dataArray: [
        { id: 'a1', item: 'a001' },
        { id: 'a2', item: 'a002' },
        { id: 'a3', item: 'a003' }
      ]
    }
  },
  methods: {
    addCount() {
      this.count++
    }
  },
  computed: {
    //純getter寫法 
    // doubleCount() {
    //   return this.count * 2
    // }
    doubleCount:{
      get(){
        return this.count*2
      },
      set(val){
        console.log('set觸發',val)
        this.count=val
      }
    }
  },
  watch: {
    count(newVal, oldVal) {
      console.log(`新值為:${newVal},舊值為:${oldVal}`)
    }
  }
}
</script>

<style scoped>
.outline {
  box-shadow: 0 0 5px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 15px;
}
</style>
