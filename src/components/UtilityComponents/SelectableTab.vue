<script setup lang="ts">

import { computed, ref, type Component } from 'vue';
// Will need an array of components as props
interface TabsInterface {
  [key: string]: Component,
}
const props = defineProps<{
    tabsMap: TabsInterface,
    startingTab: string,
    tabNames: Array<string>
}>()
const tabSelector = ref(props.startingTab)

// I think we will want to use slots here?
// HERE!
// We may need to move some styles to global
// I think maybe we move stuff like itemsColor and schematicsColor to the respective components??
// How are we going to handle the dynamic class assignment? i.e :class="{ selectedTab: tabSelector === 'items' }"
// maybe we have more props? Should destructure these name as they will be constant
</script>
<template>
      <div class="flexUtility">
        <div :class="{ selectedTab: tabSelector === tabNames[0] }" class="tabSelector itemsColor" @click="tabSelector = tabNames[0]">{{tabNames[0]}}
        </div>
        <div :class="{ selectedTab: tabSelector === tabNames[1] }" class="tabSelector schematicsColor"
          @click="tabSelector = tabNames[1]">{{ tabNames[1] }}</div>
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