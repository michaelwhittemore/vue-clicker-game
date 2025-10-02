<script setup lang="ts">
import { computed, ref, type ComputedRef} from 'vue';
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

import MiningTab from './MiningTab.vue';
import ProspectingTab from './ProspectingTab.vue';
import type { TabsInterface, TabInformation } from '@/typescript/gameTypes';
import SelectableTab from '../UtilityComponents/SelectableTab.vue'

const computedDisableProspectingTab: ComputedRef<boolean> = computed(()=> {
  return !gameStateStorage.prospectingTool.isPurchased
})

const disableProspectingTab = ref(!gameStateStorage.prospectingTool.isPurchased)
console.log(disableProspectingTab)

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
      <SelectableTab :tabs-map="mineTabs" :starting-tab="'Mining'" :tab-names="mineTabNames"
      :optional-should-disable-second-tab="disableProspectingTab">
      </SelectableTab>
    </LocationComponent>
</template>
