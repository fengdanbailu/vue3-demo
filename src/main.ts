/*
 * @Author: gm.chen
 * @Date: 2021-05-02 22:18:40
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-02 22:38:50
 * @Description: file content
 * @FilePath: /vue3-demo/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
