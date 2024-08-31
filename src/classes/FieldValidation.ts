import {ValidStatus} from "../types/ValidStatus";
import {FieldValidationCode} from "../types/FieldValidationCode";

export class FieldValidation {
    code: FieldValidationCode = '';
    status: ValidStatus = 'info';

    min: number = 0;
    max: number = 0;
    equalToValue: number|string|undefined = undefined;

    constructor(code: FieldValidationCode, status: ValidStatus) {
        this.code = code;
        this.status = status;
    }

    setMin(n: number) {
        this.min = n;
        return this;
    }

    setMax(n: number) {
        this.max = n;
        return this;
    }

    setEqualToValue(val: number|string) {
        this.equalToValue = val;
        return this;
    }

    static createEmpty(status: ValidStatus = 'ko') {
        return new FieldValidation('empty', status);
    }

    static createEmail(status: ValidStatus = 'ko') {
        return new FieldValidation('email', status);
    }

    static createMinStr(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-str', status).setMin(min);
    }

    static createMaxStr(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-str', status).setMax(max);
    }

    static createMinNum(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-num', status).setMin(min);
    }

    static createMaxNum(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-num', status).setMax(max);
    }

    static createNumBetween(min: number, max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-num', status).setMin(min).setMax(max);
    }

    static createMinNumbers(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-numbers', status).setMin(min);
    }

    static createMaxNumbers(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-numbers', status).setMax(max);
    }

    static createMinUpperChars(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-upper-chars', status).setMin(min);
    }

    static createMaxUpperChars(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-upper-chars', status).setMax(max);
    }

    static createMinLowerChars(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-lower-chars', status).setMin(min);
    }

    static createMaxLowerChars(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-lower-chars', status).setMax(max);
    }

    static createMinSpecialChars(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-special-chars', status).setMin(min);
    }

    static createMaxSpecialChars(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-special-chars', status).setMax(max);
    }

    static createMinChars(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-chars', status).setMin(min);
    }

    static createMaxChars(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-chars', status).setMax(max);
    }

    static createEqualTo(value: number|string, status: ValidStatus = 'ko') {
        return new FieldValidation('equal-to', status).setEqualToValue(value);
    }
}