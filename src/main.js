// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin) // 使用懒加载指令插件

app.mount('#app')


