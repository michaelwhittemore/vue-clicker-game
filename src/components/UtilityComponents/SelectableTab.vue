<script setup lang="ts">

import { computed, ref, type Component } from 'vue';

interface TabsInterface {
  [key: string]: Component,
}
interface TabInformation {
    tabName: string,
    tabColorClass: string,
}
const props = defineProps<{
    tabsMap: TabsInterface,
    startingTab: string,
    tabNames: Array<TabInformation>,
}>()
const tabSelector = ref(props.startingTab)
</script>
<template>
      <div class="flexUtility">
        <div :class="[tabNames[0].tabColorClass, { selectedTab: tabSelector === tabNames[0].tabName }]" 
        class="tabSelector" @click="tabSelector = tabNames[0].tabName">{{tabNames[0].tabName}}
        </div>
        <div :class="[tabNames[1].tabColorClass, { selectedTab: tabSelector === tabNames[1].tabName }]" 
        class="tabSelector" @click="tabSelector = tabNames[1].tabName">{{ tabNames[1].tabName }}</div>
      </div>

      <component :is="tabsMap[tabSelector]"></component>
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