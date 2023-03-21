//********* To convert the string to base64 or byteArray to base64 **********
export const getBase64 = (type: string, payload: any) => {
  if (type === 'string') {
    const encoded: string = Buffer.from(payload, 'utf8').toString('base64');
    return encoded;
  } else if (type === 'byteArray') {
    //convert byteArray to base64
    const encoded: string = Buffer.from(payload).toString('base64');
    return encoded;
  } else if (type === 'base64') {
    return payload;
  }
};

//************** To Extract Nested Object Keys ******************
export function getAllKeys(obj: { [x: string]: any }): string[] {
  let keys = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys.push(...getAllKeys(obj[key]).map((subKey: string) => `${key}.${subKey}`));
    } else {
      keys.push(key);
    }
  }
  return keys;
}
