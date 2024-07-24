<<<<<<< HEAD
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

import Object from "./classes";
import { SpigotEventExtended } from "./minecraftevent";
declare const listenEvent: (callback: EventListenCallback) => void;

if (!listenEvent)
  throw new Error("JointJS not found.");

export interface SpigotEvent extends Object {
  getEventName(): string,
  getHandlers(): string,
  isCancelled?(): boolean,
  setCancelled?(cancel: boolean): void;
  isAsynchronous(): boolean;
}

export type EventListenCallback = (event: SpigotEventExtended) => void;

interface EventStruct {
  [eventName: string]: {
    [id: string]: EventListenCallback,
  };
}

class Library {
  private static events: EventStruct = {};
  private static _eventListener = listenEvent(event => {
    let name = event.getEventName();

    let eventList = this.events[name];

    if (!eventList)
      return;

    for (let index in eventList) {
      let callback = eventList[index];
      callback(event);
    }
  });

  public static get(): EventStruct {
    return this.events;
  };

  public static listen(eventName: string, callback: EventListenCallback, id: string) {
    let eventList = this.events[eventName];

    if (!eventList)
      this.events[eventName] = {};

    this.events[eventName][id] = callback;
  }

  public static remove(eventName: string, id: string) {
    let eventList = this.events[eventName];

    if (!eventList)
      return;

    delete eventList[id];
  };
}

=======
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

import Object from "./classes";
import { SpigotEventExtended } from "./minecraftevent";
declare const listenEvent: (callback: EventListenCallback) => void;

if (!listenEvent)
  throw new Error("JointJS not found.");

export interface SpigotEvent extends Object {
  getEventName(): string,
  getHandlers(): string,
  isCancelled?(): boolean,
  setCancelled?(cancel: boolean): void;
  isAsynchronous(): boolean;
}

export type EventListenCallback = (event: SpigotEventExtended) => void;

interface EventStruct {
  [eventName: string]: {
    [id: string]: EventListenCallback,
  };
}

class Library {
  private static events: EventStruct = {};
  private static _eventListener = listenEvent(event => {
    let name = event.getEventName();

    let eventList = this.events[name];

    if (!eventList)
      return;

    for (let index in eventList) {
      let callback = eventList[index];
      callback(event);
    }
  });

  public static get(): EventStruct {
    return this.events;
  };

  public static listen(eventName: string, callback: EventListenCallback, id: string) {
    let eventList = this.events[eventName];

    if (!eventList)
      this.events[eventName] = {};

    this.events[eventName][id] = callback;
  }

  public static remove(eventName: string, id: string) {
    let eventList = this.events[eventName];

    if (!eventList)
      return;

    delete eventList[id];
  };
}

>>>>>>> 2418f9ce3bff951b690f555ae982f6bbdb2db282
export default Library;