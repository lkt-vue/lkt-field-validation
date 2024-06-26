<script setup lang="ts">
import {ValidationCode} from "../types/ValidationCode";
import ValidationItem from "../components/ValidationItem.vue";

const props = withDefaults(defineProps<{
    items: ValidationCode[],
    stack: string,
}>(), {
    items: () => [],
    stack: 'default',
});
</script>

<template>
    <div class="lkt-field-validation-info">
        <validation-item v-for="code in items" :code="code" :stack="stack"/>
    </div>
</template>

<style scoped>

</style>