<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import type { ValidResources } from '@/typescript/gameTypes';
import TooltipText from '../UtilityComponents/TooltipText.vue';
import { calculateResourceIncomeFactory } from '@/typescript/gameHelpers';
const props = defineProps<{
    resourceName: ValidResources,
    resourceAmount: number,
}>()
const calculateResourceIncome = calculateResourceIncomeFactory(props.resourceName) as () => number;
const tooltipText = computed(() => {
    let tooltipString = '0';
    if (props.resourceName == 'ore'){
        const oreIn = calculateResourceIncome()
        const oreOut = gameStateStorage.automatons.autoRefiner * 9 // This may change
        tooltipString =  `${oreIn} - ${oreOut} = ${oreIn - oreOut}`
    } else if (gameStateStorage.resources[props.resourceName]){
        tooltipString = calculateResourceIncome().toString()
    }
    tooltipString = tooltipString + ' ' + props.resourceName + ' per second';
    return tooltipString
})
</script>

<template>
    <!-- Will need to change color based on the numeric value -->
    <div class="resourceDisplayContainer color1 tooltipContainer">{{ resourceName + ': ' + resourceAmount }}
        <TooltipText :tooltip-text="tooltipText" />
    </div>
</template>

<style scoped>
.resourceDisplayContainer {
    border-style: solid;
    margin: .2em;
    padding: .1em .2em .1em .2em
}
</style>