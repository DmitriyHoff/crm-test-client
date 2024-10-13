import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { EntityListItem } from '@/types/entityListItem'

export const useEntitiesStore = defineStore('entities', () => {
    const entities = ref<EntityListItem[]>([])

    return { entities }
})
