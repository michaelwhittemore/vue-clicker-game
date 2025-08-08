import type { StateStorageObject } from './stateStorage.ts'


const initGameLoop = (stateStorage: StateStorageObject, interval: number = 1000) => {
    const executeGameTick = () => {
        // console.log('stateStorage:', stateStorage)
        // todo - make this fire less often, in general we will need a rate
        // Assignments make it easier to write without access three deep props - remember these
        // are read-only this way
        const { ore, steel } = stateStorage.resources;
        const { autoMiner, autoRefiner } = stateStorage.automatons;
        // Auto miners
        {
            stateStorage.resources.ore += autoMiner;
        }
        // Auto refiners
        {
            // The maxRefineFromOre should always be zero or a positive integer
            let maxRefineFromOre = Math.floor(ore / 10)
            maxRefineFromOre = maxRefineFromOre > 0 ? maxRefineFromOre : 0;
            const amountOfSteelToRefine = Math.min(maxRefineFromOre, autoRefiner);
            stateStorage.resources.ore -= 10 * amountOfSteelToRefine;
            stateStorage.resources.steel += amountOfSteelToRefine;
        }

    }
    setInterval(executeGameTick, interval)
}


export default initGameLoop