
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Item
 * ----------- Item -----------
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Inventory
 * ----------- Inventory Item -----------
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryLog
 * 
 */
export type InventoryLog = $Result.DefaultSelection<Prisma.$InventoryLogPayload>
/**
 * Model MiniBar
 * 
 */
export type MiniBar = $Result.DefaultSelection<Prisma.$MiniBarPayload>
/**
 * Model MiniBarLog
 * 
 */
export type MiniBarLog = $Result.DefaultSelection<Prisma.$MiniBarLogPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomLog
 * 
 */
export type RoomLog = $Result.DefaultSelection<Prisma.$RoomLogPayload>
/**
 * Model RoomStatus
 * 
 */
export type RoomStatus = $Result.DefaultSelection<Prisma.$RoomStatusPayload>
/**
 * Model RoomType
 * 
 */
export type RoomType = $Result.DefaultSelection<Prisma.$RoomTypePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InventoryAction: {
  ADD: 'ADD',
  USE: 'USE'
};

export type InventoryAction = (typeof InventoryAction)[keyof typeof InventoryAction]

}

export type InventoryAction = $Enums.InventoryAction

export const InventoryAction: typeof $Enums.InventoryAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryLog`: Exposes CRUD operations for the **InventoryLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryLogs
    * const inventoryLogs = await prisma.inventoryLog.findMany()
    * ```
    */
  get inventoryLog(): Prisma.InventoryLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.miniBar`: Exposes CRUD operations for the **MiniBar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MiniBars
    * const miniBars = await prisma.miniBar.findMany()
    * ```
    */
  get miniBar(): Prisma.MiniBarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.miniBarLog`: Exposes CRUD operations for the **MiniBarLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MiniBarLogs
    * const miniBarLogs = await prisma.miniBarLog.findMany()
    * ```
    */
  get miniBarLog(): Prisma.MiniBarLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomLog`: Exposes CRUD operations for the **RoomLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomLogs
    * const roomLogs = await prisma.roomLog.findMany()
    * ```
    */
  get roomLog(): Prisma.RoomLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomStatus`: Exposes CRUD operations for the **RoomStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomStatuses
    * const roomStatuses = await prisma.roomStatus.findMany()
    * ```
    */
  get roomStatus(): Prisma.RoomStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomType`: Exposes CRUD operations for the **RoomType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTypes
    * const roomTypes = await prisma.roomType.findMany()
    * ```
    */
  get roomType(): Prisma.RoomTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Item: 'Item',
    Inventory: 'Inventory',
    InventoryLog: 'InventoryLog',
    MiniBar: 'MiniBar',
    MiniBarLog: 'MiniBarLog',
    Room: 'Room',
    RoomLog: 'RoomLog',
    RoomStatus: 'RoomStatus',
    RoomType: 'RoomType',
    Admin: 'Admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "item" | "inventory" | "inventoryLog" | "miniBar" | "miniBarLog" | "room" | "roomLog" | "roomStatus" | "roomType" | "admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryLog: {
        payload: Prisma.$InventoryLogPayload<ExtArgs>
        fields: Prisma.InventoryLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          findFirst: {
            args: Prisma.InventoryLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          findMany: {
            args: Prisma.InventoryLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>[]
          }
          create: {
            args: Prisma.InventoryLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          createMany: {
            args: Prisma.InventoryLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          update: {
            args: Prisma.InventoryLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          deleteMany: {
            args: Prisma.InventoryLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          aggregate: {
            args: Prisma.InventoryLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryLog>
          }
          groupBy: {
            args: Prisma.InventoryLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryLogCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryLogCountAggregateOutputType> | number
          }
        }
      }
      MiniBar: {
        payload: Prisma.$MiniBarPayload<ExtArgs>
        fields: Prisma.MiniBarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiniBarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiniBarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload>
          }
          findFirst: {
            args: Prisma.MiniBarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiniBarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload>
          }
          findMany: {
            args: Prisma.MiniBarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload>[]
          }
          create: {
            args: Prisma.MiniBarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload>
          }
          createMany: {
            args: Prisma.MiniBarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MiniBarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload>
          }
          update: {
            args: Prisma.MiniBarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload>
          }
          deleteMany: {
            args: Prisma.MiniBarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MiniBarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MiniBarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarPayload>
          }
          aggregate: {
            args: Prisma.MiniBarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiniBar>
          }
          groupBy: {
            args: Prisma.MiniBarGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiniBarGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiniBarCountArgs<ExtArgs>
            result: $Utils.Optional<MiniBarCountAggregateOutputType> | number
          }
        }
      }
      MiniBarLog: {
        payload: Prisma.$MiniBarLogPayload<ExtArgs>
        fields: Prisma.MiniBarLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiniBarLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiniBarLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload>
          }
          findFirst: {
            args: Prisma.MiniBarLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiniBarLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload>
          }
          findMany: {
            args: Prisma.MiniBarLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload>[]
          }
          create: {
            args: Prisma.MiniBarLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload>
          }
          createMany: {
            args: Prisma.MiniBarLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MiniBarLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload>
          }
          update: {
            args: Prisma.MiniBarLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload>
          }
          deleteMany: {
            args: Prisma.MiniBarLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MiniBarLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MiniBarLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarLogPayload>
          }
          aggregate: {
            args: Prisma.MiniBarLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiniBarLog>
          }
          groupBy: {
            args: Prisma.MiniBarLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiniBarLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiniBarLogCountArgs<ExtArgs>
            result: $Utils.Optional<MiniBarLogCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomLog: {
        payload: Prisma.$RoomLogPayload<ExtArgs>
        fields: Prisma.RoomLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload>
          }
          findFirst: {
            args: Prisma.RoomLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload>
          }
          findMany: {
            args: Prisma.RoomLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload>[]
          }
          create: {
            args: Prisma.RoomLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload>
          }
          createMany: {
            args: Prisma.RoomLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload>
          }
          update: {
            args: Prisma.RoomLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload>
          }
          deleteMany: {
            args: Prisma.RoomLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomLogPayload>
          }
          aggregate: {
            args: Prisma.RoomLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomLog>
          }
          groupBy: {
            args: Prisma.RoomLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomLogCountArgs<ExtArgs>
            result: $Utils.Optional<RoomLogCountAggregateOutputType> | number
          }
        }
      }
      RoomStatus: {
        payload: Prisma.$RoomStatusPayload<ExtArgs>
        fields: Prisma.RoomStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          findFirst: {
            args: Prisma.RoomStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          findMany: {
            args: Prisma.RoomStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>[]
          }
          create: {
            args: Prisma.RoomStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          createMany: {
            args: Prisma.RoomStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          update: {
            args: Prisma.RoomStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          deleteMany: {
            args: Prisma.RoomStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomStatusPayload>
          }
          aggregate: {
            args: Prisma.RoomStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomStatus>
          }
          groupBy: {
            args: Prisma.RoomStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomStatusCountArgs<ExtArgs>
            result: $Utils.Optional<RoomStatusCountAggregateOutputType> | number
          }
        }
      }
      RoomType: {
        payload: Prisma.$RoomTypePayload<ExtArgs>
        fields: Prisma.RoomTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          findFirst: {
            args: Prisma.RoomTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          findMany: {
            args: Prisma.RoomTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>[]
          }
          create: {
            args: Prisma.RoomTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          createMany: {
            args: Prisma.RoomTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          update: {
            args: Prisma.RoomTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          deleteMany: {
            args: Prisma.RoomTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          aggregate: {
            args: Prisma.RoomTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomType>
          }
          groupBy: {
            args: Prisma.RoomTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomTypeCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    item?: ItemOmit
    inventory?: InventoryOmit
    inventoryLog?: InventoryLogOmit
    miniBar?: MiniBarOmit
    miniBarLog?: MiniBarLogOmit
    room?: RoomOmit
    roomLog?: RoomLogOmit
    roomStatus?: RoomStatusOmit
    roomType?: RoomTypeOmit
    admin?: AdminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    minibar: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minibar?: boolean | ItemCountOutputTypeCountMinibarArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountMinibarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    history: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | InventoryCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLogWhereInput
  }


  /**
   * Count Type MiniBarCountOutputType
   */

  export type MiniBarCountOutputType = {
    MiniBarLog: number
  }

  export type MiniBarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MiniBarLog?: boolean | MiniBarCountOutputTypeCountMiniBarLogArgs
  }

  // Custom InputTypes
  /**
   * MiniBarCountOutputType without action
   */
  export type MiniBarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarCountOutputType
     */
    select?: MiniBarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MiniBarCountOutputType without action
   */
  export type MiniBarCountOutputTypeCountMiniBarLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarLogWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    minibar: number
    history: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minibar?: boolean | RoomCountOutputTypeCountMinibarArgs
    history?: boolean | RoomCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMinibarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomLogWhereInput
  }


  /**
   * Count Type RoomStatusCountOutputType
   */

  export type RoomStatusCountOutputType = {
    rooms: number
  }

  export type RoomStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomStatusCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * RoomStatusCountOutputType without action
   */
  export type RoomStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatusCountOutputType
     */
    select?: RoomStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomStatusCountOutputType without action
   */
  export type RoomStatusCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomTypeCountOutputType
   */

  export type RoomTypeCountOutputType = {
    Room: number
  }

  export type RoomTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Room?: boolean | RoomTypeCountOutputTypeCountRoomArgs
  }

  // Custom InputTypes
  /**
   * RoomTypeCountOutputType without action
   */
  export type RoomTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeCountOutputType
     */
    select?: RoomTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomTypeCountOutputType without action
   */
  export type RoomTypeCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | Item$inventoryArgs<ExtArgs>
    minibar?: boolean | Item$minibarArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Item$inventoryArgs<ExtArgs>
    minibar?: boolean | Item$minibarArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs> | null
      minibar: Prisma.$MiniBarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Item$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Item$inventoryArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    minibar<T extends Item$minibarArgs<ExtArgs> = {}>(args?: Subset<T, Item$minibarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly price: FieldRef<"Item", 'Float'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.inventory
   */
  export type Item$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
  }

  /**
   * Item.minibar
   */
  export type Item$minibarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    where?: MiniBarWhereInput
    orderBy?: MiniBarOrderByWithRelationInput | MiniBarOrderByWithRelationInput[]
    cursor?: MiniBarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniBarScalarFieldEnum | MiniBarScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    itemId: number
    quantity: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    itemId: number
    quantity: number
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    quantity?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    history?: boolean | Inventory$historyArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>



  export type InventorySelectScalar = {
    id?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "quantity", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    history?: boolean | Inventory$historyArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      history: Prisma.$InventoryLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemId: number
      quantity: number
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends Inventory$historyArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'Int'>
    readonly itemId: FieldRef<"Inventory", 'Int'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.history
   */
  export type Inventory$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    where?: InventoryLogWhereInput
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    cursor?: InventoryLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryLog
   */

  export type AggregateInventoryLog = {
    _count: InventoryLogCountAggregateOutputType | null
    _avg: InventoryLogAvgAggregateOutputType | null
    _sum: InventoryLogSumAggregateOutputType | null
    _min: InventoryLogMinAggregateOutputType | null
    _max: InventoryLogMaxAggregateOutputType | null
  }

  export type InventoryLogAvgAggregateOutputType = {
    id: number | null
    inventoryId: number | null
    quantity: number | null
  }

  export type InventoryLogSumAggregateOutputType = {
    id: number | null
    inventoryId: number | null
    quantity: number | null
  }

  export type InventoryLogMinAggregateOutputType = {
    id: number | null
    inventoryId: number | null
    type: $Enums.InventoryAction | null
    quantity: number | null
    timestamp: Date | null
  }

  export type InventoryLogMaxAggregateOutputType = {
    id: number | null
    inventoryId: number | null
    type: $Enums.InventoryAction | null
    quantity: number | null
    timestamp: Date | null
  }

  export type InventoryLogCountAggregateOutputType = {
    id: number
    inventoryId: number
    type: number
    quantity: number
    timestamp: number
    _all: number
  }


  export type InventoryLogAvgAggregateInputType = {
    id?: true
    inventoryId?: true
    quantity?: true
  }

  export type InventoryLogSumAggregateInputType = {
    id?: true
    inventoryId?: true
    quantity?: true
  }

  export type InventoryLogMinAggregateInputType = {
    id?: true
    inventoryId?: true
    type?: true
    quantity?: true
    timestamp?: true
  }

  export type InventoryLogMaxAggregateInputType = {
    id?: true
    inventoryId?: true
    type?: true
    quantity?: true
    timestamp?: true
  }

  export type InventoryLogCountAggregateInputType = {
    id?: true
    inventoryId?: true
    type?: true
    quantity?: true
    timestamp?: true
    _all?: true
  }

  export type InventoryLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLog to aggregate.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryLogs
    **/
    _count?: true | InventoryLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryLogMaxAggregateInputType
  }

  export type GetInventoryLogAggregateType<T extends InventoryLogAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryLog[P]>
      : GetScalarType<T[P], AggregateInventoryLog[P]>
  }




  export type InventoryLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLogWhereInput
    orderBy?: InventoryLogOrderByWithAggregationInput | InventoryLogOrderByWithAggregationInput[]
    by: InventoryLogScalarFieldEnum[] | InventoryLogScalarFieldEnum
    having?: InventoryLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryLogCountAggregateInputType | true
    _avg?: InventoryLogAvgAggregateInputType
    _sum?: InventoryLogSumAggregateInputType
    _min?: InventoryLogMinAggregateInputType
    _max?: InventoryLogMaxAggregateInputType
  }

  export type InventoryLogGroupByOutputType = {
    id: number
    inventoryId: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp: Date
    _count: InventoryLogCountAggregateOutputType | null
    _avg: InventoryLogAvgAggregateOutputType | null
    _sum: InventoryLogSumAggregateOutputType | null
    _min: InventoryLogMinAggregateOutputType | null
    _max: InventoryLogMaxAggregateOutputType | null
  }

  type GetInventoryLogGroupByPayload<T extends InventoryLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryLogGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryLogGroupByOutputType[P]>
        }
      >
    >


  export type InventoryLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    type?: boolean
    quantity?: boolean
    timestamp?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLog"]>



  export type InventoryLogSelectScalar = {
    id?: boolean
    inventoryId?: boolean
    type?: boolean
    quantity?: boolean
    timestamp?: boolean
  }

  export type InventoryLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryId" | "type" | "quantity" | "timestamp", ExtArgs["result"]["inventoryLog"]>
  export type InventoryLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }

  export type $InventoryLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryLog"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inventoryId: number
      type: $Enums.InventoryAction
      quantity: number
      timestamp: Date
    }, ExtArgs["result"]["inventoryLog"]>
    composites: {}
  }

  type InventoryLogGetPayload<S extends boolean | null | undefined | InventoryLogDefaultArgs> = $Result.GetResult<Prisma.$InventoryLogPayload, S>

  type InventoryLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryLogCountAggregateInputType | true
    }

  export interface InventoryLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryLog'], meta: { name: 'InventoryLog' } }
    /**
     * Find zero or one InventoryLog that matches the filter.
     * @param {InventoryLogFindUniqueArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryLogFindUniqueArgs>(args: SelectSubset<T, InventoryLogFindUniqueArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryLogFindUniqueOrThrowArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryLogFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindFirstArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryLogFindFirstArgs>(args?: SelectSubset<T, InventoryLogFindFirstArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindFirstOrThrowArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryLogFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryLogs
     * const inventoryLogs = await prisma.inventoryLog.findMany()
     * 
     * // Get first 10 InventoryLogs
     * const inventoryLogs = await prisma.inventoryLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryLogWithIdOnly = await prisma.inventoryLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryLogFindManyArgs>(args?: SelectSubset<T, InventoryLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryLog.
     * @param {InventoryLogCreateArgs} args - Arguments to create a InventoryLog.
     * @example
     * // Create one InventoryLog
     * const InventoryLog = await prisma.inventoryLog.create({
     *   data: {
     *     // ... data to create a InventoryLog
     *   }
     * })
     * 
     */
    create<T extends InventoryLogCreateArgs>(args: SelectSubset<T, InventoryLogCreateArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryLogs.
     * @param {InventoryLogCreateManyArgs} args - Arguments to create many InventoryLogs.
     * @example
     * // Create many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryLogCreateManyArgs>(args?: SelectSubset<T, InventoryLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryLog.
     * @param {InventoryLogDeleteArgs} args - Arguments to delete one InventoryLog.
     * @example
     * // Delete one InventoryLog
     * const InventoryLog = await prisma.inventoryLog.delete({
     *   where: {
     *     // ... filter to delete one InventoryLog
     *   }
     * })
     * 
     */
    delete<T extends InventoryLogDeleteArgs>(args: SelectSubset<T, InventoryLogDeleteArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryLog.
     * @param {InventoryLogUpdateArgs} args - Arguments to update one InventoryLog.
     * @example
     * // Update one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryLogUpdateArgs>(args: SelectSubset<T, InventoryLogUpdateArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryLogs.
     * @param {InventoryLogDeleteManyArgs} args - Arguments to filter InventoryLogs to delete.
     * @example
     * // Delete a few InventoryLogs
     * const { count } = await prisma.inventoryLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryLogDeleteManyArgs>(args?: SelectSubset<T, InventoryLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryLogUpdateManyArgs>(args: SelectSubset<T, InventoryLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryLog.
     * @param {InventoryLogUpsertArgs} args - Arguments to update or create a InventoryLog.
     * @example
     * // Update or create a InventoryLog
     * const inventoryLog = await prisma.inventoryLog.upsert({
     *   create: {
     *     // ... data to create a InventoryLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryLog we want to update
     *   }
     * })
     */
    upsert<T extends InventoryLogUpsertArgs>(args: SelectSubset<T, InventoryLogUpsertArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogCountArgs} args - Arguments to filter InventoryLogs to count.
     * @example
     * // Count the number of InventoryLogs
     * const count = await prisma.inventoryLog.count({
     *   where: {
     *     // ... the filter for the InventoryLogs we want to count
     *   }
     * })
    **/
    count<T extends InventoryLogCountArgs>(
      args?: Subset<T, InventoryLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryLogAggregateArgs>(args: Subset<T, InventoryLogAggregateArgs>): Prisma.PrismaPromise<GetInventoryLogAggregateType<T>>

    /**
     * Group by InventoryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryLogGroupByArgs['orderBy'] }
        : { orderBy?: InventoryLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryLog model
   */
  readonly fields: InventoryLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryLog model
   */
  interface InventoryLogFieldRefs {
    readonly id: FieldRef<"InventoryLog", 'Int'>
    readonly inventoryId: FieldRef<"InventoryLog", 'Int'>
    readonly type: FieldRef<"InventoryLog", 'InventoryAction'>
    readonly quantity: FieldRef<"InventoryLog", 'Int'>
    readonly timestamp: FieldRef<"InventoryLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryLog findUnique
   */
  export type InventoryLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog findUniqueOrThrow
   */
  export type InventoryLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog findFirst
   */
  export type InventoryLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLogs.
     */
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog findFirstOrThrow
   */
  export type InventoryLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLogs.
     */
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog findMany
   */
  export type InventoryLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLogs to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog create
   */
  export type InventoryLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryLog.
     */
    data: XOR<InventoryLogCreateInput, InventoryLogUncheckedCreateInput>
  }

  /**
   * InventoryLog createMany
   */
  export type InventoryLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryLogs.
     */
    data: InventoryLogCreateManyInput | InventoryLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryLog update
   */
  export type InventoryLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryLog.
     */
    data: XOR<InventoryLogUpdateInput, InventoryLogUncheckedUpdateInput>
    /**
     * Choose, which InventoryLog to update.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog updateMany
   */
  export type InventoryLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryLogs.
     */
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyInput>
    /**
     * Filter which InventoryLogs to update
     */
    where?: InventoryLogWhereInput
    /**
     * Limit how many InventoryLogs to update.
     */
    limit?: number
  }

  /**
   * InventoryLog upsert
   */
  export type InventoryLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryLog to update in case it exists.
     */
    where: InventoryLogWhereUniqueInput
    /**
     * In case the InventoryLog found by the `where` argument doesn't exist, create a new InventoryLog with this data.
     */
    create: XOR<InventoryLogCreateInput, InventoryLogUncheckedCreateInput>
    /**
     * In case the InventoryLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryLogUpdateInput, InventoryLogUncheckedUpdateInput>
  }

  /**
   * InventoryLog delete
   */
  export type InventoryLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter which InventoryLog to delete.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog deleteMany
   */
  export type InventoryLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLogs to delete
     */
    where?: InventoryLogWhereInput
    /**
     * Limit how many InventoryLogs to delete.
     */
    limit?: number
  }

  /**
   * InventoryLog without action
   */
  export type InventoryLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
  }


  /**
   * Model MiniBar
   */

  export type AggregateMiniBar = {
    _count: MiniBarCountAggregateOutputType | null
    _avg: MiniBarAvgAggregateOutputType | null
    _sum: MiniBarSumAggregateOutputType | null
    _min: MiniBarMinAggregateOutputType | null
    _max: MiniBarMaxAggregateOutputType | null
  }

  export type MiniBarAvgAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarSumAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarMinAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarMaxAggregateOutputType = {
    id: number | null
    roomNumber: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarCountAggregateOutputType = {
    id: number
    roomNumber: number
    itemId: number
    quantity: number
    _all: number
  }


  export type MiniBarAvgAggregateInputType = {
    id?: true
    roomNumber?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarSumAggregateInputType = {
    id?: true
    roomNumber?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarMinAggregateInputType = {
    id?: true
    roomNumber?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarCountAggregateInputType = {
    id?: true
    roomNumber?: true
    itemId?: true
    quantity?: true
    _all?: true
  }

  export type MiniBarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiniBar to aggregate.
     */
    where?: MiniBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBars to fetch.
     */
    orderBy?: MiniBarOrderByWithRelationInput | MiniBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiniBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MiniBars
    **/
    _count?: true | MiniBarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiniBarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiniBarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiniBarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiniBarMaxAggregateInputType
  }

  export type GetMiniBarAggregateType<T extends MiniBarAggregateArgs> = {
        [P in keyof T & keyof AggregateMiniBar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiniBar[P]>
      : GetScalarType<T[P], AggregateMiniBar[P]>
  }




  export type MiniBarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarWhereInput
    orderBy?: MiniBarOrderByWithAggregationInput | MiniBarOrderByWithAggregationInput[]
    by: MiniBarScalarFieldEnum[] | MiniBarScalarFieldEnum
    having?: MiniBarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiniBarCountAggregateInputType | true
    _avg?: MiniBarAvgAggregateInputType
    _sum?: MiniBarSumAggregateInputType
    _min?: MiniBarMinAggregateInputType
    _max?: MiniBarMaxAggregateInputType
  }

  export type MiniBarGroupByOutputType = {
    id: number
    roomNumber: number
    itemId: number
    quantity: number
    _count: MiniBarCountAggregateOutputType | null
    _avg: MiniBarAvgAggregateOutputType | null
    _sum: MiniBarSumAggregateOutputType | null
    _min: MiniBarMinAggregateOutputType | null
    _max: MiniBarMaxAggregateOutputType | null
  }

  type GetMiniBarGroupByPayload<T extends MiniBarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiniBarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiniBarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiniBarGroupByOutputType[P]>
            : GetScalarType<T[P], MiniBarGroupByOutputType[P]>
        }
      >
    >


  export type MiniBarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    itemId?: boolean
    quantity?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    MiniBarLog?: boolean | MiniBar$MiniBarLogArgs<ExtArgs>
    _count?: boolean | MiniBarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miniBar"]>



  export type MiniBarSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type MiniBarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "itemId" | "quantity", ExtArgs["result"]["miniBar"]>
  export type MiniBarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
    MiniBarLog?: boolean | MiniBar$MiniBarLogArgs<ExtArgs>
    _count?: boolean | MiniBarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MiniBarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MiniBar"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
      MiniBarLog: Prisma.$MiniBarLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: number
      itemId: number
      quantity: number
    }, ExtArgs["result"]["miniBar"]>
    composites: {}
  }

  type MiniBarGetPayload<S extends boolean | null | undefined | MiniBarDefaultArgs> = $Result.GetResult<Prisma.$MiniBarPayload, S>

  type MiniBarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MiniBarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MiniBarCountAggregateInputType | true
    }

  export interface MiniBarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MiniBar'], meta: { name: 'MiniBar' } }
    /**
     * Find zero or one MiniBar that matches the filter.
     * @param {MiniBarFindUniqueArgs} args - Arguments to find a MiniBar
     * @example
     * // Get one MiniBar
     * const miniBar = await prisma.miniBar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MiniBarFindUniqueArgs>(args: SelectSubset<T, MiniBarFindUniqueArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MiniBar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MiniBarFindUniqueOrThrowArgs} args - Arguments to find a MiniBar
     * @example
     * // Get one MiniBar
     * const miniBar = await prisma.miniBar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MiniBarFindUniqueOrThrowArgs>(args: SelectSubset<T, MiniBarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiniBar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarFindFirstArgs} args - Arguments to find a MiniBar
     * @example
     * // Get one MiniBar
     * const miniBar = await prisma.miniBar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MiniBarFindFirstArgs>(args?: SelectSubset<T, MiniBarFindFirstArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiniBar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarFindFirstOrThrowArgs} args - Arguments to find a MiniBar
     * @example
     * // Get one MiniBar
     * const miniBar = await prisma.miniBar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MiniBarFindFirstOrThrowArgs>(args?: SelectSubset<T, MiniBarFindFirstOrThrowArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MiniBars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MiniBars
     * const miniBars = await prisma.miniBar.findMany()
     * 
     * // Get first 10 MiniBars
     * const miniBars = await prisma.miniBar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miniBarWithIdOnly = await prisma.miniBar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MiniBarFindManyArgs>(args?: SelectSubset<T, MiniBarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MiniBar.
     * @param {MiniBarCreateArgs} args - Arguments to create a MiniBar.
     * @example
     * // Create one MiniBar
     * const MiniBar = await prisma.miniBar.create({
     *   data: {
     *     // ... data to create a MiniBar
     *   }
     * })
     * 
     */
    create<T extends MiniBarCreateArgs>(args: SelectSubset<T, MiniBarCreateArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MiniBars.
     * @param {MiniBarCreateManyArgs} args - Arguments to create many MiniBars.
     * @example
     * // Create many MiniBars
     * const miniBar = await prisma.miniBar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MiniBarCreateManyArgs>(args?: SelectSubset<T, MiniBarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MiniBar.
     * @param {MiniBarDeleteArgs} args - Arguments to delete one MiniBar.
     * @example
     * // Delete one MiniBar
     * const MiniBar = await prisma.miniBar.delete({
     *   where: {
     *     // ... filter to delete one MiniBar
     *   }
     * })
     * 
     */
    delete<T extends MiniBarDeleteArgs>(args: SelectSubset<T, MiniBarDeleteArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MiniBar.
     * @param {MiniBarUpdateArgs} args - Arguments to update one MiniBar.
     * @example
     * // Update one MiniBar
     * const miniBar = await prisma.miniBar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MiniBarUpdateArgs>(args: SelectSubset<T, MiniBarUpdateArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MiniBars.
     * @param {MiniBarDeleteManyArgs} args - Arguments to filter MiniBars to delete.
     * @example
     * // Delete a few MiniBars
     * const { count } = await prisma.miniBar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MiniBarDeleteManyArgs>(args?: SelectSubset<T, MiniBarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MiniBars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MiniBars
     * const miniBar = await prisma.miniBar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MiniBarUpdateManyArgs>(args: SelectSubset<T, MiniBarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MiniBar.
     * @param {MiniBarUpsertArgs} args - Arguments to update or create a MiniBar.
     * @example
     * // Update or create a MiniBar
     * const miniBar = await prisma.miniBar.upsert({
     *   create: {
     *     // ... data to create a MiniBar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MiniBar we want to update
     *   }
     * })
     */
    upsert<T extends MiniBarUpsertArgs>(args: SelectSubset<T, MiniBarUpsertArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MiniBars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarCountArgs} args - Arguments to filter MiniBars to count.
     * @example
     * // Count the number of MiniBars
     * const count = await prisma.miniBar.count({
     *   where: {
     *     // ... the filter for the MiniBars we want to count
     *   }
     * })
    **/
    count<T extends MiniBarCountArgs>(
      args?: Subset<T, MiniBarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiniBarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MiniBar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MiniBarAggregateArgs>(args: Subset<T, MiniBarAggregateArgs>): Prisma.PrismaPromise<GetMiniBarAggregateType<T>>

    /**
     * Group by MiniBar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MiniBarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiniBarGroupByArgs['orderBy'] }
        : { orderBy?: MiniBarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MiniBarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiniBarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MiniBar model
   */
  readonly fields: MiniBarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MiniBar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiniBarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MiniBarLog<T extends MiniBar$MiniBarLogArgs<ExtArgs> = {}>(args?: Subset<T, MiniBar$MiniBarLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MiniBar model
   */
  interface MiniBarFieldRefs {
    readonly id: FieldRef<"MiniBar", 'Int'>
    readonly roomNumber: FieldRef<"MiniBar", 'Int'>
    readonly itemId: FieldRef<"MiniBar", 'Int'>
    readonly quantity: FieldRef<"MiniBar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MiniBar findUnique
   */
  export type MiniBarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * Filter, which MiniBar to fetch.
     */
    where: MiniBarWhereUniqueInput
  }

  /**
   * MiniBar findUniqueOrThrow
   */
  export type MiniBarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * Filter, which MiniBar to fetch.
     */
    where: MiniBarWhereUniqueInput
  }

  /**
   * MiniBar findFirst
   */
  export type MiniBarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * Filter, which MiniBar to fetch.
     */
    where?: MiniBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBars to fetch.
     */
    orderBy?: MiniBarOrderByWithRelationInput | MiniBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiniBars.
     */
    cursor?: MiniBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiniBars.
     */
    distinct?: MiniBarScalarFieldEnum | MiniBarScalarFieldEnum[]
  }

  /**
   * MiniBar findFirstOrThrow
   */
  export type MiniBarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * Filter, which MiniBar to fetch.
     */
    where?: MiniBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBars to fetch.
     */
    orderBy?: MiniBarOrderByWithRelationInput | MiniBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiniBars.
     */
    cursor?: MiniBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiniBars.
     */
    distinct?: MiniBarScalarFieldEnum | MiniBarScalarFieldEnum[]
  }

  /**
   * MiniBar findMany
   */
  export type MiniBarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * Filter, which MiniBars to fetch.
     */
    where?: MiniBarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBars to fetch.
     */
    orderBy?: MiniBarOrderByWithRelationInput | MiniBarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MiniBars.
     */
    cursor?: MiniBarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBars.
     */
    skip?: number
    distinct?: MiniBarScalarFieldEnum | MiniBarScalarFieldEnum[]
  }

  /**
   * MiniBar create
   */
  export type MiniBarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * The data needed to create a MiniBar.
     */
    data: XOR<MiniBarCreateInput, MiniBarUncheckedCreateInput>
  }

  /**
   * MiniBar createMany
   */
  export type MiniBarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MiniBars.
     */
    data: MiniBarCreateManyInput | MiniBarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MiniBar update
   */
  export type MiniBarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * The data needed to update a MiniBar.
     */
    data: XOR<MiniBarUpdateInput, MiniBarUncheckedUpdateInput>
    /**
     * Choose, which MiniBar to update.
     */
    where: MiniBarWhereUniqueInput
  }

  /**
   * MiniBar updateMany
   */
  export type MiniBarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MiniBars.
     */
    data: XOR<MiniBarUpdateManyMutationInput, MiniBarUncheckedUpdateManyInput>
    /**
     * Filter which MiniBars to update
     */
    where?: MiniBarWhereInput
    /**
     * Limit how many MiniBars to update.
     */
    limit?: number
  }

  /**
   * MiniBar upsert
   */
  export type MiniBarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * The filter to search for the MiniBar to update in case it exists.
     */
    where: MiniBarWhereUniqueInput
    /**
     * In case the MiniBar found by the `where` argument doesn't exist, create a new MiniBar with this data.
     */
    create: XOR<MiniBarCreateInput, MiniBarUncheckedCreateInput>
    /**
     * In case the MiniBar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiniBarUpdateInput, MiniBarUncheckedUpdateInput>
  }

  /**
   * MiniBar delete
   */
  export type MiniBarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    /**
     * Filter which MiniBar to delete.
     */
    where: MiniBarWhereUniqueInput
  }

  /**
   * MiniBar deleteMany
   */
  export type MiniBarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiniBars to delete
     */
    where?: MiniBarWhereInput
    /**
     * Limit how many MiniBars to delete.
     */
    limit?: number
  }

  /**
   * MiniBar.MiniBarLog
   */
  export type MiniBar$MiniBarLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    where?: MiniBarLogWhereInput
    orderBy?: MiniBarLogOrderByWithRelationInput | MiniBarLogOrderByWithRelationInput[]
    cursor?: MiniBarLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniBarLogScalarFieldEnum | MiniBarLogScalarFieldEnum[]
  }

  /**
   * MiniBar without action
   */
  export type MiniBarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
  }


  /**
   * Model MiniBarLog
   */

  export type AggregateMiniBarLog = {
    _count: MiniBarLogCountAggregateOutputType | null
    _avg: MiniBarLogAvgAggregateOutputType | null
    _sum: MiniBarLogSumAggregateOutputType | null
    _min: MiniBarLogMinAggregateOutputType | null
    _max: MiniBarLogMaxAggregateOutputType | null
  }

  export type MiniBarLogAvgAggregateOutputType = {
    id: number | null
    minibarId: number | null
    quantity: number | null
  }

  export type MiniBarLogSumAggregateOutputType = {
    id: number | null
    minibarId: number | null
    quantity: number | null
  }

  export type MiniBarLogMinAggregateOutputType = {
    id: number | null
    minibarId: number | null
    type: $Enums.InventoryAction | null
    quantity: number | null
    timestamp: Date | null
  }

  export type MiniBarLogMaxAggregateOutputType = {
    id: number | null
    minibarId: number | null
    type: $Enums.InventoryAction | null
    quantity: number | null
    timestamp: Date | null
  }

  export type MiniBarLogCountAggregateOutputType = {
    id: number
    minibarId: number
    type: number
    quantity: number
    timestamp: number
    _all: number
  }


  export type MiniBarLogAvgAggregateInputType = {
    id?: true
    minibarId?: true
    quantity?: true
  }

  export type MiniBarLogSumAggregateInputType = {
    id?: true
    minibarId?: true
    quantity?: true
  }

  export type MiniBarLogMinAggregateInputType = {
    id?: true
    minibarId?: true
    type?: true
    quantity?: true
    timestamp?: true
  }

  export type MiniBarLogMaxAggregateInputType = {
    id?: true
    minibarId?: true
    type?: true
    quantity?: true
    timestamp?: true
  }

  export type MiniBarLogCountAggregateInputType = {
    id?: true
    minibarId?: true
    type?: true
    quantity?: true
    timestamp?: true
    _all?: true
  }

  export type MiniBarLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiniBarLog to aggregate.
     */
    where?: MiniBarLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarLogs to fetch.
     */
    orderBy?: MiniBarLogOrderByWithRelationInput | MiniBarLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiniBarLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MiniBarLogs
    **/
    _count?: true | MiniBarLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiniBarLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiniBarLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiniBarLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiniBarLogMaxAggregateInputType
  }

  export type GetMiniBarLogAggregateType<T extends MiniBarLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMiniBarLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiniBarLog[P]>
      : GetScalarType<T[P], AggregateMiniBarLog[P]>
  }




  export type MiniBarLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarLogWhereInput
    orderBy?: MiniBarLogOrderByWithAggregationInput | MiniBarLogOrderByWithAggregationInput[]
    by: MiniBarLogScalarFieldEnum[] | MiniBarLogScalarFieldEnum
    having?: MiniBarLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiniBarLogCountAggregateInputType | true
    _avg?: MiniBarLogAvgAggregateInputType
    _sum?: MiniBarLogSumAggregateInputType
    _min?: MiniBarLogMinAggregateInputType
    _max?: MiniBarLogMaxAggregateInputType
  }

  export type MiniBarLogGroupByOutputType = {
    id: number
    minibarId: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp: Date
    _count: MiniBarLogCountAggregateOutputType | null
    _avg: MiniBarLogAvgAggregateOutputType | null
    _sum: MiniBarLogSumAggregateOutputType | null
    _min: MiniBarLogMinAggregateOutputType | null
    _max: MiniBarLogMaxAggregateOutputType | null
  }

  type GetMiniBarLogGroupByPayload<T extends MiniBarLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiniBarLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiniBarLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiniBarLogGroupByOutputType[P]>
            : GetScalarType<T[P], MiniBarLogGroupByOutputType[P]>
        }
      >
    >


  export type MiniBarLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minibarId?: boolean
    type?: boolean
    quantity?: boolean
    timestamp?: boolean
    minibar?: boolean | MiniBarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miniBarLog"]>



  export type MiniBarLogSelectScalar = {
    id?: boolean
    minibarId?: boolean
    type?: boolean
    quantity?: boolean
    timestamp?: boolean
  }

  export type MiniBarLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "minibarId" | "type" | "quantity" | "timestamp", ExtArgs["result"]["miniBarLog"]>
  export type MiniBarLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    minibar?: boolean | MiniBarDefaultArgs<ExtArgs>
  }

  export type $MiniBarLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MiniBarLog"
    objects: {
      minibar: Prisma.$MiniBarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      minibarId: number
      type: $Enums.InventoryAction
      quantity: number
      timestamp: Date
    }, ExtArgs["result"]["miniBarLog"]>
    composites: {}
  }

  type MiniBarLogGetPayload<S extends boolean | null | undefined | MiniBarLogDefaultArgs> = $Result.GetResult<Prisma.$MiniBarLogPayload, S>

  type MiniBarLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MiniBarLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MiniBarLogCountAggregateInputType | true
    }

  export interface MiniBarLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MiniBarLog'], meta: { name: 'MiniBarLog' } }
    /**
     * Find zero or one MiniBarLog that matches the filter.
     * @param {MiniBarLogFindUniqueArgs} args - Arguments to find a MiniBarLog
     * @example
     * // Get one MiniBarLog
     * const miniBarLog = await prisma.miniBarLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MiniBarLogFindUniqueArgs>(args: SelectSubset<T, MiniBarLogFindUniqueArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MiniBarLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MiniBarLogFindUniqueOrThrowArgs} args - Arguments to find a MiniBarLog
     * @example
     * // Get one MiniBarLog
     * const miniBarLog = await prisma.miniBarLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MiniBarLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MiniBarLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiniBarLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarLogFindFirstArgs} args - Arguments to find a MiniBarLog
     * @example
     * // Get one MiniBarLog
     * const miniBarLog = await prisma.miniBarLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MiniBarLogFindFirstArgs>(args?: SelectSubset<T, MiniBarLogFindFirstArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiniBarLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarLogFindFirstOrThrowArgs} args - Arguments to find a MiniBarLog
     * @example
     * // Get one MiniBarLog
     * const miniBarLog = await prisma.miniBarLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MiniBarLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MiniBarLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MiniBarLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MiniBarLogs
     * const miniBarLogs = await prisma.miniBarLog.findMany()
     * 
     * // Get first 10 MiniBarLogs
     * const miniBarLogs = await prisma.miniBarLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miniBarLogWithIdOnly = await prisma.miniBarLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MiniBarLogFindManyArgs>(args?: SelectSubset<T, MiniBarLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MiniBarLog.
     * @param {MiniBarLogCreateArgs} args - Arguments to create a MiniBarLog.
     * @example
     * // Create one MiniBarLog
     * const MiniBarLog = await prisma.miniBarLog.create({
     *   data: {
     *     // ... data to create a MiniBarLog
     *   }
     * })
     * 
     */
    create<T extends MiniBarLogCreateArgs>(args: SelectSubset<T, MiniBarLogCreateArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MiniBarLogs.
     * @param {MiniBarLogCreateManyArgs} args - Arguments to create many MiniBarLogs.
     * @example
     * // Create many MiniBarLogs
     * const miniBarLog = await prisma.miniBarLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MiniBarLogCreateManyArgs>(args?: SelectSubset<T, MiniBarLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MiniBarLog.
     * @param {MiniBarLogDeleteArgs} args - Arguments to delete one MiniBarLog.
     * @example
     * // Delete one MiniBarLog
     * const MiniBarLog = await prisma.miniBarLog.delete({
     *   where: {
     *     // ... filter to delete one MiniBarLog
     *   }
     * })
     * 
     */
    delete<T extends MiniBarLogDeleteArgs>(args: SelectSubset<T, MiniBarLogDeleteArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MiniBarLog.
     * @param {MiniBarLogUpdateArgs} args - Arguments to update one MiniBarLog.
     * @example
     * // Update one MiniBarLog
     * const miniBarLog = await prisma.miniBarLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MiniBarLogUpdateArgs>(args: SelectSubset<T, MiniBarLogUpdateArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MiniBarLogs.
     * @param {MiniBarLogDeleteManyArgs} args - Arguments to filter MiniBarLogs to delete.
     * @example
     * // Delete a few MiniBarLogs
     * const { count } = await prisma.miniBarLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MiniBarLogDeleteManyArgs>(args?: SelectSubset<T, MiniBarLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MiniBarLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MiniBarLogs
     * const miniBarLog = await prisma.miniBarLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MiniBarLogUpdateManyArgs>(args: SelectSubset<T, MiniBarLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MiniBarLog.
     * @param {MiniBarLogUpsertArgs} args - Arguments to update or create a MiniBarLog.
     * @example
     * // Update or create a MiniBarLog
     * const miniBarLog = await prisma.miniBarLog.upsert({
     *   create: {
     *     // ... data to create a MiniBarLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MiniBarLog we want to update
     *   }
     * })
     */
    upsert<T extends MiniBarLogUpsertArgs>(args: SelectSubset<T, MiniBarLogUpsertArgs<ExtArgs>>): Prisma__MiniBarLogClient<$Result.GetResult<Prisma.$MiniBarLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MiniBarLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarLogCountArgs} args - Arguments to filter MiniBarLogs to count.
     * @example
     * // Count the number of MiniBarLogs
     * const count = await prisma.miniBarLog.count({
     *   where: {
     *     // ... the filter for the MiniBarLogs we want to count
     *   }
     * })
    **/
    count<T extends MiniBarLogCountArgs>(
      args?: Subset<T, MiniBarLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiniBarLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MiniBarLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MiniBarLogAggregateArgs>(args: Subset<T, MiniBarLogAggregateArgs>): Prisma.PrismaPromise<GetMiniBarLogAggregateType<T>>

    /**
     * Group by MiniBarLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MiniBarLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiniBarLogGroupByArgs['orderBy'] }
        : { orderBy?: MiniBarLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MiniBarLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiniBarLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MiniBarLog model
   */
  readonly fields: MiniBarLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MiniBarLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiniBarLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    minibar<T extends MiniBarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MiniBarDefaultArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MiniBarLog model
   */
  interface MiniBarLogFieldRefs {
    readonly id: FieldRef<"MiniBarLog", 'Int'>
    readonly minibarId: FieldRef<"MiniBarLog", 'Int'>
    readonly type: FieldRef<"MiniBarLog", 'InventoryAction'>
    readonly quantity: FieldRef<"MiniBarLog", 'Int'>
    readonly timestamp: FieldRef<"MiniBarLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MiniBarLog findUnique
   */
  export type MiniBarLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarLog to fetch.
     */
    where: MiniBarLogWhereUniqueInput
  }

  /**
   * MiniBarLog findUniqueOrThrow
   */
  export type MiniBarLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarLog to fetch.
     */
    where: MiniBarLogWhereUniqueInput
  }

  /**
   * MiniBarLog findFirst
   */
  export type MiniBarLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarLog to fetch.
     */
    where?: MiniBarLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarLogs to fetch.
     */
    orderBy?: MiniBarLogOrderByWithRelationInput | MiniBarLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiniBarLogs.
     */
    cursor?: MiniBarLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiniBarLogs.
     */
    distinct?: MiniBarLogScalarFieldEnum | MiniBarLogScalarFieldEnum[]
  }

  /**
   * MiniBarLog findFirstOrThrow
   */
  export type MiniBarLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarLog to fetch.
     */
    where?: MiniBarLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarLogs to fetch.
     */
    orderBy?: MiniBarLogOrderByWithRelationInput | MiniBarLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiniBarLogs.
     */
    cursor?: MiniBarLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiniBarLogs.
     */
    distinct?: MiniBarLogScalarFieldEnum | MiniBarLogScalarFieldEnum[]
  }

  /**
   * MiniBarLog findMany
   */
  export type MiniBarLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarLogs to fetch.
     */
    where?: MiniBarLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarLogs to fetch.
     */
    orderBy?: MiniBarLogOrderByWithRelationInput | MiniBarLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MiniBarLogs.
     */
    cursor?: MiniBarLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarLogs.
     */
    skip?: number
    distinct?: MiniBarLogScalarFieldEnum | MiniBarLogScalarFieldEnum[]
  }

  /**
   * MiniBarLog create
   */
  export type MiniBarLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MiniBarLog.
     */
    data: XOR<MiniBarLogCreateInput, MiniBarLogUncheckedCreateInput>
  }

  /**
   * MiniBarLog createMany
   */
  export type MiniBarLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MiniBarLogs.
     */
    data: MiniBarLogCreateManyInput | MiniBarLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MiniBarLog update
   */
  export type MiniBarLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MiniBarLog.
     */
    data: XOR<MiniBarLogUpdateInput, MiniBarLogUncheckedUpdateInput>
    /**
     * Choose, which MiniBarLog to update.
     */
    where: MiniBarLogWhereUniqueInput
  }

  /**
   * MiniBarLog updateMany
   */
  export type MiniBarLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MiniBarLogs.
     */
    data: XOR<MiniBarLogUpdateManyMutationInput, MiniBarLogUncheckedUpdateManyInput>
    /**
     * Filter which MiniBarLogs to update
     */
    where?: MiniBarLogWhereInput
    /**
     * Limit how many MiniBarLogs to update.
     */
    limit?: number
  }

  /**
   * MiniBarLog upsert
   */
  export type MiniBarLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MiniBarLog to update in case it exists.
     */
    where: MiniBarLogWhereUniqueInput
    /**
     * In case the MiniBarLog found by the `where` argument doesn't exist, create a new MiniBarLog with this data.
     */
    create: XOR<MiniBarLogCreateInput, MiniBarLogUncheckedCreateInput>
    /**
     * In case the MiniBarLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiniBarLogUpdateInput, MiniBarLogUncheckedUpdateInput>
  }

  /**
   * MiniBarLog delete
   */
  export type MiniBarLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
    /**
     * Filter which MiniBarLog to delete.
     */
    where: MiniBarLogWhereUniqueInput
  }

  /**
   * MiniBarLog deleteMany
   */
  export type MiniBarLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiniBarLogs to delete
     */
    where?: MiniBarLogWhereInput
    /**
     * Limit how many MiniBarLogs to delete.
     */
    limit?: number
  }

  /**
   * MiniBarLog without action
   */
  export type MiniBarLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarLog
     */
    select?: MiniBarLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarLog
     */
    omit?: MiniBarLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarLogInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    number: number | null
    statusId: number | null
    roomTypeId: number | null
  }

  export type RoomSumAggregateOutputType = {
    number: number | null
    statusId: number | null
    roomTypeId: number | null
  }

  export type RoomMinAggregateOutputType = {
    number: number | null
    statusId: number | null
    roomTypeId: number | null
  }

  export type RoomMaxAggregateOutputType = {
    number: number | null
    statusId: number | null
    roomTypeId: number | null
  }

  export type RoomCountAggregateOutputType = {
    number: number
    statusId: number
    roomTypeId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    number?: true
    statusId?: true
    roomTypeId?: true
  }

  export type RoomSumAggregateInputType = {
    number?: true
    statusId?: true
    roomTypeId?: true
  }

  export type RoomMinAggregateInputType = {
    number?: true
    statusId?: true
    roomTypeId?: true
  }

  export type RoomMaxAggregateInputType = {
    number?: true
    statusId?: true
    roomTypeId?: true
  }

  export type RoomCountAggregateInputType = {
    number?: true
    statusId?: true
    roomTypeId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    number: number
    statusId: number
    roomTypeId: number
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    statusId?: boolean
    roomTypeId?: boolean
    type?: boolean | RoomTypeDefaultArgs<ExtArgs>
    status?: boolean | RoomStatusDefaultArgs<ExtArgs>
    minibar?: boolean | Room$minibarArgs<ExtArgs>
    history?: boolean | Room$historyArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    number?: boolean
    statusId?: boolean
    roomTypeId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"number" | "statusId" | "roomTypeId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | RoomTypeDefaultArgs<ExtArgs>
    status?: boolean | RoomStatusDefaultArgs<ExtArgs>
    minibar?: boolean | Room$minibarArgs<ExtArgs>
    history?: boolean | Room$historyArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      type: Prisma.$RoomTypePayload<ExtArgs>
      status: Prisma.$RoomStatusPayload<ExtArgs>
      minibar: Prisma.$MiniBarPayload<ExtArgs>[]
      history: Prisma.$RoomLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      number: number
      statusId: number
      roomTypeId: number
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const roomWithNumberOnly = await prisma.room.findMany({ select: { number: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends RoomTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypeDefaultArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends RoomStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomStatusDefaultArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    minibar<T extends Room$minibarArgs<ExtArgs> = {}>(args?: Subset<T, Room$minibarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Room$historyArgs<ExtArgs> = {}>(args?: Subset<T, Room$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly number: FieldRef<"Room", 'Int'>
    readonly statusId: FieldRef<"Room", 'Int'>
    readonly roomTypeId: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.minibar
   */
  export type Room$minibarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBar
     */
    select?: MiniBarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBar
     */
    omit?: MiniBarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarInclude<ExtArgs> | null
    where?: MiniBarWhereInput
    orderBy?: MiniBarOrderByWithRelationInput | MiniBarOrderByWithRelationInput[]
    cursor?: MiniBarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniBarScalarFieldEnum | MiniBarScalarFieldEnum[]
  }

  /**
   * Room.history
   */
  export type Room$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    where?: RoomLogWhereInput
    orderBy?: RoomLogOrderByWithRelationInput | RoomLogOrderByWithRelationInput[]
    cursor?: RoomLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomLogScalarFieldEnum | RoomLogScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomLog
   */

  export type AggregateRoomLog = {
    _count: RoomLogCountAggregateOutputType | null
    _avg: RoomLogAvgAggregateOutputType | null
    _sum: RoomLogSumAggregateOutputType | null
    _min: RoomLogMinAggregateOutputType | null
    _max: RoomLogMaxAggregateOutputType | null
  }

  export type RoomLogAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomLogSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomLogMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    timestamp: Date | null
  }

  export type RoomLogMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    timestamp: Date | null
  }

  export type RoomLogCountAggregateOutputType = {
    id: number
    roomId: number
    timestamp: number
    _all: number
  }


  export type RoomLogAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomLogSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomLogMinAggregateInputType = {
    id?: true
    roomId?: true
    timestamp?: true
  }

  export type RoomLogMaxAggregateInputType = {
    id?: true
    roomId?: true
    timestamp?: true
  }

  export type RoomLogCountAggregateInputType = {
    id?: true
    roomId?: true
    timestamp?: true
    _all?: true
  }

  export type RoomLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomLog to aggregate.
     */
    where?: RoomLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomLogs to fetch.
     */
    orderBy?: RoomLogOrderByWithRelationInput | RoomLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomLogs
    **/
    _count?: true | RoomLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomLogMaxAggregateInputType
  }

  export type GetRoomLogAggregateType<T extends RoomLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomLog[P]>
      : GetScalarType<T[P], AggregateRoomLog[P]>
  }




  export type RoomLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomLogWhereInput
    orderBy?: RoomLogOrderByWithAggregationInput | RoomLogOrderByWithAggregationInput[]
    by: RoomLogScalarFieldEnum[] | RoomLogScalarFieldEnum
    having?: RoomLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomLogCountAggregateInputType | true
    _avg?: RoomLogAvgAggregateInputType
    _sum?: RoomLogSumAggregateInputType
    _min?: RoomLogMinAggregateInputType
    _max?: RoomLogMaxAggregateInputType
  }

  export type RoomLogGroupByOutputType = {
    id: number
    roomId: number
    timestamp: Date
    _count: RoomLogCountAggregateOutputType | null
    _avg: RoomLogAvgAggregateOutputType | null
    _sum: RoomLogSumAggregateOutputType | null
    _min: RoomLogMinAggregateOutputType | null
    _max: RoomLogMaxAggregateOutputType | null
  }

  type GetRoomLogGroupByPayload<T extends RoomLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomLogGroupByOutputType[P]>
            : GetScalarType<T[P], RoomLogGroupByOutputType[P]>
        }
      >
    >


  export type RoomLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    timestamp?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomLog"]>



  export type RoomLogSelectScalar = {
    id?: boolean
    roomId?: boolean
    timestamp?: boolean
  }

  export type RoomLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "timestamp", ExtArgs["result"]["roomLog"]>
  export type RoomLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomLog"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      timestamp: Date
    }, ExtArgs["result"]["roomLog"]>
    composites: {}
  }

  type RoomLogGetPayload<S extends boolean | null | undefined | RoomLogDefaultArgs> = $Result.GetResult<Prisma.$RoomLogPayload, S>

  type RoomLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomLogCountAggregateInputType | true
    }

  export interface RoomLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomLog'], meta: { name: 'RoomLog' } }
    /**
     * Find zero or one RoomLog that matches the filter.
     * @param {RoomLogFindUniqueArgs} args - Arguments to find a RoomLog
     * @example
     * // Get one RoomLog
     * const roomLog = await prisma.roomLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomLogFindUniqueArgs>(args: SelectSubset<T, RoomLogFindUniqueArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomLogFindUniqueOrThrowArgs} args - Arguments to find a RoomLog
     * @example
     * // Get one RoomLog
     * const roomLog = await prisma.roomLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomLogFindFirstArgs} args - Arguments to find a RoomLog
     * @example
     * // Get one RoomLog
     * const roomLog = await prisma.roomLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomLogFindFirstArgs>(args?: SelectSubset<T, RoomLogFindFirstArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomLogFindFirstOrThrowArgs} args - Arguments to find a RoomLog
     * @example
     * // Get one RoomLog
     * const roomLog = await prisma.roomLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomLogs
     * const roomLogs = await prisma.roomLog.findMany()
     * 
     * // Get first 10 RoomLogs
     * const roomLogs = await prisma.roomLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomLogWithIdOnly = await prisma.roomLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomLogFindManyArgs>(args?: SelectSubset<T, RoomLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomLog.
     * @param {RoomLogCreateArgs} args - Arguments to create a RoomLog.
     * @example
     * // Create one RoomLog
     * const RoomLog = await prisma.roomLog.create({
     *   data: {
     *     // ... data to create a RoomLog
     *   }
     * })
     * 
     */
    create<T extends RoomLogCreateArgs>(args: SelectSubset<T, RoomLogCreateArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomLogs.
     * @param {RoomLogCreateManyArgs} args - Arguments to create many RoomLogs.
     * @example
     * // Create many RoomLogs
     * const roomLog = await prisma.roomLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomLogCreateManyArgs>(args?: SelectSubset<T, RoomLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomLog.
     * @param {RoomLogDeleteArgs} args - Arguments to delete one RoomLog.
     * @example
     * // Delete one RoomLog
     * const RoomLog = await prisma.roomLog.delete({
     *   where: {
     *     // ... filter to delete one RoomLog
     *   }
     * })
     * 
     */
    delete<T extends RoomLogDeleteArgs>(args: SelectSubset<T, RoomLogDeleteArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomLog.
     * @param {RoomLogUpdateArgs} args - Arguments to update one RoomLog.
     * @example
     * // Update one RoomLog
     * const roomLog = await prisma.roomLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomLogUpdateArgs>(args: SelectSubset<T, RoomLogUpdateArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomLogs.
     * @param {RoomLogDeleteManyArgs} args - Arguments to filter RoomLogs to delete.
     * @example
     * // Delete a few RoomLogs
     * const { count } = await prisma.roomLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomLogDeleteManyArgs>(args?: SelectSubset<T, RoomLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomLogs
     * const roomLog = await prisma.roomLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomLogUpdateManyArgs>(args: SelectSubset<T, RoomLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomLog.
     * @param {RoomLogUpsertArgs} args - Arguments to update or create a RoomLog.
     * @example
     * // Update or create a RoomLog
     * const roomLog = await prisma.roomLog.upsert({
     *   create: {
     *     // ... data to create a RoomLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomLog we want to update
     *   }
     * })
     */
    upsert<T extends RoomLogUpsertArgs>(args: SelectSubset<T, RoomLogUpsertArgs<ExtArgs>>): Prisma__RoomLogClient<$Result.GetResult<Prisma.$RoomLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomLogCountArgs} args - Arguments to filter RoomLogs to count.
     * @example
     * // Count the number of RoomLogs
     * const count = await prisma.roomLog.count({
     *   where: {
     *     // ... the filter for the RoomLogs we want to count
     *   }
     * })
    **/
    count<T extends RoomLogCountArgs>(
      args?: Subset<T, RoomLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomLogAggregateArgs>(args: Subset<T, RoomLogAggregateArgs>): Prisma.PrismaPromise<GetRoomLogAggregateType<T>>

    /**
     * Group by RoomLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomLogGroupByArgs['orderBy'] }
        : { orderBy?: RoomLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomLog model
   */
  readonly fields: RoomLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomLog model
   */
  interface RoomLogFieldRefs {
    readonly id: FieldRef<"RoomLog", 'Int'>
    readonly roomId: FieldRef<"RoomLog", 'Int'>
    readonly timestamp: FieldRef<"RoomLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomLog findUnique
   */
  export type RoomLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * Filter, which RoomLog to fetch.
     */
    where: RoomLogWhereUniqueInput
  }

  /**
   * RoomLog findUniqueOrThrow
   */
  export type RoomLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * Filter, which RoomLog to fetch.
     */
    where: RoomLogWhereUniqueInput
  }

  /**
   * RoomLog findFirst
   */
  export type RoomLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * Filter, which RoomLog to fetch.
     */
    where?: RoomLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomLogs to fetch.
     */
    orderBy?: RoomLogOrderByWithRelationInput | RoomLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomLogs.
     */
    cursor?: RoomLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomLogs.
     */
    distinct?: RoomLogScalarFieldEnum | RoomLogScalarFieldEnum[]
  }

  /**
   * RoomLog findFirstOrThrow
   */
  export type RoomLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * Filter, which RoomLog to fetch.
     */
    where?: RoomLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomLogs to fetch.
     */
    orderBy?: RoomLogOrderByWithRelationInput | RoomLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomLogs.
     */
    cursor?: RoomLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomLogs.
     */
    distinct?: RoomLogScalarFieldEnum | RoomLogScalarFieldEnum[]
  }

  /**
   * RoomLog findMany
   */
  export type RoomLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * Filter, which RoomLogs to fetch.
     */
    where?: RoomLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomLogs to fetch.
     */
    orderBy?: RoomLogOrderByWithRelationInput | RoomLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomLogs.
     */
    cursor?: RoomLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomLogs.
     */
    skip?: number
    distinct?: RoomLogScalarFieldEnum | RoomLogScalarFieldEnum[]
  }

  /**
   * RoomLog create
   */
  export type RoomLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomLog.
     */
    data: XOR<RoomLogCreateInput, RoomLogUncheckedCreateInput>
  }

  /**
   * RoomLog createMany
   */
  export type RoomLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomLogs.
     */
    data: RoomLogCreateManyInput | RoomLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomLog update
   */
  export type RoomLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomLog.
     */
    data: XOR<RoomLogUpdateInput, RoomLogUncheckedUpdateInput>
    /**
     * Choose, which RoomLog to update.
     */
    where: RoomLogWhereUniqueInput
  }

  /**
   * RoomLog updateMany
   */
  export type RoomLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomLogs.
     */
    data: XOR<RoomLogUpdateManyMutationInput, RoomLogUncheckedUpdateManyInput>
    /**
     * Filter which RoomLogs to update
     */
    where?: RoomLogWhereInput
    /**
     * Limit how many RoomLogs to update.
     */
    limit?: number
  }

  /**
   * RoomLog upsert
   */
  export type RoomLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomLog to update in case it exists.
     */
    where: RoomLogWhereUniqueInput
    /**
     * In case the RoomLog found by the `where` argument doesn't exist, create a new RoomLog with this data.
     */
    create: XOR<RoomLogCreateInput, RoomLogUncheckedCreateInput>
    /**
     * In case the RoomLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomLogUpdateInput, RoomLogUncheckedUpdateInput>
  }

  /**
   * RoomLog delete
   */
  export type RoomLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
    /**
     * Filter which RoomLog to delete.
     */
    where: RoomLogWhereUniqueInput
  }

  /**
   * RoomLog deleteMany
   */
  export type RoomLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomLogs to delete
     */
    where?: RoomLogWhereInput
    /**
     * Limit how many RoomLogs to delete.
     */
    limit?: number
  }

  /**
   * RoomLog without action
   */
  export type RoomLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomLog
     */
    select?: RoomLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomLog
     */
    omit?: RoomLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomLogInclude<ExtArgs> | null
  }


  /**
   * Model RoomStatus
   */

  export type AggregateRoomStatus = {
    _count: RoomStatusCountAggregateOutputType | null
    _avg: RoomStatusAvgAggregateOutputType | null
    _sum: RoomStatusSumAggregateOutputType | null
    _min: RoomStatusMinAggregateOutputType | null
    _max: RoomStatusMaxAggregateOutputType | null
  }

  export type RoomStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type RoomStatusSumAggregateOutputType = {
    id: number | null
  }

  export type RoomStatusMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoomStatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoomStatusCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoomStatusAvgAggregateInputType = {
    id?: true
  }

  export type RoomStatusSumAggregateInputType = {
    id?: true
  }

  export type RoomStatusMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoomStatusMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoomStatusCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoomStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomStatus to aggregate.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomStatuses
    **/
    _count?: true | RoomStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomStatusMaxAggregateInputType
  }

  export type GetRoomStatusAggregateType<T extends RoomStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomStatus[P]>
      : GetScalarType<T[P], AggregateRoomStatus[P]>
  }




  export type RoomStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomStatusWhereInput
    orderBy?: RoomStatusOrderByWithAggregationInput | RoomStatusOrderByWithAggregationInput[]
    by: RoomStatusScalarFieldEnum[] | RoomStatusScalarFieldEnum
    having?: RoomStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomStatusCountAggregateInputType | true
    _avg?: RoomStatusAvgAggregateInputType
    _sum?: RoomStatusSumAggregateInputType
    _min?: RoomStatusMinAggregateInputType
    _max?: RoomStatusMaxAggregateInputType
  }

  export type RoomStatusGroupByOutputType = {
    id: number
    name: string
    _count: RoomStatusCountAggregateOutputType | null
    _avg: RoomStatusAvgAggregateOutputType | null
    _sum: RoomStatusSumAggregateOutputType | null
    _min: RoomStatusMinAggregateOutputType | null
    _max: RoomStatusMaxAggregateOutputType | null
  }

  type GetRoomStatusGroupByPayload<T extends RoomStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomStatusGroupByOutputType[P]>
            : GetScalarType<T[P], RoomStatusGroupByOutputType[P]>
        }
      >
    >


  export type RoomStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rooms?: boolean | RoomStatus$roomsArgs<ExtArgs>
    _count?: boolean | RoomStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomStatus"]>



  export type RoomStatusSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoomStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["roomStatus"]>
  export type RoomStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomStatus$roomsArgs<ExtArgs>
    _count?: boolean | RoomStatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomStatus"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["roomStatus"]>
    composites: {}
  }

  type RoomStatusGetPayload<S extends boolean | null | undefined | RoomStatusDefaultArgs> = $Result.GetResult<Prisma.$RoomStatusPayload, S>

  type RoomStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomStatusCountAggregateInputType | true
    }

  export interface RoomStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomStatus'], meta: { name: 'RoomStatus' } }
    /**
     * Find zero or one RoomStatus that matches the filter.
     * @param {RoomStatusFindUniqueArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomStatusFindUniqueArgs>(args: SelectSubset<T, RoomStatusFindUniqueArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomStatusFindUniqueOrThrowArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusFindFirstArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomStatusFindFirstArgs>(args?: SelectSubset<T, RoomStatusFindFirstArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusFindFirstOrThrowArgs} args - Arguments to find a RoomStatus
     * @example
     * // Get one RoomStatus
     * const roomStatus = await prisma.roomStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomStatuses
     * const roomStatuses = await prisma.roomStatus.findMany()
     * 
     * // Get first 10 RoomStatuses
     * const roomStatuses = await prisma.roomStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomStatusWithIdOnly = await prisma.roomStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomStatusFindManyArgs>(args?: SelectSubset<T, RoomStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomStatus.
     * @param {RoomStatusCreateArgs} args - Arguments to create a RoomStatus.
     * @example
     * // Create one RoomStatus
     * const RoomStatus = await prisma.roomStatus.create({
     *   data: {
     *     // ... data to create a RoomStatus
     *   }
     * })
     * 
     */
    create<T extends RoomStatusCreateArgs>(args: SelectSubset<T, RoomStatusCreateArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomStatuses.
     * @param {RoomStatusCreateManyArgs} args - Arguments to create many RoomStatuses.
     * @example
     * // Create many RoomStatuses
     * const roomStatus = await prisma.roomStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomStatusCreateManyArgs>(args?: SelectSubset<T, RoomStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomStatus.
     * @param {RoomStatusDeleteArgs} args - Arguments to delete one RoomStatus.
     * @example
     * // Delete one RoomStatus
     * const RoomStatus = await prisma.roomStatus.delete({
     *   where: {
     *     // ... filter to delete one RoomStatus
     *   }
     * })
     * 
     */
    delete<T extends RoomStatusDeleteArgs>(args: SelectSubset<T, RoomStatusDeleteArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomStatus.
     * @param {RoomStatusUpdateArgs} args - Arguments to update one RoomStatus.
     * @example
     * // Update one RoomStatus
     * const roomStatus = await prisma.roomStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomStatusUpdateArgs>(args: SelectSubset<T, RoomStatusUpdateArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomStatuses.
     * @param {RoomStatusDeleteManyArgs} args - Arguments to filter RoomStatuses to delete.
     * @example
     * // Delete a few RoomStatuses
     * const { count } = await prisma.roomStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomStatusDeleteManyArgs>(args?: SelectSubset<T, RoomStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomStatuses
     * const roomStatus = await prisma.roomStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomStatusUpdateManyArgs>(args: SelectSubset<T, RoomStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomStatus.
     * @param {RoomStatusUpsertArgs} args - Arguments to update or create a RoomStatus.
     * @example
     * // Update or create a RoomStatus
     * const roomStatus = await prisma.roomStatus.upsert({
     *   create: {
     *     // ... data to create a RoomStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomStatus we want to update
     *   }
     * })
     */
    upsert<T extends RoomStatusUpsertArgs>(args: SelectSubset<T, RoomStatusUpsertArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusCountArgs} args - Arguments to filter RoomStatuses to count.
     * @example
     * // Count the number of RoomStatuses
     * const count = await prisma.roomStatus.count({
     *   where: {
     *     // ... the filter for the RoomStatuses we want to count
     *   }
     * })
    **/
    count<T extends RoomStatusCountArgs>(
      args?: Subset<T, RoomStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomStatusAggregateArgs>(args: Subset<T, RoomStatusAggregateArgs>): Prisma.PrismaPromise<GetRoomStatusAggregateType<T>>

    /**
     * Group by RoomStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomStatusGroupByArgs['orderBy'] }
        : { orderBy?: RoomStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomStatus model
   */
  readonly fields: RoomStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends RoomStatus$roomsArgs<ExtArgs> = {}>(args?: Subset<T, RoomStatus$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomStatus model
   */
  interface RoomStatusFieldRefs {
    readonly id: FieldRef<"RoomStatus", 'Int'>
    readonly name: FieldRef<"RoomStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomStatus findUnique
   */
  export type RoomStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus findUniqueOrThrow
   */
  export type RoomStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus findFirst
   */
  export type RoomStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomStatuses.
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomStatuses.
     */
    distinct?: RoomStatusScalarFieldEnum | RoomStatusScalarFieldEnum[]
  }

  /**
   * RoomStatus findFirstOrThrow
   */
  export type RoomStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatus to fetch.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomStatuses.
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomStatuses.
     */
    distinct?: RoomStatusScalarFieldEnum | RoomStatusScalarFieldEnum[]
  }

  /**
   * RoomStatus findMany
   */
  export type RoomStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter, which RoomStatuses to fetch.
     */
    where?: RoomStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomStatuses to fetch.
     */
    orderBy?: RoomStatusOrderByWithRelationInput | RoomStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomStatuses.
     */
    cursor?: RoomStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomStatuses.
     */
    skip?: number
    distinct?: RoomStatusScalarFieldEnum | RoomStatusScalarFieldEnum[]
  }

  /**
   * RoomStatus create
   */
  export type RoomStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomStatus.
     */
    data: XOR<RoomStatusCreateInput, RoomStatusUncheckedCreateInput>
  }

  /**
   * RoomStatus createMany
   */
  export type RoomStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomStatuses.
     */
    data: RoomStatusCreateManyInput | RoomStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomStatus update
   */
  export type RoomStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomStatus.
     */
    data: XOR<RoomStatusUpdateInput, RoomStatusUncheckedUpdateInput>
    /**
     * Choose, which RoomStatus to update.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus updateMany
   */
  export type RoomStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomStatuses.
     */
    data: XOR<RoomStatusUpdateManyMutationInput, RoomStatusUncheckedUpdateManyInput>
    /**
     * Filter which RoomStatuses to update
     */
    where?: RoomStatusWhereInput
    /**
     * Limit how many RoomStatuses to update.
     */
    limit?: number
  }

  /**
   * RoomStatus upsert
   */
  export type RoomStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomStatus to update in case it exists.
     */
    where: RoomStatusWhereUniqueInput
    /**
     * In case the RoomStatus found by the `where` argument doesn't exist, create a new RoomStatus with this data.
     */
    create: XOR<RoomStatusCreateInput, RoomStatusUncheckedCreateInput>
    /**
     * In case the RoomStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomStatusUpdateInput, RoomStatusUncheckedUpdateInput>
  }

  /**
   * RoomStatus delete
   */
  export type RoomStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
    /**
     * Filter which RoomStatus to delete.
     */
    where: RoomStatusWhereUniqueInput
  }

  /**
   * RoomStatus deleteMany
   */
  export type RoomStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomStatuses to delete
     */
    where?: RoomStatusWhereInput
    /**
     * Limit how many RoomStatuses to delete.
     */
    limit?: number
  }

  /**
   * RoomStatus.rooms
   */
  export type RoomStatus$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * RoomStatus without action
   */
  export type RoomStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomStatus
     */
    select?: RoomStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomStatus
     */
    omit?: RoomStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomStatusInclude<ExtArgs> | null
  }


  /**
   * Model RoomType
   */

  export type AggregateRoomType = {
    _count: RoomTypeCountAggregateOutputType | null
    _avg: RoomTypeAvgAggregateOutputType | null
    _sum: RoomTypeSumAggregateOutputType | null
    _min: RoomTypeMinAggregateOutputType | null
    _max: RoomTypeMaxAggregateOutputType | null
  }

  export type RoomTypeAvgAggregateOutputType = {
    id: number | null
    price: number | null
    pax: number | null
  }

  export type RoomTypeSumAggregateOutputType = {
    id: number | null
    price: number | null
    pax: number | null
  }

  export type RoomTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    pax: number | null
  }

  export type RoomTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    pax: number | null
  }

  export type RoomTypeCountAggregateOutputType = {
    id: number
    name: number
    price: number
    pax: number
    _all: number
  }


  export type RoomTypeAvgAggregateInputType = {
    id?: true
    price?: true
    pax?: true
  }

  export type RoomTypeSumAggregateInputType = {
    id?: true
    price?: true
    pax?: true
  }

  export type RoomTypeMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    pax?: true
  }

  export type RoomTypeMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    pax?: true
  }

  export type RoomTypeCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    pax?: true
    _all?: true
  }

  export type RoomTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomType to aggregate.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTypes
    **/
    _count?: true | RoomTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTypeMaxAggregateInputType
  }

  export type GetRoomTypeAggregateType<T extends RoomTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomType[P]>
      : GetScalarType<T[P], AggregateRoomType[P]>
  }




  export type RoomTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeWhereInput
    orderBy?: RoomTypeOrderByWithAggregationInput | RoomTypeOrderByWithAggregationInput[]
    by: RoomTypeScalarFieldEnum[] | RoomTypeScalarFieldEnum
    having?: RoomTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTypeCountAggregateInputType | true
    _avg?: RoomTypeAvgAggregateInputType
    _sum?: RoomTypeSumAggregateInputType
    _min?: RoomTypeMinAggregateInputType
    _max?: RoomTypeMaxAggregateInputType
  }

  export type RoomTypeGroupByOutputType = {
    id: number
    name: string
    price: number
    pax: number
    _count: RoomTypeCountAggregateOutputType | null
    _avg: RoomTypeAvgAggregateOutputType | null
    _sum: RoomTypeSumAggregateOutputType | null
    _min: RoomTypeMinAggregateOutputType | null
    _max: RoomTypeMaxAggregateOutputType | null
  }

  type GetRoomTypeGroupByPayload<T extends RoomTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTypeGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTypeGroupByOutputType[P]>
        }
      >
    >


  export type RoomTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    pax?: boolean
    Room?: boolean | RoomType$RoomArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>



  export type RoomTypeSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    pax?: boolean
  }

  export type RoomTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "pax", ExtArgs["result"]["roomType"]>
  export type RoomTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Room?: boolean | RoomType$RoomArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomType"
    objects: {
      Room: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      pax: number
    }, ExtArgs["result"]["roomType"]>
    composites: {}
  }

  type RoomTypeGetPayload<S extends boolean | null | undefined | RoomTypeDefaultArgs> = $Result.GetResult<Prisma.$RoomTypePayload, S>

  type RoomTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTypeCountAggregateInputType | true
    }

  export interface RoomTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomType'], meta: { name: 'RoomType' } }
    /**
     * Find zero or one RoomType that matches the filter.
     * @param {RoomTypeFindUniqueArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTypeFindUniqueArgs>(args: SelectSubset<T, RoomTypeFindUniqueArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTypeFindUniqueOrThrowArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindFirstArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTypeFindFirstArgs>(args?: SelectSubset<T, RoomTypeFindFirstArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindFirstOrThrowArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTypes
     * const roomTypes = await prisma.roomType.findMany()
     * 
     * // Get first 10 RoomTypes
     * const roomTypes = await prisma.roomType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTypeWithIdOnly = await prisma.roomType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTypeFindManyArgs>(args?: SelectSubset<T, RoomTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomType.
     * @param {RoomTypeCreateArgs} args - Arguments to create a RoomType.
     * @example
     * // Create one RoomType
     * const RoomType = await prisma.roomType.create({
     *   data: {
     *     // ... data to create a RoomType
     *   }
     * })
     * 
     */
    create<T extends RoomTypeCreateArgs>(args: SelectSubset<T, RoomTypeCreateArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomTypes.
     * @param {RoomTypeCreateManyArgs} args - Arguments to create many RoomTypes.
     * @example
     * // Create many RoomTypes
     * const roomType = await prisma.roomType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTypeCreateManyArgs>(args?: SelectSubset<T, RoomTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomType.
     * @param {RoomTypeDeleteArgs} args - Arguments to delete one RoomType.
     * @example
     * // Delete one RoomType
     * const RoomType = await prisma.roomType.delete({
     *   where: {
     *     // ... filter to delete one RoomType
     *   }
     * })
     * 
     */
    delete<T extends RoomTypeDeleteArgs>(args: SelectSubset<T, RoomTypeDeleteArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomType.
     * @param {RoomTypeUpdateArgs} args - Arguments to update one RoomType.
     * @example
     * // Update one RoomType
     * const roomType = await prisma.roomType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTypeUpdateArgs>(args: SelectSubset<T, RoomTypeUpdateArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomTypes.
     * @param {RoomTypeDeleteManyArgs} args - Arguments to filter RoomTypes to delete.
     * @example
     * // Delete a few RoomTypes
     * const { count } = await prisma.roomType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTypeDeleteManyArgs>(args?: SelectSubset<T, RoomTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTypes
     * const roomType = await prisma.roomType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTypeUpdateManyArgs>(args: SelectSubset<T, RoomTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomType.
     * @param {RoomTypeUpsertArgs} args - Arguments to update or create a RoomType.
     * @example
     * // Update or create a RoomType
     * const roomType = await prisma.roomType.upsert({
     *   create: {
     *     // ... data to create a RoomType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomType we want to update
     *   }
     * })
     */
    upsert<T extends RoomTypeUpsertArgs>(args: SelectSubset<T, RoomTypeUpsertArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeCountArgs} args - Arguments to filter RoomTypes to count.
     * @example
     * // Count the number of RoomTypes
     * const count = await prisma.roomType.count({
     *   where: {
     *     // ... the filter for the RoomTypes we want to count
     *   }
     * })
    **/
    count<T extends RoomTypeCountArgs>(
      args?: Subset<T, RoomTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomTypeAggregateArgs>(args: Subset<T, RoomTypeAggregateArgs>): Prisma.PrismaPromise<GetRoomTypeAggregateType<T>>

    /**
     * Group by RoomType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTypeGroupByArgs['orderBy'] }
        : { orderBy?: RoomTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomType model
   */
  readonly fields: RoomTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Room<T extends RoomType$RoomArgs<ExtArgs> = {}>(args?: Subset<T, RoomType$RoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomType model
   */
  interface RoomTypeFieldRefs {
    readonly id: FieldRef<"RoomType", 'Int'>
    readonly name: FieldRef<"RoomType", 'String'>
    readonly price: FieldRef<"RoomType", 'Float'>
    readonly pax: FieldRef<"RoomType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoomType findUnique
   */
  export type RoomTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType findUniqueOrThrow
   */
  export type RoomTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType findFirst
   */
  export type RoomTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType findFirstOrThrow
   */
  export type RoomTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType findMany
   */
  export type RoomTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType create
   */
  export type RoomTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomType.
     */
    data: XOR<RoomTypeCreateInput, RoomTypeUncheckedCreateInput>
  }

  /**
   * RoomType createMany
   */
  export type RoomTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTypes.
     */
    data: RoomTypeCreateManyInput | RoomTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomType update
   */
  export type RoomTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomType.
     */
    data: XOR<RoomTypeUpdateInput, RoomTypeUncheckedUpdateInput>
    /**
     * Choose, which RoomType to update.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType updateMany
   */
  export type RoomTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTypes.
     */
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypes to update
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to update.
     */
    limit?: number
  }

  /**
   * RoomType upsert
   */
  export type RoomTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomType to update in case it exists.
     */
    where: RoomTypeWhereUniqueInput
    /**
     * In case the RoomType found by the `where` argument doesn't exist, create a new RoomType with this data.
     */
    create: XOR<RoomTypeCreateInput, RoomTypeUncheckedCreateInput>
    /**
     * In case the RoomType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTypeUpdateInput, RoomTypeUncheckedUpdateInput>
  }

  /**
   * RoomType delete
   */
  export type RoomTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter which RoomType to delete.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType deleteMany
   */
  export type RoomTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTypes to delete
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to delete.
     */
    limit?: number
  }

  /**
   * RoomType.Room
   */
  export type RoomType$RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * RoomType without action
   */
  export type RoomTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryLogScalarFieldEnum: {
    id: 'id',
    inventoryId: 'inventoryId',
    type: 'type',
    quantity: 'quantity',
    timestamp: 'timestamp'
  };

  export type InventoryLogScalarFieldEnum = (typeof InventoryLogScalarFieldEnum)[keyof typeof InventoryLogScalarFieldEnum]


  export const MiniBarScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type MiniBarScalarFieldEnum = (typeof MiniBarScalarFieldEnum)[keyof typeof MiniBarScalarFieldEnum]


  export const MiniBarLogScalarFieldEnum: {
    id: 'id',
    minibarId: 'minibarId',
    type: 'type',
    quantity: 'quantity',
    timestamp: 'timestamp'
  };

  export type MiniBarLogScalarFieldEnum = (typeof MiniBarLogScalarFieldEnum)[keyof typeof MiniBarLogScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    number: 'number',
    statusId: 'statusId',
    roomTypeId: 'roomTypeId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomLogScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    timestamp: 'timestamp'
  };

  export type RoomLogScalarFieldEnum = (typeof RoomLogScalarFieldEnum)[keyof typeof RoomLogScalarFieldEnum]


  export const RoomStatusScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoomStatusScalarFieldEnum = (typeof RoomStatusScalarFieldEnum)[keyof typeof RoomStatusScalarFieldEnum]


  export const RoomTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    pax: 'pax'
  };

  export type RoomTypeScalarFieldEnum = (typeof RoomTypeScalarFieldEnum)[keyof typeof RoomTypeScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ItemOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ItemOrderByRelevanceFieldEnum = (typeof ItemOrderByRelevanceFieldEnum)[keyof typeof ItemOrderByRelevanceFieldEnum]


  export const RoomStatusOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RoomStatusOrderByRelevanceFieldEnum = (typeof RoomStatusOrderByRelevanceFieldEnum)[keyof typeof RoomStatusOrderByRelevanceFieldEnum]


  export const RoomTypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RoomTypeOrderByRelevanceFieldEnum = (typeof RoomTypeOrderByRelevanceFieldEnum)[keyof typeof RoomTypeOrderByRelevanceFieldEnum]


  export const AdminOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'InventoryAction'
   */
  export type EnumInventoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryAction'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    price?: FloatFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    minibar?: MiniBarListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
    minibar?: MiniBarOrderByRelationAggregateInput
    _relevance?: ItemOrderByRelevanceInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    price?: FloatFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    minibar?: MiniBarListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    price?: FloatWithAggregatesFilter<"Item"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: IntFilter<"Inventory"> | number
    itemId?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    history?: InventoryLogListRelationFilter
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    item?: ItemOrderByWithRelationInput
    history?: InventoryLogOrderByRelationAggregateInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    itemId?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    quantity?: IntFilter<"Inventory"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    history?: InventoryLogListRelationFilter
  }, "id" | "itemId">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inventory"> | number
    itemId?: IntWithAggregatesFilter<"Inventory"> | number
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
  }

  export type InventoryLogWhereInput = {
    AND?: InventoryLogWhereInput | InventoryLogWhereInput[]
    OR?: InventoryLogWhereInput[]
    NOT?: InventoryLogWhereInput | InventoryLogWhereInput[]
    id?: IntFilter<"InventoryLog"> | number
    inventoryId?: IntFilter<"InventoryLog"> | number
    type?: EnumInventoryActionFilter<"InventoryLog"> | $Enums.InventoryAction
    quantity?: IntFilter<"InventoryLog"> | number
    timestamp?: DateTimeFilter<"InventoryLog"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }

  export type InventoryLogOrderByWithRelationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
  }

  export type InventoryLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryLogWhereInput | InventoryLogWhereInput[]
    OR?: InventoryLogWhereInput[]
    NOT?: InventoryLogWhereInput | InventoryLogWhereInput[]
    inventoryId?: IntFilter<"InventoryLog"> | number
    type?: EnumInventoryActionFilter<"InventoryLog"> | $Enums.InventoryAction
    quantity?: IntFilter<"InventoryLog"> | number
    timestamp?: DateTimeFilter<"InventoryLog"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }, "id">

  export type InventoryLogOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
    _count?: InventoryLogCountOrderByAggregateInput
    _avg?: InventoryLogAvgOrderByAggregateInput
    _max?: InventoryLogMaxOrderByAggregateInput
    _min?: InventoryLogMinOrderByAggregateInput
    _sum?: InventoryLogSumOrderByAggregateInput
  }

  export type InventoryLogScalarWhereWithAggregatesInput = {
    AND?: InventoryLogScalarWhereWithAggregatesInput | InventoryLogScalarWhereWithAggregatesInput[]
    OR?: InventoryLogScalarWhereWithAggregatesInput[]
    NOT?: InventoryLogScalarWhereWithAggregatesInput | InventoryLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryLog"> | number
    inventoryId?: IntWithAggregatesFilter<"InventoryLog"> | number
    type?: EnumInventoryActionWithAggregatesFilter<"InventoryLog"> | $Enums.InventoryAction
    quantity?: IntWithAggregatesFilter<"InventoryLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"InventoryLog"> | Date | string
  }

  export type MiniBarWhereInput = {
    AND?: MiniBarWhereInput | MiniBarWhereInput[]
    OR?: MiniBarWhereInput[]
    NOT?: MiniBarWhereInput | MiniBarWhereInput[]
    id?: IntFilter<"MiniBar"> | number
    roomNumber?: IntFilter<"MiniBar"> | number
    itemId?: IntFilter<"MiniBar"> | number
    quantity?: IntFilter<"MiniBar"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    MiniBarLog?: MiniBarLogListRelationFilter
  }

  export type MiniBarOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    room?: RoomOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
    MiniBarLog?: MiniBarLogOrderByRelationAggregateInput
  }

  export type MiniBarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomNumber_itemId?: MiniBarRoomNumberItemIdCompoundUniqueInput
    AND?: MiniBarWhereInput | MiniBarWhereInput[]
    OR?: MiniBarWhereInput[]
    NOT?: MiniBarWhereInput | MiniBarWhereInput[]
    roomNumber?: IntFilter<"MiniBar"> | number
    itemId?: IntFilter<"MiniBar"> | number
    quantity?: IntFilter<"MiniBar"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    MiniBarLog?: MiniBarLogListRelationFilter
  }, "id" | "roomNumber_itemId">

  export type MiniBarOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    _count?: MiniBarCountOrderByAggregateInput
    _avg?: MiniBarAvgOrderByAggregateInput
    _max?: MiniBarMaxOrderByAggregateInput
    _min?: MiniBarMinOrderByAggregateInput
    _sum?: MiniBarSumOrderByAggregateInput
  }

  export type MiniBarScalarWhereWithAggregatesInput = {
    AND?: MiniBarScalarWhereWithAggregatesInput | MiniBarScalarWhereWithAggregatesInput[]
    OR?: MiniBarScalarWhereWithAggregatesInput[]
    NOT?: MiniBarScalarWhereWithAggregatesInput | MiniBarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MiniBar"> | number
    roomNumber?: IntWithAggregatesFilter<"MiniBar"> | number
    itemId?: IntWithAggregatesFilter<"MiniBar"> | number
    quantity?: IntWithAggregatesFilter<"MiniBar"> | number
  }

  export type MiniBarLogWhereInput = {
    AND?: MiniBarLogWhereInput | MiniBarLogWhereInput[]
    OR?: MiniBarLogWhereInput[]
    NOT?: MiniBarLogWhereInput | MiniBarLogWhereInput[]
    id?: IntFilter<"MiniBarLog"> | number
    minibarId?: IntFilter<"MiniBarLog"> | number
    type?: EnumInventoryActionFilter<"MiniBarLog"> | $Enums.InventoryAction
    quantity?: IntFilter<"MiniBarLog"> | number
    timestamp?: DateTimeFilter<"MiniBarLog"> | Date | string
    minibar?: XOR<MiniBarScalarRelationFilter, MiniBarWhereInput>
  }

  export type MiniBarLogOrderByWithRelationInput = {
    id?: SortOrder
    minibarId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
    minibar?: MiniBarOrderByWithRelationInput
  }

  export type MiniBarLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MiniBarLogWhereInput | MiniBarLogWhereInput[]
    OR?: MiniBarLogWhereInput[]
    NOT?: MiniBarLogWhereInput | MiniBarLogWhereInput[]
    minibarId?: IntFilter<"MiniBarLog"> | number
    type?: EnumInventoryActionFilter<"MiniBarLog"> | $Enums.InventoryAction
    quantity?: IntFilter<"MiniBarLog"> | number
    timestamp?: DateTimeFilter<"MiniBarLog"> | Date | string
    minibar?: XOR<MiniBarScalarRelationFilter, MiniBarWhereInput>
  }, "id">

  export type MiniBarLogOrderByWithAggregationInput = {
    id?: SortOrder
    minibarId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
    _count?: MiniBarLogCountOrderByAggregateInput
    _avg?: MiniBarLogAvgOrderByAggregateInput
    _max?: MiniBarLogMaxOrderByAggregateInput
    _min?: MiniBarLogMinOrderByAggregateInput
    _sum?: MiniBarLogSumOrderByAggregateInput
  }

  export type MiniBarLogScalarWhereWithAggregatesInput = {
    AND?: MiniBarLogScalarWhereWithAggregatesInput | MiniBarLogScalarWhereWithAggregatesInput[]
    OR?: MiniBarLogScalarWhereWithAggregatesInput[]
    NOT?: MiniBarLogScalarWhereWithAggregatesInput | MiniBarLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MiniBarLog"> | number
    minibarId?: IntWithAggregatesFilter<"MiniBarLog"> | number
    type?: EnumInventoryActionWithAggregatesFilter<"MiniBarLog"> | $Enums.InventoryAction
    quantity?: IntWithAggregatesFilter<"MiniBarLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"MiniBarLog"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    number?: IntFilter<"Room"> | number
    statusId?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
    type?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    status?: XOR<RoomStatusScalarRelationFilter, RoomStatusWhereInput>
    minibar?: MiniBarListRelationFilter
    history?: RoomLogListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    number?: SortOrder
    statusId?: SortOrder
    roomTypeId?: SortOrder
    type?: RoomTypeOrderByWithRelationInput
    status?: RoomStatusOrderByWithRelationInput
    minibar?: MiniBarOrderByRelationAggregateInput
    history?: RoomLogOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    number?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    statusId?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
    type?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    status?: XOR<RoomStatusScalarRelationFilter, RoomStatusWhereInput>
    minibar?: MiniBarListRelationFilter
    history?: RoomLogListRelationFilter
  }, "number">

  export type RoomOrderByWithAggregationInput = {
    number?: SortOrder
    statusId?: SortOrder
    roomTypeId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"Room"> | number
    statusId?: IntWithAggregatesFilter<"Room"> | number
    roomTypeId?: IntWithAggregatesFilter<"Room"> | number
  }

  export type RoomLogWhereInput = {
    AND?: RoomLogWhereInput | RoomLogWhereInput[]
    OR?: RoomLogWhereInput[]
    NOT?: RoomLogWhereInput | RoomLogWhereInput[]
    id?: IntFilter<"RoomLog"> | number
    roomId?: IntFilter<"RoomLog"> | number
    timestamp?: DateTimeFilter<"RoomLog"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomLogOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomLogWhereInput | RoomLogWhereInput[]
    OR?: RoomLogWhereInput[]
    NOT?: RoomLogWhereInput | RoomLogWhereInput[]
    roomId?: IntFilter<"RoomLog"> | number
    timestamp?: DateTimeFilter<"RoomLog"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomLogOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
    _count?: RoomLogCountOrderByAggregateInput
    _avg?: RoomLogAvgOrderByAggregateInput
    _max?: RoomLogMaxOrderByAggregateInput
    _min?: RoomLogMinOrderByAggregateInput
    _sum?: RoomLogSumOrderByAggregateInput
  }

  export type RoomLogScalarWhereWithAggregatesInput = {
    AND?: RoomLogScalarWhereWithAggregatesInput | RoomLogScalarWhereWithAggregatesInput[]
    OR?: RoomLogScalarWhereWithAggregatesInput[]
    NOT?: RoomLogScalarWhereWithAggregatesInput | RoomLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomLog"> | number
    roomId?: IntWithAggregatesFilter<"RoomLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"RoomLog"> | Date | string
  }

  export type RoomStatusWhereInput = {
    AND?: RoomStatusWhereInput | RoomStatusWhereInput[]
    OR?: RoomStatusWhereInput[]
    NOT?: RoomStatusWhereInput | RoomStatusWhereInput[]
    id?: IntFilter<"RoomStatus"> | number
    name?: StringFilter<"RoomStatus"> | string
    rooms?: RoomListRelationFilter
  }

  export type RoomStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    _relevance?: RoomStatusOrderByRelevanceInput
  }

  export type RoomStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomStatusWhereInput | RoomStatusWhereInput[]
    OR?: RoomStatusWhereInput[]
    NOT?: RoomStatusWhereInput | RoomStatusWhereInput[]
    name?: StringFilter<"RoomStatus"> | string
    rooms?: RoomListRelationFilter
  }, "id">

  export type RoomStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoomStatusCountOrderByAggregateInput
    _avg?: RoomStatusAvgOrderByAggregateInput
    _max?: RoomStatusMaxOrderByAggregateInput
    _min?: RoomStatusMinOrderByAggregateInput
    _sum?: RoomStatusSumOrderByAggregateInput
  }

  export type RoomStatusScalarWhereWithAggregatesInput = {
    AND?: RoomStatusScalarWhereWithAggregatesInput | RoomStatusScalarWhereWithAggregatesInput[]
    OR?: RoomStatusScalarWhereWithAggregatesInput[]
    NOT?: RoomStatusScalarWhereWithAggregatesInput | RoomStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomStatus"> | number
    name?: StringWithAggregatesFilter<"RoomStatus"> | string
  }

  export type RoomTypeWhereInput = {
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    id?: IntFilter<"RoomType"> | number
    name?: StringFilter<"RoomType"> | string
    price?: FloatFilter<"RoomType"> | number
    pax?: IntFilter<"RoomType"> | number
    Room?: RoomListRelationFilter
  }

  export type RoomTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    pax?: SortOrder
    Room?: RoomOrderByRelationAggregateInput
    _relevance?: RoomTypeOrderByRelevanceInput
  }

  export type RoomTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    name?: StringFilter<"RoomType"> | string
    price?: FloatFilter<"RoomType"> | number
    pax?: IntFilter<"RoomType"> | number
    Room?: RoomListRelationFilter
  }, "id">

  export type RoomTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    pax?: SortOrder
    _count?: RoomTypeCountOrderByAggregateInput
    _avg?: RoomTypeAvgOrderByAggregateInput
    _max?: RoomTypeMaxOrderByAggregateInput
    _min?: RoomTypeMinOrderByAggregateInput
    _sum?: RoomTypeSumOrderByAggregateInput
  }

  export type RoomTypeScalarWhereWithAggregatesInput = {
    AND?: RoomTypeScalarWhereWithAggregatesInput | RoomTypeScalarWhereWithAggregatesInput[]
    OR?: RoomTypeScalarWhereWithAggregatesInput[]
    NOT?: RoomTypeScalarWhereWithAggregatesInput | RoomTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomType"> | number
    name?: StringWithAggregatesFilter<"RoomType"> | string
    price?: FloatWithAggregatesFilter<"RoomType"> | number
    pax?: IntWithAggregatesFilter<"RoomType"> | number
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ItemCreateInput = {
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedOneWithoutItemInput
    minibar?: MiniBarCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedOneWithoutItemInput
    minibar?: MiniBarUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneWithoutItemNestedInput
    minibar?: MiniBarUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateOneWithoutItemNestedInput
    minibar?: MiniBarUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutInventoryInput
    history?: InventoryLogCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: number
    itemId: number
    quantity: number
    history?: InventoryLogUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutInventoryNestedInput
    history?: InventoryLogUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    history?: InventoryLogUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    id?: number
    itemId: number
    quantity: number
  }

  export type InventoryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryLogCreateInput = {
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
    inventory: InventoryCreateNestedOneWithoutHistoryInput
  }

  export type InventoryLogUncheckedCreateInput = {
    id?: number
    inventoryId: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type InventoryLogUpdateInput = {
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type InventoryLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogCreateManyInput = {
    id?: number
    inventoryId: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type InventoryLogUpdateManyMutationInput = {
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarCreateInput = {
    quantity: number
    room: RoomCreateNestedOneWithoutMinibarInput
    item: ItemCreateNestedOneWithoutMinibarInput
    MiniBarLog?: MiniBarLogCreateNestedManyWithoutMinibarInput
  }

  export type MiniBarUncheckedCreateInput = {
    id?: number
    roomNumber: number
    itemId: number
    quantity: number
    MiniBarLog?: MiniBarLogUncheckedCreateNestedManyWithoutMinibarInput
  }

  export type MiniBarUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutMinibarNestedInput
    item?: ItemUpdateOneRequiredWithoutMinibarNestedInput
    MiniBarLog?: MiniBarLogUpdateManyWithoutMinibarNestedInput
  }

  export type MiniBarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    MiniBarLog?: MiniBarLogUncheckedUpdateManyWithoutMinibarNestedInput
  }

  export type MiniBarCreateManyInput = {
    id?: number
    roomNumber: number
    itemId: number
    quantity: number
  }

  export type MiniBarUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniBarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniBarLogCreateInput = {
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
    minibar: MiniBarCreateNestedOneWithoutMiniBarLogInput
  }

  export type MiniBarLogUncheckedCreateInput = {
    id?: number
    minibarId: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type MiniBarLogUpdateInput = {
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    minibar?: MiniBarUpdateOneRequiredWithoutMiniBarLogNestedInput
  }

  export type MiniBarLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    minibarId?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarLogCreateManyInput = {
    id?: number
    minibarId: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type MiniBarLogUpdateManyMutationInput = {
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    minibarId?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    number: number
    type: RoomTypeCreateNestedOneWithoutRoomInput
    status: RoomStatusCreateNestedOneWithoutRoomsInput
    minibar?: MiniBarCreateNestedManyWithoutRoomInput
    history?: RoomLogCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    number: number
    statusId: number
    roomTypeId: number
    minibar?: MiniBarUncheckedCreateNestedManyWithoutRoomInput
    history?: RoomLogUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    type?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    status?: RoomStatusUpdateOneRequiredWithoutRoomsNestedInput
    minibar?: MiniBarUpdateManyWithoutRoomNestedInput
    history?: RoomLogUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    minibar?: MiniBarUncheckedUpdateManyWithoutRoomNestedInput
    history?: RoomLogUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    number: number
    statusId: number
    roomTypeId: number
  }

  export type RoomUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomLogCreateInput = {
    timestamp?: Date | string
    room: RoomCreateNestedOneWithoutHistoryInput
  }

  export type RoomLogUncheckedCreateInput = {
    id?: number
    roomId: number
    timestamp?: Date | string
  }

  export type RoomLogUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type RoomLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomLogCreateManyInput = {
    id?: number
    roomId: number
    timestamp?: Date | string
  }

  export type RoomLogUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomStatusCreateInput = {
    name: string
    rooms?: RoomCreateNestedManyWithoutStatusInput
  }

  export type RoomStatusUncheckedCreateInput = {
    id?: number
    name: string
    rooms?: RoomUncheckedCreateNestedManyWithoutStatusInput
  }

  export type RoomStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutStatusNestedInput
  }

  export type RoomStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type RoomStatusCreateManyInput = {
    id?: number
    name: string
  }

  export type RoomStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTypeCreateInput = {
    name: string
    price: number
    pax: number
    Room?: RoomCreateNestedManyWithoutTypeInput
  }

  export type RoomTypeUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    pax: number
    Room?: RoomUncheckedCreateNestedManyWithoutTypeInput
  }

  export type RoomTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
    Room?: RoomUpdateManyWithoutTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
    Room?: RoomUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type RoomTypeCreateManyInput = {
    id?: number
    name: string
    price: number
    pax: number
  }

  export type RoomTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: InventoryWhereInput | null
    isNot?: InventoryWhereInput | null
  }

  export type MiniBarListRelationFilter = {
    every?: MiniBarWhereInput
    some?: MiniBarWhereInput
    none?: MiniBarWhereInput
  }

  export type MiniBarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelevanceInput = {
    fields: ItemOrderByRelevanceFieldEnum | ItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type InventoryLogListRelationFilter = {
    every?: InventoryLogWhereInput
    some?: InventoryLogWhereInput
    none?: InventoryLogWhereInput
  }

  export type InventoryLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumInventoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[]
    notIn?: $Enums.InventoryAction[]
    not?: NestedEnumInventoryActionFilter<$PrismaModel> | $Enums.InventoryAction
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type InventoryLogCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
  }

  export type InventoryLogAvgOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryLogMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
  }

  export type InventoryLogMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
  }

  export type InventoryLogSumOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumInventoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[]
    notIn?: $Enums.InventoryAction[]
    not?: NestedEnumInventoryActionWithAggregatesFilter<$PrismaModel> | $Enums.InventoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryActionFilter<$PrismaModel>
    _max?: NestedEnumInventoryActionFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type MiniBarLogListRelationFilter = {
    every?: MiniBarLogWhereInput
    some?: MiniBarLogWhereInput
    none?: MiniBarLogWhereInput
  }

  export type MiniBarLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MiniBarRoomNumberItemIdCompoundUniqueInput = {
    roomNumber: number
    itemId: number
  }

  export type MiniBarCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarAvgOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarSumOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarScalarRelationFilter = {
    is?: MiniBarWhereInput
    isNot?: MiniBarWhereInput
  }

  export type MiniBarLogCountOrderByAggregateInput = {
    id?: SortOrder
    minibarId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
  }

  export type MiniBarLogAvgOrderByAggregateInput = {
    id?: SortOrder
    minibarId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarLogMaxOrderByAggregateInput = {
    id?: SortOrder
    minibarId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
  }

  export type MiniBarLogMinOrderByAggregateInput = {
    id?: SortOrder
    minibarId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    timestamp?: SortOrder
  }

  export type MiniBarLogSumOrderByAggregateInput = {
    id?: SortOrder
    minibarId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomTypeScalarRelationFilter = {
    is?: RoomTypeWhereInput
    isNot?: RoomTypeWhereInput
  }

  export type RoomStatusScalarRelationFilter = {
    is?: RoomStatusWhereInput
    isNot?: RoomStatusWhereInput
  }

  export type RoomLogListRelationFilter = {
    every?: RoomLogWhereInput
    some?: RoomLogWhereInput
    none?: RoomLogWhereInput
  }

  export type RoomLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    number?: SortOrder
    statusId?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    number?: SortOrder
    statusId?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    number?: SortOrder
    statusId?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    number?: SortOrder
    statusId?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    number?: SortOrder
    statusId?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomLogCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
  }

  export type RoomLogAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomLogMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
  }

  export type RoomLogMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    timestamp?: SortOrder
  }

  export type RoomLogSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomStatusOrderByRelevanceInput = {
    fields: RoomStatusOrderByRelevanceFieldEnum | RoomStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoomStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoomStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoomStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomTypeOrderByRelevanceInput = {
    fields: RoomTypeOrderByRelevanceFieldEnum | RoomTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    pax?: SortOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryCreateNestedOneWithoutItemInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput
    connect?: InventoryWhereUniqueInput
  }

  export type MiniBarCreateNestedManyWithoutItemInput = {
    create?: XOR<MiniBarCreateWithoutItemInput, MiniBarUncheckedCreateWithoutItemInput> | MiniBarCreateWithoutItemInput[] | MiniBarUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutItemInput | MiniBarCreateOrConnectWithoutItemInput[]
    createMany?: MiniBarCreateManyItemInputEnvelope
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput
    connect?: InventoryWhereUniqueInput
  }

  export type MiniBarUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<MiniBarCreateWithoutItemInput, MiniBarUncheckedCreateWithoutItemInput> | MiniBarCreateWithoutItemInput[] | MiniBarUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutItemInput | MiniBarCreateOrConnectWithoutItemInput[]
    createMany?: MiniBarCreateManyItemInputEnvelope
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventoryUpdateOneWithoutItemNestedInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput
    upsert?: InventoryUpsertWithoutItemInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutItemInput, InventoryUpdateWithoutItemInput>, InventoryUncheckedUpdateWithoutItemInput>
  }

  export type MiniBarUpdateManyWithoutItemNestedInput = {
    create?: XOR<MiniBarCreateWithoutItemInput, MiniBarUncheckedCreateWithoutItemInput> | MiniBarCreateWithoutItemInput[] | MiniBarUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutItemInput | MiniBarCreateOrConnectWithoutItemInput[]
    upsert?: MiniBarUpsertWithWhereUniqueWithoutItemInput | MiniBarUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: MiniBarCreateManyItemInputEnvelope
    set?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    disconnect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    delete?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    update?: MiniBarUpdateWithWhereUniqueWithoutItemInput | MiniBarUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: MiniBarUpdateManyWithWhereWithoutItemInput | MiniBarUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: MiniBarScalarWhereInput | MiniBarScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput
    upsert?: InventoryUpsertWithoutItemInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutItemInput, InventoryUpdateWithoutItemInput>, InventoryUncheckedUpdateWithoutItemInput>
  }

  export type MiniBarUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<MiniBarCreateWithoutItemInput, MiniBarUncheckedCreateWithoutItemInput> | MiniBarCreateWithoutItemInput[] | MiniBarUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutItemInput | MiniBarCreateOrConnectWithoutItemInput[]
    upsert?: MiniBarUpsertWithWhereUniqueWithoutItemInput | MiniBarUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: MiniBarCreateManyItemInputEnvelope
    set?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    disconnect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    delete?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    update?: MiniBarUpdateWithWhereUniqueWithoutItemInput | MiniBarUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: MiniBarUpdateManyWithWhereWithoutItemInput | MiniBarUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: MiniBarScalarWhereInput | MiniBarScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ItemCreateWithoutInventoryInput, ItemUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInventoryInput
    connect?: ItemWhereUniqueInput
  }

  export type InventoryLogCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryLogCreateWithoutInventoryInput, InventoryLogUncheckedCreateWithoutInventoryInput> | InventoryLogCreateWithoutInventoryInput[] | InventoryLogUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutInventoryInput | InventoryLogCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryLogCreateManyInventoryInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type InventoryLogUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryLogCreateWithoutInventoryInput, InventoryLogUncheckedCreateWithoutInventoryInput> | InventoryLogCreateWithoutInventoryInput[] | InventoryLogUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutInventoryInput | InventoryLogCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryLogCreateManyInventoryInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type ItemUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ItemCreateWithoutInventoryInput, ItemUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInventoryInput
    upsert?: ItemUpsertWithoutInventoryInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutInventoryInput, ItemUpdateWithoutInventoryInput>, ItemUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryLogUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryLogCreateWithoutInventoryInput, InventoryLogUncheckedCreateWithoutInventoryInput> | InventoryLogCreateWithoutInventoryInput[] | InventoryLogUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutInventoryInput | InventoryLogCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutInventoryInput | InventoryLogUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryLogCreateManyInventoryInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutInventoryInput | InventoryLogUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutInventoryInput | InventoryLogUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type InventoryLogUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryLogCreateWithoutInventoryInput, InventoryLogUncheckedCreateWithoutInventoryInput> | InventoryLogCreateWithoutInventoryInput[] | InventoryLogUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutInventoryInput | InventoryLogCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutInventoryInput | InventoryLogUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryLogCreateManyInventoryInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutInventoryInput | InventoryLogUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutInventoryInput | InventoryLogUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutHistoryInput = {
    create?: XOR<InventoryCreateWithoutHistoryInput, InventoryUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutHistoryInput
    connect?: InventoryWhereUniqueInput
  }

  export type EnumInventoryActionFieldUpdateOperationsInput = {
    set?: $Enums.InventoryAction
  }

  export type InventoryUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<InventoryCreateWithoutHistoryInput, InventoryUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutHistoryInput
    upsert?: InventoryUpsertWithoutHistoryInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutHistoryInput, InventoryUpdateWithoutHistoryInput>, InventoryUncheckedUpdateWithoutHistoryInput>
  }

  export type RoomCreateNestedOneWithoutMinibarInput = {
    create?: XOR<RoomCreateWithoutMinibarInput, RoomUncheckedCreateWithoutMinibarInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMinibarInput
    connect?: RoomWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutMinibarInput = {
    create?: XOR<ItemCreateWithoutMinibarInput, ItemUncheckedCreateWithoutMinibarInput>
    connectOrCreate?: ItemCreateOrConnectWithoutMinibarInput
    connect?: ItemWhereUniqueInput
  }

  export type MiniBarLogCreateNestedManyWithoutMinibarInput = {
    create?: XOR<MiniBarLogCreateWithoutMinibarInput, MiniBarLogUncheckedCreateWithoutMinibarInput> | MiniBarLogCreateWithoutMinibarInput[] | MiniBarLogUncheckedCreateWithoutMinibarInput[]
    connectOrCreate?: MiniBarLogCreateOrConnectWithoutMinibarInput | MiniBarLogCreateOrConnectWithoutMinibarInput[]
    createMany?: MiniBarLogCreateManyMinibarInputEnvelope
    connect?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
  }

  export type MiniBarLogUncheckedCreateNestedManyWithoutMinibarInput = {
    create?: XOR<MiniBarLogCreateWithoutMinibarInput, MiniBarLogUncheckedCreateWithoutMinibarInput> | MiniBarLogCreateWithoutMinibarInput[] | MiniBarLogUncheckedCreateWithoutMinibarInput[]
    connectOrCreate?: MiniBarLogCreateOrConnectWithoutMinibarInput | MiniBarLogCreateOrConnectWithoutMinibarInput[]
    createMany?: MiniBarLogCreateManyMinibarInputEnvelope
    connect?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutMinibarNestedInput = {
    create?: XOR<RoomCreateWithoutMinibarInput, RoomUncheckedCreateWithoutMinibarInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMinibarInput
    upsert?: RoomUpsertWithoutMinibarInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMinibarInput, RoomUpdateWithoutMinibarInput>, RoomUncheckedUpdateWithoutMinibarInput>
  }

  export type ItemUpdateOneRequiredWithoutMinibarNestedInput = {
    create?: XOR<ItemCreateWithoutMinibarInput, ItemUncheckedCreateWithoutMinibarInput>
    connectOrCreate?: ItemCreateOrConnectWithoutMinibarInput
    upsert?: ItemUpsertWithoutMinibarInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutMinibarInput, ItemUpdateWithoutMinibarInput>, ItemUncheckedUpdateWithoutMinibarInput>
  }

  export type MiniBarLogUpdateManyWithoutMinibarNestedInput = {
    create?: XOR<MiniBarLogCreateWithoutMinibarInput, MiniBarLogUncheckedCreateWithoutMinibarInput> | MiniBarLogCreateWithoutMinibarInput[] | MiniBarLogUncheckedCreateWithoutMinibarInput[]
    connectOrCreate?: MiniBarLogCreateOrConnectWithoutMinibarInput | MiniBarLogCreateOrConnectWithoutMinibarInput[]
    upsert?: MiniBarLogUpsertWithWhereUniqueWithoutMinibarInput | MiniBarLogUpsertWithWhereUniqueWithoutMinibarInput[]
    createMany?: MiniBarLogCreateManyMinibarInputEnvelope
    set?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    disconnect?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    delete?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    connect?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    update?: MiniBarLogUpdateWithWhereUniqueWithoutMinibarInput | MiniBarLogUpdateWithWhereUniqueWithoutMinibarInput[]
    updateMany?: MiniBarLogUpdateManyWithWhereWithoutMinibarInput | MiniBarLogUpdateManyWithWhereWithoutMinibarInput[]
    deleteMany?: MiniBarLogScalarWhereInput | MiniBarLogScalarWhereInput[]
  }

  export type MiniBarLogUncheckedUpdateManyWithoutMinibarNestedInput = {
    create?: XOR<MiniBarLogCreateWithoutMinibarInput, MiniBarLogUncheckedCreateWithoutMinibarInput> | MiniBarLogCreateWithoutMinibarInput[] | MiniBarLogUncheckedCreateWithoutMinibarInput[]
    connectOrCreate?: MiniBarLogCreateOrConnectWithoutMinibarInput | MiniBarLogCreateOrConnectWithoutMinibarInput[]
    upsert?: MiniBarLogUpsertWithWhereUniqueWithoutMinibarInput | MiniBarLogUpsertWithWhereUniqueWithoutMinibarInput[]
    createMany?: MiniBarLogCreateManyMinibarInputEnvelope
    set?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    disconnect?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    delete?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    connect?: MiniBarLogWhereUniqueInput | MiniBarLogWhereUniqueInput[]
    update?: MiniBarLogUpdateWithWhereUniqueWithoutMinibarInput | MiniBarLogUpdateWithWhereUniqueWithoutMinibarInput[]
    updateMany?: MiniBarLogUpdateManyWithWhereWithoutMinibarInput | MiniBarLogUpdateManyWithWhereWithoutMinibarInput[]
    deleteMany?: MiniBarLogScalarWhereInput | MiniBarLogScalarWhereInput[]
  }

  export type MiniBarCreateNestedOneWithoutMiniBarLogInput = {
    create?: XOR<MiniBarCreateWithoutMiniBarLogInput, MiniBarUncheckedCreateWithoutMiniBarLogInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutMiniBarLogInput
    connect?: MiniBarWhereUniqueInput
  }

  export type MiniBarUpdateOneRequiredWithoutMiniBarLogNestedInput = {
    create?: XOR<MiniBarCreateWithoutMiniBarLogInput, MiniBarUncheckedCreateWithoutMiniBarLogInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutMiniBarLogInput
    upsert?: MiniBarUpsertWithoutMiniBarLogInput
    connect?: MiniBarWhereUniqueInput
    update?: XOR<XOR<MiniBarUpdateToOneWithWhereWithoutMiniBarLogInput, MiniBarUpdateWithoutMiniBarLogInput>, MiniBarUncheckedUpdateWithoutMiniBarLogInput>
  }

  export type RoomTypeCreateNestedOneWithoutRoomInput = {
    create?: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomInput
    connect?: RoomTypeWhereUniqueInput
  }

  export type RoomStatusCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomStatusCreateOrConnectWithoutRoomsInput
    connect?: RoomStatusWhereUniqueInput
  }

  export type MiniBarCreateNestedManyWithoutRoomInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput> | MiniBarCreateWithoutRoomInput[] | MiniBarUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput | MiniBarCreateOrConnectWithoutRoomInput[]
    createMany?: MiniBarCreateManyRoomInputEnvelope
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
  }

  export type RoomLogCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomLogCreateWithoutRoomInput, RoomLogUncheckedCreateWithoutRoomInput> | RoomLogCreateWithoutRoomInput[] | RoomLogUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomLogCreateOrConnectWithoutRoomInput | RoomLogCreateOrConnectWithoutRoomInput[]
    createMany?: RoomLogCreateManyRoomInputEnvelope
    connect?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
  }

  export type MiniBarUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput> | MiniBarCreateWithoutRoomInput[] | MiniBarUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput | MiniBarCreateOrConnectWithoutRoomInput[]
    createMany?: MiniBarCreateManyRoomInputEnvelope
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
  }

  export type RoomLogUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomLogCreateWithoutRoomInput, RoomLogUncheckedCreateWithoutRoomInput> | RoomLogCreateWithoutRoomInput[] | RoomLogUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomLogCreateOrConnectWithoutRoomInput | RoomLogCreateOrConnectWithoutRoomInput[]
    createMany?: RoomLogCreateManyRoomInputEnvelope
    connect?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
  }

  export type RoomTypeUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomInput
    upsert?: RoomTypeUpsertWithoutRoomInput
    connect?: RoomTypeWhereUniqueInput
    update?: XOR<XOR<RoomTypeUpdateToOneWithWhereWithoutRoomInput, RoomTypeUpdateWithoutRoomInput>, RoomTypeUncheckedUpdateWithoutRoomInput>
  }

  export type RoomStatusUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomStatusCreateOrConnectWithoutRoomsInput
    upsert?: RoomStatusUpsertWithoutRoomsInput
    connect?: RoomStatusWhereUniqueInput
    update?: XOR<XOR<RoomStatusUpdateToOneWithWhereWithoutRoomsInput, RoomStatusUpdateWithoutRoomsInput>, RoomStatusUncheckedUpdateWithoutRoomsInput>
  }

  export type MiniBarUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput> | MiniBarCreateWithoutRoomInput[] | MiniBarUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput | MiniBarCreateOrConnectWithoutRoomInput[]
    upsert?: MiniBarUpsertWithWhereUniqueWithoutRoomInput | MiniBarUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MiniBarCreateManyRoomInputEnvelope
    set?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    disconnect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    delete?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    update?: MiniBarUpdateWithWhereUniqueWithoutRoomInput | MiniBarUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MiniBarUpdateManyWithWhereWithoutRoomInput | MiniBarUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MiniBarScalarWhereInput | MiniBarScalarWhereInput[]
  }

  export type RoomLogUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomLogCreateWithoutRoomInput, RoomLogUncheckedCreateWithoutRoomInput> | RoomLogCreateWithoutRoomInput[] | RoomLogUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomLogCreateOrConnectWithoutRoomInput | RoomLogCreateOrConnectWithoutRoomInput[]
    upsert?: RoomLogUpsertWithWhereUniqueWithoutRoomInput | RoomLogUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomLogCreateManyRoomInputEnvelope
    set?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    disconnect?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    delete?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    connect?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    update?: RoomLogUpdateWithWhereUniqueWithoutRoomInput | RoomLogUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomLogUpdateManyWithWhereWithoutRoomInput | RoomLogUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomLogScalarWhereInput | RoomLogScalarWhereInput[]
  }

  export type MiniBarUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput> | MiniBarCreateWithoutRoomInput[] | MiniBarUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput | MiniBarCreateOrConnectWithoutRoomInput[]
    upsert?: MiniBarUpsertWithWhereUniqueWithoutRoomInput | MiniBarUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MiniBarCreateManyRoomInputEnvelope
    set?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    disconnect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    delete?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    connect?: MiniBarWhereUniqueInput | MiniBarWhereUniqueInput[]
    update?: MiniBarUpdateWithWhereUniqueWithoutRoomInput | MiniBarUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MiniBarUpdateManyWithWhereWithoutRoomInput | MiniBarUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MiniBarScalarWhereInput | MiniBarScalarWhereInput[]
  }

  export type RoomLogUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomLogCreateWithoutRoomInput, RoomLogUncheckedCreateWithoutRoomInput> | RoomLogCreateWithoutRoomInput[] | RoomLogUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomLogCreateOrConnectWithoutRoomInput | RoomLogCreateOrConnectWithoutRoomInput[]
    upsert?: RoomLogUpsertWithWhereUniqueWithoutRoomInput | RoomLogUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomLogCreateManyRoomInputEnvelope
    set?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    disconnect?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    delete?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    connect?: RoomLogWhereUniqueInput | RoomLogWhereUniqueInput[]
    update?: RoomLogUpdateWithWhereUniqueWithoutRoomInput | RoomLogUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomLogUpdateManyWithWhereWithoutRoomInput | RoomLogUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomLogScalarWhereInput | RoomLogScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutHistoryInput = {
    create?: XOR<RoomCreateWithoutHistoryInput, RoomUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHistoryInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<RoomCreateWithoutHistoryInput, RoomUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHistoryInput
    upsert?: RoomUpsertWithoutHistoryInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutHistoryInput, RoomUpdateWithoutHistoryInput>, RoomUncheckedUpdateWithoutHistoryInput>
  }

  export type RoomCreateNestedManyWithoutStatusInput = {
    create?: XOR<RoomCreateWithoutStatusInput, RoomUncheckedCreateWithoutStatusInput> | RoomCreateWithoutStatusInput[] | RoomUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutStatusInput | RoomCreateOrConnectWithoutStatusInput[]
    createMany?: RoomCreateManyStatusInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<RoomCreateWithoutStatusInput, RoomUncheckedCreateWithoutStatusInput> | RoomCreateWithoutStatusInput[] | RoomUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutStatusInput | RoomCreateOrConnectWithoutStatusInput[]
    createMany?: RoomCreateManyStatusInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutStatusNestedInput = {
    create?: XOR<RoomCreateWithoutStatusInput, RoomUncheckedCreateWithoutStatusInput> | RoomCreateWithoutStatusInput[] | RoomUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutStatusInput | RoomCreateOrConnectWithoutStatusInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutStatusInput | RoomUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: RoomCreateManyStatusInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutStatusInput | RoomUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutStatusInput | RoomUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<RoomCreateWithoutStatusInput, RoomUncheckedCreateWithoutStatusInput> | RoomCreateWithoutStatusInput[] | RoomUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutStatusInput | RoomCreateOrConnectWithoutStatusInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutStatusInput | RoomUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: RoomCreateManyStatusInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutStatusInput | RoomUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutStatusInput | RoomUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutTypeInput = {
    create?: XOR<RoomCreateWithoutTypeInput, RoomUncheckedCreateWithoutTypeInput> | RoomCreateWithoutTypeInput[] | RoomUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTypeInput | RoomCreateOrConnectWithoutTypeInput[]
    createMany?: RoomCreateManyTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<RoomCreateWithoutTypeInput, RoomUncheckedCreateWithoutTypeInput> | RoomCreateWithoutTypeInput[] | RoomUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTypeInput | RoomCreateOrConnectWithoutTypeInput[]
    createMany?: RoomCreateManyTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutTypeNestedInput = {
    create?: XOR<RoomCreateWithoutTypeInput, RoomUncheckedCreateWithoutTypeInput> | RoomCreateWithoutTypeInput[] | RoomUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTypeInput | RoomCreateOrConnectWithoutTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutTypeInput | RoomUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: RoomCreateManyTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutTypeInput | RoomUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutTypeInput | RoomUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<RoomCreateWithoutTypeInput, RoomUncheckedCreateWithoutTypeInput> | RoomCreateWithoutTypeInput[] | RoomUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTypeInput | RoomCreateOrConnectWithoutTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutTypeInput | RoomUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: RoomCreateManyTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutTypeInput | RoomUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutTypeInput | RoomUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumInventoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[]
    notIn?: $Enums.InventoryAction[]
    not?: NestedEnumInventoryActionFilter<$PrismaModel> | $Enums.InventoryAction
  }

  export type NestedEnumInventoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[]
    notIn?: $Enums.InventoryAction[]
    not?: NestedEnumInventoryActionWithAggregatesFilter<$PrismaModel> | $Enums.InventoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryActionFilter<$PrismaModel>
    _max?: NestedEnumInventoryActionFilter<$PrismaModel>
  }

  export type InventoryCreateWithoutItemInput = {
    quantity: number
    history?: InventoryLogCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutItemInput = {
    id?: number
    quantity: number
    history?: InventoryLogUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutItemInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
  }

  export type MiniBarCreateWithoutItemInput = {
    quantity: number
    room: RoomCreateNestedOneWithoutMinibarInput
    MiniBarLog?: MiniBarLogCreateNestedManyWithoutMinibarInput
  }

  export type MiniBarUncheckedCreateWithoutItemInput = {
    id?: number
    roomNumber: number
    quantity: number
    MiniBarLog?: MiniBarLogUncheckedCreateNestedManyWithoutMinibarInput
  }

  export type MiniBarCreateOrConnectWithoutItemInput = {
    where: MiniBarWhereUniqueInput
    create: XOR<MiniBarCreateWithoutItemInput, MiniBarUncheckedCreateWithoutItemInput>
  }

  export type MiniBarCreateManyItemInputEnvelope = {
    data: MiniBarCreateManyItemInput | MiniBarCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithoutItemInput = {
    update: XOR<InventoryUpdateWithoutItemInput, InventoryUncheckedUpdateWithoutItemInput>
    create: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutItemInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutItemInput, InventoryUncheckedUpdateWithoutItemInput>
  }

  export type InventoryUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    history?: InventoryLogUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    history?: InventoryLogUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type MiniBarUpsertWithWhereUniqueWithoutItemInput = {
    where: MiniBarWhereUniqueInput
    update: XOR<MiniBarUpdateWithoutItemInput, MiniBarUncheckedUpdateWithoutItemInput>
    create: XOR<MiniBarCreateWithoutItemInput, MiniBarUncheckedCreateWithoutItemInput>
  }

  export type MiniBarUpdateWithWhereUniqueWithoutItemInput = {
    where: MiniBarWhereUniqueInput
    data: XOR<MiniBarUpdateWithoutItemInput, MiniBarUncheckedUpdateWithoutItemInput>
  }

  export type MiniBarUpdateManyWithWhereWithoutItemInput = {
    where: MiniBarScalarWhereInput
    data: XOR<MiniBarUpdateManyMutationInput, MiniBarUncheckedUpdateManyWithoutItemInput>
  }

  export type MiniBarScalarWhereInput = {
    AND?: MiniBarScalarWhereInput | MiniBarScalarWhereInput[]
    OR?: MiniBarScalarWhereInput[]
    NOT?: MiniBarScalarWhereInput | MiniBarScalarWhereInput[]
    id?: IntFilter<"MiniBar"> | number
    roomNumber?: IntFilter<"MiniBar"> | number
    itemId?: IntFilter<"MiniBar"> | number
    quantity?: IntFilter<"MiniBar"> | number
  }

  export type ItemCreateWithoutInventoryInput = {
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minibar?: MiniBarCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutInventoryInput = {
    id?: number
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minibar?: MiniBarUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutInventoryInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutInventoryInput, ItemUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryLogCreateWithoutInventoryInput = {
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type InventoryLogUncheckedCreateWithoutInventoryInput = {
    id?: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type InventoryLogCreateOrConnectWithoutInventoryInput = {
    where: InventoryLogWhereUniqueInput
    create: XOR<InventoryLogCreateWithoutInventoryInput, InventoryLogUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryLogCreateManyInventoryInputEnvelope = {
    data: InventoryLogCreateManyInventoryInput | InventoryLogCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithoutInventoryInput = {
    update: XOR<ItemUpdateWithoutInventoryInput, ItemUncheckedUpdateWithoutInventoryInput>
    create: XOR<ItemCreateWithoutInventoryInput, ItemUncheckedCreateWithoutInventoryInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutInventoryInput, ItemUncheckedUpdateWithoutInventoryInput>
  }

  export type ItemUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minibar?: MiniBarUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minibar?: MiniBarUncheckedUpdateManyWithoutItemNestedInput
  }

  export type InventoryLogUpsertWithWhereUniqueWithoutInventoryInput = {
    where: InventoryLogWhereUniqueInput
    update: XOR<InventoryLogUpdateWithoutInventoryInput, InventoryLogUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryLogCreateWithoutInventoryInput, InventoryLogUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryLogUpdateWithWhereUniqueWithoutInventoryInput = {
    where: InventoryLogWhereUniqueInput
    data: XOR<InventoryLogUpdateWithoutInventoryInput, InventoryLogUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryLogUpdateManyWithWhereWithoutInventoryInput = {
    where: InventoryLogScalarWhereInput
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryLogScalarWhereInput = {
    AND?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
    OR?: InventoryLogScalarWhereInput[]
    NOT?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
    id?: IntFilter<"InventoryLog"> | number
    inventoryId?: IntFilter<"InventoryLog"> | number
    type?: EnumInventoryActionFilter<"InventoryLog"> | $Enums.InventoryAction
    quantity?: IntFilter<"InventoryLog"> | number
    timestamp?: DateTimeFilter<"InventoryLog"> | Date | string
  }

  export type InventoryCreateWithoutHistoryInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutHistoryInput = {
    id?: number
    itemId: number
    quantity: number
  }

  export type InventoryCreateOrConnectWithoutHistoryInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutHistoryInput, InventoryUncheckedCreateWithoutHistoryInput>
  }

  export type InventoryUpsertWithoutHistoryInput = {
    update: XOR<InventoryUpdateWithoutHistoryInput, InventoryUncheckedUpdateWithoutHistoryInput>
    create: XOR<InventoryCreateWithoutHistoryInput, InventoryUncheckedCreateWithoutHistoryInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutHistoryInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutHistoryInput, InventoryUncheckedUpdateWithoutHistoryInput>
  }

  export type InventoryUpdateWithoutHistoryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateWithoutMinibarInput = {
    number: number
    type: RoomTypeCreateNestedOneWithoutRoomInput
    status: RoomStatusCreateNestedOneWithoutRoomsInput
    history?: RoomLogCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMinibarInput = {
    number: number
    statusId: number
    roomTypeId: number
    history?: RoomLogUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMinibarInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMinibarInput, RoomUncheckedCreateWithoutMinibarInput>
  }

  export type ItemCreateWithoutMinibarInput = {
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutMinibarInput = {
    id?: number
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutMinibarInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutMinibarInput, ItemUncheckedCreateWithoutMinibarInput>
  }

  export type MiniBarLogCreateWithoutMinibarInput = {
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type MiniBarLogUncheckedCreateWithoutMinibarInput = {
    id?: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type MiniBarLogCreateOrConnectWithoutMinibarInput = {
    where: MiniBarLogWhereUniqueInput
    create: XOR<MiniBarLogCreateWithoutMinibarInput, MiniBarLogUncheckedCreateWithoutMinibarInput>
  }

  export type MiniBarLogCreateManyMinibarInputEnvelope = {
    data: MiniBarLogCreateManyMinibarInput | MiniBarLogCreateManyMinibarInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutMinibarInput = {
    update: XOR<RoomUpdateWithoutMinibarInput, RoomUncheckedUpdateWithoutMinibarInput>
    create: XOR<RoomCreateWithoutMinibarInput, RoomUncheckedCreateWithoutMinibarInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMinibarInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMinibarInput, RoomUncheckedUpdateWithoutMinibarInput>
  }

  export type RoomUpdateWithoutMinibarInput = {
    number?: IntFieldUpdateOperationsInput | number
    type?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    status?: RoomStatusUpdateOneRequiredWithoutRoomsNestedInput
    history?: RoomLogUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMinibarInput = {
    number?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    history?: RoomLogUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ItemUpsertWithoutMinibarInput = {
    update: XOR<ItemUpdateWithoutMinibarInput, ItemUncheckedUpdateWithoutMinibarInput>
    create: XOR<ItemCreateWithoutMinibarInput, ItemUncheckedCreateWithoutMinibarInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutMinibarInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutMinibarInput, ItemUncheckedUpdateWithoutMinibarInput>
  }

  export type ItemUpdateWithoutMinibarInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutMinibarInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateOneWithoutItemNestedInput
  }

  export type MiniBarLogUpsertWithWhereUniqueWithoutMinibarInput = {
    where: MiniBarLogWhereUniqueInput
    update: XOR<MiniBarLogUpdateWithoutMinibarInput, MiniBarLogUncheckedUpdateWithoutMinibarInput>
    create: XOR<MiniBarLogCreateWithoutMinibarInput, MiniBarLogUncheckedCreateWithoutMinibarInput>
  }

  export type MiniBarLogUpdateWithWhereUniqueWithoutMinibarInput = {
    where: MiniBarLogWhereUniqueInput
    data: XOR<MiniBarLogUpdateWithoutMinibarInput, MiniBarLogUncheckedUpdateWithoutMinibarInput>
  }

  export type MiniBarLogUpdateManyWithWhereWithoutMinibarInput = {
    where: MiniBarLogScalarWhereInput
    data: XOR<MiniBarLogUpdateManyMutationInput, MiniBarLogUncheckedUpdateManyWithoutMinibarInput>
  }

  export type MiniBarLogScalarWhereInput = {
    AND?: MiniBarLogScalarWhereInput | MiniBarLogScalarWhereInput[]
    OR?: MiniBarLogScalarWhereInput[]
    NOT?: MiniBarLogScalarWhereInput | MiniBarLogScalarWhereInput[]
    id?: IntFilter<"MiniBarLog"> | number
    minibarId?: IntFilter<"MiniBarLog"> | number
    type?: EnumInventoryActionFilter<"MiniBarLog"> | $Enums.InventoryAction
    quantity?: IntFilter<"MiniBarLog"> | number
    timestamp?: DateTimeFilter<"MiniBarLog"> | Date | string
  }

  export type MiniBarCreateWithoutMiniBarLogInput = {
    quantity: number
    room: RoomCreateNestedOneWithoutMinibarInput
    item: ItemCreateNestedOneWithoutMinibarInput
  }

  export type MiniBarUncheckedCreateWithoutMiniBarLogInput = {
    id?: number
    roomNumber: number
    itemId: number
    quantity: number
  }

  export type MiniBarCreateOrConnectWithoutMiniBarLogInput = {
    where: MiniBarWhereUniqueInput
    create: XOR<MiniBarCreateWithoutMiniBarLogInput, MiniBarUncheckedCreateWithoutMiniBarLogInput>
  }

  export type MiniBarUpsertWithoutMiniBarLogInput = {
    update: XOR<MiniBarUpdateWithoutMiniBarLogInput, MiniBarUncheckedUpdateWithoutMiniBarLogInput>
    create: XOR<MiniBarCreateWithoutMiniBarLogInput, MiniBarUncheckedCreateWithoutMiniBarLogInput>
    where?: MiniBarWhereInput
  }

  export type MiniBarUpdateToOneWithWhereWithoutMiniBarLogInput = {
    where?: MiniBarWhereInput
    data: XOR<MiniBarUpdateWithoutMiniBarLogInput, MiniBarUncheckedUpdateWithoutMiniBarLogInput>
  }

  export type MiniBarUpdateWithoutMiniBarLogInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutMinibarNestedInput
    item?: ItemUpdateOneRequiredWithoutMinibarNestedInput
  }

  export type MiniBarUncheckedUpdateWithoutMiniBarLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTypeCreateWithoutRoomInput = {
    name: string
    price: number
    pax: number
  }

  export type RoomTypeUncheckedCreateWithoutRoomInput = {
    id?: number
    name: string
    price: number
    pax: number
  }

  export type RoomTypeCreateOrConnectWithoutRoomInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
  }

  export type RoomStatusCreateWithoutRoomsInput = {
    name: string
  }

  export type RoomStatusUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
  }

  export type RoomStatusCreateOrConnectWithoutRoomsInput = {
    where: RoomStatusWhereUniqueInput
    create: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
  }

  export type MiniBarCreateWithoutRoomInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutMinibarInput
    MiniBarLog?: MiniBarLogCreateNestedManyWithoutMinibarInput
  }

  export type MiniBarUncheckedCreateWithoutRoomInput = {
    id?: number
    itemId: number
    quantity: number
    MiniBarLog?: MiniBarLogUncheckedCreateNestedManyWithoutMinibarInput
  }

  export type MiniBarCreateOrConnectWithoutRoomInput = {
    where: MiniBarWhereUniqueInput
    create: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
  }

  export type MiniBarCreateManyRoomInputEnvelope = {
    data: MiniBarCreateManyRoomInput | MiniBarCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomLogCreateWithoutRoomInput = {
    timestamp?: Date | string
  }

  export type RoomLogUncheckedCreateWithoutRoomInput = {
    id?: number
    timestamp?: Date | string
  }

  export type RoomLogCreateOrConnectWithoutRoomInput = {
    where: RoomLogWhereUniqueInput
    create: XOR<RoomLogCreateWithoutRoomInput, RoomLogUncheckedCreateWithoutRoomInput>
  }

  export type RoomLogCreateManyRoomInputEnvelope = {
    data: RoomLogCreateManyRoomInput | RoomLogCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomTypeUpsertWithoutRoomInput = {
    update: XOR<RoomTypeUpdateWithoutRoomInput, RoomTypeUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
    where?: RoomTypeWhereInput
  }

  export type RoomTypeUpdateToOneWithWhereWithoutRoomInput = {
    where?: RoomTypeWhereInput
    data: XOR<RoomTypeUpdateWithoutRoomInput, RoomTypeUncheckedUpdateWithoutRoomInput>
  }

  export type RoomTypeUpdateWithoutRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTypeUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
  }

  export type RoomStatusUpsertWithoutRoomsInput = {
    update: XOR<RoomStatusUpdateWithoutRoomsInput, RoomStatusUncheckedUpdateWithoutRoomsInput>
    create: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    where?: RoomStatusWhereInput
  }

  export type RoomStatusUpdateToOneWithWhereWithoutRoomsInput = {
    where?: RoomStatusWhereInput
    data: XOR<RoomStatusUpdateWithoutRoomsInput, RoomStatusUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomStatusUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomStatusUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MiniBarUpsertWithWhereUniqueWithoutRoomInput = {
    where: MiniBarWhereUniqueInput
    update: XOR<MiniBarUpdateWithoutRoomInput, MiniBarUncheckedUpdateWithoutRoomInput>
    create: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
  }

  export type MiniBarUpdateWithWhereUniqueWithoutRoomInput = {
    where: MiniBarWhereUniqueInput
    data: XOR<MiniBarUpdateWithoutRoomInput, MiniBarUncheckedUpdateWithoutRoomInput>
  }

  export type MiniBarUpdateManyWithWhereWithoutRoomInput = {
    where: MiniBarScalarWhereInput
    data: XOR<MiniBarUpdateManyMutationInput, MiniBarUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomLogUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomLogWhereUniqueInput
    update: XOR<RoomLogUpdateWithoutRoomInput, RoomLogUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomLogCreateWithoutRoomInput, RoomLogUncheckedCreateWithoutRoomInput>
  }

  export type RoomLogUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomLogWhereUniqueInput
    data: XOR<RoomLogUpdateWithoutRoomInput, RoomLogUncheckedUpdateWithoutRoomInput>
  }

  export type RoomLogUpdateManyWithWhereWithoutRoomInput = {
    where: RoomLogScalarWhereInput
    data: XOR<RoomLogUpdateManyMutationInput, RoomLogUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomLogScalarWhereInput = {
    AND?: RoomLogScalarWhereInput | RoomLogScalarWhereInput[]
    OR?: RoomLogScalarWhereInput[]
    NOT?: RoomLogScalarWhereInput | RoomLogScalarWhereInput[]
    id?: IntFilter<"RoomLog"> | number
    roomId?: IntFilter<"RoomLog"> | number
    timestamp?: DateTimeFilter<"RoomLog"> | Date | string
  }

  export type RoomCreateWithoutHistoryInput = {
    number: number
    type: RoomTypeCreateNestedOneWithoutRoomInput
    status: RoomStatusCreateNestedOneWithoutRoomsInput
    minibar?: MiniBarCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHistoryInput = {
    number: number
    statusId: number
    roomTypeId: number
    minibar?: MiniBarUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHistoryInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHistoryInput, RoomUncheckedCreateWithoutHistoryInput>
  }

  export type RoomUpsertWithoutHistoryInput = {
    update: XOR<RoomUpdateWithoutHistoryInput, RoomUncheckedUpdateWithoutHistoryInput>
    create: XOR<RoomCreateWithoutHistoryInput, RoomUncheckedCreateWithoutHistoryInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutHistoryInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutHistoryInput, RoomUncheckedUpdateWithoutHistoryInput>
  }

  export type RoomUpdateWithoutHistoryInput = {
    number?: IntFieldUpdateOperationsInput | number
    type?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    status?: RoomStatusUpdateOneRequiredWithoutRoomsNestedInput
    minibar?: MiniBarUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHistoryInput = {
    number?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    minibar?: MiniBarUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutStatusInput = {
    number: number
    type: RoomTypeCreateNestedOneWithoutRoomInput
    minibar?: MiniBarCreateNestedManyWithoutRoomInput
    history?: RoomLogCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutStatusInput = {
    number: number
    roomTypeId: number
    minibar?: MiniBarUncheckedCreateNestedManyWithoutRoomInput
    history?: RoomLogUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutStatusInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutStatusInput, RoomUncheckedCreateWithoutStatusInput>
  }

  export type RoomCreateManyStatusInputEnvelope = {
    data: RoomCreateManyStatusInput | RoomCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutStatusInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutStatusInput, RoomUncheckedUpdateWithoutStatusInput>
    create: XOR<RoomCreateWithoutStatusInput, RoomUncheckedCreateWithoutStatusInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutStatusInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutStatusInput, RoomUncheckedUpdateWithoutStatusInput>
  }

  export type RoomUpdateManyWithWhereWithoutStatusInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutStatusInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    number?: IntFilter<"Room"> | number
    statusId?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
  }

  export type RoomCreateWithoutTypeInput = {
    number: number
    status: RoomStatusCreateNestedOneWithoutRoomsInput
    minibar?: MiniBarCreateNestedManyWithoutRoomInput
    history?: RoomLogCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutTypeInput = {
    number: number
    statusId: number
    minibar?: MiniBarUncheckedCreateNestedManyWithoutRoomInput
    history?: RoomLogUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutTypeInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutTypeInput, RoomUncheckedCreateWithoutTypeInput>
  }

  export type RoomCreateManyTypeInputEnvelope = {
    data: RoomCreateManyTypeInput | RoomCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutTypeInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutTypeInput, RoomUncheckedUpdateWithoutTypeInput>
    create: XOR<RoomCreateWithoutTypeInput, RoomUncheckedCreateWithoutTypeInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutTypeInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutTypeInput, RoomUncheckedUpdateWithoutTypeInput>
  }

  export type RoomUpdateManyWithWhereWithoutTypeInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutTypeInput>
  }

  export type MiniBarCreateManyItemInput = {
    id?: number
    roomNumber: number
    quantity: number
  }

  export type MiniBarUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutMinibarNestedInput
    MiniBarLog?: MiniBarLogUpdateManyWithoutMinibarNestedInput
  }

  export type MiniBarUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    MiniBarLog?: MiniBarLogUncheckedUpdateManyWithoutMinibarNestedInput
  }

  export type MiniBarUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryLogCreateManyInventoryInput = {
    id?: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type InventoryLogUpdateWithoutInventoryInput = {
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarLogCreateManyMinibarInput = {
    id?: number
    type: $Enums.InventoryAction
    quantity: number
    timestamp?: Date | string
  }

  export type MiniBarLogUpdateWithoutMinibarInput = {
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarLogUncheckedUpdateWithoutMinibarInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarLogUncheckedUpdateManyWithoutMinibarInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    quantity?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarCreateManyRoomInput = {
    id?: number
    itemId: number
    quantity: number
  }

  export type RoomLogCreateManyRoomInput = {
    id?: number
    timestamp?: Date | string
  }

  export type MiniBarUpdateWithoutRoomInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutMinibarNestedInput
    MiniBarLog?: MiniBarLogUpdateManyWithoutMinibarNestedInput
  }

  export type MiniBarUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    MiniBarLog?: MiniBarLogUncheckedUpdateManyWithoutMinibarNestedInput
  }

  export type MiniBarUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomLogUpdateWithoutRoomInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomLogUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomLogUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyStatusInput = {
    number: number
    roomTypeId: number
  }

  export type RoomUpdateWithoutStatusInput = {
    number?: IntFieldUpdateOperationsInput | number
    type?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    minibar?: MiniBarUpdateManyWithoutRoomNestedInput
    history?: RoomLogUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutStatusInput = {
    number?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    minibar?: MiniBarUncheckedUpdateManyWithoutRoomNestedInput
    history?: RoomLogUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutStatusInput = {
    number?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyTypeInput = {
    number: number
    statusId: number
  }

  export type RoomUpdateWithoutTypeInput = {
    number?: IntFieldUpdateOperationsInput | number
    status?: RoomStatusUpdateOneRequiredWithoutRoomsNestedInput
    minibar?: MiniBarUpdateManyWithoutRoomNestedInput
    history?: RoomLogUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutTypeInput = {
    number?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
    minibar?: MiniBarUncheckedUpdateManyWithoutRoomNestedInput
    history?: RoomLogUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutTypeInput = {
    number?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}