<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import ShopSchematicsComponent from '../ShopComponents/ShopSchematicsComponent.vue';
import ShopItemsComponent from '../ShopComponents/ShopItemsComponent.vue';
import type { TabsInterface, TabInformation } from '@/typescript/gameTypes';

import SelectableTab from '../UtilityComponents/SelectableTab.vue'

const computedShouldDisplay = computed(() => gameStateStorage.automatons.autoRefiner >= 2);

const shopTabs: TabsInterface = {
  'Items': ShopItemsComponent,
  'Schematics': ShopSchematicsComponent,
}
const shopTabNames: Array<TabInformation> = [
  {
    tabName: 'Items',
    tabColorClass: 'itemsColor'
  },
  {
    tabName: 'Schematics',
    tabColorClass: 'schematicsColor'
  }
]

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