<script setup lang="ts">
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import MineOreButton from './MineOreButton.vue';
import MineSplitWrapper from './MineSplitWrapper.vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
/*
import MiningTab from './MiningTab.vue';
import ProspectingTab from './ProspectingTab.vue';
import type { TabsInterface, TabInformation } from '@/typescript/gameTypes';
import SelectableTab from '../UtilityComponents/SelectableTab.vue'

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


<template>
      <!-- <SelectableTab :tabs-map="mineTabs" :starting-tab="'Mining'" :tab-names="mineTabNames"> -->
      <SelectableTab :tabs-map="mineTabs" :starting-tab="'Prospecting'" :tab-names="mineTabNames">
      </SelectableTab>
</template>
*/

</script>
<template>
    <LocationComponent :location-name="'Mine'">
        <template v-if="!gameStateStorage.prospectingTool.isPurchased">
            <MineOreButton :resource-type="'ore'" />
        </template>
        <template v-if="gameStateStorage.prospectingTool.isPurchased">
            <MineSplitWrapper />
        </template>
    </LocationComponent>
</template>
