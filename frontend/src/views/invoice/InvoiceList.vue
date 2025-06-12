<template>
    <div>
        <InvoiceListAdmin v-if="autStore.isAdmin" />
        <InvoiceListCustomer v-else> </InvoiceListCustomer>
    </div>


</template>
<script setup>
import { useAuthStore } from "@/stores/authStore";
const autStore = useAuthStore()

</script>