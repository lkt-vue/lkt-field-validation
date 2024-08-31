import {ValidStatus} from "../types/ValidStatus";
import {FieldValidationCode} from "../types/FieldValidationCode";

export class FieldValidation {
    code: FieldValidationCode = '';
    status: ValidStatus = 'info';

    min: number = 0;
    max: number = 0;

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

    static createMinStr(min: number, status: ValidStatus = 'ko') {
        return new FieldValidation('min-str', status).setMin(min);
    }

    static createMaxStr(max: number, status: ValidStatus = 'ko') {
        return new FieldValidation('max-str', status).setMax(max);
    }
}