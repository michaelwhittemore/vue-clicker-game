<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import BuyNeuronUplink from './BuyNeuronUplink.vue';
import UpgradeNeuronUplink from './UpgradeNeuronUplink.vue';
// This should either show the buy button or the upgrade button using dynamic component
// Will need an array with buy/upgrade
interface UplinkButtonInterFace {
  [key: string]: Component,
}
const uplinkButton: UplinkButtonInterFace = {
  'buy': BuyNeuronUplink,
  'upgrade': UpgradeNeuronUplink,
}
// const uplinkButtonType = ref('buy')
const uplinkButtonType = computed(() => {
    return gameStateStorage.neuronUplink.isPurchased ? 'upgrade' : 'buy'
})
</script>
<template>
    <component :is="uplinkButton[uplinkButtonType]"></component>
</template>