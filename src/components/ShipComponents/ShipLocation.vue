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
    tabColorClass: 'itemsColor'
  },
  {
    tabName: 'Upgrade',
    tabColorClass: 'schematicsColor'
  }
]
// TODO should pass something reactive for tabName maybe? - it can be either upgrade or repair
</script>
<template>
    <template v-if="gameStateStorage.ship.isPurchased">
        <LocationComponent :location-name="'Ship'">
            <SelectableTab :tabs-map="shipTabs" :starting-tab="'Upgrade'" :tab-names="shipTabNames">
            </SelectableTab>
        </LocationComponent>
    </template>
</template>