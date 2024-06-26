import {Settings} from "../settings/Settings";

export const getCodeMessage = (code: string, stack: string = 'default'): string => {
    let r = Settings.validationMessages[stack] && Settings.validationMessages[stack][code]
        ? Settings.validationMessages[stack][code]
        : '';
    if (!r) r = '';
    return r;
}