<<<<<<< HEAD
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

declare const Java: any;

interface Class { };

export default interface Object {
  equals(object: Object): boolean,
  getClass(): Class,
  hashCode(): number,
  notify(): void,
  notifyAll(): void,
  toString(): string,
  wait(): void,
  wait(timeoutMillis: number),
  wait(timeoutMillis: number, nanos: number);
}

abstract class JavaClassImplementation extends Object {
  protected classPath: string;
  protected entity: Object;

  protected createEntity() {
    this.entity = new (Java.type(this.classPath));
  }
}

// Process

interface ProcessHandle extends Object {
  arguments(): string[] | null,
  command(): string | null,
  commandLine(): string | null,
  startInstant(): Object | null; // Instant
  totalCpuDuration(): Object | null; // Duration
  user(): string | null;
}

/**
 * Process
 * * https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Process.html
 */
export class Process extends JavaClassImplementation {
  protected static classPath: string = "java.lang.Process";
  protected entity: ProcessInterface;

  constructor() {
    super();
    this.createEntity();
  }

  children(): Object { return this.entity.children(); }
  descendants(): Object { return this.entity.descendants(); }
  destroy(): void { return this.entity.destroy(); }
  destroyForcibly(): Process { return this.entity.destroyForcibly(); }
  exitValue(): number { return this.entity.exitValue(); }
  getErrorStream(): Object { return this.entity.getErrorStream(); } // abstract InputStream
  getInputStream(): Object { return this.entity.getInputStream(); } // abstract InputStream
  getOutputStream(): Object { return this.entity.getOutputStream(); } // abstract OutputStream
  info(): ProcessHandle { return this.entity.info(); }
  isAlive(): boolean { return this.entity.isAlive(); }
  onExit(): Object { return this.entity.onExit(); }
  pid(): number { return this.entity.pid(); }
  supportsNormalTermination(): boolean { return this.entity.supportsNormalTermination(); }
  toHandle(): Object { return this.entity.toHandle(); }
  waitFor(timeout?: number, unit?: unknown): number { return this.entity.waitFor(timeout, unit); }
}

interface ProcessInterface extends Object {
  children(): Object, // Stream<ProcessHandle>
  descendants(): Object,
  destroy(): void,
  destroyForcibly(): Process,
  exitValue(): number,
  getErrorStream(): Object, // abstract InputStream
  getInputStream(): Object, // abstract InputStream
  getOutputStream(): Object, // abstract OutputStream
  info(): ProcessHandle,
  isAlive(): boolean,
  onExit(): Object,
  pid(): number,
  supportsNormalTermination(): boolean,
  toHandle(): Object,
  waitFor(timeout?: number, unit?: unknown): number; // 	waitFor​(long timeout, TimeUnit unit)
}

/**
 * ProcessBuilder
 * * https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ProcessBuilder.html
 */
export class ProcessBuilder extends JavaClassImplementation {
  protected classPath: string = "java.lang.ProcessBuilder";
  protected entity: ProcessBuilderInterface;

  constructor() {
    super();
    this.createEntity();
  }

  command(...args): this { this.entity.command(args); return this; }
  directory(directory: Object): this { this.entity.directory(directory); return this; }
  enviroment(): Map<string, string> { return this.entity.enviroment(); }
  inheritIO(): this { this.entity.inheritIO(); return this; }
  redirectError(arg?: Object): Object { return this.entity.redirectError(arg); };
  redirectErrorStream(arg?: boolean): boolean | Object { return this.entity.redirectErrorStream(arg); };
  redirectInput(arg?: Object): Object { return this.entity.redirectInput(arg); };
  redirectOutput(arg?: Object): Object { return this.entity.redirectOutput(arg); };
  start(): Process { return this.entity.start(); };
  startPipeline(builders: Array<ProcessBuilder>): any { return this.entity.startPipeline(builders); };
}

interface ProcessBuilderInterface extends Object {
  constructor(): this;
  command(...args): this,
  directory(directory: Object): Object | this, // (dir: File): ProcessBuilder
  enviroment(): Map<string, string>,
  inheritIO(): this,
  redirectError(arg?: Object): Object,
  redirectErrorStream(arg?: boolean): boolean | this,
  redirectInput(arg?: Object): Object,
  redirectOutput(arg?: Object): Object,
  start(): Process,
  startPipeline(builders: Array<ProcessBuilder>): any;
=======
/**
 * @jointjs/modules
 * written by smokingplaya 2024
 * distributed under the license GPL-3.0
 * * https://github.com/haronmc/jointjs_modules/blob/main/LICENSE
 */

declare const Java: any;

interface Class { };

export default interface Object {
  equals(object: Object): boolean,
  getClass(): Class,
  hashCode(): number,
  notify(): void,
  notifyAll(): void,
  toString(): string,
  wait(): void,
  wait(timeoutMillis: number),
  wait(timeoutMillis: number, nanos: number);
}

abstract class JavaClassImplementation extends Object {
  protected classPath: string;
  protected entity: Object;

  protected createEntity() {
    this.entity = new (Java.type(this.classPath));
  }
}

// Process

interface ProcessHandle extends Object {
  arguments(): string[] | null,
  command(): string | null,
  commandLine(): string | null,
  startInstant(): Object | null; // Instant
  totalCpuDuration(): Object | null; // Duration
  user(): string | null;
}

/**
 * Process
 * * https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Process.html
 */
export class Process extends JavaClassImplementation {
  protected static classPath: string = "java.lang.Process";
  protected entity: ProcessInterface;

  constructor() {
    super();
    this.createEntity();
  }

  children(): Object { return this.entity.children(); }
  descendants(): Object { return this.entity.descendants(); }
  destroy(): void { return this.entity.destroy(); }
  destroyForcibly(): Process { return this.entity.destroyForcibly(); }
  exitValue(): number { return this.entity.exitValue(); }
  getErrorStream(): Object { return this.entity.getErrorStream(); } // abstract InputStream
  getInputStream(): Object { return this.entity.getInputStream(); } // abstract InputStream
  getOutputStream(): Object { return this.entity.getOutputStream(); } // abstract OutputStream
  info(): ProcessHandle { return this.entity.info(); }
  isAlive(): boolean { return this.entity.isAlive(); }
  onExit(): Object { return this.entity.onExit(); }
  pid(): number { return this.entity.pid(); }
  supportsNormalTermination(): boolean { return this.entity.supportsNormalTermination(); }
  toHandle(): Object { return this.entity.toHandle(); }
  waitFor(timeout?: number, unit?: unknown): number { return this.entity.waitFor(timeout, unit); }
}

interface ProcessInterface extends Object {
  children(): Object, // Stream<ProcessHandle>
  descendants(): Object,
  destroy(): void,
  destroyForcibly(): Process,
  exitValue(): number,
  getErrorStream(): Object, // abstract InputStream
  getInputStream(): Object, // abstract InputStream
  getOutputStream(): Object, // abstract OutputStream
  info(): ProcessHandle,
  isAlive(): boolean,
  onExit(): Object,
  pid(): number,
  supportsNormalTermination(): boolean,
  toHandle(): Object,
  waitFor(timeout?: number, unit?: unknown): number; // 	waitFor​(long timeout, TimeUnit unit)
}

/**
 * ProcessBuilder
 * * https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/ProcessBuilder.html
 */
export class ProcessBuilder extends JavaClassImplementation {
  protected classPath: string = "java.lang.ProcessBuilder";
  protected entity: ProcessBuilderInterface;

  constructor() {
    super();
    this.createEntity();
  }

  command(...args): this { this.entity.command(args); return this; }
  directory(directory: Object): this { this.entity.directory(directory); return this; }
  enviroment(): Map<string, string> { return this.entity.enviroment(); }
  inheritIO(): this { this.entity.inheritIO(); return this; }
  redirectError(arg?: Object): Object { return this.entity.redirectError(arg); };
  redirectErrorStream(arg?: boolean): boolean | Object { return this.entity.redirectErrorStream(arg); };
  redirectInput(arg?: Object): Object { return this.entity.redirectInput(arg); };
  redirectOutput(arg?: Object): Object { return this.entity.redirectOutput(arg); };
  start(): Process { return this.entity.start(); };
  startPipeline(builders: Array<ProcessBuilder>): any { return this.entity.startPipeline(builders); };
}

interface ProcessBuilderInterface extends Object {
  constructor(): this;
  command(...args): this,
  directory(directory: Object): Object | this, // (dir: File): ProcessBuilder
  enviroment(): Map<string, string>,
  inheritIO(): this,
  redirectError(arg?: Object): Object,
  redirectErrorStream(arg?: boolean): boolean | this,
  redirectInput(arg?: Object): Object,
  redirectOutput(arg?: Object): Object,
  start(): Process,
  startPipeline(builders: Array<ProcessBuilder>): any;
>>>>>>> 2418f9ce3bff951b690f555ae982f6bbdb2db282
}