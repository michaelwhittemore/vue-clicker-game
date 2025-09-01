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
    // Refinery Input
    improvedRefineryHopper: {
        price: 100,
        shouldDisplay: () => gameStateStorage.automatons.autoGoldMiner > 2,
        buildLocation: 'refinery'
    },
    // Refinery Output
    // improvedRefineryFurnace: { 
        // maybe tie this to buying and building the hopper upgrade?
    //     price: 100,
    //     shouldDisplay: () => gameStateStorage.automatons.autoGoldMiner > 2,
    // },
    // neuronUplink: { 
        // What should I tie this to? maybe a certain total level value?
    //     price: 200,
    //     shouldDisplay: () =>TODO,
    // },
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
