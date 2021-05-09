<!--
 * @Author: gm.chen
 * @Date: 2021-05-02 23:23:44
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-09 07:29:23
 * @Description: file content
 * @FilePath: /vue3-demo/src/views/Test.vue
-->
<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>

<style scoped lang="stylus">
button {
  cursor pointer
  font-size 20px
  padding 5px
}
</style>
