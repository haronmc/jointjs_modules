<<<<<<< HEAD
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

import JavaObject from "./classes";
import { SpigotEvent } from "./events";

/**
 * SpigotEventExtended
 * Adds possible methods/fields to SpigotEvent
 * * https://helpch.at/docs/1.16.5/org/bukkit/event/package-summary.html
 */
export interface Material extends JavaObject {
  createBlockData(): BlockData,
  createBlockData(data: String): BlockData,
  // ! Deprecated
  getId(): number,
  getKey(): Object, // class @ NamespacedKey
  isBlock(): boolean,

  // todo @ add some methods
}

export interface ItemStack extends JavaObject {
  // todo @ add some methods
}

export interface CommandSender extends JavaObject {
  getName(): string,
  getServer(): Object, // todo @ class Server
  sendMessage(message: string): void,
  spigot(): Object; // todo @ CommandSender.Spigot
}

export interface Entity extends CommandSender {
  // todo @ add some methods
}

export interface LivingEntity extends Entity {
  // todo @ add some methods
}

export interface HumanEntity extends LivingEntity {
  // todo @ add some methods
}

export interface ItemStack extends JavaObject {
  // todo @ add some methods
}

export interface Note extends JavaObject {
  // todo @ add some methods
}

export interface Instrument extends JavaObject {
  // todo @ add some methods
}

export interface BlockData extends JavaObject {
  clone(): BlockData,
  getAsString(): string,
  getAsString(hideUnspecified: boolean): string,
  getMaterial(): Material,
  getSoundGroup(): Object, // todo @ class SoundGroup
  matches(data: BlockData): boolean,
  merge(data: BlockData): BlockData;
}

export interface BlockFace extends JavaObject {
  getDirection(): Vector,
  getModX(): number,
  getModY(): number,
  getModZ(): number,
  getOppositeFace(): BlockFace,
  isCartesian(): boolean,
  valueOf(name: string): BlockFace,
  values(): BlockFace[];
}

export interface BlockState extends JavaObject {
  // todo @ add some methods
}

export interface Item extends JavaObject {
  // todo @ add some methods
}

export interface Block extends JavaObject {
  applyBoneMeal(face: BlockFace): boolean,
  breakNaturally(): boolean,
  breakNaturally(tool: ItemStack): boolean;
  getBiome(): Object, // todo @ class Biome
  getBlockData(): BlockData,
  getBlockPower(): number,
  getBlockPower(face: BlockFace): number,
  getBoundingBox(): Object, // BoundingBox
  getChunk(): Object, // todo @ class Chunk
  getData(): any, // todo @ class byte
  getHumidity(): number,
  getLightFromBlocks(): any, // todo @ class byte
  getLightFromSky(): any, // todo @ class byte
  getLightLevel(): any, // todo @ class byte
  getLocation(): Location,
  getTemperature(): number,
  getType(): Material,
  getWorld(): Object, // todo @ class World
  getX(): number,
  getY(): number,
  getZ(): number,
  isEmpty(): boolean,
  isLiquid(): boolean,
  isPassable(): boolean,
  setType(type: Material),
}

export interface SpigotEventExtended extends SpigotEvent {
  // Event.block
  getPlayer?(): Player,
  isDropItems?(): boolean,
  setDropItems?(dropItems: boolean): void,
  getIgnitingBlock?(): Block,
  getBlockData?(): BlockData,
  getMaterial?(): Material,
  isBuildable?(): boolean,
  setBuildable?(cancel: boolean): void,

  getResult?(): ItemStack,
  getSource?(): ItemStack | Block,
  setResult?(result: ItemStack),

  getInstaBreak?(): boolean,
  getItemInHand?(): ItemStack,

  setInstaBreak?(bool: boolean): void,

  getTargetEntity?(): LivingEntity,

  getItem?(): ItemStack,
  getVelocity?(): Vector,
  setItem?(item: ItemStack): void,
  setVelocity?(vector: Vector): void,

  getBlockState?(): BlockState;
  getItems?(): Array<Item>,

  getBlock?(): Block,

  getExpToDrop?(): number,
  setExpToDrop?(exp: number): void,

  blockList?(): Array<Item>,
  getYield?(): number,
  setYield?(yieldInt: number),

  getNewState?(): BlockState,

  getBlocks?(): Array<BlockState> | Array<Block>,

  getFace?(): BlockFace,
  getToBlock?(): Block,

  getCause?(): Object,

  getIgnitingEntity?(): BlobCallback,

  getReplacedBlockStates?(): Array<BlockState>,

  getChangedType?(): Material,
  getSourceBlock?(): Object, // HandlerList

  getDirection?(): BlockFace,
  isSticky?(): boolean,

  getLength?(): number,

  getRetractLocation?(): Location; // todo @ to Location from Spigot API

  canBuild?(): boolean,
  getBlockAgainst?(): Block,
  getBlockPlaced?(): Block,
  getBlockReplacedState?(): BlockState,
  getHand?(): Object, // todo @ class EquipmentSlot
  setBuild?(canBuild: boolean): void,

  getNewCurrent?(): number;
  getOldCurrent?(): number;
  setNewCurrent?(newCurrent: number): void,

  getEntity?(): Entity,
  getTool?(): ItemStack,

  getNewLevel?(): number,
  getOldLevel?(): number,
  getReason?(): Object,
  setNewLevel?(newLevel: number): void,

  getNewData?(): BlockData,
  setNewData?(newData: BlockData),

  getInstrument?(): Instrument,
  getNote?(): Note,
  // ! Deprecated
  setInstrument?(instrument: Instrument): void,
  // ! Deprecated
  setNote?(note: Note): void,

  getLine?(index: number): string,
  getLines?(): string[],
  setLine?(index: number, line: string): void;

  // todo @ other events
}

export default interface Player extends HumanEntity {
  canSee?(player: Player): boolean,
  chat?(msg: string): void,
  getAddress?(): Object,
  getAdvancementProgress?(advancement: Object): Object, // todo @ class Advancement : class AdvancementProgress
  getAllowFlight?(): boolean,
  getBedSpawnLocation?(): Location; // todo @ location
  getClientViewDistance?(): number,
  getCompassTarget?(): Location,
  getDisplayName?(): string,
  getExp?(): number,
  getFlySpeed?(): number,
  getHealthScale?(): number,
  getLevel?(): number,
  getLocale?(): string,
  getPing?(): number,
  getPlayerListFooter?(): string,
  getPlayerListHeader?(): string,
  getPlayerListName?(): string,
  getPlayerTime?(): number,
  getPlayerTimeOffset?(): number,
  getPlayerWeather?(): Object, // todo @ class WeatherType
  getScoreboard?(): Object, // todo @ class Scoreboard
  getSpectatorTarget?(): Entity,
  getTotalExperience?(): number,
  getWalkSpeed?(): number,
  giveExp?(amount: number): void,
  giveExpLevels?(amount: number),
  hidePlayer?(player: Player),
  hidePlayer?(plugin: Object), // todo @ class Plugin
  isFlying?(): boolean,
  isHealthScaled?(): boolean,
  isOnGround?(): boolean,
  isPlayerTimeRelative?(): boolean,
  isSleepingIgnored?(): boolean,
  isSneaking?(): boolean,
  isSprinting?(): boolean,
  kickPlayer?(message: string): void,
  loadData?(): void,
  openBook?(book: ItemStack): void,
  performCommand?(command: string): boolean,

  // todo @ class Effect (not Object)

  // ! Deprecated
  playEffect(loc: Location, effect: Object, data: number): void;
  playEffect(loc: Location, effect: Object, data: any): void;

  // todo @ add other methods
}

export interface Vector {
  getX(): number,
  getY(): number,
  getZ(): number,
  setX(int: number): this,
  setY(int: number): this,
  setZ(int: number): this,

  // todo @ add other methods
=======
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

import JavaObject from "./classes";
import { SpigotEvent } from "./events";

/**
 * SpigotEventExtended
 * Adds possible methods/fields to SpigotEvent
 * * https://helpch.at/docs/1.16.5/org/bukkit/event/package-summary.html
 */
export interface Material extends JavaObject {
  createBlockData(): BlockData,
  createBlockData(data: String): BlockData,
  // ! Deprecated
  getId(): number,
  getKey(): Object, // class @ NamespacedKey
  isBlock(): boolean,

  // todo @ add some methods
}

export interface ItemStack extends JavaObject {
  // todo @ add some methods
}

export interface CommandSender extends JavaObject {
  getName(): string,
  getServer(): Object, // todo @ class Server
  sendMessage(message: string): void,
  spigot(): Object; // todo @ CommandSender.Spigot
}

export interface Entity extends CommandSender {
  // todo @ add some methods
}

export interface LivingEntity extends Entity {
  // todo @ add some methods
}

export interface HumanEntity extends LivingEntity {
  // todo @ add some methods
}

export interface ItemStack extends JavaObject {
  // todo @ add some methods
}

export interface Note extends JavaObject {
  // todo @ add some methods
}

export interface Instrument extends JavaObject {
  // todo @ add some methods
}

export interface BlockData extends JavaObject {
  clone(): BlockData,
  getAsString(): string,
  getAsString(hideUnspecified: boolean): string,
  getMaterial(): Material,
  getSoundGroup(): Object, // todo @ class SoundGroup
  matches(data: BlockData): boolean,
  merge(data: BlockData): BlockData;
}

export interface BlockFace extends JavaObject {
  getDirection(): Vector,
  getModX(): number,
  getModY(): number,
  getModZ(): number,
  getOppositeFace(): BlockFace,
  isCartesian(): boolean,
  valueOf(name: string): BlockFace,
  values(): BlockFace[];
}

export interface BlockState extends JavaObject {
  // todo @ add some methods
}

export interface Item extends JavaObject {
  // todo @ add some methods
}

export interface Block extends JavaObject {
  applyBoneMeal(face: BlockFace): boolean,
  breakNaturally(): boolean,
  breakNaturally(tool: ItemStack): boolean;
  getBiome(): Object, // todo @ class Biome
  getBlockData(): BlockData,
  getBlockPower(): number,
  getBlockPower(face: BlockFace): number,
  getBoundingBox(): Object, // BoundingBox
  getChunk(): Object, // todo @ class Chunk
  getData(): any, // todo @ class byte
  getHumidity(): number,
  getLightFromBlocks(): any, // todo @ class byte
  getLightFromSky(): any, // todo @ class byte
  getLightLevel(): any, // todo @ class byte
  getLocation(): Location,
  getTemperature(): number,
  getType(): Material,
  getWorld(): Object, // todo @ class World
  getX(): number,
  getY(): number,
  getZ(): number,
  isEmpty(): boolean,
  isLiquid(): boolean,
  isPassable(): boolean,
  setType(type: Material),
}

export interface SpigotEventExtended extends SpigotEvent {
  // Event.block
  getPlayer?(): Player,
  isDropItems?(): boolean,
  setDropItems?(dropItems: boolean): void,
  getIgnitingBlock?(): Block,
  getBlockData?(): BlockData,
  getMaterial?(): Material,
  isBuildable?(): boolean,
  setBuildable?(cancel: boolean): void,

  getResult?(): ItemStack,
  getSource?(): ItemStack | Block,
  setResult?(result: ItemStack),

  getInstaBreak?(): boolean,
  getItemInHand?(): ItemStack,

  setInstaBreak?(bool: boolean): void,

  getTargetEntity?(): LivingEntity,

  getItem?(): ItemStack,
  getVelocity?(): Vector,
  setItem?(item: ItemStack): void,
  setVelocity?(vector: Vector): void,

  getBlockState?(): BlockState;
  getItems?(): Array<Item>,

  getBlock?(): Block,

  getExpToDrop?(): number,
  setExpToDrop?(exp: number): void,

  blockList?(): Array<Item>,
  getYield?(): number,
  setYield?(yieldInt: number),

  getNewState?(): BlockState,

  getBlocks?(): Array<BlockState> | Array<Block>,

  getFace?(): BlockFace,
  getToBlock?(): Block,

  getCause?(): Object,

  getIgnitingEntity?(): BlobCallback,

  getReplacedBlockStates?(): Array<BlockState>,

  getChangedType?(): Material,
  getSourceBlock?(): Object, // HandlerList

  getDirection?(): BlockFace,
  isSticky?(): boolean,

  getLength?(): number,

  getRetractLocation?(): Location; // todo @ to Location from Spigot API

  canBuild?(): boolean,
  getBlockAgainst?(): Block,
  getBlockPlaced?(): Block,
  getBlockReplacedState?(): BlockState,
  getHand?(): Object, // todo @ class EquipmentSlot
  setBuild?(canBuild: boolean): void,

  getNewCurrent?(): number;
  getOldCurrent?(): number;
  setNewCurrent?(newCurrent: number): void,

  getEntity?(): Entity,
  getTool?(): ItemStack,

  getNewLevel?(): number,
  getOldLevel?(): number,
  getReason?(): Object,
  setNewLevel?(newLevel: number): void,

  getNewData?(): BlockData,
  setNewData?(newData: BlockData),

  getInstrument?(): Instrument,
  getNote?(): Note,
  // ! Deprecated
  setInstrument?(instrument: Instrument): void,
  // ! Deprecated
  setNote?(note: Note): void,

  getLine?(index: number): string,
  getLines?(): string[],
  setLine?(index: number, line: string): void;

  // todo @ other events
}

export default interface Player extends HumanEntity {
  canSee?(player: Player): boolean,
  chat?(msg: string): void,
  getAddress?(): Object,
  getAdvancementProgress?(advancement: Object): Object, // todo @ class Advancement : class AdvancementProgress
  getAllowFlight?(): boolean,
  getBedSpawnLocation?(): Location; // todo @ location
  getClientViewDistance?(): number,
  getCompassTarget?(): Location,
  getDisplayName?(): string,
  getExp?(): number,
  getFlySpeed?(): number,
  getHealthScale?(): number,
  getLevel?(): number,
  getLocale?(): string,
  getPing?(): number,
  getPlayerListFooter?(): string,
  getPlayerListHeader?(): string,
  getPlayerListName?(): string,
  getPlayerTime?(): number,
  getPlayerTimeOffset?(): number,
  getPlayerWeather?(): Object, // todo @ class WeatherType
  getScoreboard?(): Object, // todo @ class Scoreboard
  getSpectatorTarget?(): Entity,
  getTotalExperience?(): number,
  getWalkSpeed?(): number,
  giveExp?(amount: number): void,
  giveExpLevels?(amount: number),
  hidePlayer?(player: Player),
  hidePlayer?(plugin: Object), // todo @ class Plugin
  isFlying?(): boolean,
  isHealthScaled?(): boolean,
  isOnGround?(): boolean,
  isPlayerTimeRelative?(): boolean,
  isSleepingIgnored?(): boolean,
  isSneaking?(): boolean,
  isSprinting?(): boolean,
  kickPlayer?(message: string): void,
  loadData?(): void,
  openBook?(book: ItemStack): void,
  performCommand?(command: string): boolean,

  // todo @ class Effect (not Object)

  // ! Deprecated
  playEffect(loc: Location, effect: Object, data: number): void;
  playEffect(loc: Location, effect: Object, data: any): void;

  // todo @ add other methods
}

export interface Vector {
  getX(): number,
  getY(): number,
  getZ(): number,
  setX(int: number): this,
  setY(int: number): this,
  setZ(int: number): this,

  // todo @ add other methods
>>>>>>> 2418f9ce3bff951b690f555ae982f6bbdb2db282
}