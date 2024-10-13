<script setup lang="ts">
defineProps<{
    label?: string
    loading?: boolean
    disabled?: boolean
}>()
</script>

<template>
    <button type="button" :disabled="disabled">
        <span v-if="loading" class="loader"></span>
        <span v-else>{{ label }}</span>
    </button>
</template>

<style scoped>
button {
    padding: 6px 12px;
    border: 1px solid #4077d6;
    border-radius: 3px;
    background-color: #4c8bf7;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.2s all ease-in;
}
button:hover {
    background-color: #70a5ff;
    cursor: pointer;
}
button:active {
    background-color: #4077d6;
}
button:disabled {
    color: #2e3640;
    border-color: #dbdedf;
    background-color: #fcfcfc;
}
button:disabled:hover {
    cursor: not-allowed;
}
.loader {
    width: 1rem;
    height: 1rem;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}
@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
