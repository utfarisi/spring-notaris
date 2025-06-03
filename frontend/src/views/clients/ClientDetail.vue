<template>
    <div>
        <div class="flex gap-5">
            <h2 class="text-2xl font-semibold mb-4 w-1/3">Detail Akta</h2>
            <router-link :to="{ name: 'clientEdit', params: id }"
                class="bg-blue-400 p-2 rounded-md text-white">Edit</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import api from '@/libs/utils';
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const customer = ref();
const id = ref()

onMounted(async () => {
    id.value = route.params.id
    const res = await api.get(`/clients/${route.params.id}/show`);
    customer.value = res.data;
})
</script>