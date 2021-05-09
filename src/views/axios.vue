<!--
 * @Author: gm.chen
 * @Date: 2021-05-02 22:45:31
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-09 07:09:55
 * @Description: file content
 * @FilePath: /vue3-demo/src/views/axios.vue
-->
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>
