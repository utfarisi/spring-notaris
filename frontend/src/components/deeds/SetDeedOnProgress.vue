<template>
    <div class="w-full">
        <button @click="rejectDeed" class="bg-red-600 text-white px-4 py-2 rounded mr-2">
            Reject
        </button>
        <button @click="submitStatus" class="bg-green-600 text-white px-4 py-2 rounded"
            v-if="allDocumentsApproved(deed)">
            Proses
        </button>
    </div>
</template>

<script setup lang="ts">

import { ref, watch } from "vue"
import api from '@/libs/utils'
import { requiredDocumentsMap } from '@/libs/requiredDocuments'


const props = defineProps({
    deed: {
        type: Object,
        required: true
    }
})

const newDeed = ref()

watch(() => props?.deed,
    (newVal) => {
        if (newVal) {
            newDeed.value = newVal || null
        }
    },
    { immediate: true }
)

const allDocumentsApproved = (deed: any): boolean => {
    const requiredDocs = requiredDocumentsMap[deed.deedType] || []
    const uploadedDocs = deed?.deedDocs || []

    // Buat map dari dokumen yang udah di-upload (dengan status APPROVED)
    const approvedDocTypes = uploadedDocs
        .filter(doc => doc.status !== 'UPLOADED')
        .map(doc => doc.docType)

    // Cek apakah semua required docs ada di approvedDocTypes
    return requiredDocs.every(requiredDoc => approvedDocTypes.includes(requiredDoc))
}

const emit = defineEmits(['saved'])


const rejectDeed = async () => {
    try {
        const deedRest = await api.put(`/deeds/${props.deed.id}/status`, {
            status: 'REJECTED',
            note: 'Ada dokumen yang salah'
        }, { withCredentials: true })
        emit('saved', deedRest.data)
    }
    catch (e) {
        alert(" terjadi error " + e);
    }
}

const submitStatus = async () => {
    try {
        const deedRest = await api.put(`/deeds/${props.deed.id}/status`, {
            status: 'IN_PROGRESS',
            note: 'Sedang diproses'
        }, { withCredentials: true })
        emit('saved', deedRest.data)
    }
    catch (e) {

    }

}
</script>