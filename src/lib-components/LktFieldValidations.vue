<script setup lang="ts">
import {ValidCode} from "../types/ValidCode";
import ValidationItem from "../components/ValidationItem.vue";
import {nextTick, ref, watch} from "vue";
import {FieldValidation} from "../classes/FieldValidation";

const props = withDefaults(defineProps<{
    items: FieldValidation[] | ValidCode[],
    stack: string,
    min: number,
    max: number,
}>(), {
    items: () => [],
    stack: 'default',
    min: 0,
    max: 0
});

const parsedItems = ref([]);

const parseItems = () => {
    let r = [];
    props.items.forEach(item => {
        if (typeof item === 'string') {
            let ins = new FieldValidation(item.replace('ko-', ''), 'ko')
                .setMin(props.min)
                .setMax(props.max);

            r.push(ins);
        } else {
            r.push(item);
        }
    });

    parsedItems.value = r;
    return r;
}

parseItems();
const refreshing = ref(false);

watch(() => props.items, (v) => {
    refreshing.value = true;
    parseItems();

    nextTick(() => refreshing.value = false);

}, {deep: true});
</script>

<template>
    <div class="lkt-field-validation-info" v-if="!refreshing">
        <validation-item v-for="validation in parsedItems" :validation="validation" :stack="stack" :key="validation.code"/>
    </div>
</template>

<style scoped>

</style>