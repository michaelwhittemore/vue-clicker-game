<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { schematicsData } from '@/typescript/gameConstants/schematicsData';

// import { schematicList } from '@/typescript/gameConstants/schematicsData';
// const props = defineProps<{
//     schematicName: typeof schematicList[number],
// }>()
// const { schematicName } = props; // We can use destructuring as this is constant. 

const props = defineProps<{
    schematicName: keyof typeof schematicsData,
}>()


// HERE!
// Within schematicList we will need to have the prices and unlock conditions
// Will need a computed `shouldDisplay` prop and a `canPurchaseProp`\
// Will need to add the price to the button
// Will also need a trigger for each?

// Should only show until you purchase it
// Should these cause a narrative trigger? Or only when building something new?


/* Possible schematics include:
    - Auto gold miner AutoGoldMiner
    - upgraded refiner (The button will be in the refinery)
    - Nero-uplink - the button the adjust it should be above the experience bar area I think
    - Advanced Auto Miner
    - Prospecting tool (unlocks new resources in the mines)
*/
const clickHandler = (schematicName: keyof typeof schematicsData) => {
    console.warn(schematicName)
    console.log(schematicsData[schematicName].price)
    gameStateStorage.unlockedSchematics.push(schematicName);
    gameStateStorage.resources.gold-= schematicsData[schematicName].price;
}

</script>
<template>
    <button v-if="!gameStateStorage.unlockedSchematics.includes(schematicName)" @click="clickHandler(schematicName)"> 
        {{ schematicName }} ({{ schematicsData[schematicName].price }})</button>

</template>