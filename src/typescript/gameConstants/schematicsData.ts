// What should the shape be?
// Maybe price, unlock condition isUnlocked? ,and buyHandler

// interface SchematicEntry {
//     price: number;
//     isUnlocked: () => boolean;
//     buyHandler: () => void;
// }

/// hmmmm should all buyHandlers just involving add it to unlock array

export const schematicsData= {
    autoGoldMiner: {
        price: 75,
        isUnlocked: () => true, // TODO - change this
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