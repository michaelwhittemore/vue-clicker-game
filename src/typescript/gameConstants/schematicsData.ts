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