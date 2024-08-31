declare class m {
    static createMinStr(e: any, t?: string): m;
    static createMaxStr(e: any, t?: string): m;
    constructor(e: any, t: any);
    code: any;
    status: any;
    min: number;
    max: number;
    setMin(e: any): this;
    setMax(e: any): this;
}
declare namespace T {
    function install(s: any): void;
}
declare function z(s: any): boolean;
declare function j(s: any, e: any, t?: string): void;
export { m as FieldValidation, T as default, z as setFieldValidationIconSlot, j as setFieldValidationMessage };
