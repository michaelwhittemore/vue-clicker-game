<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { schematicList } from '@/typescript/gameConstants/schematicList';
const props = defineProps<{
    schematicName: typeof schematicList[number],
}>()
// 1. Should add to the gameStateStorage
    // Maybe we go form one array to another? like unlocks vs unlocked? or is that excessive?
    // Just one I think
// Should only show until you purchase it
// Should these cause a narrative trigger? Or only when building something new?
/* Possible schematics include:
    - Auto gold miner AutoGoldMiner
    - upgraded refiner (The button will be in the refinery)
    - Nero-uplink - the button the adjust it should be above the experience bar area I think
    - Advanced Auto Miner
    - Prospecting tool (unlocks new resources in the mines) 
*/
    
</script>
<template>
    <button> Buy me</button>

</template>