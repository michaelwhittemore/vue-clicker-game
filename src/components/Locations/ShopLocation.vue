<script setup lang="ts">
import { computed, ref, type Component } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import LocationComponent from './LocationComponent.vue';
import ShopSchematicsComponent from '../ShopComponents/ShopSchematicsComponent.vue';
import ShopItemsComponent from '../ShopComponents/ShopItemsComponent.vue';

const computedShouldDisplay = computed(() => {
  return gameStateStorage.automatons.autoRefiner >= 2;
})
interface ShopTabsInterface {
  [key: string]: Component,
}
const shopTabs: ShopTabsInterface = {
  'schematics': ShopSchematicsComponent,
  'items': ShopItemsComponent,
}
const shopTab = ref('items')
// #e8d2ae #d7b29d
</script>

<template>
  <!-- the inner template tag is used to determine if we display the element -->
  <!-- <template v-if="computedShouldDisplay"> -->
  <template v-if="true">
    <LocationComponent :location-name="'Shop'">
      <div class="flexUtility">
        <div class="tabSelector itemsColor" @click="shopTab = 'items'">Items</div>
        <div class="tabSelector schematicsColor" @click="shopTab = 'schematics'">Schematics</div>
      </div>

      <component :is="shopTabs[shopTab]"></component>

    </LocationComponent>
  </template>
</template>

<style>
.tabSelector {
  text-align: center;
  width: 50%;
}
</style>