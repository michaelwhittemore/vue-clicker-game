<script setup lang="ts">
import { computed, ref, type Component } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import LocationComponent from '../Locations/LocationComponent.vue';
import ShopSchematicsComponent from '../ShopComponents/ShopSchematicsComponent.vue';
import ShopItemsComponent from '../ShopComponents/ShopItemsComponent.vue';

const { isDevTesting } = gameStateStorage // Used for testing

const computedShouldDisplay = computed(() => {
  return (isDevTesting ? true :
    gameStateStorage.automatons.autoRefiner >= 2);
})
interface ShopTabsInterface {
  [key: string]: Component,
}
const shopTabs: ShopTabsInterface = {
  'schematics': ShopSchematicsComponent,
  'items': ShopItemsComponent,
}
const shopTab = ref('items')
</script>

<template>
  <!-- the inner template tag is used to determine if we display the element -->
  <template v-if="computedShouldDisplay">
    <LocationComponent :location-name="'Shop'">
      <div class="flexUtility">
        <div :class="{ selectedTab: shopTab === 'items' }" class="tabSelector itemsColor" @click="shopTab = 'items'">Items
        </div>
        <div :class="{ selectedTab: shopTab === 'schematics' }" class="tabSelector schematicsColor"
          @click="shopTab = 'schematics'">Schematics</div>
      </div>

      <component :is="shopTabs[shopTab]"></component>

    </LocationComponent>
  </template>
</template>

<style>
.selectedTab {
  border-bottom-style: none !important;
}

.tabSelector {
  text-align: center;
  width: 50%;
  margin-bottom: 0px;
  border-style: solid;

}
</style>