import type { StateStorageObject } from './gameStateStorage.ts'
import { earnExperienceInSkill } from './gameHelpers.ts';


const initGameLoop = (gameStateStorage: StateStorageObject, interval: number = 1000) => {
    let tickNumber = 0;
    const executeGameTick = () => {
        tickNumber++;
        // todo - make this fire less often, in general we will need a rate


        const { autoMiner, autoRefiner, autoGoldMiner, advancedAutoMiner } = gameStateStorage.automatons;
        // Auto miners
        {
            gameStateStorage.resources.ore += autoMiner;
            gameStateStorage.resources.ore += advancedAutoMiner * 5;
            // We only want gold miners to execute every other tick
            if (tickNumber % 2 === 0) {
                gameStateStorage.resources.gold += autoGoldMiner;
            }

        }
        // Auto refiners
        {
            // Assignments make it easier to write without access three deep props - remember these
            // are read-only this way
            const { ore } = gameStateStorage.resources;
            const oreInput = 9; // This may change, it's not directly tied to the game state for manually refining

            // The maxRefineFromOre should always be zero or a positive integer
            let maxRefineFromOre = Math.floor(ore / oreInput)
            maxRefineFromOre = maxRefineFromOre > 0 ? maxRefineFromOre : 0;
            const amountOfSteelToRefine = Math.min(maxRefineFromOre, autoRefiner);
            gameStateStorage.resources.ore -= oreInput * amountOfSteelToRefine;
            gameStateStorage.resources.steel += amountOfSteelToRefine;
        }
        // Neuron Uplink
        {
            const { isPurchased, selectedSkill, experienceIncrease } = gameStateStorage.neuronUplink
            if (isPurchased && selectedSkill) {
                earnExperienceInSkill(selectedSkill, experienceIncrease)
            }
        }
    }
    setInterval(executeGameTick, interval)
}

export default initGameLoop