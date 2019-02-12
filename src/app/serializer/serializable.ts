export interface iSerializable<T> {
    serialize(): string;    
}

// Static part of Serializer
export interface iSerializer<T>{
    new():iSerializable<T>;
    deserialize(jsonString:string): T;
    createInstance(): T;
}

/**
 * A decorator for serializable classes that require implementation of `iSerializer` for instance (`serialize`) and static functions `deserialize` & `createInstance`.
 * @type `T` should be {iSerializer<T>}
 */
export function serializable<T>() {
    return (constructor: T) => {}
}
