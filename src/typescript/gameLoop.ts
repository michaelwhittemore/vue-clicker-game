import type { StateStorageObject } from './gameStateStorage.ts'
import { earnExperienceInSkill, calculateResourceIncomeFactory } from './gameHelpers.ts';



const initGameLoop = (gameStateStorage: StateStorageObject, interval: number = 1000) => {
    const calculateOreIncome = calculateResourceIncomeFactory('ore') as () => number;
    const calculateSteelIncome = calculateResourceIncomeFactory('steel') as () => number;
    const calculateGoldIncome = calculateResourceIncomeFactory('gold') as () => number;
    const executeGameTick = () => {
        const { autoMiner, autoRefiner, autoGoldMiner, advancedAutoMiner } = gameStateStorage.automatons;
        // Auto miners
        {
            gameStateStorage.resources.ore += calculateOreIncome()            
            gameStateStorage.resources.gold += calculateGoldIncome();   
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