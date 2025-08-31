import { gameStateStorage } from "../gameStateStorage"
// should I add any narrative triggers? or maybe something else?, maybe readable name
interface SchematicData {
    price: number,
    shouldDisplay: () => boolean, 
}

export const schematicsData: Record<string, SchematicData>= {
    advancedAutoMiner: {
        price: 75,
        shouldDisplay: () => true,
    },
    autoGoldMiner: {
        price: 75,
        shouldDisplay: () => true,
    },
    improvedRefinerHopper: {
        price: 100,
        shouldDisplay: () => gameStateStorage.automatons.autoGoldMiner > 2,
    },
    // improvedRefinerFurnace: { 
        // maybe tie this to buying the hopper upgrade?
    //     price: 100,
    //     shouldDisplay: () => gameStateStorage.automatons.autoGoldMiner > 2,
    // }
}

// export const schematicList = [
//     'autoGoldMiner',
//     'upgradeRefinerInput',
//     'upgradeRefinerOutput',
//     'advancedAutoMiner',
//     'nueroUplink',
//     'prospectingTool',
//     'shipCargo',
//     'shipDistance'

// ] as const;