
const generator = (type: string): Function => <T>(target: T): Boolean => Object.prototype.toString.call(target) === `[object ${type}]`;

export const isString = generator('String');

export const isNumber = generator('Number');

export const isBoolean = generator('Boolean');

export const isArray = generator('Array');

export const isObject = generator('Object');

export const isPromise = generator('Promise');


export const isURL = (s: string): Boolean => {
  return /^http[s]?:\/\/.*/.test(s);
};