<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
// Will need to render this conditionally
// WIll also need to add oil to unlocked in game state storage. - This may cause problems in SearchForNewResource.vue
// Maybe it makes more sense to replace `unlockedResources` with `lockedResources`
// In search for new resources we will need to iterate over the lockedResources array
</script>
<template>
  <button v-if="gameStateStorage.unlockedResources.includes('oil')">
    I'm the extract oil button
  </button>

</template>
