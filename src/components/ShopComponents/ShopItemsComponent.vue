<script setup lang="ts">
import BuyPickaxeUpgrade from './BuyPickaxeUpgrade.vue';
import BuyShip from './BuyShip.vue';
import SellResourceForGold from './SellResourceForGold.vue';
import BuyNeuronUplink from './BuyNeuronUplink.vue';
</script>
<template>
    <div class="itemsColor shopTab">
        <BuyPickaxeUpgrade />
        <BuyShip />
        <BuyNeuronUplink />
        <SellResourceForGold resource-type="ore" />
        <SellResourceForGold resource-type="steel" />
    </div>
</template>