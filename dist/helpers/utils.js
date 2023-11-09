"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllKeys = exports.getBase64 = void 0;
//********* To convert the string to base64 or byteArray to base64 **********
const getBase64 = (type, payload) => {
    if (type === 'string') {
        const encoded = Buffer.from(payload, 'utf8').toString('base64');
        return encoded;
    }
    else if (type === 'byteArray') {
        //convert byteArray to base64
        const encoded = Buffer.from(payload).toString('base64');
        return encoded;
    }
    else if (type === 'base64') {
        return payload;
    }
};
exports.getBase64 = getBase64;
//************** To Extract Nested Object Keys ******************
const getAllKeys = (obj) => {
    let keys = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            keys.push(...(0, exports.getAllKeys)(obj[key]).map((subKey) => `${key}.${subKey}`));
        }
        else {
            keys.push(key);
        }
    }
    return keys;
};
exports.getAllKeys = getAllKeys;
