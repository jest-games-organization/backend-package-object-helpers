/**
 * Decodes the given object.
 * @param encodedObject The encoded object.
 * @returns The decoded object.
 */
const decodeObject = encodedObject => {
  // Return the decoded object.
  return JSON.parse(Buffer.from(encodedObject, 'base64').toString());
};

/**
 * Encodes the given object.
 * @param decodedObject The decoded object.
 * @returns The encoded object.
 */
const encodeObject = decodedObject => {
  // Return the encoded object.
  return Buffer.from(JSON.stringify(decodedObject)).toString('base64');
};

export { decodeObject, encodeObject };
