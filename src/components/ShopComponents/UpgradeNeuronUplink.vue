<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
// HERE!
// look to the example of upgrade pickaxe, 
// I guess we will also increment required level and gold cost
// in this case, the total level will be used instead of the mining level

// We will also need to then update the gameLoop to increase the XP earned
const onClickHandler = () => {
    console.warn('asdsadsad')
}
</script>
<template>
    <button @click="onClickHandler">
        Upgrade Neuron Uplink (TODO)
    </button>
    
</template>