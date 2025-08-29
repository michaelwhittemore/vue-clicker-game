<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import LocationComponent from './LocationComponent.vue';
import BuyPickaxeUpgrade from '../ShopComponents/BuyPickaxeUpgrade.vue';
import BuyShip from '../ShopComponents/BuyShip.vue';
import SellResourceForGold from '../ShopComponents/SellResourceForGold.vue';

const computedShouldDisplay = computed(() => {
  // return true // Useful for debugging
  return gameStateStorage.automatons.autoRefiner >= 2;
})
</script>

<template>
  <!-- the inner template tag is used to determine if we display the element -->
  <template v-if="computedShouldDisplay">
    <LocationComponent :location-name="'Shop'">
      <BuyPickaxeUpgrade />
      <BuyShip />
      <SellResourceForGold resource-type="ore" />
      <SellResourceForGold resource-type="steel" />

    </LocationComponent>
  </template>

</template>