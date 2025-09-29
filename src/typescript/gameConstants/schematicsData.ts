import { gameStateStorage } from "../gameStateStorage"
// should I add any narrative triggers? or maybe something else?, maybe readable name
interface SchematicData {
    price: number, // Price to UNLOCK the schematic, not to build the end result
    shouldDisplay: () => boolean,
    buildLocation: 'refinery' | 'fabricator' | 'ship',
}

export const schematicsData: Record<string, SchematicData> = {
    advancedAutoMiner: {
        price: 75,
        shouldDisplay: () => true,
        buildLocation: 'fabricator'
    },
    autoGoldMiner: {
        price: 75,
        shouldDisplay: () => true,
        buildLocation: 'fabricator'
    },
    // Refinery Input, unlocks after the second automatic gold miner
    improvedRefineryHopper: {
        price: 100,
        shouldDisplay:  () => true,
        buildLocation: 'refinery'
    },
    // Refinery Output, unlocks after building the hopper
    improvedRefineryFurnace: {
        price: 125,
        shouldDisplay: () => gameStateStorage.refineryState.refineryUpgrades.includes('improvedRefineryHopper'),
        buildLocation: 'refinery'
    },
    // prospectingTool: {
    // What should I tie this to? maybe pickaxe upgrade?
    //     price: 200,
    //     shouldDisplay: () =>TODO,
    // },
    // shipCargo: {
    //     price: 200,
    //     shouldDisplay: () =>TODO,
    //     buildLocation: 'ship'
    // },
    // shipEngine: {
    //     price: 200,
    //     shouldDisplay: () =>TODO,
    //     buildLocation: 'ship'
    // },
} as const
