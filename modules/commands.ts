/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

// todo @

import Player, {
  CommandSender,
} from "./minecraftevent";

declare const addCommand: (command: Command) => {};

type executorCallback = (sender: CommandSender, args: string[]) => any;
type tabCallback = () => any;

export default class Command {
  private msg: string = "§a§l| §f%s";
  private description: string = "";
  private usage: string = "";
  private arguments: Argument[] = [];
  private executor: executorCallback = () => { };
  private tab: tabCallback = () => { };
  private commandName: string;
  private permission: string;

  constructor(commandName: string, permission: string) {
    this.commandName = commandName;
    this.permission = permission;
  }

  setMessage(message: string): this {
    this.msg = message;

    return this;
  }

  setDescription(desc: string): this {
    this.description = desc;

    return this;
  }

  setUsage(usage: string): this {
    this.usage = usage;

    return this;
  }

  setArguments(args: Argument[]): this {
    this.arguments = args;

    return this;
  }

  onExecute(callback: executorCallback): this {
    this.executor = callback;

    return this;
  };

  onTab(callback: tabCallback): this {
    this.tab = callback;

    return this;
  }

  sendMessage(player: CommandSender, message: string) {
    let msg = this.msg.replace("%s", message);
    player.sendMessage(msg);
  }

  register(): this | void {
    if (!this.permission)
      return console.log("The \“permission\” field is not specified");

    addCommand(this);

    return this;
  }
}

export class Argument {
  private name: string;
  private isOptional: boolean = false;

  constructor(name: string, isOptional?: boolean) {
    this.name = name;

    if (isOptional)
      this.isOptional = isOptional;
  }
}