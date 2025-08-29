<script setup lang="ts">
import BuyPickaxeUpgrade from './BuyPickaxeUpgrade.vue';
import BuyShip from './BuyShip.vue';
import SellResourceForGold from './SellResourceForGold.vue';
</script>
<template>
    <div class="itemsColor">
        <BuyPickaxeUpgrade />
        <BuyShip />
        <SellResourceForGold resource-type="ore" />
        <SellResourceForGold resource-type="steel" />
    </div>
</template>