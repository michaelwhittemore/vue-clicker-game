<script setup lang="ts">
import MiningTab from './MiningTab.vue';
import ProspectingTab from './ProspectingTab.vue';
import type { TabsInterface, TabInformation } from '@/typescript/gameTypes';
import SelectableTab from '../UtilityComponents/SelectableTab.vue'

const mineTabs: TabsInterface = {
  'Mining': MiningTab,
  'Prospecting': ProspectingTab,
}
const mineTabNames: Array<TabInformation> = [
    // TODO colors
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
      <SelectableTab :tabs-map="mineTabs" :starting-tab="'Mining'" :tab-names="mineTabNames">
      </SelectableTab>
</template>