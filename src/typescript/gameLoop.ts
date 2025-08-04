// I think we should create a customizable interval. 
// Need a gameTick method which is called every interval

// const badArray: Array<string> = ['a', 'b', 1]
// const anotherBadArray: Array<number> = [1,2, 'as'] 

const gameLoop = {
    init: (stateStorage, interval: number = 1000) => {
        console.log('gameLoop init called with interval = ', interval)
        console.log('stateStorage is', stateStorage)
    }
}

export default gameLoop