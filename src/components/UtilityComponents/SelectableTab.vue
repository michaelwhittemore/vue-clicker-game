<script setup lang="ts">

import { computed, ref, type Component } from 'vue';
// Will need an array of components as props
interface TabsInterface {
  [key: string]: Component,
}
const props = defineProps<{
    tabsMap: TabsInterface,
    startingTab: string,
}>()
const tabSelector = ref(props.startingTab)

// I think we will want to use slots here?
// HERE!
// We may need to move some styles to global
</script>
<template>
      <div class="flexUtility">
        <div :class="{ selectedTab: tabSelector === 'items' }" class="tabSelector itemsColor" @click="tabSelector = 'items'">Items
        </div>
        <div :class="{ selectedTab: tabSelector === 'schematics' }" class="tabSelector schematicsColor"
          @click="tabSelector = 'schematics'">Schematics</div>
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