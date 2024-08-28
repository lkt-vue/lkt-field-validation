<script setup lang="ts">
import {ValidationCode} from "../types/ValidationCode";
import ValidationItem from "../components/ValidationItem.vue";
import {nextTick, ref, watch} from "vue";

const props = withDefaults(defineProps<{
    items: ValidationCode[],
    stack: string,
    min: number,
    max: number,
}>(), {
    items: () => [],
    stack: 'default',
    min: 0,
    max: 0
});

const refreshing = ref(false);

watch(() => props.items, (v) => {
    refreshing.value = true;

    nextTick(() => refreshing.value = false);

}, {deep: true});
</script>

<template>
    <div class="lkt-field-validation-info" v-if="!refreshing">
        <validation-item v-for="code in items" :code="code" :stack="stack" :key="code" :min="min" :max="max"/>
    </div>
</template>

<style scoped>

</style>