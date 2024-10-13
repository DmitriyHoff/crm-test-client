<script setup lang="ts">
import type { EntityListItem } from '@/types/entityListItem'

defineProps<{
    list: Array<EntityListItem>
}>()
</script>

<template>
    <table class="border-collapse border size-full">
        <thead>
            <tr class="bg-slate-100">
                <th>Тип</th>
                <th>id</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="!list.length">
                <td colspan="2">Список пуст</td>
            </tr>
            <tr v-for="item in list" :key="item.id">
                <td class="border px-2 py-1">{{ item.type }}</td>
                <td class="border px-2 py-1">{{ item.id }}</td>
            </tr>
        </tbody>
    </table>
</template>
