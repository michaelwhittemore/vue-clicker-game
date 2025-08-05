import { createApp } from 'vue'
import App from './App.vue'
import initGameLoop from './typescript/gameLoop'
import { stateStorage } from './typescript/stateStorage';


createApp(App).mount('#app')
initGameLoop(stateStorage, 1000)

