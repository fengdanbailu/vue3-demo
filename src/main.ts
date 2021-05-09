/*
 * @Author: gm.chen
 * @Date: 2021-05-02 22:18:40
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-09 07:17:51
 * @Description: file content
 * @FilePath: /vue3-demo/src/main.ts
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import router from '@/router/index'
import store from '@/store'
import App from './App.vue'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
