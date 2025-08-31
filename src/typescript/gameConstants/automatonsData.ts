import type { NarrativeTrigger, ValidResources } from "../gameTypes";

interface AutomatonData {
    price: number,
    costResource: ValidResources,
    narrativeTrigger: NarrativeTrigger,
    requiresSchematic: boolean,
    levelRequirement?: number,
}

export const automatonsData: Record<string, AutomatonData> = {
    'autoMiner': {
        price: 10,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAutoMiner',
        requiresSchematic: false,
    },
    'autoRefiner': {
        price: 20,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAutoRefiner',
        requiresSchematic: false,
    },
    'autoGoldMiner': {
        price: 40,
        costResource: 'steel',
        narrativeTrigger: 'hasBuiltAutoGoldMiner',
        requiresSchematic: true,
    },
}