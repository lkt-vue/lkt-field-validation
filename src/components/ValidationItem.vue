<script setup lang="ts">
import {ValidationCode} from "../types/ValidationCode";
import {computed} from "vue";
import {getCodeMessage} from "../functions/functions";
import {__} from "lkt-i18n";
import {fill} from "lkt-string-tools";
import {Settings} from "../settings/Settings";

const props = withDefaults(defineProps<{
    code: ValidationCode,
    stack: string,
    min: number,
    max: number,
}>(), {
    code: '',
    stack: 'default',
    min: 0,
    max: 0
});

const computedMessage = computed(() => {
        let msg = getCodeMessage(props.code, props.stack),
            replacements = {
                min: props.min,
                max: props.max
            };

        if (msg.startsWith('__:')) {
            return __(msg.substring(3), replacements);
        }

        return fill(msg, replacements, ':', '');
    }),
    hasIconSlot = computed(() => {
        return Settings.iconSlot !== '';
    }),
    iconSlot = computed(() => {
        return Settings.iconSlot;
    });
</script>

<template>
    <div class="lkt-field-validation-message" :class="'code-' + code">
        <template v-if="hasIconSlot">
            <component
                :is="iconSlot"/>
        </template>
        {{ computedMessage }}
    </div>
</template>

<style scoped>

</style>