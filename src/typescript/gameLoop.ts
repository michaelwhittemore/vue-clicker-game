import type { StateStorageObject } from './gameStateStorage.ts'


const initGameLoop = (gameStateStorage: StateStorageObject, interval: number = 1000) => {
    let tickNumber = 0;
    const executeGameTick = () => {
        tickNumber++;
        // todo - make this fire less often, in general we will need a rate
        // Assignments make it easier to write without access three deep props - remember these
        // are read-only this way
        const { ore, steel } = gameStateStorage.resources;
        const { autoMiner, autoRefiner, autoGoldMiner } = gameStateStorage.automatons;
        // Auto miners
        {
            gameStateStorage.resources.ore += autoMiner;
            // We only want gold miners to execute every other tick
            if ( tickNumber % 2 === 0){
                gameStateStorage.resources.gold += autoGoldMiner;
            }
            
        }
        // Auto refiners
        {
            // The maxRefineFromOre should always be zero or a positive integer
            let maxRefineFromOre = Math.floor(ore / 10)
            maxRefineFromOre = maxRefineFromOre > 0 ? maxRefineFromOre : 0;
            const amountOfSteelToRefine = Math.min(maxRefineFromOre, autoRefiner);
            gameStateStorage.resources.ore -= 10 * amountOfSteelToRefine;
            gameStateStorage.resources.steel += amountOfSteelToRefine;
        }

    }
    setInterval(executeGameTick, interval)
}


export default initGameLoop