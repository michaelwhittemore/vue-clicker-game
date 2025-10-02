<script setup lang="ts">
import { computed } from 'vue';
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

import MiningTab from './MiningTab.vue';
import ProspectingTab from './ProspectingTab.vue';
import type { TabsInterface, TabInformation } from '@/typescript/gameTypes';
import SelectableTab from '../UtilityComponents/SelectableTab.vue'

const computedDisableProspectingTab = computed(()=> {
  return !gameStateStorage.prospectingTool.isPurchased
})

const mineTabs: TabsInterface = {
  'Mining': MiningTab,
  'Prospecting': ProspectingTab,
}
const mineTabNames: Array<TabInformation> = [
  {
    tabName: 'Mining',
    tabColorClass: 'miningColor'
  },
  {
    tabName: 'Prospecting',
    tabColorClass: 'prospectingColor'
  }
]

</script>
<template>
  <LocationComponent :location-name="'Mine'">
      <!-- <SelectableTab :tabs-map="mineTabs" :starting-tab="'Prospecting'" :tab-names="mineTabNames"> -->
      <SelectableTab :tabs-map="mineTabs" :starting-tab="'Mining'" :tab-names="mineTabNames">
      </SelectableTab>
    </LocationComponent>
</template>
