<script setup lang="ts">
import { computed } from 'vue';
import type { ValidResources } from '@/typescript/gameTypes';
import TooltipText from '../TooltipText.vue';
import { calculateResourceIncomeFactory } from '@/typescript/gameHelpers';
const props = defineProps<{
    resourceName: ValidResources,
    resourceAmount: number,
}>()
const calculateResourceIncome = calculateResourceIncomeFactory(props.resourceName) as () => number;
const tooltipText = computed(() => calculateResourceIncome())
</script>

<template>
    <!-- Will need to change color based on the numeric value -->
    <div class="resourceDisplayContainer color1 tooltipContainer">{{ resourceName + ': ' + resourceAmount}}
        <TooltipText :tooltip-text="tooltipText"/>
    </div>
</template>

<style scoped>
.resourceDisplayContainer{
    border-style: solid;
    margin: .2em;
    padding: .1em .2em .1em .2em
}
</style>