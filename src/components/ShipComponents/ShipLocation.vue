<script setup lang="ts">
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import SelectableTab from '../UtilityComponents/SelectableTab.vue';
import type { TabInformation, TabsInterface } from '@/typescript/gameTypes';
import ShipUpgradeOrRepairWrapper from './ShipUpgradeOrRepairWrapper.vue';
import ShipTravel from './ShipTravel.vue';

const shipTabs: TabsInterface = {
  'Travel': ShipTravel,
  'Upgrade': ShipUpgradeOrRepairWrapper,
}
// TODO - maybe change the color scheme??
const shipTabNames: Array<TabInformation> = [
  {
    tabName: 'Travel',
    tabColorClass: 'shipTravelColor'
  },
  {
    tabName: 'Upgrade',
    tabColorClass: 'shipUpgradeColor'
  }
]

</script>
<template>
    <template v-if="gameStateStorage.ship.isPurchased">
        <LocationComponent :location-name="'Ship'">
            <SelectableTab :tabs-map="shipTabs" :starting-tab="'Upgrade'" :tab-names="shipTabNames"
             :optional-second-tab-name="gameStateStorage.ship.isFixed ? 'Upgrades' : 'Repairs'">
            </SelectableTab>
        </LocationComponent>
    </template>
</template>