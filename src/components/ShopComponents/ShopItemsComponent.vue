<script setup lang="ts">
import UpgradePickaxe from './UpgradePickaxe.vue';
import BuyShip from './BuyShip.vue';
import SellResourceForGold from './SellResourceForGold.vue';
import NeuronUplinkShop from './NeuronUplinkShop.vue';
import BuyProspectingTool from './BuyProspectingTool.vue';
</script>
<template>
    <div class="itemsColor shopTab">
        <UpgradePickaxe />
        <NeuronUplinkShop />
        <BuyShip />
        <BuyProspectingTool />
        <SellResourceForGold resource-type="ore" />
        <SellResourceForGold resource-type="steel" />
    </div>
</template>