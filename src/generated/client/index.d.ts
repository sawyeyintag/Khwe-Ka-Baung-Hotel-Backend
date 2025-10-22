
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
 * Model RoomType
 * 
 */
export type RoomType = $Result.DefaultSelection<Prisma.$RoomTypePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model SessionReceipt
 * 
 */
export type SessionReceipt = $Result.DefaultSelection<Prisma.$SessionReceiptPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model OtherReceipt
 * 
 */
export type OtherReceipt = $Result.DefaultSelection<Prisma.$OtherReceiptPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model RoomItem
 * 
 */
export type RoomItem = $Result.DefaultSelection<Prisma.$RoomItemPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model OtherReceiptService
 * 
 */
export type OtherReceiptService = $Result.DefaultSelection<Prisma.$OtherReceiptServicePayload>
/**
 * Model OtherReceiptItem
 * 
 */
export type OtherReceiptItem = $Result.DefaultSelection<Prisma.$OtherReceiptItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RoomTypes
 * const roomTypes = await prisma.roomType.findMany()
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
   * // Fetch zero or more RoomTypes
   * const roomTypes = await prisma.roomType.findMany()
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
   * `prisma.roomType`: Exposes CRUD operations for the **RoomType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTypes
    * const roomTypes = await prisma.roomType.findMany()
    * ```
    */
  get roomType(): Prisma.RoomTypeDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.sessionReceipt`: Exposes CRUD operations for the **SessionReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionReceipts
    * const sessionReceipts = await prisma.sessionReceipt.findMany()
    * ```
    */
  get sessionReceipt(): Prisma.SessionReceiptDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.otherReceipt`: Exposes CRUD operations for the **OtherReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherReceipts
    * const otherReceipts = await prisma.otherReceipt.findMany()
    * ```
    */
  get otherReceipt(): Prisma.OtherReceiptDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.roomItem`: Exposes CRUD operations for the **RoomItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomItems
    * const roomItems = await prisma.roomItem.findMany()
    * ```
    */
  get roomItem(): Prisma.RoomItemDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.otherReceiptService`: Exposes CRUD operations for the **OtherReceiptService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherReceiptServices
    * const otherReceiptServices = await prisma.otherReceiptService.findMany()
    * ```
    */
  get otherReceiptService(): Prisma.OtherReceiptServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherReceiptItem`: Exposes CRUD operations for the **OtherReceiptItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherReceiptItems
    * const otherReceiptItems = await prisma.otherReceiptItem.findMany()
    * ```
    */
  get otherReceiptItem(): Prisma.OtherReceiptItemDelegate<ExtArgs, ClientOptions>;
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
    RoomType: 'RoomType',
    Room: 'Room',
    Booking: 'Booking',
    Session: 'Session',
    SessionReceipt: 'SessionReceipt',
    Guest: 'Guest',
    OtherReceipt: 'OtherReceipt',
    Item: 'Item',
    RoomItem: 'RoomItem',
    Service: 'Service',
    OtherReceiptService: 'OtherReceiptService',
    OtherReceiptItem: 'OtherReceiptItem'
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
      modelProps: "roomType" | "room" | "booking" | "session" | "sessionReceipt" | "guest" | "otherReceipt" | "item" | "roomItem" | "service" | "otherReceiptService" | "otherReceiptItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      SessionReceipt: {
        payload: Prisma.$SessionReceiptPayload<ExtArgs>
        fields: Prisma.SessionReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload>
          }
          findFirst: {
            args: Prisma.SessionReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload>
          }
          findMany: {
            args: Prisma.SessionReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload>[]
          }
          create: {
            args: Prisma.SessionReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload>
          }
          createMany: {
            args: Prisma.SessionReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload>
          }
          update: {
            args: Prisma.SessionReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload>
          }
          deleteMany: {
            args: Prisma.SessionReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionReceiptPayload>
          }
          aggregate: {
            args: Prisma.SessionReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionReceipt>
          }
          groupBy: {
            args: Prisma.SessionReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<SessionReceiptCountAggregateOutputType> | number
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
      OtherReceipt: {
        payload: Prisma.$OtherReceiptPayload<ExtArgs>
        fields: Prisma.OtherReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload>
          }
          findFirst: {
            args: Prisma.OtherReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload>
          }
          findMany: {
            args: Prisma.OtherReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload>[]
          }
          create: {
            args: Prisma.OtherReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload>
          }
          createMany: {
            args: Prisma.OtherReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtherReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload>
          }
          update: {
            args: Prisma.OtherReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload>
          }
          deleteMany: {
            args: Prisma.OtherReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtherReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptPayload>
          }
          aggregate: {
            args: Prisma.OtherReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherReceipt>
          }
          groupBy: {
            args: Prisma.OtherReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtherReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<OtherReceiptCountAggregateOutputType> | number
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
      RoomItem: {
        payload: Prisma.$RoomItemPayload<ExtArgs>
        fields: Prisma.RoomItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload>
          }
          findFirst: {
            args: Prisma.RoomItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload>
          }
          findMany: {
            args: Prisma.RoomItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload>[]
          }
          create: {
            args: Prisma.RoomItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload>
          }
          createMany: {
            args: Prisma.RoomItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload>
          }
          update: {
            args: Prisma.RoomItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload>
          }
          deleteMany: {
            args: Prisma.RoomItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomItemPayload>
          }
          aggregate: {
            args: Prisma.RoomItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomItem>
          }
          groupBy: {
            args: Prisma.RoomItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomItemCountArgs<ExtArgs>
            result: $Utils.Optional<RoomItemCountAggregateOutputType> | number
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
      OtherReceiptService: {
        payload: Prisma.$OtherReceiptServicePayload<ExtArgs>
        fields: Prisma.OtherReceiptServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherReceiptServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherReceiptServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload>
          }
          findFirst: {
            args: Prisma.OtherReceiptServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherReceiptServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload>
          }
          findMany: {
            args: Prisma.OtherReceiptServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload>[]
          }
          create: {
            args: Prisma.OtherReceiptServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload>
          }
          createMany: {
            args: Prisma.OtherReceiptServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtherReceiptServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload>
          }
          update: {
            args: Prisma.OtherReceiptServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload>
          }
          deleteMany: {
            args: Prisma.OtherReceiptServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherReceiptServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtherReceiptServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptServicePayload>
          }
          aggregate: {
            args: Prisma.OtherReceiptServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherReceiptService>
          }
          groupBy: {
            args: Prisma.OtherReceiptServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherReceiptServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtherReceiptServiceCountArgs<ExtArgs>
            result: $Utils.Optional<OtherReceiptServiceCountAggregateOutputType> | number
          }
        }
      }
      OtherReceiptItem: {
        payload: Prisma.$OtherReceiptItemPayload<ExtArgs>
        fields: Prisma.OtherReceiptItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtherReceiptItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtherReceiptItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload>
          }
          findFirst: {
            args: Prisma.OtherReceiptItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtherReceiptItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload>
          }
          findMany: {
            args: Prisma.OtherReceiptItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload>[]
          }
          create: {
            args: Prisma.OtherReceiptItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload>
          }
          createMany: {
            args: Prisma.OtherReceiptItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtherReceiptItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload>
          }
          update: {
            args: Prisma.OtherReceiptItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload>
          }
          deleteMany: {
            args: Prisma.OtherReceiptItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtherReceiptItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtherReceiptItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtherReceiptItemPayload>
          }
          aggregate: {
            args: Prisma.OtherReceiptItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherReceiptItem>
          }
          groupBy: {
            args: Prisma.OtherReceiptItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherReceiptItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtherReceiptItemCountArgs<ExtArgs>
            result: $Utils.Optional<OtherReceiptItemCountAggregateOutputType> | number
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
    roomType?: RoomTypeOmit
    room?: RoomOmit
    booking?: BookingOmit
    session?: SessionOmit
    sessionReceipt?: SessionReceiptOmit
    guest?: GuestOmit
    otherReceipt?: OtherReceiptOmit
    item?: ItemOmit
    roomItem?: RoomItemOmit
    service?: ServiceOmit
    otherReceiptService?: OtherReceiptServiceOmit
    otherReceiptItem?: OtherReceiptItemOmit
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
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    sessions: number
    bookings: number
    roomItems: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | RoomCountOutputTypeCountSessionsArgs
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
    roomItems?: boolean | RoomCountOutputTypeCountRoomItemsArgs
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
  export type RoomCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
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
  export type RoomCountOutputTypeCountRoomItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomItemWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    guests: number
    otherReceipts: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guests?: boolean | SessionCountOutputTypeCountGuestsArgs
    otherReceipts?: boolean | SessionCountOutputTypeCountOtherReceiptsArgs
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
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountOtherReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptWhereInput
  }


  /**
   * Count Type OtherReceiptCountOutputType
   */

  export type OtherReceiptCountOutputType = {
    items: number
    services: number
  }

  export type OtherReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OtherReceiptCountOutputTypeCountItemsArgs
    services?: boolean | OtherReceiptCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * OtherReceiptCountOutputType without action
   */
  export type OtherReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptCountOutputType
     */
    select?: OtherReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OtherReceiptCountOutputType without action
   */
  export type OtherReceiptCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptItemWhereInput
  }

  /**
   * OtherReceiptCountOutputType without action
   */
  export type OtherReceiptCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptServiceWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    roomItems: number
    otherReceiptItems: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomItems?: boolean | ItemCountOutputTypeCountRoomItemsArgs
    otherReceiptItems?: boolean | ItemCountOutputTypeCountOtherReceiptItemsArgs
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
  export type ItemCountOutputTypeCountRoomItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomItemWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountOtherReceiptItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptItemWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    otherReceiptServices: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherReceiptServices?: boolean | ServiceCountOutputTypeCountOtherReceiptServicesArgs
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
  export type ServiceCountOutputTypeCountOtherReceiptServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptServiceWhereInput
  }


  /**
   * Models
   */

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
  }

  export type RoomTypeSumAggregateOutputType = {
    id: number | null
  }

  export type RoomTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoomTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoomTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoomTypeAvgAggregateInputType = {
    id?: true
  }

  export type RoomTypeSumAggregateInputType = {
    id?: true
  }

  export type RoomTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoomTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoomTypeCountAggregateInputType = {
    id?: true
    name?: true
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
    rooms?: boolean | RoomType$roomsArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>



  export type RoomTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoomTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["roomType"]>
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
    price: number | null
    floorNumber: number | null
    roomTypeId: number | null
  }

  export type RoomSumAggregateOutputType = {
    price: number | null
    floorNumber: number | null
    roomTypeId: number | null
  }

  export type RoomMinAggregateOutputType = {
    roomNumber: string | null
    price: number | null
    floorNumber: number | null
    roomTypeId: number | null
  }

  export type RoomMaxAggregateOutputType = {
    roomNumber: string | null
    price: number | null
    floorNumber: number | null
    roomTypeId: number | null
  }

  export type RoomCountAggregateOutputType = {
    roomNumber: number
    price: number
    floorNumber: number
    roomTypeId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    price?: true
    floorNumber?: true
    roomTypeId?: true
  }

  export type RoomSumAggregateInputType = {
    price?: true
    floorNumber?: true
    roomTypeId?: true
  }

  export type RoomMinAggregateInputType = {
    roomNumber?: true
    price?: true
    floorNumber?: true
    roomTypeId?: true
  }

  export type RoomMaxAggregateInputType = {
    roomNumber?: true
    price?: true
    floorNumber?: true
    roomTypeId?: true
  }

  export type RoomCountAggregateInputType = {
    roomNumber?: true
    price?: true
    floorNumber?: true
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
    roomNumber: string
    price: number
    floorNumber: number
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
    roomNumber?: boolean
    price?: boolean
    floorNumber?: boolean
    roomTypeId?: boolean
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    sessions?: boolean | Room$sessionsArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    roomItems?: boolean | Room$roomItemsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    roomNumber?: boolean
    price?: boolean
    floorNumber?: boolean
    roomTypeId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roomNumber" | "price" | "floorNumber" | "roomTypeId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    sessions?: boolean | Room$sessionsArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    roomItems?: boolean | Room$roomItemsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      roomType: Prisma.$RoomTypePayload<ExtArgs>
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      roomItems: Prisma.$RoomItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roomNumber: string
      price: number
      floorNumber: number
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
    roomType<T extends RoomTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypeDefaultArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Room$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Room$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomItems<T extends Room$roomItemsArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly price: FieldRef<"Room", 'Float'>
    readonly floorNumber: FieldRef<"Room", 'Int'>
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
   * Room.sessions
   */
  export type Room$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Room.roomItems
   */
  export type Room$roomItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    where?: RoomItemWhereInput
    orderBy?: RoomItemOrderByWithRelationInput | RoomItemOrderByWithRelationInput[]
    cursor?: RoomItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomItemScalarFieldEnum | RoomItemScalarFieldEnum[]
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
    contactName: string | null
    contactPhone: string | null
    note: string | null
    estCheckIn: Date | null
    estCheckOut: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    contactName: string | null
    contactPhone: string | null
    note: string | null
    estCheckIn: Date | null
    estCheckOut: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    roomNumber: number
    contactName: number
    contactPhone: number
    note: number
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
    contactName?: true
    contactPhone?: true
    note?: true
    estCheckIn?: true
    estCheckOut?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    contactName?: true
    contactPhone?: true
    note?: true
    estCheckIn?: true
    estCheckOut?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    roomNumber?: true
    contactName?: true
    contactPhone?: true
    note?: true
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
    contactName: string
    contactPhone: string
    note: string | null
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
    contactName?: boolean
    contactPhone?: boolean
    note?: boolean
    estCheckIn?: boolean
    estCheckOut?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    contactName?: boolean
    contactPhone?: boolean
    note?: boolean
    estCheckIn?: boolean
    estCheckOut?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "contactName" | "contactPhone" | "note" | "estCheckIn" | "estCheckOut", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: string
      contactName: string
      contactPhone: string
      note: string | null
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
    readonly contactName: FieldRef<"Booking", 'String'>
    readonly contactPhone: FieldRef<"Booking", 'String'>
    readonly note: FieldRef<"Booking", 'String'>
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
    discount: number | null
    numberOfExtraBeds: number | null
    extraBedPrice: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    discount: number | null
    numberOfExtraBeds: number | null
    extraBedPrice: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    discount: number | null
    numberOfExtraBeds: number | null
    extraBedPrice: number | null
    checkedInAt: Date | null
    checkedOutAt: Date | null
    note: string | null
    isBreakfastIncluded: boolean | null
    isActive: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    roomNumber: string | null
    discount: number | null
    numberOfExtraBeds: number | null
    extraBedPrice: number | null
    checkedInAt: Date | null
    checkedOutAt: Date | null
    note: string | null
    isBreakfastIncluded: boolean | null
    isActive: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    roomNumber: number
    discount: number
    numberOfExtraBeds: number
    extraBedPrice: number
    checkedInAt: number
    checkedOutAt: number
    note: number
    isBreakfastIncluded: number
    isActive: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    discount?: true
    numberOfExtraBeds?: true
    extraBedPrice?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    discount?: true
    numberOfExtraBeds?: true
    extraBedPrice?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    roomNumber?: true
    discount?: true
    numberOfExtraBeds?: true
    extraBedPrice?: true
    checkedInAt?: true
    checkedOutAt?: true
    note?: true
    isBreakfastIncluded?: true
    isActive?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    discount?: true
    numberOfExtraBeds?: true
    extraBedPrice?: true
    checkedInAt?: true
    checkedOutAt?: true
    note?: true
    isBreakfastIncluded?: true
    isActive?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    roomNumber?: true
    discount?: true
    numberOfExtraBeds?: true
    extraBedPrice?: true
    checkedInAt?: true
    checkedOutAt?: true
    note?: true
    isBreakfastIncluded?: true
    isActive?: true
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
    discount: number | null
    numberOfExtraBeds: number | null
    extraBedPrice: number | null
    checkedInAt: Date
    checkedOutAt: Date | null
    note: string | null
    isBreakfastIncluded: boolean
    isActive: boolean
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
    discount?: boolean
    numberOfExtraBeds?: boolean
    extraBedPrice?: boolean
    checkedInAt?: boolean
    checkedOutAt?: boolean
    note?: boolean
    isBreakfastIncluded?: boolean
    isActive?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guests?: boolean | Session$guestsArgs<ExtArgs>
    receipt?: boolean | Session$receiptArgs<ExtArgs>
    otherReceipts?: boolean | Session$otherReceiptsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    discount?: boolean
    numberOfExtraBeds?: boolean
    extraBedPrice?: boolean
    checkedInAt?: boolean
    checkedOutAt?: boolean
    note?: boolean
    isBreakfastIncluded?: boolean
    isActive?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "discount" | "numberOfExtraBeds" | "extraBedPrice" | "checkedInAt" | "checkedOutAt" | "note" | "isBreakfastIncluded" | "isActive", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    guests?: boolean | Session$guestsArgs<ExtArgs>
    receipt?: boolean | Session$receiptArgs<ExtArgs>
    otherReceipts?: boolean | Session$otherReceiptsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      guests: Prisma.$GuestPayload<ExtArgs>[]
      receipt: Prisma.$SessionReceiptPayload<ExtArgs> | null
      otherReceipts: Prisma.$OtherReceiptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomNumber: string
      discount: number | null
      numberOfExtraBeds: number | null
      extraBedPrice: number | null
      checkedInAt: Date
      checkedOutAt: Date | null
      note: string | null
      isBreakfastIncluded: boolean
      isActive: boolean
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
    receipt<T extends Session$receiptArgs<ExtArgs> = {}>(args?: Subset<T, Session$receiptArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    otherReceipts<T extends Session$otherReceiptsArgs<ExtArgs> = {}>(args?: Subset<T, Session$otherReceiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly discount: FieldRef<"Session", 'Float'>
    readonly numberOfExtraBeds: FieldRef<"Session", 'Int'>
    readonly extraBedPrice: FieldRef<"Session", 'Float'>
    readonly checkedInAt: FieldRef<"Session", 'DateTime'>
    readonly checkedOutAt: FieldRef<"Session", 'DateTime'>
    readonly note: FieldRef<"Session", 'String'>
    readonly isBreakfastIncluded: FieldRef<"Session", 'Boolean'>
    readonly isActive: FieldRef<"Session", 'Boolean'>
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
   * Session.receipt
   */
  export type Session$receiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    where?: SessionReceiptWhereInput
  }

  /**
   * Session.otherReceipts
   */
  export type Session$otherReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    where?: OtherReceiptWhereInput
    orderBy?: OtherReceiptOrderByWithRelationInput | OtherReceiptOrderByWithRelationInput[]
    cursor?: OtherReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherReceiptScalarFieldEnum | OtherReceiptScalarFieldEnum[]
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
   * Model SessionReceipt
   */

  export type AggregateSessionReceipt = {
    _count: SessionReceiptCountAggregateOutputType | null
    _avg: SessionReceiptAvgAggregateOutputType | null
    _sum: SessionReceiptSumAggregateOutputType | null
    _min: SessionReceiptMinAggregateOutputType | null
    _max: SessionReceiptMaxAggregateOutputType | null
  }

  export type SessionReceiptAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
  }

  export type SessionReceiptSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
  }

  export type SessionReceiptMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    issuedAt: Date | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
  }

  export type SessionReceiptMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    issuedAt: Date | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
  }

  export type SessionReceiptCountAggregateOutputType = {
    id: number
    sessionId: number
    issuedAt: number
    amountOfPaid: number
    discount: number
    totalPrice: number
    _all: number
  }


  export type SessionReceiptAvgAggregateInputType = {
    id?: true
    sessionId?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
  }

  export type SessionReceiptSumAggregateInputType = {
    id?: true
    sessionId?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
  }

  export type SessionReceiptMinAggregateInputType = {
    id?: true
    sessionId?: true
    issuedAt?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
  }

  export type SessionReceiptMaxAggregateInputType = {
    id?: true
    sessionId?: true
    issuedAt?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
  }

  export type SessionReceiptCountAggregateInputType = {
    id?: true
    sessionId?: true
    issuedAt?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
    _all?: true
  }

  export type SessionReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionReceipt to aggregate.
     */
    where?: SessionReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionReceipts to fetch.
     */
    orderBy?: SessionReceiptOrderByWithRelationInput | SessionReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionReceipts
    **/
    _count?: true | SessionReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionReceiptMaxAggregateInputType
  }

  export type GetSessionReceiptAggregateType<T extends SessionReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionReceipt[P]>
      : GetScalarType<T[P], AggregateSessionReceipt[P]>
  }




  export type SessionReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionReceiptWhereInput
    orderBy?: SessionReceiptOrderByWithAggregationInput | SessionReceiptOrderByWithAggregationInput[]
    by: SessionReceiptScalarFieldEnum[] | SessionReceiptScalarFieldEnum
    having?: SessionReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionReceiptCountAggregateInputType | true
    _avg?: SessionReceiptAvgAggregateInputType
    _sum?: SessionReceiptSumAggregateInputType
    _min?: SessionReceiptMinAggregateInputType
    _max?: SessionReceiptMaxAggregateInputType
  }

  export type SessionReceiptGroupByOutputType = {
    id: number
    sessionId: number
    issuedAt: Date
    amountOfPaid: number
    discount: number | null
    totalPrice: number
    _count: SessionReceiptCountAggregateOutputType | null
    _avg: SessionReceiptAvgAggregateOutputType | null
    _sum: SessionReceiptSumAggregateOutputType | null
    _min: SessionReceiptMinAggregateOutputType | null
    _max: SessionReceiptMaxAggregateOutputType | null
  }

  type GetSessionReceiptGroupByPayload<T extends SessionReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], SessionReceiptGroupByOutputType[P]>
        }
      >
    >


  export type SessionReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    issuedAt?: boolean
    amountOfPaid?: boolean
    discount?: boolean
    totalPrice?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionReceipt"]>



  export type SessionReceiptSelectScalar = {
    id?: boolean
    sessionId?: boolean
    issuedAt?: boolean
    amountOfPaid?: boolean
    discount?: boolean
    totalPrice?: boolean
  }

  export type SessionReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "issuedAt" | "amountOfPaid" | "discount" | "totalPrice", ExtArgs["result"]["sessionReceipt"]>
  export type SessionReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $SessionReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionReceipt"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      issuedAt: Date
      amountOfPaid: number
      discount: number | null
      totalPrice: number
    }, ExtArgs["result"]["sessionReceipt"]>
    composites: {}
  }

  type SessionReceiptGetPayload<S extends boolean | null | undefined | SessionReceiptDefaultArgs> = $Result.GetResult<Prisma.$SessionReceiptPayload, S>

  type SessionReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionReceiptCountAggregateInputType | true
    }

  export interface SessionReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionReceipt'], meta: { name: 'SessionReceipt' } }
    /**
     * Find zero or one SessionReceipt that matches the filter.
     * @param {SessionReceiptFindUniqueArgs} args - Arguments to find a SessionReceipt
     * @example
     * // Get one SessionReceipt
     * const sessionReceipt = await prisma.sessionReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionReceiptFindUniqueArgs>(args: SelectSubset<T, SessionReceiptFindUniqueArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionReceiptFindUniqueOrThrowArgs} args - Arguments to find a SessionReceipt
     * @example
     * // Get one SessionReceipt
     * const sessionReceipt = await prisma.sessionReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionReceiptFindFirstArgs} args - Arguments to find a SessionReceipt
     * @example
     * // Get one SessionReceipt
     * const sessionReceipt = await prisma.sessionReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionReceiptFindFirstArgs>(args?: SelectSubset<T, SessionReceiptFindFirstArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionReceiptFindFirstOrThrowArgs} args - Arguments to find a SessionReceipt
     * @example
     * // Get one SessionReceipt
     * const sessionReceipt = await prisma.sessionReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionReceipts
     * const sessionReceipts = await prisma.sessionReceipt.findMany()
     * 
     * // Get first 10 SessionReceipts
     * const sessionReceipts = await prisma.sessionReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionReceiptWithIdOnly = await prisma.sessionReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionReceiptFindManyArgs>(args?: SelectSubset<T, SessionReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionReceipt.
     * @param {SessionReceiptCreateArgs} args - Arguments to create a SessionReceipt.
     * @example
     * // Create one SessionReceipt
     * const SessionReceipt = await prisma.sessionReceipt.create({
     *   data: {
     *     // ... data to create a SessionReceipt
     *   }
     * })
     * 
     */
    create<T extends SessionReceiptCreateArgs>(args: SelectSubset<T, SessionReceiptCreateArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionReceipts.
     * @param {SessionReceiptCreateManyArgs} args - Arguments to create many SessionReceipts.
     * @example
     * // Create many SessionReceipts
     * const sessionReceipt = await prisma.sessionReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionReceiptCreateManyArgs>(args?: SelectSubset<T, SessionReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SessionReceipt.
     * @param {SessionReceiptDeleteArgs} args - Arguments to delete one SessionReceipt.
     * @example
     * // Delete one SessionReceipt
     * const SessionReceipt = await prisma.sessionReceipt.delete({
     *   where: {
     *     // ... filter to delete one SessionReceipt
     *   }
     * })
     * 
     */
    delete<T extends SessionReceiptDeleteArgs>(args: SelectSubset<T, SessionReceiptDeleteArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionReceipt.
     * @param {SessionReceiptUpdateArgs} args - Arguments to update one SessionReceipt.
     * @example
     * // Update one SessionReceipt
     * const sessionReceipt = await prisma.sessionReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionReceiptUpdateArgs>(args: SelectSubset<T, SessionReceiptUpdateArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionReceipts.
     * @param {SessionReceiptDeleteManyArgs} args - Arguments to filter SessionReceipts to delete.
     * @example
     * // Delete a few SessionReceipts
     * const { count } = await prisma.sessionReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionReceiptDeleteManyArgs>(args?: SelectSubset<T, SessionReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionReceipts
     * const sessionReceipt = await prisma.sessionReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionReceiptUpdateManyArgs>(args: SelectSubset<T, SessionReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SessionReceipt.
     * @param {SessionReceiptUpsertArgs} args - Arguments to update or create a SessionReceipt.
     * @example
     * // Update or create a SessionReceipt
     * const sessionReceipt = await prisma.sessionReceipt.upsert({
     *   create: {
     *     // ... data to create a SessionReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionReceipt we want to update
     *   }
     * })
     */
    upsert<T extends SessionReceiptUpsertArgs>(args: SelectSubset<T, SessionReceiptUpsertArgs<ExtArgs>>): Prisma__SessionReceiptClient<$Result.GetResult<Prisma.$SessionReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionReceiptCountArgs} args - Arguments to filter SessionReceipts to count.
     * @example
     * // Count the number of SessionReceipts
     * const count = await prisma.sessionReceipt.count({
     *   where: {
     *     // ... the filter for the SessionReceipts we want to count
     *   }
     * })
    **/
    count<T extends SessionReceiptCountArgs>(
      args?: Subset<T, SessionReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionReceiptAggregateArgs>(args: Subset<T, SessionReceiptAggregateArgs>): Prisma.PrismaPromise<GetSessionReceiptAggregateType<T>>

    /**
     * Group by SessionReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionReceiptGroupByArgs} args - Group by arguments.
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
      T extends SessionReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionReceiptGroupByArgs['orderBy'] }
        : { orderBy?: SessionReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionReceipt model
   */
  readonly fields: SessionReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionReceipt model
   */
  interface SessionReceiptFieldRefs {
    readonly id: FieldRef<"SessionReceipt", 'Int'>
    readonly sessionId: FieldRef<"SessionReceipt", 'Int'>
    readonly issuedAt: FieldRef<"SessionReceipt", 'DateTime'>
    readonly amountOfPaid: FieldRef<"SessionReceipt", 'Float'>
    readonly discount: FieldRef<"SessionReceipt", 'Float'>
    readonly totalPrice: FieldRef<"SessionReceipt", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SessionReceipt findUnique
   */
  export type SessionReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * Filter, which SessionReceipt to fetch.
     */
    where: SessionReceiptWhereUniqueInput
  }

  /**
   * SessionReceipt findUniqueOrThrow
   */
  export type SessionReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * Filter, which SessionReceipt to fetch.
     */
    where: SessionReceiptWhereUniqueInput
  }

  /**
   * SessionReceipt findFirst
   */
  export type SessionReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * Filter, which SessionReceipt to fetch.
     */
    where?: SessionReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionReceipts to fetch.
     */
    orderBy?: SessionReceiptOrderByWithRelationInput | SessionReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionReceipts.
     */
    cursor?: SessionReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionReceipts.
     */
    distinct?: SessionReceiptScalarFieldEnum | SessionReceiptScalarFieldEnum[]
  }

  /**
   * SessionReceipt findFirstOrThrow
   */
  export type SessionReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * Filter, which SessionReceipt to fetch.
     */
    where?: SessionReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionReceipts to fetch.
     */
    orderBy?: SessionReceiptOrderByWithRelationInput | SessionReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionReceipts.
     */
    cursor?: SessionReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionReceipts.
     */
    distinct?: SessionReceiptScalarFieldEnum | SessionReceiptScalarFieldEnum[]
  }

  /**
   * SessionReceipt findMany
   */
  export type SessionReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * Filter, which SessionReceipts to fetch.
     */
    where?: SessionReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionReceipts to fetch.
     */
    orderBy?: SessionReceiptOrderByWithRelationInput | SessionReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionReceipts.
     */
    cursor?: SessionReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionReceipts.
     */
    skip?: number
    distinct?: SessionReceiptScalarFieldEnum | SessionReceiptScalarFieldEnum[]
  }

  /**
   * SessionReceipt create
   */
  export type SessionReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionReceipt.
     */
    data: XOR<SessionReceiptCreateInput, SessionReceiptUncheckedCreateInput>
  }

  /**
   * SessionReceipt createMany
   */
  export type SessionReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionReceipts.
     */
    data: SessionReceiptCreateManyInput | SessionReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionReceipt update
   */
  export type SessionReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionReceipt.
     */
    data: XOR<SessionReceiptUpdateInput, SessionReceiptUncheckedUpdateInput>
    /**
     * Choose, which SessionReceipt to update.
     */
    where: SessionReceiptWhereUniqueInput
  }

  /**
   * SessionReceipt updateMany
   */
  export type SessionReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionReceipts.
     */
    data: XOR<SessionReceiptUpdateManyMutationInput, SessionReceiptUncheckedUpdateManyInput>
    /**
     * Filter which SessionReceipts to update
     */
    where?: SessionReceiptWhereInput
    /**
     * Limit how many SessionReceipts to update.
     */
    limit?: number
  }

  /**
   * SessionReceipt upsert
   */
  export type SessionReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionReceipt to update in case it exists.
     */
    where: SessionReceiptWhereUniqueInput
    /**
     * In case the SessionReceipt found by the `where` argument doesn't exist, create a new SessionReceipt with this data.
     */
    create: XOR<SessionReceiptCreateInput, SessionReceiptUncheckedCreateInput>
    /**
     * In case the SessionReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionReceiptUpdateInput, SessionReceiptUncheckedUpdateInput>
  }

  /**
   * SessionReceipt delete
   */
  export type SessionReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
    /**
     * Filter which SessionReceipt to delete.
     */
    where: SessionReceiptWhereUniqueInput
  }

  /**
   * SessionReceipt deleteMany
   */
  export type SessionReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionReceipts to delete
     */
    where?: SessionReceiptWhereInput
    /**
     * Limit how many SessionReceipts to delete.
     */
    limit?: number
  }

  /**
   * SessionReceipt without action
   */
  export type SessionReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionReceipt
     */
    select?: SessionReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionReceipt
     */
    omit?: SessionReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionReceiptInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type GuestSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type GuestMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    nicCardNumber: string | null
    sessionId: number | null
  }

  export type GuestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    nicCardNumber: string | null
    sessionId: number | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    address: number
    nicCardNumber: number
    sessionId: number
    _all: number
  }


  export type GuestAvgAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type GuestSumAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type GuestMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    nicCardNumber?: true
    sessionId?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    nicCardNumber?: true
    sessionId?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    nicCardNumber?: true
    sessionId?: true
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
     * Select which fields to average
    **/
    _avg?: GuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestSumAggregateInputType
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
    _avg?: GuestAvgAggregateInputType
    _sum?: GuestSumAggregateInputType
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string | null
    address: string | null
    nicCardNumber: string | null
    sessionId: number | null
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    nicCardNumber?: boolean
    sessionId?: boolean
    session?: boolean | Guest$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>



  export type GuestSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    nicCardNumber?: boolean
    sessionId?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "address" | "nicCardNumber" | "sessionId", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | Guest$sessionArgs<ExtArgs>
  }

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string | null
      address: string | null
      nicCardNumber: string | null
      sessionId: number | null
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
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
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
    session<T extends Guest$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Guest$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Guest", 'Int'>
    readonly name: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly address: FieldRef<"Guest", 'String'>
    readonly nicCardNumber: FieldRef<"Guest", 'String'>
    readonly sessionId: FieldRef<"Guest", 'Int'>
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
   * Guest.session
   */
  export type Guest$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model OtherReceipt
   */

  export type AggregateOtherReceipt = {
    _count: OtherReceiptCountAggregateOutputType | null
    _avg: OtherReceiptAvgAggregateOutputType | null
    _sum: OtherReceiptSumAggregateOutputType | null
    _min: OtherReceiptMinAggregateOutputType | null
    _max: OtherReceiptMaxAggregateOutputType | null
  }

  export type OtherReceiptAvgAggregateOutputType = {
    id: number | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
    sessionId: number | null
  }

  export type OtherReceiptSumAggregateOutputType = {
    id: number | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
    sessionId: number | null
  }

  export type OtherReceiptMinAggregateOutputType = {
    id: number | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
    sessionId: number | null
  }

  export type OtherReceiptMaxAggregateOutputType = {
    id: number | null
    amountOfPaid: number | null
    discount: number | null
    totalPrice: number | null
    sessionId: number | null
  }

  export type OtherReceiptCountAggregateOutputType = {
    id: number
    amountOfPaid: number
    discount: number
    totalPrice: number
    sessionId: number
    _all: number
  }


  export type OtherReceiptAvgAggregateInputType = {
    id?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
    sessionId?: true
  }

  export type OtherReceiptSumAggregateInputType = {
    id?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
    sessionId?: true
  }

  export type OtherReceiptMinAggregateInputType = {
    id?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
    sessionId?: true
  }

  export type OtherReceiptMaxAggregateInputType = {
    id?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
    sessionId?: true
  }

  export type OtherReceiptCountAggregateInputType = {
    id?: true
    amountOfPaid?: true
    discount?: true
    totalPrice?: true
    sessionId?: true
    _all?: true
  }

  export type OtherReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherReceipt to aggregate.
     */
    where?: OtherReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceipts to fetch.
     */
    orderBy?: OtherReceiptOrderByWithRelationInput | OtherReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherReceipts
    **/
    _count?: true | OtherReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherReceiptMaxAggregateInputType
  }

  export type GetOtherReceiptAggregateType<T extends OtherReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherReceipt[P]>
      : GetScalarType<T[P], AggregateOtherReceipt[P]>
  }




  export type OtherReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptWhereInput
    orderBy?: OtherReceiptOrderByWithAggregationInput | OtherReceiptOrderByWithAggregationInput[]
    by: OtherReceiptScalarFieldEnum[] | OtherReceiptScalarFieldEnum
    having?: OtherReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherReceiptCountAggregateInputType | true
    _avg?: OtherReceiptAvgAggregateInputType
    _sum?: OtherReceiptSumAggregateInputType
    _min?: OtherReceiptMinAggregateInputType
    _max?: OtherReceiptMaxAggregateInputType
  }

  export type OtherReceiptGroupByOutputType = {
    id: number
    amountOfPaid: number
    discount: number | null
    totalPrice: number
    sessionId: number
    _count: OtherReceiptCountAggregateOutputType | null
    _avg: OtherReceiptAvgAggregateOutputType | null
    _sum: OtherReceiptSumAggregateOutputType | null
    _min: OtherReceiptMinAggregateOutputType | null
    _max: OtherReceiptMaxAggregateOutputType | null
  }

  type GetOtherReceiptGroupByPayload<T extends OtherReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], OtherReceiptGroupByOutputType[P]>
        }
      >
    >


  export type OtherReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountOfPaid?: boolean
    discount?: boolean
    totalPrice?: boolean
    sessionId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    items?: boolean | OtherReceipt$itemsArgs<ExtArgs>
    services?: boolean | OtherReceipt$servicesArgs<ExtArgs>
    _count?: boolean | OtherReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherReceipt"]>



  export type OtherReceiptSelectScalar = {
    id?: boolean
    amountOfPaid?: boolean
    discount?: boolean
    totalPrice?: boolean
    sessionId?: boolean
  }

  export type OtherReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amountOfPaid" | "discount" | "totalPrice" | "sessionId", ExtArgs["result"]["otherReceipt"]>
  export type OtherReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    items?: boolean | OtherReceipt$itemsArgs<ExtArgs>
    services?: boolean | OtherReceipt$servicesArgs<ExtArgs>
    _count?: boolean | OtherReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OtherReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherReceipt"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      items: Prisma.$OtherReceiptItemPayload<ExtArgs>[]
      services: Prisma.$OtherReceiptServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amountOfPaid: number
      discount: number | null
      totalPrice: number
      sessionId: number
    }, ExtArgs["result"]["otherReceipt"]>
    composites: {}
  }

  type OtherReceiptGetPayload<S extends boolean | null | undefined | OtherReceiptDefaultArgs> = $Result.GetResult<Prisma.$OtherReceiptPayload, S>

  type OtherReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherReceiptCountAggregateInputType | true
    }

  export interface OtherReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherReceipt'], meta: { name: 'OtherReceipt' } }
    /**
     * Find zero or one OtherReceipt that matches the filter.
     * @param {OtherReceiptFindUniqueArgs} args - Arguments to find a OtherReceipt
     * @example
     * // Get one OtherReceipt
     * const otherReceipt = await prisma.otherReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherReceiptFindUniqueArgs>(args: SelectSubset<T, OtherReceiptFindUniqueArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherReceiptFindUniqueOrThrowArgs} args - Arguments to find a OtherReceipt
     * @example
     * // Get one OtherReceipt
     * const otherReceipt = await prisma.otherReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptFindFirstArgs} args - Arguments to find a OtherReceipt
     * @example
     * // Get one OtherReceipt
     * const otherReceipt = await prisma.otherReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherReceiptFindFirstArgs>(args?: SelectSubset<T, OtherReceiptFindFirstArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptFindFirstOrThrowArgs} args - Arguments to find a OtherReceipt
     * @example
     * // Get one OtherReceipt
     * const otherReceipt = await prisma.otherReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherReceipts
     * const otherReceipts = await prisma.otherReceipt.findMany()
     * 
     * // Get first 10 OtherReceipts
     * const otherReceipts = await prisma.otherReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otherReceiptWithIdOnly = await prisma.otherReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtherReceiptFindManyArgs>(args?: SelectSubset<T, OtherReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherReceipt.
     * @param {OtherReceiptCreateArgs} args - Arguments to create a OtherReceipt.
     * @example
     * // Create one OtherReceipt
     * const OtherReceipt = await prisma.otherReceipt.create({
     *   data: {
     *     // ... data to create a OtherReceipt
     *   }
     * })
     * 
     */
    create<T extends OtherReceiptCreateArgs>(args: SelectSubset<T, OtherReceiptCreateArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherReceipts.
     * @param {OtherReceiptCreateManyArgs} args - Arguments to create many OtherReceipts.
     * @example
     * // Create many OtherReceipts
     * const otherReceipt = await prisma.otherReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherReceiptCreateManyArgs>(args?: SelectSubset<T, OtherReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OtherReceipt.
     * @param {OtherReceiptDeleteArgs} args - Arguments to delete one OtherReceipt.
     * @example
     * // Delete one OtherReceipt
     * const OtherReceipt = await prisma.otherReceipt.delete({
     *   where: {
     *     // ... filter to delete one OtherReceipt
     *   }
     * })
     * 
     */
    delete<T extends OtherReceiptDeleteArgs>(args: SelectSubset<T, OtherReceiptDeleteArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherReceipt.
     * @param {OtherReceiptUpdateArgs} args - Arguments to update one OtherReceipt.
     * @example
     * // Update one OtherReceipt
     * const otherReceipt = await prisma.otherReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherReceiptUpdateArgs>(args: SelectSubset<T, OtherReceiptUpdateArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherReceipts.
     * @param {OtherReceiptDeleteManyArgs} args - Arguments to filter OtherReceipts to delete.
     * @example
     * // Delete a few OtherReceipts
     * const { count } = await prisma.otherReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherReceiptDeleteManyArgs>(args?: SelectSubset<T, OtherReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherReceipts
     * const otherReceipt = await prisma.otherReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherReceiptUpdateManyArgs>(args: SelectSubset<T, OtherReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtherReceipt.
     * @param {OtherReceiptUpsertArgs} args - Arguments to update or create a OtherReceipt.
     * @example
     * // Update or create a OtherReceipt
     * const otherReceipt = await prisma.otherReceipt.upsert({
     *   create: {
     *     // ... data to create a OtherReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherReceipt we want to update
     *   }
     * })
     */
    upsert<T extends OtherReceiptUpsertArgs>(args: SelectSubset<T, OtherReceiptUpsertArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptCountArgs} args - Arguments to filter OtherReceipts to count.
     * @example
     * // Count the number of OtherReceipts
     * const count = await prisma.otherReceipt.count({
     *   where: {
     *     // ... the filter for the OtherReceipts we want to count
     *   }
     * })
    **/
    count<T extends OtherReceiptCountArgs>(
      args?: Subset<T, OtherReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherReceiptAggregateArgs>(args: Subset<T, OtherReceiptAggregateArgs>): Prisma.PrismaPromise<GetOtherReceiptAggregateType<T>>

    /**
     * Group by OtherReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptGroupByArgs} args - Group by arguments.
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
      T extends OtherReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherReceiptGroupByArgs['orderBy'] }
        : { orderBy?: OtherReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtherReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherReceipt model
   */
  readonly fields: OtherReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends OtherReceipt$itemsArgs<ExtArgs> = {}>(args?: Subset<T, OtherReceipt$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends OtherReceipt$servicesArgs<ExtArgs> = {}>(args?: Subset<T, OtherReceipt$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OtherReceipt model
   */
  interface OtherReceiptFieldRefs {
    readonly id: FieldRef<"OtherReceipt", 'Int'>
    readonly amountOfPaid: FieldRef<"OtherReceipt", 'Float'>
    readonly discount: FieldRef<"OtherReceipt", 'Float'>
    readonly totalPrice: FieldRef<"OtherReceipt", 'Float'>
    readonly sessionId: FieldRef<"OtherReceipt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OtherReceipt findUnique
   */
  export type OtherReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceipt to fetch.
     */
    where: OtherReceiptWhereUniqueInput
  }

  /**
   * OtherReceipt findUniqueOrThrow
   */
  export type OtherReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceipt to fetch.
     */
    where: OtherReceiptWhereUniqueInput
  }

  /**
   * OtherReceipt findFirst
   */
  export type OtherReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceipt to fetch.
     */
    where?: OtherReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceipts to fetch.
     */
    orderBy?: OtherReceiptOrderByWithRelationInput | OtherReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherReceipts.
     */
    cursor?: OtherReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherReceipts.
     */
    distinct?: OtherReceiptScalarFieldEnum | OtherReceiptScalarFieldEnum[]
  }

  /**
   * OtherReceipt findFirstOrThrow
   */
  export type OtherReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceipt to fetch.
     */
    where?: OtherReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceipts to fetch.
     */
    orderBy?: OtherReceiptOrderByWithRelationInput | OtherReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherReceipts.
     */
    cursor?: OtherReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherReceipts.
     */
    distinct?: OtherReceiptScalarFieldEnum | OtherReceiptScalarFieldEnum[]
  }

  /**
   * OtherReceipt findMany
   */
  export type OtherReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceipts to fetch.
     */
    where?: OtherReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceipts to fetch.
     */
    orderBy?: OtherReceiptOrderByWithRelationInput | OtherReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherReceipts.
     */
    cursor?: OtherReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceipts.
     */
    skip?: number
    distinct?: OtherReceiptScalarFieldEnum | OtherReceiptScalarFieldEnum[]
  }

  /**
   * OtherReceipt create
   */
  export type OtherReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a OtherReceipt.
     */
    data: XOR<OtherReceiptCreateInput, OtherReceiptUncheckedCreateInput>
  }

  /**
   * OtherReceipt createMany
   */
  export type OtherReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherReceipts.
     */
    data: OtherReceiptCreateManyInput | OtherReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtherReceipt update
   */
  export type OtherReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a OtherReceipt.
     */
    data: XOR<OtherReceiptUpdateInput, OtherReceiptUncheckedUpdateInput>
    /**
     * Choose, which OtherReceipt to update.
     */
    where: OtherReceiptWhereUniqueInput
  }

  /**
   * OtherReceipt updateMany
   */
  export type OtherReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherReceipts.
     */
    data: XOR<OtherReceiptUpdateManyMutationInput, OtherReceiptUncheckedUpdateManyInput>
    /**
     * Filter which OtherReceipts to update
     */
    where?: OtherReceiptWhereInput
    /**
     * Limit how many OtherReceipts to update.
     */
    limit?: number
  }

  /**
   * OtherReceipt upsert
   */
  export type OtherReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the OtherReceipt to update in case it exists.
     */
    where: OtherReceiptWhereUniqueInput
    /**
     * In case the OtherReceipt found by the `where` argument doesn't exist, create a new OtherReceipt with this data.
     */
    create: XOR<OtherReceiptCreateInput, OtherReceiptUncheckedCreateInput>
    /**
     * In case the OtherReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherReceiptUpdateInput, OtherReceiptUncheckedUpdateInput>
  }

  /**
   * OtherReceipt delete
   */
  export type OtherReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
    /**
     * Filter which OtherReceipt to delete.
     */
    where: OtherReceiptWhereUniqueInput
  }

  /**
   * OtherReceipt deleteMany
   */
  export type OtherReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherReceipts to delete
     */
    where?: OtherReceiptWhereInput
    /**
     * Limit how many OtherReceipts to delete.
     */
    limit?: number
  }

  /**
   * OtherReceipt.items
   */
  export type OtherReceipt$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    where?: OtherReceiptItemWhereInput
    orderBy?: OtherReceiptItemOrderByWithRelationInput | OtherReceiptItemOrderByWithRelationInput[]
    cursor?: OtherReceiptItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherReceiptItemScalarFieldEnum | OtherReceiptItemScalarFieldEnum[]
  }

  /**
   * OtherReceipt.services
   */
  export type OtherReceipt$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    where?: OtherReceiptServiceWhereInput
    orderBy?: OtherReceiptServiceOrderByWithRelationInput | OtherReceiptServiceOrderByWithRelationInput[]
    cursor?: OtherReceiptServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherReceiptServiceScalarFieldEnum | OtherReceiptServiceScalarFieldEnum[]
  }

  /**
   * OtherReceipt without action
   */
  export type OtherReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceipt
     */
    select?: OtherReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceipt
     */
    omit?: OtherReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptInclude<ExtArgs> | null
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
    quantity: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    quantity: number | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    quantity: number | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    price: number
    quantity: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    quantity?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    quantity?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    quantity?: true
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
    quantity: number
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
    quantity?: boolean
    roomItems?: boolean | Item$roomItemsArgs<ExtArgs>
    otherReceiptItems?: boolean | Item$otherReceiptItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "quantity", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomItems?: boolean | Item$roomItemsArgs<ExtArgs>
    otherReceiptItems?: boolean | Item$otherReceiptItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      roomItems: Prisma.$RoomItemPayload<ExtArgs>[]
      otherReceiptItems: Prisma.$OtherReceiptItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      quantity: number
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
    roomItems<T extends Item$roomItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$roomItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otherReceiptItems<T extends Item$otherReceiptItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$otherReceiptItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly quantity: FieldRef<"Item", 'Int'>
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
   * Item.roomItems
   */
  export type Item$roomItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    where?: RoomItemWhereInput
    orderBy?: RoomItemOrderByWithRelationInput | RoomItemOrderByWithRelationInput[]
    cursor?: RoomItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomItemScalarFieldEnum | RoomItemScalarFieldEnum[]
  }

  /**
   * Item.otherReceiptItems
   */
  export type Item$otherReceiptItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    where?: OtherReceiptItemWhereInput
    orderBy?: OtherReceiptItemOrderByWithRelationInput | OtherReceiptItemOrderByWithRelationInput[]
    cursor?: OtherReceiptItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherReceiptItemScalarFieldEnum | OtherReceiptItemScalarFieldEnum[]
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
   * Model RoomItem
   */

  export type AggregateRoomItem = {
    _count: RoomItemCountAggregateOutputType | null
    _avg: RoomItemAvgAggregateOutputType | null
    _sum: RoomItemSumAggregateOutputType | null
    _min: RoomItemMinAggregateOutputType | null
    _max: RoomItemMaxAggregateOutputType | null
  }

  export type RoomItemAvgAggregateOutputType = {
    itemId: number | null
    quantity: number | null
  }

  export type RoomItemSumAggregateOutputType = {
    itemId: number | null
    quantity: number | null
  }

  export type RoomItemMinAggregateOutputType = {
    roomNumber: string | null
    itemId: number | null
    quantity: number | null
  }

  export type RoomItemMaxAggregateOutputType = {
    roomNumber: string | null
    itemId: number | null
    quantity: number | null
  }

  export type RoomItemCountAggregateOutputType = {
    roomNumber: number
    itemId: number
    quantity: number
    _all: number
  }


  export type RoomItemAvgAggregateInputType = {
    itemId?: true
    quantity?: true
  }

  export type RoomItemSumAggregateInputType = {
    itemId?: true
    quantity?: true
  }

  export type RoomItemMinAggregateInputType = {
    roomNumber?: true
    itemId?: true
    quantity?: true
  }

  export type RoomItemMaxAggregateInputType = {
    roomNumber?: true
    itemId?: true
    quantity?: true
  }

  export type RoomItemCountAggregateInputType = {
    roomNumber?: true
    itemId?: true
    quantity?: true
    _all?: true
  }

  export type RoomItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomItem to aggregate.
     */
    where?: RoomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomItems to fetch.
     */
    orderBy?: RoomItemOrderByWithRelationInput | RoomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomItems
    **/
    _count?: true | RoomItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomItemMaxAggregateInputType
  }

  export type GetRoomItemAggregateType<T extends RoomItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomItem[P]>
      : GetScalarType<T[P], AggregateRoomItem[P]>
  }




  export type RoomItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomItemWhereInput
    orderBy?: RoomItemOrderByWithAggregationInput | RoomItemOrderByWithAggregationInput[]
    by: RoomItemScalarFieldEnum[] | RoomItemScalarFieldEnum
    having?: RoomItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomItemCountAggregateInputType | true
    _avg?: RoomItemAvgAggregateInputType
    _sum?: RoomItemSumAggregateInputType
    _min?: RoomItemMinAggregateInputType
    _max?: RoomItemMaxAggregateInputType
  }

  export type RoomItemGroupByOutputType = {
    roomNumber: string
    itemId: number
    quantity: number
    _count: RoomItemCountAggregateOutputType | null
    _avg: RoomItemAvgAggregateOutputType | null
    _sum: RoomItemSumAggregateOutputType | null
    _min: RoomItemMinAggregateOutputType | null
    _max: RoomItemMaxAggregateOutputType | null
  }

  type GetRoomItemGroupByPayload<T extends RoomItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomItemGroupByOutputType[P]>
            : GetScalarType<T[P], RoomItemGroupByOutputType[P]>
        }
      >
    >


  export type RoomItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomNumber?: boolean
    itemId?: boolean
    quantity?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomItem"]>



  export type RoomItemSelectScalar = {
    roomNumber?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type RoomItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roomNumber" | "itemId" | "quantity", ExtArgs["result"]["roomItem"]>
  export type RoomItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $RoomItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomItem"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roomNumber: string
      itemId: number
      quantity: number
    }, ExtArgs["result"]["roomItem"]>
    composites: {}
  }

  type RoomItemGetPayload<S extends boolean | null | undefined | RoomItemDefaultArgs> = $Result.GetResult<Prisma.$RoomItemPayload, S>

  type RoomItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomItemCountAggregateInputType | true
    }

  export interface RoomItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomItem'], meta: { name: 'RoomItem' } }
    /**
     * Find zero or one RoomItem that matches the filter.
     * @param {RoomItemFindUniqueArgs} args - Arguments to find a RoomItem
     * @example
     * // Get one RoomItem
     * const roomItem = await prisma.roomItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomItemFindUniqueArgs>(args: SelectSubset<T, RoomItemFindUniqueArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomItemFindUniqueOrThrowArgs} args - Arguments to find a RoomItem
     * @example
     * // Get one RoomItem
     * const roomItem = await prisma.roomItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomItemFindFirstArgs} args - Arguments to find a RoomItem
     * @example
     * // Get one RoomItem
     * const roomItem = await prisma.roomItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomItemFindFirstArgs>(args?: SelectSubset<T, RoomItemFindFirstArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomItemFindFirstOrThrowArgs} args - Arguments to find a RoomItem
     * @example
     * // Get one RoomItem
     * const roomItem = await prisma.roomItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomItems
     * const roomItems = await prisma.roomItem.findMany()
     * 
     * // Get first 10 RoomItems
     * const roomItems = await prisma.roomItem.findMany({ take: 10 })
     * 
     * // Only select the `roomNumber`
     * const roomItemWithRoomNumberOnly = await prisma.roomItem.findMany({ select: { roomNumber: true } })
     * 
     */
    findMany<T extends RoomItemFindManyArgs>(args?: SelectSubset<T, RoomItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomItem.
     * @param {RoomItemCreateArgs} args - Arguments to create a RoomItem.
     * @example
     * // Create one RoomItem
     * const RoomItem = await prisma.roomItem.create({
     *   data: {
     *     // ... data to create a RoomItem
     *   }
     * })
     * 
     */
    create<T extends RoomItemCreateArgs>(args: SelectSubset<T, RoomItemCreateArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomItems.
     * @param {RoomItemCreateManyArgs} args - Arguments to create many RoomItems.
     * @example
     * // Create many RoomItems
     * const roomItem = await prisma.roomItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomItemCreateManyArgs>(args?: SelectSubset<T, RoomItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomItem.
     * @param {RoomItemDeleteArgs} args - Arguments to delete one RoomItem.
     * @example
     * // Delete one RoomItem
     * const RoomItem = await prisma.roomItem.delete({
     *   where: {
     *     // ... filter to delete one RoomItem
     *   }
     * })
     * 
     */
    delete<T extends RoomItemDeleteArgs>(args: SelectSubset<T, RoomItemDeleteArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomItem.
     * @param {RoomItemUpdateArgs} args - Arguments to update one RoomItem.
     * @example
     * // Update one RoomItem
     * const roomItem = await prisma.roomItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomItemUpdateArgs>(args: SelectSubset<T, RoomItemUpdateArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomItems.
     * @param {RoomItemDeleteManyArgs} args - Arguments to filter RoomItems to delete.
     * @example
     * // Delete a few RoomItems
     * const { count } = await prisma.roomItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomItemDeleteManyArgs>(args?: SelectSubset<T, RoomItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomItems
     * const roomItem = await prisma.roomItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomItemUpdateManyArgs>(args: SelectSubset<T, RoomItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomItem.
     * @param {RoomItemUpsertArgs} args - Arguments to update or create a RoomItem.
     * @example
     * // Update or create a RoomItem
     * const roomItem = await prisma.roomItem.upsert({
     *   create: {
     *     // ... data to create a RoomItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomItem we want to update
     *   }
     * })
     */
    upsert<T extends RoomItemUpsertArgs>(args: SelectSubset<T, RoomItemUpsertArgs<ExtArgs>>): Prisma__RoomItemClient<$Result.GetResult<Prisma.$RoomItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomItemCountArgs} args - Arguments to filter RoomItems to count.
     * @example
     * // Count the number of RoomItems
     * const count = await prisma.roomItem.count({
     *   where: {
     *     // ... the filter for the RoomItems we want to count
     *   }
     * })
    **/
    count<T extends RoomItemCountArgs>(
      args?: Subset<T, RoomItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomItemAggregateArgs>(args: Subset<T, RoomItemAggregateArgs>): Prisma.PrismaPromise<GetRoomItemAggregateType<T>>

    /**
     * Group by RoomItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomItemGroupByArgs} args - Group by arguments.
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
      T extends RoomItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomItemGroupByArgs['orderBy'] }
        : { orderBy?: RoomItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomItem model
   */
  readonly fields: RoomItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomItem model
   */
  interface RoomItemFieldRefs {
    readonly roomNumber: FieldRef<"RoomItem", 'String'>
    readonly itemId: FieldRef<"RoomItem", 'Int'>
    readonly quantity: FieldRef<"RoomItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoomItem findUnique
   */
  export type RoomItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * Filter, which RoomItem to fetch.
     */
    where: RoomItemWhereUniqueInput
  }

  /**
   * RoomItem findUniqueOrThrow
   */
  export type RoomItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * Filter, which RoomItem to fetch.
     */
    where: RoomItemWhereUniqueInput
  }

  /**
   * RoomItem findFirst
   */
  export type RoomItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * Filter, which RoomItem to fetch.
     */
    where?: RoomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomItems to fetch.
     */
    orderBy?: RoomItemOrderByWithRelationInput | RoomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomItems.
     */
    cursor?: RoomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomItems.
     */
    distinct?: RoomItemScalarFieldEnum | RoomItemScalarFieldEnum[]
  }

  /**
   * RoomItem findFirstOrThrow
   */
  export type RoomItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * Filter, which RoomItem to fetch.
     */
    where?: RoomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomItems to fetch.
     */
    orderBy?: RoomItemOrderByWithRelationInput | RoomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomItems.
     */
    cursor?: RoomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomItems.
     */
    distinct?: RoomItemScalarFieldEnum | RoomItemScalarFieldEnum[]
  }

  /**
   * RoomItem findMany
   */
  export type RoomItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * Filter, which RoomItems to fetch.
     */
    where?: RoomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomItems to fetch.
     */
    orderBy?: RoomItemOrderByWithRelationInput | RoomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomItems.
     */
    cursor?: RoomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomItems.
     */
    skip?: number
    distinct?: RoomItemScalarFieldEnum | RoomItemScalarFieldEnum[]
  }

  /**
   * RoomItem create
   */
  export type RoomItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomItem.
     */
    data: XOR<RoomItemCreateInput, RoomItemUncheckedCreateInput>
  }

  /**
   * RoomItem createMany
   */
  export type RoomItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomItems.
     */
    data: RoomItemCreateManyInput | RoomItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomItem update
   */
  export type RoomItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomItem.
     */
    data: XOR<RoomItemUpdateInput, RoomItemUncheckedUpdateInput>
    /**
     * Choose, which RoomItem to update.
     */
    where: RoomItemWhereUniqueInput
  }

  /**
   * RoomItem updateMany
   */
  export type RoomItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomItems.
     */
    data: XOR<RoomItemUpdateManyMutationInput, RoomItemUncheckedUpdateManyInput>
    /**
     * Filter which RoomItems to update
     */
    where?: RoomItemWhereInput
    /**
     * Limit how many RoomItems to update.
     */
    limit?: number
  }

  /**
   * RoomItem upsert
   */
  export type RoomItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomItem to update in case it exists.
     */
    where: RoomItemWhereUniqueInput
    /**
     * In case the RoomItem found by the `where` argument doesn't exist, create a new RoomItem with this data.
     */
    create: XOR<RoomItemCreateInput, RoomItemUncheckedCreateInput>
    /**
     * In case the RoomItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomItemUpdateInput, RoomItemUncheckedUpdateInput>
  }

  /**
   * RoomItem delete
   */
  export type RoomItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
    /**
     * Filter which RoomItem to delete.
     */
    where: RoomItemWhereUniqueInput
  }

  /**
   * RoomItem deleteMany
   */
  export type RoomItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomItems to delete
     */
    where?: RoomItemWhereInput
    /**
     * Limit how many RoomItems to delete.
     */
    limit?: number
  }

  /**
   * RoomItem without action
   */
  export type RoomItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomItem
     */
    select?: RoomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomItem
     */
    omit?: RoomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomItemInclude<ExtArgs> | null
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
    otherReceiptServices?: boolean | Service$otherReceiptServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherReceiptServices?: boolean | Service$otherReceiptServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      otherReceiptServices: Prisma.$OtherReceiptServicePayload<ExtArgs>[]
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
    otherReceiptServices<T extends Service$otherReceiptServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$otherReceiptServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Service.otherReceiptServices
   */
  export type Service$otherReceiptServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    where?: OtherReceiptServiceWhereInput
    orderBy?: OtherReceiptServiceOrderByWithRelationInput | OtherReceiptServiceOrderByWithRelationInput[]
    cursor?: OtherReceiptServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherReceiptServiceScalarFieldEnum | OtherReceiptServiceScalarFieldEnum[]
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
   * Model OtherReceiptService
   */

  export type AggregateOtherReceiptService = {
    _count: OtherReceiptServiceCountAggregateOutputType | null
    _avg: OtherReceiptServiceAvgAggregateOutputType | null
    _sum: OtherReceiptServiceSumAggregateOutputType | null
    _min: OtherReceiptServiceMinAggregateOutputType | null
    _max: OtherReceiptServiceMaxAggregateOutputType | null
  }

  export type OtherReceiptServiceAvgAggregateOutputType = {
    otherReceiptId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type OtherReceiptServiceSumAggregateOutputType = {
    otherReceiptId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type OtherReceiptServiceMinAggregateOutputType = {
    otherReceiptId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type OtherReceiptServiceMaxAggregateOutputType = {
    otherReceiptId: number | null
    serviceId: number | null
    quantity: number | null
  }

  export type OtherReceiptServiceCountAggregateOutputType = {
    otherReceiptId: number
    serviceId: number
    quantity: number
    _all: number
  }


  export type OtherReceiptServiceAvgAggregateInputType = {
    otherReceiptId?: true
    serviceId?: true
    quantity?: true
  }

  export type OtherReceiptServiceSumAggregateInputType = {
    otherReceiptId?: true
    serviceId?: true
    quantity?: true
  }

  export type OtherReceiptServiceMinAggregateInputType = {
    otherReceiptId?: true
    serviceId?: true
    quantity?: true
  }

  export type OtherReceiptServiceMaxAggregateInputType = {
    otherReceiptId?: true
    serviceId?: true
    quantity?: true
  }

  export type OtherReceiptServiceCountAggregateInputType = {
    otherReceiptId?: true
    serviceId?: true
    quantity?: true
    _all?: true
  }

  export type OtherReceiptServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherReceiptService to aggregate.
     */
    where?: OtherReceiptServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptServices to fetch.
     */
    orderBy?: OtherReceiptServiceOrderByWithRelationInput | OtherReceiptServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherReceiptServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherReceiptServices
    **/
    _count?: true | OtherReceiptServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherReceiptServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherReceiptServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherReceiptServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherReceiptServiceMaxAggregateInputType
  }

  export type GetOtherReceiptServiceAggregateType<T extends OtherReceiptServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherReceiptService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherReceiptService[P]>
      : GetScalarType<T[P], AggregateOtherReceiptService[P]>
  }




  export type OtherReceiptServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptServiceWhereInput
    orderBy?: OtherReceiptServiceOrderByWithAggregationInput | OtherReceiptServiceOrderByWithAggregationInput[]
    by: OtherReceiptServiceScalarFieldEnum[] | OtherReceiptServiceScalarFieldEnum
    having?: OtherReceiptServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherReceiptServiceCountAggregateInputType | true
    _avg?: OtherReceiptServiceAvgAggregateInputType
    _sum?: OtherReceiptServiceSumAggregateInputType
    _min?: OtherReceiptServiceMinAggregateInputType
    _max?: OtherReceiptServiceMaxAggregateInputType
  }

  export type OtherReceiptServiceGroupByOutputType = {
    otherReceiptId: number
    serviceId: number
    quantity: number
    _count: OtherReceiptServiceCountAggregateOutputType | null
    _avg: OtherReceiptServiceAvgAggregateOutputType | null
    _sum: OtherReceiptServiceSumAggregateOutputType | null
    _min: OtherReceiptServiceMinAggregateOutputType | null
    _max: OtherReceiptServiceMaxAggregateOutputType | null
  }

  type GetOtherReceiptServiceGroupByPayload<T extends OtherReceiptServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherReceiptServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherReceiptServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherReceiptServiceGroupByOutputType[P]>
            : GetScalarType<T[P], OtherReceiptServiceGroupByOutputType[P]>
        }
      >
    >


  export type OtherReceiptServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otherReceiptId?: boolean
    serviceId?: boolean
    quantity?: boolean
    otherReceipt?: boolean | OtherReceiptDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherReceiptService"]>



  export type OtherReceiptServiceSelectScalar = {
    otherReceiptId?: boolean
    serviceId?: boolean
    quantity?: boolean
  }

  export type OtherReceiptServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"otherReceiptId" | "serviceId" | "quantity", ExtArgs["result"]["otherReceiptService"]>
  export type OtherReceiptServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherReceipt?: boolean | OtherReceiptDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $OtherReceiptServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherReceiptService"
    objects: {
      otherReceipt: Prisma.$OtherReceiptPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      otherReceiptId: number
      serviceId: number
      quantity: number
    }, ExtArgs["result"]["otherReceiptService"]>
    composites: {}
  }

  type OtherReceiptServiceGetPayload<S extends boolean | null | undefined | OtherReceiptServiceDefaultArgs> = $Result.GetResult<Prisma.$OtherReceiptServicePayload, S>

  type OtherReceiptServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherReceiptServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherReceiptServiceCountAggregateInputType | true
    }

  export interface OtherReceiptServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherReceiptService'], meta: { name: 'OtherReceiptService' } }
    /**
     * Find zero or one OtherReceiptService that matches the filter.
     * @param {OtherReceiptServiceFindUniqueArgs} args - Arguments to find a OtherReceiptService
     * @example
     * // Get one OtherReceiptService
     * const otherReceiptService = await prisma.otherReceiptService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherReceiptServiceFindUniqueArgs>(args: SelectSubset<T, OtherReceiptServiceFindUniqueArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherReceiptService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherReceiptServiceFindUniqueOrThrowArgs} args - Arguments to find a OtherReceiptService
     * @example
     * // Get one OtherReceiptService
     * const otherReceiptService = await prisma.otherReceiptService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherReceiptServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherReceiptServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherReceiptService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptServiceFindFirstArgs} args - Arguments to find a OtherReceiptService
     * @example
     * // Get one OtherReceiptService
     * const otherReceiptService = await prisma.otherReceiptService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherReceiptServiceFindFirstArgs>(args?: SelectSubset<T, OtherReceiptServiceFindFirstArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherReceiptService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptServiceFindFirstOrThrowArgs} args - Arguments to find a OtherReceiptService
     * @example
     * // Get one OtherReceiptService
     * const otherReceiptService = await prisma.otherReceiptService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherReceiptServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherReceiptServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherReceiptServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherReceiptServices
     * const otherReceiptServices = await prisma.otherReceiptService.findMany()
     * 
     * // Get first 10 OtherReceiptServices
     * const otherReceiptServices = await prisma.otherReceiptService.findMany({ take: 10 })
     * 
     * // Only select the `otherReceiptId`
     * const otherReceiptServiceWithOtherReceiptIdOnly = await prisma.otherReceiptService.findMany({ select: { otherReceiptId: true } })
     * 
     */
    findMany<T extends OtherReceiptServiceFindManyArgs>(args?: SelectSubset<T, OtherReceiptServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherReceiptService.
     * @param {OtherReceiptServiceCreateArgs} args - Arguments to create a OtherReceiptService.
     * @example
     * // Create one OtherReceiptService
     * const OtherReceiptService = await prisma.otherReceiptService.create({
     *   data: {
     *     // ... data to create a OtherReceiptService
     *   }
     * })
     * 
     */
    create<T extends OtherReceiptServiceCreateArgs>(args: SelectSubset<T, OtherReceiptServiceCreateArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherReceiptServices.
     * @param {OtherReceiptServiceCreateManyArgs} args - Arguments to create many OtherReceiptServices.
     * @example
     * // Create many OtherReceiptServices
     * const otherReceiptService = await prisma.otherReceiptService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherReceiptServiceCreateManyArgs>(args?: SelectSubset<T, OtherReceiptServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OtherReceiptService.
     * @param {OtherReceiptServiceDeleteArgs} args - Arguments to delete one OtherReceiptService.
     * @example
     * // Delete one OtherReceiptService
     * const OtherReceiptService = await prisma.otherReceiptService.delete({
     *   where: {
     *     // ... filter to delete one OtherReceiptService
     *   }
     * })
     * 
     */
    delete<T extends OtherReceiptServiceDeleteArgs>(args: SelectSubset<T, OtherReceiptServiceDeleteArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherReceiptService.
     * @param {OtherReceiptServiceUpdateArgs} args - Arguments to update one OtherReceiptService.
     * @example
     * // Update one OtherReceiptService
     * const otherReceiptService = await prisma.otherReceiptService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherReceiptServiceUpdateArgs>(args: SelectSubset<T, OtherReceiptServiceUpdateArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherReceiptServices.
     * @param {OtherReceiptServiceDeleteManyArgs} args - Arguments to filter OtherReceiptServices to delete.
     * @example
     * // Delete a few OtherReceiptServices
     * const { count } = await prisma.otherReceiptService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherReceiptServiceDeleteManyArgs>(args?: SelectSubset<T, OtherReceiptServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherReceiptServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherReceiptServices
     * const otherReceiptService = await prisma.otherReceiptService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherReceiptServiceUpdateManyArgs>(args: SelectSubset<T, OtherReceiptServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtherReceiptService.
     * @param {OtherReceiptServiceUpsertArgs} args - Arguments to update or create a OtherReceiptService.
     * @example
     * // Update or create a OtherReceiptService
     * const otherReceiptService = await prisma.otherReceiptService.upsert({
     *   create: {
     *     // ... data to create a OtherReceiptService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherReceiptService we want to update
     *   }
     * })
     */
    upsert<T extends OtherReceiptServiceUpsertArgs>(args: SelectSubset<T, OtherReceiptServiceUpsertArgs<ExtArgs>>): Prisma__OtherReceiptServiceClient<$Result.GetResult<Prisma.$OtherReceiptServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherReceiptServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptServiceCountArgs} args - Arguments to filter OtherReceiptServices to count.
     * @example
     * // Count the number of OtherReceiptServices
     * const count = await prisma.otherReceiptService.count({
     *   where: {
     *     // ... the filter for the OtherReceiptServices we want to count
     *   }
     * })
    **/
    count<T extends OtherReceiptServiceCountArgs>(
      args?: Subset<T, OtherReceiptServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherReceiptServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherReceiptService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherReceiptServiceAggregateArgs>(args: Subset<T, OtherReceiptServiceAggregateArgs>): Prisma.PrismaPromise<GetOtherReceiptServiceAggregateType<T>>

    /**
     * Group by OtherReceiptService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptServiceGroupByArgs} args - Group by arguments.
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
      T extends OtherReceiptServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherReceiptServiceGroupByArgs['orderBy'] }
        : { orderBy?: OtherReceiptServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtherReceiptServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherReceiptServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherReceiptService model
   */
  readonly fields: OtherReceiptServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherReceiptService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherReceiptServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    otherReceipt<T extends OtherReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OtherReceiptDefaultArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OtherReceiptService model
   */
  interface OtherReceiptServiceFieldRefs {
    readonly otherReceiptId: FieldRef<"OtherReceiptService", 'Int'>
    readonly serviceId: FieldRef<"OtherReceiptService", 'Int'>
    readonly quantity: FieldRef<"OtherReceiptService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OtherReceiptService findUnique
   */
  export type OtherReceiptServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptService to fetch.
     */
    where: OtherReceiptServiceWhereUniqueInput
  }

  /**
   * OtherReceiptService findUniqueOrThrow
   */
  export type OtherReceiptServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptService to fetch.
     */
    where: OtherReceiptServiceWhereUniqueInput
  }

  /**
   * OtherReceiptService findFirst
   */
  export type OtherReceiptServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptService to fetch.
     */
    where?: OtherReceiptServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptServices to fetch.
     */
    orderBy?: OtherReceiptServiceOrderByWithRelationInput | OtherReceiptServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherReceiptServices.
     */
    cursor?: OtherReceiptServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherReceiptServices.
     */
    distinct?: OtherReceiptServiceScalarFieldEnum | OtherReceiptServiceScalarFieldEnum[]
  }

  /**
   * OtherReceiptService findFirstOrThrow
   */
  export type OtherReceiptServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptService to fetch.
     */
    where?: OtherReceiptServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptServices to fetch.
     */
    orderBy?: OtherReceiptServiceOrderByWithRelationInput | OtherReceiptServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherReceiptServices.
     */
    cursor?: OtherReceiptServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherReceiptServices.
     */
    distinct?: OtherReceiptServiceScalarFieldEnum | OtherReceiptServiceScalarFieldEnum[]
  }

  /**
   * OtherReceiptService findMany
   */
  export type OtherReceiptServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptServices to fetch.
     */
    where?: OtherReceiptServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptServices to fetch.
     */
    orderBy?: OtherReceiptServiceOrderByWithRelationInput | OtherReceiptServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherReceiptServices.
     */
    cursor?: OtherReceiptServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptServices.
     */
    skip?: number
    distinct?: OtherReceiptServiceScalarFieldEnum | OtherReceiptServiceScalarFieldEnum[]
  }

  /**
   * OtherReceiptService create
   */
  export type OtherReceiptServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a OtherReceiptService.
     */
    data: XOR<OtherReceiptServiceCreateInput, OtherReceiptServiceUncheckedCreateInput>
  }

  /**
   * OtherReceiptService createMany
   */
  export type OtherReceiptServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherReceiptServices.
     */
    data: OtherReceiptServiceCreateManyInput | OtherReceiptServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtherReceiptService update
   */
  export type OtherReceiptServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a OtherReceiptService.
     */
    data: XOR<OtherReceiptServiceUpdateInput, OtherReceiptServiceUncheckedUpdateInput>
    /**
     * Choose, which OtherReceiptService to update.
     */
    where: OtherReceiptServiceWhereUniqueInput
  }

  /**
   * OtherReceiptService updateMany
   */
  export type OtherReceiptServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherReceiptServices.
     */
    data: XOR<OtherReceiptServiceUpdateManyMutationInput, OtherReceiptServiceUncheckedUpdateManyInput>
    /**
     * Filter which OtherReceiptServices to update
     */
    where?: OtherReceiptServiceWhereInput
    /**
     * Limit how many OtherReceiptServices to update.
     */
    limit?: number
  }

  /**
   * OtherReceiptService upsert
   */
  export type OtherReceiptServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the OtherReceiptService to update in case it exists.
     */
    where: OtherReceiptServiceWhereUniqueInput
    /**
     * In case the OtherReceiptService found by the `where` argument doesn't exist, create a new OtherReceiptService with this data.
     */
    create: XOR<OtherReceiptServiceCreateInput, OtherReceiptServiceUncheckedCreateInput>
    /**
     * In case the OtherReceiptService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherReceiptServiceUpdateInput, OtherReceiptServiceUncheckedUpdateInput>
  }

  /**
   * OtherReceiptService delete
   */
  export type OtherReceiptServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
    /**
     * Filter which OtherReceiptService to delete.
     */
    where: OtherReceiptServiceWhereUniqueInput
  }

  /**
   * OtherReceiptService deleteMany
   */
  export type OtherReceiptServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherReceiptServices to delete
     */
    where?: OtherReceiptServiceWhereInput
    /**
     * Limit how many OtherReceiptServices to delete.
     */
    limit?: number
  }

  /**
   * OtherReceiptService without action
   */
  export type OtherReceiptServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptService
     */
    select?: OtherReceiptServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptService
     */
    omit?: OtherReceiptServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptServiceInclude<ExtArgs> | null
  }


  /**
   * Model OtherReceiptItem
   */

  export type AggregateOtherReceiptItem = {
    _count: OtherReceiptItemCountAggregateOutputType | null
    _avg: OtherReceiptItemAvgAggregateOutputType | null
    _sum: OtherReceiptItemSumAggregateOutputType | null
    _min: OtherReceiptItemMinAggregateOutputType | null
    _max: OtherReceiptItemMaxAggregateOutputType | null
  }

  export type OtherReceiptItemAvgAggregateOutputType = {
    otherReceiptId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type OtherReceiptItemSumAggregateOutputType = {
    otherReceiptId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type OtherReceiptItemMinAggregateOutputType = {
    otherReceiptId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type OtherReceiptItemMaxAggregateOutputType = {
    otherReceiptId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type OtherReceiptItemCountAggregateOutputType = {
    otherReceiptId: number
    itemId: number
    quantity: number
    _all: number
  }


  export type OtherReceiptItemAvgAggregateInputType = {
    otherReceiptId?: true
    itemId?: true
    quantity?: true
  }

  export type OtherReceiptItemSumAggregateInputType = {
    otherReceiptId?: true
    itemId?: true
    quantity?: true
  }

  export type OtherReceiptItemMinAggregateInputType = {
    otherReceiptId?: true
    itemId?: true
    quantity?: true
  }

  export type OtherReceiptItemMaxAggregateInputType = {
    otherReceiptId?: true
    itemId?: true
    quantity?: true
  }

  export type OtherReceiptItemCountAggregateInputType = {
    otherReceiptId?: true
    itemId?: true
    quantity?: true
    _all?: true
  }

  export type OtherReceiptItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherReceiptItem to aggregate.
     */
    where?: OtherReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptItems to fetch.
     */
    orderBy?: OtherReceiptItemOrderByWithRelationInput | OtherReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtherReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtherReceiptItems
    **/
    _count?: true | OtherReceiptItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherReceiptItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherReceiptItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherReceiptItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherReceiptItemMaxAggregateInputType
  }

  export type GetOtherReceiptItemAggregateType<T extends OtherReceiptItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherReceiptItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherReceiptItem[P]>
      : GetScalarType<T[P], AggregateOtherReceiptItem[P]>
  }




  export type OtherReceiptItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtherReceiptItemWhereInput
    orderBy?: OtherReceiptItemOrderByWithAggregationInput | OtherReceiptItemOrderByWithAggregationInput[]
    by: OtherReceiptItemScalarFieldEnum[] | OtherReceiptItemScalarFieldEnum
    having?: OtherReceiptItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherReceiptItemCountAggregateInputType | true
    _avg?: OtherReceiptItemAvgAggregateInputType
    _sum?: OtherReceiptItemSumAggregateInputType
    _min?: OtherReceiptItemMinAggregateInputType
    _max?: OtherReceiptItemMaxAggregateInputType
  }

  export type OtherReceiptItemGroupByOutputType = {
    otherReceiptId: number
    itemId: number
    quantity: number
    _count: OtherReceiptItemCountAggregateOutputType | null
    _avg: OtherReceiptItemAvgAggregateOutputType | null
    _sum: OtherReceiptItemSumAggregateOutputType | null
    _min: OtherReceiptItemMinAggregateOutputType | null
    _max: OtherReceiptItemMaxAggregateOutputType | null
  }

  type GetOtherReceiptItemGroupByPayload<T extends OtherReceiptItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherReceiptItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherReceiptItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherReceiptItemGroupByOutputType[P]>
            : GetScalarType<T[P], OtherReceiptItemGroupByOutputType[P]>
        }
      >
    >


  export type OtherReceiptItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    otherReceiptId?: boolean
    itemId?: boolean
    quantity?: boolean
    otherReceipt?: boolean | OtherReceiptDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherReceiptItem"]>



  export type OtherReceiptItemSelectScalar = {
    otherReceiptId?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type OtherReceiptItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"otherReceiptId" | "itemId" | "quantity", ExtArgs["result"]["otherReceiptItem"]>
  export type OtherReceiptItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherReceipt?: boolean | OtherReceiptDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $OtherReceiptItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtherReceiptItem"
    objects: {
      otherReceipt: Prisma.$OtherReceiptPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      otherReceiptId: number
      itemId: number
      quantity: number
    }, ExtArgs["result"]["otherReceiptItem"]>
    composites: {}
  }

  type OtherReceiptItemGetPayload<S extends boolean | null | undefined | OtherReceiptItemDefaultArgs> = $Result.GetResult<Prisma.$OtherReceiptItemPayload, S>

  type OtherReceiptItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtherReceiptItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherReceiptItemCountAggregateInputType | true
    }

  export interface OtherReceiptItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtherReceiptItem'], meta: { name: 'OtherReceiptItem' } }
    /**
     * Find zero or one OtherReceiptItem that matches the filter.
     * @param {OtherReceiptItemFindUniqueArgs} args - Arguments to find a OtherReceiptItem
     * @example
     * // Get one OtherReceiptItem
     * const otherReceiptItem = await prisma.otherReceiptItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtherReceiptItemFindUniqueArgs>(args: SelectSubset<T, OtherReceiptItemFindUniqueArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherReceiptItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtherReceiptItemFindUniqueOrThrowArgs} args - Arguments to find a OtherReceiptItem
     * @example
     * // Get one OtherReceiptItem
     * const otherReceiptItem = await prisma.otherReceiptItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtherReceiptItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OtherReceiptItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherReceiptItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptItemFindFirstArgs} args - Arguments to find a OtherReceiptItem
     * @example
     * // Get one OtherReceiptItem
     * const otherReceiptItem = await prisma.otherReceiptItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtherReceiptItemFindFirstArgs>(args?: SelectSubset<T, OtherReceiptItemFindFirstArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherReceiptItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptItemFindFirstOrThrowArgs} args - Arguments to find a OtherReceiptItem
     * @example
     * // Get one OtherReceiptItem
     * const otherReceiptItem = await prisma.otherReceiptItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtherReceiptItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OtherReceiptItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherReceiptItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherReceiptItems
     * const otherReceiptItems = await prisma.otherReceiptItem.findMany()
     * 
     * // Get first 10 OtherReceiptItems
     * const otherReceiptItems = await prisma.otherReceiptItem.findMany({ take: 10 })
     * 
     * // Only select the `otherReceiptId`
     * const otherReceiptItemWithOtherReceiptIdOnly = await prisma.otherReceiptItem.findMany({ select: { otherReceiptId: true } })
     * 
     */
    findMany<T extends OtherReceiptItemFindManyArgs>(args?: SelectSubset<T, OtherReceiptItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherReceiptItem.
     * @param {OtherReceiptItemCreateArgs} args - Arguments to create a OtherReceiptItem.
     * @example
     * // Create one OtherReceiptItem
     * const OtherReceiptItem = await prisma.otherReceiptItem.create({
     *   data: {
     *     // ... data to create a OtherReceiptItem
     *   }
     * })
     * 
     */
    create<T extends OtherReceiptItemCreateArgs>(args: SelectSubset<T, OtherReceiptItemCreateArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherReceiptItems.
     * @param {OtherReceiptItemCreateManyArgs} args - Arguments to create many OtherReceiptItems.
     * @example
     * // Create many OtherReceiptItems
     * const otherReceiptItem = await prisma.otherReceiptItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtherReceiptItemCreateManyArgs>(args?: SelectSubset<T, OtherReceiptItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OtherReceiptItem.
     * @param {OtherReceiptItemDeleteArgs} args - Arguments to delete one OtherReceiptItem.
     * @example
     * // Delete one OtherReceiptItem
     * const OtherReceiptItem = await prisma.otherReceiptItem.delete({
     *   where: {
     *     // ... filter to delete one OtherReceiptItem
     *   }
     * })
     * 
     */
    delete<T extends OtherReceiptItemDeleteArgs>(args: SelectSubset<T, OtherReceiptItemDeleteArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherReceiptItem.
     * @param {OtherReceiptItemUpdateArgs} args - Arguments to update one OtherReceiptItem.
     * @example
     * // Update one OtherReceiptItem
     * const otherReceiptItem = await prisma.otherReceiptItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtherReceiptItemUpdateArgs>(args: SelectSubset<T, OtherReceiptItemUpdateArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherReceiptItems.
     * @param {OtherReceiptItemDeleteManyArgs} args - Arguments to filter OtherReceiptItems to delete.
     * @example
     * // Delete a few OtherReceiptItems
     * const { count } = await prisma.otherReceiptItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtherReceiptItemDeleteManyArgs>(args?: SelectSubset<T, OtherReceiptItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherReceiptItems
     * const otherReceiptItem = await prisma.otherReceiptItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtherReceiptItemUpdateManyArgs>(args: SelectSubset<T, OtherReceiptItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtherReceiptItem.
     * @param {OtherReceiptItemUpsertArgs} args - Arguments to update or create a OtherReceiptItem.
     * @example
     * // Update or create a OtherReceiptItem
     * const otherReceiptItem = await prisma.otherReceiptItem.upsert({
     *   create: {
     *     // ... data to create a OtherReceiptItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherReceiptItem we want to update
     *   }
     * })
     */
    upsert<T extends OtherReceiptItemUpsertArgs>(args: SelectSubset<T, OtherReceiptItemUpsertArgs<ExtArgs>>): Prisma__OtherReceiptItemClient<$Result.GetResult<Prisma.$OtherReceiptItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherReceiptItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptItemCountArgs} args - Arguments to filter OtherReceiptItems to count.
     * @example
     * // Count the number of OtherReceiptItems
     * const count = await prisma.otherReceiptItem.count({
     *   where: {
     *     // ... the filter for the OtherReceiptItems we want to count
     *   }
     * })
    **/
    count<T extends OtherReceiptItemCountArgs>(
      args?: Subset<T, OtherReceiptItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherReceiptItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherReceiptItemAggregateArgs>(args: Subset<T, OtherReceiptItemAggregateArgs>): Prisma.PrismaPromise<GetOtherReceiptItemAggregateType<T>>

    /**
     * Group by OtherReceiptItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherReceiptItemGroupByArgs} args - Group by arguments.
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
      T extends OtherReceiptItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtherReceiptItemGroupByArgs['orderBy'] }
        : { orderBy?: OtherReceiptItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtherReceiptItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherReceiptItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtherReceiptItem model
   */
  readonly fields: OtherReceiptItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtherReceiptItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtherReceiptItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    otherReceipt<T extends OtherReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OtherReceiptDefaultArgs<ExtArgs>>): Prisma__OtherReceiptClient<$Result.GetResult<Prisma.$OtherReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OtherReceiptItem model
   */
  interface OtherReceiptItemFieldRefs {
    readonly otherReceiptId: FieldRef<"OtherReceiptItem", 'Int'>
    readonly itemId: FieldRef<"OtherReceiptItem", 'Int'>
    readonly quantity: FieldRef<"OtherReceiptItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OtherReceiptItem findUnique
   */
  export type OtherReceiptItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptItem to fetch.
     */
    where: OtherReceiptItemWhereUniqueInput
  }

  /**
   * OtherReceiptItem findUniqueOrThrow
   */
  export type OtherReceiptItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptItem to fetch.
     */
    where: OtherReceiptItemWhereUniqueInput
  }

  /**
   * OtherReceiptItem findFirst
   */
  export type OtherReceiptItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptItem to fetch.
     */
    where?: OtherReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptItems to fetch.
     */
    orderBy?: OtherReceiptItemOrderByWithRelationInput | OtherReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherReceiptItems.
     */
    cursor?: OtherReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherReceiptItems.
     */
    distinct?: OtherReceiptItemScalarFieldEnum | OtherReceiptItemScalarFieldEnum[]
  }

  /**
   * OtherReceiptItem findFirstOrThrow
   */
  export type OtherReceiptItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptItem to fetch.
     */
    where?: OtherReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptItems to fetch.
     */
    orderBy?: OtherReceiptItemOrderByWithRelationInput | OtherReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtherReceiptItems.
     */
    cursor?: OtherReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtherReceiptItems.
     */
    distinct?: OtherReceiptItemScalarFieldEnum | OtherReceiptItemScalarFieldEnum[]
  }

  /**
   * OtherReceiptItem findMany
   */
  export type OtherReceiptItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * Filter, which OtherReceiptItems to fetch.
     */
    where?: OtherReceiptItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtherReceiptItems to fetch.
     */
    orderBy?: OtherReceiptItemOrderByWithRelationInput | OtherReceiptItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtherReceiptItems.
     */
    cursor?: OtherReceiptItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtherReceiptItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtherReceiptItems.
     */
    skip?: number
    distinct?: OtherReceiptItemScalarFieldEnum | OtherReceiptItemScalarFieldEnum[]
  }

  /**
   * OtherReceiptItem create
   */
  export type OtherReceiptItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OtherReceiptItem.
     */
    data: XOR<OtherReceiptItemCreateInput, OtherReceiptItemUncheckedCreateInput>
  }

  /**
   * OtherReceiptItem createMany
   */
  export type OtherReceiptItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtherReceiptItems.
     */
    data: OtherReceiptItemCreateManyInput | OtherReceiptItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtherReceiptItem update
   */
  export type OtherReceiptItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OtherReceiptItem.
     */
    data: XOR<OtherReceiptItemUpdateInput, OtherReceiptItemUncheckedUpdateInput>
    /**
     * Choose, which OtherReceiptItem to update.
     */
    where: OtherReceiptItemWhereUniqueInput
  }

  /**
   * OtherReceiptItem updateMany
   */
  export type OtherReceiptItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtherReceiptItems.
     */
    data: XOR<OtherReceiptItemUpdateManyMutationInput, OtherReceiptItemUncheckedUpdateManyInput>
    /**
     * Filter which OtherReceiptItems to update
     */
    where?: OtherReceiptItemWhereInput
    /**
     * Limit how many OtherReceiptItems to update.
     */
    limit?: number
  }

  /**
   * OtherReceiptItem upsert
   */
  export type OtherReceiptItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OtherReceiptItem to update in case it exists.
     */
    where: OtherReceiptItemWhereUniqueInput
    /**
     * In case the OtherReceiptItem found by the `where` argument doesn't exist, create a new OtherReceiptItem with this data.
     */
    create: XOR<OtherReceiptItemCreateInput, OtherReceiptItemUncheckedCreateInput>
    /**
     * In case the OtherReceiptItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtherReceiptItemUpdateInput, OtherReceiptItemUncheckedUpdateInput>
  }

  /**
   * OtherReceiptItem delete
   */
  export type OtherReceiptItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
    /**
     * Filter which OtherReceiptItem to delete.
     */
    where: OtherReceiptItemWhereUniqueInput
  }

  /**
   * OtherReceiptItem deleteMany
   */
  export type OtherReceiptItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtherReceiptItems to delete
     */
    where?: OtherReceiptItemWhereInput
    /**
     * Limit how many OtherReceiptItems to delete.
     */
    limit?: number
  }

  /**
   * OtherReceiptItem without action
   */
  export type OtherReceiptItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherReceiptItem
     */
    select?: OtherReceiptItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtherReceiptItem
     */
    omit?: OtherReceiptItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtherReceiptItemInclude<ExtArgs> | null
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


  export const RoomTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoomTypeScalarFieldEnum = (typeof RoomTypeScalarFieldEnum)[keyof typeof RoomTypeScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    roomNumber: 'roomNumber',
    price: 'price',
    floorNumber: 'floorNumber',
    roomTypeId: 'roomTypeId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    note: 'note',
    estCheckIn: 'estCheckIn',
    estCheckOut: 'estCheckOut'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    discount: 'discount',
    numberOfExtraBeds: 'numberOfExtraBeds',
    extraBedPrice: 'extraBedPrice',
    checkedInAt: 'checkedInAt',
    checkedOutAt: 'checkedOutAt',
    note: 'note',
    isBreakfastIncluded: 'isBreakfastIncluded',
    isActive: 'isActive'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SessionReceiptScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    issuedAt: 'issuedAt',
    amountOfPaid: 'amountOfPaid',
    discount: 'discount',
    totalPrice: 'totalPrice'
  };

  export type SessionReceiptScalarFieldEnum = (typeof SessionReceiptScalarFieldEnum)[keyof typeof SessionReceiptScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    nicCardNumber: 'nicCardNumber',
    sessionId: 'sessionId'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const OtherReceiptScalarFieldEnum: {
    id: 'id',
    amountOfPaid: 'amountOfPaid',
    discount: 'discount',
    totalPrice: 'totalPrice',
    sessionId: 'sessionId'
  };

  export type OtherReceiptScalarFieldEnum = (typeof OtherReceiptScalarFieldEnum)[keyof typeof OtherReceiptScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    quantity: 'quantity'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const RoomItemScalarFieldEnum: {
    roomNumber: 'roomNumber',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type RoomItemScalarFieldEnum = (typeof RoomItemScalarFieldEnum)[keyof typeof RoomItemScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const OtherReceiptServiceScalarFieldEnum: {
    otherReceiptId: 'otherReceiptId',
    serviceId: 'serviceId',
    quantity: 'quantity'
  };

  export type OtherReceiptServiceScalarFieldEnum = (typeof OtherReceiptServiceScalarFieldEnum)[keyof typeof OtherReceiptServiceScalarFieldEnum]


  export const OtherReceiptItemScalarFieldEnum: {
    otherReceiptId: 'otherReceiptId',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type OtherReceiptItemScalarFieldEnum = (typeof OtherReceiptItemScalarFieldEnum)[keyof typeof OtherReceiptItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const RoomTypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RoomTypeOrderByRelevanceFieldEnum = (typeof RoomTypeOrderByRelevanceFieldEnum)[keyof typeof RoomTypeOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BookingOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    note: 'note'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber',
    note: 'note'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const GuestOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    nicCardNumber: 'nicCardNumber'
  };

  export type GuestOrderByRelevanceFieldEnum = (typeof GuestOrderByRelevanceFieldEnum)[keyof typeof GuestOrderByRelevanceFieldEnum]


  export const ItemOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ItemOrderByRelevanceFieldEnum = (typeof ItemOrderByRelevanceFieldEnum)[keyof typeof ItemOrderByRelevanceFieldEnum]


  export const RoomItemOrderByRelevanceFieldEnum: {
    roomNumber: 'roomNumber'
  };

  export type RoomItemOrderByRelevanceFieldEnum = (typeof RoomItemOrderByRelevanceFieldEnum)[keyof typeof RoomItemOrderByRelevanceFieldEnum]


  export const ServiceOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum]


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


  export type RoomTypeWhereInput = {
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    id?: IntFilter<"RoomType"> | number
    name?: StringFilter<"RoomType"> | string
    rooms?: RoomListRelationFilter
  }

  export type RoomTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    _relevance?: RoomTypeOrderByRelevanceInput
  }

  export type RoomTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    name?: StringFilter<"RoomType"> | string
    rooms?: RoomListRelationFilter
  }, "id">

  export type RoomTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
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
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomNumber?: StringFilter<"Room"> | string
    price?: FloatFilter<"Room"> | number
    floorNumber?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    sessions?: SessionListRelationFilter
    bookings?: BookingListRelationFilter
    roomItems?: RoomItemListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    roomNumber?: SortOrder
    price?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
    roomType?: RoomTypeOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    roomItems?: RoomItemOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    roomNumber?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    price?: FloatFilter<"Room"> | number
    floorNumber?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    sessions?: SessionListRelationFilter
    bookings?: BookingListRelationFilter
    roomItems?: RoomItemListRelationFilter
  }, "roomNumber">

  export type RoomOrderByWithAggregationInput = {
    roomNumber?: SortOrder
    price?: SortOrder
    floorNumber?: SortOrder
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
    roomNumber?: StringWithAggregatesFilter<"Room"> | string
    price?: FloatWithAggregatesFilter<"Room"> | number
    floorNumber?: IntWithAggregatesFilter<"Room"> | number
    roomTypeId?: IntWithAggregatesFilter<"Room"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    roomNumber?: StringFilter<"Booking"> | string
    contactName?: StringFilter<"Booking"> | string
    contactPhone?: StringFilter<"Booking"> | string
    note?: StringNullableFilter<"Booking"> | string | null
    estCheckIn?: DateTimeFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeFilter<"Booking"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    note?: SortOrderInput | SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
    room?: RoomOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomNumber_estCheckIn_estCheckOut?: BookingRoomNumberEstCheckInEstCheckOutCompoundUniqueInput
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    roomNumber?: StringFilter<"Booking"> | string
    contactName?: StringFilter<"Booking"> | string
    contactPhone?: StringFilter<"Booking"> | string
    note?: StringNullableFilter<"Booking"> | string | null
    estCheckIn?: DateTimeFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeFilter<"Booking"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "roomNumber_estCheckIn_estCheckOut">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    note?: SortOrderInput | SortOrder
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
    contactName?: StringWithAggregatesFilter<"Booking"> | string
    contactPhone?: StringWithAggregatesFilter<"Booking"> | string
    note?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    estCheckIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    roomNumber?: StringFilter<"Session"> | string
    discount?: FloatNullableFilter<"Session"> | number | null
    numberOfExtraBeds?: IntNullableFilter<"Session"> | number | null
    extraBedPrice?: FloatNullableFilter<"Session"> | number | null
    checkedInAt?: DateTimeFilter<"Session"> | Date | string
    checkedOutAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    note?: StringNullableFilter<"Session"> | string | null
    isBreakfastIncluded?: BoolFilter<"Session"> | boolean
    isActive?: BoolFilter<"Session"> | boolean
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guests?: GuestListRelationFilter
    receipt?: XOR<SessionReceiptNullableScalarRelationFilter, SessionReceiptWhereInput> | null
    otherReceipts?: OtherReceiptListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    discount?: SortOrderInput | SortOrder
    numberOfExtraBeds?: SortOrderInput | SortOrder
    extraBedPrice?: SortOrderInput | SortOrder
    checkedInAt?: SortOrder
    checkedOutAt?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    isBreakfastIncluded?: SortOrder
    isActive?: SortOrder
    room?: RoomOrderByWithRelationInput
    guests?: GuestOrderByRelationAggregateInput
    receipt?: SessionReceiptOrderByWithRelationInput
    otherReceipts?: OtherReceiptOrderByRelationAggregateInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomNumber_checkedInAt_checkedOutAt?: SessionRoomNumberCheckedInAtCheckedOutAtCompoundUniqueInput
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    roomNumber?: StringFilter<"Session"> | string
    discount?: FloatNullableFilter<"Session"> | number | null
    numberOfExtraBeds?: IntNullableFilter<"Session"> | number | null
    extraBedPrice?: FloatNullableFilter<"Session"> | number | null
    checkedInAt?: DateTimeFilter<"Session"> | Date | string
    checkedOutAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    note?: StringNullableFilter<"Session"> | string | null
    isBreakfastIncluded?: BoolFilter<"Session"> | boolean
    isActive?: BoolFilter<"Session"> | boolean
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    guests?: GuestListRelationFilter
    receipt?: XOR<SessionReceiptNullableScalarRelationFilter, SessionReceiptWhereInput> | null
    otherReceipts?: OtherReceiptListRelationFilter
  }, "id" | "roomNumber_checkedInAt_checkedOutAt">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    discount?: SortOrderInput | SortOrder
    numberOfExtraBeds?: SortOrderInput | SortOrder
    extraBedPrice?: SortOrderInput | SortOrder
    checkedInAt?: SortOrder
    checkedOutAt?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    isBreakfastIncluded?: SortOrder
    isActive?: SortOrder
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
    discount?: FloatNullableWithAggregatesFilter<"Session"> | number | null
    numberOfExtraBeds?: IntNullableWithAggregatesFilter<"Session"> | number | null
    extraBedPrice?: FloatNullableWithAggregatesFilter<"Session"> | number | null
    checkedInAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    checkedOutAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    note?: StringNullableWithAggregatesFilter<"Session"> | string | null
    isBreakfastIncluded?: BoolWithAggregatesFilter<"Session"> | boolean
    isActive?: BoolWithAggregatesFilter<"Session"> | boolean
  }

  export type SessionReceiptWhereInput = {
    AND?: SessionReceiptWhereInput | SessionReceiptWhereInput[]
    OR?: SessionReceiptWhereInput[]
    NOT?: SessionReceiptWhereInput | SessionReceiptWhereInput[]
    id?: IntFilter<"SessionReceipt"> | number
    sessionId?: IntFilter<"SessionReceipt"> | number
    issuedAt?: DateTimeFilter<"SessionReceipt"> | Date | string
    amountOfPaid?: FloatFilter<"SessionReceipt"> | number
    discount?: FloatNullableFilter<"SessionReceipt"> | number | null
    totalPrice?: FloatFilter<"SessionReceipt"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type SessionReceiptOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issuedAt?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type SessionReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId?: number
    AND?: SessionReceiptWhereInput | SessionReceiptWhereInput[]
    OR?: SessionReceiptWhereInput[]
    NOT?: SessionReceiptWhereInput | SessionReceiptWhereInput[]
    issuedAt?: DateTimeFilter<"SessionReceipt"> | Date | string
    amountOfPaid?: FloatFilter<"SessionReceipt"> | number
    discount?: FloatNullableFilter<"SessionReceipt"> | number | null
    totalPrice?: FloatFilter<"SessionReceipt"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id" | "sessionId">

  export type SessionReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issuedAt?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    _count?: SessionReceiptCountOrderByAggregateInput
    _avg?: SessionReceiptAvgOrderByAggregateInput
    _max?: SessionReceiptMaxOrderByAggregateInput
    _min?: SessionReceiptMinOrderByAggregateInput
    _sum?: SessionReceiptSumOrderByAggregateInput
  }

  export type SessionReceiptScalarWhereWithAggregatesInput = {
    AND?: SessionReceiptScalarWhereWithAggregatesInput | SessionReceiptScalarWhereWithAggregatesInput[]
    OR?: SessionReceiptScalarWhereWithAggregatesInput[]
    NOT?: SessionReceiptScalarWhereWithAggregatesInput | SessionReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SessionReceipt"> | number
    sessionId?: IntWithAggregatesFilter<"SessionReceipt"> | number
    issuedAt?: DateTimeWithAggregatesFilter<"SessionReceipt"> | Date | string
    amountOfPaid?: FloatWithAggregatesFilter<"SessionReceipt"> | number
    discount?: FloatNullableWithAggregatesFilter<"SessionReceipt"> | number | null
    totalPrice?: FloatWithAggregatesFilter<"SessionReceipt"> | number
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: IntFilter<"Guest"> | number
    name?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    address?: StringNullableFilter<"Guest"> | string | null
    nicCardNumber?: StringNullableFilter<"Guest"> | string | null
    sessionId?: IntNullableFilter<"Guest"> | number | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    nicCardNumber?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    session?: SessionOrderByWithRelationInput
    _relevance?: GuestOrderByRelevanceInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nicCardNumber?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    name?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    address?: StringNullableFilter<"Guest"> | string | null
    sessionId?: IntNullableFilter<"Guest"> | number | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "id" | "nicCardNumber">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    nicCardNumber?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    _count?: GuestCountOrderByAggregateInput
    _avg?: GuestAvgOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
    _sum?: GuestSumOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guest"> | number
    name?: StringWithAggregatesFilter<"Guest"> | string
    phone?: StringWithAggregatesFilter<"Guest"> | string
    email?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    address?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    nicCardNumber?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    sessionId?: IntNullableWithAggregatesFilter<"Guest"> | number | null
  }

  export type OtherReceiptWhereInput = {
    AND?: OtherReceiptWhereInput | OtherReceiptWhereInput[]
    OR?: OtherReceiptWhereInput[]
    NOT?: OtherReceiptWhereInput | OtherReceiptWhereInput[]
    id?: IntFilter<"OtherReceipt"> | number
    amountOfPaid?: FloatFilter<"OtherReceipt"> | number
    discount?: FloatNullableFilter<"OtherReceipt"> | number | null
    totalPrice?: FloatFilter<"OtherReceipt"> | number
    sessionId?: IntFilter<"OtherReceipt"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    items?: OtherReceiptItemListRelationFilter
    services?: OtherReceiptServiceListRelationFilter
  }

  export type OtherReceiptOrderByWithRelationInput = {
    id?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    sessionId?: SortOrder
    session?: SessionOrderByWithRelationInput
    items?: OtherReceiptItemOrderByRelationAggregateInput
    services?: OtherReceiptServiceOrderByRelationAggregateInput
  }

  export type OtherReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OtherReceiptWhereInput | OtherReceiptWhereInput[]
    OR?: OtherReceiptWhereInput[]
    NOT?: OtherReceiptWhereInput | OtherReceiptWhereInput[]
    amountOfPaid?: FloatFilter<"OtherReceipt"> | number
    discount?: FloatNullableFilter<"OtherReceipt"> | number | null
    totalPrice?: FloatFilter<"OtherReceipt"> | number
    sessionId?: IntFilter<"OtherReceipt"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    items?: OtherReceiptItemListRelationFilter
    services?: OtherReceiptServiceListRelationFilter
  }, "id">

  export type OtherReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    sessionId?: SortOrder
    _count?: OtherReceiptCountOrderByAggregateInput
    _avg?: OtherReceiptAvgOrderByAggregateInput
    _max?: OtherReceiptMaxOrderByAggregateInput
    _min?: OtherReceiptMinOrderByAggregateInput
    _sum?: OtherReceiptSumOrderByAggregateInput
  }

  export type OtherReceiptScalarWhereWithAggregatesInput = {
    AND?: OtherReceiptScalarWhereWithAggregatesInput | OtherReceiptScalarWhereWithAggregatesInput[]
    OR?: OtherReceiptScalarWhereWithAggregatesInput[]
    NOT?: OtherReceiptScalarWhereWithAggregatesInput | OtherReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OtherReceipt"> | number
    amountOfPaid?: FloatWithAggregatesFilter<"OtherReceipt"> | number
    discount?: FloatNullableWithAggregatesFilter<"OtherReceipt"> | number | null
    totalPrice?: FloatWithAggregatesFilter<"OtherReceipt"> | number
    sessionId?: IntWithAggregatesFilter<"OtherReceipt"> | number
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    price?: FloatFilter<"Item"> | number
    quantity?: IntFilter<"Item"> | number
    roomItems?: RoomItemListRelationFilter
    otherReceiptItems?: OtherReceiptItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    roomItems?: RoomItemOrderByRelationAggregateInput
    otherReceiptItems?: OtherReceiptItemOrderByRelationAggregateInput
    _relevance?: ItemOrderByRelevanceInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    price?: FloatFilter<"Item"> | number
    quantity?: IntFilter<"Item"> | number
    roomItems?: RoomItemListRelationFilter
    otherReceiptItems?: OtherReceiptItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
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
    quantity?: IntWithAggregatesFilter<"Item"> | number
  }

  export type RoomItemWhereInput = {
    AND?: RoomItemWhereInput | RoomItemWhereInput[]
    OR?: RoomItemWhereInput[]
    NOT?: RoomItemWhereInput | RoomItemWhereInput[]
    roomNumber?: StringFilter<"RoomItem"> | string
    itemId?: IntFilter<"RoomItem"> | number
    quantity?: IntFilter<"RoomItem"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type RoomItemOrderByWithRelationInput = {
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    room?: RoomOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
    _relevance?: RoomItemOrderByRelevanceInput
  }

  export type RoomItemWhereUniqueInput = Prisma.AtLeast<{
    roomNumber_itemId?: RoomItemRoomNumberItemIdCompoundUniqueInput
    AND?: RoomItemWhereInput | RoomItemWhereInput[]
    OR?: RoomItemWhereInput[]
    NOT?: RoomItemWhereInput | RoomItemWhereInput[]
    roomNumber?: StringFilter<"RoomItem"> | string
    itemId?: IntFilter<"RoomItem"> | number
    quantity?: IntFilter<"RoomItem"> | number
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "roomNumber_itemId">

  export type RoomItemOrderByWithAggregationInput = {
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    _count?: RoomItemCountOrderByAggregateInput
    _avg?: RoomItemAvgOrderByAggregateInput
    _max?: RoomItemMaxOrderByAggregateInput
    _min?: RoomItemMinOrderByAggregateInput
    _sum?: RoomItemSumOrderByAggregateInput
  }

  export type RoomItemScalarWhereWithAggregatesInput = {
    AND?: RoomItemScalarWhereWithAggregatesInput | RoomItemScalarWhereWithAggregatesInput[]
    OR?: RoomItemScalarWhereWithAggregatesInput[]
    NOT?: RoomItemScalarWhereWithAggregatesInput | RoomItemScalarWhereWithAggregatesInput[]
    roomNumber?: StringWithAggregatesFilter<"RoomItem"> | string
    itemId?: IntWithAggregatesFilter<"RoomItem"> | number
    quantity?: IntWithAggregatesFilter<"RoomItem"> | number
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    otherReceiptServices?: OtherReceiptServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    otherReceiptServices?: OtherReceiptServiceOrderByRelationAggregateInput
    _relevance?: ServiceOrderByRelevanceInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    price?: FloatFilter<"Service"> | number
    otherReceiptServices?: OtherReceiptServiceListRelationFilter
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

  export type OtherReceiptServiceWhereInput = {
    AND?: OtherReceiptServiceWhereInput | OtherReceiptServiceWhereInput[]
    OR?: OtherReceiptServiceWhereInput[]
    NOT?: OtherReceiptServiceWhereInput | OtherReceiptServiceWhereInput[]
    otherReceiptId?: IntFilter<"OtherReceiptService"> | number
    serviceId?: IntFilter<"OtherReceiptService"> | number
    quantity?: IntFilter<"OtherReceiptService"> | number
    otherReceipt?: XOR<OtherReceiptScalarRelationFilter, OtherReceiptWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type OtherReceiptServiceOrderByWithRelationInput = {
    otherReceiptId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
    otherReceipt?: OtherReceiptOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type OtherReceiptServiceWhereUniqueInput = Prisma.AtLeast<{
    otherReceiptId_serviceId?: OtherReceiptServiceOtherReceiptIdServiceIdCompoundUniqueInput
    AND?: OtherReceiptServiceWhereInput | OtherReceiptServiceWhereInput[]
    OR?: OtherReceiptServiceWhereInput[]
    NOT?: OtherReceiptServiceWhereInput | OtherReceiptServiceWhereInput[]
    otherReceiptId?: IntFilter<"OtherReceiptService"> | number
    serviceId?: IntFilter<"OtherReceiptService"> | number
    quantity?: IntFilter<"OtherReceiptService"> | number
    otherReceipt?: XOR<OtherReceiptScalarRelationFilter, OtherReceiptWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "otherReceiptId_serviceId">

  export type OtherReceiptServiceOrderByWithAggregationInput = {
    otherReceiptId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
    _count?: OtherReceiptServiceCountOrderByAggregateInput
    _avg?: OtherReceiptServiceAvgOrderByAggregateInput
    _max?: OtherReceiptServiceMaxOrderByAggregateInput
    _min?: OtherReceiptServiceMinOrderByAggregateInput
    _sum?: OtherReceiptServiceSumOrderByAggregateInput
  }

  export type OtherReceiptServiceScalarWhereWithAggregatesInput = {
    AND?: OtherReceiptServiceScalarWhereWithAggregatesInput | OtherReceiptServiceScalarWhereWithAggregatesInput[]
    OR?: OtherReceiptServiceScalarWhereWithAggregatesInput[]
    NOT?: OtherReceiptServiceScalarWhereWithAggregatesInput | OtherReceiptServiceScalarWhereWithAggregatesInput[]
    otherReceiptId?: IntWithAggregatesFilter<"OtherReceiptService"> | number
    serviceId?: IntWithAggregatesFilter<"OtherReceiptService"> | number
    quantity?: IntWithAggregatesFilter<"OtherReceiptService"> | number
  }

  export type OtherReceiptItemWhereInput = {
    AND?: OtherReceiptItemWhereInput | OtherReceiptItemWhereInput[]
    OR?: OtherReceiptItemWhereInput[]
    NOT?: OtherReceiptItemWhereInput | OtherReceiptItemWhereInput[]
    otherReceiptId?: IntFilter<"OtherReceiptItem"> | number
    itemId?: IntFilter<"OtherReceiptItem"> | number
    quantity?: IntFilter<"OtherReceiptItem"> | number
    otherReceipt?: XOR<OtherReceiptScalarRelationFilter, OtherReceiptWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type OtherReceiptItemOrderByWithRelationInput = {
    otherReceiptId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    otherReceipt?: OtherReceiptOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type OtherReceiptItemWhereUniqueInput = Prisma.AtLeast<{
    otherReceiptId_itemId?: OtherReceiptItemOtherReceiptIdItemIdCompoundUniqueInput
    AND?: OtherReceiptItemWhereInput | OtherReceiptItemWhereInput[]
    OR?: OtherReceiptItemWhereInput[]
    NOT?: OtherReceiptItemWhereInput | OtherReceiptItemWhereInput[]
    otherReceiptId?: IntFilter<"OtherReceiptItem"> | number
    itemId?: IntFilter<"OtherReceiptItem"> | number
    quantity?: IntFilter<"OtherReceiptItem"> | number
    otherReceipt?: XOR<OtherReceiptScalarRelationFilter, OtherReceiptWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "otherReceiptId_itemId">

  export type OtherReceiptItemOrderByWithAggregationInput = {
    otherReceiptId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    _count?: OtherReceiptItemCountOrderByAggregateInput
    _avg?: OtherReceiptItemAvgOrderByAggregateInput
    _max?: OtherReceiptItemMaxOrderByAggregateInput
    _min?: OtherReceiptItemMinOrderByAggregateInput
    _sum?: OtherReceiptItemSumOrderByAggregateInput
  }

  export type OtherReceiptItemScalarWhereWithAggregatesInput = {
    AND?: OtherReceiptItemScalarWhereWithAggregatesInput | OtherReceiptItemScalarWhereWithAggregatesInput[]
    OR?: OtherReceiptItemScalarWhereWithAggregatesInput[]
    NOT?: OtherReceiptItemScalarWhereWithAggregatesInput | OtherReceiptItemScalarWhereWithAggregatesInput[]
    otherReceiptId?: IntWithAggregatesFilter<"OtherReceiptItem"> | number
    itemId?: IntWithAggregatesFilter<"OtherReceiptItem"> | number
    quantity?: IntWithAggregatesFilter<"OtherReceiptItem"> | number
  }

  export type RoomTypeCreateInput = {
    name: string
    rooms?: RoomCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateInput = {
    id?: number
    name: string
    rooms?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type RoomTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    sessions?: SessionCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomTypeId: number
    sessions?: SessionUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    sessions?: SessionUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomTypeId: number
  }

  export type RoomUpdateManyMutationInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    contactName: string
    contactPhone: string
    note?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
    room: RoomCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    roomNumber: string
    contactName: string
    contactPhone: string
    note?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingUpdateInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    roomNumber: string
    contactName: string
    contactPhone: string
    note?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    room: RoomCreateNestedOneWithoutSessionsInput
    guests?: GuestCreateNestedManyWithoutSessionInput
    receipt?: SessionReceiptCreateNestedOneWithoutSessionInput
    otherReceipts?: OtherReceiptCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    roomNumber: string
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    guests?: GuestUncheckedCreateNestedManyWithoutSessionInput
    receipt?: SessionReceiptUncheckedCreateNestedOneWithoutSessionInput
    otherReceipts?: OtherReceiptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    room?: RoomUpdateOneRequiredWithoutSessionsNestedInput
    guests?: GuestUpdateManyWithoutSessionNestedInput
    receipt?: SessionReceiptUpdateOneWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    guests?: GuestUncheckedUpdateManyWithoutSessionNestedInput
    receipt?: SessionReceiptUncheckedUpdateOneWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: number
    roomNumber: string
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
  }

  export type SessionUpdateManyMutationInput = {
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionReceiptCreateInput = {
    issuedAt: Date | string
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    session: SessionCreateNestedOneWithoutReceiptInput
  }

  export type SessionReceiptUncheckedCreateInput = {
    id?: number
    sessionId: number
    issuedAt: Date | string
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
  }

  export type SessionReceiptUpdateInput = {
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutReceiptNestedInput
  }

  export type SessionReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionReceiptCreateManyInput = {
    id?: number
    sessionId: number
    issuedAt: Date | string
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
  }

  export type SessionReceiptUpdateManyMutationInput = {
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type GuestCreateInput = {
    name: string
    phone: string
    email?: string | null
    address?: string | null
    nicCardNumber?: string | null
    session?: SessionCreateNestedOneWithoutGuestsInput
  }

  export type GuestUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    address?: string | null
    nicCardNumber?: string | null
    sessionId?: number | null
  }

  export type GuestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nicCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    session?: SessionUpdateOneWithoutGuestsNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nicCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GuestCreateManyInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    address?: string | null
    nicCardNumber?: string | null
    sessionId?: number | null
  }

  export type GuestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nicCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nicCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OtherReceiptCreateInput = {
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    session: SessionCreateNestedOneWithoutOtherReceiptsInput
    items?: OtherReceiptItemCreateNestedManyWithoutOtherReceiptInput
    services?: OtherReceiptServiceCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptUncheckedCreateInput = {
    id?: number
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    sessionId: number
    items?: OtherReceiptItemUncheckedCreateNestedManyWithoutOtherReceiptInput
    services?: OtherReceiptServiceUncheckedCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptUpdateInput = {
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutOtherReceiptsNestedInput
    items?: OtherReceiptItemUpdateManyWithoutOtherReceiptNestedInput
    services?: OtherReceiptServiceUpdateManyWithoutOtherReceiptNestedInput
  }

  export type OtherReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    items?: OtherReceiptItemUncheckedUpdateManyWithoutOtherReceiptNestedInput
    services?: OtherReceiptServiceUncheckedUpdateManyWithoutOtherReceiptNestedInput
  }

  export type OtherReceiptCreateManyInput = {
    id?: number
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    sessionId: number
  }

  export type OtherReceiptUpdateManyMutationInput = {
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OtherReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCreateInput = {
    name: string
    price: number
    quantity: number
    roomItems?: RoomItemCreateNestedManyWithoutItemInput
    otherReceiptItems?: OtherReceiptItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    quantity: number
    roomItems?: RoomItemUncheckedCreateNestedManyWithoutItemInput
    otherReceiptItems?: OtherReceiptItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    roomItems?: RoomItemUpdateManyWithoutItemNestedInput
    otherReceiptItems?: OtherReceiptItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    roomItems?: RoomItemUncheckedUpdateManyWithoutItemNestedInput
    otherReceiptItems?: OtherReceiptItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    price: number
    quantity: number
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomItemCreateInput = {
    quantity: number
    room: RoomCreateNestedOneWithoutRoomItemsInput
    item: ItemCreateNestedOneWithoutRoomItemsInput
  }

  export type RoomItemUncheckedCreateInput = {
    roomNumber: string
    itemId: number
    quantity: number
  }

  export type RoomItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutRoomItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutRoomItemsNestedInput
  }

  export type RoomItemUncheckedUpdateInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomItemCreateManyInput = {
    roomNumber: string
    itemId: number
    quantity: number
  }

  export type RoomItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomItemUncheckedUpdateManyInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceCreateInput = {
    name: string
    price: number
    otherReceiptServices?: OtherReceiptServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    otherReceiptServices?: OtherReceiptServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    otherReceiptServices?: OtherReceiptServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    otherReceiptServices?: OtherReceiptServiceUncheckedUpdateManyWithoutServiceNestedInput
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

  export type OtherReceiptServiceCreateInput = {
    quantity: number
    otherReceipt: OtherReceiptCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutOtherReceiptServicesInput
  }

  export type OtherReceiptServiceUncheckedCreateInput = {
    otherReceiptId: number
    serviceId: number
    quantity: number
  }

  export type OtherReceiptServiceUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    otherReceipt?: OtherReceiptUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutOtherReceiptServicesNestedInput
  }

  export type OtherReceiptServiceUncheckedUpdateInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptServiceCreateManyInput = {
    otherReceiptId: number
    serviceId: number
    quantity: number
  }

  export type OtherReceiptServiceUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptServiceUncheckedUpdateManyInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptItemCreateInput = {
    quantity: number
    otherReceipt: OtherReceiptCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutOtherReceiptItemsInput
  }

  export type OtherReceiptItemUncheckedCreateInput = {
    otherReceiptId: number
    itemId: number
    quantity: number
  }

  export type OtherReceiptItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    otherReceipt?: OtherReceiptUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutOtherReceiptItemsNestedInput
  }

  export type OtherReceiptItemUncheckedUpdateInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptItemCreateManyInput = {
    otherReceiptId: number
    itemId: number
    quantity: number
  }

  export type OtherReceiptItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptItemUncheckedUpdateManyInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTypeOrderByRelevanceInput = {
    fields: RoomTypeOrderByRelevanceFieldEnum | RoomTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoomTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoomTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoomTypeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type RoomTypeScalarRelationFilter = {
    is?: RoomTypeWhereInput
    isNot?: RoomTypeWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type RoomItemListRelationFilter = {
    every?: RoomItemWhereInput
    some?: RoomItemWhereInput
    none?: RoomItemWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    roomNumber?: SortOrder
    price?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    price?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    roomNumber?: SortOrder
    price?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    roomNumber?: SortOrder
    price?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    price?: SortOrder
    floorNumber?: SortOrder
    roomTypeId?: SortOrder
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

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingRoomNumberEstCheckInEstCheckOutCompoundUniqueInput = {
    roomNumber: string
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    note?: SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    note?: SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    note?: SortOrder
    estCheckIn?: SortOrder
    estCheckOut?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type GuestListRelationFilter = {
    every?: GuestWhereInput
    some?: GuestWhereInput
    none?: GuestWhereInput
  }

  export type SessionReceiptNullableScalarRelationFilter = {
    is?: SessionReceiptWhereInput | null
    isNot?: SessionReceiptWhereInput | null
  }

  export type OtherReceiptListRelationFilter = {
    every?: OtherReceiptWhereInput
    some?: OtherReceiptWhereInput
    none?: OtherReceiptWhereInput
  }

  export type GuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtherReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionRoomNumberCheckedInAtCheckedOutAtCompoundUniqueInput = {
    roomNumber: string
    checkedInAt: Date | string
    checkedOutAt: Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    discount?: SortOrder
    numberOfExtraBeds?: SortOrder
    extraBedPrice?: SortOrder
    checkedInAt?: SortOrder
    checkedOutAt?: SortOrder
    note?: SortOrder
    isBreakfastIncluded?: SortOrder
    isActive?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    discount?: SortOrder
    numberOfExtraBeds?: SortOrder
    extraBedPrice?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    discount?: SortOrder
    numberOfExtraBeds?: SortOrder
    extraBedPrice?: SortOrder
    checkedInAt?: SortOrder
    checkedOutAt?: SortOrder
    note?: SortOrder
    isBreakfastIncluded?: SortOrder
    isActive?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    discount?: SortOrder
    numberOfExtraBeds?: SortOrder
    extraBedPrice?: SortOrder
    checkedInAt?: SortOrder
    checkedOutAt?: SortOrder
    note?: SortOrder
    isBreakfastIncluded?: SortOrder
    isActive?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    discount?: SortOrder
    numberOfExtraBeds?: SortOrder
    extraBedPrice?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type SessionReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issuedAt?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
  }

  export type SessionReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
  }

  export type SessionReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issuedAt?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
  }

  export type SessionReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issuedAt?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
  }

  export type SessionReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type GuestOrderByRelevanceInput = {
    fields: GuestOrderByRelevanceFieldEnum | GuestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNumber?: SortOrder
    sessionId?: SortOrder
  }

  export type GuestAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNumber?: SortOrder
    sessionId?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    nicCardNumber?: SortOrder
    sessionId?: SortOrder
  }

  export type GuestSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type OtherReceiptItemListRelationFilter = {
    every?: OtherReceiptItemWhereInput
    some?: OtherReceiptItemWhereInput
    none?: OtherReceiptItemWhereInput
  }

  export type OtherReceiptServiceListRelationFilter = {
    every?: OtherReceiptServiceWhereInput
    some?: OtherReceiptServiceWhereInput
    none?: OtherReceiptServiceWhereInput
  }

  export type OtherReceiptItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtherReceiptServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtherReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
    sessionId?: SortOrder
  }

  export type OtherReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
    sessionId?: SortOrder
  }

  export type OtherReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
    sessionId?: SortOrder
  }

  export type OtherReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
    sessionId?: SortOrder
  }

  export type OtherReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    amountOfPaid?: SortOrder
    discount?: SortOrder
    totalPrice?: SortOrder
    sessionId?: SortOrder
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
    quantity?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type RoomItemOrderByRelevanceInput = {
    fields: RoomItemOrderByRelevanceFieldEnum | RoomItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomItemRoomNumberItemIdCompoundUniqueInput = {
    roomNumber: string
    itemId: number
  }

  export type RoomItemCountOrderByAggregateInput = {
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomItemAvgOrderByAggregateInput = {
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomItemMaxOrderByAggregateInput = {
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomItemMinOrderByAggregateInput = {
    roomNumber?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomItemSumOrderByAggregateInput = {
    itemId?: SortOrder
    quantity?: SortOrder
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

  export type OtherReceiptScalarRelationFilter = {
    is?: OtherReceiptWhereInput
    isNot?: OtherReceiptWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type OtherReceiptServiceOtherReceiptIdServiceIdCompoundUniqueInput = {
    otherReceiptId: number
    serviceId: number
  }

  export type OtherReceiptServiceCountOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptServiceAvgOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptServiceMaxOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptServiceMinOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptServiceSumOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    serviceId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptItemOtherReceiptIdItemIdCompoundUniqueInput = {
    otherReceiptId: number
    itemId: number
  }

  export type OtherReceiptItemCountOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptItemAvgOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptItemMaxOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptItemMinOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type OtherReceiptItemSumOrderByAggregateInput = {
    otherReceiptId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type RoomTypeCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomsInput
    connect?: RoomTypeWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutRoomInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RoomItemCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomItemCreateWithoutRoomInput, RoomItemUncheckedCreateWithoutRoomInput> | RoomItemCreateWithoutRoomInput[] | RoomItemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutRoomInput | RoomItemCreateOrConnectWithoutRoomInput[]
    createMany?: RoomItemCreateManyRoomInputEnvelope
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput> | SessionCreateWithoutRoomInput[] | SessionUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutRoomInput | SessionCreateOrConnectWithoutRoomInput[]
    createMany?: SessionCreateManyRoomInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RoomItemUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomItemCreateWithoutRoomInput, RoomItemUncheckedCreateWithoutRoomInput> | RoomItemCreateWithoutRoomInput[] | RoomItemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutRoomInput | RoomItemCreateOrConnectWithoutRoomInput[]
    createMany?: RoomItemCreateManyRoomInputEnvelope
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomTypeUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomsInput
    upsert?: RoomTypeUpsertWithoutRoomsInput
    connect?: RoomTypeWhereUniqueInput
    update?: XOR<XOR<RoomTypeUpdateToOneWithWhereWithoutRoomsInput, RoomTypeUpdateWithoutRoomsInput>, RoomTypeUncheckedUpdateWithoutRoomsInput>
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

  export type RoomItemUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomItemCreateWithoutRoomInput, RoomItemUncheckedCreateWithoutRoomInput> | RoomItemCreateWithoutRoomInput[] | RoomItemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutRoomInput | RoomItemCreateOrConnectWithoutRoomInput[]
    upsert?: RoomItemUpsertWithWhereUniqueWithoutRoomInput | RoomItemUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomItemCreateManyRoomInputEnvelope
    set?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    disconnect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    delete?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    update?: RoomItemUpdateWithWhereUniqueWithoutRoomInput | RoomItemUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomItemUpdateManyWithWhereWithoutRoomInput | RoomItemUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomItemScalarWhereInput | RoomItemScalarWhereInput[]
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

  export type RoomItemUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomItemCreateWithoutRoomInput, RoomItemUncheckedCreateWithoutRoomInput> | RoomItemCreateWithoutRoomInput[] | RoomItemUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutRoomInput | RoomItemCreateOrConnectWithoutRoomInput[]
    upsert?: RoomItemUpsertWithWhereUniqueWithoutRoomInput | RoomItemUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomItemCreateManyRoomInputEnvelope
    set?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    disconnect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    delete?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    update?: RoomItemUpdateWithWhereUniqueWithoutRoomInput | RoomItemUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomItemUpdateManyWithWhereWithoutRoomInput | RoomItemUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomItemScalarWhereInput | RoomItemScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    connect?: RoomWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    upsert?: RoomUpsertWithoutBookingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingsInput, RoomUpdateWithoutBookingsInput>, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomCreateNestedOneWithoutSessionsInput = {
    create?: XOR<RoomCreateWithoutSessionsInput, RoomUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSessionsInput
    connect?: RoomWhereUniqueInput
  }

  export type GuestCreateNestedManyWithoutSessionInput = {
    create?: XOR<GuestCreateWithoutSessionInput, GuestUncheckedCreateWithoutSessionInput> | GuestCreateWithoutSessionInput[] | GuestUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionInput | GuestCreateOrConnectWithoutSessionInput[]
    createMany?: GuestCreateManySessionInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type SessionReceiptCreateNestedOneWithoutSessionInput = {
    create?: XOR<SessionReceiptCreateWithoutSessionInput, SessionReceiptUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionReceiptCreateOrConnectWithoutSessionInput
    connect?: SessionReceiptWhereUniqueInput
  }

  export type OtherReceiptCreateNestedManyWithoutSessionInput = {
    create?: XOR<OtherReceiptCreateWithoutSessionInput, OtherReceiptUncheckedCreateWithoutSessionInput> | OtherReceiptCreateWithoutSessionInput[] | OtherReceiptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutSessionInput | OtherReceiptCreateOrConnectWithoutSessionInput[]
    createMany?: OtherReceiptCreateManySessionInputEnvelope
    connect?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<GuestCreateWithoutSessionInput, GuestUncheckedCreateWithoutSessionInput> | GuestCreateWithoutSessionInput[] | GuestUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionInput | GuestCreateOrConnectWithoutSessionInput[]
    createMany?: GuestCreateManySessionInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type SessionReceiptUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<SessionReceiptCreateWithoutSessionInput, SessionReceiptUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionReceiptCreateOrConnectWithoutSessionInput
    connect?: SessionReceiptWhereUniqueInput
  }

  export type OtherReceiptUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<OtherReceiptCreateWithoutSessionInput, OtherReceiptUncheckedCreateWithoutSessionInput> | OtherReceiptCreateWithoutSessionInput[] | OtherReceiptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutSessionInput | OtherReceiptCreateOrConnectWithoutSessionInput[]
    createMany?: OtherReceiptCreateManySessionInputEnvelope
    connect?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoomUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<RoomCreateWithoutSessionsInput, RoomUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSessionsInput
    upsert?: RoomUpsertWithoutSessionsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutSessionsInput, RoomUpdateWithoutSessionsInput>, RoomUncheckedUpdateWithoutSessionsInput>
  }

  export type GuestUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GuestCreateWithoutSessionInput, GuestUncheckedCreateWithoutSessionInput> | GuestCreateWithoutSessionInput[] | GuestUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionInput | GuestCreateOrConnectWithoutSessionInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutSessionInput | GuestUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GuestCreateManySessionInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutSessionInput | GuestUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutSessionInput | GuestUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type SessionReceiptUpdateOneWithoutSessionNestedInput = {
    create?: XOR<SessionReceiptCreateWithoutSessionInput, SessionReceiptUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionReceiptCreateOrConnectWithoutSessionInput
    upsert?: SessionReceiptUpsertWithoutSessionInput
    disconnect?: SessionReceiptWhereInput | boolean
    delete?: SessionReceiptWhereInput | boolean
    connect?: SessionReceiptWhereUniqueInput
    update?: XOR<XOR<SessionReceiptUpdateToOneWithWhereWithoutSessionInput, SessionReceiptUpdateWithoutSessionInput>, SessionReceiptUncheckedUpdateWithoutSessionInput>
  }

  export type OtherReceiptUpdateManyWithoutSessionNestedInput = {
    create?: XOR<OtherReceiptCreateWithoutSessionInput, OtherReceiptUncheckedCreateWithoutSessionInput> | OtherReceiptCreateWithoutSessionInput[] | OtherReceiptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutSessionInput | OtherReceiptCreateOrConnectWithoutSessionInput[]
    upsert?: OtherReceiptUpsertWithWhereUniqueWithoutSessionInput | OtherReceiptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: OtherReceiptCreateManySessionInputEnvelope
    set?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    disconnect?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    delete?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    connect?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    update?: OtherReceiptUpdateWithWhereUniqueWithoutSessionInput | OtherReceiptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: OtherReceiptUpdateManyWithWhereWithoutSessionInput | OtherReceiptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: OtherReceiptScalarWhereInput | OtherReceiptScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GuestCreateWithoutSessionInput, GuestUncheckedCreateWithoutSessionInput> | GuestCreateWithoutSessionInput[] | GuestUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutSessionInput | GuestCreateOrConnectWithoutSessionInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutSessionInput | GuestUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GuestCreateManySessionInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutSessionInput | GuestUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutSessionInput | GuestUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type SessionReceiptUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<SessionReceiptCreateWithoutSessionInput, SessionReceiptUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SessionReceiptCreateOrConnectWithoutSessionInput
    upsert?: SessionReceiptUpsertWithoutSessionInput
    disconnect?: SessionReceiptWhereInput | boolean
    delete?: SessionReceiptWhereInput | boolean
    connect?: SessionReceiptWhereUniqueInput
    update?: XOR<XOR<SessionReceiptUpdateToOneWithWhereWithoutSessionInput, SessionReceiptUpdateWithoutSessionInput>, SessionReceiptUncheckedUpdateWithoutSessionInput>
  }

  export type OtherReceiptUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<OtherReceiptCreateWithoutSessionInput, OtherReceiptUncheckedCreateWithoutSessionInput> | OtherReceiptCreateWithoutSessionInput[] | OtherReceiptUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutSessionInput | OtherReceiptCreateOrConnectWithoutSessionInput[]
    upsert?: OtherReceiptUpsertWithWhereUniqueWithoutSessionInput | OtherReceiptUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: OtherReceiptCreateManySessionInputEnvelope
    set?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    disconnect?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    delete?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    connect?: OtherReceiptWhereUniqueInput | OtherReceiptWhereUniqueInput[]
    update?: OtherReceiptUpdateWithWhereUniqueWithoutSessionInput | OtherReceiptUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: OtherReceiptUpdateManyWithWhereWithoutSessionInput | OtherReceiptUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: OtherReceiptScalarWhereInput | OtherReceiptScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutReceiptInput = {
    create?: XOR<SessionCreateWithoutReceiptInput, SessionUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: SessionCreateOrConnectWithoutReceiptInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutReceiptNestedInput = {
    create?: XOR<SessionCreateWithoutReceiptInput, SessionUncheckedCreateWithoutReceiptInput>
    connectOrCreate?: SessionCreateOrConnectWithoutReceiptInput
    upsert?: SessionUpsertWithoutReceiptInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutReceiptInput, SessionUpdateWithoutReceiptInput>, SessionUncheckedUpdateWithoutReceiptInput>
  }

  export type SessionCreateNestedOneWithoutGuestsInput = {
    create?: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutGuestsInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneWithoutGuestsNestedInput = {
    create?: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutGuestsInput
    upsert?: SessionUpsertWithoutGuestsInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutGuestsInput, SessionUpdateWithoutGuestsInput>, SessionUncheckedUpdateWithoutGuestsInput>
  }

  export type SessionCreateNestedOneWithoutOtherReceiptsInput = {
    create?: XOR<SessionCreateWithoutOtherReceiptsInput, SessionUncheckedCreateWithoutOtherReceiptsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutOtherReceiptsInput
    connect?: SessionWhereUniqueInput
  }

  export type OtherReceiptItemCreateNestedManyWithoutOtherReceiptInput = {
    create?: XOR<OtherReceiptItemCreateWithoutOtherReceiptInput, OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptItemCreateWithoutOtherReceiptInput[] | OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput | OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput[]
    createMany?: OtherReceiptItemCreateManyOtherReceiptInputEnvelope
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
  }

  export type OtherReceiptServiceCreateNestedManyWithoutOtherReceiptInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptServiceCreateWithoutOtherReceiptInput[] | OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput | OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput[]
    createMany?: OtherReceiptServiceCreateManyOtherReceiptInputEnvelope
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
  }

  export type OtherReceiptItemUncheckedCreateNestedManyWithoutOtherReceiptInput = {
    create?: XOR<OtherReceiptItemCreateWithoutOtherReceiptInput, OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptItemCreateWithoutOtherReceiptInput[] | OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput | OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput[]
    createMany?: OtherReceiptItemCreateManyOtherReceiptInputEnvelope
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
  }

  export type OtherReceiptServiceUncheckedCreateNestedManyWithoutOtherReceiptInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptServiceCreateWithoutOtherReceiptInput[] | OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput | OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput[]
    createMany?: OtherReceiptServiceCreateManyOtherReceiptInputEnvelope
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
  }

  export type SessionUpdateOneRequiredWithoutOtherReceiptsNestedInput = {
    create?: XOR<SessionCreateWithoutOtherReceiptsInput, SessionUncheckedCreateWithoutOtherReceiptsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutOtherReceiptsInput
    upsert?: SessionUpsertWithoutOtherReceiptsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutOtherReceiptsInput, SessionUpdateWithoutOtherReceiptsInput>, SessionUncheckedUpdateWithoutOtherReceiptsInput>
  }

  export type OtherReceiptItemUpdateManyWithoutOtherReceiptNestedInput = {
    create?: XOR<OtherReceiptItemCreateWithoutOtherReceiptInput, OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptItemCreateWithoutOtherReceiptInput[] | OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput | OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput[]
    upsert?: OtherReceiptItemUpsertWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptItemUpsertWithWhereUniqueWithoutOtherReceiptInput[]
    createMany?: OtherReceiptItemCreateManyOtherReceiptInputEnvelope
    set?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    disconnect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    delete?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    update?: OtherReceiptItemUpdateWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptItemUpdateWithWhereUniqueWithoutOtherReceiptInput[]
    updateMany?: OtherReceiptItemUpdateManyWithWhereWithoutOtherReceiptInput | OtherReceiptItemUpdateManyWithWhereWithoutOtherReceiptInput[]
    deleteMany?: OtherReceiptItemScalarWhereInput | OtherReceiptItemScalarWhereInput[]
  }

  export type OtherReceiptServiceUpdateManyWithoutOtherReceiptNestedInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptServiceCreateWithoutOtherReceiptInput[] | OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput | OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput[]
    upsert?: OtherReceiptServiceUpsertWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptServiceUpsertWithWhereUniqueWithoutOtherReceiptInput[]
    createMany?: OtherReceiptServiceCreateManyOtherReceiptInputEnvelope
    set?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    disconnect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    delete?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    update?: OtherReceiptServiceUpdateWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptServiceUpdateWithWhereUniqueWithoutOtherReceiptInput[]
    updateMany?: OtherReceiptServiceUpdateManyWithWhereWithoutOtherReceiptInput | OtherReceiptServiceUpdateManyWithWhereWithoutOtherReceiptInput[]
    deleteMany?: OtherReceiptServiceScalarWhereInput | OtherReceiptServiceScalarWhereInput[]
  }

  export type OtherReceiptItemUncheckedUpdateManyWithoutOtherReceiptNestedInput = {
    create?: XOR<OtherReceiptItemCreateWithoutOtherReceiptInput, OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptItemCreateWithoutOtherReceiptInput[] | OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput | OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput[]
    upsert?: OtherReceiptItemUpsertWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptItemUpsertWithWhereUniqueWithoutOtherReceiptInput[]
    createMany?: OtherReceiptItemCreateManyOtherReceiptInputEnvelope
    set?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    disconnect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    delete?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    update?: OtherReceiptItemUpdateWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptItemUpdateWithWhereUniqueWithoutOtherReceiptInput[]
    updateMany?: OtherReceiptItemUpdateManyWithWhereWithoutOtherReceiptInput | OtherReceiptItemUpdateManyWithWhereWithoutOtherReceiptInput[]
    deleteMany?: OtherReceiptItemScalarWhereInput | OtherReceiptItemScalarWhereInput[]
  }

  export type OtherReceiptServiceUncheckedUpdateManyWithoutOtherReceiptNestedInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput> | OtherReceiptServiceCreateWithoutOtherReceiptInput[] | OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput | OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput[]
    upsert?: OtherReceiptServiceUpsertWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptServiceUpsertWithWhereUniqueWithoutOtherReceiptInput[]
    createMany?: OtherReceiptServiceCreateManyOtherReceiptInputEnvelope
    set?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    disconnect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    delete?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    update?: OtherReceiptServiceUpdateWithWhereUniqueWithoutOtherReceiptInput | OtherReceiptServiceUpdateWithWhereUniqueWithoutOtherReceiptInput[]
    updateMany?: OtherReceiptServiceUpdateManyWithWhereWithoutOtherReceiptInput | OtherReceiptServiceUpdateManyWithWhereWithoutOtherReceiptInput[]
    deleteMany?: OtherReceiptServiceScalarWhereInput | OtherReceiptServiceScalarWhereInput[]
  }

  export type RoomItemCreateNestedManyWithoutItemInput = {
    create?: XOR<RoomItemCreateWithoutItemInput, RoomItemUncheckedCreateWithoutItemInput> | RoomItemCreateWithoutItemInput[] | RoomItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutItemInput | RoomItemCreateOrConnectWithoutItemInput[]
    createMany?: RoomItemCreateManyItemInputEnvelope
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
  }

  export type OtherReceiptItemCreateNestedManyWithoutItemInput = {
    create?: XOR<OtherReceiptItemCreateWithoutItemInput, OtherReceiptItemUncheckedCreateWithoutItemInput> | OtherReceiptItemCreateWithoutItemInput[] | OtherReceiptItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutItemInput | OtherReceiptItemCreateOrConnectWithoutItemInput[]
    createMany?: OtherReceiptItemCreateManyItemInputEnvelope
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
  }

  export type RoomItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<RoomItemCreateWithoutItemInput, RoomItemUncheckedCreateWithoutItemInput> | RoomItemCreateWithoutItemInput[] | RoomItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutItemInput | RoomItemCreateOrConnectWithoutItemInput[]
    createMany?: RoomItemCreateManyItemInputEnvelope
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
  }

  export type OtherReceiptItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<OtherReceiptItemCreateWithoutItemInput, OtherReceiptItemUncheckedCreateWithoutItemInput> | OtherReceiptItemCreateWithoutItemInput[] | OtherReceiptItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutItemInput | OtherReceiptItemCreateOrConnectWithoutItemInput[]
    createMany?: OtherReceiptItemCreateManyItemInputEnvelope
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
  }

  export type RoomItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<RoomItemCreateWithoutItemInput, RoomItemUncheckedCreateWithoutItemInput> | RoomItemCreateWithoutItemInput[] | RoomItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutItemInput | RoomItemCreateOrConnectWithoutItemInput[]
    upsert?: RoomItemUpsertWithWhereUniqueWithoutItemInput | RoomItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RoomItemCreateManyItemInputEnvelope
    set?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    disconnect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    delete?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    update?: RoomItemUpdateWithWhereUniqueWithoutItemInput | RoomItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RoomItemUpdateManyWithWhereWithoutItemInput | RoomItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RoomItemScalarWhereInput | RoomItemScalarWhereInput[]
  }

  export type OtherReceiptItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<OtherReceiptItemCreateWithoutItemInput, OtherReceiptItemUncheckedCreateWithoutItemInput> | OtherReceiptItemCreateWithoutItemInput[] | OtherReceiptItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutItemInput | OtherReceiptItemCreateOrConnectWithoutItemInput[]
    upsert?: OtherReceiptItemUpsertWithWhereUniqueWithoutItemInput | OtherReceiptItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: OtherReceiptItemCreateManyItemInputEnvelope
    set?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    disconnect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    delete?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    update?: OtherReceiptItemUpdateWithWhereUniqueWithoutItemInput | OtherReceiptItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: OtherReceiptItemUpdateManyWithWhereWithoutItemInput | OtherReceiptItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: OtherReceiptItemScalarWhereInput | OtherReceiptItemScalarWhereInput[]
  }

  export type RoomItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<RoomItemCreateWithoutItemInput, RoomItemUncheckedCreateWithoutItemInput> | RoomItemCreateWithoutItemInput[] | RoomItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RoomItemCreateOrConnectWithoutItemInput | RoomItemCreateOrConnectWithoutItemInput[]
    upsert?: RoomItemUpsertWithWhereUniqueWithoutItemInput | RoomItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RoomItemCreateManyItemInputEnvelope
    set?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    disconnect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    delete?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    connect?: RoomItemWhereUniqueInput | RoomItemWhereUniqueInput[]
    update?: RoomItemUpdateWithWhereUniqueWithoutItemInput | RoomItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RoomItemUpdateManyWithWhereWithoutItemInput | RoomItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RoomItemScalarWhereInput | RoomItemScalarWhereInput[]
  }

  export type OtherReceiptItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<OtherReceiptItemCreateWithoutItemInput, OtherReceiptItemUncheckedCreateWithoutItemInput> | OtherReceiptItemCreateWithoutItemInput[] | OtherReceiptItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OtherReceiptItemCreateOrConnectWithoutItemInput | OtherReceiptItemCreateOrConnectWithoutItemInput[]
    upsert?: OtherReceiptItemUpsertWithWhereUniqueWithoutItemInput | OtherReceiptItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: OtherReceiptItemCreateManyItemInputEnvelope
    set?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    disconnect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    delete?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    connect?: OtherReceiptItemWhereUniqueInput | OtherReceiptItemWhereUniqueInput[]
    update?: OtherReceiptItemUpdateWithWhereUniqueWithoutItemInput | OtherReceiptItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: OtherReceiptItemUpdateManyWithWhereWithoutItemInput | OtherReceiptItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: OtherReceiptItemScalarWhereInput | OtherReceiptItemScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutRoomItemsInput = {
    create?: XOR<RoomCreateWithoutRoomItemsInput, RoomUncheckedCreateWithoutRoomItemsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomItemsInput
    connect?: RoomWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutRoomItemsInput = {
    create?: XOR<ItemCreateWithoutRoomItemsInput, ItemUncheckedCreateWithoutRoomItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRoomItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutRoomItemsNestedInput = {
    create?: XOR<RoomCreateWithoutRoomItemsInput, RoomUncheckedCreateWithoutRoomItemsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomItemsInput
    upsert?: RoomUpsertWithoutRoomItemsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomItemsInput, RoomUpdateWithoutRoomItemsInput>, RoomUncheckedUpdateWithoutRoomItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutRoomItemsNestedInput = {
    create?: XOR<ItemCreateWithoutRoomItemsInput, ItemUncheckedCreateWithoutRoomItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRoomItemsInput
    upsert?: ItemUpsertWithoutRoomItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutRoomItemsInput, ItemUpdateWithoutRoomItemsInput>, ItemUncheckedUpdateWithoutRoomItemsInput>
  }

  export type OtherReceiptServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutServiceInput, OtherReceiptServiceUncheckedCreateWithoutServiceInput> | OtherReceiptServiceCreateWithoutServiceInput[] | OtherReceiptServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutServiceInput | OtherReceiptServiceCreateOrConnectWithoutServiceInput[]
    createMany?: OtherReceiptServiceCreateManyServiceInputEnvelope
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
  }

  export type OtherReceiptServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutServiceInput, OtherReceiptServiceUncheckedCreateWithoutServiceInput> | OtherReceiptServiceCreateWithoutServiceInput[] | OtherReceiptServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutServiceInput | OtherReceiptServiceCreateOrConnectWithoutServiceInput[]
    createMany?: OtherReceiptServiceCreateManyServiceInputEnvelope
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
  }

  export type OtherReceiptServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutServiceInput, OtherReceiptServiceUncheckedCreateWithoutServiceInput> | OtherReceiptServiceCreateWithoutServiceInput[] | OtherReceiptServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutServiceInput | OtherReceiptServiceCreateOrConnectWithoutServiceInput[]
    upsert?: OtherReceiptServiceUpsertWithWhereUniqueWithoutServiceInput | OtherReceiptServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OtherReceiptServiceCreateManyServiceInputEnvelope
    set?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    disconnect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    delete?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    update?: OtherReceiptServiceUpdateWithWhereUniqueWithoutServiceInput | OtherReceiptServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OtherReceiptServiceUpdateManyWithWhereWithoutServiceInput | OtherReceiptServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OtherReceiptServiceScalarWhereInput | OtherReceiptServiceScalarWhereInput[]
  }

  export type OtherReceiptServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OtherReceiptServiceCreateWithoutServiceInput, OtherReceiptServiceUncheckedCreateWithoutServiceInput> | OtherReceiptServiceCreateWithoutServiceInput[] | OtherReceiptServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OtherReceiptServiceCreateOrConnectWithoutServiceInput | OtherReceiptServiceCreateOrConnectWithoutServiceInput[]
    upsert?: OtherReceiptServiceUpsertWithWhereUniqueWithoutServiceInput | OtherReceiptServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OtherReceiptServiceCreateManyServiceInputEnvelope
    set?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    disconnect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    delete?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    connect?: OtherReceiptServiceWhereUniqueInput | OtherReceiptServiceWhereUniqueInput[]
    update?: OtherReceiptServiceUpdateWithWhereUniqueWithoutServiceInput | OtherReceiptServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OtherReceiptServiceUpdateManyWithWhereWithoutServiceInput | OtherReceiptServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OtherReceiptServiceScalarWhereInput | OtherReceiptServiceScalarWhereInput[]
  }

  export type OtherReceiptCreateNestedOneWithoutServicesInput = {
    create?: XOR<OtherReceiptCreateWithoutServicesInput, OtherReceiptUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutServicesInput
    connect?: OtherReceiptWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutOtherReceiptServicesInput = {
    create?: XOR<ServiceCreateWithoutOtherReceiptServicesInput, ServiceUncheckedCreateWithoutOtherReceiptServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOtherReceiptServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type OtherReceiptUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<OtherReceiptCreateWithoutServicesInput, OtherReceiptUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutServicesInput
    upsert?: OtherReceiptUpsertWithoutServicesInput
    connect?: OtherReceiptWhereUniqueInput
    update?: XOR<XOR<OtherReceiptUpdateToOneWithWhereWithoutServicesInput, OtherReceiptUpdateWithoutServicesInput>, OtherReceiptUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutOtherReceiptServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutOtherReceiptServicesInput, ServiceUncheckedCreateWithoutOtherReceiptServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOtherReceiptServicesInput
    upsert?: ServiceUpsertWithoutOtherReceiptServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutOtherReceiptServicesInput, ServiceUpdateWithoutOtherReceiptServicesInput>, ServiceUncheckedUpdateWithoutOtherReceiptServicesInput>
  }

  export type OtherReceiptCreateNestedOneWithoutItemsInput = {
    create?: XOR<OtherReceiptCreateWithoutItemsInput, OtherReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutItemsInput
    connect?: OtherReceiptWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutOtherReceiptItemsInput = {
    create?: XOR<ItemCreateWithoutOtherReceiptItemsInput, ItemUncheckedCreateWithoutOtherReceiptItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOtherReceiptItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type OtherReceiptUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OtherReceiptCreateWithoutItemsInput, OtherReceiptUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OtherReceiptCreateOrConnectWithoutItemsInput
    upsert?: OtherReceiptUpsertWithoutItemsInput
    connect?: OtherReceiptWhereUniqueInput
    update?: XOR<XOR<OtherReceiptUpdateToOneWithWhereWithoutItemsInput, OtherReceiptUpdateWithoutItemsInput>, OtherReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutOtherReceiptItemsNestedInput = {
    create?: XOR<ItemCreateWithoutOtherReceiptItemsInput, ItemUncheckedCreateWithoutOtherReceiptItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOtherReceiptItemsInput
    upsert?: ItemUpsertWithoutOtherReceiptItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutOtherReceiptItemsInput, ItemUpdateWithoutOtherReceiptItemsInput>, ItemUncheckedUpdateWithoutOtherReceiptItemsInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type RoomCreateWithoutRoomTypeInput = {
    roomNumber: string
    price: number
    floorNumber: number
    sessions?: SessionCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomTypeInput = {
    roomNumber: string
    price: number
    floorNumber: number
    sessions?: SessionUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemUncheckedCreateNestedManyWithoutRoomInput
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

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    roomNumber?: StringFilter<"Room"> | string
    price?: FloatFilter<"Room"> | number
    floorNumber?: IntFilter<"Room"> | number
    roomTypeId?: IntFilter<"Room"> | number
  }

  export type RoomTypeCreateWithoutRoomsInput = {
    name: string
  }

  export type RoomTypeUncheckedCreateWithoutRoomsInput = {
    id?: number
    name: string
  }

  export type RoomTypeCreateOrConnectWithoutRoomsInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutRoomsInput, RoomTypeUncheckedCreateWithoutRoomsInput>
  }

  export type SessionCreateWithoutRoomInput = {
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    guests?: GuestCreateNestedManyWithoutSessionInput
    receipt?: SessionReceiptCreateNestedOneWithoutSessionInput
    otherReceipts?: OtherReceiptCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutRoomInput = {
    id?: number
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    guests?: GuestUncheckedCreateNestedManyWithoutSessionInput
    receipt?: SessionReceiptUncheckedCreateNestedOneWithoutSessionInput
    otherReceipts?: OtherReceiptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutRoomInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutRoomInput, SessionUncheckedCreateWithoutRoomInput>
  }

  export type SessionCreateManyRoomInputEnvelope = {
    data: SessionCreateManyRoomInput | SessionCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutRoomInput = {
    contactName: string
    contactPhone: string
    note?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type BookingUncheckedCreateWithoutRoomInput = {
    id?: number
    contactName: string
    contactPhone: string
    note?: string | null
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

  export type RoomItemCreateWithoutRoomInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutRoomItemsInput
  }

  export type RoomItemUncheckedCreateWithoutRoomInput = {
    itemId: number
    quantity: number
  }

  export type RoomItemCreateOrConnectWithoutRoomInput = {
    where: RoomItemWhereUniqueInput
    create: XOR<RoomItemCreateWithoutRoomInput, RoomItemUncheckedCreateWithoutRoomInput>
  }

  export type RoomItemCreateManyRoomInputEnvelope = {
    data: RoomItemCreateManyRoomInput | RoomItemCreateManyRoomInput[]
    skipDuplicates?: boolean
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
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTypeUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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
    discount?: FloatNullableFilter<"Session"> | number | null
    numberOfExtraBeds?: IntNullableFilter<"Session"> | number | null
    extraBedPrice?: FloatNullableFilter<"Session"> | number | null
    checkedInAt?: DateTimeFilter<"Session"> | Date | string
    checkedOutAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    note?: StringNullableFilter<"Session"> | string | null
    isBreakfastIncluded?: BoolFilter<"Session"> | boolean
    isActive?: BoolFilter<"Session"> | boolean
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
    contactName?: StringFilter<"Booking"> | string
    contactPhone?: StringFilter<"Booking"> | string
    note?: StringNullableFilter<"Booking"> | string | null
    estCheckIn?: DateTimeFilter<"Booking"> | Date | string
    estCheckOut?: DateTimeFilter<"Booking"> | Date | string
  }

  export type RoomItemUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomItemWhereUniqueInput
    update: XOR<RoomItemUpdateWithoutRoomInput, RoomItemUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomItemCreateWithoutRoomInput, RoomItemUncheckedCreateWithoutRoomInput>
  }

  export type RoomItemUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomItemWhereUniqueInput
    data: XOR<RoomItemUpdateWithoutRoomInput, RoomItemUncheckedUpdateWithoutRoomInput>
  }

  export type RoomItemUpdateManyWithWhereWithoutRoomInput = {
    where: RoomItemScalarWhereInput
    data: XOR<RoomItemUpdateManyMutationInput, RoomItemUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomItemScalarWhereInput = {
    AND?: RoomItemScalarWhereInput | RoomItemScalarWhereInput[]
    OR?: RoomItemScalarWhereInput[]
    NOT?: RoomItemScalarWhereInput | RoomItemScalarWhereInput[]
    roomNumber?: StringFilter<"RoomItem"> | string
    itemId?: IntFilter<"RoomItem"> | number
    quantity?: IntFilter<"RoomItem"> | number
  }

  export type RoomCreateWithoutBookingsInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    sessions?: SessionCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingsInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomTypeId: number
    sessions?: SessionUncheckedCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
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
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    sessions?: SessionUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutSessionsInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutSessionsInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomTypeId: number
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
    roomItems?: RoomItemUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutSessionsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutSessionsInput, RoomUncheckedCreateWithoutSessionsInput>
  }

  export type GuestCreateWithoutSessionInput = {
    name: string
    phone: string
    email?: string | null
    address?: string | null
    nicCardNumber?: string | null
  }

  export type GuestUncheckedCreateWithoutSessionInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    address?: string | null
    nicCardNumber?: string | null
  }

  export type GuestCreateOrConnectWithoutSessionInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutSessionInput, GuestUncheckedCreateWithoutSessionInput>
  }

  export type GuestCreateManySessionInputEnvelope = {
    data: GuestCreateManySessionInput | GuestCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SessionReceiptCreateWithoutSessionInput = {
    issuedAt: Date | string
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
  }

  export type SessionReceiptUncheckedCreateWithoutSessionInput = {
    id?: number
    issuedAt: Date | string
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
  }

  export type SessionReceiptCreateOrConnectWithoutSessionInput = {
    where: SessionReceiptWhereUniqueInput
    create: XOR<SessionReceiptCreateWithoutSessionInput, SessionReceiptUncheckedCreateWithoutSessionInput>
  }

  export type OtherReceiptCreateWithoutSessionInput = {
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    items?: OtherReceiptItemCreateNestedManyWithoutOtherReceiptInput
    services?: OtherReceiptServiceCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptUncheckedCreateWithoutSessionInput = {
    id?: number
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    items?: OtherReceiptItemUncheckedCreateNestedManyWithoutOtherReceiptInput
    services?: OtherReceiptServiceUncheckedCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptCreateOrConnectWithoutSessionInput = {
    where: OtherReceiptWhereUniqueInput
    create: XOR<OtherReceiptCreateWithoutSessionInput, OtherReceiptUncheckedCreateWithoutSessionInput>
  }

  export type OtherReceiptCreateManySessionInputEnvelope = {
    data: OtherReceiptCreateManySessionInput | OtherReceiptCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutSessionsInput = {
    update: XOR<RoomUpdateWithoutSessionsInput, RoomUncheckedUpdateWithoutSessionsInput>
    create: XOR<RoomCreateWithoutSessionsInput, RoomUncheckedCreateWithoutSessionsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutSessionsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutSessionsInput, RoomUncheckedUpdateWithoutSessionsInput>
  }

  export type RoomUpdateWithoutSessionsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutSessionsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type GuestUpsertWithWhereUniqueWithoutSessionInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutSessionInput, GuestUncheckedUpdateWithoutSessionInput>
    create: XOR<GuestCreateWithoutSessionInput, GuestUncheckedCreateWithoutSessionInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutSessionInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutSessionInput, GuestUncheckedUpdateWithoutSessionInput>
  }

  export type GuestUpdateManyWithWhereWithoutSessionInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutSessionInput>
  }

  export type GuestScalarWhereInput = {
    AND?: GuestScalarWhereInput | GuestScalarWhereInput[]
    OR?: GuestScalarWhereInput[]
    NOT?: GuestScalarWhereInput | GuestScalarWhereInput[]
    id?: IntFilter<"Guest"> | number
    name?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    address?: StringNullableFilter<"Guest"> | string | null
    nicCardNumber?: StringNullableFilter<"Guest"> | string | null
    sessionId?: IntNullableFilter<"Guest"> | number | null
  }

  export type SessionReceiptUpsertWithoutSessionInput = {
    update: XOR<SessionReceiptUpdateWithoutSessionInput, SessionReceiptUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionReceiptCreateWithoutSessionInput, SessionReceiptUncheckedCreateWithoutSessionInput>
    where?: SessionReceiptWhereInput
  }

  export type SessionReceiptUpdateToOneWithWhereWithoutSessionInput = {
    where?: SessionReceiptWhereInput
    data: XOR<SessionReceiptUpdateWithoutSessionInput, SessionReceiptUncheckedUpdateWithoutSessionInput>
  }

  export type SessionReceiptUpdateWithoutSessionInput = {
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionReceiptUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OtherReceiptUpsertWithWhereUniqueWithoutSessionInput = {
    where: OtherReceiptWhereUniqueInput
    update: XOR<OtherReceiptUpdateWithoutSessionInput, OtherReceiptUncheckedUpdateWithoutSessionInput>
    create: XOR<OtherReceiptCreateWithoutSessionInput, OtherReceiptUncheckedCreateWithoutSessionInput>
  }

  export type OtherReceiptUpdateWithWhereUniqueWithoutSessionInput = {
    where: OtherReceiptWhereUniqueInput
    data: XOR<OtherReceiptUpdateWithoutSessionInput, OtherReceiptUncheckedUpdateWithoutSessionInput>
  }

  export type OtherReceiptUpdateManyWithWhereWithoutSessionInput = {
    where: OtherReceiptScalarWhereInput
    data: XOR<OtherReceiptUpdateManyMutationInput, OtherReceiptUncheckedUpdateManyWithoutSessionInput>
  }

  export type OtherReceiptScalarWhereInput = {
    AND?: OtherReceiptScalarWhereInput | OtherReceiptScalarWhereInput[]
    OR?: OtherReceiptScalarWhereInput[]
    NOT?: OtherReceiptScalarWhereInput | OtherReceiptScalarWhereInput[]
    id?: IntFilter<"OtherReceipt"> | number
    amountOfPaid?: FloatFilter<"OtherReceipt"> | number
    discount?: FloatNullableFilter<"OtherReceipt"> | number | null
    totalPrice?: FloatFilter<"OtherReceipt"> | number
    sessionId?: IntFilter<"OtherReceipt"> | number
  }

  export type SessionCreateWithoutReceiptInput = {
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    room: RoomCreateNestedOneWithoutSessionsInput
    guests?: GuestCreateNestedManyWithoutSessionInput
    otherReceipts?: OtherReceiptCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutReceiptInput = {
    id?: number
    roomNumber: string
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    guests?: GuestUncheckedCreateNestedManyWithoutSessionInput
    otherReceipts?: OtherReceiptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutReceiptInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutReceiptInput, SessionUncheckedCreateWithoutReceiptInput>
  }

  export type SessionUpsertWithoutReceiptInput = {
    update: XOR<SessionUpdateWithoutReceiptInput, SessionUncheckedUpdateWithoutReceiptInput>
    create: XOR<SessionCreateWithoutReceiptInput, SessionUncheckedCreateWithoutReceiptInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutReceiptInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutReceiptInput, SessionUncheckedUpdateWithoutReceiptInput>
  }

  export type SessionUpdateWithoutReceiptInput = {
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    room?: RoomUpdateOneRequiredWithoutSessionsNestedInput
    guests?: GuestUpdateManyWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    guests?: GuestUncheckedUpdateManyWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutGuestsInput = {
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    room: RoomCreateNestedOneWithoutSessionsInput
    receipt?: SessionReceiptCreateNestedOneWithoutSessionInput
    otherReceipts?: OtherReceiptCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutGuestsInput = {
    id?: number
    roomNumber: string
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    receipt?: SessionReceiptUncheckedCreateNestedOneWithoutSessionInput
    otherReceipts?: OtherReceiptUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutGuestsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput>
  }

  export type SessionUpsertWithoutGuestsInput = {
    update: XOR<SessionUpdateWithoutGuestsInput, SessionUncheckedUpdateWithoutGuestsInput>
    create: XOR<SessionCreateWithoutGuestsInput, SessionUncheckedCreateWithoutGuestsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutGuestsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutGuestsInput, SessionUncheckedUpdateWithoutGuestsInput>
  }

  export type SessionUpdateWithoutGuestsInput = {
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    room?: RoomUpdateOneRequiredWithoutSessionsNestedInput
    receipt?: SessionReceiptUpdateOneWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutGuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    receipt?: SessionReceiptUncheckedUpdateOneWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutOtherReceiptsInput = {
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    room: RoomCreateNestedOneWithoutSessionsInput
    guests?: GuestCreateNestedManyWithoutSessionInput
    receipt?: SessionReceiptCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutOtherReceiptsInput = {
    id?: number
    roomNumber: string
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
    guests?: GuestUncheckedCreateNestedManyWithoutSessionInput
    receipt?: SessionReceiptUncheckedCreateNestedOneWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutOtherReceiptsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutOtherReceiptsInput, SessionUncheckedCreateWithoutOtherReceiptsInput>
  }

  export type OtherReceiptItemCreateWithoutOtherReceiptInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutOtherReceiptItemsInput
  }

  export type OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput = {
    itemId: number
    quantity: number
  }

  export type OtherReceiptItemCreateOrConnectWithoutOtherReceiptInput = {
    where: OtherReceiptItemWhereUniqueInput
    create: XOR<OtherReceiptItemCreateWithoutOtherReceiptInput, OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput>
  }

  export type OtherReceiptItemCreateManyOtherReceiptInputEnvelope = {
    data: OtherReceiptItemCreateManyOtherReceiptInput | OtherReceiptItemCreateManyOtherReceiptInput[]
    skipDuplicates?: boolean
  }

  export type OtherReceiptServiceCreateWithoutOtherReceiptInput = {
    quantity: number
    service: ServiceCreateNestedOneWithoutOtherReceiptServicesInput
  }

  export type OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput = {
    serviceId: number
    quantity: number
  }

  export type OtherReceiptServiceCreateOrConnectWithoutOtherReceiptInput = {
    where: OtherReceiptServiceWhereUniqueInput
    create: XOR<OtherReceiptServiceCreateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput>
  }

  export type OtherReceiptServiceCreateManyOtherReceiptInputEnvelope = {
    data: OtherReceiptServiceCreateManyOtherReceiptInput | OtherReceiptServiceCreateManyOtherReceiptInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithoutOtherReceiptsInput = {
    update: XOR<SessionUpdateWithoutOtherReceiptsInput, SessionUncheckedUpdateWithoutOtherReceiptsInput>
    create: XOR<SessionCreateWithoutOtherReceiptsInput, SessionUncheckedCreateWithoutOtherReceiptsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutOtherReceiptsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutOtherReceiptsInput, SessionUncheckedUpdateWithoutOtherReceiptsInput>
  }

  export type SessionUpdateWithoutOtherReceiptsInput = {
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    room?: RoomUpdateOneRequiredWithoutSessionsNestedInput
    guests?: GuestUpdateManyWithoutSessionNestedInput
    receipt?: SessionReceiptUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutOtherReceiptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomNumber?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    guests?: GuestUncheckedUpdateManyWithoutSessionNestedInput
    receipt?: SessionReceiptUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type OtherReceiptItemUpsertWithWhereUniqueWithoutOtherReceiptInput = {
    where: OtherReceiptItemWhereUniqueInput
    update: XOR<OtherReceiptItemUpdateWithoutOtherReceiptInput, OtherReceiptItemUncheckedUpdateWithoutOtherReceiptInput>
    create: XOR<OtherReceiptItemCreateWithoutOtherReceiptInput, OtherReceiptItemUncheckedCreateWithoutOtherReceiptInput>
  }

  export type OtherReceiptItemUpdateWithWhereUniqueWithoutOtherReceiptInput = {
    where: OtherReceiptItemWhereUniqueInput
    data: XOR<OtherReceiptItemUpdateWithoutOtherReceiptInput, OtherReceiptItemUncheckedUpdateWithoutOtherReceiptInput>
  }

  export type OtherReceiptItemUpdateManyWithWhereWithoutOtherReceiptInput = {
    where: OtherReceiptItemScalarWhereInput
    data: XOR<OtherReceiptItemUpdateManyMutationInput, OtherReceiptItemUncheckedUpdateManyWithoutOtherReceiptInput>
  }

  export type OtherReceiptItemScalarWhereInput = {
    AND?: OtherReceiptItemScalarWhereInput | OtherReceiptItemScalarWhereInput[]
    OR?: OtherReceiptItemScalarWhereInput[]
    NOT?: OtherReceiptItemScalarWhereInput | OtherReceiptItemScalarWhereInput[]
    otherReceiptId?: IntFilter<"OtherReceiptItem"> | number
    itemId?: IntFilter<"OtherReceiptItem"> | number
    quantity?: IntFilter<"OtherReceiptItem"> | number
  }

  export type OtherReceiptServiceUpsertWithWhereUniqueWithoutOtherReceiptInput = {
    where: OtherReceiptServiceWhereUniqueInput
    update: XOR<OtherReceiptServiceUpdateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedUpdateWithoutOtherReceiptInput>
    create: XOR<OtherReceiptServiceCreateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedCreateWithoutOtherReceiptInput>
  }

  export type OtherReceiptServiceUpdateWithWhereUniqueWithoutOtherReceiptInput = {
    where: OtherReceiptServiceWhereUniqueInput
    data: XOR<OtherReceiptServiceUpdateWithoutOtherReceiptInput, OtherReceiptServiceUncheckedUpdateWithoutOtherReceiptInput>
  }

  export type OtherReceiptServiceUpdateManyWithWhereWithoutOtherReceiptInput = {
    where: OtherReceiptServiceScalarWhereInput
    data: XOR<OtherReceiptServiceUpdateManyMutationInput, OtherReceiptServiceUncheckedUpdateManyWithoutOtherReceiptInput>
  }

  export type OtherReceiptServiceScalarWhereInput = {
    AND?: OtherReceiptServiceScalarWhereInput | OtherReceiptServiceScalarWhereInput[]
    OR?: OtherReceiptServiceScalarWhereInput[]
    NOT?: OtherReceiptServiceScalarWhereInput | OtherReceiptServiceScalarWhereInput[]
    otherReceiptId?: IntFilter<"OtherReceiptService"> | number
    serviceId?: IntFilter<"OtherReceiptService"> | number
    quantity?: IntFilter<"OtherReceiptService"> | number
  }

  export type RoomItemCreateWithoutItemInput = {
    quantity: number
    room: RoomCreateNestedOneWithoutRoomItemsInput
  }

  export type RoomItemUncheckedCreateWithoutItemInput = {
    roomNumber: string
    quantity: number
  }

  export type RoomItemCreateOrConnectWithoutItemInput = {
    where: RoomItemWhereUniqueInput
    create: XOR<RoomItemCreateWithoutItemInput, RoomItemUncheckedCreateWithoutItemInput>
  }

  export type RoomItemCreateManyItemInputEnvelope = {
    data: RoomItemCreateManyItemInput | RoomItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type OtherReceiptItemCreateWithoutItemInput = {
    quantity: number
    otherReceipt: OtherReceiptCreateNestedOneWithoutItemsInput
  }

  export type OtherReceiptItemUncheckedCreateWithoutItemInput = {
    otherReceiptId: number
    quantity: number
  }

  export type OtherReceiptItemCreateOrConnectWithoutItemInput = {
    where: OtherReceiptItemWhereUniqueInput
    create: XOR<OtherReceiptItemCreateWithoutItemInput, OtherReceiptItemUncheckedCreateWithoutItemInput>
  }

  export type OtherReceiptItemCreateManyItemInputEnvelope = {
    data: OtherReceiptItemCreateManyItemInput | OtherReceiptItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type RoomItemUpsertWithWhereUniqueWithoutItemInput = {
    where: RoomItemWhereUniqueInput
    update: XOR<RoomItemUpdateWithoutItemInput, RoomItemUncheckedUpdateWithoutItemInput>
    create: XOR<RoomItemCreateWithoutItemInput, RoomItemUncheckedCreateWithoutItemInput>
  }

  export type RoomItemUpdateWithWhereUniqueWithoutItemInput = {
    where: RoomItemWhereUniqueInput
    data: XOR<RoomItemUpdateWithoutItemInput, RoomItemUncheckedUpdateWithoutItemInput>
  }

  export type RoomItemUpdateManyWithWhereWithoutItemInput = {
    where: RoomItemScalarWhereInput
    data: XOR<RoomItemUpdateManyMutationInput, RoomItemUncheckedUpdateManyWithoutItemInput>
  }

  export type OtherReceiptItemUpsertWithWhereUniqueWithoutItemInput = {
    where: OtherReceiptItemWhereUniqueInput
    update: XOR<OtherReceiptItemUpdateWithoutItemInput, OtherReceiptItemUncheckedUpdateWithoutItemInput>
    create: XOR<OtherReceiptItemCreateWithoutItemInput, OtherReceiptItemUncheckedCreateWithoutItemInput>
  }

  export type OtherReceiptItemUpdateWithWhereUniqueWithoutItemInput = {
    where: OtherReceiptItemWhereUniqueInput
    data: XOR<OtherReceiptItemUpdateWithoutItemInput, OtherReceiptItemUncheckedUpdateWithoutItemInput>
  }

  export type OtherReceiptItemUpdateManyWithWhereWithoutItemInput = {
    where: OtherReceiptItemScalarWhereInput
    data: XOR<OtherReceiptItemUpdateManyMutationInput, OtherReceiptItemUncheckedUpdateManyWithoutItemInput>
  }

  export type RoomCreateWithoutRoomItemsInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomType: RoomTypeCreateNestedOneWithoutRoomsInput
    sessions?: SessionCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomItemsInput = {
    roomNumber: string
    price: number
    floorNumber: number
    roomTypeId: number
    sessions?: SessionUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomItemsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomItemsInput, RoomUncheckedCreateWithoutRoomItemsInput>
  }

  export type ItemCreateWithoutRoomItemsInput = {
    name: string
    price: number
    quantity: number
    otherReceiptItems?: OtherReceiptItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutRoomItemsInput = {
    id?: number
    name: string
    price: number
    quantity: number
    otherReceiptItems?: OtherReceiptItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutRoomItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutRoomItemsInput, ItemUncheckedCreateWithoutRoomItemsInput>
  }

  export type RoomUpsertWithoutRoomItemsInput = {
    update: XOR<RoomUpdateWithoutRoomItemsInput, RoomUncheckedUpdateWithoutRoomItemsInput>
    create: XOR<RoomCreateWithoutRoomItemsInput, RoomUncheckedCreateWithoutRoomItemsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomItemsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomItemsInput, RoomUncheckedUpdateWithoutRoomItemsInput>
  }

  export type RoomUpdateWithoutRoomItemsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomsNestedInput
    sessions?: SessionUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomItemsInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    roomTypeId?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ItemUpsertWithoutRoomItemsInput = {
    update: XOR<ItemUpdateWithoutRoomItemsInput, ItemUncheckedUpdateWithoutRoomItemsInput>
    create: XOR<ItemCreateWithoutRoomItemsInput, ItemUncheckedCreateWithoutRoomItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutRoomItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutRoomItemsInput, ItemUncheckedUpdateWithoutRoomItemsInput>
  }

  export type ItemUpdateWithoutRoomItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    otherReceiptItems?: OtherReceiptItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutRoomItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    otherReceiptItems?: OtherReceiptItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type OtherReceiptServiceCreateWithoutServiceInput = {
    quantity: number
    otherReceipt: OtherReceiptCreateNestedOneWithoutServicesInput
  }

  export type OtherReceiptServiceUncheckedCreateWithoutServiceInput = {
    otherReceiptId: number
    quantity: number
  }

  export type OtherReceiptServiceCreateOrConnectWithoutServiceInput = {
    where: OtherReceiptServiceWhereUniqueInput
    create: XOR<OtherReceiptServiceCreateWithoutServiceInput, OtherReceiptServiceUncheckedCreateWithoutServiceInput>
  }

  export type OtherReceiptServiceCreateManyServiceInputEnvelope = {
    data: OtherReceiptServiceCreateManyServiceInput | OtherReceiptServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type OtherReceiptServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: OtherReceiptServiceWhereUniqueInput
    update: XOR<OtherReceiptServiceUpdateWithoutServiceInput, OtherReceiptServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<OtherReceiptServiceCreateWithoutServiceInput, OtherReceiptServiceUncheckedCreateWithoutServiceInput>
  }

  export type OtherReceiptServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: OtherReceiptServiceWhereUniqueInput
    data: XOR<OtherReceiptServiceUpdateWithoutServiceInput, OtherReceiptServiceUncheckedUpdateWithoutServiceInput>
  }

  export type OtherReceiptServiceUpdateManyWithWhereWithoutServiceInput = {
    where: OtherReceiptServiceScalarWhereInput
    data: XOR<OtherReceiptServiceUpdateManyMutationInput, OtherReceiptServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type OtherReceiptCreateWithoutServicesInput = {
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    session: SessionCreateNestedOneWithoutOtherReceiptsInput
    items?: OtherReceiptItemCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptUncheckedCreateWithoutServicesInput = {
    id?: number
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    sessionId: number
    items?: OtherReceiptItemUncheckedCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptCreateOrConnectWithoutServicesInput = {
    where: OtherReceiptWhereUniqueInput
    create: XOR<OtherReceiptCreateWithoutServicesInput, OtherReceiptUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutOtherReceiptServicesInput = {
    name: string
    price: number
  }

  export type ServiceUncheckedCreateWithoutOtherReceiptServicesInput = {
    id?: number
    name: string
    price: number
  }

  export type ServiceCreateOrConnectWithoutOtherReceiptServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOtherReceiptServicesInput, ServiceUncheckedCreateWithoutOtherReceiptServicesInput>
  }

  export type OtherReceiptUpsertWithoutServicesInput = {
    update: XOR<OtherReceiptUpdateWithoutServicesInput, OtherReceiptUncheckedUpdateWithoutServicesInput>
    create: XOR<OtherReceiptCreateWithoutServicesInput, OtherReceiptUncheckedCreateWithoutServicesInput>
    where?: OtherReceiptWhereInput
  }

  export type OtherReceiptUpdateToOneWithWhereWithoutServicesInput = {
    where?: OtherReceiptWhereInput
    data: XOR<OtherReceiptUpdateWithoutServicesInput, OtherReceiptUncheckedUpdateWithoutServicesInput>
  }

  export type OtherReceiptUpdateWithoutServicesInput = {
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutOtherReceiptsNestedInput
    items?: OtherReceiptItemUpdateManyWithoutOtherReceiptNestedInput
  }

  export type OtherReceiptUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    items?: OtherReceiptItemUncheckedUpdateManyWithoutOtherReceiptNestedInput
  }

  export type ServiceUpsertWithoutOtherReceiptServicesInput = {
    update: XOR<ServiceUpdateWithoutOtherReceiptServicesInput, ServiceUncheckedUpdateWithoutOtherReceiptServicesInput>
    create: XOR<ServiceCreateWithoutOtherReceiptServicesInput, ServiceUncheckedCreateWithoutOtherReceiptServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutOtherReceiptServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutOtherReceiptServicesInput, ServiceUncheckedUpdateWithoutOtherReceiptServicesInput>
  }

  export type ServiceUpdateWithoutOtherReceiptServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceUncheckedUpdateWithoutOtherReceiptServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OtherReceiptCreateWithoutItemsInput = {
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    session: SessionCreateNestedOneWithoutOtherReceiptsInput
    services?: OtherReceiptServiceCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptUncheckedCreateWithoutItemsInput = {
    id?: number
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
    sessionId: number
    services?: OtherReceiptServiceUncheckedCreateNestedManyWithoutOtherReceiptInput
  }

  export type OtherReceiptCreateOrConnectWithoutItemsInput = {
    where: OtherReceiptWhereUniqueInput
    create: XOR<OtherReceiptCreateWithoutItemsInput, OtherReceiptUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutOtherReceiptItemsInput = {
    name: string
    price: number
    quantity: number
    roomItems?: RoomItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutOtherReceiptItemsInput = {
    id?: number
    name: string
    price: number
    quantity: number
    roomItems?: RoomItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutOtherReceiptItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOtherReceiptItemsInput, ItemUncheckedCreateWithoutOtherReceiptItemsInput>
  }

  export type OtherReceiptUpsertWithoutItemsInput = {
    update: XOR<OtherReceiptUpdateWithoutItemsInput, OtherReceiptUncheckedUpdateWithoutItemsInput>
    create: XOR<OtherReceiptCreateWithoutItemsInput, OtherReceiptUncheckedCreateWithoutItemsInput>
    where?: OtherReceiptWhereInput
  }

  export type OtherReceiptUpdateToOneWithWhereWithoutItemsInput = {
    where?: OtherReceiptWhereInput
    data: XOR<OtherReceiptUpdateWithoutItemsInput, OtherReceiptUncheckedUpdateWithoutItemsInput>
  }

  export type OtherReceiptUpdateWithoutItemsInput = {
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutOtherReceiptsNestedInput
    services?: OtherReceiptServiceUpdateManyWithoutOtherReceiptNestedInput
  }

  export type OtherReceiptUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    services?: OtherReceiptServiceUncheckedUpdateManyWithoutOtherReceiptNestedInput
  }

  export type ItemUpsertWithoutOtherReceiptItemsInput = {
    update: XOR<ItemUpdateWithoutOtherReceiptItemsInput, ItemUncheckedUpdateWithoutOtherReceiptItemsInput>
    create: XOR<ItemCreateWithoutOtherReceiptItemsInput, ItemUncheckedCreateWithoutOtherReceiptItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutOtherReceiptItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutOtherReceiptItemsInput, ItemUncheckedUpdateWithoutOtherReceiptItemsInput>
  }

  export type ItemUpdateWithoutOtherReceiptItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    roomItems?: RoomItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutOtherReceiptItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    roomItems?: RoomItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type RoomCreateManyRoomTypeInput = {
    roomNumber: string
    price: number
    floorNumber: number
  }

  export type RoomUpdateWithoutRoomTypeInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomTypeInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
    roomItems?: RoomItemUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutRoomTypeInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateManyRoomInput = {
    id?: number
    discount?: number | null
    numberOfExtraBeds?: number | null
    extraBedPrice?: number | null
    checkedInAt: Date | string
    checkedOutAt?: Date | string | null
    note?: string | null
    isBreakfastIncluded?: boolean
    isActive?: boolean
  }

  export type BookingCreateManyRoomInput = {
    id?: number
    contactName: string
    contactPhone: string
    note?: string | null
    estCheckIn: Date | string
    estCheckOut: Date | string
  }

  export type RoomItemCreateManyRoomInput = {
    itemId: number
    quantity: number
  }

  export type SessionUpdateWithoutRoomInput = {
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    guests?: GuestUpdateManyWithoutSessionNestedInput
    receipt?: SessionReceiptUpdateOneWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    guests?: GuestUncheckedUpdateManyWithoutSessionNestedInput
    receipt?: SessionReceiptUncheckedUpdateOneWithoutSessionNestedInput
    otherReceipts?: OtherReceiptUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfExtraBeds?: NullableIntFieldUpdateOperationsInput | number | null
    extraBedPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    checkedInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    isBreakfastIncluded?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUpdateWithoutRoomInput = {
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    contactName?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    estCheckIn?: DateTimeFieldUpdateOperationsInput | Date | string
    estCheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomItemUpdateWithoutRoomInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutRoomItemsNestedInput
  }

  export type RoomItemUncheckedUpdateWithoutRoomInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomItemUncheckedUpdateManyWithoutRoomInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type GuestCreateManySessionInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    address?: string | null
    nicCardNumber?: string | null
  }

  export type OtherReceiptCreateManySessionInput = {
    id?: number
    amountOfPaid: number
    discount?: number | null
    totalPrice: number
  }

  export type GuestUpdateWithoutSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nicCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nicCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuestUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nicCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtherReceiptUpdateWithoutSessionInput = {
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    items?: OtherReceiptItemUpdateManyWithoutOtherReceiptNestedInput
    services?: OtherReceiptServiceUpdateManyWithoutOtherReceiptNestedInput
  }

  export type OtherReceiptUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    items?: OtherReceiptItemUncheckedUpdateManyWithoutOtherReceiptNestedInput
    services?: OtherReceiptServiceUncheckedUpdateManyWithoutOtherReceiptNestedInput
  }

  export type OtherReceiptUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountOfPaid?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OtherReceiptItemCreateManyOtherReceiptInput = {
    itemId: number
    quantity: number
  }

  export type OtherReceiptServiceCreateManyOtherReceiptInput = {
    serviceId: number
    quantity: number
  }

  export type OtherReceiptItemUpdateWithoutOtherReceiptInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutOtherReceiptItemsNestedInput
  }

  export type OtherReceiptItemUncheckedUpdateWithoutOtherReceiptInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptItemUncheckedUpdateManyWithoutOtherReceiptInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptServiceUpdateWithoutOtherReceiptInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    service?: ServiceUpdateOneRequiredWithoutOtherReceiptServicesNestedInput
  }

  export type OtherReceiptServiceUncheckedUpdateWithoutOtherReceiptInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptServiceUncheckedUpdateManyWithoutOtherReceiptInput = {
    serviceId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomItemCreateManyItemInput = {
    roomNumber: string
    quantity: number
  }

  export type OtherReceiptItemCreateManyItemInput = {
    otherReceiptId: number
    quantity: number
  }

  export type RoomItemUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutRoomItemsNestedInput
  }

  export type RoomItemUncheckedUpdateWithoutItemInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RoomItemUncheckedUpdateManyWithoutItemInput = {
    roomNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptItemUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    otherReceipt?: OtherReceiptUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OtherReceiptItemUncheckedUpdateWithoutItemInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptItemUncheckedUpdateManyWithoutItemInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptServiceCreateManyServiceInput = {
    otherReceiptId: number
    quantity: number
  }

  export type OtherReceiptServiceUpdateWithoutServiceInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    otherReceipt?: OtherReceiptUpdateOneRequiredWithoutServicesNestedInput
  }

  export type OtherReceiptServiceUncheckedUpdateWithoutServiceInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OtherReceiptServiceUncheckedUpdateManyWithoutServiceInput = {
    otherReceiptId?: IntFieldUpdateOperationsInput | number
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