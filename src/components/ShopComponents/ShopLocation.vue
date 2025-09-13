<script setup lang="ts">
import { computed, ref, type Component } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import ShopSchematicsComponent from '../ShopComponents/ShopSchematicsComponent.vue';
import ShopItemsComponent from '../ShopComponents/ShopItemsComponent.vue';

import SelectableTab from '../UtilityComponents/SelectableTab.vue'

const computedShouldDisplay = computed(() => gameStateStorage.automatons.autoRefiner >= 2);

interface ShopTabsInterface {
  [key: string]: Component,
}
const shopTabs: ShopTabsInterface = {
  'Items': ShopItemsComponent,
  'Schematics': ShopSchematicsComponent,
}
const shopTabNames = ['Items', 'Schematics']

</script>

<template>
  <!-- the inner template tag is used to determine if we display the element -->
  <template v-if="computedShouldDisplay">
    <LocationComponent :location-name="'Shop'">
      <SelectableTab :tabs-map="shopTabs" :starting-tab="'Items'" :tab-names="shopTabNames">
      </SelectableTab>
    </LocationComponent>
  </template>
</template>