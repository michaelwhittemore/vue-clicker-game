import { createApp } from 'vue'
import App from './App.vue'
import gameLoop from './typescript/gameLoop'
import { stateStorage } from './typescript/stateStorage';


createApp(App).mount('#app')
gameLoop.init(stateStorage, 500)

