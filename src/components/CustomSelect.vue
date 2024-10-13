<script setup lang="ts">
import { useTemplateRef } from 'vue'

defineProps<{
    options: Array<any>
    placeholder: string
    optionLabel: string
    optionValue: string
}>()

const model = defineModel()

const selectWrapper = useTemplateRef<HTMLInputElement>('select-wrapper')
const select = useTemplateRef<HTMLInputElement>('select')
const list = useTemplateRef<HTMLInputElement>('list-container')

/**
 * Обработчик события клика по элементу списка
 * @param e Объект события
 * @param value Значение выбанного элемента
 */
function onItemClick(e: Event, value: any) {
    model.value = value
    showList(false)
}

/**
 * Отображает/скрывает список
 */
function toggleList() {
    list.value?.classList.toggle('hidden')
}

/**
 * Отображает список, если не передан пареметр `state`
 * @param state Указывает отбразить (`true`) или скрыть (`false`) список
 */
function showList(state: boolean = true) {
    list.value?.classList.toggle('hidden', !state)
}

// добавляем обработчик, который будет скрывать списк при клике вне списка
document.addEventListener('click', (e: Event) => {
    if (e.target === select.value || e.target === selectWrapper.value) return
    showList(false)
})
</script>
<template>
    <div ref="select-wrapper" class="relative border rounded w-full">
        <div
            ref="select"
            class="flex content-center size-full cursor-pointer bg-gradient-to-b from-[#eee] hover:to-slate-300 to-[#f8f8f8] border-1 border-[#c2c2c2] ease-in-out transition-all"
            @click="toggleList()"
        >
            <span class="w-full px-2 py-1 pointer-events-none">{{
                modelValue?.type || `-- ${placeholder} --`
            }}</span>
        </div>
        <div
            ref="list-container"
            class="list-container absolute bottom-0 translate-y-full border rounded w-full hidden"
        >
            <ul class="bg-white shadow-md">
                <li
                    v-for="(option, index) in options"
                    class="relative pl-6 pr-2 py-1 hover:bg-[#ededed] cursor-pointer select-none"
                    :class="{ 'selected-option': modelValue === option }"
                    :key="index"
                    :value="index"
                    @click="(event) => onItemClick(event, option)"
                >
                    <span class="">{{ option[optionLabel] }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
li.selected-option::before {
    content: '';
    display: block;
    position: absolute;
    left: 0.5rem;
    top: 0;
    width: 0.4rem;
    height: 0.75rem;
    border: solid black;

    border-width: 0 1px 1px 0;
    transform: translateY(70%) rotate(45deg);
}
</style>
