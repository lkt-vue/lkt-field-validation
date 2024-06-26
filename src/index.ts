import {App, Plugin} from 'vue';

import "../style.css";
import {default as libComponent} from './lib-components/LktFieldValidations.vue';
import {Settings} from "./settings/Settings";

const LktFieldValidation: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-validations') === undefined) app.component('lkt-field-validations', libComponent);
  }
};

export default LktFieldValidation;

export const setFieldValidationMessage = (code: string, message: string, stack: string = 'default') => {
  if (!stack) stack = 'default';
  if (!Settings.validationMessages[stack]) Settings.validationMessages[stack] = {};
  Settings.validationMessages[stack][code] = message;
}