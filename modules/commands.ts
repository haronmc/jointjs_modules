/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

// todo @

declare const Java: any;

import {
  CommandSender
} from "./minecraftevent";

type executorCallback = (sender: CommandSender, cmd: Object, label: string, args: string[]) => any;
type tabCallback = () => any;

export default class Command {
  private arguments: string[] = [];
  private isJointJSCommand: boolean = false;
  private commandName: string;
  private executor: executorCallback;
  private tab: tabCallback;

  constructor(commandName: string) {
    this.commandName = commandName;
  }

  setArguments(...args): this {
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

  setJointJSCommand(state: boolean = true): this {
    this.isJointJSCommand = state;

    return this;
  }

  register(): this {
    // todo @
    return this;
  }
}

const commandKits = new Command("kits")
  .onExecute((executor) => {
    //if (executor.hasPermission("popa"))
  })
  .onTab(() => {
    return false;
  })
  .register();