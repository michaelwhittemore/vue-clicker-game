<script setup lang="ts">
import { ref } from 'vue';
import type { TabsInterface, TabInformation } from '@/typescript/gameTypes';

const props = defineProps<{
  tabsMap: TabsInterface,
  startingTab: string,
  tabNames: Array<TabInformation>,
  optionalFirstTabName?: string,
  optionalSecondTabName?: string,
}>()
const tabSelector = ref(props.startingTab)
</script>
<template>
  <div class="flexUtility">
    <div :class="[tabNames[0].tabColorClass, { selectedTab: tabSelector === tabNames[0].tabName }]" class="tabSelector"
      @click="tabSelector = tabNames[0].tabName">{{ optionalFirstTabName || tabNames[0].tabName }}
    </div>
    <div :class="[tabNames[1].tabColorClass, { selectedTab: tabSelector === tabNames[1].tabName }]" class="tabSelector"
      @click="tabSelector = tabNames[1].tabName">{{ optionalSecondTabName || tabNames[1].tabName }}</div>
  </div>
  <KeepAlive>
    <component :is="tabsMap[tabSelector]"></component>
  </KeepAlive>
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
