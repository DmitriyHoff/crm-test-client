<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useEntitiesStore } from './stores/entities'
import CustomButton from './components/CustomButton.vue'
import CustomSelect from './components/CustomSelect.vue'
import EntityList from './components/EntityList.vue'
import { OptionCode } from './types/optionCode'
import type { SelectItem } from './types/selectItem'

const HOST_URL = 'http://localhost:3000'

const entitiesStore = useEntitiesStore()
const { entities } = storeToRefs(entitiesStore)

const selectedOption = ref<SelectItem | null>()

const options = ref<SelectItem[]>([
    { type: 'Сделка', code: OptionCode.Leads },
    { type: 'Контакт', code: OptionCode.Contacts },
    { type: 'Компания', code: OptionCode.Companies }
])

const loadingState = ref<boolean>(false)

async function addEntity() {
    if (!selectedOption.value) return

    const { code } = selectedOption.value
    try {
        loadingState.value = true
        const { type } = selectedOption.value
        const response = await axios.post(`${HOST_URL}/${code}`, [{ name: type }])
        const { data } = response
        const [id] = data || []
        if (id) {
            entities.value.push({ id, type })
        }
        console.log(data)
    } catch (error) {
        console.log({ error })
    } finally {
        loadingState.value = false
        selectedOption.value = null
        console.log(loadingState.value)
    }
}
</script>

<template>
    <div class="flex flex-col w-[600px] gap-1 p-1">
        <div class="flex gap-1">
            <CustomSelect
                v-model="selectedOption"
                :options="options"
                optionLabel="type"
                optionValue="code"
                placeholder="Не выбрано"
            />

            <CustomButton
                label="Сохранить"
                :loading="loadingState"
                @click="addEntity"
                :disabled="!selectedOption"
            />
        </div>

        <EntityList :list="entities" />
    </div>
</template>
