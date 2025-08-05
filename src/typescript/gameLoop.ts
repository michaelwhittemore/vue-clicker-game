import type { StateStorageObject } from './stateStorage.ts'


const initGameLoop = (stateStorage: StateStorageObject, interval: number = 1000) => {
    const executeGameTick = () => {
        console.log('stateStorage:', stateStorage)
        stateStorage.resources.ore += stateStorage.automatons.autoClickers
    }
    setInterval(executeGameTick, interval)
}


export default initGameLoop