import { createApp } from 'vue'
import App from './App.vue'
import initGameLoop from './typescript/gameLoop'
import { gameStateStorage } from './typescript/gameStateStorage';


createApp(App).mount('#app')
initGameLoop(gameStateStorage, 1000)

