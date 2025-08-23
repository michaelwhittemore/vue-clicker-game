// maybe this should be JSON??
import type { NarrativeTrigger, ValidSkills } from "./gameTypes"

// hmmm maybe if I make a specific type? 
type LevelToTrigger = { 
    [key: number]: NarrativeTrigger,
}

type LevelToNarrativeTriggerBreakpoints = {
    [key in ValidSkills]: LevelToTrigger
}

export const levelToNarrativeTriggerBreakpoints: LevelToNarrativeTriggerBreakpoints = {
    mining: {
        // maybe this should be the actual unlock - like hasUnlockedPickaxeFromMining??
        1: 'hasUnlockedGoldMining',
        3: 'hasUnlockedPickaxeUpgrade1',
    },
    robotics: {
        1: 'hasUnlockedAutoRefiner',
        3: 'hasUnlockedAutoGoldMiner',
    },
    trading: {
        1: 'tradingUnlock1'
    }
}
