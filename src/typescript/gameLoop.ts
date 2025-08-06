import type { StateStorageObject } from './stateStorage.ts'


const initGameLoop = (stateStorage: StateStorageObject, interval: number = 1000) => {
    const executeGameTick = () => {
        console.log('stateStorage:', stateStorage)
        // todo - make this fire less often, in general we will need a rate
        stateStorage.resources.ore += stateStorage.automatons.autoMiners
    }
    setInterval(executeGameTick, interval)
}


export default initGameLoop