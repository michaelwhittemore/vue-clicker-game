// I think we should create a customizable interval. 
// Need a gameTick method which is called every interval


const gameLoop = {
    init: (interval = 1000) => {
        console.log('gameLoop init called with interval = ', interval)
    }
}

export default gameLoop