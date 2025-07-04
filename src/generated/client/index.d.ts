
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
 * Model Floor
 * ----------- Item -----------
 */
export type Floor = $Result.DefaultSelection<Prisma.$FloorPayload>
/**
 * Model RoomType
 * 
 */
export type RoomType = $Result.DefaultSelection<Prisma.$RoomTypePayload>
/**
 * Model RoomStatus
 * 
 */
export type RoomStatus = $Result.DefaultSelection<Prisma.$RoomStatusPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model MiniBar
 * 
 */
export type MiniBar = $Result.DefaultSelection<Prisma.$MiniBarPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model MiniBarItem
 * 
 */
export type MiniBarItem = $Result.DefaultSelection<Prisma.$MiniBarItemPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Receipt
 * 
 */
export type Receipt = $Result.DefaultSelection<Prisma.$ReceiptPayload>
/**
 * Model AdditionalChargeReceipt
 * 
 */
export type AdditionalChargeReceipt = $Result.DefaultSelection<Prisma.$AdditionalChargeReceiptPayload>
/**
 * Model RestaurantReceipt
 * 
 */
export type RestaurantReceipt = $Result.DefaultSelection<Prisma.$RestaurantReceiptPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model AddChargeItem
 * 
 */
export type AddChargeItem = $Result.DefaultSelection<Prisma.$AddChargeItemPayload>
/**
 * Model AddChargeService
 * 
 */
export type AddChargeService = $Result.DefaultSelection<Prisma.$AddChargeServicePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Floors
 * const floors = await prisma.floor.findMany()
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
   * // Fetch zero or more Floors
   * const floors = await prisma.floor.findMany()
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
   * `prisma.floor`: Exposes CRUD operations for the **Floor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Floors
    * const floors = await prisma.floor.findMany()
    * ```
    */
  get floor(): Prisma.FloorDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.roomStatus`: Exposes CRUD operations for the **RoomStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomStatuses
    * const roomStatuses = await prisma.roomStatus.findMany()
    * ```
    */
  get roomStatus(): Prisma.RoomStatusDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.miniBarItem`: Exposes CRUD operations for the **MiniBarItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MiniBarItems
    * const miniBarItems = await prisma.miniBarItem.findMany()
    * ```
    */
  get miniBarItem(): Prisma.MiniBarItemDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receipt`: Exposes CRUD operations for the **Receipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receipts
    * const receipts = await prisma.receipt.findMany()
    * ```
    */
  get receipt(): Prisma.ReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.additionalChargeReceipt`: Exposes CRUD operations for the **AdditionalChargeReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdditionalChargeReceipts
    * const additionalChargeReceipts = await prisma.additionalChargeReceipt.findMany()
    * ```
    */
  get additionalChargeReceipt(): Prisma.AdditionalChargeReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurantReceipt`: Exposes CRUD operations for the **RestaurantReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantReceipts
    * const restaurantReceipts = await prisma.restaurantReceipt.findMany()
    * ```
    */
  get restaurantReceipt(): Prisma.RestaurantReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addChargeItem`: Exposes CRUD operations for the **AddChargeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddChargeItems
    * const addChargeItems = await prisma.addChargeItem.findMany()
    * ```
    */
  get addChargeItem(): Prisma.AddChargeItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addChargeService`: Exposes CRUD operations for the **AddChargeService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddChargeServices
    * const addChargeServices = await prisma.addChargeService.findMany()
    * ```
    */
  get addChargeService(): Prisma.AddChargeServiceDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Floor: 'Floor',
    RoomType: 'RoomType',
    RoomStatus: 'RoomStatus',
    Room: 'Room',
    Session: 'Session',
    Guest: 'Guest',
    MiniBar: 'MiniBar',
    Item: 'Item',
    MiniBarItem: 'MiniBarItem',
    Inventory: 'Inventory',
    Booking: 'Booking',
    Receipt: 'Receipt',
    AdditionalChargeReceipt: 'AdditionalChargeReceipt',
    RestaurantReceipt: 'RestaurantReceipt',
    Service: 'Service',
    AddChargeItem: 'AddChargeItem',
    AddChargeService: 'AddChargeService',
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
      modelProps: "floor" | "roomType" | "roomStatus" | "room" | "session" | "guest" | "miniBar" | "item" | "miniBarItem" | "inventory" | "booking" | "receipt" | "additionalChargeReceipt" | "restaurantReceipt" | "service" | "addChargeItem" | "addChargeService" | "admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Floor: {
        payload: Prisma.$FloorPayload<ExtArgs>
        fields: Prisma.FloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findFirst: {
            args: Prisma.FloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findMany: {
            args: Prisma.FloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          create: {
            args: Prisma.FloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          createMany: {
            args: Prisma.FloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          update: {
            args: Prisma.FloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          deleteMany: {
            args: Prisma.FloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          aggregate: {
            args: Prisma.FloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloor>
          }
          groupBy: {
            args: Prisma.FloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorCountArgs<ExtArgs>
            result: $Utils.Optional<FloorCountAggregateOutputType> | number
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
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
      MiniBarItem: {
        payload: Prisma.$MiniBarItemPayload<ExtArgs>
        fields: Prisma.MiniBarItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiniBarItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiniBarItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload>
          }
          findFirst: {
            args: Prisma.MiniBarItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiniBarItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload>
          }
          findMany: {
            args: Prisma.MiniBarItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload>[]
          }
          create: {
            args: Prisma.MiniBarItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload>
          }
          createMany: {
            args: Prisma.MiniBarItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MiniBarItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload>
          }
          update: {
            args: Prisma.MiniBarItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload>
          }
          deleteMany: {
            args: Prisma.MiniBarItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MiniBarItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MiniBarItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiniBarItemPayload>
          }
          aggregate: {
            args: Prisma.MiniBarItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiniBarItem>
          }
          groupBy: {
            args: Prisma.MiniBarItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiniBarItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiniBarItemCountArgs<ExtArgs>
            result: $Utils.Optional<MiniBarItemCountAggregateOutputType> | number
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
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Receipt: {
        payload: Prisma.$ReceiptPayload<ExtArgs>
        fields: Prisma.ReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          findFirst: {
            args: Prisma.ReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          findMany: {
            args: Prisma.ReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>[]
          }
          create: {
            args: Prisma.ReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          createMany: {
            args: Prisma.ReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          update: {
            args: Prisma.ReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          deleteMany: {
            args: Prisma.ReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiptPayload>
          }
          aggregate: {
            args: Prisma.ReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceipt>
          }
          groupBy: {
            args: Prisma.ReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiptCountAggregateOutputType> | number
          }
        }
      }
      AdditionalChargeReceipt: {
        payload: Prisma.$AdditionalChargeReceiptPayload<ExtArgs>
        fields: Prisma.AdditionalChargeReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdditionalChargeReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdditionalChargeReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload>
          }
          findFirst: {
            args: Prisma.AdditionalChargeReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdditionalChargeReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload>
          }
          findMany: {
            args: Prisma.AdditionalChargeReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload>[]
          }
          create: {
            args: Prisma.AdditionalChargeReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload>
          }
          createMany: {
            args: Prisma.AdditionalChargeReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdditionalChargeReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload>
          }
          update: {
            args: Prisma.AdditionalChargeReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload>
          }
          deleteMany: {
            args: Prisma.AdditionalChargeReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdditionalChargeReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdditionalChargeReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalChargeReceiptPayload>
          }
          aggregate: {
            args: Prisma.AdditionalChargeReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdditionalChargeReceipt>
          }
          groupBy: {
            args: Prisma.AdditionalChargeReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdditionalChargeReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdditionalChargeReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<AdditionalChargeReceiptCountAggregateOutputType> | number
          }
        }
      }
      RestaurantReceipt: {
        payload: Prisma.$RestaurantReceiptPayload<ExtArgs>
        fields: Prisma.RestaurantReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload>
          }
          findFirst: {
            args: Prisma.RestaurantReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload>
          }
          findMany: {
            args: Prisma.RestaurantReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload>[]
          }
          create: {
            args: Prisma.RestaurantReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload>
          }
          createMany: {
            args: Prisma.RestaurantReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestaurantReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload>
          }
          update: {
            args: Prisma.RestaurantReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantReceiptPayload>
          }
          aggregate: {
            args: Prisma.RestaurantReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurantReceipt>
          }
          groupBy: {
            args: Prisma.RestaurantReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantReceiptCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      AddChargeItem: {
        payload: Prisma.$AddChargeItemPayload<ExtArgs>
        fields: Prisma.AddChargeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddChargeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddChargeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload>
          }
          findFirst: {
            args: Prisma.AddChargeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddChargeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload>
          }
          findMany: {
            args: Prisma.AddChargeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload>[]
          }
          create: {
            args: Prisma.AddChargeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload>
          }
          createMany: {
            args: Prisma.AddChargeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddChargeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload>
          }
          update: {
            args: Prisma.AddChargeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload>
          }
          deleteMany: {
            args: Prisma.AddChargeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddChargeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddChargeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeItemPayload>
          }
          aggregate: {
            args: Prisma.AddChargeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddChargeItem>
          }
          groupBy: {
            args: Prisma.AddChargeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddChargeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddChargeItemCountArgs<ExtArgs>
            result: $Utils.Optional<AddChargeItemCountAggregateOutputType> | number
          }
        }
      }
      AddChargeService: {
        payload: Prisma.$AddChargeServicePayload<ExtArgs>
        fields: Prisma.AddChargeServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddChargeServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddChargeServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload>
          }
          findFirst: {
            args: Prisma.AddChargeServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddChargeServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload>
          }
          findMany: {
            args: Prisma.AddChargeServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload>[]
          }
          create: {
            args: Prisma.AddChargeServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload>
          }
          createMany: {
            args: Prisma.AddChargeServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddChargeServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload>
          }
          update: {
            args: Prisma.AddChargeServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload>
          }
          deleteMany: {
            args: Prisma.AddChargeServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddChargeServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddChargeServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddChargeServicePayload>
          }
          aggregate: {
            args: Prisma.AddChargeServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddChargeService>
          }
          groupBy: {
            args: Prisma.AddChargeServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddChargeServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddChargeServiceCountArgs<ExtArgs>
            result: $Utils.Optional<AddChargeServiceCountAggregateOutputType> | number
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
    floor?: FloorOmit
    roomType?: RoomTypeOmit
    roomStatus?: RoomStatusOmit
    room?: RoomOmit
    session?: SessionOmit
    guest?: GuestOmit
    miniBar?: MiniBarOmit
    item?: ItemOmit
    miniBarItem?: MiniBarItemOmit
    inventory?: InventoryOmit
    booking?: BookingOmit
    receipt?: ReceiptOmit
    additionalChargeReceipt?: AdditionalChargeReceiptOmit
    restaurantReceipt?: RestaurantReceiptOmit
    service?: ServiceOmit
    addChargeItem?: AddChargeItemOmit
    addChargeService?: AddChargeServiceOmit
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
   * Count Type FloorCountOutputType
   */

  export type FloorCountOutputType = {
    rooms: number
  }

  export type FloorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | FloorCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorCountOutputType
     */
    select?: FloorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomTypeCountOutputType
   */

  export type RoomTypeCountOutputType = {
    rooms: number
  }

  export type RoomTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomTypeCountOutputTypeCountRoomsArgs
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
  export type RoomTypeCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
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
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    bookings: number
    receipts: number
    session: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
    receipts?: boolean | RoomCountOutputTypeCountReceiptsArgs
    session?: boolean | RoomCountOutputTypeCountSessionArgs
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
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    guests: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guests?: boolean | SessionCountOutputTypeCountGuestsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    sessions: number
    bookings: number
    receipts: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | GuestCountOutputTypeCountSessionsArgs
    bookings?: boolean | GuestCountOutputTypeCountBookingsArgs
    receipts?: boolean | GuestCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptWhereInput
  }


  /**
   * Count Type MiniBarCountOutputType
   */

  export type MiniBarCountOutputType = {
    items: number
  }

  export type MiniBarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MiniBarCountOutputTypeCountItemsArgs
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
  export type MiniBarCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarItemWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    miniBarItems: number
    inventory: number
    additionalCharges: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miniBarItems?: boolean | ItemCountOutputTypeCountMiniBarItemsArgs
    inventory?: boolean | ItemCountOutputTypeCountInventoryArgs
    additionalCharges?: boolean | ItemCountOutputTypeCountAdditionalChargesArgs
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
  export type ItemCountOutputTypeCountMiniBarItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarItemWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountAdditionalChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddChargeItemWhereInput
  }


  /**
   * Count Type ReceiptCountOutputType
   */

  export type ReceiptCountOutputType = {
    additionalCharges: number
  }

  export type ReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    additionalCharges?: boolean | ReceiptCountOutputTypeCountAdditionalChargesArgs
  }

  // Custom InputTypes
  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiptCountOutputType
     */
    select?: ReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceiptCountOutputType without action
   */
  export type ReceiptCountOutputTypeCountAdditionalChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdditionalChargeReceiptWhereInput
  }


  /**
   * Count Type AdditionalChargeReceiptCountOutputType
   */

  export type AdditionalChargeReceiptCountOutputType = {
    items: number
    services: number
  }

  export type AdditionalChargeReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | AdditionalChargeReceiptCountOutputTypeCountItemsArgs
    services?: boolean | AdditionalChargeReceiptCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * AdditionalChargeReceiptCountOutputType without action
   */
  export type AdditionalChargeReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceiptCountOutputType
     */
    select?: AdditionalChargeReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdditionalChargeReceiptCountOutputType without action
   */
  export type AdditionalChargeReceiptCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddChargeItemWhereInput
  }

  /**
   * AdditionalChargeReceiptCountOutputType without action
   */
  export type AdditionalChargeReceiptCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddChargeServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    additionalCharges: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    additionalCharges?: boolean | ServiceCountOutputTypeCountAdditionalChargesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAdditionalChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddChargeServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Floor
   */

  export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  export type FloorAvgAggregateOutputType = {
    floorNumber: number | null
  }

  export type FloorSumAggregateOutputType = {
    floorNumber: number | null
  }

  export type FloorMinAggregateOutputType = {
    floorNumber: number | null
  }

  export type FloorMaxAggregateOutputType = {
    floorNumber: number | null
  }

  export type FloorCountAggregateOutputType = {
    floorNumber: number
    _all: number
  }


  export type FloorAvgAggregateInputType = {
    floorNumber?: true
  }

  export type FloorSumAggregateInputType = {
    floorNumber?: true
  }

  export type FloorMinAggregateInputType = {
    floorNumber?: true
  }

  export type FloorMaxAggregateInputType = {
    floorNumber?: true
  }

  export type FloorCountAggregateInputType = {
    floorNumber?: true
    _all?: true
  }

  export type FloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floor to aggregate.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Floors
    **/
    _count?: true | FloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FloorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FloorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorMaxAggregateInputType
  }

  export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
        [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloor[P]>
      : GetScalarType<T[P], AggregateFloor[P]>
  }




  export type FloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithAggregationInput | FloorOrderByWithAggregationInput[]
    by: FloorScalarFieldEnum[] | FloorScalarFieldEnum
    having?: FloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorCountAggregateInputType | true
    _avg?: FloorAvgAggregateInputType
    _sum?: FloorSumAggregateInputType
    _min?: FloorMinAggregateInputType
    _max?: FloorMaxAggregateInputType
  }

  export type FloorGroupByOutputType = {
    floorNumber: number
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorGroupByOutputType[P]>
            : GetScalarType<T[P], FloorGroupByOutputType[P]>
        }
      >
    >


  export type FloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    floorNumber?: boolean
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>



  export type FloorSelectScalar = {
    floorNumber?: boolean
  }

  export type FloorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"floorNumber", ExtArgs["result"]["floor"]>
  export type FloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Floor"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      floorNumber: number
    }, ExtArgs["result"]["floor"]>
    composites: {}
  }

  type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = $Result.GetResult<Prisma.$FloorPayload, S>

  type FloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorCountAggregateInputType | true
    }

  export interface FloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Floor'], meta: { name: 'Floor' } }
    /**
     * Find zero or one Floor that matches the filter.
     * @param {FloorFindUniqueArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorFindUniqueArgs>(args: SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Floor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorFindUniqueOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorFindFirstArgs>(args?: SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Floors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Floors
     * const floors = await prisma.floor.findMany()
     * 
     * // Get first 10 Floors
     * const floors = await prisma.floor.findMany({ take: 10 })
     * 
     * // Only select the `floorNumber`
     * const floorWithFloorNumberOnly = await prisma.floor.findMany({ select: { floorNumber: true } })
     * 
     */
    findMany<T extends FloorFindManyArgs>(args?: SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Floor.
     * @param {FloorCreateArgs} args - Arguments to create a Floor.
     * @example
     * // Create one Floor
     * const Floor = await prisma.floor.create({
     *   data: {
     *     // ... data to create a Floor
     *   }
     * })
     * 
     */
    create<T extends FloorCreateArgs>(args: SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Floors.
     * @param {FloorCreateManyArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorCreateManyArgs>(args?: SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Floor.
     * @param {FloorDeleteArgs} args - Arguments to delete one Floor.
     * @example
     * // Delete one Floor
     * const Floor = await prisma.floor.delete({
     *   where: {
     *     // ... filter to delete one Floor
     *   }
     * })
     * 
     */
    delete<T extends FloorDeleteArgs>(args: SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Floor.
     * @param {FloorUpdateArgs} args - Arguments to update one Floor.
     * @example
     * // Update one Floor
     * const floor = await prisma.floor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorUpdateArgs>(args: SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Floors.
     * @param {FloorDeleteManyArgs} args - Arguments to filter Floors to delete.
     * @example
     * // Delete a few Floors
     * const { count } = await prisma.floor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorDeleteManyArgs>(args?: SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorUpdateManyArgs>(args: SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Floor.
     * @param {FloorUpsertArgs} args - Arguments to update or create a Floor.
     * @example
     * // Update or create a Floor
     * const floor = await prisma.floor.upsert({
     *   create: {
     *     // ... data to create a Floor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Floor we want to update
     *   }
     * })
     */
    upsert<T extends FloorUpsertArgs>(args: SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorCountArgs} args - Arguments to filter Floors to count.
     * @example
     * // Count the number of Floors
     * const count = await prisma.floor.count({
     *   where: {
     *     // ... the filter for the Floors we want to count
     *   }
     * })
    **/
    count<T extends FloorCountArgs>(
      args?: Subset<T, FloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FloorAggregateArgs>(args: Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>

    /**
     * Group by Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorGroupByArgs} args - Group by arguments.
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
      T extends FloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorGroupByArgs['orderBy'] }
        : { orderBy?: FloorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Floor model
   */
  readonly fields: FloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Floor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Floor$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Floor$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Floor model
   */
  interface FloorFieldRefs {
    readonly floorNumber: FieldRef<"Floor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Floor findUnique
   */
  export type FloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findUniqueOrThrow
   */
  export type FloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findFirst
   */
  export type FloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findFirstOrThrow
   */
  export type FloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findMany
   */
  export type FloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floors to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor create
   */
  export type FloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to create a Floor.
     */
    data: XOR<FloorCreateInput, FloorUncheckedCreateInput>
  }

  /**
   * Floor createMany
   */
  export type FloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Floor update
   */
  export type FloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to update a Floor.
     */
    data: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
    /**
     * Choose, which Floor to update.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor updateMany
   */
  export type FloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor upsert
   */
  export type FloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The filter to search for the Floor to update in case it exists.
     */
    where: FloorWhereUniqueInput
    /**
     * In case the Floor found by the `where` argument doesn't exist, create a new Floor with this data.
     */
    create: XOR<FloorCreateInput, FloorUncheckedCreateInput>
    /**
     * In case the Floor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
  }

  /**
   * Floor delete
   */
  export type FloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter which Floor to delete.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor deleteMany
   */
  export type FloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floors to delete
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to delete.
     */
    limit?: number
  }

  /**
   * Floor.rooms
   */
  export type Floor$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Floor without action
   */
  export type FloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
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
    priceWithBreakfast: number | null
    priceWithoutBreakfast: number | null
    pax: number | null
  }

  export type RoomTypeSumAggregateOutputType = {
    id: number | null
    priceWithBreakfast: number | null
    priceWithoutBreakfast: number | null
    pax: number | null
  }

  export type RoomTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    priceWithBreakfast: number | null
    priceWithoutBreakfast: number | null
    pax: number | null
  }

  export type RoomTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    priceWithBreakfast: number | null
    priceWithoutBreakfast: number | null
    pax: number | null
  }

  export type RoomTypeCountAggregateOutputType = {
    id: number
    name: number
    priceWithBreakfast: number
    priceWithoutBreakfast: number
    pax: number
    _all: number
  }


  export type RoomTypeAvgAggregateInputType = {
    id?: true
    priceWithBreakfast?: true
    priceWithoutBreakfast?: true
    pax?: true
  }

  export type RoomTypeSumAggregateInputType = {
    id?: true
    priceWithBreakfast?: true
    priceWithoutBreakfast?: true
    pax?: true
  }

  export type RoomTypeMinAggregateInputType = {
    id?: true
    name?: true
    priceWithBreakfast?: true
    priceWithoutBreakfast?: true
    pax?: true
  }

  export type RoomTypeMaxAggregateInputType = {
    id?: true
    name?: true
    priceWithBreakfast?: true
    priceWithoutBreakfast?: true
    pax?: true
  }

  export type RoomTypeCountAggregateInputType = {
    id?: true
    name?: true
    priceWithBreakfast?: true
    priceWithoutBreakfast?: true
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
    priceWithBreakfast: number
    priceWithoutBreakfast: number
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
    priceWithBreakfast?: boolean
    priceWithoutBreakfast?: boolean
    pax?: boolean
    rooms?: boolean | RoomType$roomsArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>



  export type RoomTypeSelectScalar = {
    id?: boolean
    name?: boolean
    priceWithBreakfast?: boolean
    priceWithoutBreakfast?: boolean
    pax?: boolean
  }

  export type RoomTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priceWithBreakfast" | "priceWithoutBreakfast" | "pax", ExtArgs["result"]["roomType"]>
  export type RoomTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomType$roomsArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomType"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      priceWithBreakfast: number
      priceWithoutBreakfast: number
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
    rooms<T extends RoomType$roomsArgs<ExtArgs> = {}>(args?: Subset<T, RoomType$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly priceWithBreakfast: FieldRef<"RoomType", 'Float'>
    readonly priceWithoutBreakfast: FieldRef<"RoomType", 'Float'>
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
   * RoomType.rooms
   */
  export type RoomType$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    label: string | null
  }

  export type RoomStatusMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type RoomStatusCountAggregateOutputType = {
    id: number
    label: number
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
    label?: true
  }

  export type RoomStatusMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type RoomStatusCountAggregateInputType = {
    id?: true
    label?: true
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
    label: string
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
    label?: boolean
    rooms?: boolean | RoomStatus$roomsArgs<ExtArgs>
    _count?: boolean | RoomStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomStatus"]>



  export type RoomStatusSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type RoomStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["roomStatus"]>
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
      label: string
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
    readonly label: FieldRef<"RoomStatus", 'String'>
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
    floorNumber: number | null
    roomTypeId: number | null
    statusId: number | null
    sessionId: number | null
  }

  export type RoomSumAggregateOutputType = {
    floorNumber: number | null
    roomTypeId: number | null
    statusId: number | null
    sessionId: number | null
  }

  export type RoomMinAggregateOutputType = {
    roomNumber: string | null
    floorNumber: number | null
    roomTypeId: number | null
    statusId: number | null
    sessionId: number | null
  }

  export type RoomMaxAggregateOutputType = {
    roomNumber: string | null
    floorNumber: number | null
    roomTypeId: number | null
    statusId: number | null
    sessionId: number | null
  }

  export type RoomCountAggregateOutputType = {
    roomNumber: number
    floorNumber: number
    roomTypeId: number
    statusId: number
    sessionId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    floorNumber?: true
    roomTypeId?: true
    statusId?: true
    sessionId?: true
  }

  export type RoomSumAggregateInputType = {
    floorNumber?: true
    roomTypeId?: true
    statusId?: true
    sessionId?: true
  }

  export type RoomMinAggregateInputType = {
    roomNumber?: true
    floorNumber?: true
    roomTypeId?: true
    statusId?: true
    sessionId?: true
  }

  export type RoomMaxAggregateInputType = {
    roomNumber?: true
    floorNumber?: true
    roomTypeId?: true
    statusId?: true
    sessionId?: true
  }

  export type RoomCountAggregateInputType = {
    roomNumber?: true
    floorNumber?: true
    roomTypeId?: true
    statusId?: true
    sessionId?: true
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
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    statusId: number | null
    sessionId: number | null
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
    roomNumber?: boolean
    floorNumber?: boolean
    roomTypeId?: boolean
    statusId?: boolean
    sessionId?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    status?: boolean | Room$statusArgs<ExtArgs>
    miniBar?: boolean | Room$miniBarArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    receipts?: boolean | Room$receiptsArgs<ExtArgs>
    session?: boolean | Room$sessionArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    roomNumber?: boolean
    floorNumber?: boolean
    roomTypeId?: boolean
    statusId?: boolean
    sessionId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roomNumber" | "floorNumber" | "roomTypeId" | "statusId" | "sessionId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    status?: boolean | Room$statusArgs<ExtArgs>
    miniBar?: boolean | Room$miniBarArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    receipts?: boolean | Room$receiptsArgs<ExtArgs>
    session?: boolean | Room$sessionArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      floor: Prisma.$FloorPayload<ExtArgs>
      roomType: Prisma.$RoomTypePayload<ExtArgs>
      status: Prisma.$RoomStatusPayload<ExtArgs> | null
      miniBar: Prisma.$MiniBarPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      receipts: Prisma.$ReceiptPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roomNumber: string
      floorNumber: number
      roomTypeId: number
      statusId: number | null
      sessionId: number | null
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
     * // Only select the `roomNumber`
     * const roomWithRoomNumberOnly = await prisma.room.findMany({ select: { roomNumber: true } })
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
    floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roomType<T extends RoomTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypeDefaultArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends Room$statusArgs<ExtArgs> = {}>(args?: Subset<T, Room$statusArgs<ExtArgs>>): Prisma__RoomStatusClient<$Result.GetResult<Prisma.$RoomStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    miniBar<T extends Room$miniBarArgs<ExtArgs> = {}>(args?: Subset<T, Room$miniBarArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receipts<T extends Room$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, Room$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends Room$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Room$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly roomNumber: FieldRef<"Room", 'String'>
    readonly floorNumber: FieldRef<"Room", 'Int'>
    readonly roomTypeId: FieldRef<"Room", 'Int'>
    readonly statusId: FieldRef<"Room", 'Int'>
    readonly sessionId: FieldRef<"Room", 'Int'>
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
   * Room.status
   */
  export type Room$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: RoomStatusWhereInput
  }

  /**
   * Room.miniBar
   */
  export type Room$miniBarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Room.bookings
   */
  export type Room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Room.receipts
   */
  export type Room$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    where?: ReceiptWhereInput
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    cursor?: ReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Room.session
   */
  export type Room$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    numberOfExtraBeds: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    numberOfExtraBeds: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    numberOfExtraBeds: number | null
    actualCheckIn: Date | null
    actualCheckOut: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    numberOfExtraBeds: number | null
    actualCheckIn: Date | null
    actualCheckOut: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    roomNumber: number
    numberOfExtraBeds: number
    actualCheckIn: number
    actualCheckOut: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    numberOfExtraBeds?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    numberOfExtraBeds?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    roomNumber?: true
    numberOfExtraBeds?: true
    actualCheckIn?: true
    actualCheckOut?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    numberOfExtraBeds?: true
    actualCheckIn?: true
    actualCheckOut?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    roomNumber?: true
    numberOfExtraBeds?: true
    actualCheckIn?: true
    actualCheckOut?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    roomNumber: string
    numberOfExtraBeds: number
    actualCheckIn: Date
    actualCheckOut: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    numberOfExtraBeds?: boolean
    actualCheckIn?: boolean
    actualCheckOut?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guests?: boolean | Session$guestsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    numberOfExtraBeds?: boolean
    actualCheckIn?: boolean
    actualCheckOut?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "numberOfExtraBeds" | "actualCheckIn" | "actualCheckOut" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guests?: boolean | Session$guestsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      guests: Prisma.$GuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: string
      numberOfExtraBeds: number
      actualCheckIn: Date
      actualCheckOut: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guests<T extends Session$guestsArgs<ExtArgs> = {}>(args?: Subset<T, Session$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly roomNumber: FieldRef<"Session", 'String'>
    readonly numberOfExtraBeds: FieldRef<"Session", 'Int'>
    readonly actualCheckIn: FieldRef<"Session", 'DateTime'>
    readonly actualCheckOut: FieldRef<"Session", 'DateTime'>
    readonly isActive: FieldRef<"Session", 'Boolean'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.guests
   */
  export type Session$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    cursor?: GuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    uid: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    nicCardNum: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    uid: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    nicCardNum: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    uid: number
    name: number
    phone: number
    email: number
    address: number
    nicCardNum: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    uid?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    nicCardNum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestMaxAggregateInputType = {
    uid?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    nicCardNum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestCountAggregateInputType = {
    uid?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    nicCardNum?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    uid: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    nicCardNum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | Guest$sessionsArgs<ExtArgs>
    bookings?: boolean | Guest$bookingsArgs<ExtArgs>
    receipts?: boolean | Guest$receiptsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>



  export type GuestSelectScalar = {
    uid?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    nicCardNum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "name" | "phone" | "email" | "address" | "nicCardNum" | "createdAt" | "updatedAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Guest$sessionsArgs<ExtArgs>
    bookings?: boolean | Guest$bookingsArgs<ExtArgs>
    receipts?: boolean | Guest$receiptsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      receipts: Prisma.$ReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      name: string
      phone: string
      email: string
      address: string
      nicCardNum: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const guestWithUidOnly = await prisma.guest.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
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
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Guest$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Guest$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receipts<T extends Guest$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly uid: FieldRef<"Guest", 'String'>
    readonly name: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly address: FieldRef<"Guest", 'String'>
    readonly nicCardNum: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
    readonly updatedAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.sessions
   */
  export type Guest$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Guest.bookings
   */
  export type Guest$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Guest.receipts
   */
  export type Guest$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    where?: ReceiptWhereInput
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    cursor?: ReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
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
  }

  export type MiniBarSumAggregateOutputType = {
    id: number | null
  }

  export type MiniBarMinAggregateOutputType = {
    id: number | null
    roomNumber: string | null
  }

  export type MiniBarMaxAggregateOutputType = {
    id: number | null
    roomNumber: string | null
  }

  export type MiniBarCountAggregateOutputType = {
    id: number
    roomNumber: number
    _all: number
  }


  export type MiniBarAvgAggregateInputType = {
    id?: true
  }

  export type MiniBarSumAggregateInputType = {
    id?: true
  }

  export type MiniBarMinAggregateInputType = {
    id?: true
    roomNumber?: true
  }

  export type MiniBarMaxAggregateInputType = {
    id?: true
    roomNumber?: true
  }

  export type MiniBarCountAggregateInputType = {
    id?: true
    roomNumber?: true
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
    roomNumber: string
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
    room?: boolean | RoomDefaultArgs<ExtArgs>
    items?: boolean | MiniBar$itemsArgs<ExtArgs>
    _count?: boolean | MiniBarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miniBar"]>



  export type MiniBarSelectScalar = {
    id?: boolean
    roomNumber?: boolean
  }

  export type MiniBarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber", ExtArgs["result"]["miniBar"]>
  export type MiniBarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    items?: boolean | MiniBar$itemsArgs<ExtArgs>
    _count?: boolean | MiniBarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MiniBarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MiniBar"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      items: Prisma.$MiniBarItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: string
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
    items<T extends MiniBar$itemsArgs<ExtArgs> = {}>(args?: Subset<T, MiniBar$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly roomNumber: FieldRef<"MiniBar", 'String'>
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
   * MiniBar.items
   */
  export type MiniBar$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    where?: MiniBarItemWhereInput
    orderBy?: MiniBarItemOrderByWithRelationInput | MiniBarItemOrderByWithRelationInput[]
    cursor?: MiniBarItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniBarItemScalarFieldEnum | MiniBarItemScalarFieldEnum[]
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
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    price: number
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
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
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
    miniBarItems?: boolean | Item$miniBarItemsArgs<ExtArgs>
    inventory?: boolean | Item$inventoryArgs<ExtArgs>
    additionalCharges?: boolean | Item$additionalChargesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miniBarItems?: boolean | Item$miniBarItemsArgs<ExtArgs>
    inventory?: boolean | Item$inventoryArgs<ExtArgs>
    additionalCharges?: boolean | Item$additionalChargesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      miniBarItems: Prisma.$MiniBarItemPayload<ExtArgs>[]
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      additionalCharges: Prisma.$AddChargeItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
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
    miniBarItems<T extends Item$miniBarItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$miniBarItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Item$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Item$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    additionalCharges<T extends Item$additionalChargesArgs<ExtArgs> = {}>(args?: Subset<T, Item$additionalChargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Item.miniBarItems
   */
  export type Item$miniBarItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    where?: MiniBarItemWhereInput
    orderBy?: MiniBarItemOrderByWithRelationInput | MiniBarItemOrderByWithRelationInput[]
    cursor?: MiniBarItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniBarItemScalarFieldEnum | MiniBarItemScalarFieldEnum[]
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
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Item.additionalCharges
   */
  export type Item$additionalChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    where?: AddChargeItemWhereInput
    orderBy?: AddChargeItemOrderByWithRelationInput | AddChargeItemOrderByWithRelationInput[]
    cursor?: AddChargeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddChargeItemScalarFieldEnum | AddChargeItemScalarFieldEnum[]
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
   * Model MiniBarItem
   */

  export type AggregateMiniBarItem = {
    _count: MiniBarItemCountAggregateOutputType | null
    _avg: MiniBarItemAvgAggregateOutputType | null
    _sum: MiniBarItemSumAggregateOutputType | null
    _min: MiniBarItemMinAggregateOutputType | null
    _max: MiniBarItemMaxAggregateOutputType | null
  }

  export type MiniBarItemAvgAggregateOutputType = {
    miniBarId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarItemSumAggregateOutputType = {
    miniBarId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarItemMinAggregateOutputType = {
    miniBarId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarItemMaxAggregateOutputType = {
    miniBarId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type MiniBarItemCountAggregateOutputType = {
    miniBarId: number
    itemId: number
    quantity: number
    _all: number
  }


  export type MiniBarItemAvgAggregateInputType = {
    miniBarId?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarItemSumAggregateInputType = {
    miniBarId?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarItemMinAggregateInputType = {
    miniBarId?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarItemMaxAggregateInputType = {
    miniBarId?: true
    itemId?: true
    quantity?: true
  }

  export type MiniBarItemCountAggregateInputType = {
    miniBarId?: true
    itemId?: true
    quantity?: true
    _all?: true
  }

  export type MiniBarItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiniBarItem to aggregate.
     */
    where?: MiniBarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarItems to fetch.
     */
    orderBy?: MiniBarItemOrderByWithRelationInput | MiniBarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiniBarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MiniBarItems
    **/
    _count?: true | MiniBarItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiniBarItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiniBarItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiniBarItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiniBarItemMaxAggregateInputType
  }

  export type GetMiniBarItemAggregateType<T extends MiniBarItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMiniBarItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiniBarItem[P]>
      : GetScalarType<T[P], AggregateMiniBarItem[P]>
  }




  export type MiniBarItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiniBarItemWhereInput
    orderBy?: MiniBarItemOrderByWithAggregationInput | MiniBarItemOrderByWithAggregationInput[]
    by: MiniBarItemScalarFieldEnum[] | MiniBarItemScalarFieldEnum
    having?: MiniBarItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiniBarItemCountAggregateInputType | true
    _avg?: MiniBarItemAvgAggregateInputType
    _sum?: MiniBarItemSumAggregateInputType
    _min?: MiniBarItemMinAggregateInputType
    _max?: MiniBarItemMaxAggregateInputType
  }

  export type MiniBarItemGroupByOutputType = {
    miniBarId: number
    itemId: number
    quantity: number
    _count: MiniBarItemCountAggregateOutputType | null
    _avg: MiniBarItemAvgAggregateOutputType | null
    _sum: MiniBarItemSumAggregateOutputType | null
    _min: MiniBarItemMinAggregateOutputType | null
    _max: MiniBarItemMaxAggregateOutputType | null
  }

  type GetMiniBarItemGroupByPayload<T extends MiniBarItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiniBarItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiniBarItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiniBarItemGroupByOutputType[P]>
            : GetScalarType<T[P], MiniBarItemGroupByOutputType[P]>
        }
      >
    >


  export type MiniBarItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    miniBarId?: boolean
    itemId?: boolean
    quantity?: boolean
    miniBar?: boolean | MiniBarDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miniBarItem"]>



  export type MiniBarItemSelectScalar = {
    miniBarId?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type MiniBarItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"miniBarId" | "itemId" | "quantity", ExtArgs["result"]["miniBarItem"]>
  export type MiniBarItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miniBar?: boolean | MiniBarDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $MiniBarItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MiniBarItem"
    objects: {
      miniBar: Prisma.$MiniBarPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      miniBarId: number
      itemId: number
      quantity: number
    }, ExtArgs["result"]["miniBarItem"]>
    composites: {}
  }

  type MiniBarItemGetPayload<S extends boolean | null | undefined | MiniBarItemDefaultArgs> = $Result.GetResult<Prisma.$MiniBarItemPayload, S>

  type MiniBarItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MiniBarItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MiniBarItemCountAggregateInputType | true
    }

  export interface MiniBarItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MiniBarItem'], meta: { name: 'MiniBarItem' } }
    /**
     * Find zero or one MiniBarItem that matches the filter.
     * @param {MiniBarItemFindUniqueArgs} args - Arguments to find a MiniBarItem
     * @example
     * // Get one MiniBarItem
     * const miniBarItem = await prisma.miniBarItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MiniBarItemFindUniqueArgs>(args: SelectSubset<T, MiniBarItemFindUniqueArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MiniBarItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MiniBarItemFindUniqueOrThrowArgs} args - Arguments to find a MiniBarItem
     * @example
     * // Get one MiniBarItem
     * const miniBarItem = await prisma.miniBarItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MiniBarItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MiniBarItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiniBarItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarItemFindFirstArgs} args - Arguments to find a MiniBarItem
     * @example
     * // Get one MiniBarItem
     * const miniBarItem = await prisma.miniBarItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MiniBarItemFindFirstArgs>(args?: SelectSubset<T, MiniBarItemFindFirstArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MiniBarItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarItemFindFirstOrThrowArgs} args - Arguments to find a MiniBarItem
     * @example
     * // Get one MiniBarItem
     * const miniBarItem = await prisma.miniBarItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MiniBarItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MiniBarItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MiniBarItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MiniBarItems
     * const miniBarItems = await prisma.miniBarItem.findMany()
     * 
     * // Get first 10 MiniBarItems
     * const miniBarItems = await prisma.miniBarItem.findMany({ take: 10 })
     * 
     * // Only select the `miniBarId`
     * const miniBarItemWithMiniBarIdOnly = await prisma.miniBarItem.findMany({ select: { miniBarId: true } })
     * 
     */
    findMany<T extends MiniBarItemFindManyArgs>(args?: SelectSubset<T, MiniBarItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MiniBarItem.
     * @param {MiniBarItemCreateArgs} args - Arguments to create a MiniBarItem.
     * @example
     * // Create one MiniBarItem
     * const MiniBarItem = await prisma.miniBarItem.create({
     *   data: {
     *     // ... data to create a MiniBarItem
     *   }
     * })
     * 
     */
    create<T extends MiniBarItemCreateArgs>(args: SelectSubset<T, MiniBarItemCreateArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MiniBarItems.
     * @param {MiniBarItemCreateManyArgs} args - Arguments to create many MiniBarItems.
     * @example
     * // Create many MiniBarItems
     * const miniBarItem = await prisma.miniBarItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MiniBarItemCreateManyArgs>(args?: SelectSubset<T, MiniBarItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MiniBarItem.
     * @param {MiniBarItemDeleteArgs} args - Arguments to delete one MiniBarItem.
     * @example
     * // Delete one MiniBarItem
     * const MiniBarItem = await prisma.miniBarItem.delete({
     *   where: {
     *     // ... filter to delete one MiniBarItem
     *   }
     * })
     * 
     */
    delete<T extends MiniBarItemDeleteArgs>(args: SelectSubset<T, MiniBarItemDeleteArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MiniBarItem.
     * @param {MiniBarItemUpdateArgs} args - Arguments to update one MiniBarItem.
     * @example
     * // Update one MiniBarItem
     * const miniBarItem = await prisma.miniBarItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MiniBarItemUpdateArgs>(args: SelectSubset<T, MiniBarItemUpdateArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MiniBarItems.
     * @param {MiniBarItemDeleteManyArgs} args - Arguments to filter MiniBarItems to delete.
     * @example
     * // Delete a few MiniBarItems
     * const { count } = await prisma.miniBarItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MiniBarItemDeleteManyArgs>(args?: SelectSubset<T, MiniBarItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MiniBarItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MiniBarItems
     * const miniBarItem = await prisma.miniBarItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MiniBarItemUpdateManyArgs>(args: SelectSubset<T, MiniBarItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MiniBarItem.
     * @param {MiniBarItemUpsertArgs} args - Arguments to update or create a MiniBarItem.
     * @example
     * // Update or create a MiniBarItem
     * const miniBarItem = await prisma.miniBarItem.upsert({
     *   create: {
     *     // ... data to create a MiniBarItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MiniBarItem we want to update
     *   }
     * })
     */
    upsert<T extends MiniBarItemUpsertArgs>(args: SelectSubset<T, MiniBarItemUpsertArgs<ExtArgs>>): Prisma__MiniBarItemClient<$Result.GetResult<Prisma.$MiniBarItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MiniBarItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarItemCountArgs} args - Arguments to filter MiniBarItems to count.
     * @example
     * // Count the number of MiniBarItems
     * const count = await prisma.miniBarItem.count({
     *   where: {
     *     // ... the filter for the MiniBarItems we want to count
     *   }
     * })
    **/
    count<T extends MiniBarItemCountArgs>(
      args?: Subset<T, MiniBarItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiniBarItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MiniBarItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MiniBarItemAggregateArgs>(args: Subset<T, MiniBarItemAggregateArgs>): Prisma.PrismaPromise<GetMiniBarItemAggregateType<T>>

    /**
     * Group by MiniBarItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniBarItemGroupByArgs} args - Group by arguments.
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
      T extends MiniBarItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiniBarItemGroupByArgs['orderBy'] }
        : { orderBy?: MiniBarItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MiniBarItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiniBarItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MiniBarItem model
   */
  readonly fields: MiniBarItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MiniBarItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiniBarItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    miniBar<T extends MiniBarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MiniBarDefaultArgs<ExtArgs>>): Prisma__MiniBarClient<$Result.GetResult<Prisma.$MiniBarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MiniBarItem model
   */
  interface MiniBarItemFieldRefs {
    readonly miniBarId: FieldRef<"MiniBarItem", 'Int'>
    readonly itemId: FieldRef<"MiniBarItem", 'Int'>
    readonly quantity: FieldRef<"MiniBarItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MiniBarItem findUnique
   */
  export type MiniBarItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarItem to fetch.
     */
    where: MiniBarItemWhereUniqueInput
  }

  /**
   * MiniBarItem findUniqueOrThrow
   */
  export type MiniBarItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarItem to fetch.
     */
    where: MiniBarItemWhereUniqueInput
  }

  /**
   * MiniBarItem findFirst
   */
  export type MiniBarItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarItem to fetch.
     */
    where?: MiniBarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarItems to fetch.
     */
    orderBy?: MiniBarItemOrderByWithRelationInput | MiniBarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiniBarItems.
     */
    cursor?: MiniBarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiniBarItems.
     */
    distinct?: MiniBarItemScalarFieldEnum | MiniBarItemScalarFieldEnum[]
  }

  /**
   * MiniBarItem findFirstOrThrow
   */
  export type MiniBarItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarItem to fetch.
     */
    where?: MiniBarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarItems to fetch.
     */
    orderBy?: MiniBarItemOrderByWithRelationInput | MiniBarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiniBarItems.
     */
    cursor?: MiniBarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiniBarItems.
     */
    distinct?: MiniBarItemScalarFieldEnum | MiniBarItemScalarFieldEnum[]
  }

  /**
   * MiniBarItem findMany
   */
  export type MiniBarItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * Filter, which MiniBarItems to fetch.
     */
    where?: MiniBarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiniBarItems to fetch.
     */
    orderBy?: MiniBarItemOrderByWithRelationInput | MiniBarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MiniBarItems.
     */
    cursor?: MiniBarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiniBarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiniBarItems.
     */
    skip?: number
    distinct?: MiniBarItemScalarFieldEnum | MiniBarItemScalarFieldEnum[]
  }

  /**
   * MiniBarItem create
   */
  export type MiniBarItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MiniBarItem.
     */
    data: XOR<MiniBarItemCreateInput, MiniBarItemUncheckedCreateInput>
  }

  /**
   * MiniBarItem createMany
   */
  export type MiniBarItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MiniBarItems.
     */
    data: MiniBarItemCreateManyInput | MiniBarItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MiniBarItem update
   */
  export type MiniBarItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MiniBarItem.
     */
    data: XOR<MiniBarItemUpdateInput, MiniBarItemUncheckedUpdateInput>
    /**
     * Choose, which MiniBarItem to update.
     */
    where: MiniBarItemWhereUniqueInput
  }

  /**
   * MiniBarItem updateMany
   */
  export type MiniBarItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MiniBarItems.
     */
    data: XOR<MiniBarItemUpdateManyMutationInput, MiniBarItemUncheckedUpdateManyInput>
    /**
     * Filter which MiniBarItems to update
     */
    where?: MiniBarItemWhereInput
    /**
     * Limit how many MiniBarItems to update.
     */
    limit?: number
  }

  /**
   * MiniBarItem upsert
   */
  export type MiniBarItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MiniBarItem to update in case it exists.
     */
    where: MiniBarItemWhereUniqueInput
    /**
     * In case the MiniBarItem found by the `where` argument doesn't exist, create a new MiniBarItem with this data.
     */
    create: XOR<MiniBarItemCreateInput, MiniBarItemUncheckedCreateInput>
    /**
     * In case the MiniBarItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiniBarItemUpdateInput, MiniBarItemUncheckedUpdateInput>
  }

  /**
   * MiniBarItem delete
   */
  export type MiniBarItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
    /**
     * Filter which MiniBarItem to delete.
     */
    where: MiniBarItemWhereUniqueInput
  }

  /**
   * MiniBarItem deleteMany
   */
  export type MiniBarItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiniBarItems to delete
     */
    where?: MiniBarItemWhereInput
    /**
     * Limit how many MiniBarItems to delete.
     */
    limit?: number
  }

  /**
   * MiniBarItem without action
   */
  export type MiniBarItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniBarItem
     */
    select?: MiniBarItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MiniBarItem
     */
    omit?: MiniBarItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiniBarItemInclude<ExtArgs> | null
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
  }, ExtArgs["result"]["inventory"]>



  export type InventorySelectScalar = {
    id?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "quantity", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
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
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    guestId: string | null
    contactName: string | null
    contactPhone: string | null
    contactEmail: string | null
    estCheckIn: Date | null
    estCheckOut: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    guestId: string | null
    contactName: string | null
    contactPhone: string | null
    contactEmail: string | null
    estCheckIn: Date | null
    estCheckOut: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    roomNumber: number
    guestId: number
    contactName: number
    contactPhone: number
    contactEmail: number
    estCheckIn: number
    estCheckOut: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    roomNumber?: true
    guestId?: true
    contactName?: true
    contactPhone?: true
    contactEmail?: true
    estCheckIn?: true
    estCheckOut?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    guestId?: true
    contactName?: true
    contactPhone?: true
    contactEmail?: true
    estCheckIn?: true
    estCheckOut?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    roomNumber?: true
    guestId?: true
    contactName?: true
    contactPhone?: true
    contactEmail?: true
    estCheckIn?: true
    estCheckOut?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    roomNumber: string
    guestId: string | null
    contactName: string
    contactPhone: string
    contactEmail: string | null
    estCheckIn: Date
    estCheckOut: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    guestId?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    estCheckIn?: boolean
    estCheckOut?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guest?: boolean | Booking$guestArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    guestId?: boolean
    contactName?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    estCheckIn?: boolean
    estCheckOut?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "guestId" | "contactName" | "contactPhone" | "contactEmail" | "estCheckIn" | "estCheckOut", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guest?: boolean | Booking$guestArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      guest: Prisma.$GuestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: string
      guestId: string | null
      contactName: string
      contactPhone: string
      contactEmail: string | null
      estCheckIn: Date
      estCheckOut: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends Booking$guestArgs<ExtArgs> = {}>(args?: Subset<T, Booking$guestArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly roomNumber: FieldRef<"Booking", 'String'>
    readonly guestId: FieldRef<"Booking", 'String'>
    readonly contactName: FieldRef<"Booking", 'String'>
    readonly contactPhone: FieldRef<"Booking", 'String'>
    readonly contactEmail: FieldRef<"Booking", 'String'>
    readonly estCheckIn: FieldRef<"Booking", 'DateTime'>
    readonly estCheckOut: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.guest
   */
  export type Booking$guestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Receipt
   */

  export type AggregateReceipt = {
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  export type ReceiptAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    amountPaid: number | null
  }

  export type ReceiptSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    amountPaid: number | null
  }

  export type ReceiptMinAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    guestId: string | null
    totalPrice: number | null
    amountPaid: number | null
    paidBy: string | null
  }

  export type ReceiptMaxAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    guestId: string | null
    totalPrice: number | null
    amountPaid: number | null
    paidBy: string | null
  }

  export type ReceiptCountAggregateOutputType = {
    id: number
    roomNumber: number
    guestId: number
    totalPrice: number
    amountPaid: number
    paidBy: number
    _all: number
  }


  export type ReceiptAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    amountPaid?: true
  }

  export type ReceiptSumAggregateInputType = {
    id?: true
    totalPrice?: true
    amountPaid?: true
  }

  export type ReceiptMinAggregateInputType = {
    id?: true
    roomNumber?: true
    guestId?: true
    totalPrice?: true
    amountPaid?: true
    paidBy?: true
  }

  export type ReceiptMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    guestId?: true
    totalPrice?: true
    amountPaid?: true
    paidBy?: true
  }

  export type ReceiptCountAggregateInputType = {
    id?: true
    roomNumber?: true
    guestId?: true
    totalPrice?: true
    amountPaid?: true
    paidBy?: true
    _all?: true
  }

  export type ReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receipt to aggregate.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receipts
    **/
    _count?: true | ReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiptMaxAggregateInputType
  }

  export type GetReceiptAggregateType<T extends ReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceipt[P]>
      : GetScalarType<T[P], AggregateReceipt[P]>
  }




  export type ReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiptWhereInput
    orderBy?: ReceiptOrderByWithAggregationInput | ReceiptOrderByWithAggregationInput[]
    by: ReceiptScalarFieldEnum[] | ReceiptScalarFieldEnum
    having?: ReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiptCountAggregateInputType | true
    _avg?: ReceiptAvgAggregateInputType
    _sum?: ReceiptSumAggregateInputType
    _min?: ReceiptMinAggregateInputType
    _max?: ReceiptMaxAggregateInputType
  }

  export type ReceiptGroupByOutputType = {
    id: number
    roomNumber: string
    guestId: string
    totalPrice: number
    amountPaid: number
    paidBy: string
    _count: ReceiptCountAggregateOutputType | null
    _avg: ReceiptAvgAggregateOutputType | null
    _sum: ReceiptSumAggregateOutputType | null
    _min: ReceiptMinAggregateOutputType | null
    _max: ReceiptMaxAggregateOutputType | null
  }

  type GetReceiptGroupByPayload<T extends ReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiptGroupByOutputType[P]>
        }
      >
    >


  export type ReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    guestId?: boolean
    totalPrice?: boolean
    amountPaid?: boolean
    paidBy?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    additionalCharges?: boolean | Receipt$additionalChargesArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receipt"]>



  export type ReceiptSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    guestId?: boolean
    totalPrice?: boolean
    amountPaid?: boolean
    paidBy?: boolean
  }

  export type ReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "guestId" | "totalPrice" | "amountPaid" | "paidBy", ExtArgs["result"]["receipt"]>
  export type ReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    additionalCharges?: boolean | Receipt$additionalChargesArgs<ExtArgs>
    _count?: boolean | ReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receipt"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      guest: Prisma.$GuestPayload<ExtArgs>
      additionalCharges: Prisma.$AdditionalChargeReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: string
      guestId: string
      totalPrice: number
      amountPaid: number
      paidBy: string
    }, ExtArgs["result"]["receipt"]>
    composites: {}
  }

  type ReceiptGetPayload<S extends boolean | null | undefined | ReceiptDefaultArgs> = $Result.GetResult<Prisma.$ReceiptPayload, S>

  type ReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceiptCountAggregateInputType | true
    }

  export interface ReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receipt'], meta: { name: 'Receipt' } }
    /**
     * Find zero or one Receipt that matches the filter.
     * @param {ReceiptFindUniqueArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiptFindUniqueArgs>(args: SelectSubset<T, ReceiptFindUniqueArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceiptFindUniqueOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptFindFirstArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiptFindFirstArgs>(args?: SelectSubset<T, ReceiptFindFirstArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptFindFirstOrThrowArgs} args - Arguments to find a Receipt
     * @example
     * // Get one Receipt
     * const receipt = await prisma.receipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receipts
     * const receipts = await prisma.receipt.findMany()
     * 
     * // Get first 10 Receipts
     * const receipts = await prisma.receipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiptWithIdOnly = await prisma.receipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceiptFindManyArgs>(args?: SelectSubset<T, ReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receipt.
     * @param {ReceiptCreateArgs} args - Arguments to create a Receipt.
     * @example
     * // Create one Receipt
     * const Receipt = await prisma.receipt.create({
     *   data: {
     *     // ... data to create a Receipt
     *   }
     * })
     * 
     */
    create<T extends ReceiptCreateArgs>(args: SelectSubset<T, ReceiptCreateArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receipts.
     * @param {ReceiptCreateManyArgs} args - Arguments to create many Receipts.
     * @example
     * // Create many Receipts
     * const receipt = await prisma.receipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiptCreateManyArgs>(args?: SelectSubset<T, ReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Receipt.
     * @param {ReceiptDeleteArgs} args - Arguments to delete one Receipt.
     * @example
     * // Delete one Receipt
     * const Receipt = await prisma.receipt.delete({
     *   where: {
     *     // ... filter to delete one Receipt
     *   }
     * })
     * 
     */
    delete<T extends ReceiptDeleteArgs>(args: SelectSubset<T, ReceiptDeleteArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receipt.
     * @param {ReceiptUpdateArgs} args - Arguments to update one Receipt.
     * @example
     * // Update one Receipt
     * const receipt = await prisma.receipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiptUpdateArgs>(args: SelectSubset<T, ReceiptUpdateArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receipts.
     * @param {ReceiptDeleteManyArgs} args - Arguments to filter Receipts to delete.
     * @example
     * // Delete a few Receipts
     * const { count } = await prisma.receipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiptDeleteManyArgs>(args?: SelectSubset<T, ReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receipts
     * const receipt = await prisma.receipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiptUpdateManyArgs>(args: SelectSubset<T, ReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Receipt.
     * @param {ReceiptUpsertArgs} args - Arguments to update or create a Receipt.
     * @example
     * // Update or create a Receipt
     * const receipt = await prisma.receipt.upsert({
     *   create: {
     *     // ... data to create a Receipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receipt we want to update
     *   }
     * })
     */
    upsert<T extends ReceiptUpsertArgs>(args: SelectSubset<T, ReceiptUpsertArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptCountArgs} args - Arguments to filter Receipts to count.
     * @example
     * // Count the number of Receipts
     * const count = await prisma.receipt.count({
     *   where: {
     *     // ... the filter for the Receipts we want to count
     *   }
     * })
    **/
    count<T extends ReceiptCountArgs>(
      args?: Subset<T, ReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceiptAggregateArgs>(args: Subset<T, ReceiptAggregateArgs>): Prisma.PrismaPromise<GetReceiptAggregateType<T>>

    /**
     * Group by Receipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiptGroupByArgs} args - Group by arguments.
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
      T extends ReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiptGroupByArgs['orderBy'] }
        : { orderBy?: ReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receipt model
   */
  readonly fields: ReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    additionalCharges<T extends Receipt$additionalChargesArgs<ExtArgs> = {}>(args?: Subset<T, Receipt$additionalChargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Receipt model
   */
  interface ReceiptFieldRefs {
    readonly id: FieldRef<"Receipt", 'Int'>
    readonly roomNumber: FieldRef<"Receipt", 'String'>
    readonly guestId: FieldRef<"Receipt", 'String'>
    readonly totalPrice: FieldRef<"Receipt", 'Float'>
    readonly amountPaid: FieldRef<"Receipt", 'Float'>
    readonly paidBy: FieldRef<"Receipt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Receipt findUnique
   */
  export type ReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt findUniqueOrThrow
   */
  export type ReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt findFirst
   */
  export type ReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receipts.
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Receipt findFirstOrThrow
   */
  export type ReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipt to fetch.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receipts.
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receipts.
     */
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Receipt findMany
   */
  export type ReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter, which Receipts to fetch.
     */
    where?: ReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receipts to fetch.
     */
    orderBy?: ReceiptOrderByWithRelationInput | ReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receipts.
     */
    cursor?: ReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receipts.
     */
    skip?: number
    distinct?: ReceiptScalarFieldEnum | ReceiptScalarFieldEnum[]
  }

  /**
   * Receipt create
   */
  export type ReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a Receipt.
     */
    data: XOR<ReceiptCreateInput, ReceiptUncheckedCreateInput>
  }

  /**
   * Receipt createMany
   */
  export type ReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receipts.
     */
    data: ReceiptCreateManyInput | ReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receipt update
   */
  export type ReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a Receipt.
     */
    data: XOR<ReceiptUpdateInput, ReceiptUncheckedUpdateInput>
    /**
     * Choose, which Receipt to update.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt updateMany
   */
  export type ReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receipts.
     */
    data: XOR<ReceiptUpdateManyMutationInput, ReceiptUncheckedUpdateManyInput>
    /**
     * Filter which Receipts to update
     */
    where?: ReceiptWhereInput
    /**
     * Limit how many Receipts to update.
     */
    limit?: number
  }

  /**
   * Receipt upsert
   */
  export type ReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the Receipt to update in case it exists.
     */
    where: ReceiptWhereUniqueInput
    /**
     * In case the Receipt found by the `where` argument doesn't exist, create a new Receipt with this data.
     */
    create: XOR<ReceiptCreateInput, ReceiptUncheckedCreateInput>
    /**
     * In case the Receipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiptUpdateInput, ReceiptUncheckedUpdateInput>
  }

  /**
   * Receipt delete
   */
  export type ReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
    /**
     * Filter which Receipt to delete.
     */
    where: ReceiptWhereUniqueInput
  }

  /**
   * Receipt deleteMany
   */
  export type ReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receipts to delete
     */
    where?: ReceiptWhereInput
    /**
     * Limit how many Receipts to delete.
     */
    limit?: number
  }

  /**
   * Receipt.additionalCharges
   */
  export type Receipt$additionalChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    where?: AdditionalChargeReceiptWhereInput
    orderBy?: AdditionalChargeReceiptOrderByWithRelationInput | AdditionalChargeReceiptOrderByWithRelationInput[]
    cursor?: AdditionalChargeReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdditionalChargeReceiptScalarFieldEnum | AdditionalChargeReceiptScalarFieldEnum[]
  }

  /**
   * Receipt without action
   */
  export type ReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receipt
     */
    select?: ReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receipt
     */
    omit?: ReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiptInclude<ExtArgs> | null
  }


  /**
   * Model AdditionalChargeReceipt
   */

  export type AggregateAdditionalChargeReceipt = {
    _count: AdditionalChargeReceiptCountAggregateOutputType | null
    _avg: AdditionalChargeReceiptAvgAggregateOutputType | null
    _sum: AdditionalChargeReceiptSumAggregateOutputType | null
    _min: AdditionalChargeReceiptMinAggregateOutputType | null
    _max: AdditionalChargeReceiptMaxAggregateOutputType | null
  }

  export type AdditionalChargeReceiptAvgAggregateOutputType = {
    id: number | null
    receiptId: number | null
  }

  export type AdditionalChargeReceiptSumAggregateOutputType = {
    id: number | null
    receiptId: number | null
  }

  export type AdditionalChargeReceiptMinAggregateOutputType = {
    id: number | null
    receiptId: number | null
    purchaseDate: Date | null
  }

  export type AdditionalChargeReceiptMaxAggregateOutputType = {
    id: number | null
    receiptId: number | null
    purchaseDate: Date | null
  }

  export type AdditionalChargeReceiptCountAggregateOutputType = {
    id: number
    receiptId: number
    purchaseDate: number
    _all: number
  }


  export type AdditionalChargeReceiptAvgAggregateInputType = {
    id?: true
    receiptId?: true
  }

  export type AdditionalChargeReceiptSumAggregateInputType = {
    id?: true
    receiptId?: true
  }

  export type AdditionalChargeReceiptMinAggregateInputType = {
    id?: true
    receiptId?: true
    purchaseDate?: true
  }

  export type AdditionalChargeReceiptMaxAggregateInputType = {
    id?: true
    receiptId?: true
    purchaseDate?: true
  }

  export type AdditionalChargeReceiptCountAggregateInputType = {
    id?: true
    receiptId?: true
    purchaseDate?: true
    _all?: true
  }

  export type AdditionalChargeReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdditionalChargeReceipt to aggregate.
     */
    where?: AdditionalChargeReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalChargeReceipts to fetch.
     */
    orderBy?: AdditionalChargeReceiptOrderByWithRelationInput | AdditionalChargeReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdditionalChargeReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalChargeReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalChargeReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdditionalChargeReceipts
    **/
    _count?: true | AdditionalChargeReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdditionalChargeReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdditionalChargeReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdditionalChargeReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdditionalChargeReceiptMaxAggregateInputType
  }

  export type GetAdditionalChargeReceiptAggregateType<T extends AdditionalChargeReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateAdditionalChargeReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdditionalChargeReceipt[P]>
      : GetScalarType<T[P], AggregateAdditionalChargeReceipt[P]>
  }




  export type AdditionalChargeReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdditionalChargeReceiptWhereInput
    orderBy?: AdditionalChargeReceiptOrderByWithAggregationInput | AdditionalChargeReceiptOrderByWithAggregationInput[]
    by: AdditionalChargeReceiptScalarFieldEnum[] | AdditionalChargeReceiptScalarFieldEnum
    having?: AdditionalChargeReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdditionalChargeReceiptCountAggregateInputType | true
    _avg?: AdditionalChargeReceiptAvgAggregateInputType
    _sum?: AdditionalChargeReceiptSumAggregateInputType
    _min?: AdditionalChargeReceiptMinAggregateInputType
    _max?: AdditionalChargeReceiptMaxAggregateInputType
  }

  export type AdditionalChargeReceiptGroupByOutputType = {
    id: number
    receiptId: number
    purchaseDate: Date
    _count: AdditionalChargeReceiptCountAggregateOutputType | null
    _avg: AdditionalChargeReceiptAvgAggregateOutputType | null
    _sum: AdditionalChargeReceiptSumAggregateOutputType | null
    _min: AdditionalChargeReceiptMinAggregateOutputType | null
    _max: AdditionalChargeReceiptMaxAggregateOutputType | null
  }

  type GetAdditionalChargeReceiptGroupByPayload<T extends AdditionalChargeReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdditionalChargeReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdditionalChargeReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdditionalChargeReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], AdditionalChargeReceiptGroupByOutputType[P]>
        }
      >
    >


  export type AdditionalChargeReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptId?: boolean
    purchaseDate?: boolean
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
    restaurantReceipt?: boolean | AdditionalChargeReceipt$restaurantReceiptArgs<ExtArgs>
    items?: boolean | AdditionalChargeReceipt$itemsArgs<ExtArgs>
    services?: boolean | AdditionalChargeReceipt$servicesArgs<ExtArgs>
    _count?: boolean | AdditionalChargeReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["additionalChargeReceipt"]>



  export type AdditionalChargeReceiptSelectScalar = {
    id?: boolean
    receiptId?: boolean
    purchaseDate?: boolean
  }

  export type AdditionalChargeReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiptId" | "purchaseDate", ExtArgs["result"]["additionalChargeReceipt"]>
  export type AdditionalChargeReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipt?: boolean | ReceiptDefaultArgs<ExtArgs>
    restaurantReceipt?: boolean | AdditionalChargeReceipt$restaurantReceiptArgs<ExtArgs>
    items?: boolean | AdditionalChargeReceipt$itemsArgs<ExtArgs>
    services?: boolean | AdditionalChargeReceipt$servicesArgs<ExtArgs>
    _count?: boolean | AdditionalChargeReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdditionalChargeReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdditionalChargeReceipt"
    objects: {
      receipt: Prisma.$ReceiptPayload<ExtArgs>
      restaurantReceipt: Prisma.$RestaurantReceiptPayload<ExtArgs> | null
      items: Prisma.$AddChargeItemPayload<ExtArgs>[]
      services: Prisma.$AddChargeServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      receiptId: number
      purchaseDate: Date
    }, ExtArgs["result"]["additionalChargeReceipt"]>
    composites: {}
  }

  type AdditionalChargeReceiptGetPayload<S extends boolean | null | undefined | AdditionalChargeReceiptDefaultArgs> = $Result.GetResult<Prisma.$AdditionalChargeReceiptPayload, S>

  type AdditionalChargeReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdditionalChargeReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdditionalChargeReceiptCountAggregateInputType | true
    }

  export interface AdditionalChargeReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdditionalChargeReceipt'], meta: { name: 'AdditionalChargeReceipt' } }
    /**
     * Find zero or one AdditionalChargeReceipt that matches the filter.
     * @param {AdditionalChargeReceiptFindUniqueArgs} args - Arguments to find a AdditionalChargeReceipt
     * @example
     * // Get one AdditionalChargeReceipt
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdditionalChargeReceiptFindUniqueArgs>(args: SelectSubset<T, AdditionalChargeReceiptFindUniqueArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdditionalChargeReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdditionalChargeReceiptFindUniqueOrThrowArgs} args - Arguments to find a AdditionalChargeReceipt
     * @example
     * // Get one AdditionalChargeReceipt
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdditionalChargeReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, AdditionalChargeReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdditionalChargeReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalChargeReceiptFindFirstArgs} args - Arguments to find a AdditionalChargeReceipt
     * @example
     * // Get one AdditionalChargeReceipt
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdditionalChargeReceiptFindFirstArgs>(args?: SelectSubset<T, AdditionalChargeReceiptFindFirstArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdditionalChargeReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalChargeReceiptFindFirstOrThrowArgs} args - Arguments to find a AdditionalChargeReceipt
     * @example
     * // Get one AdditionalChargeReceipt
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdditionalChargeReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, AdditionalChargeReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdditionalChargeReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalChargeReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdditionalChargeReceipts
     * const additionalChargeReceipts = await prisma.additionalChargeReceipt.findMany()
     * 
     * // Get first 10 AdditionalChargeReceipts
     * const additionalChargeReceipts = await prisma.additionalChargeReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const additionalChargeReceiptWithIdOnly = await prisma.additionalChargeReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdditionalChargeReceiptFindManyArgs>(args?: SelectSubset<T, AdditionalChargeReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdditionalChargeReceipt.
     * @param {AdditionalChargeReceiptCreateArgs} args - Arguments to create a AdditionalChargeReceipt.
     * @example
     * // Create one AdditionalChargeReceipt
     * const AdditionalChargeReceipt = await prisma.additionalChargeReceipt.create({
     *   data: {
     *     // ... data to create a AdditionalChargeReceipt
     *   }
     * })
     * 
     */
    create<T extends AdditionalChargeReceiptCreateArgs>(args: SelectSubset<T, AdditionalChargeReceiptCreateArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdditionalChargeReceipts.
     * @param {AdditionalChargeReceiptCreateManyArgs} args - Arguments to create many AdditionalChargeReceipts.
     * @example
     * // Create many AdditionalChargeReceipts
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdditionalChargeReceiptCreateManyArgs>(args?: SelectSubset<T, AdditionalChargeReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdditionalChargeReceipt.
     * @param {AdditionalChargeReceiptDeleteArgs} args - Arguments to delete one AdditionalChargeReceipt.
     * @example
     * // Delete one AdditionalChargeReceipt
     * const AdditionalChargeReceipt = await prisma.additionalChargeReceipt.delete({
     *   where: {
     *     // ... filter to delete one AdditionalChargeReceipt
     *   }
     * })
     * 
     */
    delete<T extends AdditionalChargeReceiptDeleteArgs>(args: SelectSubset<T, AdditionalChargeReceiptDeleteArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdditionalChargeReceipt.
     * @param {AdditionalChargeReceiptUpdateArgs} args - Arguments to update one AdditionalChargeReceipt.
     * @example
     * // Update one AdditionalChargeReceipt
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdditionalChargeReceiptUpdateArgs>(args: SelectSubset<T, AdditionalChargeReceiptUpdateArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdditionalChargeReceipts.
     * @param {AdditionalChargeReceiptDeleteManyArgs} args - Arguments to filter AdditionalChargeReceipts to delete.
     * @example
     * // Delete a few AdditionalChargeReceipts
     * const { count } = await prisma.additionalChargeReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdditionalChargeReceiptDeleteManyArgs>(args?: SelectSubset<T, AdditionalChargeReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdditionalChargeReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalChargeReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdditionalChargeReceipts
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdditionalChargeReceiptUpdateManyArgs>(args: SelectSubset<T, AdditionalChargeReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdditionalChargeReceipt.
     * @param {AdditionalChargeReceiptUpsertArgs} args - Arguments to update or create a AdditionalChargeReceipt.
     * @example
     * // Update or create a AdditionalChargeReceipt
     * const additionalChargeReceipt = await prisma.additionalChargeReceipt.upsert({
     *   create: {
     *     // ... data to create a AdditionalChargeReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdditionalChargeReceipt we want to update
     *   }
     * })
     */
    upsert<T extends AdditionalChargeReceiptUpsertArgs>(args: SelectSubset<T, AdditionalChargeReceiptUpsertArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdditionalChargeReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalChargeReceiptCountArgs} args - Arguments to filter AdditionalChargeReceipts to count.
     * @example
     * // Count the number of AdditionalChargeReceipts
     * const count = await prisma.additionalChargeReceipt.count({
     *   where: {
     *     // ... the filter for the AdditionalChargeReceipts we want to count
     *   }
     * })
    **/
    count<T extends AdditionalChargeReceiptCountArgs>(
      args?: Subset<T, AdditionalChargeReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdditionalChargeReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdditionalChargeReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalChargeReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdditionalChargeReceiptAggregateArgs>(args: Subset<T, AdditionalChargeReceiptAggregateArgs>): Prisma.PrismaPromise<GetAdditionalChargeReceiptAggregateType<T>>

    /**
     * Group by AdditionalChargeReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalChargeReceiptGroupByArgs} args - Group by arguments.
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
      T extends AdditionalChargeReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdditionalChargeReceiptGroupByArgs['orderBy'] }
        : { orderBy?: AdditionalChargeReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdditionalChargeReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdditionalChargeReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdditionalChargeReceipt model
   */
  readonly fields: AdditionalChargeReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdditionalChargeReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdditionalChargeReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipt<T extends ReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceiptDefaultArgs<ExtArgs>>): Prisma__ReceiptClient<$Result.GetResult<Prisma.$ReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurantReceipt<T extends AdditionalChargeReceipt$restaurantReceiptArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalChargeReceipt$restaurantReceiptArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends AdditionalChargeReceipt$itemsArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalChargeReceipt$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends AdditionalChargeReceipt$servicesArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalChargeReceipt$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdditionalChargeReceipt model
   */
  interface AdditionalChargeReceiptFieldRefs {
    readonly id: FieldRef<"AdditionalChargeReceipt", 'Int'>
    readonly receiptId: FieldRef<"AdditionalChargeReceipt", 'Int'>
    readonly purchaseDate: FieldRef<"AdditionalChargeReceipt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdditionalChargeReceipt findUnique
   */
  export type AdditionalChargeReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalChargeReceipt to fetch.
     */
    where: AdditionalChargeReceiptWhereUniqueInput
  }

  /**
   * AdditionalChargeReceipt findUniqueOrThrow
   */
  export type AdditionalChargeReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalChargeReceipt to fetch.
     */
    where: AdditionalChargeReceiptWhereUniqueInput
  }

  /**
   * AdditionalChargeReceipt findFirst
   */
  export type AdditionalChargeReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalChargeReceipt to fetch.
     */
    where?: AdditionalChargeReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalChargeReceipts to fetch.
     */
    orderBy?: AdditionalChargeReceiptOrderByWithRelationInput | AdditionalChargeReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdditionalChargeReceipts.
     */
    cursor?: AdditionalChargeReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalChargeReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalChargeReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdditionalChargeReceipts.
     */
    distinct?: AdditionalChargeReceiptScalarFieldEnum | AdditionalChargeReceiptScalarFieldEnum[]
  }

  /**
   * AdditionalChargeReceipt findFirstOrThrow
   */
  export type AdditionalChargeReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalChargeReceipt to fetch.
     */
    where?: AdditionalChargeReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalChargeReceipts to fetch.
     */
    orderBy?: AdditionalChargeReceiptOrderByWithRelationInput | AdditionalChargeReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdditionalChargeReceipts.
     */
    cursor?: AdditionalChargeReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalChargeReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalChargeReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdditionalChargeReceipts.
     */
    distinct?: AdditionalChargeReceiptScalarFieldEnum | AdditionalChargeReceiptScalarFieldEnum[]
  }

  /**
   * AdditionalChargeReceipt findMany
   */
  export type AdditionalChargeReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalChargeReceipts to fetch.
     */
    where?: AdditionalChargeReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalChargeReceipts to fetch.
     */
    orderBy?: AdditionalChargeReceiptOrderByWithRelationInput | AdditionalChargeReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdditionalChargeReceipts.
     */
    cursor?: AdditionalChargeReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalChargeReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalChargeReceipts.
     */
    skip?: number
    distinct?: AdditionalChargeReceiptScalarFieldEnum | AdditionalChargeReceiptScalarFieldEnum[]
  }

  /**
   * AdditionalChargeReceipt create
   */
  export type AdditionalChargeReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a AdditionalChargeReceipt.
     */
    data: XOR<AdditionalChargeReceiptCreateInput, AdditionalChargeReceiptUncheckedCreateInput>
  }

  /**
   * AdditionalChargeReceipt createMany
   */
  export type AdditionalChargeReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdditionalChargeReceipts.
     */
    data: AdditionalChargeReceiptCreateManyInput | AdditionalChargeReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdditionalChargeReceipt update
   */
  export type AdditionalChargeReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a AdditionalChargeReceipt.
     */
    data: XOR<AdditionalChargeReceiptUpdateInput, AdditionalChargeReceiptUncheckedUpdateInput>
    /**
     * Choose, which AdditionalChargeReceipt to update.
     */
    where: AdditionalChargeReceiptWhereUniqueInput
  }

  /**
   * AdditionalChargeReceipt updateMany
   */
  export type AdditionalChargeReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdditionalChargeReceipts.
     */
    data: XOR<AdditionalChargeReceiptUpdateManyMutationInput, AdditionalChargeReceiptUncheckedUpdateManyInput>
    /**
     * Filter which AdditionalChargeReceipts to update
     */
    where?: AdditionalChargeReceiptWhereInput
    /**
     * Limit how many AdditionalChargeReceipts to update.
     */
    limit?: number
  }

  /**
   * AdditionalChargeReceipt upsert
   */
  export type AdditionalChargeReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the AdditionalChargeReceipt to update in case it exists.
     */
    where: AdditionalChargeReceiptWhereUniqueInput
    /**
     * In case the AdditionalChargeReceipt found by the `where` argument doesn't exist, create a new AdditionalChargeReceipt with this data.
     */
    create: XOR<AdditionalChargeReceiptCreateInput, AdditionalChargeReceiptUncheckedCreateInput>
    /**
     * In case the AdditionalChargeReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdditionalChargeReceiptUpdateInput, AdditionalChargeReceiptUncheckedUpdateInput>
  }

  /**
   * AdditionalChargeReceipt delete
   */
  export type AdditionalChargeReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
    /**
     * Filter which AdditionalChargeReceipt to delete.
     */
    where: AdditionalChargeReceiptWhereUniqueInput
  }

  /**
   * AdditionalChargeReceipt deleteMany
   */
  export type AdditionalChargeReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdditionalChargeReceipts to delete
     */
    where?: AdditionalChargeReceiptWhereInput
    /**
     * Limit how many AdditionalChargeReceipts to delete.
     */
    limit?: number
  }

  /**
   * AdditionalChargeReceipt.restaurantReceipt
   */
  export type AdditionalChargeReceipt$restaurantReceiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    where?: RestaurantReceiptWhereInput
  }

  /**
   * AdditionalChargeReceipt.items
   */
  export type AdditionalChargeReceipt$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    where?: AddChargeItemWhereInput
    orderBy?: AddChargeItemOrderByWithRelationInput | AddChargeItemOrderByWithRelationInput[]
    cursor?: AddChargeItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddChargeItemScalarFieldEnum | AddChargeItemScalarFieldEnum[]
  }

  /**
   * AdditionalChargeReceipt.services
   */
  export type AdditionalChargeReceipt$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    where?: AddChargeServiceWhereInput
    orderBy?: AddChargeServiceOrderByWithRelationInput | AddChargeServiceOrderByWithRelationInput[]
    cursor?: AddChargeServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddChargeServiceScalarFieldEnum | AddChargeServiceScalarFieldEnum[]
  }

  /**
   * AdditionalChargeReceipt without action
   */
  export type AdditionalChargeReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalChargeReceipt
     */
    select?: AdditionalChargeReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalChargeReceipt
     */
    omit?: AdditionalChargeReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalChargeReceiptInclude<ExtArgs> | null
  }


  /**
   * Model RestaurantReceipt
   */

  export type AggregateRestaurantReceipt = {
    _count: RestaurantReceiptCountAggregateOutputType | null
    _avg: RestaurantReceiptAvgAggregateOutputType | null
    _sum: RestaurantReceiptSumAggregateOutputType | null
    _min: RestaurantReceiptMinAggregateOutputType | null
    _max: RestaurantReceiptMaxAggregateOutputType | null
  }

  export type RestaurantReceiptAvgAggregateOutputType = {
    id: number | null
    addChargeId: number | null
    totalPrice: number | null
  }

  export type RestaurantReceiptSumAggregateOutputType = {
    id: number | null
    addChargeId: number | null
    totalPrice: number | null
  }

  export type RestaurantReceiptMinAggregateOutputType = {
    id: number | null
    addChargeId: number | null
    totalPrice: number | null
    purchaseDate: Date | null
  }

  export type RestaurantReceiptMaxAggregateOutputType = {
    id: number | null
    addChargeId: number | null
    totalPrice: number | null
    purchaseDate: Date | null
  }

  export type RestaurantReceiptCountAggregateOutputType = {
    id: number
    addChargeId: number
    totalPrice: number
    purchaseDate: number
    _all: number
  }


  export type RestaurantReceiptAvgAggregateInputType = {
    id?: true
    addChargeId?: true
    totalPrice?: true
  }

  export type RestaurantReceiptSumAggregateInputType = {
    id?: true
    addChargeId?: true
    totalPrice?: true
  }

  export type RestaurantReceiptMinAggregateInputType = {
    id?: true
    addChargeId?: true
    totalPrice?: true
    purchaseDate?: true
  }

  export type RestaurantReceiptMaxAggregateInputType = {
    id?: true
    addChargeId?: true
    totalPrice?: true
    purchaseDate?: true
  }

  export type RestaurantReceiptCountAggregateInputType = {
    id?: true
    addChargeId?: true
    totalPrice?: true
    purchaseDate?: true
    _all?: true
  }

  export type RestaurantReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantReceipt to aggregate.
     */
    where?: RestaurantReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantReceipts to fetch.
     */
    orderBy?: RestaurantReceiptOrderByWithRelationInput | RestaurantReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantReceipts
    **/
    _count?: true | RestaurantReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantReceiptMaxAggregateInputType
  }

  export type GetRestaurantReceiptAggregateType<T extends RestaurantReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantReceipt[P]>
      : GetScalarType<T[P], AggregateRestaurantReceipt[P]>
  }




  export type RestaurantReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantReceiptWhereInput
    orderBy?: RestaurantReceiptOrderByWithAggregationInput | RestaurantReceiptOrderByWithAggregationInput[]
    by: RestaurantReceiptScalarFieldEnum[] | RestaurantReceiptScalarFieldEnum
    having?: RestaurantReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantReceiptCountAggregateInputType | true
    _avg?: RestaurantReceiptAvgAggregateInputType
    _sum?: RestaurantReceiptSumAggregateInputType
    _min?: RestaurantReceiptMinAggregateInputType
    _max?: RestaurantReceiptMaxAggregateInputType
  }

  export type RestaurantReceiptGroupByOutputType = {
    id: number
    addChargeId: number
    totalPrice: number
    purchaseDate: Date
    _count: RestaurantReceiptCountAggregateOutputType | null
    _avg: RestaurantReceiptAvgAggregateOutputType | null
    _sum: RestaurantReceiptSumAggregateOutputType | null
    _min: RestaurantReceiptMinAggregateOutputType | null
    _max: RestaurantReceiptMaxAggregateOutputType | null
  }

  type GetRestaurantReceiptGroupByPayload<T extends RestaurantReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantReceiptGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addChargeId?: boolean
    totalPrice?: boolean
    purchaseDate?: boolean
    additionalCharge?: boolean | AdditionalChargeReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantReceipt"]>



  export type RestaurantReceiptSelectScalar = {
    id?: boolean
    addChargeId?: boolean
    totalPrice?: boolean
    purchaseDate?: boolean
  }

  export type RestaurantReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "addChargeId" | "totalPrice" | "purchaseDate", ExtArgs["result"]["restaurantReceipt"]>
  export type RestaurantReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    additionalCharge?: boolean | AdditionalChargeReceiptDefaultArgs<ExtArgs>
  }

  export type $RestaurantReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestaurantReceipt"
    objects: {
      additionalCharge: Prisma.$AdditionalChargeReceiptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      addChargeId: number
      totalPrice: number
      purchaseDate: Date
    }, ExtArgs["result"]["restaurantReceipt"]>
    composites: {}
  }

  type RestaurantReceiptGetPayload<S extends boolean | null | undefined | RestaurantReceiptDefaultArgs> = $Result.GetResult<Prisma.$RestaurantReceiptPayload, S>

  type RestaurantReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantReceiptCountAggregateInputType | true
    }

  export interface RestaurantReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestaurantReceipt'], meta: { name: 'RestaurantReceipt' } }
    /**
     * Find zero or one RestaurantReceipt that matches the filter.
     * @param {RestaurantReceiptFindUniqueArgs} args - Arguments to find a RestaurantReceipt
     * @example
     * // Get one RestaurantReceipt
     * const restaurantReceipt = await prisma.restaurantReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantReceiptFindUniqueArgs>(args: SelectSubset<T, RestaurantReceiptFindUniqueArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestaurantReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantReceiptFindUniqueOrThrowArgs} args - Arguments to find a RestaurantReceipt
     * @example
     * // Get one RestaurantReceipt
     * const restaurantReceipt = await prisma.restaurantReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantReceiptFindFirstArgs} args - Arguments to find a RestaurantReceipt
     * @example
     * // Get one RestaurantReceipt
     * const restaurantReceipt = await prisma.restaurantReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantReceiptFindFirstArgs>(args?: SelectSubset<T, RestaurantReceiptFindFirstArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantReceiptFindFirstOrThrowArgs} args - Arguments to find a RestaurantReceipt
     * @example
     * // Get one RestaurantReceipt
     * const restaurantReceipt = await prisma.restaurantReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestaurantReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantReceipts
     * const restaurantReceipts = await prisma.restaurantReceipt.findMany()
     * 
     * // Get first 10 RestaurantReceipts
     * const restaurantReceipts = await prisma.restaurantReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantReceiptWithIdOnly = await prisma.restaurantReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantReceiptFindManyArgs>(args?: SelectSubset<T, RestaurantReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestaurantReceipt.
     * @param {RestaurantReceiptCreateArgs} args - Arguments to create a RestaurantReceipt.
     * @example
     * // Create one RestaurantReceipt
     * const RestaurantReceipt = await prisma.restaurantReceipt.create({
     *   data: {
     *     // ... data to create a RestaurantReceipt
     *   }
     * })
     * 
     */
    create<T extends RestaurantReceiptCreateArgs>(args: SelectSubset<T, RestaurantReceiptCreateArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestaurantReceipts.
     * @param {RestaurantReceiptCreateManyArgs} args - Arguments to create many RestaurantReceipts.
     * @example
     * // Create many RestaurantReceipts
     * const restaurantReceipt = await prisma.restaurantReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantReceiptCreateManyArgs>(args?: SelectSubset<T, RestaurantReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RestaurantReceipt.
     * @param {RestaurantReceiptDeleteArgs} args - Arguments to delete one RestaurantReceipt.
     * @example
     * // Delete one RestaurantReceipt
     * const RestaurantReceipt = await prisma.restaurantReceipt.delete({
     *   where: {
     *     // ... filter to delete one RestaurantReceipt
     *   }
     * })
     * 
     */
    delete<T extends RestaurantReceiptDeleteArgs>(args: SelectSubset<T, RestaurantReceiptDeleteArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestaurantReceipt.
     * @param {RestaurantReceiptUpdateArgs} args - Arguments to update one RestaurantReceipt.
     * @example
     * // Update one RestaurantReceipt
     * const restaurantReceipt = await prisma.restaurantReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantReceiptUpdateArgs>(args: SelectSubset<T, RestaurantReceiptUpdateArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestaurantReceipts.
     * @param {RestaurantReceiptDeleteManyArgs} args - Arguments to filter RestaurantReceipts to delete.
     * @example
     * // Delete a few RestaurantReceipts
     * const { count } = await prisma.restaurantReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantReceiptDeleteManyArgs>(args?: SelectSubset<T, RestaurantReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantReceipts
     * const restaurantReceipt = await prisma.restaurantReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantReceiptUpdateManyArgs>(args: SelectSubset<T, RestaurantReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RestaurantReceipt.
     * @param {RestaurantReceiptUpsertArgs} args - Arguments to update or create a RestaurantReceipt.
     * @example
     * // Update or create a RestaurantReceipt
     * const restaurantReceipt = await prisma.restaurantReceipt.upsert({
     *   create: {
     *     // ... data to create a RestaurantReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantReceipt we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantReceiptUpsertArgs>(args: SelectSubset<T, RestaurantReceiptUpsertArgs<ExtArgs>>): Prisma__RestaurantReceiptClient<$Result.GetResult<Prisma.$RestaurantReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestaurantReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantReceiptCountArgs} args - Arguments to filter RestaurantReceipts to count.
     * @example
     * // Count the number of RestaurantReceipts
     * const count = await prisma.restaurantReceipt.count({
     *   where: {
     *     // ... the filter for the RestaurantReceipts we want to count
     *   }
     * })
    **/
    count<T extends RestaurantReceiptCountArgs>(
      args?: Subset<T, RestaurantReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantReceiptAggregateArgs>(args: Subset<T, RestaurantReceiptAggregateArgs>): Prisma.PrismaPromise<GetRestaurantReceiptAggregateType<T>>

    /**
     * Group by RestaurantReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantReceiptGroupByArgs} args - Group by arguments.
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
      T extends RestaurantReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantReceiptGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestaurantReceipt model
   */
  readonly fields: RestaurantReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    additionalCharge<T extends AdditionalChargeReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalChargeReceiptDefaultArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RestaurantReceipt model
   */
  interface RestaurantReceiptFieldRefs {
    readonly id: FieldRef<"RestaurantReceipt", 'Int'>
    readonly addChargeId: FieldRef<"RestaurantReceipt", 'Int'>
    readonly totalPrice: FieldRef<"RestaurantReceipt", 'Float'>
    readonly purchaseDate: FieldRef<"RestaurantReceipt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RestaurantReceipt findUnique
   */
  export type RestaurantReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantReceipt to fetch.
     */
    where: RestaurantReceiptWhereUniqueInput
  }

  /**
   * RestaurantReceipt findUniqueOrThrow
   */
  export type RestaurantReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantReceipt to fetch.
     */
    where: RestaurantReceiptWhereUniqueInput
  }

  /**
   * RestaurantReceipt findFirst
   */
  export type RestaurantReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantReceipt to fetch.
     */
    where?: RestaurantReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantReceipts to fetch.
     */
    orderBy?: RestaurantReceiptOrderByWithRelationInput | RestaurantReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantReceipts.
     */
    cursor?: RestaurantReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantReceipts.
     */
    distinct?: RestaurantReceiptScalarFieldEnum | RestaurantReceiptScalarFieldEnum[]
  }

  /**
   * RestaurantReceipt findFirstOrThrow
   */
  export type RestaurantReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantReceipt to fetch.
     */
    where?: RestaurantReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantReceipts to fetch.
     */
    orderBy?: RestaurantReceiptOrderByWithRelationInput | RestaurantReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantReceipts.
     */
    cursor?: RestaurantReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantReceipts.
     */
    distinct?: RestaurantReceiptScalarFieldEnum | RestaurantReceiptScalarFieldEnum[]
  }

  /**
   * RestaurantReceipt findMany
   */
  export type RestaurantReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantReceipts to fetch.
     */
    where?: RestaurantReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantReceipts to fetch.
     */
    orderBy?: RestaurantReceiptOrderByWithRelationInput | RestaurantReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantReceipts.
     */
    cursor?: RestaurantReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantReceipts.
     */
    skip?: number
    distinct?: RestaurantReceiptScalarFieldEnum | RestaurantReceiptScalarFieldEnum[]
  }

  /**
   * RestaurantReceipt create
   */
  export type RestaurantReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a RestaurantReceipt.
     */
    data: XOR<RestaurantReceiptCreateInput, RestaurantReceiptUncheckedCreateInput>
  }

  /**
   * RestaurantReceipt createMany
   */
  export type RestaurantReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantReceipts.
     */
    data: RestaurantReceiptCreateManyInput | RestaurantReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestaurantReceipt update
   */
  export type RestaurantReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a RestaurantReceipt.
     */
    data: XOR<RestaurantReceiptUpdateInput, RestaurantReceiptUncheckedUpdateInput>
    /**
     * Choose, which RestaurantReceipt to update.
     */
    where: RestaurantReceiptWhereUniqueInput
  }

  /**
   * RestaurantReceipt updateMany
   */
  export type RestaurantReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantReceipts.
     */
    data: XOR<RestaurantReceiptUpdateManyMutationInput, RestaurantReceiptUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantReceipts to update
     */
    where?: RestaurantReceiptWhereInput
    /**
     * Limit how many RestaurantReceipts to update.
     */
    limit?: number
  }

  /**
   * RestaurantReceipt upsert
   */
  export type RestaurantReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the RestaurantReceipt to update in case it exists.
     */
    where: RestaurantReceiptWhereUniqueInput
    /**
     * In case the RestaurantReceipt found by the `where` argument doesn't exist, create a new RestaurantReceipt with this data.
     */
    create: XOR<RestaurantReceiptCreateInput, RestaurantReceiptUncheckedCreateInput>
    /**
     * In case the RestaurantReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantReceiptUpdateInput, RestaurantReceiptUncheckedUpdateInput>
  }

  /**
   * RestaurantReceipt delete
   */
  export type RestaurantReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
    /**
     * Filter which RestaurantReceipt to delete.
     */
    where: RestaurantReceiptWhereUniqueInput
  }

  /**
   * RestaurantReceipt deleteMany
   */
  export type RestaurantReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantReceipts to delete
     */
    where?: RestaurantReceiptWhereInput
    /**
     * Limit how many RestaurantReceipts to delete.
     */
    limit?: number
  }

  /**
   * RestaurantReceipt without action
   */
  export type RestaurantReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantReceipt
     */
    select?: RestaurantReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantReceipt
     */
    omit?: RestaurantReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantReceiptInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    price: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    price: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    additionalCharges?: boolean | Service$additionalChargesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    additionalCharges?: boolean | Service$additionalChargesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      additionalCharges: Prisma.$AddChargeServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    additionalCharges<T extends Service$additionalChargesArgs<ExtArgs> = {}>(args?: Subset<T, Service$additionalChargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.additionalCharges
   */
  export type Service$additionalChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    where?: AddChargeServiceWhereInput
    orderBy?: AddChargeServiceOrderByWithRelationInput | AddChargeServiceOrderByWithRelationInput[]
    cursor?: AddChargeServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddChargeServiceScalarFieldEnum | AddChargeServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model AddChargeItem
   */

  export type AggregateAddChargeItem = {
    _count: AddChargeItemCountAggregateOutputType | null
    _avg: AddChargeItemAvgAggregateOutputType | null
    _sum: AddChargeItemSumAggregateOutputType | null
    _min: AddChargeItemMinAggregateOutputType | null
    _max: AddChargeItemMaxAggregateOutputType | null
  }

  export type AddChargeItemAvgAggregateOutputType = {
    addChargeId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type AddChargeItemSumAggregateOutputType = {
    addChargeId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type AddChargeItemMinAggregateOutputType = {
    addChargeId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type AddChargeItemMaxAggregateOutputType = {
    addChargeId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type AddChargeItemCountAggregateOutputType = {
    addChargeId: number
    itemId: number
    quantity: number
    _all: number
  }


  export type AddChargeItemAvgAggregateInputType = {
    addChargeId?: true
    itemId?: true
    quantity?: true
  }

  export type AddChargeItemSumAggregateInputType = {
    addChargeId?: true
    itemId?: true
    quantity?: true
  }

  export type AddChargeItemMinAggregateInputType = {
    addChargeId?: true
    itemId?: true
    quantity?: true
  }

  export type AddChargeItemMaxAggregateInputType = {
    addChargeId?: true
    itemId?: true
    quantity?: true
  }

  export type AddChargeItemCountAggregateInputType = {
    addChargeId?: true
    itemId?: true
    quantity?: true
    _all?: true
  }

  export type AddChargeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddChargeItem to aggregate.
     */
    where?: AddChargeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeItems to fetch.
     */
    orderBy?: AddChargeItemOrderByWithRelationInput | AddChargeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddChargeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddChargeItems
    **/
    _count?: true | AddChargeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddChargeItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddChargeItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddChargeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddChargeItemMaxAggregateInputType
  }

  export type GetAddChargeItemAggregateType<T extends AddChargeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAddChargeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddChargeItem[P]>
      : GetScalarType<T[P], AggregateAddChargeItem[P]>
  }




  export type AddChargeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddChargeItemWhereInput
    orderBy?: AddChargeItemOrderByWithAggregationInput | AddChargeItemOrderByWithAggregationInput[]
    by: AddChargeItemScalarFieldEnum[] | AddChargeItemScalarFieldEnum
    having?: AddChargeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddChargeItemCountAggregateInputType | true
    _avg?: AddChargeItemAvgAggregateInputType
    _sum?: AddChargeItemSumAggregateInputType
    _min?: AddChargeItemMinAggregateInputType
    _max?: AddChargeItemMaxAggregateInputType
  }

  export type AddChargeItemGroupByOutputType = {
    addChargeId: number
    itemId: number
    quantity: number
    _count: AddChargeItemCountAggregateOutputType | null
    _avg: AddChargeItemAvgAggregateOutputType | null
    _sum: AddChargeItemSumAggregateOutputType | null
    _min: AddChargeItemMinAggregateOutputType | null
    _max: AddChargeItemMaxAggregateOutputType | null
  }

  type GetAddChargeItemGroupByPayload<T extends AddChargeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddChargeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddChargeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddChargeItemGroupByOutputType[P]>
            : GetScalarType<T[P], AddChargeItemGroupByOutputType[P]>
        }
      >
    >


  export type AddChargeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    addChargeId?: boolean
    itemId?: boolean
    quantity?: boolean
    additionalCharge?: boolean | AdditionalChargeReceiptDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addChargeItem"]>



  export type AddChargeItemSelectScalar = {
    addChargeId?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type AddChargeItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"addChargeId" | "itemId" | "quantity", ExtArgs["result"]["addChargeItem"]>
  export type AddChargeItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    additionalCharge?: boolean | AdditionalChargeReceiptDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $AddChargeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddChargeItem"
    objects: {
      additionalCharge: Prisma.$AdditionalChargeReceiptPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      addChargeId: number
      itemId: number
      quantity: number
    }, ExtArgs["result"]["addChargeItem"]>
    composites: {}
  }

  type AddChargeItemGetPayload<S extends boolean | null | undefined | AddChargeItemDefaultArgs> = $Result.GetResult<Prisma.$AddChargeItemPayload, S>

  type AddChargeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddChargeItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddChargeItemCountAggregateInputType | true
    }

  export interface AddChargeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddChargeItem'], meta: { name: 'AddChargeItem' } }
    /**
     * Find zero or one AddChargeItem that matches the filter.
     * @param {AddChargeItemFindUniqueArgs} args - Arguments to find a AddChargeItem
     * @example
     * // Get one AddChargeItem
     * const addChargeItem = await prisma.addChargeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddChargeItemFindUniqueArgs>(args: SelectSubset<T, AddChargeItemFindUniqueArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddChargeItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddChargeItemFindUniqueOrThrowArgs} args - Arguments to find a AddChargeItem
     * @example
     * // Get one AddChargeItem
     * const addChargeItem = await prisma.addChargeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddChargeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AddChargeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddChargeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeItemFindFirstArgs} args - Arguments to find a AddChargeItem
     * @example
     * // Get one AddChargeItem
     * const addChargeItem = await prisma.addChargeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddChargeItemFindFirstArgs>(args?: SelectSubset<T, AddChargeItemFindFirstArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddChargeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeItemFindFirstOrThrowArgs} args - Arguments to find a AddChargeItem
     * @example
     * // Get one AddChargeItem
     * const addChargeItem = await prisma.addChargeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddChargeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AddChargeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddChargeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddChargeItems
     * const addChargeItems = await prisma.addChargeItem.findMany()
     * 
     * // Get first 10 AddChargeItems
     * const addChargeItems = await prisma.addChargeItem.findMany({ take: 10 })
     * 
     * // Only select the `addChargeId`
     * const addChargeItemWithAddChargeIdOnly = await prisma.addChargeItem.findMany({ select: { addChargeId: true } })
     * 
     */
    findMany<T extends AddChargeItemFindManyArgs>(args?: SelectSubset<T, AddChargeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddChargeItem.
     * @param {AddChargeItemCreateArgs} args - Arguments to create a AddChargeItem.
     * @example
     * // Create one AddChargeItem
     * const AddChargeItem = await prisma.addChargeItem.create({
     *   data: {
     *     // ... data to create a AddChargeItem
     *   }
     * })
     * 
     */
    create<T extends AddChargeItemCreateArgs>(args: SelectSubset<T, AddChargeItemCreateArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddChargeItems.
     * @param {AddChargeItemCreateManyArgs} args - Arguments to create many AddChargeItems.
     * @example
     * // Create many AddChargeItems
     * const addChargeItem = await prisma.addChargeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddChargeItemCreateManyArgs>(args?: SelectSubset<T, AddChargeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddChargeItem.
     * @param {AddChargeItemDeleteArgs} args - Arguments to delete one AddChargeItem.
     * @example
     * // Delete one AddChargeItem
     * const AddChargeItem = await prisma.addChargeItem.delete({
     *   where: {
     *     // ... filter to delete one AddChargeItem
     *   }
     * })
     * 
     */
    delete<T extends AddChargeItemDeleteArgs>(args: SelectSubset<T, AddChargeItemDeleteArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddChargeItem.
     * @param {AddChargeItemUpdateArgs} args - Arguments to update one AddChargeItem.
     * @example
     * // Update one AddChargeItem
     * const addChargeItem = await prisma.addChargeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddChargeItemUpdateArgs>(args: SelectSubset<T, AddChargeItemUpdateArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddChargeItems.
     * @param {AddChargeItemDeleteManyArgs} args - Arguments to filter AddChargeItems to delete.
     * @example
     * // Delete a few AddChargeItems
     * const { count } = await prisma.addChargeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddChargeItemDeleteManyArgs>(args?: SelectSubset<T, AddChargeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddChargeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddChargeItems
     * const addChargeItem = await prisma.addChargeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddChargeItemUpdateManyArgs>(args: SelectSubset<T, AddChargeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddChargeItem.
     * @param {AddChargeItemUpsertArgs} args - Arguments to update or create a AddChargeItem.
     * @example
     * // Update or create a AddChargeItem
     * const addChargeItem = await prisma.addChargeItem.upsert({
     *   create: {
     *     // ... data to create a AddChargeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddChargeItem we want to update
     *   }
     * })
     */
    upsert<T extends AddChargeItemUpsertArgs>(args: SelectSubset<T, AddChargeItemUpsertArgs<ExtArgs>>): Prisma__AddChargeItemClient<$Result.GetResult<Prisma.$AddChargeItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddChargeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeItemCountArgs} args - Arguments to filter AddChargeItems to count.
     * @example
     * // Count the number of AddChargeItems
     * const count = await prisma.addChargeItem.count({
     *   where: {
     *     // ... the filter for the AddChargeItems we want to count
     *   }
     * })
    **/
    count<T extends AddChargeItemCountArgs>(
      args?: Subset<T, AddChargeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddChargeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddChargeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddChargeItemAggregateArgs>(args: Subset<T, AddChargeItemAggregateArgs>): Prisma.PrismaPromise<GetAddChargeItemAggregateType<T>>

    /**
     * Group by AddChargeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeItemGroupByArgs} args - Group by arguments.
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
      T extends AddChargeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddChargeItemGroupByArgs['orderBy'] }
        : { orderBy?: AddChargeItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddChargeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddChargeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddChargeItem model
   */
  readonly fields: AddChargeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddChargeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddChargeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    additionalCharge<T extends AdditionalChargeReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalChargeReceiptDefaultArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AddChargeItem model
   */
  interface AddChargeItemFieldRefs {
    readonly addChargeId: FieldRef<"AddChargeItem", 'Int'>
    readonly itemId: FieldRef<"AddChargeItem", 'Int'>
    readonly quantity: FieldRef<"AddChargeItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AddChargeItem findUnique
   */
  export type AddChargeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeItem to fetch.
     */
    where: AddChargeItemWhereUniqueInput
  }

  /**
   * AddChargeItem findUniqueOrThrow
   */
  export type AddChargeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeItem to fetch.
     */
    where: AddChargeItemWhereUniqueInput
  }

  /**
   * AddChargeItem findFirst
   */
  export type AddChargeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeItem to fetch.
     */
    where?: AddChargeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeItems to fetch.
     */
    orderBy?: AddChargeItemOrderByWithRelationInput | AddChargeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddChargeItems.
     */
    cursor?: AddChargeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddChargeItems.
     */
    distinct?: AddChargeItemScalarFieldEnum | AddChargeItemScalarFieldEnum[]
  }

  /**
   * AddChargeItem findFirstOrThrow
   */
  export type AddChargeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeItem to fetch.
     */
    where?: AddChargeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeItems to fetch.
     */
    orderBy?: AddChargeItemOrderByWithRelationInput | AddChargeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddChargeItems.
     */
    cursor?: AddChargeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddChargeItems.
     */
    distinct?: AddChargeItemScalarFieldEnum | AddChargeItemScalarFieldEnum[]
  }

  /**
   * AddChargeItem findMany
   */
  export type AddChargeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeItems to fetch.
     */
    where?: AddChargeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeItems to fetch.
     */
    orderBy?: AddChargeItemOrderByWithRelationInput | AddChargeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddChargeItems.
     */
    cursor?: AddChargeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeItems.
     */
    skip?: number
    distinct?: AddChargeItemScalarFieldEnum | AddChargeItemScalarFieldEnum[]
  }

  /**
   * AddChargeItem create
   */
  export type AddChargeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * The data needed to create a AddChargeItem.
     */
    data: XOR<AddChargeItemCreateInput, AddChargeItemUncheckedCreateInput>
  }

  /**
   * AddChargeItem createMany
   */
  export type AddChargeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddChargeItems.
     */
    data: AddChargeItemCreateManyInput | AddChargeItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddChargeItem update
   */
  export type AddChargeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * The data needed to update a AddChargeItem.
     */
    data: XOR<AddChargeItemUpdateInput, AddChargeItemUncheckedUpdateInput>
    /**
     * Choose, which AddChargeItem to update.
     */
    where: AddChargeItemWhereUniqueInput
  }

  /**
   * AddChargeItem updateMany
   */
  export type AddChargeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddChargeItems.
     */
    data: XOR<AddChargeItemUpdateManyMutationInput, AddChargeItemUncheckedUpdateManyInput>
    /**
     * Filter which AddChargeItems to update
     */
    where?: AddChargeItemWhereInput
    /**
     * Limit how many AddChargeItems to update.
     */
    limit?: number
  }

  /**
   * AddChargeItem upsert
   */
  export type AddChargeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * The filter to search for the AddChargeItem to update in case it exists.
     */
    where: AddChargeItemWhereUniqueInput
    /**
     * In case the AddChargeItem found by the `where` argument doesn't exist, create a new AddChargeItem with this data.
     */
    create: XOR<AddChargeItemCreateInput, AddChargeItemUncheckedCreateInput>
    /**
     * In case the AddChargeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddChargeItemUpdateInput, AddChargeItemUncheckedUpdateInput>
  }

  /**
   * AddChargeItem delete
   */
  export type AddChargeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
    /**
     * Filter which AddChargeItem to delete.
     */
    where: AddChargeItemWhereUniqueInput
  }

  /**
   * AddChargeItem deleteMany
   */
  export type AddChargeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddChargeItems to delete
     */
    where?: AddChargeItemWhereInput
    /**
     * Limit how many AddChargeItems to delete.
     */
    limit?: number
  }

  /**
   * AddChargeItem without action
   */
  export type AddChargeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeItem
     */
    select?: AddChargeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeItem
     */
    omit?: AddChargeItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeItemInclude<ExtArgs> | null
  }


  /**
   * Model AddChargeService
   */

  export type AggregateAddChargeService = {
    _count: AddChargeServiceCountAggregateOutputType | null
    _avg: AddChargeServiceAvgAggregateOutputType | null
    _sum: AddChargeServiceSumAggregateOutputType | null
    _min: AddChargeServiceMinAggregateOutputType | null
    _max: AddChargeServiceMaxAggregateOutputType | null
  }

  export type AddChargeServiceAvgAggregateOutputType = {
    addChargeId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type AddChargeServiceSumAggregateOutputType = {
    addChargeId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type AddChargeServiceMinAggregateOutputType = {
    addChargeId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type AddChargeServiceMaxAggregateOutputType = {
    addChargeId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type AddChargeServiceCountAggregateOutputType = {
    addChargeId: number
    serviceId: number
    quantity: number
    _all: number
  }


  export type AddChargeServiceAvgAggregateInputType = {
    addChargeId?: true
    serviceId?: true
    quantity?: true
  }

  export type AddChargeServiceSumAggregateInputType = {
    addChargeId?: true
    serviceId?: true
    quantity?: true
  }

  export type AddChargeServiceMinAggregateInputType = {
    addChargeId?: true
    serviceId?: true
    quantity?: true
  }

  export type AddChargeServiceMaxAggregateInputType = {
    addChargeId?: true
    serviceId?: true
    quantity?: true
  }

  export type AddChargeServiceCountAggregateInputType = {
    addChargeId?: true
    serviceId?: true
    quantity?: true
    _all?: true
  }

  export type AddChargeServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddChargeService to aggregate.
     */
    where?: AddChargeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeServices to fetch.
     */
    orderBy?: AddChargeServiceOrderByWithRelationInput | AddChargeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddChargeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddChargeServices
    **/
    _count?: true | AddChargeServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddChargeServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddChargeServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddChargeServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddChargeServiceMaxAggregateInputType
  }

  export type GetAddChargeServiceAggregateType<T extends AddChargeServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateAddChargeService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddChargeService[P]>
      : GetScalarType<T[P], AggregateAddChargeService[P]>
  }




  export type AddChargeServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddChargeServiceWhereInput
    orderBy?: AddChargeServiceOrderByWithAggregationInput | AddChargeServiceOrderByWithAggregationInput[]
    by: AddChargeServiceScalarFieldEnum[] | AddChargeServiceScalarFieldEnum
    having?: AddChargeServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddChargeServiceCountAggregateInputType | true
    _avg?: AddChargeServiceAvgAggregateInputType
    _sum?: AddChargeServiceSumAggregateInputType
    _min?: AddChargeServiceMinAggregateInputType
    _max?: AddChargeServiceMaxAggregateInputType
  }

  export type AddChargeServiceGroupByOutputType = {
    addChargeId: number
    serviceId: number
    quantity: number
    _count: AddChargeServiceCountAggregateOutputType | null
    _avg: AddChargeServiceAvgAggregateOutputType | null
    _sum: AddChargeServiceSumAggregateOutputType | null
    _min: AddChargeServiceMinAggregateOutputType | null
    _max: AddChargeServiceMaxAggregateOutputType | null
  }

  type GetAddChargeServiceGroupByPayload<T extends AddChargeServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddChargeServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddChargeServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddChargeServiceGroupByOutputType[P]>
            : GetScalarType<T[P], AddChargeServiceGroupByOutputType[P]>
        }
      >
    >


  export type AddChargeServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    addChargeId?: boolean
    serviceId?: boolean
    quantity?: boolean
    additionalCharge?: boolean | AdditionalChargeReceiptDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addChargeService"]>



  export type AddChargeServiceSelectScalar = {
    addChargeId?: boolean
    serviceId?: boolean
    quantity?: boolean
  }

  export type AddChargeServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"addChargeId" | "serviceId" | "quantity", ExtArgs["result"]["addChargeService"]>
  export type AddChargeServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    additionalCharge?: boolean | AdditionalChargeReceiptDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $AddChargeServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddChargeService"
    objects: {
      additionalCharge: Prisma.$AdditionalChargeReceiptPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      addChargeId: number
      serviceId: number
      quantity: number
    }, ExtArgs["result"]["addChargeService"]>
    composites: {}
  }

  type AddChargeServiceGetPayload<S extends boolean | null | undefined | AddChargeServiceDefaultArgs> = $Result.GetResult<Prisma.$AddChargeServicePayload, S>

  type AddChargeServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddChargeServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddChargeServiceCountAggregateInputType | true
    }

  export interface AddChargeServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddChargeService'], meta: { name: 'AddChargeService' } }
    /**
     * Find zero or one AddChargeService that matches the filter.
     * @param {AddChargeServiceFindUniqueArgs} args - Arguments to find a AddChargeService
     * @example
     * // Get one AddChargeService
     * const addChargeService = await prisma.addChargeService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddChargeServiceFindUniqueArgs>(args: SelectSubset<T, AddChargeServiceFindUniqueArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddChargeService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddChargeServiceFindUniqueOrThrowArgs} args - Arguments to find a AddChargeService
     * @example
     * // Get one AddChargeService
     * const addChargeService = await prisma.addChargeService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddChargeServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, AddChargeServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddChargeService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeServiceFindFirstArgs} args - Arguments to find a AddChargeService
     * @example
     * // Get one AddChargeService
     * const addChargeService = await prisma.addChargeService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddChargeServiceFindFirstArgs>(args?: SelectSubset<T, AddChargeServiceFindFirstArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddChargeService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeServiceFindFirstOrThrowArgs} args - Arguments to find a AddChargeService
     * @example
     * // Get one AddChargeService
     * const addChargeService = await prisma.addChargeService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddChargeServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, AddChargeServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddChargeServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddChargeServices
     * const addChargeServices = await prisma.addChargeService.findMany()
     * 
     * // Get first 10 AddChargeServices
     * const addChargeServices = await prisma.addChargeService.findMany({ take: 10 })
     * 
     * // Only select the `addChargeId`
     * const addChargeServiceWithAddChargeIdOnly = await prisma.addChargeService.findMany({ select: { addChargeId: true } })
     * 
     */
    findMany<T extends AddChargeServiceFindManyArgs>(args?: SelectSubset<T, AddChargeServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddChargeService.
     * @param {AddChargeServiceCreateArgs} args - Arguments to create a AddChargeService.
     * @example
     * // Create one AddChargeService
     * const AddChargeService = await prisma.addChargeService.create({
     *   data: {
     *     // ... data to create a AddChargeService
     *   }
     * })
     * 
     */
    create<T extends AddChargeServiceCreateArgs>(args: SelectSubset<T, AddChargeServiceCreateArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddChargeServices.
     * @param {AddChargeServiceCreateManyArgs} args - Arguments to create many AddChargeServices.
     * @example
     * // Create many AddChargeServices
     * const addChargeService = await prisma.addChargeService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddChargeServiceCreateManyArgs>(args?: SelectSubset<T, AddChargeServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AddChargeService.
     * @param {AddChargeServiceDeleteArgs} args - Arguments to delete one AddChargeService.
     * @example
     * // Delete one AddChargeService
     * const AddChargeService = await prisma.addChargeService.delete({
     *   where: {
     *     // ... filter to delete one AddChargeService
     *   }
     * })
     * 
     */
    delete<T extends AddChargeServiceDeleteArgs>(args: SelectSubset<T, AddChargeServiceDeleteArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddChargeService.
     * @param {AddChargeServiceUpdateArgs} args - Arguments to update one AddChargeService.
     * @example
     * // Update one AddChargeService
     * const addChargeService = await prisma.addChargeService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddChargeServiceUpdateArgs>(args: SelectSubset<T, AddChargeServiceUpdateArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddChargeServices.
     * @param {AddChargeServiceDeleteManyArgs} args - Arguments to filter AddChargeServices to delete.
     * @example
     * // Delete a few AddChargeServices
     * const { count } = await prisma.addChargeService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddChargeServiceDeleteManyArgs>(args?: SelectSubset<T, AddChargeServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddChargeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddChargeServices
     * const addChargeService = await prisma.addChargeService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddChargeServiceUpdateManyArgs>(args: SelectSubset<T, AddChargeServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AddChargeService.
     * @param {AddChargeServiceUpsertArgs} args - Arguments to update or create a AddChargeService.
     * @example
     * // Update or create a AddChargeService
     * const addChargeService = await prisma.addChargeService.upsert({
     *   create: {
     *     // ... data to create a AddChargeService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddChargeService we want to update
     *   }
     * })
     */
    upsert<T extends AddChargeServiceUpsertArgs>(args: SelectSubset<T, AddChargeServiceUpsertArgs<ExtArgs>>): Prisma__AddChargeServiceClient<$Result.GetResult<Prisma.$AddChargeServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddChargeServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeServiceCountArgs} args - Arguments to filter AddChargeServices to count.
     * @example
     * // Count the number of AddChargeServices
     * const count = await prisma.addChargeService.count({
     *   where: {
     *     // ... the filter for the AddChargeServices we want to count
     *   }
     * })
    **/
    count<T extends AddChargeServiceCountArgs>(
      args?: Subset<T, AddChargeServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddChargeServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddChargeService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddChargeServiceAggregateArgs>(args: Subset<T, AddChargeServiceAggregateArgs>): Prisma.PrismaPromise<GetAddChargeServiceAggregateType<T>>

    /**
     * Group by AddChargeService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddChargeServiceGroupByArgs} args - Group by arguments.
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
      T extends AddChargeServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddChargeServiceGroupByArgs['orderBy'] }
        : { orderBy?: AddChargeServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddChargeServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddChargeServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddChargeService model
   */
  readonly fields: AddChargeServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddChargeService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddChargeServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    additionalCharge<T extends AdditionalChargeReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalChargeReceiptDefaultArgs<ExtArgs>>): Prisma__AdditionalChargeReceiptClient<$Result.GetResult<Prisma.$AdditionalChargeReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AddChargeService model
   */
  interface AddChargeServiceFieldRefs {
    readonly addChargeId: FieldRef<"AddChargeService", 'Int'>
    readonly serviceId: FieldRef<"AddChargeService", 'Int'>
    readonly quantity: FieldRef<"AddChargeService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AddChargeService findUnique
   */
  export type AddChargeServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeService to fetch.
     */
    where: AddChargeServiceWhereUniqueInput
  }

  /**
   * AddChargeService findUniqueOrThrow
   */
  export type AddChargeServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeService to fetch.
     */
    where: AddChargeServiceWhereUniqueInput
  }

  /**
   * AddChargeService findFirst
   */
  export type AddChargeServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeService to fetch.
     */
    where?: AddChargeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeServices to fetch.
     */
    orderBy?: AddChargeServiceOrderByWithRelationInput | AddChargeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddChargeServices.
     */
    cursor?: AddChargeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddChargeServices.
     */
    distinct?: AddChargeServiceScalarFieldEnum | AddChargeServiceScalarFieldEnum[]
  }

  /**
   * AddChargeService findFirstOrThrow
   */
  export type AddChargeServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeService to fetch.
     */
    where?: AddChargeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeServices to fetch.
     */
    orderBy?: AddChargeServiceOrderByWithRelationInput | AddChargeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddChargeServices.
     */
    cursor?: AddChargeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddChargeServices.
     */
    distinct?: AddChargeServiceScalarFieldEnum | AddChargeServiceScalarFieldEnum[]
  }

  /**
   * AddChargeService findMany
   */
  export type AddChargeServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * Filter, which AddChargeServices to fetch.
     */
    where?: AddChargeServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddChargeServices to fetch.
     */
    orderBy?: AddChargeServiceOrderByWithRelationInput | AddChargeServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddChargeServices.
     */
    cursor?: AddChargeServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddChargeServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddChargeServices.
     */
    skip?: number
    distinct?: AddChargeServiceScalarFieldEnum | AddChargeServiceScalarFieldEnum[]
  }

  /**
   * AddChargeService create
   */
  export type AddChargeServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a AddChargeService.
     */
    data: XOR<AddChargeServiceCreateInput, AddChargeServiceUncheckedCreateInput>
  }

  /**
   * AddChargeService createMany
   */
  export type AddChargeServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddChargeServices.
     */
    data: AddChargeServiceCreateManyInput | AddChargeServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddChargeService update
   */
  export type AddChargeServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a AddChargeService.
     */
    data: XOR<AddChargeServiceUpdateInput, AddChargeServiceUncheckedUpdateInput>
    /**
     * Choose, which AddChargeService to update.
     */
    where: AddChargeServiceWhereUniqueInput
  }

  /**
   * AddChargeService updateMany
   */
  export type AddChargeServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddChargeServices.
     */
    data: XOR<AddChargeServiceUpdateManyMutationInput, AddChargeServiceUncheckedUpdateManyInput>
    /**
     * Filter which AddChargeServices to update
     */
    where?: AddChargeServiceWhereInput
    /**
     * Limit how many AddChargeServices to update.
     */
    limit?: number
  }

  /**
   * AddChargeService upsert
   */
  export type AddChargeServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the AddChargeService to update in case it exists.
     */
    where: AddChargeServiceWhereUniqueInput
    /**
     * In case the AddChargeService found by the `where` argument doesn't exist, create a new AddChargeService with this data.
     */
    create: XOR<AddChargeServiceCreateInput, AddChargeServiceUncheckedCreateInput>
    /**
     * In case the AddChargeService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddChargeServiceUpdateInput, AddChargeServiceUncheckedUpdateInput>
  }

  /**
   * AddChargeService delete
   */
  export type AddChargeServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
    /**
     * Filter which AddChargeService to delete.
     */
    where: AddChargeServiceWhereUniqueInput
  }

  /**
   * AddChargeService deleteMany
   */
  export type AddChargeServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddChargeServices to delete
     */
    where?: AddChargeServiceWhereInput
    /**
     * Limit how many AddChargeServices to delete.
     */
    limit?: number
  }

  /**
   * AddChargeService without action
   */
  export type AddChargeServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddChargeService
     */
    select?: AddChargeServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddChargeService
     */
    omit?: AddChargeServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddChargeServiceInclude<ExtArgs> | null
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


  export const FloorScalarFieldEnum: {
    floorNumber: 'floorNumber'
  };

  export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum]


  export const RoomTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceWithBreakfast: 'priceWithBreakfast',
    priceWithoutBreakfast: 'priceWithoutBreakfast',
    pax: 'pax'
  };

  export type RoomTypeScalarFieldEnum = (typeof RoomTypeScalarFieldEnum)[keyof typeof RoomTypeScalarFieldEnum]


  export const RoomStatusScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type RoomStatusScalarFieldEnum = (typeof RoomStatusScalarFieldEnum)[keyof typeof RoomStatusScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    roomNumber: 'roomNumber',
    floorNumber: 'floorNumber',
    roomTypeId: 'roomTypeId',
    statusId: 'statusId',
    sessionId: 'sessionId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    numberOfExtraBeds: 'numberOfExtraBeds',
    actualCheckIn: 'actualCheckIn',
    actualCheckOut: 'actualCheckOut',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    uid: 'uid',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    nicCardNum: 'nicCardNum',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const MiniBarScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber'
  };

  export type MiniBarScalarFieldEnum = (typeof MiniBarScalarFieldEnum)[keyof typeof MiniBarScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const MiniBarItemScalarFieldEnum: {
    miniBarId: 'miniBarId',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type MiniBarItemScalarFieldEnum = (typeof MiniBarItemScalarFieldEnum)[keyof typeof MiniBarItemScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    guestId: 'guestId',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    estCheckIn: 'estCheckIn',
    estCheckOut: 'estCheckOut'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReceiptScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    guestId: 'guestId',
    totalPrice: 'totalPrice',
    amountPaid: 'amountPaid',
    paidBy: 'paidBy'
  };

  export type ReceiptScalarFieldEnum = (typeof ReceiptScalarFieldEnum)[keyof typeof ReceiptScalarFieldEnum]


  export const AdditionalChargeReceiptScalarFieldEnum: {
    id: 'id',
    receiptId: 'receiptId',
    purchaseDate: 'purchaseDate'
  };

  export type AdditionalChargeReceiptScalarFieldEnum = (typeof AdditionalChargeReceiptScalarFieldEnum)[keyof typeof AdditionalChargeReceiptScalarFieldEnum]


  export const RestaurantReceiptScalarFieldEnum: {
    id: 'id',
    addChargeId: 'addChargeId',
    totalPrice: 'totalPrice',
    purchaseDate: 'purchaseDate'
  };

  export type RestaurantReceiptScalarFieldEnum = (typeof RestaurantReceiptScalarFieldEnum)[keyof typeof RestaurantReceiptScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const AddChargeItemScalarFieldEnum: {
    addChargeId: 'addChargeId',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type AddChargeItemScalarFieldEnum = (typeof AddChargeItemScalarFieldEnum)[keyof typeof AddChargeItemScalarFieldEnum]


  export const AddChargeServiceScalarFieldEnum: {
    addChargeId: 'addChargeId',
    serviceId: 'serviceId',
    quantity: 'quantity'
  };

  export type AddChargeServiceScalarFieldEnum = (typeof AddChargeServiceScalarFieldEnum)[keyof typeof AddChargeServiceScalarFieldEnum]


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


  export const RoomTypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RoomTypeOrderByRelevanceFieldEnum = (typeof RoomTypeOrderByRelevanceFieldEnum)[keyof typeof RoomTypeOrderByRelevanceFieldEnum]


  export const RoomStatusOrderByRelevanceFieldEnum: {
    label: 'label'
  };

  export type RoomStatusOrderByRelevanceFieldEnum = (typeof RoomStatusOrderByRelevanceFieldEnum)[keyof typeof RoomStatusOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const RoomOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const GuestOrderByRelevanceFieldEnum: {
    uid: 'uid',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    nicCardNum: 'nicCardNum'
  };

  export type GuestOrderByRelevanceFieldEnum = (typeof GuestOrderByRelevanceFieldEnum)[keyof typeof GuestOrderByRelevanceFieldEnum]


  export const MiniBarOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber'
  };

  export type MiniBarOrderByRelevanceFieldEnum = (typeof MiniBarOrderByRelevanceFieldEnum)[keyof typeof MiniBarOrderByRelevanceFieldEnum]


  export const ItemOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ItemOrderByRelevanceFieldEnum = (typeof ItemOrderByRelevanceFieldEnum)[keyof typeof ItemOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber',
    guestId: 'guestId',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const ReceiptOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber',
    guestId: 'guestId',
    paidBy: 'paidBy'
  };

  export type ReceiptOrderByRelevanceFieldEnum = (typeof ReceiptOrderByRelevanceFieldEnum)[keyof typeof ReceiptOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type FloorWhereInput = {
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    floorNumber?: IntFilter<"Floor"> | number
    rooms?: RoomListRelationFilter
  }

  export type FloorOrderByWithRelationInput = {
    floorNumber?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type FloorWhereUniqueInput = Prisma.AtLeast<{
    floorNumber?: number
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    rooms?: RoomListRelationFilter
  }, "floorNumber">

  export type FloorOrderByWithAggregationInput = {
    floorNumber?: SortOrder
    _count?: FloorCountOrderByAggregateInput
    _avg?: FloorAvgOrderByAggregateInput
    _max?: FloorMaxOrderByAggregateInput
    _min?: FloorMinOrderByAggregateInput
    _sum?: FloorSumOrderByAggregateInput
  }

  export type FloorScalarWhereWithAggregatesInput = {
    AND?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    OR?: FloorScalarWhereWithAggregatesInput[]
    NOT?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    floorNumber?: IntWithAggregatesFilter<"Floor"> | number
  }

  export type RoomTypeWhereInput = {
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    id?: IntFilter<"RoomType"> | number
    name?: StringFilter<"RoomType"> | string
    priceWithBreakfast?: FloatFilter<"RoomType"> | number
    priceWithoutBreakfast?: FloatFilter<"RoomType"> | number
    pax?: IntFilter<"RoomType"> | number
    rooms?: RoomListRelationFilter
  }

  export type RoomTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceWithBreakfast?: SortOrder
    priceWithoutBreakfast?: SortOrder
    pax?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    _relevance?: RoomTypeOrderByRelevanceInput
  }

  export type RoomTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    name?: StringFilter<"RoomType"> | string
    priceWithBreakfast?: FloatFilter<"RoomType"> | number
    priceWithoutBreakfast?: FloatFilter<"RoomType"> | number
    pax?: IntFilter<"RoomType"> | number
    rooms?: RoomListRelationFilter
  }, "id">

  export type RoomTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceWithBreakfast?: SortOrder
    priceWithoutBreakfast?: SortOrder
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
    priceWithBreakfast?: FloatWithAggregatesFilter<"RoomType"> | number
    priceWithoutBreakfast?: FloatWithAggregatesFilter<"RoomType"> | number
    pax?: IntWithAggregatesFilter<"RoomType"> | number
  }

  export type RoomStatusWhereInput = {
    AND?: RoomStatusWhereInput | RoomStatusWhereInput[]
    OR?: RoomStatusWhereInput[]
    NOT?: RoomStatusWhereInput | RoomStatusWhereInput[]
    id?: IntFilter<"RoomStatus"> | number
    label?: StringFilter<"RoomStatus"> | string
    rooms?: RoomListRelationFilter
  }

  export type RoomStatusOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    _relevance?: RoomStatusOrderByRelevanceInput
  }

  export type RoomStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomStatusWhereInput | RoomStatusWhereInput[]
    OR?: RoomStatusWhereInput[]
    NOT?: RoomStatusWhereInput | RoomStatusWhereInput[]
    label?: StringFilter<"RoomStatus"> | string
    rooms?: RoomListRelationFilter
  }, "id">

  export type RoomStatusOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
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
    label?: StringWithAggregatesFilter<"RoomStatus"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomNumber?: StringFilter<"Room"> | string
    floorNumber?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
    statusId?: IntNullableFilter<"Room"> | number | null
    sessionId?: IntNullableFilter<"Room"> | number | null
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    status?: XOR<RoomStatusNullableScalarRelationFilter, RoomStatusWhereInput> | null
    miniBar?: XOR<MiniBarNullableScalarRelationFilter, MiniBarWhereInput> | null
    bookings?: BookingListRelationFilter
    receipts?: ReceiptListRelationFilter
    session?: SessionListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    statusId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    floor?: FloorOrderByWithRelationInput
    roomType?: RoomTypeOrderByWithRelationInput
    status?: RoomStatusOrderByWithRelationInput
    miniBar?: MiniBarOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    receipts?: ReceiptOrderByRelationAggregateInput
    session?: SessionOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    roomNumber?: string
    sessionId?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    floorNumber?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
    statusId?: IntNullableFilter<"Room"> | number | null
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    status?: XOR<RoomStatusNullableScalarRelationFilter, RoomStatusWhereInput> | null
    miniBar?: XOR<MiniBarNullableScalarRelationFilter, MiniBarWhereInput> | null
    bookings?: BookingListRelationFilter
    receipts?: ReceiptListRelationFilter
    session?: SessionListRelationFilter
  }, "roomNumber" | "sessionId">

  export type RoomOrderByWithAggregationInput = {
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    statusId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
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
    roomNumber?: StringWithAggregatesFilter<"Room"> | string
    floorNumber?: IntWithAggregatesFilter<"Room"> | number
    roomTypeId?: IntWithAggregatesFilter<"Room"> | number
    statusId?: IntNullableWithAggregatesFilter<"Room"> | number | null
    sessionId?: IntNullableWithAggregatesFilter<"Room"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    roomNumber?: StringFilter<"Session"> | string
    numberOfExtraBeds?: IntFilter<"Session"> | number
    actualCheckIn?: DateTimeFilter<"Session"> | Date | string
    actualCheckOut?: DateTimeNullableFilter<"Session"> | Date | string | null
    isActive?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guests?: GuestListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    numberOfExtraBeds?: SortOrder
    actualCheckIn?: SortOrder
    actualCheckOut?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    guests?: GuestOrderByRelationAggregateInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomNumber?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    numberOfExtraBeds?: IntFilter<"Session"> | number
    actualCheckIn?: DateTimeFilter<"Session"> | Date | string
    actualCheckOut?: DateTimeNullableFilter<"Session"> | Date | string | null
    isActive?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guests?: GuestListRelationFilter
  }, "id" | "roomNumber">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    numberOfExtraBeds?: SortOrder
    actualCheckIn?: SortOrder
    actualCheckOut?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    roomNumber?: StringWithAggregatesFilter<"Session"> | string
    numberOfExtraBeds?: IntWithAggregatesFilter<"Session"> | number
    actualCheckIn?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    actualCheckOut?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Session"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    uid?: StringFilter<"Guest"> | string
    name?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    email?: StringFilter<"Guest"> | string
    address?: StringFilter<"Guest"> | string
    nicCardNum?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    sessions?: SessionListRelationFilter
    bookings?: BookingListRelationFilter
    receipts?: ReceiptListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    uid?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    receipts?: ReceiptOrderByRelationAggregateInput
    _relevance?: GuestOrderByRelevanceInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    nicCardNum?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    name?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    email?: StringFilter<"Guest"> | string
    address?: StringFilter<"Guest"> | string
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    sessions?: SessionListRelationFilter
    bookings?: BookingListRelationFilter
    receipts?: ReceiptListRelationFilter
  }, "uid" | "nicCardNum">

  export type GuestOrderByWithAggregationInput = {
    uid?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNum?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"Guest"> | string
    name?: StringWithAggregatesFilter<"Guest"> | string
    phone?: StringWithAggregatesFilter<"Guest"> | string
    email?: StringWithAggregatesFilter<"Guest"> | string
    address?: StringWithAggregatesFilter<"Guest"> | string
    nicCardNum?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type MiniBarWhereInput = {
    AND?: MiniBarWhereInput | MiniBarWhereInput[]
    OR?: MiniBarWhereInput[]
    NOT?: MiniBarWhereInput | MiniBarWhereInput[]
    id?: IntFilter<"MiniBar"> | number
    roomNumber?: StringFilter<"MiniBar"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    items?: MiniBarItemListRelationFilter
  }

  export type MiniBarOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    room?: RoomOrderByWithRelationInput
    items?: MiniBarItemOrderByRelationAggregateInput
    _relevance?: MiniBarOrderByRelevanceInput
  }

  export type MiniBarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomNumber?: string
    AND?: MiniBarWhereInput | MiniBarWhereInput[]
    OR?: MiniBarWhereInput[]
    NOT?: MiniBarWhereInput | MiniBarWhereInput[]
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    items?: MiniBarItemListRelationFilter
  }, "id" | "roomNumber">

  export type MiniBarOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
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
    roomNumber?: StringWithAggregatesFilter<"MiniBar"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    price?: FloatFilter<"Item"> | number
    miniBarItems?: MiniBarItemListRelationFilter
    inventory?: InventoryListRelationFilter
    additionalCharges?: AddChargeItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    miniBarItems?: MiniBarItemOrderByRelationAggregateInput
    inventory?: InventoryOrderByRelationAggregateInput
    additionalCharges?: AddChargeItemOrderByRelationAggregateInput
    _relevance?: ItemOrderByRelevanceInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    price?: FloatFilter<"Item"> | number
    miniBarItems?: MiniBarItemListRelationFilter
    inventory?: InventoryListRelationFilter
    additionalCharges?: AddChargeItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
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
  }

  export type MiniBarItemWhereInput = {
    AND?: MiniBarItemWhereInput | MiniBarItemWhereInput[]
    OR?: MiniBarItemWhereInput[]
    NOT?: MiniBarItemWhereInput | MiniBarItemWhereInput[]
    miniBarId?: IntFilter<"MiniBarItem"> | number
    itemId?: IntFilter<"MiniBarItem"> | number
    quantity?: IntFilter<"MiniBarItem"> | number
    miniBar?: XOR<MiniBarScalarRelationFilter, MiniBarWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type MiniBarItemOrderByWithRelationInput = {
    miniBarId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    miniBar?: MiniBarOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type MiniBarItemWhereUniqueInput = Prisma.AtLeast<{
    miniBarId_itemId?: MiniBarItemMiniBarIdItemIdCompoundUniqueInput
    AND?: MiniBarItemWhereInput | MiniBarItemWhereInput[]
    OR?: MiniBarItemWhereInput[]
    NOT?: MiniBarItemWhereInput | MiniBarItemWhereInput[]
    miniBarId?: IntFilter<"MiniBarItem"> | number
    itemId?: IntFilter<"MiniBarItem"> | number
    quantity?: IntFilter<"MiniBarItem"> | number
    miniBar?: XOR<MiniBarScalarRelationFilter, MiniBarWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "miniBarId_itemId">

  export type MiniBarItemOrderByWithAggregationInput = {
    miniBarId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    _count?: MiniBarItemCountOrderByAggregateInput
    _avg?: MiniBarItemAvgOrderByAggregateInput
    _max?: MiniBarItemMaxOrderByAggregateInput
    _min?: MiniBarItemMinOrderByAggregateInput
    _sum?: MiniBarItemSumOrderByAggregateInput
  }

  export type MiniBarItemScalarWhereWithAggregatesInput = {
    AND?: MiniBarItemScalarWhereWithAggregatesInput | MiniBarItemScalarWhereWithAggregatesInput[]
    OR?: MiniBarItemScalarWhereWithAggregatesInput[]
    NOT?: MiniBarItemScalarWhereWithAggregatesInput | MiniBarItemScalarWhereWithAggregatesInput[]
    miniBarId?: IntWithAggregatesFilter<"MiniBarItem"> | number
    itemId?: IntWithAggregatesFilter<"MiniBarItem"> | number
    quantity?: IntWithAggregatesFilter<"MiniBarItem"> | number
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: IntFilter<"Inventory"> | number
    itemId?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    itemId?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

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

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    roomNumber?: StringFilter<"Booking"> | string
    guestId?: StringNullableFilter<"Booking"> | string | null
    contactName?: StringFilter<"Booking"> | string
    contactPhone?: StringFilter<"Booking"> | string
    contactEmail?: StringNullableFilter<"Booking"> | string | null
    estCheckIn?: DateTimeFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeFilter<"Booking"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guest?: XOR<GuestNullableScalarRelationFilter, GuestWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrderInput | SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
    room?: RoomOrderByWithRelationInput
    guest?: GuestOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    roomNumber?: StringFilter<"Booking"> | string
    guestId?: StringNullableFilter<"Booking"> | string | null
    contactName?: StringFilter<"Booking"> | string
    contactPhone?: StringFilter<"Booking"> | string
    contactEmail?: StringNullableFilter<"Booking"> | string | null
    estCheckIn?: DateTimeFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeFilter<"Booking"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guest?: XOR<GuestNullableScalarRelationFilter, GuestWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrderInput | SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrderInput | SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    roomNumber?: StringWithAggregatesFilter<"Booking"> | string
    guestId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    contactName?: StringWithAggregatesFilter<"Booking"> | string
    contactPhone?: StringWithAggregatesFilter<"Booking"> | string
    contactEmail?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    estCheckIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type ReceiptWhereInput = {
    AND?: ReceiptWhereInput | ReceiptWhereInput[]
    OR?: ReceiptWhereInput[]
    NOT?: ReceiptWhereInput | ReceiptWhereInput[]
    id?: IntFilter<"Receipt"> | number
    roomNumber?: StringFilter<"Receipt"> | string
    guestId?: StringFilter<"Receipt"> | string
    totalPrice?: FloatFilter<"Receipt"> | number
    amountPaid?: FloatFilter<"Receipt"> | number
    paidBy?: StringFilter<"Receipt"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    additionalCharges?: AdditionalChargeReceiptListRelationFilter
  }

  export type ReceiptOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    paidBy?: SortOrder
    room?: RoomOrderByWithRelationInput
    guest?: GuestOrderByWithRelationInput
    additionalCharges?: AdditionalChargeReceiptOrderByRelationAggregateInput
    _relevance?: ReceiptOrderByRelevanceInput
  }

  export type ReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceiptWhereInput | ReceiptWhereInput[]
    OR?: ReceiptWhereInput[]
    NOT?: ReceiptWhereInput | ReceiptWhereInput[]
    roomNumber?: StringFilter<"Receipt"> | string
    guestId?: StringFilter<"Receipt"> | string
    totalPrice?: FloatFilter<"Receipt"> | number
    amountPaid?: FloatFilter<"Receipt"> | number
    paidBy?: StringFilter<"Receipt"> | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    additionalCharges?: AdditionalChargeReceiptListRelationFilter
  }, "id">

  export type ReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    paidBy?: SortOrder
    _count?: ReceiptCountOrderByAggregateInput
    _avg?: ReceiptAvgOrderByAggregateInput
    _max?: ReceiptMaxOrderByAggregateInput
    _min?: ReceiptMinOrderByAggregateInput
    _sum?: ReceiptSumOrderByAggregateInput
  }

  export type ReceiptScalarWhereWithAggregatesInput = {
    AND?: ReceiptScalarWhereWithAggregatesInput | ReceiptScalarWhereWithAggregatesInput[]
    OR?: ReceiptScalarWhereWithAggregatesInput[]
    NOT?: ReceiptScalarWhereWithAggregatesInput | ReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Receipt"> | number
    roomNumber?: StringWithAggregatesFilter<"Receipt"> | string
    guestId?: StringWithAggregatesFilter<"Receipt"> | string
    totalPrice?: FloatWithAggregatesFilter<"Receipt"> | number
    amountPaid?: FloatWithAggregatesFilter<"Receipt"> | number
    paidBy?: StringWithAggregatesFilter<"Receipt"> | string
  }

  export type AdditionalChargeReceiptWhereInput = {
    AND?: AdditionalChargeReceiptWhereInput | AdditionalChargeReceiptWhereInput[]
    OR?: AdditionalChargeReceiptWhereInput[]
    NOT?: AdditionalChargeReceiptWhereInput | AdditionalChargeReceiptWhereInput[]
    id?: IntFilter<"AdditionalChargeReceipt"> | number
    receiptId?: IntFilter<"AdditionalChargeReceipt"> | number
    purchaseDate?: DateTimeFilter<"AdditionalChargeReceipt"> | Date | string
    receipt?: XOR<ReceiptScalarRelationFilter, ReceiptWhereInput>
    restaurantReceipt?: XOR<RestaurantReceiptNullableScalarRelationFilter, RestaurantReceiptWhereInput> | null
    items?: AddChargeItemListRelationFilter
    services?: AddChargeServiceListRelationFilter
  }

  export type AdditionalChargeReceiptOrderByWithRelationInput = {
    id?: SortOrder
    receiptId?: SortOrder
    purchaseDate?: SortOrder
    receipt?: ReceiptOrderByWithRelationInput
    restaurantReceipt?: RestaurantReceiptOrderByWithRelationInput
    items?: AddChargeItemOrderByRelationAggregateInput
    services?: AddChargeServiceOrderByRelationAggregateInput
  }

  export type AdditionalChargeReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdditionalChargeReceiptWhereInput | AdditionalChargeReceiptWhereInput[]
    OR?: AdditionalChargeReceiptWhereInput[]
    NOT?: AdditionalChargeReceiptWhereInput | AdditionalChargeReceiptWhereInput[]
    receiptId?: IntFilter<"AdditionalChargeReceipt"> | number
    purchaseDate?: DateTimeFilter<"AdditionalChargeReceipt"> | Date | string
    receipt?: XOR<ReceiptScalarRelationFilter, ReceiptWhereInput>
    restaurantReceipt?: XOR<RestaurantReceiptNullableScalarRelationFilter, RestaurantReceiptWhereInput> | null
    items?: AddChargeItemListRelationFilter
    services?: AddChargeServiceListRelationFilter
  }, "id">

  export type AdditionalChargeReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    receiptId?: SortOrder
    purchaseDate?: SortOrder
    _count?: AdditionalChargeReceiptCountOrderByAggregateInput
    _avg?: AdditionalChargeReceiptAvgOrderByAggregateInput
    _max?: AdditionalChargeReceiptMaxOrderByAggregateInput
    _min?: AdditionalChargeReceiptMinOrderByAggregateInput
    _sum?: AdditionalChargeReceiptSumOrderByAggregateInput
  }

  export type AdditionalChargeReceiptScalarWhereWithAggregatesInput = {
    AND?: AdditionalChargeReceiptScalarWhereWithAggregatesInput | AdditionalChargeReceiptScalarWhereWithAggregatesInput[]
    OR?: AdditionalChargeReceiptScalarWhereWithAggregatesInput[]
    NOT?: AdditionalChargeReceiptScalarWhereWithAggregatesInput | AdditionalChargeReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdditionalChargeReceipt"> | number
    receiptId?: IntWithAggregatesFilter<"AdditionalChargeReceipt"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"AdditionalChargeReceipt"> | Date | string
  }

  export type RestaurantReceiptWhereInput = {
    AND?: RestaurantReceiptWhereInput | RestaurantReceiptWhereInput[]
    OR?: RestaurantReceiptWhereInput[]
    NOT?: RestaurantReceiptWhereInput | RestaurantReceiptWhereInput[]
    id?: IntFilter<"RestaurantReceipt"> | number
    addChargeId?: IntFilter<"RestaurantReceipt"> | number
    totalPrice?: FloatFilter<"RestaurantReceipt"> | number
    purchaseDate?: DateTimeFilter<"RestaurantReceipt"> | Date | string
    additionalCharge?: XOR<AdditionalChargeReceiptScalarRelationFilter, AdditionalChargeReceiptWhereInput>
  }

  export type RestaurantReceiptOrderByWithRelationInput = {
    id?: SortOrder
    addChargeId?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
    additionalCharge?: AdditionalChargeReceiptOrderByWithRelationInput
  }

  export type RestaurantReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    addChargeId?: number
    AND?: RestaurantReceiptWhereInput | RestaurantReceiptWhereInput[]
    OR?: RestaurantReceiptWhereInput[]
    NOT?: RestaurantReceiptWhereInput | RestaurantReceiptWhereInput[]
    totalPrice?: FloatFilter<"RestaurantReceipt"> | number
    purchaseDate?: DateTimeFilter<"RestaurantReceipt"> | Date | string
    additionalCharge?: XOR<AdditionalChargeReceiptScalarRelationFilter, AdditionalChargeReceiptWhereInput>
  }, "id" | "addChargeId">

  export type RestaurantReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    addChargeId?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
    _count?: RestaurantReceiptCountOrderByAggregateInput
    _avg?: RestaurantReceiptAvgOrderByAggregateInput
    _max?: RestaurantReceiptMaxOrderByAggregateInput
    _min?: RestaurantReceiptMinOrderByAggregateInput
    _sum?: RestaurantReceiptSumOrderByAggregateInput
  }

  export type RestaurantReceiptScalarWhereWithAggregatesInput = {
    AND?: RestaurantReceiptScalarWhereWithAggregatesInput | RestaurantReceiptScalarWhereWithAggregatesInput[]
    OR?: RestaurantReceiptScalarWhereWithAggregatesInput[]
    NOT?: RestaurantReceiptScalarWhereWithAggregatesInput | RestaurantReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestaurantReceipt"> | number
    addChargeId?: IntWithAggregatesFilter<"RestaurantReceipt"> | number
    totalPrice?: FloatWithAggregatesFilter<"RestaurantReceipt"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"RestaurantReceipt"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    additionalCharges?: AddChargeServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    additionalCharges?: AddChargeServiceOrderByRelationAggregateInput
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    additionalCharges?: AddChargeServiceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    price?: FloatWithAggregatesFilter<"Service"> | number
  }

  export type AddChargeItemWhereInput = {
    AND?: AddChargeItemWhereInput | AddChargeItemWhereInput[]
    OR?: AddChargeItemWhereInput[]
    NOT?: AddChargeItemWhereInput | AddChargeItemWhereInput[]
    addChargeId?: IntFilter<"AddChargeItem"> | number
    itemId?: IntFilter<"AddChargeItem"> | number
    quantity?: IntFilter<"AddChargeItem"> | number
    additionalCharge?: XOR<AdditionalChargeReceiptScalarRelationFilter, AdditionalChargeReceiptWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type AddChargeItemOrderByWithRelationInput = {
    addChargeId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    additionalCharge?: AdditionalChargeReceiptOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type AddChargeItemWhereUniqueInput = Prisma.AtLeast<{
    addChargeId_itemId?: AddChargeItemAddChargeIdItemIdCompoundUniqueInput
    AND?: AddChargeItemWhereInput | AddChargeItemWhereInput[]
    OR?: AddChargeItemWhereInput[]
    NOT?: AddChargeItemWhereInput | AddChargeItemWhereInput[]
    addChargeId?: IntFilter<"AddChargeItem"> | number
    itemId?: IntFilter<"AddChargeItem"> | number
    quantity?: IntFilter<"AddChargeItem"> | number
    additionalCharge?: XOR<AdditionalChargeReceiptScalarRelationFilter, AdditionalChargeReceiptWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "addChargeId_itemId">

  export type AddChargeItemOrderByWithAggregationInput = {
    addChargeId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    _count?: AddChargeItemCountOrderByAggregateInput
    _avg?: AddChargeItemAvgOrderByAggregateInput
    _max?: AddChargeItemMaxOrderByAggregateInput
    _min?: AddChargeItemMinOrderByAggregateInput
    _sum?: AddChargeItemSumOrderByAggregateInput
  }

  export type AddChargeItemScalarWhereWithAggregatesInput = {
    AND?: AddChargeItemScalarWhereWithAggregatesInput | AddChargeItemScalarWhereWithAggregatesInput[]
    OR?: AddChargeItemScalarWhereWithAggregatesInput[]
    NOT?: AddChargeItemScalarWhereWithAggregatesInput | AddChargeItemScalarWhereWithAggregatesInput[]
    addChargeId?: IntWithAggregatesFilter<"AddChargeItem"> | number
    itemId?: IntWithAggregatesFilter<"AddChargeItem"> | number
    quantity?: IntWithAggregatesFilter<"AddChargeItem"> | number
  }

  export type AddChargeServiceWhereInput = {
    AND?: AddChargeServiceWhereInput | AddChargeServiceWhereInput[]
    OR?: AddChargeServiceWhereInput[]
    NOT?: AddChargeServiceWhereInput | AddChargeServiceWhereInput[]
    addChargeId?: IntFilter<"AddChargeService"> | number
    serviceId?: IntFilter<"AddChargeService"> | number
    quantity?: IntFilter<"AddChargeService"> | number
    additionalCharge?: XOR<AdditionalChargeReceiptScalarRelationFilter, AdditionalChargeReceiptWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type AddChargeServiceOrderByWithRelationInput = {
    addChargeId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
    additionalCharge?: AdditionalChargeReceiptOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type AddChargeServiceWhereUniqueInput = Prisma.AtLeast<{
    addChargeId_serviceId?: AddChargeServiceAddChargeIdServiceIdCompoundUniqueInput
    AND?: AddChargeServiceWhereInput | AddChargeServiceWhereInput[]
    OR?: AddChargeServiceWhereInput[]
    NOT?: AddChargeServiceWhereInput | AddChargeServiceWhereInput[]
    addChargeId?: IntFilter<"AddChargeService"> | number
    serviceId?: IntFilter<"AddChargeService"> | number
    quantity?: IntFilter<"AddChargeService"> | number
    additionalCharge?: XOR<AdditionalChargeReceiptScalarRelationFilter, AdditionalChargeReceiptWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "addChargeId_serviceId">

  export type AddChargeServiceOrderByWithAggregationInput = {
    addChargeId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
    _count?: AddChargeServiceCountOrderByAggregateInput
    _avg?: AddChargeServiceAvgOrderByAggregateInput
    _max?: AddChargeServiceMaxOrderByAggregateInput
    _min?: AddChargeServiceMinOrderByAggregateInput
    _sum?: AddChargeServiceSumOrderByAggregateInput
  }

  export type AddChargeServiceScalarWhereWithAggregatesInput = {
    AND?: AddChargeServiceScalarWhereWithAggregatesInput | AddChargeServiceScalarWhereWithAggregatesInput[]
    OR?: AddChargeServiceScalarWhereWithAggregatesInput[]
    NOT?: AddChargeServiceScalarWhereWithAggregatesInput | AddChargeServiceScalarWhereWithAggregatesInput[]
    addChargeId?: IntWithAggregatesFilter<"AddChargeService"> | number
    serviceId?: IntWithAggregatesFilter<"AddChargeService"> | number
    quantity?: IntWithAggregatesFilter<"AddChargeService"> | number
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

  export type FloorCreateInput = {
    floorNumber: number
    rooms?: RoomCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateInput = {
    floorNumber: number
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorUpdateInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorCreateManyInput = {
    floorNumber: number
  }

  export type FloorUpdateManyMutationInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
  }

  export type FloorUncheckedUpdateManyInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTypeCreateInput = {
    id: number
    name: string
    priceWithBreakfast: number
    priceWithoutBreakfast: number
    pax: number
    rooms?: RoomCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateInput = {
    id: number
    name: string
    priceWithBreakfast: number
    priceWithoutBreakfast: number
    pax: number
    rooms?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceWithBreakfast?: FloatFieldUpdateOperationsInput | number
    priceWithoutBreakfast?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceWithBreakfast?: FloatFieldUpdateOperationsInput | number
    priceWithoutBreakfast?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeCreateManyInput = {
    id: number
    name: string
    priceWithBreakfast: number
    priceWithoutBreakfast: number
    pax: number
  }

  export type RoomTypeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceWithBreakfast?: FloatFieldUpdateOperationsInput | number
    priceWithoutBreakfast?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceWithBreakfast?: FloatFieldUpdateOperationsInput | number
    priceWithoutBreakfast?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
  }

  export type RoomStatusCreateInput = {
    id: number
    label: string
    rooms?: RoomCreateNestedManyWithoutStatusInput
  }

  export type RoomStatusUncheckedCreateInput = {
    id: number
    label: string
    rooms?: RoomUncheckedCreateNestedManyWithoutStatusInput
  }

  export type RoomStatusUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutStatusNestedInput
  }

  export type RoomStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type RoomStatusCreateManyInput = {
    id: number
    label: string
  }

  export type RoomStatusUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type RoomStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    roomNumber: string
    sessionId?: number | null
    floor: FloorCreateNestedOneWithoutRoomsInput
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    status?: RoomStatusCreateNestedOneWithoutRoomsInput
    miniBar?: MiniBarCreateNestedOneWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    receipts?: ReceiptCreateNestedManyWithoutRoomInput
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
    miniBar?: MiniBarUncheckedCreateNestedOneWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutRoomInput
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    status?: RoomStatusUpdateOneWithoutRoomsNestedInput
    miniBar?: MiniBarUpdateOneWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUpdateManyWithoutRoomNestedInput
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    miniBar?: MiniBarUncheckedUpdateOneWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutRoomNestedInput
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
  }

  export type RoomUpdateManyMutationInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoomUncheckedUpdateManyInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutSessionInput
    guests?: GuestCreateNestedManyWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    roomNumber: string
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type SessionUpdateInput = {
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutSessionNestedInput
    guests?: GuestUpdateManyWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type SessionCreateManyInput = {
    id?: number
    roomNumber: string
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutGuestsInput
    bookings?: BookingCreateNestedManyWithoutGuestInput
    receipts?: ReceiptCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutGuestsInput
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutGuestsNestedInput
    bookings?: BookingUpdateManyWithoutGuestNestedInput
    receipts?: ReceiptUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutGuestsNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiniBarCreateInput = {
    room: RoomCreateNestedOneWithoutMiniBarInput
    items?: MiniBarItemCreateNestedManyWithoutMiniBarInput
  }

  export type MiniBarUncheckedCreateInput = {
    id?: number
    roomNumber: string
    items?: MiniBarItemUncheckedCreateNestedManyWithoutMiniBarInput
  }

  export type MiniBarUpdateInput = {
    room?: RoomUpdateOneRequiredWithoutMiniBarNestedInput
    items?: MiniBarItemUpdateManyWithoutMiniBarNestedInput
  }

  export type MiniBarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    items?: MiniBarItemUncheckedUpdateManyWithoutMiniBarNestedInput
  }

  export type MiniBarCreateManyInput = {
    id?: number
    roomNumber: string
  }

  export type MiniBarUpdateManyMutationInput = {

  }

  export type MiniBarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    name: string
    price: number
    miniBarItems?: MiniBarItemCreateNestedManyWithoutItemInput
    inventory?: InventoryCreateNestedManyWithoutItemInput
    additionalCharges?: AddChargeItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    miniBarItems?: MiniBarItemUncheckedCreateNestedManyWithoutItemInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutItemInput
    additionalCharges?: AddChargeItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    miniBarItems?: MiniBarItemUpdateManyWithoutItemNestedInput
    inventory?: InventoryUpdateManyWithoutItemNestedInput
    additionalCharges?: AddChargeItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    miniBarItems?: MiniBarItemUncheckedUpdateManyWithoutItemNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutItemNestedInput
    additionalCharges?: AddChargeItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    price: number
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MiniBarItemCreateInput = {
    quantity: number
    miniBar: MiniBarCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutMiniBarItemsInput
  }

  export type MiniBarItemUncheckedCreateInput = {
    miniBarId: number
    itemId: number
    quantity: number
  }

  export type MiniBarItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    miniBar?: MiniBarUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutMiniBarItemsNestedInput
  }

  export type MiniBarItemUncheckedUpdateInput = {
    miniBarId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniBarItemCreateManyInput = {
    miniBarId: number
    itemId: number
    quantity: number
  }

  export type MiniBarItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniBarItemUncheckedUpdateManyInput = {
    miniBarId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCreateInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: number
    itemId: number
    quantity: number
  }

  export type InventoryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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

  export type BookingCreateInput = {
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
    room: RoomCreateNestedOneWithoutBookingsInput
    guest?: GuestCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    roomNumber: string
    guestId?: string | null
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingUpdateInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    guest?: GuestUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    roomNumber: string
    guestId?: string | null
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptCreateInput = {
    totalPrice: number
    amountPaid: number
    paidBy: string
    room: RoomCreateNestedOneWithoutReceiptsInput
    guest: GuestCreateNestedOneWithoutReceiptsInput
    additionalCharges?: AdditionalChargeReceiptCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUncheckedCreateInput = {
    id?: number
    roomNumber: string
    guestId: string
    totalPrice: number
    amountPaid: number
    paidBy: string
    additionalCharges?: AdditionalChargeReceiptUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUpdateInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutReceiptsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReceiptsNestedInput
    additionalCharges?: AdditionalChargeReceiptUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
    additionalCharges?: AdditionalChargeReceiptUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptCreateManyInput = {
    id?: number
    roomNumber: string
    guestId: string
    totalPrice: number
    amountPaid: number
    paidBy: string
  }

  export type ReceiptUpdateManyMutationInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
  }

  export type ReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
  }

  export type AdditionalChargeReceiptCreateInput = {
    purchaseDate: Date | string
    receipt: ReceiptCreateNestedOneWithoutAdditionalChargesInput
    restaurantReceipt?: RestaurantReceiptCreateNestedOneWithoutAdditionalChargeInput
    items?: AddChargeItemCreateNestedManyWithoutAdditionalChargeInput
    services?: AddChargeServiceCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptUncheckedCreateInput = {
    id?: number
    receiptId: number
    purchaseDate: Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedCreateNestedOneWithoutAdditionalChargeInput
    items?: AddChargeItemUncheckedCreateNestedManyWithoutAdditionalChargeInput
    services?: AddChargeServiceUncheckedCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptUpdateInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: ReceiptUpdateOneRequiredWithoutAdditionalChargesNestedInput
    restaurantReceipt?: RestaurantReceiptUpdateOneWithoutAdditionalChargeNestedInput
    items?: AddChargeItemUpdateManyWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AdditionalChargeReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedUpdateOneWithoutAdditionalChargeNestedInput
    items?: AddChargeItemUncheckedUpdateManyWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUncheckedUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AdditionalChargeReceiptCreateManyInput = {
    id?: number
    receiptId: number
    purchaseDate: Date | string
  }

  export type AdditionalChargeReceiptUpdateManyMutationInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdditionalChargeReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantReceiptCreateInput = {
    totalPrice: number
    purchaseDate: Date | string
    additionalCharge: AdditionalChargeReceiptCreateNestedOneWithoutRestaurantReceiptInput
  }

  export type RestaurantReceiptUncheckedCreateInput = {
    id?: number
    addChargeId: number
    totalPrice: number
    purchaseDate: Date | string
  }

  export type RestaurantReceiptUpdateInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    additionalCharge?: AdditionalChargeReceiptUpdateOneRequiredWithoutRestaurantReceiptNestedInput
  }

  export type RestaurantReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    addChargeId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantReceiptCreateManyInput = {
    id?: number
    addChargeId: number
    totalPrice: number
    purchaseDate: Date | string
  }

  export type RestaurantReceiptUpdateManyMutationInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    addChargeId?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    price: number
    additionalCharges?: AddChargeServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    additionalCharges?: AddChargeServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionalCharges?: AddChargeServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    additionalCharges?: AddChargeServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    price: number
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type AddChargeItemCreateInput = {
    quantity: number
    additionalCharge: AdditionalChargeReceiptCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutAdditionalChargesInput
  }

  export type AddChargeItemUncheckedCreateInput = {
    addChargeId: number
    itemId: number
    quantity: number
  }

  export type AddChargeItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    additionalCharge?: AdditionalChargeReceiptUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutAdditionalChargesNestedInput
  }

  export type AddChargeItemUncheckedUpdateInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeItemCreateManyInput = {
    addChargeId: number
    itemId: number
    quantity: number
  }

  export type AddChargeItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeItemUncheckedUpdateManyInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeServiceCreateInput = {
    quantity: number
    additionalCharge: AdditionalChargeReceiptCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutAdditionalChargesInput
  }

  export type AddChargeServiceUncheckedCreateInput = {
    addChargeId: number
    serviceId: number
    quantity: number
  }

  export type AddChargeServiceUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    additionalCharge?: AdditionalChargeReceiptUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutAdditionalChargesNestedInput
  }

  export type AddChargeServiceUncheckedUpdateInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeServiceCreateManyInput = {
    addChargeId: number
    serviceId: number
    quantity: number
  }

  export type AddChargeServiceUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeServiceUncheckedUpdateManyInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FloorCountOrderByAggregateInput = {
    floorNumber?: SortOrder
  }

  export type FloorAvgOrderByAggregateInput = {
    floorNumber?: SortOrder
  }

  export type FloorMaxOrderByAggregateInput = {
    floorNumber?: SortOrder
  }

  export type FloorMinOrderByAggregateInput = {
    floorNumber?: SortOrder
  }

  export type FloorSumOrderByAggregateInput = {
    floorNumber?: SortOrder
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

  export type RoomTypeOrderByRelevanceInput = {
    fields: RoomTypeOrderByRelevanceFieldEnum | RoomTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceWithBreakfast?: SortOrder
    priceWithoutBreakfast?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    priceWithBreakfast?: SortOrder
    priceWithoutBreakfast?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceWithBreakfast?: SortOrder
    priceWithoutBreakfast?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceWithBreakfast?: SortOrder
    priceWithoutBreakfast?: SortOrder
    pax?: SortOrder
  }

  export type RoomTypeSumOrderByAggregateInput = {
    id?: SortOrder
    priceWithBreakfast?: SortOrder
    priceWithoutBreakfast?: SortOrder
    pax?: SortOrder
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

  export type RoomStatusOrderByRelevanceInput = {
    fields: RoomStatusOrderByRelevanceFieldEnum | RoomStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomStatusCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type RoomStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type RoomStatusMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type RoomStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloorScalarRelationFilter = {
    is?: FloorWhereInput
    isNot?: FloorWhereInput
  }

  export type RoomTypeScalarRelationFilter = {
    is?: RoomTypeWhereInput
    isNot?: RoomTypeWhereInput
  }

  export type RoomStatusNullableScalarRelationFilter = {
    is?: RoomStatusWhereInput | null
    isNot?: RoomStatusWhereInput | null
  }

  export type MiniBarNullableScalarRelationFilter = {
    is?: MiniBarWhereInput | null
    isNot?: MiniBarWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReceiptListRelationFilter = {
    every?: ReceiptWhereInput
    some?: ReceiptWhereInput
    none?: ReceiptWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    statusId?: SortOrder
    sessionId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    statusId?: SortOrder
    sessionId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    statusId?: SortOrder
    sessionId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    roomNumber?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    statusId?: SortOrder
    sessionId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    statusId?: SortOrder
    sessionId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type GuestListRelationFilter = {
    every?: GuestWhereInput
    some?: GuestWhereInput
    none?: GuestWhereInput
  }

  export type GuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    numberOfExtraBeds?: SortOrder
    actualCheckIn?: SortOrder
    actualCheckOut?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    numberOfExtraBeds?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    numberOfExtraBeds?: SortOrder
    actualCheckIn?: SortOrder
    actualCheckOut?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    numberOfExtraBeds?: SortOrder
    actualCheckIn?: SortOrder
    actualCheckOut?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    numberOfExtraBeds?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GuestOrderByRelevanceInput = {
    fields: GuestOrderByRelevanceFieldEnum | GuestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuestCountOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    uid?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MiniBarItemListRelationFilter = {
    every?: MiniBarItemWhereInput
    some?: MiniBarItemWhereInput
    none?: MiniBarItemWhereInput
  }

  export type MiniBarItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MiniBarOrderByRelevanceInput = {
    fields: MiniBarOrderByRelevanceFieldEnum | MiniBarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MiniBarCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
  }

  export type MiniBarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MiniBarMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
  }

  export type MiniBarMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
  }

  export type MiniBarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type AddChargeItemListRelationFilter = {
    every?: AddChargeItemWhereInput
    some?: AddChargeItemWhereInput
    none?: AddChargeItemWhereInput
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddChargeItemOrderByRelationAggregateInput = {
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
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type MiniBarScalarRelationFilter = {
    is?: MiniBarWhereInput
    isNot?: MiniBarWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type MiniBarItemMiniBarIdItemIdCompoundUniqueInput = {
    miniBarId: number
    itemId: number
  }

  export type MiniBarItemCountOrderByAggregateInput = {
    miniBarId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarItemAvgOrderByAggregateInput = {
    miniBarId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarItemMaxOrderByAggregateInput = {
    miniBarId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarItemMinOrderByAggregateInput = {
    miniBarId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniBarItemSumOrderByAggregateInput = {
    miniBarId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
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

  export type GuestNullableScalarRelationFilter = {
    is?: GuestWhereInput | null
    isNot?: GuestWhereInput | null
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type AdditionalChargeReceiptListRelationFilter = {
    every?: AdditionalChargeReceiptWhereInput
    some?: AdditionalChargeReceiptWhereInput
    none?: AdditionalChargeReceiptWhereInput
  }

  export type AdditionalChargeReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceiptOrderByRelevanceInput = {
    fields: ReceiptOrderByRelevanceFieldEnum | ReceiptOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    paidBy?: SortOrder
  }

  export type ReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
  }

  export type ReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    paidBy?: SortOrder
  }

  export type ReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    guestId?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
    paidBy?: SortOrder
  }

  export type ReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    amountPaid?: SortOrder
  }

  export type ReceiptScalarRelationFilter = {
    is?: ReceiptWhereInput
    isNot?: ReceiptWhereInput
  }

  export type RestaurantReceiptNullableScalarRelationFilter = {
    is?: RestaurantReceiptWhereInput | null
    isNot?: RestaurantReceiptWhereInput | null
  }

  export type AddChargeServiceListRelationFilter = {
    every?: AddChargeServiceWhereInput
    some?: AddChargeServiceWhereInput
    none?: AddChargeServiceWhereInput
  }

  export type AddChargeServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdditionalChargeReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    purchaseDate?: SortOrder
  }

  export type AdditionalChargeReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
  }

  export type AdditionalChargeReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    purchaseDate?: SortOrder
  }

  export type AdditionalChargeReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
    purchaseDate?: SortOrder
  }

  export type AdditionalChargeReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    receiptId?: SortOrder
  }

  export type AdditionalChargeReceiptScalarRelationFilter = {
    is?: AdditionalChargeReceiptWhereInput
    isNot?: AdditionalChargeReceiptWhereInput
  }

  export type RestaurantReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    addChargeId?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
  }

  export type RestaurantReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    addChargeId?: SortOrder
    totalPrice?: SortOrder
  }

  export type RestaurantReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    addChargeId?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
  }

  export type RestaurantReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    addChargeId?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
  }

  export type RestaurantReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    addChargeId?: SortOrder
    totalPrice?: SortOrder
  }

  export type ServiceOrderByRelevanceInput = {
    fields: ServiceOrderByRelevanceFieldEnum | ServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type AddChargeItemAddChargeIdItemIdCompoundUniqueInput = {
    addChargeId: number
    itemId: number
  }

  export type AddChargeItemCountOrderByAggregateInput = {
    addChargeId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeItemAvgOrderByAggregateInput = {
    addChargeId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeItemMaxOrderByAggregateInput = {
    addChargeId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeItemMinOrderByAggregateInput = {
    addChargeId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeItemSumOrderByAggregateInput = {
    addChargeId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type AddChargeServiceAddChargeIdServiceIdCompoundUniqueInput = {
    addChargeId: number
    serviceId: number
  }

  export type AddChargeServiceCountOrderByAggregateInput = {
    addChargeId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeServiceAvgOrderByAggregateInput = {
    addChargeId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeServiceMaxOrderByAggregateInput = {
    addChargeId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeServiceMinOrderByAggregateInput = {
    addChargeId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type AddChargeServiceSumOrderByAggregateInput = {
    addChargeId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
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

  export type RoomCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
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

  export type RoomUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomTypeInput | RoomUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomTypeInput | RoomUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomTypeInput | RoomUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomTypeInput | RoomUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomTypeInput | RoomUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomTypeInput | RoomUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
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

  export type FloorCreateNestedOneWithoutRoomsInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    connect?: FloorWhereUniqueInput
  }

  export type RoomTypeCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomsInput
    connect?: RoomTypeWhereUniqueInput
  }

  export type RoomStatusCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomStatusCreateOrConnectWithoutRoomsInput
    connect?: RoomStatusWhereUniqueInput
  }

  export type MiniBarCreateNestedOneWithoutRoomInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput
    connect?: MiniBarWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReceiptCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReceiptCreateWithoutRoomInput, ReceiptUncheckedCreateWithoutRoomInput> | ReceiptCreateWithoutRoomInput[] | ReceiptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutRoomInput | ReceiptCreateOrConnectWithoutRoomInput[]
    createMany?: ReceiptCreateManyRoomInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutRoomInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MiniBarUncheckedCreateNestedOneWithoutRoomInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput
    connect?: MiniBarWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReceiptUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReceiptCreateWithoutRoomInput, ReceiptUncheckedCreateWithoutRoomInput> | ReceiptCreateWithoutRoomInput[] | ReceiptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutRoomInput | ReceiptCreateOrConnectWithoutRoomInput[]
    createMany?: ReceiptCreateManyRoomInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloorUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    upsert?: FloorUpsertWithoutRoomsInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutRoomsInput, FloorUpdateWithoutRoomsInput>, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomTypeUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomsInput
    upsert?: RoomTypeUpsertWithoutRoomsInput
    connect?: RoomTypeWhereUniqueInput
    update?: XOR<XOR<RoomTypeUpdateToOneWithWhereWithoutRoomsInput, RoomTypeUpdateWithoutRoomsInput>, RoomTypeUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomStatusUpdateOneWithoutRoomsNestedInput = {
    create?: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomStatusCreateOrConnectWithoutRoomsInput
    upsert?: RoomStatusUpsertWithoutRoomsInput
    disconnect?: RoomStatusWhereInput | boolean
    delete?: RoomStatusWhereInput | boolean
    connect?: RoomStatusWhereUniqueInput
    update?: XOR<XOR<RoomStatusUpdateToOneWithWhereWithoutRoomsInput, RoomStatusUpdateWithoutRoomsInput>, RoomStatusUncheckedUpdateWithoutRoomsInput>
  }

  export type MiniBarUpdateOneWithoutRoomNestedInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput
    upsert?: MiniBarUpsertWithoutRoomInput
    disconnect?: MiniBarWhereInput | boolean
    delete?: MiniBarWhereInput | boolean
    connect?: MiniBarWhereUniqueInput
    update?: XOR<XOR<MiniBarUpdateToOneWithWhereWithoutRoomInput, MiniBarUpdateWithoutRoomInput>, MiniBarUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReceiptUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReceiptCreateWithoutRoomInput, ReceiptUncheckedCreateWithoutRoomInput> | ReceiptCreateWithoutRoomInput[] | ReceiptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutRoomInput | ReceiptCreateOrConnectWithoutRoomInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutRoomInput | ReceiptUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReceiptCreateManyRoomInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutRoomInput | ReceiptUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutRoomInput | ReceiptUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutRoomInput | SessionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutRoomInput | SessionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutRoomInput | SessionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MiniBarUncheckedUpdateOneWithoutRoomNestedInput = {
    create?: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutRoomInput
    upsert?: MiniBarUpsertWithoutRoomInput
    disconnect?: MiniBarWhereInput | boolean
    delete?: MiniBarWhereInput | boolean
    connect?: MiniBarWhereUniqueInput
    update?: XOR<XOR<MiniBarUpdateToOneWithWhereWithoutRoomInput, MiniBarUpdateWithoutRoomInput>, MiniBarUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReceiptUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReceiptCreateWithoutRoomInput, ReceiptUncheckedCreateWithoutRoomInput> | ReceiptCreateWithoutRoomInput[] | ReceiptUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutRoomInput | ReceiptCreateOrConnectWithoutRoomInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutRoomInput | ReceiptUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReceiptCreateManyRoomInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutRoomInput | ReceiptUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutRoomInput | ReceiptUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutRoomInput | SessionUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutRoomInput | SessionUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutRoomInput | SessionUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutSessionInput = {
    create?: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSessionInput
    connect?: RoomWhereUniqueInput
  }

  export type GuestCreateNestedManyWithoutSessionsInput = {
    create?: XOR<GuestCreateWithoutSessionsInput, GuestUncheckedCreateWithoutSessionsInput> | GuestCreateWithoutSessionsInput[] | GuestUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionsInput | GuestCreateOrConnectWithoutSessionsInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: XOR<GuestCreateWithoutSessionsInput, GuestUncheckedCreateWithoutSessionsInput> | GuestCreateWithoutSessionsInput[] | GuestUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionsInput | GuestCreateOrConnectWithoutSessionsInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoomUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSessionInput
    upsert?: RoomUpsertWithoutSessionInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutSessionInput, RoomUpdateWithoutSessionInput>, RoomUncheckedUpdateWithoutSessionInput>
  }

  export type GuestUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<GuestCreateWithoutSessionsInput, GuestUncheckedCreateWithoutSessionsInput> | GuestCreateWithoutSessionsInput[] | GuestUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionsInput | GuestCreateOrConnectWithoutSessionsInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutSessionsInput | GuestUpsertWithWhereUniqueWithoutSessionsInput[]
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutSessionsInput | GuestUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutSessionsInput | GuestUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<GuestCreateWithoutSessionsInput, GuestUncheckedCreateWithoutSessionsInput> | GuestCreateWithoutSessionsInput[] | GuestUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionsInput | GuestCreateOrConnectWithoutSessionsInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutSessionsInput | GuestUpsertWithWhereUniqueWithoutSessionsInput[]
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutSessionsInput | GuestUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutSessionsInput | GuestUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutGuestsInput = {
    create?: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput> | SessionCreateWithoutGuestsInput[] | SessionUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGuestsInput | SessionCreateOrConnectWithoutGuestsInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReceiptCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReceiptCreateWithoutGuestInput, ReceiptUncheckedCreateWithoutGuestInput> | ReceiptCreateWithoutGuestInput[] | ReceiptUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutGuestInput | ReceiptCreateOrConnectWithoutGuestInput[]
    createMany?: ReceiptCreateManyGuestInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutGuestsInput = {
    create?: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput> | SessionCreateWithoutGuestsInput[] | SessionUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGuestsInput | SessionCreateOrConnectWithoutGuestsInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReceiptUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReceiptCreateWithoutGuestInput, ReceiptUncheckedCreateWithoutGuestInput> | ReceiptCreateWithoutGuestInput[] | ReceiptUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutGuestInput | ReceiptCreateOrConnectWithoutGuestInput[]
    createMany?: ReceiptCreateManyGuestInputEnvelope
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutGuestsNestedInput = {
    create?: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput> | SessionCreateWithoutGuestsInput[] | SessionUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGuestsInput | SessionCreateOrConnectWithoutGuestsInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutGuestsInput | SessionUpsertWithWhereUniqueWithoutGuestsInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutGuestsInput | SessionUpdateWithWhereUniqueWithoutGuestsInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutGuestsInput | SessionUpdateManyWithWhereWithoutGuestsInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReceiptUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReceiptCreateWithoutGuestInput, ReceiptUncheckedCreateWithoutGuestInput> | ReceiptCreateWithoutGuestInput[] | ReceiptUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutGuestInput | ReceiptCreateOrConnectWithoutGuestInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutGuestInput | ReceiptUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReceiptCreateManyGuestInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutGuestInput | ReceiptUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutGuestInput | ReceiptUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutGuestsNestedInput = {
    create?: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput> | SessionCreateWithoutGuestsInput[] | SessionUncheckedCreateWithoutGuestsInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutGuestsInput | SessionCreateOrConnectWithoutGuestsInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutGuestsInput | SessionUpsertWithWhereUniqueWithoutGuestsInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutGuestsInput | SessionUpdateWithWhereUniqueWithoutGuestsInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutGuestsInput | SessionUpdateManyWithWhereWithoutGuestsInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReceiptUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReceiptCreateWithoutGuestInput, ReceiptUncheckedCreateWithoutGuestInput> | ReceiptCreateWithoutGuestInput[] | ReceiptUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReceiptCreateOrConnectWithoutGuestInput | ReceiptCreateOrConnectWithoutGuestInput[]
    upsert?: ReceiptUpsertWithWhereUniqueWithoutGuestInput | ReceiptUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReceiptCreateManyGuestInputEnvelope
    set?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    disconnect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    delete?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    connect?: ReceiptWhereUniqueInput | ReceiptWhereUniqueInput[]
    update?: ReceiptUpdateWithWhereUniqueWithoutGuestInput | ReceiptUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReceiptUpdateManyWithWhereWithoutGuestInput | ReceiptUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutMiniBarInput = {
    create?: XOR<RoomCreateWithoutMiniBarInput, RoomUncheckedCreateWithoutMiniBarInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMiniBarInput
    connect?: RoomWhereUniqueInput
  }

  export type MiniBarItemCreateNestedManyWithoutMiniBarInput = {
    create?: XOR<MiniBarItemCreateWithoutMiniBarInput, MiniBarItemUncheckedCreateWithoutMiniBarInput> | MiniBarItemCreateWithoutMiniBarInput[] | MiniBarItemUncheckedCreateWithoutMiniBarInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutMiniBarInput | MiniBarItemCreateOrConnectWithoutMiniBarInput[]
    createMany?: MiniBarItemCreateManyMiniBarInputEnvelope
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
  }

  export type MiniBarItemUncheckedCreateNestedManyWithoutMiniBarInput = {
    create?: XOR<MiniBarItemCreateWithoutMiniBarInput, MiniBarItemUncheckedCreateWithoutMiniBarInput> | MiniBarItemCreateWithoutMiniBarInput[] | MiniBarItemUncheckedCreateWithoutMiniBarInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutMiniBarInput | MiniBarItemCreateOrConnectWithoutMiniBarInput[]
    createMany?: MiniBarItemCreateManyMiniBarInputEnvelope
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutMiniBarNestedInput = {
    create?: XOR<RoomCreateWithoutMiniBarInput, RoomUncheckedCreateWithoutMiniBarInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMiniBarInput
    upsert?: RoomUpsertWithoutMiniBarInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMiniBarInput, RoomUpdateWithoutMiniBarInput>, RoomUncheckedUpdateWithoutMiniBarInput>
  }

  export type MiniBarItemUpdateManyWithoutMiniBarNestedInput = {
    create?: XOR<MiniBarItemCreateWithoutMiniBarInput, MiniBarItemUncheckedCreateWithoutMiniBarInput> | MiniBarItemCreateWithoutMiniBarInput[] | MiniBarItemUncheckedCreateWithoutMiniBarInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutMiniBarInput | MiniBarItemCreateOrConnectWithoutMiniBarInput[]
    upsert?: MiniBarItemUpsertWithWhereUniqueWithoutMiniBarInput | MiniBarItemUpsertWithWhereUniqueWithoutMiniBarInput[]
    createMany?: MiniBarItemCreateManyMiniBarInputEnvelope
    set?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    disconnect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    delete?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    update?: MiniBarItemUpdateWithWhereUniqueWithoutMiniBarInput | MiniBarItemUpdateWithWhereUniqueWithoutMiniBarInput[]
    updateMany?: MiniBarItemUpdateManyWithWhereWithoutMiniBarInput | MiniBarItemUpdateManyWithWhereWithoutMiniBarInput[]
    deleteMany?: MiniBarItemScalarWhereInput | MiniBarItemScalarWhereInput[]
  }

  export type MiniBarItemUncheckedUpdateManyWithoutMiniBarNestedInput = {
    create?: XOR<MiniBarItemCreateWithoutMiniBarInput, MiniBarItemUncheckedCreateWithoutMiniBarInput> | MiniBarItemCreateWithoutMiniBarInput[] | MiniBarItemUncheckedCreateWithoutMiniBarInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutMiniBarInput | MiniBarItemCreateOrConnectWithoutMiniBarInput[]
    upsert?: MiniBarItemUpsertWithWhereUniqueWithoutMiniBarInput | MiniBarItemUpsertWithWhereUniqueWithoutMiniBarInput[]
    createMany?: MiniBarItemCreateManyMiniBarInputEnvelope
    set?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    disconnect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    delete?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    update?: MiniBarItemUpdateWithWhereUniqueWithoutMiniBarInput | MiniBarItemUpdateWithWhereUniqueWithoutMiniBarInput[]
    updateMany?: MiniBarItemUpdateManyWithWhereWithoutMiniBarInput | MiniBarItemUpdateManyWithWhereWithoutMiniBarInput[]
    deleteMany?: MiniBarItemScalarWhereInput | MiniBarItemScalarWhereInput[]
  }

  export type MiniBarItemCreateNestedManyWithoutItemInput = {
    create?: XOR<MiniBarItemCreateWithoutItemInput, MiniBarItemUncheckedCreateWithoutItemInput> | MiniBarItemCreateWithoutItemInput[] | MiniBarItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutItemInput | MiniBarItemCreateOrConnectWithoutItemInput[]
    createMany?: MiniBarItemCreateManyItemInputEnvelope
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutItemInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput> | InventoryCreateWithoutItemInput[] | InventoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput | InventoryCreateOrConnectWithoutItemInput[]
    createMany?: InventoryCreateManyItemInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type AddChargeItemCreateNestedManyWithoutItemInput = {
    create?: XOR<AddChargeItemCreateWithoutItemInput, AddChargeItemUncheckedCreateWithoutItemInput> | AddChargeItemCreateWithoutItemInput[] | AddChargeItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutItemInput | AddChargeItemCreateOrConnectWithoutItemInput[]
    createMany?: AddChargeItemCreateManyItemInputEnvelope
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
  }

  export type MiniBarItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<MiniBarItemCreateWithoutItemInput, MiniBarItemUncheckedCreateWithoutItemInput> | MiniBarItemCreateWithoutItemInput[] | MiniBarItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutItemInput | MiniBarItemCreateOrConnectWithoutItemInput[]
    createMany?: MiniBarItemCreateManyItemInputEnvelope
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput> | InventoryCreateWithoutItemInput[] | InventoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput | InventoryCreateOrConnectWithoutItemInput[]
    createMany?: InventoryCreateManyItemInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type AddChargeItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<AddChargeItemCreateWithoutItemInput, AddChargeItemUncheckedCreateWithoutItemInput> | AddChargeItemCreateWithoutItemInput[] | AddChargeItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutItemInput | AddChargeItemCreateOrConnectWithoutItemInput[]
    createMany?: AddChargeItemCreateManyItemInputEnvelope
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
  }

  export type MiniBarItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<MiniBarItemCreateWithoutItemInput, MiniBarItemUncheckedCreateWithoutItemInput> | MiniBarItemCreateWithoutItemInput[] | MiniBarItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutItemInput | MiniBarItemCreateOrConnectWithoutItemInput[]
    upsert?: MiniBarItemUpsertWithWhereUniqueWithoutItemInput | MiniBarItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: MiniBarItemCreateManyItemInputEnvelope
    set?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    disconnect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    delete?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    update?: MiniBarItemUpdateWithWhereUniqueWithoutItemInput | MiniBarItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: MiniBarItemUpdateManyWithWhereWithoutItemInput | MiniBarItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: MiniBarItemScalarWhereInput | MiniBarItemScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutItemNestedInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput> | InventoryCreateWithoutItemInput[] | InventoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput | InventoryCreateOrConnectWithoutItemInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutItemInput | InventoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: InventoryCreateManyItemInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutItemInput | InventoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutItemInput | InventoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type AddChargeItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<AddChargeItemCreateWithoutItemInput, AddChargeItemUncheckedCreateWithoutItemInput> | AddChargeItemCreateWithoutItemInput[] | AddChargeItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutItemInput | AddChargeItemCreateOrConnectWithoutItemInput[]
    upsert?: AddChargeItemUpsertWithWhereUniqueWithoutItemInput | AddChargeItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: AddChargeItemCreateManyItemInputEnvelope
    set?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    disconnect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    delete?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    update?: AddChargeItemUpdateWithWhereUniqueWithoutItemInput | AddChargeItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: AddChargeItemUpdateManyWithWhereWithoutItemInput | AddChargeItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: AddChargeItemScalarWhereInput | AddChargeItemScalarWhereInput[]
  }

  export type MiniBarItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<MiniBarItemCreateWithoutItemInput, MiniBarItemUncheckedCreateWithoutItemInput> | MiniBarItemCreateWithoutItemInput[] | MiniBarItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: MiniBarItemCreateOrConnectWithoutItemInput | MiniBarItemCreateOrConnectWithoutItemInput[]
    upsert?: MiniBarItemUpsertWithWhereUniqueWithoutItemInput | MiniBarItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: MiniBarItemCreateManyItemInputEnvelope
    set?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    disconnect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    delete?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    connect?: MiniBarItemWhereUniqueInput | MiniBarItemWhereUniqueInput[]
    update?: MiniBarItemUpdateWithWhereUniqueWithoutItemInput | MiniBarItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: MiniBarItemUpdateManyWithWhereWithoutItemInput | MiniBarItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: MiniBarItemScalarWhereInput | MiniBarItemScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput> | InventoryCreateWithoutItemInput[] | InventoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutItemInput | InventoryCreateOrConnectWithoutItemInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutItemInput | InventoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: InventoryCreateManyItemInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutItemInput | InventoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutItemInput | InventoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type AddChargeItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<AddChargeItemCreateWithoutItemInput, AddChargeItemUncheckedCreateWithoutItemInput> | AddChargeItemCreateWithoutItemInput[] | AddChargeItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutItemInput | AddChargeItemCreateOrConnectWithoutItemInput[]
    upsert?: AddChargeItemUpsertWithWhereUniqueWithoutItemInput | AddChargeItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: AddChargeItemCreateManyItemInputEnvelope
    set?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    disconnect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    delete?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    update?: AddChargeItemUpdateWithWhereUniqueWithoutItemInput | AddChargeItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: AddChargeItemUpdateManyWithWhereWithoutItemInput | AddChargeItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: AddChargeItemScalarWhereInput | AddChargeItemScalarWhereInput[]
  }

  export type MiniBarCreateNestedOneWithoutItemsInput = {
    create?: XOR<MiniBarCreateWithoutItemsInput, MiniBarUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutItemsInput
    connect?: MiniBarWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutMiniBarItemsInput = {
    create?: XOR<ItemCreateWithoutMiniBarItemsInput, ItemUncheckedCreateWithoutMiniBarItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutMiniBarItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type MiniBarUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MiniBarCreateWithoutItemsInput, MiniBarUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MiniBarCreateOrConnectWithoutItemsInput
    upsert?: MiniBarUpsertWithoutItemsInput
    connect?: MiniBarWhereUniqueInput
    update?: XOR<XOR<MiniBarUpdateToOneWithWhereWithoutItemsInput, MiniBarUpdateWithoutItemsInput>, MiniBarUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutMiniBarItemsNestedInput = {
    create?: XOR<ItemCreateWithoutMiniBarItemsInput, ItemUncheckedCreateWithoutMiniBarItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutMiniBarItemsInput
    upsert?: ItemUpsertWithoutMiniBarItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutMiniBarItemsInput, ItemUpdateWithoutMiniBarItemsInput>, ItemUncheckedUpdateWithoutMiniBarItemsInput>
  }

  export type ItemCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ItemCreateWithoutInventoryInput, ItemUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInventoryInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ItemCreateWithoutInventoryInput, ItemUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ItemCreateOrConnectWithoutInventoryInput
    upsert?: ItemUpsertWithoutInventoryInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutInventoryInput, ItemUpdateWithoutInventoryInput>, ItemUncheckedUpdateWithoutInventoryInput>
  }

  export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    connect?: RoomWhereUniqueInput
  }

  export type GuestCreateNestedOneWithoutBookingsInput = {
    create?: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutBookingsInput
    connect?: GuestWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    upsert?: RoomUpsertWithoutBookingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingsInput, RoomUpdateWithoutBookingsInput>, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type GuestUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutBookingsInput
    upsert?: GuestUpsertWithoutBookingsInput
    disconnect?: GuestWhereInput | boolean
    delete?: GuestWhereInput | boolean
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutBookingsInput, GuestUpdateWithoutBookingsInput>, GuestUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<RoomCreateWithoutReceiptsInput, RoomUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReceiptsInput
    connect?: RoomWhereUniqueInput
  }

  export type GuestCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<GuestCreateWithoutReceiptsInput, GuestUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReceiptsInput
    connect?: GuestWhereUniqueInput
  }

  export type AdditionalChargeReceiptCreateNestedManyWithoutReceiptInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput> | AdditionalChargeReceiptCreateWithoutReceiptInput[] | AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput | AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput[]
    createMany?: AdditionalChargeReceiptCreateManyReceiptInputEnvelope
    connect?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
  }

  export type AdditionalChargeReceiptUncheckedCreateNestedManyWithoutReceiptInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput> | AdditionalChargeReceiptCreateWithoutReceiptInput[] | AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput | AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput[]
    createMany?: AdditionalChargeReceiptCreateManyReceiptInputEnvelope
    connect?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<RoomCreateWithoutReceiptsInput, RoomUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReceiptsInput
    upsert?: RoomUpsertWithoutReceiptsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReceiptsInput, RoomUpdateWithoutReceiptsInput>, RoomUncheckedUpdateWithoutReceiptsInput>
  }

  export type GuestUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: XOR<GuestCreateWithoutReceiptsInput, GuestUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReceiptsInput
    upsert?: GuestUpsertWithoutReceiptsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutReceiptsInput, GuestUpdateWithoutReceiptsInput>, GuestUncheckedUpdateWithoutReceiptsInput>
  }

  export type AdditionalChargeReceiptUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput> | AdditionalChargeReceiptCreateWithoutReceiptInput[] | AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput | AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput[]
    upsert?: AdditionalChargeReceiptUpsertWithWhereUniqueWithoutReceiptInput | AdditionalChargeReceiptUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: AdditionalChargeReceiptCreateManyReceiptInputEnvelope
    set?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    disconnect?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    delete?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    connect?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    update?: AdditionalChargeReceiptUpdateWithWhereUniqueWithoutReceiptInput | AdditionalChargeReceiptUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: AdditionalChargeReceiptUpdateManyWithWhereWithoutReceiptInput | AdditionalChargeReceiptUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: AdditionalChargeReceiptScalarWhereInput | AdditionalChargeReceiptScalarWhereInput[]
  }

  export type AdditionalChargeReceiptUncheckedUpdateManyWithoutReceiptNestedInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput> | AdditionalChargeReceiptCreateWithoutReceiptInput[] | AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput[]
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput | AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput[]
    upsert?: AdditionalChargeReceiptUpsertWithWhereUniqueWithoutReceiptInput | AdditionalChargeReceiptUpsertWithWhereUniqueWithoutReceiptInput[]
    createMany?: AdditionalChargeReceiptCreateManyReceiptInputEnvelope
    set?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    disconnect?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    delete?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    connect?: AdditionalChargeReceiptWhereUniqueInput | AdditionalChargeReceiptWhereUniqueInput[]
    update?: AdditionalChargeReceiptUpdateWithWhereUniqueWithoutReceiptInput | AdditionalChargeReceiptUpdateWithWhereUniqueWithoutReceiptInput[]
    updateMany?: AdditionalChargeReceiptUpdateManyWithWhereWithoutReceiptInput | AdditionalChargeReceiptUpdateManyWithWhereWithoutReceiptInput[]
    deleteMany?: AdditionalChargeReceiptScalarWhereInput | AdditionalChargeReceiptScalarWhereInput[]
  }

  export type ReceiptCreateNestedOneWithoutAdditionalChargesInput = {
    create?: XOR<ReceiptCreateWithoutAdditionalChargesInput, ReceiptUncheckedCreateWithoutAdditionalChargesInput>
    connectOrCreate?: ReceiptCreateOrConnectWithoutAdditionalChargesInput
    connect?: ReceiptWhereUniqueInput
  }

  export type RestaurantReceiptCreateNestedOneWithoutAdditionalChargeInput = {
    create?: XOR<RestaurantReceiptCreateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedCreateWithoutAdditionalChargeInput>
    connectOrCreate?: RestaurantReceiptCreateOrConnectWithoutAdditionalChargeInput
    connect?: RestaurantReceiptWhereUniqueInput
  }

  export type AddChargeItemCreateNestedManyWithoutAdditionalChargeInput = {
    create?: XOR<AddChargeItemCreateWithoutAdditionalChargeInput, AddChargeItemUncheckedCreateWithoutAdditionalChargeInput> | AddChargeItemCreateWithoutAdditionalChargeInput[] | AddChargeItemUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutAdditionalChargeInput | AddChargeItemCreateOrConnectWithoutAdditionalChargeInput[]
    createMany?: AddChargeItemCreateManyAdditionalChargeInputEnvelope
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
  }

  export type AddChargeServiceCreateNestedManyWithoutAdditionalChargeInput = {
    create?: XOR<AddChargeServiceCreateWithoutAdditionalChargeInput, AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput> | AddChargeServiceCreateWithoutAdditionalChargeInput[] | AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput | AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput[]
    createMany?: AddChargeServiceCreateManyAdditionalChargeInputEnvelope
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
  }

  export type RestaurantReceiptUncheckedCreateNestedOneWithoutAdditionalChargeInput = {
    create?: XOR<RestaurantReceiptCreateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedCreateWithoutAdditionalChargeInput>
    connectOrCreate?: RestaurantReceiptCreateOrConnectWithoutAdditionalChargeInput
    connect?: RestaurantReceiptWhereUniqueInput
  }

  export type AddChargeItemUncheckedCreateNestedManyWithoutAdditionalChargeInput = {
    create?: XOR<AddChargeItemCreateWithoutAdditionalChargeInput, AddChargeItemUncheckedCreateWithoutAdditionalChargeInput> | AddChargeItemCreateWithoutAdditionalChargeInput[] | AddChargeItemUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutAdditionalChargeInput | AddChargeItemCreateOrConnectWithoutAdditionalChargeInput[]
    createMany?: AddChargeItemCreateManyAdditionalChargeInputEnvelope
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
  }

  export type AddChargeServiceUncheckedCreateNestedManyWithoutAdditionalChargeInput = {
    create?: XOR<AddChargeServiceCreateWithoutAdditionalChargeInput, AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput> | AddChargeServiceCreateWithoutAdditionalChargeInput[] | AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput | AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput[]
    createMany?: AddChargeServiceCreateManyAdditionalChargeInputEnvelope
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
  }

  export type ReceiptUpdateOneRequiredWithoutAdditionalChargesNestedInput = {
    create?: XOR<ReceiptCreateWithoutAdditionalChargesInput, ReceiptUncheckedCreateWithoutAdditionalChargesInput>
    connectOrCreate?: ReceiptCreateOrConnectWithoutAdditionalChargesInput
    upsert?: ReceiptUpsertWithoutAdditionalChargesInput
    connect?: ReceiptWhereUniqueInput
    update?: XOR<XOR<ReceiptUpdateToOneWithWhereWithoutAdditionalChargesInput, ReceiptUpdateWithoutAdditionalChargesInput>, ReceiptUncheckedUpdateWithoutAdditionalChargesInput>
  }

  export type RestaurantReceiptUpdateOneWithoutAdditionalChargeNestedInput = {
    create?: XOR<RestaurantReceiptCreateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedCreateWithoutAdditionalChargeInput>
    connectOrCreate?: RestaurantReceiptCreateOrConnectWithoutAdditionalChargeInput
    upsert?: RestaurantReceiptUpsertWithoutAdditionalChargeInput
    disconnect?: RestaurantReceiptWhereInput | boolean
    delete?: RestaurantReceiptWhereInput | boolean
    connect?: RestaurantReceiptWhereUniqueInput
    update?: XOR<XOR<RestaurantReceiptUpdateToOneWithWhereWithoutAdditionalChargeInput, RestaurantReceiptUpdateWithoutAdditionalChargeInput>, RestaurantReceiptUncheckedUpdateWithoutAdditionalChargeInput>
  }

  export type AddChargeItemUpdateManyWithoutAdditionalChargeNestedInput = {
    create?: XOR<AddChargeItemCreateWithoutAdditionalChargeInput, AddChargeItemUncheckedCreateWithoutAdditionalChargeInput> | AddChargeItemCreateWithoutAdditionalChargeInput[] | AddChargeItemUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutAdditionalChargeInput | AddChargeItemCreateOrConnectWithoutAdditionalChargeInput[]
    upsert?: AddChargeItemUpsertWithWhereUniqueWithoutAdditionalChargeInput | AddChargeItemUpsertWithWhereUniqueWithoutAdditionalChargeInput[]
    createMany?: AddChargeItemCreateManyAdditionalChargeInputEnvelope
    set?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    disconnect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    delete?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    update?: AddChargeItemUpdateWithWhereUniqueWithoutAdditionalChargeInput | AddChargeItemUpdateWithWhereUniqueWithoutAdditionalChargeInput[]
    updateMany?: AddChargeItemUpdateManyWithWhereWithoutAdditionalChargeInput | AddChargeItemUpdateManyWithWhereWithoutAdditionalChargeInput[]
    deleteMany?: AddChargeItemScalarWhereInput | AddChargeItemScalarWhereInput[]
  }

  export type AddChargeServiceUpdateManyWithoutAdditionalChargeNestedInput = {
    create?: XOR<AddChargeServiceCreateWithoutAdditionalChargeInput, AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput> | AddChargeServiceCreateWithoutAdditionalChargeInput[] | AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput | AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput[]
    upsert?: AddChargeServiceUpsertWithWhereUniqueWithoutAdditionalChargeInput | AddChargeServiceUpsertWithWhereUniqueWithoutAdditionalChargeInput[]
    createMany?: AddChargeServiceCreateManyAdditionalChargeInputEnvelope
    set?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    disconnect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    delete?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    update?: AddChargeServiceUpdateWithWhereUniqueWithoutAdditionalChargeInput | AddChargeServiceUpdateWithWhereUniqueWithoutAdditionalChargeInput[]
    updateMany?: AddChargeServiceUpdateManyWithWhereWithoutAdditionalChargeInput | AddChargeServiceUpdateManyWithWhereWithoutAdditionalChargeInput[]
    deleteMany?: AddChargeServiceScalarWhereInput | AddChargeServiceScalarWhereInput[]
  }

  export type RestaurantReceiptUncheckedUpdateOneWithoutAdditionalChargeNestedInput = {
    create?: XOR<RestaurantReceiptCreateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedCreateWithoutAdditionalChargeInput>
    connectOrCreate?: RestaurantReceiptCreateOrConnectWithoutAdditionalChargeInput
    upsert?: RestaurantReceiptUpsertWithoutAdditionalChargeInput
    disconnect?: RestaurantReceiptWhereInput | boolean
    delete?: RestaurantReceiptWhereInput | boolean
    connect?: RestaurantReceiptWhereUniqueInput
    update?: XOR<XOR<RestaurantReceiptUpdateToOneWithWhereWithoutAdditionalChargeInput, RestaurantReceiptUpdateWithoutAdditionalChargeInput>, RestaurantReceiptUncheckedUpdateWithoutAdditionalChargeInput>
  }

  export type AddChargeItemUncheckedUpdateManyWithoutAdditionalChargeNestedInput = {
    create?: XOR<AddChargeItemCreateWithoutAdditionalChargeInput, AddChargeItemUncheckedCreateWithoutAdditionalChargeInput> | AddChargeItemCreateWithoutAdditionalChargeInput[] | AddChargeItemUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeItemCreateOrConnectWithoutAdditionalChargeInput | AddChargeItemCreateOrConnectWithoutAdditionalChargeInput[]
    upsert?: AddChargeItemUpsertWithWhereUniqueWithoutAdditionalChargeInput | AddChargeItemUpsertWithWhereUniqueWithoutAdditionalChargeInput[]
    createMany?: AddChargeItemCreateManyAdditionalChargeInputEnvelope
    set?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    disconnect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    delete?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    connect?: AddChargeItemWhereUniqueInput | AddChargeItemWhereUniqueInput[]
    update?: AddChargeItemUpdateWithWhereUniqueWithoutAdditionalChargeInput | AddChargeItemUpdateWithWhereUniqueWithoutAdditionalChargeInput[]
    updateMany?: AddChargeItemUpdateManyWithWhereWithoutAdditionalChargeInput | AddChargeItemUpdateManyWithWhereWithoutAdditionalChargeInput[]
    deleteMany?: AddChargeItemScalarWhereInput | AddChargeItemScalarWhereInput[]
  }

  export type AddChargeServiceUncheckedUpdateManyWithoutAdditionalChargeNestedInput = {
    create?: XOR<AddChargeServiceCreateWithoutAdditionalChargeInput, AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput> | AddChargeServiceCreateWithoutAdditionalChargeInput[] | AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput | AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput[]
    upsert?: AddChargeServiceUpsertWithWhereUniqueWithoutAdditionalChargeInput | AddChargeServiceUpsertWithWhereUniqueWithoutAdditionalChargeInput[]
    createMany?: AddChargeServiceCreateManyAdditionalChargeInputEnvelope
    set?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    disconnect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    delete?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    update?: AddChargeServiceUpdateWithWhereUniqueWithoutAdditionalChargeInput | AddChargeServiceUpdateWithWhereUniqueWithoutAdditionalChargeInput[]
    updateMany?: AddChargeServiceUpdateManyWithWhereWithoutAdditionalChargeInput | AddChargeServiceUpdateManyWithWhereWithoutAdditionalChargeInput[]
    deleteMany?: AddChargeServiceScalarWhereInput | AddChargeServiceScalarWhereInput[]
  }

  export type AdditionalChargeReceiptCreateNestedOneWithoutRestaurantReceiptInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutRestaurantReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutRestaurantReceiptInput>
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutRestaurantReceiptInput
    connect?: AdditionalChargeReceiptWhereUniqueInput
  }

  export type AdditionalChargeReceiptUpdateOneRequiredWithoutRestaurantReceiptNestedInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutRestaurantReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutRestaurantReceiptInput>
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutRestaurantReceiptInput
    upsert?: AdditionalChargeReceiptUpsertWithoutRestaurantReceiptInput
    connect?: AdditionalChargeReceiptWhereUniqueInput
    update?: XOR<XOR<AdditionalChargeReceiptUpdateToOneWithWhereWithoutRestaurantReceiptInput, AdditionalChargeReceiptUpdateWithoutRestaurantReceiptInput>, AdditionalChargeReceiptUncheckedUpdateWithoutRestaurantReceiptInput>
  }

  export type AddChargeServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<AddChargeServiceCreateWithoutServiceInput, AddChargeServiceUncheckedCreateWithoutServiceInput> | AddChargeServiceCreateWithoutServiceInput[] | AddChargeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutServiceInput | AddChargeServiceCreateOrConnectWithoutServiceInput[]
    createMany?: AddChargeServiceCreateManyServiceInputEnvelope
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
  }

  export type AddChargeServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AddChargeServiceCreateWithoutServiceInput, AddChargeServiceUncheckedCreateWithoutServiceInput> | AddChargeServiceCreateWithoutServiceInput[] | AddChargeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutServiceInput | AddChargeServiceCreateOrConnectWithoutServiceInput[]
    createMany?: AddChargeServiceCreateManyServiceInputEnvelope
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
  }

  export type AddChargeServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AddChargeServiceCreateWithoutServiceInput, AddChargeServiceUncheckedCreateWithoutServiceInput> | AddChargeServiceCreateWithoutServiceInput[] | AddChargeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutServiceInput | AddChargeServiceCreateOrConnectWithoutServiceInput[]
    upsert?: AddChargeServiceUpsertWithWhereUniqueWithoutServiceInput | AddChargeServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AddChargeServiceCreateManyServiceInputEnvelope
    set?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    disconnect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    delete?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    update?: AddChargeServiceUpdateWithWhereUniqueWithoutServiceInput | AddChargeServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AddChargeServiceUpdateManyWithWhereWithoutServiceInput | AddChargeServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AddChargeServiceScalarWhereInput | AddChargeServiceScalarWhereInput[]
  }

  export type AddChargeServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AddChargeServiceCreateWithoutServiceInput, AddChargeServiceUncheckedCreateWithoutServiceInput> | AddChargeServiceCreateWithoutServiceInput[] | AddChargeServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AddChargeServiceCreateOrConnectWithoutServiceInput | AddChargeServiceCreateOrConnectWithoutServiceInput[]
    upsert?: AddChargeServiceUpsertWithWhereUniqueWithoutServiceInput | AddChargeServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AddChargeServiceCreateManyServiceInputEnvelope
    set?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    disconnect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    delete?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    connect?: AddChargeServiceWhereUniqueInput | AddChargeServiceWhereUniqueInput[]
    update?: AddChargeServiceUpdateWithWhereUniqueWithoutServiceInput | AddChargeServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AddChargeServiceUpdateManyWithWhereWithoutServiceInput | AddChargeServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AddChargeServiceScalarWhereInput | AddChargeServiceScalarWhereInput[]
  }

  export type AdditionalChargeReceiptCreateNestedOneWithoutItemsInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutItemsInput, AdditionalChargeReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutItemsInput
    connect?: AdditionalChargeReceiptWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutAdditionalChargesInput = {
    create?: XOR<ItemCreateWithoutAdditionalChargesInput, ItemUncheckedCreateWithoutAdditionalChargesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutAdditionalChargesInput
    connect?: ItemWhereUniqueInput
  }

  export type AdditionalChargeReceiptUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutItemsInput, AdditionalChargeReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutItemsInput
    upsert?: AdditionalChargeReceiptUpsertWithoutItemsInput
    connect?: AdditionalChargeReceiptWhereUniqueInput
    update?: XOR<XOR<AdditionalChargeReceiptUpdateToOneWithWhereWithoutItemsInput, AdditionalChargeReceiptUpdateWithoutItemsInput>, AdditionalChargeReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutAdditionalChargesNestedInput = {
    create?: XOR<ItemCreateWithoutAdditionalChargesInput, ItemUncheckedCreateWithoutAdditionalChargesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutAdditionalChargesInput
    upsert?: ItemUpsertWithoutAdditionalChargesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutAdditionalChargesInput, ItemUpdateWithoutAdditionalChargesInput>, ItemUncheckedUpdateWithoutAdditionalChargesInput>
  }

  export type AdditionalChargeReceiptCreateNestedOneWithoutServicesInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutServicesInput, AdditionalChargeReceiptUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutServicesInput
    connect?: AdditionalChargeReceiptWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAdditionalChargesInput = {
    create?: XOR<ServiceCreateWithoutAdditionalChargesInput, ServiceUncheckedCreateWithoutAdditionalChargesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAdditionalChargesInput
    connect?: ServiceWhereUniqueInput
  }

  export type AdditionalChargeReceiptUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<AdditionalChargeReceiptCreateWithoutServicesInput, AdditionalChargeReceiptUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AdditionalChargeReceiptCreateOrConnectWithoutServicesInput
    upsert?: AdditionalChargeReceiptUpsertWithoutServicesInput
    connect?: AdditionalChargeReceiptWhereUniqueInput
    update?: XOR<XOR<AdditionalChargeReceiptUpdateToOneWithWhereWithoutServicesInput, AdditionalChargeReceiptUpdateWithoutServicesInput>, AdditionalChargeReceiptUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutAdditionalChargesNestedInput = {
    create?: XOR<ServiceCreateWithoutAdditionalChargesInput, ServiceUncheckedCreateWithoutAdditionalChargesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAdditionalChargesInput
    upsert?: ServiceUpsertWithoutAdditionalChargesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAdditionalChargesInput, ServiceUpdateWithoutAdditionalChargesInput>, ServiceUncheckedUpdateWithoutAdditionalChargesInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RoomCreateWithoutFloorInput = {
    roomNumber: string
    sessionId?: number | null
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    status?: RoomStatusCreateNestedOneWithoutRoomsInput
    miniBar?: MiniBarCreateNestedOneWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    receipts?: ReceiptCreateNestedManyWithoutRoomInput
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutFloorInput = {
    roomNumber: string
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
    miniBar?: MiniBarUncheckedCreateNestedOneWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutRoomInput
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutFloorInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomCreateManyFloorInputEnvelope = {
    data: RoomCreateManyFloorInput | RoomCreateManyFloorInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
  }

  export type RoomUpdateManyWithWhereWithoutFloorInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutFloorInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    roomNumber?: StringFilter<"Room"> | string
    floorNumber?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
    statusId?: IntNullableFilter<"Room"> | number | null
    sessionId?: IntNullableFilter<"Room"> | number | null
  }

  export type RoomCreateWithoutRoomTypeInput = {
    roomNumber: string
    sessionId?: number | null
    floor: FloorCreateNestedOneWithoutRoomsInput
    status?: RoomStatusCreateNestedOneWithoutRoomsInput
    miniBar?: MiniBarCreateNestedOneWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    receipts?: ReceiptCreateNestedManyWithoutRoomInput
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomTypeInput = {
    roomNumber: string
    floorNumber: number
    statusId?: number | null
    sessionId?: number | null
    miniBar?: MiniBarUncheckedCreateNestedOneWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutRoomInput
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomCreateManyRoomTypeInputEnvelope = {
    data: RoomCreateManyRoomTypeInput | RoomCreateManyRoomTypeInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutRoomTypeInput, RoomUncheckedUpdateWithoutRoomTypeInput>
    create: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutRoomTypeInput, RoomUncheckedUpdateWithoutRoomTypeInput>
  }

  export type RoomUpdateManyWithWhereWithoutRoomTypeInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutRoomTypeInput>
  }

  export type RoomCreateWithoutStatusInput = {
    roomNumber: string
    sessionId?: number | null
    floor: FloorCreateNestedOneWithoutRoomsInput
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    miniBar?: MiniBarCreateNestedOneWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    receipts?: ReceiptCreateNestedManyWithoutRoomInput
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutStatusInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    sessionId?: number | null
    miniBar?: MiniBarUncheckedCreateNestedOneWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutRoomInput
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
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

  export type FloorCreateWithoutRoomsInput = {
    floorNumber: number
  }

  export type FloorUncheckedCreateWithoutRoomsInput = {
    floorNumber: number
  }

  export type FloorCreateOrConnectWithoutRoomsInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
  }

  export type RoomTypeCreateWithoutRoomsInput = {
    id: number
    name: string
    priceWithBreakfast: number
    priceWithoutBreakfast: number
    pax: number
  }

  export type RoomTypeUncheckedCreateWithoutRoomsInput = {
    id: number
    name: string
    priceWithBreakfast: number
    priceWithoutBreakfast: number
    pax: number
  }

  export type RoomTypeCreateOrConnectWithoutRoomsInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
  }

  export type RoomStatusCreateWithoutRoomsInput = {
    id: number
    label: string
  }

  export type RoomStatusUncheckedCreateWithoutRoomsInput = {
    id: number
    label: string
  }

  export type RoomStatusCreateOrConnectWithoutRoomsInput = {
    where: RoomStatusWhereUniqueInput
    create: XOR<RoomStatusCreateWithoutRoomsInput, RoomStatusUncheckedCreateWithoutRoomsInput>
  }

  export type MiniBarCreateWithoutRoomInput = {
    items?: MiniBarItemCreateNestedManyWithoutMiniBarInput
  }

  export type MiniBarUncheckedCreateWithoutRoomInput = {
    id?: number
    items?: MiniBarItemUncheckedCreateNestedManyWithoutMiniBarInput
  }

  export type MiniBarCreateOrConnectWithoutRoomInput = {
    where: MiniBarWhereUniqueInput
    create: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateWithoutRoomInput = {
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
    guest?: GuestCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutRoomInput = {
    id?: number
    guestId?: string | null
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingCreateOrConnectWithoutRoomInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateManyRoomInputEnvelope = {
    data: BookingCreateManyRoomInput | BookingCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ReceiptCreateWithoutRoomInput = {
    totalPrice: number
    amountPaid: number
    paidBy: string
    guest: GuestCreateNestedOneWithoutReceiptsInput
    additionalCharges?: AdditionalChargeReceiptCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUncheckedCreateWithoutRoomInput = {
    id?: number
    guestId: string
    totalPrice: number
    amountPaid: number
    paidBy: string
    additionalCharges?: AdditionalChargeReceiptUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptCreateOrConnectWithoutRoomInput = {
    where: ReceiptWhereUniqueInput
    create: XOR<ReceiptCreateWithoutRoomInput, ReceiptUncheckedCreateWithoutRoomInput>
  }

  export type ReceiptCreateManyRoomInputEnvelope = {
    data: ReceiptCreateManyRoomInput | ReceiptCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutRoomInput = {
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestCreateNestedManyWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutRoomInput = {
    id?: number
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type SessionCreateOrConnectWithoutRoomInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput>
  }

  export type SessionCreateManyRoomInputEnvelope = {
    data: SessionCreateManyRoomInput | SessionCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type FloorUpsertWithoutRoomsInput = {
    update: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutRoomsInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type FloorUpdateWithoutRoomsInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
  }

  export type FloorUncheckedUpdateWithoutRoomsInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTypeUpsertWithoutRoomsInput = {
    update: XOR<RoomTypeUpdateWithoutRoomsInput, RoomTypeUncheckedUpdateWithoutRoomsInput>
    create: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    where?: RoomTypeWhereInput
  }

  export type RoomTypeUpdateToOneWithWhereWithoutRoomsInput = {
    where?: RoomTypeWhereInput
    data: XOR<RoomTypeUpdateWithoutRoomsInput, RoomTypeUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomTypeUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceWithBreakfast?: FloatFieldUpdateOperationsInput | number
    priceWithoutBreakfast?: FloatFieldUpdateOperationsInput | number
    pax?: IntFieldUpdateOperationsInput | number
  }

  export type RoomTypeUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priceWithBreakfast?: FloatFieldUpdateOperationsInput | number
    priceWithoutBreakfast?: FloatFieldUpdateOperationsInput | number
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
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type RoomStatusUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MiniBarUpsertWithoutRoomInput = {
    update: XOR<MiniBarUpdateWithoutRoomInput, MiniBarUncheckedUpdateWithoutRoomInput>
    create: XOR<MiniBarCreateWithoutRoomInput, MiniBarUncheckedCreateWithoutRoomInput>
    where?: MiniBarWhereInput
  }

  export type MiniBarUpdateToOneWithWhereWithoutRoomInput = {
    where?: MiniBarWhereInput
    data: XOR<MiniBarUpdateWithoutRoomInput, MiniBarUncheckedUpdateWithoutRoomInput>
  }

  export type MiniBarUpdateWithoutRoomInput = {
    items?: MiniBarItemUpdateManyWithoutMiniBarNestedInput
  }

  export type MiniBarUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    items?: MiniBarItemUncheckedUpdateManyWithoutMiniBarNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoomInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRoomInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    roomNumber?: StringFilter<"Booking"> | string
    guestId?: StringNullableFilter<"Booking"> | string | null
    contactName?: StringFilter<"Booking"> | string
    contactPhone?: StringFilter<"Booking"> | string
    contactEmail?: StringNullableFilter<"Booking"> | string | null
    estCheckIn?: DateTimeFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ReceiptUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReceiptWhereUniqueInput
    update: XOR<ReceiptUpdateWithoutRoomInput, ReceiptUncheckedUpdateWithoutRoomInput>
    create: XOR<ReceiptCreateWithoutRoomInput, ReceiptUncheckedCreateWithoutRoomInput>
  }

  export type ReceiptUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReceiptWhereUniqueInput
    data: XOR<ReceiptUpdateWithoutRoomInput, ReceiptUncheckedUpdateWithoutRoomInput>
  }

  export type ReceiptUpdateManyWithWhereWithoutRoomInput = {
    where: ReceiptScalarWhereInput
    data: XOR<ReceiptUpdateManyMutationInput, ReceiptUncheckedUpdateManyWithoutRoomInput>
  }

  export type ReceiptScalarWhereInput = {
    AND?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
    OR?: ReceiptScalarWhereInput[]
    NOT?: ReceiptScalarWhereInput | ReceiptScalarWhereInput[]
    id?: IntFilter<"Receipt"> | number
    roomNumber?: StringFilter<"Receipt"> | string
    guestId?: StringFilter<"Receipt"> | string
    totalPrice?: FloatFilter<"Receipt"> | number
    amountPaid?: FloatFilter<"Receipt"> | number
    paidBy?: StringFilter<"Receipt"> | string
  }

  export type SessionUpsertWithWhereUniqueWithoutRoomInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutRoomInput, SessionUncheckedUpdateWithoutRoomInput>
    create: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutRoomInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutRoomInput, SessionUncheckedUpdateWithoutRoomInput>
  }

  export type SessionUpdateManyWithWhereWithoutRoomInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutRoomInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    roomNumber?: StringFilter<"Session"> | string
    numberOfExtraBeds?: IntFilter<"Session"> | number
    actualCheckIn?: DateTimeFilter<"Session"> | Date | string
    actualCheckOut?: DateTimeNullableFilter<"Session"> | Date | string | null
    isActive?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type RoomCreateWithoutSessionInput = {
    roomNumber: string
    sessionId?: number | null
    floor: FloorCreateNestedOneWithoutRoomsInput
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    status?: RoomStatusCreateNestedOneWithoutRoomsInput
    miniBar?: MiniBarCreateNestedOneWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    receipts?: ReceiptCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutSessionInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
    miniBar?: MiniBarUncheckedCreateNestedOneWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutSessionInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
  }

  export type GuestCreateWithoutSessionsInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutGuestInput
    receipts?: ReceiptCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutSessionsInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutSessionsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutSessionsInput, GuestUncheckedCreateWithoutSessionsInput>
  }

  export type RoomUpsertWithoutSessionInput = {
    update: XOR<RoomUpdateWithoutSessionInput, RoomUncheckedUpdateWithoutSessionInput>
    create: XOR<RoomCreateWithoutSessionInput, RoomUncheckedCreateWithoutSessionInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutSessionInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutSessionInput, RoomUncheckedUpdateWithoutSessionInput>
  }

  export type RoomUpdateWithoutSessionInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    status?: RoomStatusUpdateOneWithoutRoomsNestedInput
    miniBar?: MiniBarUpdateOneWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutSessionInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    miniBar?: MiniBarUncheckedUpdateOneWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type GuestUpsertWithWhereUniqueWithoutSessionsInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutSessionsInput, GuestUncheckedUpdateWithoutSessionsInput>
    create: XOR<GuestCreateWithoutSessionsInput, GuestUncheckedCreateWithoutSessionsInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutSessionsInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutSessionsInput, GuestUncheckedUpdateWithoutSessionsInput>
  }

  export type GuestUpdateManyWithWhereWithoutSessionsInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutSessionsInput>
  }

  export type GuestScalarWhereInput = {
    AND?: GuestScalarWhereInput | GuestScalarWhereInput[]
    OR?: GuestScalarWhereInput[]
    NOT?: GuestScalarWhereInput | GuestScalarWhereInput[]
    uid?: StringFilter<"Guest"> | string
    name?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    email?: StringFilter<"Guest"> | string
    address?: StringFilter<"Guest"> | string
    nicCardNum?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
  }

  export type SessionCreateWithoutGuestsInput = {
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutGuestsInput = {
    id?: number
    roomNumber: string
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutGuestsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput>
  }

  export type BookingCreateWithoutGuestInput = {
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
    room: RoomCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutGuestInput = {
    id?: number
    roomNumber: string
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingCreateOrConnectWithoutGuestInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingCreateManyGuestInputEnvelope = {
    data: BookingCreateManyGuestInput | BookingCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type ReceiptCreateWithoutGuestInput = {
    totalPrice: number
    amountPaid: number
    paidBy: string
    room: RoomCreateNestedOneWithoutReceiptsInput
    additionalCharges?: AdditionalChargeReceiptCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptUncheckedCreateWithoutGuestInput = {
    id?: number
    roomNumber: string
    totalPrice: number
    amountPaid: number
    paidBy: string
    additionalCharges?: AdditionalChargeReceiptUncheckedCreateNestedManyWithoutReceiptInput
  }

  export type ReceiptCreateOrConnectWithoutGuestInput = {
    where: ReceiptWhereUniqueInput
    create: XOR<ReceiptCreateWithoutGuestInput, ReceiptUncheckedCreateWithoutGuestInput>
  }

  export type ReceiptCreateManyGuestInputEnvelope = {
    data: ReceiptCreateManyGuestInput | ReceiptCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutGuestsInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutGuestsInput, SessionUncheckedUpdateWithoutGuestsInput>
    create: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutGuestsInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutGuestsInput, SessionUncheckedUpdateWithoutGuestsInput>
  }

  export type SessionUpdateManyWithWhereWithoutGuestsInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutGuestsInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
  }

  export type BookingUpdateManyWithWhereWithoutGuestInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutGuestInput>
  }

  export type ReceiptUpsertWithWhereUniqueWithoutGuestInput = {
    where: ReceiptWhereUniqueInput
    update: XOR<ReceiptUpdateWithoutGuestInput, ReceiptUncheckedUpdateWithoutGuestInput>
    create: XOR<ReceiptCreateWithoutGuestInput, ReceiptUncheckedCreateWithoutGuestInput>
  }

  export type ReceiptUpdateWithWhereUniqueWithoutGuestInput = {
    where: ReceiptWhereUniqueInput
    data: XOR<ReceiptUpdateWithoutGuestInput, ReceiptUncheckedUpdateWithoutGuestInput>
  }

  export type ReceiptUpdateManyWithWhereWithoutGuestInput = {
    where: ReceiptScalarWhereInput
    data: XOR<ReceiptUpdateManyMutationInput, ReceiptUncheckedUpdateManyWithoutGuestInput>
  }

  export type RoomCreateWithoutMiniBarInput = {
    roomNumber: string
    sessionId?: number | null
    floor: FloorCreateNestedOneWithoutRoomsInput
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    status?: RoomStatusCreateNestedOneWithoutRoomsInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    receipts?: ReceiptCreateNestedManyWithoutRoomInput
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMiniBarInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutRoomInput
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMiniBarInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMiniBarInput, RoomUncheckedCreateWithoutMiniBarInput>
  }

  export type MiniBarItemCreateWithoutMiniBarInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutMiniBarItemsInput
  }

  export type MiniBarItemUncheckedCreateWithoutMiniBarInput = {
    itemId: number
    quantity: number
  }

  export type MiniBarItemCreateOrConnectWithoutMiniBarInput = {
    where: MiniBarItemWhereUniqueInput
    create: XOR<MiniBarItemCreateWithoutMiniBarInput, MiniBarItemUncheckedCreateWithoutMiniBarInput>
  }

  export type MiniBarItemCreateManyMiniBarInputEnvelope = {
    data: MiniBarItemCreateManyMiniBarInput | MiniBarItemCreateManyMiniBarInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutMiniBarInput = {
    update: XOR<RoomUpdateWithoutMiniBarInput, RoomUncheckedUpdateWithoutMiniBarInput>
    create: XOR<RoomCreateWithoutMiniBarInput, RoomUncheckedCreateWithoutMiniBarInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMiniBarInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMiniBarInput, RoomUncheckedUpdateWithoutMiniBarInput>
  }

  export type RoomUpdateWithoutMiniBarInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    status?: RoomStatusUpdateOneWithoutRoomsNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUpdateManyWithoutRoomNestedInput
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMiniBarInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutRoomNestedInput
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type MiniBarItemUpsertWithWhereUniqueWithoutMiniBarInput = {
    where: MiniBarItemWhereUniqueInput
    update: XOR<MiniBarItemUpdateWithoutMiniBarInput, MiniBarItemUncheckedUpdateWithoutMiniBarInput>
    create: XOR<MiniBarItemCreateWithoutMiniBarInput, MiniBarItemUncheckedCreateWithoutMiniBarInput>
  }

  export type MiniBarItemUpdateWithWhereUniqueWithoutMiniBarInput = {
    where: MiniBarItemWhereUniqueInput
    data: XOR<MiniBarItemUpdateWithoutMiniBarInput, MiniBarItemUncheckedUpdateWithoutMiniBarInput>
  }

  export type MiniBarItemUpdateManyWithWhereWithoutMiniBarInput = {
    where: MiniBarItemScalarWhereInput
    data: XOR<MiniBarItemUpdateManyMutationInput, MiniBarItemUncheckedUpdateManyWithoutMiniBarInput>
  }

  export type MiniBarItemScalarWhereInput = {
    AND?: MiniBarItemScalarWhereInput | MiniBarItemScalarWhereInput[]
    OR?: MiniBarItemScalarWhereInput[]
    NOT?: MiniBarItemScalarWhereInput | MiniBarItemScalarWhereInput[]
    miniBarId?: IntFilter<"MiniBarItem"> | number
    itemId?: IntFilter<"MiniBarItem"> | number
    quantity?: IntFilter<"MiniBarItem"> | number
  }

  export type MiniBarItemCreateWithoutItemInput = {
    quantity: number
    miniBar: MiniBarCreateNestedOneWithoutItemsInput
  }

  export type MiniBarItemUncheckedCreateWithoutItemInput = {
    miniBarId: number
    quantity: number
  }

  export type MiniBarItemCreateOrConnectWithoutItemInput = {
    where: MiniBarItemWhereUniqueInput
    create: XOR<MiniBarItemCreateWithoutItemInput, MiniBarItemUncheckedCreateWithoutItemInput>
  }

  export type MiniBarItemCreateManyItemInputEnvelope = {
    data: MiniBarItemCreateManyItemInput | MiniBarItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutItemInput = {
    quantity: number
  }

  export type InventoryUncheckedCreateWithoutItemInput = {
    id?: number
    quantity: number
  }

  export type InventoryCreateOrConnectWithoutItemInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
  }

  export type InventoryCreateManyItemInputEnvelope = {
    data: InventoryCreateManyItemInput | InventoryCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type AddChargeItemCreateWithoutItemInput = {
    quantity: number
    additionalCharge: AdditionalChargeReceiptCreateNestedOneWithoutItemsInput
  }

  export type AddChargeItemUncheckedCreateWithoutItemInput = {
    addChargeId: number
    quantity: number
  }

  export type AddChargeItemCreateOrConnectWithoutItemInput = {
    where: AddChargeItemWhereUniqueInput
    create: XOR<AddChargeItemCreateWithoutItemInput, AddChargeItemUncheckedCreateWithoutItemInput>
  }

  export type AddChargeItemCreateManyItemInputEnvelope = {
    data: AddChargeItemCreateManyItemInput | AddChargeItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type MiniBarItemUpsertWithWhereUniqueWithoutItemInput = {
    where: MiniBarItemWhereUniqueInput
    update: XOR<MiniBarItemUpdateWithoutItemInput, MiniBarItemUncheckedUpdateWithoutItemInput>
    create: XOR<MiniBarItemCreateWithoutItemInput, MiniBarItemUncheckedCreateWithoutItemInput>
  }

  export type MiniBarItemUpdateWithWhereUniqueWithoutItemInput = {
    where: MiniBarItemWhereUniqueInput
    data: XOR<MiniBarItemUpdateWithoutItemInput, MiniBarItemUncheckedUpdateWithoutItemInput>
  }

  export type MiniBarItemUpdateManyWithWhereWithoutItemInput = {
    where: MiniBarItemScalarWhereInput
    data: XOR<MiniBarItemUpdateManyMutationInput, MiniBarItemUncheckedUpdateManyWithoutItemInput>
  }

  export type InventoryUpsertWithWhereUniqueWithoutItemInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutItemInput, InventoryUncheckedUpdateWithoutItemInput>
    create: XOR<InventoryCreateWithoutItemInput, InventoryUncheckedCreateWithoutItemInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutItemInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutItemInput, InventoryUncheckedUpdateWithoutItemInput>
  }

  export type InventoryUpdateManyWithWhereWithoutItemInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutItemInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: IntFilter<"Inventory"> | number
    itemId?: IntFilter<"Inventory"> | number
    quantity?: IntFilter<"Inventory"> | number
  }

  export type AddChargeItemUpsertWithWhereUniqueWithoutItemInput = {
    where: AddChargeItemWhereUniqueInput
    update: XOR<AddChargeItemUpdateWithoutItemInput, AddChargeItemUncheckedUpdateWithoutItemInput>
    create: XOR<AddChargeItemCreateWithoutItemInput, AddChargeItemUncheckedCreateWithoutItemInput>
  }

  export type AddChargeItemUpdateWithWhereUniqueWithoutItemInput = {
    where: AddChargeItemWhereUniqueInput
    data: XOR<AddChargeItemUpdateWithoutItemInput, AddChargeItemUncheckedUpdateWithoutItemInput>
  }

  export type AddChargeItemUpdateManyWithWhereWithoutItemInput = {
    where: AddChargeItemScalarWhereInput
    data: XOR<AddChargeItemUpdateManyMutationInput, AddChargeItemUncheckedUpdateManyWithoutItemInput>
  }

  export type AddChargeItemScalarWhereInput = {
    AND?: AddChargeItemScalarWhereInput | AddChargeItemScalarWhereInput[]
    OR?: AddChargeItemScalarWhereInput[]
    NOT?: AddChargeItemScalarWhereInput | AddChargeItemScalarWhereInput[]
    addChargeId?: IntFilter<"AddChargeItem"> | number
    itemId?: IntFilter<"AddChargeItem"> | number
    quantity?: IntFilter<"AddChargeItem"> | number
  }

  export type MiniBarCreateWithoutItemsInput = {
    room: RoomCreateNestedOneWithoutMiniBarInput
  }

  export type MiniBarUncheckedCreateWithoutItemsInput = {
    id?: number
    roomNumber: string
  }

  export type MiniBarCreateOrConnectWithoutItemsInput = {
    where: MiniBarWhereUniqueInput
    create: XOR<MiniBarCreateWithoutItemsInput, MiniBarUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutMiniBarItemsInput = {
    name: string
    price: number
    inventory?: InventoryCreateNestedManyWithoutItemInput
    additionalCharges?: AddChargeItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutMiniBarItemsInput = {
    id?: number
    name: string
    price: number
    inventory?: InventoryUncheckedCreateNestedManyWithoutItemInput
    additionalCharges?: AddChargeItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutMiniBarItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutMiniBarItemsInput, ItemUncheckedCreateWithoutMiniBarItemsInput>
  }

  export type MiniBarUpsertWithoutItemsInput = {
    update: XOR<MiniBarUpdateWithoutItemsInput, MiniBarUncheckedUpdateWithoutItemsInput>
    create: XOR<MiniBarCreateWithoutItemsInput, MiniBarUncheckedCreateWithoutItemsInput>
    where?: MiniBarWhereInput
  }

  export type MiniBarUpdateToOneWithWhereWithoutItemsInput = {
    where?: MiniBarWhereInput
    data: XOR<MiniBarUpdateWithoutItemsInput, MiniBarUncheckedUpdateWithoutItemsInput>
  }

  export type MiniBarUpdateWithoutItemsInput = {
    room?: RoomUpdateOneRequiredWithoutMiniBarNestedInput
  }

  export type MiniBarUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpsertWithoutMiniBarItemsInput = {
    update: XOR<ItemUpdateWithoutMiniBarItemsInput, ItemUncheckedUpdateWithoutMiniBarItemsInput>
    create: XOR<ItemCreateWithoutMiniBarItemsInput, ItemUncheckedCreateWithoutMiniBarItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutMiniBarItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutMiniBarItemsInput, ItemUncheckedUpdateWithoutMiniBarItemsInput>
  }

  export type ItemUpdateWithoutMiniBarItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    inventory?: InventoryUpdateManyWithoutItemNestedInput
    additionalCharges?: AddChargeItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutMiniBarItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    inventory?: InventoryUncheckedUpdateManyWithoutItemNestedInput
    additionalCharges?: AddChargeItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateWithoutInventoryInput = {
    name: string
    price: number
    miniBarItems?: MiniBarItemCreateNestedManyWithoutItemInput
    additionalCharges?: AddChargeItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutInventoryInput = {
    id?: number
    name: string
    price: number
    miniBarItems?: MiniBarItemUncheckedCreateNestedManyWithoutItemInput
    additionalCharges?: AddChargeItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutInventoryInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutInventoryInput, ItemUncheckedCreateWithoutInventoryInput>
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
    miniBarItems?: MiniBarItemUpdateManyWithoutItemNestedInput
    additionalCharges?: AddChargeItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    miniBarItems?: MiniBarItemUncheckedUpdateManyWithoutItemNestedInput
    additionalCharges?: AddChargeItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type RoomCreateWithoutBookingsInput = {
    roomNumber: string
    sessionId?: number | null
    floor: FloorCreateNestedOneWithoutRoomsInput
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    status?: RoomStatusCreateNestedOneWithoutRoomsInput
    miniBar?: MiniBarCreateNestedOneWithoutRoomInput
    receipts?: ReceiptCreateNestedManyWithoutRoomInput
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingsInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
    miniBar?: MiniBarUncheckedCreateNestedOneWithoutRoomInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutRoomInput
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
  }

  export type GuestCreateWithoutBookingsInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutGuestsInput
    receipts?: ReceiptCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutBookingsInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutGuestsInput
    receipts?: ReceiptUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutBookingsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
  }

  export type RoomUpsertWithoutBookingsInput = {
    update: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateWithoutBookingsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    status?: RoomStatusUpdateOneWithoutRoomsNestedInput
    miniBar?: MiniBarUpdateOneWithoutRoomNestedInput
    receipts?: ReceiptUpdateManyWithoutRoomNestedInput
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    miniBar?: MiniBarUncheckedUpdateOneWithoutRoomNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutRoomNestedInput
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type GuestUpsertWithoutBookingsInput = {
    update: XOR<GuestUpdateWithoutBookingsInput, GuestUncheckedUpdateWithoutBookingsInput>
    create: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutBookingsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutBookingsInput, GuestUncheckedUpdateWithoutBookingsInput>
  }

  export type GuestUpdateWithoutBookingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutGuestsNestedInput
    receipts?: ReceiptUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutBookingsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutGuestsNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type RoomCreateWithoutReceiptsInput = {
    roomNumber: string
    sessionId?: number | null
    floor: FloorCreateNestedOneWithoutRoomsInput
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    status?: RoomStatusCreateNestedOneWithoutRoomsInput
    miniBar?: MiniBarCreateNestedOneWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    session?: SessionCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutReceiptsInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
    miniBar?: MiniBarUncheckedCreateNestedOneWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    session?: SessionUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutReceiptsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReceiptsInput, RoomUncheckedCreateWithoutReceiptsInput>
  }

  export type GuestCreateWithoutReceiptsInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutGuestsInput
    bookings?: BookingCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutReceiptsInput = {
    uid?: string
    name: string
    phone: string
    email: string
    address: string
    nicCardNum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutGuestsInput
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutReceiptsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutReceiptsInput, GuestUncheckedCreateWithoutReceiptsInput>
  }

  export type AdditionalChargeReceiptCreateWithoutReceiptInput = {
    purchaseDate: Date | string
    restaurantReceipt?: RestaurantReceiptCreateNestedOneWithoutAdditionalChargeInput
    items?: AddChargeItemCreateNestedManyWithoutAdditionalChargeInput
    services?: AddChargeServiceCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput = {
    id?: number
    purchaseDate: Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedCreateNestedOneWithoutAdditionalChargeInput
    items?: AddChargeItemUncheckedCreateNestedManyWithoutAdditionalChargeInput
    services?: AddChargeServiceUncheckedCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptCreateOrConnectWithoutReceiptInput = {
    where: AdditionalChargeReceiptWhereUniqueInput
    create: XOR<AdditionalChargeReceiptCreateWithoutReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput>
  }

  export type AdditionalChargeReceiptCreateManyReceiptInputEnvelope = {
    data: AdditionalChargeReceiptCreateManyReceiptInput | AdditionalChargeReceiptCreateManyReceiptInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutReceiptsInput = {
    update: XOR<RoomUpdateWithoutReceiptsInput, RoomUncheckedUpdateWithoutReceiptsInput>
    create: XOR<RoomCreateWithoutReceiptsInput, RoomUncheckedCreateWithoutReceiptsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReceiptsInput, RoomUncheckedUpdateWithoutReceiptsInput>
  }

  export type RoomUpdateWithoutReceiptsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    status?: RoomStatusUpdateOneWithoutRoomsNestedInput
    miniBar?: MiniBarUpdateOneWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutReceiptsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    miniBar?: MiniBarUncheckedUpdateOneWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type GuestUpsertWithoutReceiptsInput = {
    update: XOR<GuestUpdateWithoutReceiptsInput, GuestUncheckedUpdateWithoutReceiptsInput>
    create: XOR<GuestCreateWithoutReceiptsInput, GuestUncheckedCreateWithoutReceiptsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutReceiptsInput, GuestUncheckedUpdateWithoutReceiptsInput>
  }

  export type GuestUpdateWithoutReceiptsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutGuestsNestedInput
    bookings?: BookingUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutReceiptsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutGuestsNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type AdditionalChargeReceiptUpsertWithWhereUniqueWithoutReceiptInput = {
    where: AdditionalChargeReceiptWhereUniqueInput
    update: XOR<AdditionalChargeReceiptUpdateWithoutReceiptInput, AdditionalChargeReceiptUncheckedUpdateWithoutReceiptInput>
    create: XOR<AdditionalChargeReceiptCreateWithoutReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutReceiptInput>
  }

  export type AdditionalChargeReceiptUpdateWithWhereUniqueWithoutReceiptInput = {
    where: AdditionalChargeReceiptWhereUniqueInput
    data: XOR<AdditionalChargeReceiptUpdateWithoutReceiptInput, AdditionalChargeReceiptUncheckedUpdateWithoutReceiptInput>
  }

  export type AdditionalChargeReceiptUpdateManyWithWhereWithoutReceiptInput = {
    where: AdditionalChargeReceiptScalarWhereInput
    data: XOR<AdditionalChargeReceiptUpdateManyMutationInput, AdditionalChargeReceiptUncheckedUpdateManyWithoutReceiptInput>
  }

  export type AdditionalChargeReceiptScalarWhereInput = {
    AND?: AdditionalChargeReceiptScalarWhereInput | AdditionalChargeReceiptScalarWhereInput[]
    OR?: AdditionalChargeReceiptScalarWhereInput[]
    NOT?: AdditionalChargeReceiptScalarWhereInput | AdditionalChargeReceiptScalarWhereInput[]
    id?: IntFilter<"AdditionalChargeReceipt"> | number
    receiptId?: IntFilter<"AdditionalChargeReceipt"> | number
    purchaseDate?: DateTimeFilter<"AdditionalChargeReceipt"> | Date | string
  }

  export type ReceiptCreateWithoutAdditionalChargesInput = {
    totalPrice: number
    amountPaid: number
    paidBy: string
    room: RoomCreateNestedOneWithoutReceiptsInput
    guest: GuestCreateNestedOneWithoutReceiptsInput
  }

  export type ReceiptUncheckedCreateWithoutAdditionalChargesInput = {
    id?: number
    roomNumber: string
    guestId: string
    totalPrice: number
    amountPaid: number
    paidBy: string
  }

  export type ReceiptCreateOrConnectWithoutAdditionalChargesInput = {
    where: ReceiptWhereUniqueInput
    create: XOR<ReceiptCreateWithoutAdditionalChargesInput, ReceiptUncheckedCreateWithoutAdditionalChargesInput>
  }

  export type RestaurantReceiptCreateWithoutAdditionalChargeInput = {
    totalPrice: number
    purchaseDate: Date | string
  }

  export type RestaurantReceiptUncheckedCreateWithoutAdditionalChargeInput = {
    id?: number
    totalPrice: number
    purchaseDate: Date | string
  }

  export type RestaurantReceiptCreateOrConnectWithoutAdditionalChargeInput = {
    where: RestaurantReceiptWhereUniqueInput
    create: XOR<RestaurantReceiptCreateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedCreateWithoutAdditionalChargeInput>
  }

  export type AddChargeItemCreateWithoutAdditionalChargeInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutAdditionalChargesInput
  }

  export type AddChargeItemUncheckedCreateWithoutAdditionalChargeInput = {
    itemId: number
    quantity: number
  }

  export type AddChargeItemCreateOrConnectWithoutAdditionalChargeInput = {
    where: AddChargeItemWhereUniqueInput
    create: XOR<AddChargeItemCreateWithoutAdditionalChargeInput, AddChargeItemUncheckedCreateWithoutAdditionalChargeInput>
  }

  export type AddChargeItemCreateManyAdditionalChargeInputEnvelope = {
    data: AddChargeItemCreateManyAdditionalChargeInput | AddChargeItemCreateManyAdditionalChargeInput[]
    skipDuplicates?: boolean
  }

  export type AddChargeServiceCreateWithoutAdditionalChargeInput = {
    quantity: number
    service: ServiceCreateNestedOneWithoutAdditionalChargesInput
  }

  export type AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput = {
    serviceId: number
    quantity: number
  }

  export type AddChargeServiceCreateOrConnectWithoutAdditionalChargeInput = {
    where: AddChargeServiceWhereUniqueInput
    create: XOR<AddChargeServiceCreateWithoutAdditionalChargeInput, AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput>
  }

  export type AddChargeServiceCreateManyAdditionalChargeInputEnvelope = {
    data: AddChargeServiceCreateManyAdditionalChargeInput | AddChargeServiceCreateManyAdditionalChargeInput[]
    skipDuplicates?: boolean
  }

  export type ReceiptUpsertWithoutAdditionalChargesInput = {
    update: XOR<ReceiptUpdateWithoutAdditionalChargesInput, ReceiptUncheckedUpdateWithoutAdditionalChargesInput>
    create: XOR<ReceiptCreateWithoutAdditionalChargesInput, ReceiptUncheckedCreateWithoutAdditionalChargesInput>
    where?: ReceiptWhereInput
  }

  export type ReceiptUpdateToOneWithWhereWithoutAdditionalChargesInput = {
    where?: ReceiptWhereInput
    data: XOR<ReceiptUpdateWithoutAdditionalChargesInput, ReceiptUncheckedUpdateWithoutAdditionalChargesInput>
  }

  export type ReceiptUpdateWithoutAdditionalChargesInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutReceiptsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReceiptsNestedInput
  }

  export type ReceiptUncheckedUpdateWithoutAdditionalChargesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantReceiptUpsertWithoutAdditionalChargeInput = {
    update: XOR<RestaurantReceiptUpdateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedUpdateWithoutAdditionalChargeInput>
    create: XOR<RestaurantReceiptCreateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedCreateWithoutAdditionalChargeInput>
    where?: RestaurantReceiptWhereInput
  }

  export type RestaurantReceiptUpdateToOneWithWhereWithoutAdditionalChargeInput = {
    where?: RestaurantReceiptWhereInput
    data: XOR<RestaurantReceiptUpdateWithoutAdditionalChargeInput, RestaurantReceiptUncheckedUpdateWithoutAdditionalChargeInput>
  }

  export type RestaurantReceiptUpdateWithoutAdditionalChargeInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantReceiptUncheckedUpdateWithoutAdditionalChargeInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddChargeItemUpsertWithWhereUniqueWithoutAdditionalChargeInput = {
    where: AddChargeItemWhereUniqueInput
    update: XOR<AddChargeItemUpdateWithoutAdditionalChargeInput, AddChargeItemUncheckedUpdateWithoutAdditionalChargeInput>
    create: XOR<AddChargeItemCreateWithoutAdditionalChargeInput, AddChargeItemUncheckedCreateWithoutAdditionalChargeInput>
  }

  export type AddChargeItemUpdateWithWhereUniqueWithoutAdditionalChargeInput = {
    where: AddChargeItemWhereUniqueInput
    data: XOR<AddChargeItemUpdateWithoutAdditionalChargeInput, AddChargeItemUncheckedUpdateWithoutAdditionalChargeInput>
  }

  export type AddChargeItemUpdateManyWithWhereWithoutAdditionalChargeInput = {
    where: AddChargeItemScalarWhereInput
    data: XOR<AddChargeItemUpdateManyMutationInput, AddChargeItemUncheckedUpdateManyWithoutAdditionalChargeInput>
  }

  export type AddChargeServiceUpsertWithWhereUniqueWithoutAdditionalChargeInput = {
    where: AddChargeServiceWhereUniqueInput
    update: XOR<AddChargeServiceUpdateWithoutAdditionalChargeInput, AddChargeServiceUncheckedUpdateWithoutAdditionalChargeInput>
    create: XOR<AddChargeServiceCreateWithoutAdditionalChargeInput, AddChargeServiceUncheckedCreateWithoutAdditionalChargeInput>
  }

  export type AddChargeServiceUpdateWithWhereUniqueWithoutAdditionalChargeInput = {
    where: AddChargeServiceWhereUniqueInput
    data: XOR<AddChargeServiceUpdateWithoutAdditionalChargeInput, AddChargeServiceUncheckedUpdateWithoutAdditionalChargeInput>
  }

  export type AddChargeServiceUpdateManyWithWhereWithoutAdditionalChargeInput = {
    where: AddChargeServiceScalarWhereInput
    data: XOR<AddChargeServiceUpdateManyMutationInput, AddChargeServiceUncheckedUpdateManyWithoutAdditionalChargeInput>
  }

  export type AddChargeServiceScalarWhereInput = {
    AND?: AddChargeServiceScalarWhereInput | AddChargeServiceScalarWhereInput[]
    OR?: AddChargeServiceScalarWhereInput[]
    NOT?: AddChargeServiceScalarWhereInput | AddChargeServiceScalarWhereInput[]
    addChargeId?: IntFilter<"AddChargeService"> | number
    serviceId?: IntFilter<"AddChargeService"> | number
    quantity?: IntFilter<"AddChargeService"> | number
  }

  export type AdditionalChargeReceiptCreateWithoutRestaurantReceiptInput = {
    purchaseDate: Date | string
    receipt: ReceiptCreateNestedOneWithoutAdditionalChargesInput
    items?: AddChargeItemCreateNestedManyWithoutAdditionalChargeInput
    services?: AddChargeServiceCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptUncheckedCreateWithoutRestaurantReceiptInput = {
    id?: number
    receiptId: number
    purchaseDate: Date | string
    items?: AddChargeItemUncheckedCreateNestedManyWithoutAdditionalChargeInput
    services?: AddChargeServiceUncheckedCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptCreateOrConnectWithoutRestaurantReceiptInput = {
    where: AdditionalChargeReceiptWhereUniqueInput
    create: XOR<AdditionalChargeReceiptCreateWithoutRestaurantReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutRestaurantReceiptInput>
  }

  export type AdditionalChargeReceiptUpsertWithoutRestaurantReceiptInput = {
    update: XOR<AdditionalChargeReceiptUpdateWithoutRestaurantReceiptInput, AdditionalChargeReceiptUncheckedUpdateWithoutRestaurantReceiptInput>
    create: XOR<AdditionalChargeReceiptCreateWithoutRestaurantReceiptInput, AdditionalChargeReceiptUncheckedCreateWithoutRestaurantReceiptInput>
    where?: AdditionalChargeReceiptWhereInput
  }

  export type AdditionalChargeReceiptUpdateToOneWithWhereWithoutRestaurantReceiptInput = {
    where?: AdditionalChargeReceiptWhereInput
    data: XOR<AdditionalChargeReceiptUpdateWithoutRestaurantReceiptInput, AdditionalChargeReceiptUncheckedUpdateWithoutRestaurantReceiptInput>
  }

  export type AdditionalChargeReceiptUpdateWithoutRestaurantReceiptInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: ReceiptUpdateOneRequiredWithoutAdditionalChargesNestedInput
    items?: AddChargeItemUpdateManyWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AdditionalChargeReceiptUncheckedUpdateWithoutRestaurantReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: AddChargeItemUncheckedUpdateManyWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUncheckedUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AddChargeServiceCreateWithoutServiceInput = {
    quantity: number
    additionalCharge: AdditionalChargeReceiptCreateNestedOneWithoutServicesInput
  }

  export type AddChargeServiceUncheckedCreateWithoutServiceInput = {
    addChargeId: number
    quantity: number
  }

  export type AddChargeServiceCreateOrConnectWithoutServiceInput = {
    where: AddChargeServiceWhereUniqueInput
    create: XOR<AddChargeServiceCreateWithoutServiceInput, AddChargeServiceUncheckedCreateWithoutServiceInput>
  }

  export type AddChargeServiceCreateManyServiceInputEnvelope = {
    data: AddChargeServiceCreateManyServiceInput | AddChargeServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AddChargeServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: AddChargeServiceWhereUniqueInput
    update: XOR<AddChargeServiceUpdateWithoutServiceInput, AddChargeServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<AddChargeServiceCreateWithoutServiceInput, AddChargeServiceUncheckedCreateWithoutServiceInput>
  }

  export type AddChargeServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: AddChargeServiceWhereUniqueInput
    data: XOR<AddChargeServiceUpdateWithoutServiceInput, AddChargeServiceUncheckedUpdateWithoutServiceInput>
  }

  export type AddChargeServiceUpdateManyWithWhereWithoutServiceInput = {
    where: AddChargeServiceScalarWhereInput
    data: XOR<AddChargeServiceUpdateManyMutationInput, AddChargeServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type AdditionalChargeReceiptCreateWithoutItemsInput = {
    purchaseDate: Date | string
    receipt: ReceiptCreateNestedOneWithoutAdditionalChargesInput
    restaurantReceipt?: RestaurantReceiptCreateNestedOneWithoutAdditionalChargeInput
    services?: AddChargeServiceCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptUncheckedCreateWithoutItemsInput = {
    id?: number
    receiptId: number
    purchaseDate: Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedCreateNestedOneWithoutAdditionalChargeInput
    services?: AddChargeServiceUncheckedCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptCreateOrConnectWithoutItemsInput = {
    where: AdditionalChargeReceiptWhereUniqueInput
    create: XOR<AdditionalChargeReceiptCreateWithoutItemsInput, AdditionalChargeReceiptUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutAdditionalChargesInput = {
    name: string
    price: number
    miniBarItems?: MiniBarItemCreateNestedManyWithoutItemInput
    inventory?: InventoryCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutAdditionalChargesInput = {
    id?: number
    name: string
    price: number
    miniBarItems?: MiniBarItemUncheckedCreateNestedManyWithoutItemInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutAdditionalChargesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutAdditionalChargesInput, ItemUncheckedCreateWithoutAdditionalChargesInput>
  }

  export type AdditionalChargeReceiptUpsertWithoutItemsInput = {
    update: XOR<AdditionalChargeReceiptUpdateWithoutItemsInput, AdditionalChargeReceiptUncheckedUpdateWithoutItemsInput>
    create: XOR<AdditionalChargeReceiptCreateWithoutItemsInput, AdditionalChargeReceiptUncheckedCreateWithoutItemsInput>
    where?: AdditionalChargeReceiptWhereInput
  }

  export type AdditionalChargeReceiptUpdateToOneWithWhereWithoutItemsInput = {
    where?: AdditionalChargeReceiptWhereInput
    data: XOR<AdditionalChargeReceiptUpdateWithoutItemsInput, AdditionalChargeReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type AdditionalChargeReceiptUpdateWithoutItemsInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: ReceiptUpdateOneRequiredWithoutAdditionalChargesNestedInput
    restaurantReceipt?: RestaurantReceiptUpdateOneWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AdditionalChargeReceiptUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedUpdateOneWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUncheckedUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type ItemUpsertWithoutAdditionalChargesInput = {
    update: XOR<ItemUpdateWithoutAdditionalChargesInput, ItemUncheckedUpdateWithoutAdditionalChargesInput>
    create: XOR<ItemCreateWithoutAdditionalChargesInput, ItemUncheckedCreateWithoutAdditionalChargesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutAdditionalChargesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutAdditionalChargesInput, ItemUncheckedUpdateWithoutAdditionalChargesInput>
  }

  export type ItemUpdateWithoutAdditionalChargesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    miniBarItems?: MiniBarItemUpdateManyWithoutItemNestedInput
    inventory?: InventoryUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutAdditionalChargesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    miniBarItems?: MiniBarItemUncheckedUpdateManyWithoutItemNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutItemNestedInput
  }

  export type AdditionalChargeReceiptCreateWithoutServicesInput = {
    purchaseDate: Date | string
    receipt: ReceiptCreateNestedOneWithoutAdditionalChargesInput
    restaurantReceipt?: RestaurantReceiptCreateNestedOneWithoutAdditionalChargeInput
    items?: AddChargeItemCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptUncheckedCreateWithoutServicesInput = {
    id?: number
    receiptId: number
    purchaseDate: Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedCreateNestedOneWithoutAdditionalChargeInput
    items?: AddChargeItemUncheckedCreateNestedManyWithoutAdditionalChargeInput
  }

  export type AdditionalChargeReceiptCreateOrConnectWithoutServicesInput = {
    where: AdditionalChargeReceiptWhereUniqueInput
    create: XOR<AdditionalChargeReceiptCreateWithoutServicesInput, AdditionalChargeReceiptUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutAdditionalChargesInput = {
    name: string
    price: number
  }

  export type ServiceUncheckedCreateWithoutAdditionalChargesInput = {
    id?: number
    name: string
    price: number
  }

  export type ServiceCreateOrConnectWithoutAdditionalChargesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAdditionalChargesInput, ServiceUncheckedCreateWithoutAdditionalChargesInput>
  }

  export type AdditionalChargeReceiptUpsertWithoutServicesInput = {
    update: XOR<AdditionalChargeReceiptUpdateWithoutServicesInput, AdditionalChargeReceiptUncheckedUpdateWithoutServicesInput>
    create: XOR<AdditionalChargeReceiptCreateWithoutServicesInput, AdditionalChargeReceiptUncheckedCreateWithoutServicesInput>
    where?: AdditionalChargeReceiptWhereInput
  }

  export type AdditionalChargeReceiptUpdateToOneWithWhereWithoutServicesInput = {
    where?: AdditionalChargeReceiptWhereInput
    data: XOR<AdditionalChargeReceiptUpdateWithoutServicesInput, AdditionalChargeReceiptUncheckedUpdateWithoutServicesInput>
  }

  export type AdditionalChargeReceiptUpdateWithoutServicesInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: ReceiptUpdateOneRequiredWithoutAdditionalChargesNestedInput
    restaurantReceipt?: RestaurantReceiptUpdateOneWithoutAdditionalChargeNestedInput
    items?: AddChargeItemUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AdditionalChargeReceiptUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedUpdateOneWithoutAdditionalChargeNestedInput
    items?: AddChargeItemUncheckedUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type ServiceUpsertWithoutAdditionalChargesInput = {
    update: XOR<ServiceUpdateWithoutAdditionalChargesInput, ServiceUncheckedUpdateWithoutAdditionalChargesInput>
    create: XOR<ServiceCreateWithoutAdditionalChargesInput, ServiceUncheckedCreateWithoutAdditionalChargesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAdditionalChargesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAdditionalChargesInput, ServiceUncheckedUpdateWithoutAdditionalChargesInput>
  }

  export type ServiceUpdateWithoutAdditionalChargesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateWithoutAdditionalChargesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyFloorInput = {
    roomNumber: string
    roomTypeId: number
    statusId?: number | null
    sessionId?: number | null
  }

  export type RoomUpdateWithoutFloorInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    status?: RoomStatusUpdateOneWithoutRoomsNestedInput
    miniBar?: MiniBarUpdateOneWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUpdateManyWithoutRoomNestedInput
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutFloorInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    miniBar?: MiniBarUncheckedUpdateOneWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutRoomNestedInput
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutFloorInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    roomTypeId?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoomCreateManyRoomTypeInput = {
    roomNumber: string
    floorNumber: number
    statusId?: number | null
    sessionId?: number | null
  }

  export type RoomUpdateWithoutRoomTypeInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    status?: RoomStatusUpdateOneWithoutRoomsNestedInput
    miniBar?: MiniBarUpdateOneWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUpdateManyWithoutRoomNestedInput
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomTypeInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    miniBar?: MiniBarUncheckedUpdateOneWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutRoomNestedInput
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutRoomTypeInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoomCreateManyStatusInput = {
    roomNumber: string
    floorNumber: number
    roomTypeId: number
    sessionId?: number | null
  }

  export type RoomUpdateWithoutStatusInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    miniBar?: MiniBarUpdateOneWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUpdateManyWithoutRoomNestedInput
    session?: SessionUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutStatusInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
    miniBar?: MiniBarUncheckedUpdateOneWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutRoomNestedInput
    session?: SessionUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutStatusInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingCreateManyRoomInput = {
    id?: number
    guestId?: string | null
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type ReceiptCreateManyRoomInput = {
    id?: number
    guestId: string
    totalPrice: number
    amountPaid: number
    paidBy: string
  }

  export type SessionCreateManyRoomInput = {
    id?: number
    numberOfExtraBeds: number
    actualCheckIn: Date | string
    actualCheckOut?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutRoomInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptUpdateWithoutRoomInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
    guest?: GuestUpdateOneRequiredWithoutReceiptsNestedInput
    additionalCharges?: AdditionalChargeReceiptUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
    additionalCharges?: AdditionalChargeReceiptUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUpdateWithoutRoomInput = {
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUpdateManyWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUpdateWithoutSessionsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutGuestNestedInput
    receipts?: ReceiptUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutSessionsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
    receipts?: ReceiptUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateManyWithoutSessionsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nicCardNum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyGuestInput = {
    id?: number
    roomNumber: string
    contactName: string
    contactPhone: string
    contactEmail?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type ReceiptCreateManyGuestInput = {
    id?: number
    roomNumber: string
    totalPrice: number
    amountPaid: number
    paidBy: string
  }

  export type SessionUpdateWithoutGuestsInput = {
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutGuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutGuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    numberOfExtraBeds?: IntFieldUpdateOperationsInput | number
    actualCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutGuestInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiptUpdateWithoutGuestInput = {
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutReceiptsNestedInput
    additionalCharges?: AdditionalChargeReceiptUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
    additionalCharges?: AdditionalChargeReceiptUncheckedUpdateManyWithoutReceiptNestedInput
  }

  export type ReceiptUncheckedUpdateManyWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paidBy?: StringFieldUpdateOperationsInput | string
  }

  export type MiniBarItemCreateManyMiniBarInput = {
    itemId: number
    quantity: number
  }

  export type MiniBarItemUpdateWithoutMiniBarInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutMiniBarItemsNestedInput
  }

  export type MiniBarItemUncheckedUpdateWithoutMiniBarInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniBarItemUncheckedUpdateManyWithoutMiniBarInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniBarItemCreateManyItemInput = {
    miniBarId: number
    quantity: number
  }

  export type InventoryCreateManyItemInput = {
    id?: number
    quantity: number
  }

  export type AddChargeItemCreateManyItemInput = {
    addChargeId: number
    quantity: number
  }

  export type MiniBarItemUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    miniBar?: MiniBarUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MiniBarItemUncheckedUpdateWithoutItemInput = {
    miniBarId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniBarItemUncheckedUpdateManyWithoutItemInput = {
    miniBarId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeItemUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    additionalCharge?: AdditionalChargeReceiptUpdateOneRequiredWithoutItemsNestedInput
  }

  export type AddChargeItemUncheckedUpdateWithoutItemInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeItemUncheckedUpdateManyWithoutItemInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AdditionalChargeReceiptCreateManyReceiptInput = {
    id?: number
    purchaseDate: Date | string
  }

  export type AdditionalChargeReceiptUpdateWithoutReceiptInput = {
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantReceipt?: RestaurantReceiptUpdateOneWithoutAdditionalChargeNestedInput
    items?: AddChargeItemUpdateManyWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AdditionalChargeReceiptUncheckedUpdateWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantReceipt?: RestaurantReceiptUncheckedUpdateOneWithoutAdditionalChargeNestedInput
    items?: AddChargeItemUncheckedUpdateManyWithoutAdditionalChargeNestedInput
    services?: AddChargeServiceUncheckedUpdateManyWithoutAdditionalChargeNestedInput
  }

  export type AdditionalChargeReceiptUncheckedUpdateManyWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddChargeItemCreateManyAdditionalChargeInput = {
    itemId: number
    quantity: number
  }

  export type AddChargeServiceCreateManyAdditionalChargeInput = {
    serviceId: number
    quantity: number
  }

  export type AddChargeItemUpdateWithoutAdditionalChargeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutAdditionalChargesNestedInput
  }

  export type AddChargeItemUncheckedUpdateWithoutAdditionalChargeInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeItemUncheckedUpdateManyWithoutAdditionalChargeInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeServiceUpdateWithoutAdditionalChargeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    service?: ServiceUpdateOneRequiredWithoutAdditionalChargesNestedInput
  }

  export type AddChargeServiceUncheckedUpdateWithoutAdditionalChargeInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeServiceUncheckedUpdateManyWithoutAdditionalChargeInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeServiceCreateManyServiceInput = {
    addChargeId: number
    quantity: number
  }

  export type AddChargeServiceUpdateWithoutServiceInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    additionalCharge?: AdditionalChargeReceiptUpdateOneRequiredWithoutServicesNestedInput
  }

  export type AddChargeServiceUncheckedUpdateWithoutServiceInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AddChargeServiceUncheckedUpdateManyWithoutServiceInput = {
    addChargeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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