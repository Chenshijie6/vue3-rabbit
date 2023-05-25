import "@/styles/common.scss"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from "./directives"
import App from './App.vue'
import router from './router'
import { componentPlugin } from "@/components"

// 测试接口函数
// import { getCategory } from "@/apis/testAPI"
// getCategory().then(res => {
//     console.log(res)
// })


const app = createApp(App)

app.use(createPinia())
app.use(componentPlugin)
app.use(router)
app.use(lazyPlugin)

app.mount('#app')


