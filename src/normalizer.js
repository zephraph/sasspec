/* @flow */

export default function normalizer(sliceStart: number, sliceEnd: number): (str: string) => string {
  return str => str.trim().slice(sliceStart, sliceEnd).trim().replace(/\s\s+/g, ' ');
}
