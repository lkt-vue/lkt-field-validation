<script setup lang="ts">
import {ValidationCode} from "../types/ValidationCode";
import {computed} from "vue";
import {getCodeMessage} from "../functions/functions";
import {__} from "lkt-i18n";

const props = withDefaults(defineProps<{
    code: ValidationCode,
    stack: string,
}>(), {
    code: '',
    stack: 'default',
});

const computedMessage = computed(() => {
    let msg = getCodeMessage(props.code, props.stack);

    if (msg.startsWith('__:')) {
        return __(msg.substring(3));
    }
    return msg;
});
</script>

<template>
<div class="lkt-field-validation-message" :class="'code-' + code">
    {{computedMessage}}
</div>
</template>

<style scoped>

</style>