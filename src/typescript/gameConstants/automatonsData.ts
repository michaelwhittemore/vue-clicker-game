import type { ValidResources } from "../gameTypes";
import { narrativeTriggersToText } from "./narrativeTriggersToText";
interface AutomatonData {
    price: number,
    costResource: ValidResources,
    narrativeTrigger: keyof typeof narrativeTriggersToText,
    requiresSchematic: boolean,
    earnedExperience: number,
    levelRequirement?: number,
}

export const automatonsData: Record<string, AutomatonData> = {
    'autoMiner': {
        price: 9,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAutoMiner',
        earnedExperience: 2,
        requiresSchematic: false,
    },
    'autoRefiner': {
        price: 15,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAutoRefiner',
        earnedExperience: 2,
        requiresSchematic: false,
        levelRequirement: 1,
    },
    'autoGoldMiner': {
        price: 40,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAutoGoldMiner',
        earnedExperience: 3,
        requiresSchematic: true,
        levelRequirement: 3,
    },
    'advancedAutoMiner': {
        price: 40,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAdvancedAutoMiner',
        earnedExperience: 3,
        requiresSchematic: true,
        levelRequirement: 4,
    },
}