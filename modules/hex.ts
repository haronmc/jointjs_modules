<<<<<<< HEAD
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

declare const Java: any;

const pattern = Java.type("java.util.regex.Pattern");
const stringBuilder = Java.type("java.lang.StringBuilder");
const chatColor = Java.type("org.bukkit.ChatColor");

/**
 * hex
 * Hex color parser
 * * https://www.birdflop.com/resources/rgb/
 * * Color format would be §x§r§r§g§g§b§b
 */
export default class hex {
  public static parse(message: string): string {
    let patternCurrent = pattern.compile("#[a-fA-F0-9]{6}");
    let matcher = patternCurrent.matcher(message);

    while (matcher.find()) {
      let hexCode = message.substring(matcher.start(), matcher.end());
      let replaceSharp = hexCode.replace("#", "x");
      let builder = new stringBuilder("");
      for (let char of replaceSharp)
        builder.append("&" + char);

      message = message.replace(hexCode, builder.toString());
      matcher = patternCurrent.matcher(message);
    }

    return chatColor.translateAlternateColorCodes("&", message);
  }
=======
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

declare const Java: any;

const pattern = Java.type("java.util.regex.Pattern");
const stringBuilder = Java.type("java.lang.StringBuilder");
const chatColor = Java.type("org.bukkit.ChatColor");

/**
 * hex
 * Hex color parser
 * * https://www.birdflop.com/resources/rgb/
 * * Color format would be §x§r§r§g§g§b§b
 */
export default class hex {
  public static parse(message: string): string {
    let patternCurrent = pattern.compile("#[a-fA-F0-9]{6}");
    let matcher = patternCurrent.matcher(message);

    while (matcher.find()) {
      let hexCode = message.substring(matcher.start(), matcher.end());
      let replaceSharp = hexCode.replace("#", "x");
      let builder = new stringBuilder("");
      for (let char of replaceSharp)
        builder.append("&" + char);

      message = message.replace(hexCode, builder.toString());
      matcher = patternCurrent.matcher(message);
    }

    return chatColor.translateAlternateColorCodes("&", message);
  }
>>>>>>> 2418f9ce3bff951b690f555ae982f6bbdb2db282
}