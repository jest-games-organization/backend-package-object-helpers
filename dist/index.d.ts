/**
 * Decodes the given object.
 * @param encodedObject The encoded object.
 * @returns The decoded object.
 */
declare const decodeObject: <O>(encodedObject: string) => O;

/**
 * Encodes the given object.
 * @param decodedObject The decoded object.
 * @returns The encoded object.
 */
declare const encodeObject: <O>(decodedObject: O) => string;

declare type Maybe<T> = T | null | undefined;

declare type Nullable<T> = T | null;

declare type Optional<T> = T | undefined;

export { Maybe, Nullable, Optional, decodeObject, encodeObject };
