import type { NarrativeTrigger, ValidResources } from "../gameTypes";
interface AutomatonData {
    price: number,
    costResource: ValidResources,
    narrativeTrigger: NarrativeTrigger,
    requiresSchematic: boolean,
    earnedExperience: number,
    levelRequirement?: number,
}

export const automatonsData: Record<string, AutomatonData> = {
    'autoMiner': {
        price: 10,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAutoMiner',
        earnedExperience: 2,
        requiresSchematic: false,
    },
    'autoRefiner': {
        price: 20,
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