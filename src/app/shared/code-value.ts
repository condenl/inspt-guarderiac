export class CodeValue<T, V> {

    code: T;

    value: V;

    constructor(code: T, value: V) {
        this.code = code;
        this.value = value;
    }

}