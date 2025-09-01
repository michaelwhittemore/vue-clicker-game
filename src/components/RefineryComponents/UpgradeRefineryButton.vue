<script setup lang="ts">
import { readableTextMap } from '@/typescript/gameConstants/readableTextMap';
// What determines if we show it? 
const props = defineProps<{
    upgradeName: 'improvedRefineryHopper' | 'improvedRefineryFurnace',
}>()
const { upgradeName } = props
</script>
<template>
    <button> {{ readableTextMap[upgradeName] }}</button>
</template>
