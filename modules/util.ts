/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

/**
 * dumpObject
 * displays object content in your console
 * @param obj Object
 */
export function dumpObject(obj: Object) {
  for (let key in obj)
    console.log(key + ": " + obj[key].toString());
}