import type { StateStorageObject } from './stateStorage.ts'

// I think we should create a customizable interval. 
// Need a gameTick method which is called every interval

// const badArray: Array<string> = ['a', 'b', 1]
// const anotherBadArray: Array<number> = [1,2, 'as'] 


// I think this should be refactored to not be an object
const initGameLoop = (stateStorage: StateStorageObject, interval: number = 1000) => {
    const executeGameTick = () => {
        console.log('game tick executed')
        console.log('stateStorage:', stateStorage)
    }
    setInterval(executeGameTick, interval)
}


export default initGameLoop