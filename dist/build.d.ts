declare class a {
    static createEmpty(e?: string): a;
    static createEmail(e?: string): a;
    static createMinStr(e: any, t?: string): a;
    static createMaxStr(e: any, t?: string): a;
    static createMinNum(e: any, t?: string): a;
    static createMaxNum(e: any, t?: string): a;
    static createNumBetween(e: any, t: any, c?: string): a;
    static createMinNumbers(e: any, t?: string): a;
    static createMaxNumbers(e: any, t?: string): a;
    static createMinUpperChars(e: any, t?: string): a;
    static createMaxUpperChars(e: any, t?: string): a;
    static createMinLowerChars(e: any, t?: string): a;
    static createMaxLowerChars(e: any, t?: string): a;
    static createMinSpecialChars(e: any, t?: string): a;
    static createMaxSpecialChars(e: any, t?: string): a;
    static createMinChars(e: any, t?: string): a;
    static createMaxChars(e: any, t?: string): a;
    static createEqualTo(e: any, t?: string): a;
    constructor(e: any, t: any);
    code: any;
    status: any;
    min: number;
    max: number;
    setMin(e: any): this;
    setMax(e: any): this;
    setEqualToValue(e: any): this;
    equalToValue: any;
}
declare namespace j {
    function install(r: any): void;
}
declare function W(r: any): boolean;
declare function z(r: any, e: any, t?: string): void;
export { a as FieldValidation, j as default, W as setFieldValidationIconSlot, z as setFieldValidationMessage };
