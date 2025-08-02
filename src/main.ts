import { createApp } from 'vue'
import App from './App.vue'
import gameLoop from './typescript/gameLoop'

createApp(App).mount('#app')
gameLoop.init(500)
