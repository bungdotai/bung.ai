
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Lift
 * 
 */
export type Lift = $Result.DefaultSelection<Prisma.$LiftPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model InviteCode
 * 
 */
export type InviteCode = $Result.DefaultSelection<Prisma.$InviteCodePayload>
/**
 * Model DailyUpdate
 * 
 */
export type DailyUpdate = $Result.DefaultSelection<Prisma.$DailyUpdatePayload>
/**
 * Model PushSubscription
 * 
 */
export type PushSubscription = $Result.DefaultSelection<Prisma.$PushSubscriptionPayload>
/**
 * Model UserCoachSettings
 * 
 */
export type UserCoachSettings = $Result.DefaultSelection<Prisma.$UserCoachSettingsPayload>
/**
 * Model CoachingMessage
 * 
 */
export type CoachingMessage = $Result.DefaultSelection<Prisma.$CoachingMessagePayload>
/**
 * Model PendingCoaching
 * 
 */
export type PendingCoaching = $Result.DefaultSelection<Prisma.$PendingCoachingPayload>
/**
 * Model PendingNotification
 * 
 */
export type PendingNotification = $Result.DefaultSelection<Prisma.$PendingNotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.lift`: Exposes CRUD operations for the **Lift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lifts
    * const lifts = await prisma.lift.findMany()
    * ```
    */
  get lift(): Prisma.LiftDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs>;

  /**
   * `prisma.inviteCode`: Exposes CRUD operations for the **InviteCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InviteCodes
    * const inviteCodes = await prisma.inviteCode.findMany()
    * ```
    */
  get inviteCode(): Prisma.InviteCodeDelegate<ExtArgs>;

  /**
   * `prisma.dailyUpdate`: Exposes CRUD operations for the **DailyUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyUpdates
    * const dailyUpdates = await prisma.dailyUpdate.findMany()
    * ```
    */
  get dailyUpdate(): Prisma.DailyUpdateDelegate<ExtArgs>;

  /**
   * `prisma.pushSubscription`: Exposes CRUD operations for the **PushSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushSubscriptions
    * const pushSubscriptions = await prisma.pushSubscription.findMany()
    * ```
    */
  get pushSubscription(): Prisma.PushSubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.userCoachSettings`: Exposes CRUD operations for the **UserCoachSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCoachSettings
    * const userCoachSettings = await prisma.userCoachSettings.findMany()
    * ```
    */
  get userCoachSettings(): Prisma.UserCoachSettingsDelegate<ExtArgs>;

  /**
   * `prisma.coachingMessage`: Exposes CRUD operations for the **CoachingMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachingMessages
    * const coachingMessages = await prisma.coachingMessage.findMany()
    * ```
    */
  get coachingMessage(): Prisma.CoachingMessageDelegate<ExtArgs>;

  /**
   * `prisma.pendingCoaching`: Exposes CRUD operations for the **PendingCoaching** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingCoachings
    * const pendingCoachings = await prisma.pendingCoaching.findMany()
    * ```
    */
  get pendingCoaching(): Prisma.PendingCoachingDelegate<ExtArgs>;

  /**
   * `prisma.pendingNotification`: Exposes CRUD operations for the **PendingNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingNotifications
    * const pendingNotifications = await prisma.pendingNotification.findMany()
    * ```
    */
  get pendingNotification(): Prisma.PendingNotificationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Lift: 'Lift',
    Comment: 'Comment',
    Reaction: 'Reaction',
    InviteCode: 'InviteCode',
    DailyUpdate: 'DailyUpdate',
    PushSubscription: 'PushSubscription',
    UserCoachSettings: 'UserCoachSettings',
    CoachingMessage: 'CoachingMessage',
    PendingCoaching: 'PendingCoaching',
    PendingNotification: 'PendingNotification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "lift" | "comment" | "reaction" | "inviteCode" | "dailyUpdate" | "pushSubscription" | "userCoachSettings" | "coachingMessage" | "pendingCoaching" | "pendingNotification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Lift: {
        payload: Prisma.$LiftPayload<ExtArgs>
        fields: Prisma.LiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>
          }
          findFirst: {
            args: Prisma.LiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>
          }
          findMany: {
            args: Prisma.LiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>[]
          }
          create: {
            args: Prisma.LiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>
          }
          createMany: {
            args: Prisma.LiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>[]
          }
          delete: {
            args: Prisma.LiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>
          }
          update: {
            args: Prisma.LiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>
          }
          deleteMany: {
            args: Prisma.LiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiftPayload>
          }
          aggregate: {
            args: Prisma.LiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLift>
          }
          groupBy: {
            args: Prisma.LiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiftCountArgs<ExtArgs>
            result: $Utils.Optional<LiftCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      InviteCode: {
        payload: Prisma.$InviteCodePayload<ExtArgs>
        fields: Prisma.InviteCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findFirst: {
            args: Prisma.InviteCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findMany: {
            args: Prisma.InviteCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          create: {
            args: Prisma.InviteCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          createMany: {
            args: Prisma.InviteCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InviteCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          delete: {
            args: Prisma.InviteCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          update: {
            args: Prisma.InviteCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          deleteMany: {
            args: Prisma.InviteCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InviteCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          aggregate: {
            args: Prisma.InviteCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInviteCode>
          }
          groupBy: {
            args: Prisma.InviteCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCodeCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeCountAggregateOutputType> | number
          }
        }
      }
      DailyUpdate: {
        payload: Prisma.$DailyUpdatePayload<ExtArgs>
        fields: Prisma.DailyUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>
          }
          findFirst: {
            args: Prisma.DailyUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>
          }
          findMany: {
            args: Prisma.DailyUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>[]
          }
          create: {
            args: Prisma.DailyUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>
          }
          createMany: {
            args: Prisma.DailyUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>[]
          }
          delete: {
            args: Prisma.DailyUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>
          }
          update: {
            args: Prisma.DailyUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>
          }
          deleteMany: {
            args: Prisma.DailyUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUpdatePayload>
          }
          aggregate: {
            args: Prisma.DailyUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyUpdate>
          }
          groupBy: {
            args: Prisma.DailyUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<DailyUpdateCountAggregateOutputType> | number
          }
        }
      }
      PushSubscription: {
        payload: Prisma.$PushSubscriptionPayload<ExtArgs>
        fields: Prisma.PushSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findMany: {
            args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          create: {
            args: Prisma.PushSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          createMany: {
            args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          update: {
            args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushSubscription>
          }
          groupBy: {
            args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      UserCoachSettings: {
        payload: Prisma.$UserCoachSettingsPayload<ExtArgs>
        fields: Prisma.UserCoachSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCoachSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCoachSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserCoachSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCoachSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>
          }
          findMany: {
            args: Prisma.UserCoachSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>[]
          }
          create: {
            args: Prisma.UserCoachSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>
          }
          createMany: {
            args: Prisma.UserCoachSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCoachSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserCoachSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>
          }
          update: {
            args: Prisma.UserCoachSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserCoachSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCoachSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCoachSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCoachSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserCoachSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCoachSettings>
          }
          groupBy: {
            args: Prisma.UserCoachSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCoachSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCoachSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserCoachSettingsCountAggregateOutputType> | number
          }
        }
      }
      CoachingMessage: {
        payload: Prisma.$CoachingMessagePayload<ExtArgs>
        fields: Prisma.CoachingMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachingMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachingMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>
          }
          findFirst: {
            args: Prisma.CoachingMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachingMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>
          }
          findMany: {
            args: Prisma.CoachingMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>[]
          }
          create: {
            args: Prisma.CoachingMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>
          }
          createMany: {
            args: Prisma.CoachingMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachingMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>[]
          }
          delete: {
            args: Prisma.CoachingMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>
          }
          update: {
            args: Prisma.CoachingMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>
          }
          deleteMany: {
            args: Prisma.CoachingMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachingMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoachingMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingMessagePayload>
          }
          aggregate: {
            args: Prisma.CoachingMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachingMessage>
          }
          groupBy: {
            args: Prisma.CoachingMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachingMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachingMessageCountArgs<ExtArgs>
            result: $Utils.Optional<CoachingMessageCountAggregateOutputType> | number
          }
        }
      }
      PendingCoaching: {
        payload: Prisma.$PendingCoachingPayload<ExtArgs>
        fields: Prisma.PendingCoachingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingCoachingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingCoachingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>
          }
          findFirst: {
            args: Prisma.PendingCoachingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingCoachingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>
          }
          findMany: {
            args: Prisma.PendingCoachingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>[]
          }
          create: {
            args: Prisma.PendingCoachingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>
          }
          createMany: {
            args: Prisma.PendingCoachingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingCoachingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>[]
          }
          delete: {
            args: Prisma.PendingCoachingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>
          }
          update: {
            args: Prisma.PendingCoachingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>
          }
          deleteMany: {
            args: Prisma.PendingCoachingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingCoachingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendingCoachingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingCoachingPayload>
          }
          aggregate: {
            args: Prisma.PendingCoachingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingCoaching>
          }
          groupBy: {
            args: Prisma.PendingCoachingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingCoachingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingCoachingCountArgs<ExtArgs>
            result: $Utils.Optional<PendingCoachingCountAggregateOutputType> | number
          }
        }
      }
      PendingNotification: {
        payload: Prisma.$PendingNotificationPayload<ExtArgs>
        fields: Prisma.PendingNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>
          }
          findFirst: {
            args: Prisma.PendingNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>
          }
          findMany: {
            args: Prisma.PendingNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>[]
          }
          create: {
            args: Prisma.PendingNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>
          }
          createMany: {
            args: Prisma.PendingNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>[]
          }
          delete: {
            args: Prisma.PendingNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>
          }
          update: {
            args: Prisma.PendingNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>
          }
          deleteMany: {
            args: Prisma.PendingNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendingNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingNotificationPayload>
          }
          aggregate: {
            args: Prisma.PendingNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingNotification>
          }
          groupBy: {
            args: Prisma.PendingNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<PendingNotificationCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    lifts: number
    comments: number
    reactions: number
    pushSubscriptions: number
    ownedPendingNotifications: number
    actorPendingNotifications: number
    coachingMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lifts?: boolean | UserCountOutputTypeCountLiftsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    pushSubscriptions?: boolean | UserCountOutputTypeCountPushSubscriptionsArgs
    ownedPendingNotifications?: boolean | UserCountOutputTypeCountOwnedPendingNotificationsArgs
    actorPendingNotifications?: boolean | UserCountOutputTypeCountActorPendingNotificationsArgs
    coachingMessages?: boolean | UserCountOutputTypeCountCoachingMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedPendingNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingNotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActorPendingNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingNotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachingMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingMessageWhereInput
  }


  /**
   * Count Type LiftCountOutputType
   */

  export type LiftCountOutputType = {
    comments: number
    reactions: number
    pendingNotifications: number
  }

  export type LiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | LiftCountOutputTypeCountCommentsArgs
    reactions?: boolean | LiftCountOutputTypeCountReactionsArgs
    pendingNotifications?: boolean | LiftCountOutputTypeCountPendingNotificationsArgs
  }

  // Custom InputTypes
  /**
   * LiftCountOutputType without action
   */
  export type LiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiftCountOutputType
     */
    select?: LiftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LiftCountOutputType without action
   */
  export type LiftCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * LiftCountOutputType without action
   */
  export type LiftCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * LiftCountOutputType without action
   */
  export type LiftCountOutputTypeCountPendingNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingNotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    lifts?: boolean | User$liftsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    ownedPendingNotifications?: boolean | User$ownedPendingNotificationsArgs<ExtArgs>
    actorPendingNotifications?: boolean | User$actorPendingNotificationsArgs<ExtArgs>
    coachSettings?: boolean | User$coachSettingsArgs<ExtArgs>
    coachingMessages?: boolean | User$coachingMessagesArgs<ExtArgs>
    pendingCoaching?: boolean | User$pendingCoachingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lifts?: boolean | User$liftsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    ownedPendingNotifications?: boolean | User$ownedPendingNotificationsArgs<ExtArgs>
    actorPendingNotifications?: boolean | User$actorPendingNotificationsArgs<ExtArgs>
    coachSettings?: boolean | User$coachSettingsArgs<ExtArgs>
    coachingMessages?: boolean | User$coachingMessagesArgs<ExtArgs>
    pendingCoaching?: boolean | User$pendingCoachingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lifts: Prisma.$LiftPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      pushSubscriptions: Prisma.$PushSubscriptionPayload<ExtArgs>[]
      ownedPendingNotifications: Prisma.$PendingNotificationPayload<ExtArgs>[]
      actorPendingNotifications: Prisma.$PendingNotificationPayload<ExtArgs>[]
      coachSettings: Prisma.$UserCoachSettingsPayload<ExtArgs> | null
      coachingMessages: Prisma.$CoachingMessagePayload<ExtArgs>[]
      pendingCoaching: Prisma.$PendingCoachingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lifts<T extends User$liftsArgs<ExtArgs> = {}>(args?: Subset<T, User$liftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findMany"> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany"> | Null>
    pushSubscriptions<T extends User$pushSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pushSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    ownedPendingNotifications<T extends User$ownedPendingNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedPendingNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findMany"> | Null>
    actorPendingNotifications<T extends User$actorPendingNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$actorPendingNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findMany"> | Null>
    coachSettings<T extends User$coachSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$coachSettingsArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    coachingMessages<T extends User$coachingMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$coachingMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "findMany"> | Null>
    pendingCoaching<T extends User$pendingCoachingArgs<ExtArgs> = {}>(args?: Subset<T, User$pendingCoachingArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.lifts
   */
  export type User$liftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    where?: LiftWhereInput
    orderBy?: LiftOrderByWithRelationInput | LiftOrderByWithRelationInput[]
    cursor?: LiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiftScalarFieldEnum | LiftScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.pushSubscriptions
   */
  export type User$pushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    cursor?: PushSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * User.ownedPendingNotifications
   */
  export type User$ownedPendingNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    where?: PendingNotificationWhereInput
    orderBy?: PendingNotificationOrderByWithRelationInput | PendingNotificationOrderByWithRelationInput[]
    cursor?: PendingNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingNotificationScalarFieldEnum | PendingNotificationScalarFieldEnum[]
  }

  /**
   * User.actorPendingNotifications
   */
  export type User$actorPendingNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    where?: PendingNotificationWhereInput
    orderBy?: PendingNotificationOrderByWithRelationInput | PendingNotificationOrderByWithRelationInput[]
    cursor?: PendingNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingNotificationScalarFieldEnum | PendingNotificationScalarFieldEnum[]
  }

  /**
   * User.coachSettings
   */
  export type User$coachSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    where?: UserCoachSettingsWhereInput
  }

  /**
   * User.coachingMessages
   */
  export type User$coachingMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    where?: CoachingMessageWhereInput
    orderBy?: CoachingMessageOrderByWithRelationInput | CoachingMessageOrderByWithRelationInput[]
    cursor?: CoachingMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachingMessageScalarFieldEnum | CoachingMessageScalarFieldEnum[]
  }

  /**
   * User.pendingCoaching
   */
  export type User$pendingCoachingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    where?: PendingCoachingWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Lift
   */

  export type AggregateLift = {
    _count: LiftCountAggregateOutputType | null
    _avg: LiftAvgAggregateOutputType | null
    _sum: LiftSumAggregateOutputType | null
    _min: LiftMinAggregateOutputType | null
    _max: LiftMaxAggregateOutputType | null
  }

  export type LiftAvgAggregateOutputType = {
    weight: number | null
    reps: number | null
    oneRM: number | null
  }

  export type LiftSumAggregateOutputType = {
    weight: number | null
    reps: number | null
    oneRM: number | null
  }

  export type LiftMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    weight: number | null
    reps: number | null
    oneRM: number | null
    loggedAt: Date | null
  }

  export type LiftMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    weight: number | null
    reps: number | null
    oneRM: number | null
    loggedAt: Date | null
  }

  export type LiftCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    weight: number
    reps: number
    oneRM: number
    loggedAt: number
    _all: number
  }


  export type LiftAvgAggregateInputType = {
    weight?: true
    reps?: true
    oneRM?: true
  }

  export type LiftSumAggregateInputType = {
    weight?: true
    reps?: true
    oneRM?: true
  }

  export type LiftMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    weight?: true
    reps?: true
    oneRM?: true
    loggedAt?: true
  }

  export type LiftMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    weight?: true
    reps?: true
    oneRM?: true
    loggedAt?: true
  }

  export type LiftCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    weight?: true
    reps?: true
    oneRM?: true
    loggedAt?: true
    _all?: true
  }

  export type LiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lift to aggregate.
     */
    where?: LiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftOrderByWithRelationInput | LiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lifts
    **/
    _count?: true | LiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiftMaxAggregateInputType
  }

  export type GetLiftAggregateType<T extends LiftAggregateArgs> = {
        [P in keyof T & keyof AggregateLift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLift[P]>
      : GetScalarType<T[P], AggregateLift[P]>
  }




  export type LiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiftWhereInput
    orderBy?: LiftOrderByWithAggregationInput | LiftOrderByWithAggregationInput[]
    by: LiftScalarFieldEnum[] | LiftScalarFieldEnum
    having?: LiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiftCountAggregateInputType | true
    _avg?: LiftAvgAggregateInputType
    _sum?: LiftSumAggregateInputType
    _min?: LiftMinAggregateInputType
    _max?: LiftMaxAggregateInputType
  }

  export type LiftGroupByOutputType = {
    id: string
    userId: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt: Date
    _count: LiftCountAggregateOutputType | null
    _avg: LiftAvgAggregateOutputType | null
    _sum: LiftSumAggregateOutputType | null
    _min: LiftMinAggregateOutputType | null
    _max: LiftMaxAggregateOutputType | null
  }

  type GetLiftGroupByPayload<T extends LiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiftGroupByOutputType[P]>
            : GetScalarType<T[P], LiftGroupByOutputType[P]>
        }
      >
    >


  export type LiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    weight?: boolean
    reps?: boolean
    oneRM?: boolean
    loggedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Lift$commentsArgs<ExtArgs>
    reactions?: boolean | Lift$reactionsArgs<ExtArgs>
    pendingNotifications?: boolean | Lift$pendingNotificationsArgs<ExtArgs>
    _count?: boolean | LiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lift"]>

  export type LiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    weight?: boolean
    reps?: boolean
    oneRM?: boolean
    loggedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lift"]>

  export type LiftSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    weight?: boolean
    reps?: boolean
    oneRM?: boolean
    loggedAt?: boolean
  }

  export type LiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Lift$commentsArgs<ExtArgs>
    reactions?: boolean | Lift$reactionsArgs<ExtArgs>
    pendingNotifications?: boolean | Lift$pendingNotificationsArgs<ExtArgs>
    _count?: boolean | LiftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lift"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      pendingNotifications: Prisma.$PendingNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      weight: number
      reps: number
      oneRM: number
      loggedAt: Date
    }, ExtArgs["result"]["lift"]>
    composites: {}
  }

  type LiftGetPayload<S extends boolean | null | undefined | LiftDefaultArgs> = $Result.GetResult<Prisma.$LiftPayload, S>

  type LiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LiftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LiftCountAggregateInputType | true
    }

  export interface LiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lift'], meta: { name: 'Lift' } }
    /**
     * Find zero or one Lift that matches the filter.
     * @param {LiftFindUniqueArgs} args - Arguments to find a Lift
     * @example
     * // Get one Lift
     * const lift = await prisma.lift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiftFindUniqueArgs>(args: SelectSubset<T, LiftFindUniqueArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lift that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LiftFindUniqueOrThrowArgs} args - Arguments to find a Lift
     * @example
     * // Get one Lift
     * const lift = await prisma.lift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiftFindUniqueOrThrowArgs>(args: SelectSubset<T, LiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftFindFirstArgs} args - Arguments to find a Lift
     * @example
     * // Get one Lift
     * const lift = await prisma.lift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiftFindFirstArgs>(args?: SelectSubset<T, LiftFindFirstArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftFindFirstOrThrowArgs} args - Arguments to find a Lift
     * @example
     * // Get one Lift
     * const lift = await prisma.lift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiftFindFirstOrThrowArgs>(args?: SelectSubset<T, LiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lifts
     * const lifts = await prisma.lift.findMany()
     * 
     * // Get first 10 Lifts
     * const lifts = await prisma.lift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liftWithIdOnly = await prisma.lift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiftFindManyArgs>(args?: SelectSubset<T, LiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lift.
     * @param {LiftCreateArgs} args - Arguments to create a Lift.
     * @example
     * // Create one Lift
     * const Lift = await prisma.lift.create({
     *   data: {
     *     // ... data to create a Lift
     *   }
     * })
     * 
     */
    create<T extends LiftCreateArgs>(args: SelectSubset<T, LiftCreateArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lifts.
     * @param {LiftCreateManyArgs} args - Arguments to create many Lifts.
     * @example
     * // Create many Lifts
     * const lift = await prisma.lift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiftCreateManyArgs>(args?: SelectSubset<T, LiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lifts and returns the data saved in the database.
     * @param {LiftCreateManyAndReturnArgs} args - Arguments to create many Lifts.
     * @example
     * // Create many Lifts
     * const lift = await prisma.lift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lifts and only return the `id`
     * const liftWithIdOnly = await prisma.lift.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiftCreateManyAndReturnArgs>(args?: SelectSubset<T, LiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lift.
     * @param {LiftDeleteArgs} args - Arguments to delete one Lift.
     * @example
     * // Delete one Lift
     * const Lift = await prisma.lift.delete({
     *   where: {
     *     // ... filter to delete one Lift
     *   }
     * })
     * 
     */
    delete<T extends LiftDeleteArgs>(args: SelectSubset<T, LiftDeleteArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lift.
     * @param {LiftUpdateArgs} args - Arguments to update one Lift.
     * @example
     * // Update one Lift
     * const lift = await prisma.lift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiftUpdateArgs>(args: SelectSubset<T, LiftUpdateArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lifts.
     * @param {LiftDeleteManyArgs} args - Arguments to filter Lifts to delete.
     * @example
     * // Delete a few Lifts
     * const { count } = await prisma.lift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiftDeleteManyArgs>(args?: SelectSubset<T, LiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lifts
     * const lift = await prisma.lift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiftUpdateManyArgs>(args: SelectSubset<T, LiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lift.
     * @param {LiftUpsertArgs} args - Arguments to update or create a Lift.
     * @example
     * // Update or create a Lift
     * const lift = await prisma.lift.upsert({
     *   create: {
     *     // ... data to create a Lift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lift we want to update
     *   }
     * })
     */
    upsert<T extends LiftUpsertArgs>(args: SelectSubset<T, LiftUpsertArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftCountArgs} args - Arguments to filter Lifts to count.
     * @example
     * // Count the number of Lifts
     * const count = await prisma.lift.count({
     *   where: {
     *     // ... the filter for the Lifts we want to count
     *   }
     * })
    **/
    count<T extends LiftCountArgs>(
      args?: Subset<T, LiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiftAggregateArgs>(args: Subset<T, LiftAggregateArgs>): Prisma.PrismaPromise<GetLiftAggregateType<T>>

    /**
     * Group by Lift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftGroupByArgs} args - Group by arguments.
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
      T extends LiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiftGroupByArgs['orderBy'] }
        : { orderBy?: LiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lift model
   */
  readonly fields: LiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    comments<T extends Lift$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Lift$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    reactions<T extends Lift$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Lift$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany"> | Null>
    pendingNotifications<T extends Lift$pendingNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Lift$pendingNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Lift model
   */ 
  interface LiftFieldRefs {
    readonly id: FieldRef<"Lift", 'String'>
    readonly userId: FieldRef<"Lift", 'String'>
    readonly type: FieldRef<"Lift", 'String'>
    readonly weight: FieldRef<"Lift", 'Float'>
    readonly reps: FieldRef<"Lift", 'Int'>
    readonly oneRM: FieldRef<"Lift", 'Float'>
    readonly loggedAt: FieldRef<"Lift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lift findUnique
   */
  export type LiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * Filter, which Lift to fetch.
     */
    where: LiftWhereUniqueInput
  }

  /**
   * Lift findUniqueOrThrow
   */
  export type LiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * Filter, which Lift to fetch.
     */
    where: LiftWhereUniqueInput
  }

  /**
   * Lift findFirst
   */
  export type LiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * Filter, which Lift to fetch.
     */
    where?: LiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftOrderByWithRelationInput | LiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifts.
     */
    cursor?: LiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifts.
     */
    distinct?: LiftScalarFieldEnum | LiftScalarFieldEnum[]
  }

  /**
   * Lift findFirstOrThrow
   */
  export type LiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * Filter, which Lift to fetch.
     */
    where?: LiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftOrderByWithRelationInput | LiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifts.
     */
    cursor?: LiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifts.
     */
    distinct?: LiftScalarFieldEnum | LiftScalarFieldEnum[]
  }

  /**
   * Lift findMany
   */
  export type LiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * Filter, which Lifts to fetch.
     */
    where?: LiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftOrderByWithRelationInput | LiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lifts.
     */
    cursor?: LiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    distinct?: LiftScalarFieldEnum | LiftScalarFieldEnum[]
  }

  /**
   * Lift create
   */
  export type LiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Lift.
     */
    data: XOR<LiftCreateInput, LiftUncheckedCreateInput>
  }

  /**
   * Lift createMany
   */
  export type LiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lifts.
     */
    data: LiftCreateManyInput | LiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lift createManyAndReturn
   */
  export type LiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Lifts.
     */
    data: LiftCreateManyInput | LiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lift update
   */
  export type LiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Lift.
     */
    data: XOR<LiftUpdateInput, LiftUncheckedUpdateInput>
    /**
     * Choose, which Lift to update.
     */
    where: LiftWhereUniqueInput
  }

  /**
   * Lift updateMany
   */
  export type LiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lifts.
     */
    data: XOR<LiftUpdateManyMutationInput, LiftUncheckedUpdateManyInput>
    /**
     * Filter which Lifts to update
     */
    where?: LiftWhereInput
  }

  /**
   * Lift upsert
   */
  export type LiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Lift to update in case it exists.
     */
    where: LiftWhereUniqueInput
    /**
     * In case the Lift found by the `where` argument doesn't exist, create a new Lift with this data.
     */
    create: XOR<LiftCreateInput, LiftUncheckedCreateInput>
    /**
     * In case the Lift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiftUpdateInput, LiftUncheckedUpdateInput>
  }

  /**
   * Lift delete
   */
  export type LiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
    /**
     * Filter which Lift to delete.
     */
    where: LiftWhereUniqueInput
  }

  /**
   * Lift deleteMany
   */
  export type LiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lifts to delete
     */
    where?: LiftWhereInput
  }

  /**
   * Lift.comments
   */
  export type Lift$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Lift.reactions
   */
  export type Lift$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Lift.pendingNotifications
   */
  export type Lift$pendingNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    where?: PendingNotificationWhereInput
    orderBy?: PendingNotificationOrderByWithRelationInput | PendingNotificationOrderByWithRelationInput[]
    cursor?: PendingNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingNotificationScalarFieldEnum | PendingNotificationScalarFieldEnum[]
  }

  /**
   * Lift without action
   */
  export type LiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lift
     */
    select?: LiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiftInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    liftId: string | null
    authorId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    liftId: string | null
    authorId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    liftId: number
    authorId: number
    body: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    liftId?: true
    authorId?: true
    body?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    liftId?: true
    authorId?: true
    body?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    liftId?: true
    authorId?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    liftId: string
    authorId: string
    body: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liftId?: boolean
    authorId?: boolean
    body?: boolean
    createdAt?: boolean
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liftId?: boolean
    authorId?: boolean
    body?: boolean
    createdAt?: boolean
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    liftId?: boolean
    authorId?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      lift: Prisma.$LiftPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liftId: string
      authorId: string
      body: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lift<T extends LiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LiftDefaultArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly liftId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly body: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    id: string | null
    liftId: string | null
    authorId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: string | null
    liftId: string | null
    authorId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    liftId: number
    authorId: number
    emoji: number
    createdAt: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    id?: true
    liftId?: true
    authorId?: true
    emoji?: true
    createdAt?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    liftId?: true
    authorId?: true
    emoji?: true
    createdAt?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    liftId?: true
    authorId?: true
    emoji?: true
    createdAt?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    id: string
    liftId: string
    authorId: string
    emoji: string
    createdAt: Date
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liftId?: boolean
    authorId?: boolean
    emoji?: boolean
    createdAt?: boolean
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liftId?: boolean
    authorId?: boolean
    emoji?: boolean
    createdAt?: boolean
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    id?: boolean
    liftId?: boolean
    authorId?: boolean
    emoji?: boolean
    createdAt?: boolean
  }

  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      lift: Prisma.$LiftPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liftId: string
      authorId: string
      emoji: string
      createdAt: Date
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
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
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lift<T extends LiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LiftDefaultArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reaction model
   */ 
  interface ReactionFieldRefs {
    readonly id: FieldRef<"Reaction", 'String'>
    readonly liftId: FieldRef<"Reaction", 'String'>
    readonly authorId: FieldRef<"Reaction", 'String'>
    readonly emoji: FieldRef<"Reaction", 'String'>
    readonly createdAt: FieldRef<"Reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model InviteCode
   */

  export type AggregateInviteCode = {
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  export type InviteCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    usedBy: string | null
    usedAt: Date | null
  }

  export type InviteCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    usedBy: string | null
    usedAt: Date | null
  }

  export type InviteCodeCountAggregateOutputType = {
    id: number
    code: number
    usedBy: number
    usedAt: number
    _all: number
  }


  export type InviteCodeMinAggregateInputType = {
    id?: true
    code?: true
    usedBy?: true
    usedAt?: true
  }

  export type InviteCodeMaxAggregateInputType = {
    id?: true
    code?: true
    usedBy?: true
    usedAt?: true
  }

  export type InviteCodeCountAggregateInputType = {
    id?: true
    code?: true
    usedBy?: true
    usedAt?: true
    _all?: true
  }

  export type InviteCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCode to aggregate.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InviteCodes
    **/
    _count?: true | InviteCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteCodeMaxAggregateInputType
  }

  export type GetInviteCodeAggregateType<T extends InviteCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateInviteCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInviteCode[P]>
      : GetScalarType<T[P], AggregateInviteCode[P]>
  }




  export type InviteCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteCodeWhereInput
    orderBy?: InviteCodeOrderByWithAggregationInput | InviteCodeOrderByWithAggregationInput[]
    by: InviteCodeScalarFieldEnum[] | InviteCodeScalarFieldEnum
    having?: InviteCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCodeCountAggregateInputType | true
    _min?: InviteCodeMinAggregateInputType
    _max?: InviteCodeMaxAggregateInputType
  }

  export type InviteCodeGroupByOutputType = {
    id: string
    code: string
    usedBy: string | null
    usedAt: Date | null
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  type GetInviteCodeGroupByPayload<T extends InviteCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
            : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
        }
      >
    >


  export type InviteCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedBy?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    usedBy?: boolean
    usedAt?: boolean
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectScalar = {
    id?: boolean
    code?: boolean
    usedBy?: boolean
    usedAt?: boolean
  }


  export type $InviteCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InviteCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      usedBy: string | null
      usedAt: Date | null
    }, ExtArgs["result"]["inviteCode"]>
    composites: {}
  }

  type InviteCodeGetPayload<S extends boolean | null | undefined | InviteCodeDefaultArgs> = $Result.GetResult<Prisma.$InviteCodePayload, S>

  type InviteCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InviteCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InviteCodeCountAggregateInputType | true
    }

  export interface InviteCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InviteCode'], meta: { name: 'InviteCode' } }
    /**
     * Find zero or one InviteCode that matches the filter.
     * @param {InviteCodeFindUniqueArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteCodeFindUniqueArgs>(args: SelectSubset<T, InviteCodeFindUniqueArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InviteCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InviteCodeFindUniqueOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InviteCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteCodeFindFirstArgs>(args?: SelectSubset<T, InviteCodeFindFirstArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InviteCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InviteCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany()
     * 
     * // Get first 10 InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteCodeWithIdOnly = await prisma.inviteCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InviteCodeFindManyArgs>(args?: SelectSubset<T, InviteCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InviteCode.
     * @param {InviteCodeCreateArgs} args - Arguments to create a InviteCode.
     * @example
     * // Create one InviteCode
     * const InviteCode = await prisma.inviteCode.create({
     *   data: {
     *     // ... data to create a InviteCode
     *   }
     * })
     * 
     */
    create<T extends InviteCodeCreateArgs>(args: SelectSubset<T, InviteCodeCreateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InviteCodes.
     * @param {InviteCodeCreateManyArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCodeCreateManyArgs>(args?: SelectSubset<T, InviteCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InviteCodes and returns the data saved in the database.
     * @param {InviteCodeCreateManyAndReturnArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InviteCodes and only return the `id`
     * const inviteCodeWithIdOnly = await prisma.inviteCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InviteCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, InviteCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InviteCode.
     * @param {InviteCodeDeleteArgs} args - Arguments to delete one InviteCode.
     * @example
     * // Delete one InviteCode
     * const InviteCode = await prisma.inviteCode.delete({
     *   where: {
     *     // ... filter to delete one InviteCode
     *   }
     * })
     * 
     */
    delete<T extends InviteCodeDeleteArgs>(args: SelectSubset<T, InviteCodeDeleteArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InviteCode.
     * @param {InviteCodeUpdateArgs} args - Arguments to update one InviteCode.
     * @example
     * // Update one InviteCode
     * const inviteCode = await prisma.inviteCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteCodeUpdateArgs>(args: SelectSubset<T, InviteCodeUpdateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InviteCodes.
     * @param {InviteCodeDeleteManyArgs} args - Arguments to filter InviteCodes to delete.
     * @example
     * // Delete a few InviteCodes
     * const { count } = await prisma.inviteCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteCodeDeleteManyArgs>(args?: SelectSubset<T, InviteCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteCodeUpdateManyArgs>(args: SelectSubset<T, InviteCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InviteCode.
     * @param {InviteCodeUpsertArgs} args - Arguments to update or create a InviteCode.
     * @example
     * // Update or create a InviteCode
     * const inviteCode = await prisma.inviteCode.upsert({
     *   create: {
     *     // ... data to create a InviteCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InviteCode we want to update
     *   }
     * })
     */
    upsert<T extends InviteCodeUpsertArgs>(args: SelectSubset<T, InviteCodeUpsertArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeCountArgs} args - Arguments to filter InviteCodes to count.
     * @example
     * // Count the number of InviteCodes
     * const count = await prisma.inviteCode.count({
     *   where: {
     *     // ... the filter for the InviteCodes we want to count
     *   }
     * })
    **/
    count<T extends InviteCodeCountArgs>(
      args?: Subset<T, InviteCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InviteCodeAggregateArgs>(args: Subset<T, InviteCodeAggregateArgs>): Prisma.PrismaPromise<GetInviteCodeAggregateType<T>>

    /**
     * Group by InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeGroupByArgs} args - Group by arguments.
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
      T extends InviteCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteCodeGroupByArgs['orderBy'] }
        : { orderBy?: InviteCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InviteCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InviteCode model
   */
  readonly fields: InviteCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InviteCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InviteCode model
   */ 
  interface InviteCodeFieldRefs {
    readonly id: FieldRef<"InviteCode", 'String'>
    readonly code: FieldRef<"InviteCode", 'String'>
    readonly usedBy: FieldRef<"InviteCode", 'String'>
    readonly usedAt: FieldRef<"InviteCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InviteCode findUnique
   */
  export type InviteCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findUniqueOrThrow
   */
  export type InviteCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findFirst
   */
  export type InviteCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findFirstOrThrow
   */
  export type InviteCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findMany
   */
  export type InviteCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCodes to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode create
   */
  export type InviteCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * The data needed to create a InviteCode.
     */
    data: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
  }

  /**
   * InviteCode createMany
   */
  export type InviteCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InviteCode createManyAndReturn
   */
  export type InviteCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InviteCode update
   */
  export type InviteCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * The data needed to update a InviteCode.
     */
    data: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
    /**
     * Choose, which InviteCode to update.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode updateMany
   */
  export type InviteCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
  }

  /**
   * InviteCode upsert
   */
  export type InviteCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * The filter to search for the InviteCode to update in case it exists.
     */
    where: InviteCodeWhereUniqueInput
    /**
     * In case the InviteCode found by the `where` argument doesn't exist, create a new InviteCode with this data.
     */
    create: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
    /**
     * In case the InviteCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
  }

  /**
   * InviteCode delete
   */
  export type InviteCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter which InviteCode to delete.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode deleteMany
   */
  export type InviteCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCodes to delete
     */
    where?: InviteCodeWhereInput
  }

  /**
   * InviteCode without action
   */
  export type InviteCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
  }


  /**
   * Model DailyUpdate
   */

  export type AggregateDailyUpdate = {
    _count: DailyUpdateCountAggregateOutputType | null
    _min: DailyUpdateMinAggregateOutputType | null
    _max: DailyUpdateMaxAggregateOutputType | null
  }

  export type DailyUpdateMinAggregateOutputType = {
    id: string | null
    content: string | null
    generatedAt: Date | null
  }

  export type DailyUpdateMaxAggregateOutputType = {
    id: string | null
    content: string | null
    generatedAt: Date | null
  }

  export type DailyUpdateCountAggregateOutputType = {
    id: number
    content: number
    generatedAt: number
    _all: number
  }


  export type DailyUpdateMinAggregateInputType = {
    id?: true
    content?: true
    generatedAt?: true
  }

  export type DailyUpdateMaxAggregateInputType = {
    id?: true
    content?: true
    generatedAt?: true
  }

  export type DailyUpdateCountAggregateInputType = {
    id?: true
    content?: true
    generatedAt?: true
    _all?: true
  }

  export type DailyUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUpdate to aggregate.
     */
    where?: DailyUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUpdates to fetch.
     */
    orderBy?: DailyUpdateOrderByWithRelationInput | DailyUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyUpdates
    **/
    _count?: true | DailyUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyUpdateMaxAggregateInputType
  }

  export type GetDailyUpdateAggregateType<T extends DailyUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyUpdate[P]>
      : GetScalarType<T[P], AggregateDailyUpdate[P]>
  }




  export type DailyUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyUpdateWhereInput
    orderBy?: DailyUpdateOrderByWithAggregationInput | DailyUpdateOrderByWithAggregationInput[]
    by: DailyUpdateScalarFieldEnum[] | DailyUpdateScalarFieldEnum
    having?: DailyUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyUpdateCountAggregateInputType | true
    _min?: DailyUpdateMinAggregateInputType
    _max?: DailyUpdateMaxAggregateInputType
  }

  export type DailyUpdateGroupByOutputType = {
    id: string
    content: string
    generatedAt: Date
    _count: DailyUpdateCountAggregateOutputType | null
    _min: DailyUpdateMinAggregateOutputType | null
    _max: DailyUpdateMaxAggregateOutputType | null
  }

  type GetDailyUpdateGroupByPayload<T extends DailyUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], DailyUpdateGroupByOutputType[P]>
        }
      >
    >


  export type DailyUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    generatedAt?: boolean
  }, ExtArgs["result"]["dailyUpdate"]>

  export type DailyUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    generatedAt?: boolean
  }, ExtArgs["result"]["dailyUpdate"]>

  export type DailyUpdateSelectScalar = {
    id?: boolean
    content?: boolean
    generatedAt?: boolean
  }


  export type $DailyUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyUpdate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      generatedAt: Date
    }, ExtArgs["result"]["dailyUpdate"]>
    composites: {}
  }

  type DailyUpdateGetPayload<S extends boolean | null | undefined | DailyUpdateDefaultArgs> = $Result.GetResult<Prisma.$DailyUpdatePayload, S>

  type DailyUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyUpdateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyUpdateCountAggregateInputType | true
    }

  export interface DailyUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyUpdate'], meta: { name: 'DailyUpdate' } }
    /**
     * Find zero or one DailyUpdate that matches the filter.
     * @param {DailyUpdateFindUniqueArgs} args - Arguments to find a DailyUpdate
     * @example
     * // Get one DailyUpdate
     * const dailyUpdate = await prisma.dailyUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyUpdateFindUniqueArgs>(args: SelectSubset<T, DailyUpdateFindUniqueArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyUpdate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyUpdateFindUniqueOrThrowArgs} args - Arguments to find a DailyUpdate
     * @example
     * // Get one DailyUpdate
     * const dailyUpdate = await prisma.dailyUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateFindFirstArgs} args - Arguments to find a DailyUpdate
     * @example
     * // Get one DailyUpdate
     * const dailyUpdate = await prisma.dailyUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyUpdateFindFirstArgs>(args?: SelectSubset<T, DailyUpdateFindFirstArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateFindFirstOrThrowArgs} args - Arguments to find a DailyUpdate
     * @example
     * // Get one DailyUpdate
     * const dailyUpdate = await prisma.dailyUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyUpdates
     * const dailyUpdates = await prisma.dailyUpdate.findMany()
     * 
     * // Get first 10 DailyUpdates
     * const dailyUpdates = await prisma.dailyUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyUpdateWithIdOnly = await prisma.dailyUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyUpdateFindManyArgs>(args?: SelectSubset<T, DailyUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyUpdate.
     * @param {DailyUpdateCreateArgs} args - Arguments to create a DailyUpdate.
     * @example
     * // Create one DailyUpdate
     * const DailyUpdate = await prisma.dailyUpdate.create({
     *   data: {
     *     // ... data to create a DailyUpdate
     *   }
     * })
     * 
     */
    create<T extends DailyUpdateCreateArgs>(args: SelectSubset<T, DailyUpdateCreateArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyUpdates.
     * @param {DailyUpdateCreateManyArgs} args - Arguments to create many DailyUpdates.
     * @example
     * // Create many DailyUpdates
     * const dailyUpdate = await prisma.dailyUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyUpdateCreateManyArgs>(args?: SelectSubset<T, DailyUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyUpdates and returns the data saved in the database.
     * @param {DailyUpdateCreateManyAndReturnArgs} args - Arguments to create many DailyUpdates.
     * @example
     * // Create many DailyUpdates
     * const dailyUpdate = await prisma.dailyUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyUpdates and only return the `id`
     * const dailyUpdateWithIdOnly = await prisma.dailyUpdate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyUpdate.
     * @param {DailyUpdateDeleteArgs} args - Arguments to delete one DailyUpdate.
     * @example
     * // Delete one DailyUpdate
     * const DailyUpdate = await prisma.dailyUpdate.delete({
     *   where: {
     *     // ... filter to delete one DailyUpdate
     *   }
     * })
     * 
     */
    delete<T extends DailyUpdateDeleteArgs>(args: SelectSubset<T, DailyUpdateDeleteArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyUpdate.
     * @param {DailyUpdateUpdateArgs} args - Arguments to update one DailyUpdate.
     * @example
     * // Update one DailyUpdate
     * const dailyUpdate = await prisma.dailyUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyUpdateUpdateArgs>(args: SelectSubset<T, DailyUpdateUpdateArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyUpdates.
     * @param {DailyUpdateDeleteManyArgs} args - Arguments to filter DailyUpdates to delete.
     * @example
     * // Delete a few DailyUpdates
     * const { count } = await prisma.dailyUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyUpdateDeleteManyArgs>(args?: SelectSubset<T, DailyUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyUpdates
     * const dailyUpdate = await prisma.dailyUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyUpdateUpdateManyArgs>(args: SelectSubset<T, DailyUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyUpdate.
     * @param {DailyUpdateUpsertArgs} args - Arguments to update or create a DailyUpdate.
     * @example
     * // Update or create a DailyUpdate
     * const dailyUpdate = await prisma.dailyUpdate.upsert({
     *   create: {
     *     // ... data to create a DailyUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyUpdate we want to update
     *   }
     * })
     */
    upsert<T extends DailyUpdateUpsertArgs>(args: SelectSubset<T, DailyUpdateUpsertArgs<ExtArgs>>): Prisma__DailyUpdateClient<$Result.GetResult<Prisma.$DailyUpdatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateCountArgs} args - Arguments to filter DailyUpdates to count.
     * @example
     * // Count the number of DailyUpdates
     * const count = await prisma.dailyUpdate.count({
     *   where: {
     *     // ... the filter for the DailyUpdates we want to count
     *   }
     * })
    **/
    count<T extends DailyUpdateCountArgs>(
      args?: Subset<T, DailyUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyUpdateAggregateArgs>(args: Subset<T, DailyUpdateAggregateArgs>): Prisma.PrismaPromise<GetDailyUpdateAggregateType<T>>

    /**
     * Group by DailyUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUpdateGroupByArgs} args - Group by arguments.
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
      T extends DailyUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyUpdateGroupByArgs['orderBy'] }
        : { orderBy?: DailyUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyUpdate model
   */
  readonly fields: DailyUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyUpdate model
   */ 
  interface DailyUpdateFieldRefs {
    readonly id: FieldRef<"DailyUpdate", 'String'>
    readonly content: FieldRef<"DailyUpdate", 'String'>
    readonly generatedAt: FieldRef<"DailyUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyUpdate findUnique
   */
  export type DailyUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * Filter, which DailyUpdate to fetch.
     */
    where: DailyUpdateWhereUniqueInput
  }

  /**
   * DailyUpdate findUniqueOrThrow
   */
  export type DailyUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * Filter, which DailyUpdate to fetch.
     */
    where: DailyUpdateWhereUniqueInput
  }

  /**
   * DailyUpdate findFirst
   */
  export type DailyUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * Filter, which DailyUpdate to fetch.
     */
    where?: DailyUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUpdates to fetch.
     */
    orderBy?: DailyUpdateOrderByWithRelationInput | DailyUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUpdates.
     */
    cursor?: DailyUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUpdates.
     */
    distinct?: DailyUpdateScalarFieldEnum | DailyUpdateScalarFieldEnum[]
  }

  /**
   * DailyUpdate findFirstOrThrow
   */
  export type DailyUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * Filter, which DailyUpdate to fetch.
     */
    where?: DailyUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUpdates to fetch.
     */
    orderBy?: DailyUpdateOrderByWithRelationInput | DailyUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUpdates.
     */
    cursor?: DailyUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUpdates.
     */
    distinct?: DailyUpdateScalarFieldEnum | DailyUpdateScalarFieldEnum[]
  }

  /**
   * DailyUpdate findMany
   */
  export type DailyUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * Filter, which DailyUpdates to fetch.
     */
    where?: DailyUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUpdates to fetch.
     */
    orderBy?: DailyUpdateOrderByWithRelationInput | DailyUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyUpdates.
     */
    cursor?: DailyUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUpdates.
     */
    skip?: number
    distinct?: DailyUpdateScalarFieldEnum | DailyUpdateScalarFieldEnum[]
  }

  /**
   * DailyUpdate create
   */
  export type DailyUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * The data needed to create a DailyUpdate.
     */
    data: XOR<DailyUpdateCreateInput, DailyUpdateUncheckedCreateInput>
  }

  /**
   * DailyUpdate createMany
   */
  export type DailyUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyUpdates.
     */
    data: DailyUpdateCreateManyInput | DailyUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyUpdate createManyAndReturn
   */
  export type DailyUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyUpdates.
     */
    data: DailyUpdateCreateManyInput | DailyUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyUpdate update
   */
  export type DailyUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * The data needed to update a DailyUpdate.
     */
    data: XOR<DailyUpdateUpdateInput, DailyUpdateUncheckedUpdateInput>
    /**
     * Choose, which DailyUpdate to update.
     */
    where: DailyUpdateWhereUniqueInput
  }

  /**
   * DailyUpdate updateMany
   */
  export type DailyUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyUpdates.
     */
    data: XOR<DailyUpdateUpdateManyMutationInput, DailyUpdateUncheckedUpdateManyInput>
    /**
     * Filter which DailyUpdates to update
     */
    where?: DailyUpdateWhereInput
  }

  /**
   * DailyUpdate upsert
   */
  export type DailyUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * The filter to search for the DailyUpdate to update in case it exists.
     */
    where: DailyUpdateWhereUniqueInput
    /**
     * In case the DailyUpdate found by the `where` argument doesn't exist, create a new DailyUpdate with this data.
     */
    create: XOR<DailyUpdateCreateInput, DailyUpdateUncheckedCreateInput>
    /**
     * In case the DailyUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyUpdateUpdateInput, DailyUpdateUncheckedUpdateInput>
  }

  /**
   * DailyUpdate delete
   */
  export type DailyUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
    /**
     * Filter which DailyUpdate to delete.
     */
    where: DailyUpdateWhereUniqueInput
  }

  /**
   * DailyUpdate deleteMany
   */
  export type DailyUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUpdates to delete
     */
    where?: DailyUpdateWhereInput
  }

  /**
   * DailyUpdate without action
   */
  export type DailyUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUpdate
     */
    select?: DailyUpdateSelect<ExtArgs> | null
  }


  /**
   * Model PushSubscription
   */

  export type AggregatePushSubscription = {
    _count: PushSubscriptionCountAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  export type PushSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
  }

  export type PushSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
  }

  export type PushSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    p256dh: number
    auth: number
    createdAt: number
    _all: number
  }


  export type PushSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
  }

  export type PushSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
  }

  export type PushSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    _all?: true
  }

  export type PushSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscription to aggregate.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushSubscriptions
    **/
    _count?: true | PushSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type GetPushSubscriptionAggregateType<T extends PushSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePushSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushSubscription[P]>
      : GetScalarType<T[P], AggregatePushSubscription[P]>
  }




  export type PushSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithAggregationInput | PushSubscriptionOrderByWithAggregationInput[]
    by: PushSubscriptionScalarFieldEnum[] | PushSubscriptionScalarFieldEnum
    having?: PushSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushSubscriptionCountAggregateInputType | true
    _min?: PushSubscriptionMinAggregateInputType
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type PushSubscriptionGroupByOutputType = {
    id: string
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt: Date
    _count: PushSubscriptionCountAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  type GetPushSubscriptionGroupByPayload<T extends PushSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PushSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
  }

  export type PushSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PushSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PushSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      endpoint: string
      p256dh: string
      auth: string
      createdAt: Date
    }, ExtArgs["result"]["pushSubscription"]>
    composites: {}
  }

  type PushSubscriptionGetPayload<S extends boolean | null | undefined | PushSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$PushSubscriptionPayload, S>

  type PushSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PushSubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PushSubscriptionCountAggregateInputType | true
    }

  export interface PushSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushSubscription'], meta: { name: 'PushSubscription' } }
    /**
     * Find zero or one PushSubscription that matches the filter.
     * @param {PushSubscriptionFindUniqueArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushSubscriptionFindUniqueArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PushSubscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushSubscriptionFindFirstArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany()
     * 
     * // Get first 10 PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushSubscriptionFindManyArgs>(args?: SelectSubset<T, PushSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PushSubscription.
     * @param {PushSubscriptionCreateArgs} args - Arguments to create a PushSubscription.
     * @example
     * // Create one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.create({
     *   data: {
     *     // ... data to create a PushSubscription
     *   }
     * })
     * 
     */
    create<T extends PushSubscriptionCreateArgs>(args: SelectSubset<T, PushSubscriptionCreateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PushSubscriptions.
     * @param {PushSubscriptionCreateManyArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushSubscriptionCreateManyArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushSubscriptions and returns the data saved in the database.
     * @param {PushSubscriptionCreateManyAndReturnArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PushSubscription.
     * @param {PushSubscriptionDeleteArgs} args - Arguments to delete one PushSubscription.
     * @example
     * // Delete one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.delete({
     *   where: {
     *     // ... filter to delete one PushSubscription
     *   }
     * })
     * 
     */
    delete<T extends PushSubscriptionDeleteArgs>(args: SelectSubset<T, PushSubscriptionDeleteArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PushSubscription.
     * @param {PushSubscriptionUpdateArgs} args - Arguments to update one PushSubscription.
     * @example
     * // Update one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushSubscriptionUpdateArgs>(args: SelectSubset<T, PushSubscriptionUpdateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PushSubscriptions.
     * @param {PushSubscriptionDeleteManyArgs} args - Arguments to filter PushSubscriptions to delete.
     * @example
     * // Delete a few PushSubscriptions
     * const { count } = await prisma.pushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushSubscriptionDeleteManyArgs>(args?: SelectSubset<T, PushSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushSubscriptionUpdateManyArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PushSubscription.
     * @param {PushSubscriptionUpsertArgs} args - Arguments to update or create a PushSubscription.
     * @example
     * // Update or create a PushSubscription
     * const pushSubscription = await prisma.pushSubscription.upsert({
     *   create: {
     *     // ... data to create a PushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PushSubscriptionUpsertArgs>(args: SelectSubset<T, PushSubscriptionUpsertArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionCountArgs} args - Arguments to filter PushSubscriptions to count.
     * @example
     * // Count the number of PushSubscriptions
     * const count = await prisma.pushSubscription.count({
     *   where: {
     *     // ... the filter for the PushSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PushSubscriptionCountArgs>(
      args?: Subset<T, PushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushSubscriptionAggregateArgs>(args: Subset<T, PushSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPushSubscriptionAggregateType<T>>

    /**
     * Group by PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends PushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PushSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushSubscription model
   */
  readonly fields: PushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PushSubscription model
   */ 
  interface PushSubscriptionFieldRefs {
    readonly id: FieldRef<"PushSubscription", 'String'>
    readonly userId: FieldRef<"PushSubscription", 'String'>
    readonly endpoint: FieldRef<"PushSubscription", 'String'>
    readonly p256dh: FieldRef<"PushSubscription", 'String'>
    readonly auth: FieldRef<"PushSubscription", 'String'>
    readonly createdAt: FieldRef<"PushSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushSubscription findUnique
   */
  export type PushSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findUniqueOrThrow
   */
  export type PushSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findFirst
   */
  export type PushSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findFirstOrThrow
   */
  export type PushSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findMany
   */
  export type PushSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscriptions to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription create
   */
  export type PushSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PushSubscription.
     */
    data: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
  }

  /**
   * PushSubscription createMany
   */
  export type PushSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushSubscription createManyAndReturn
   */
  export type PushSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PushSubscription update
   */
  export type PushSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PushSubscription.
     */
    data: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which PushSubscription to update.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription updateMany
   */
  export type PushSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
  }

  /**
   * PushSubscription upsert
   */
  export type PushSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PushSubscription to update in case it exists.
     */
    where: PushSubscriptionWhereUniqueInput
    /**
     * In case the PushSubscription found by the `where` argument doesn't exist, create a new PushSubscription with this data.
     */
    create: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
    /**
     * In case the PushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
  }

  /**
   * PushSubscription delete
   */
  export type PushSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which PushSubscription to delete.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription deleteMany
   */
  export type PushSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscriptions to delete
     */
    where?: PushSubscriptionWhereInput
  }

  /**
   * PushSubscription without action
   */
  export type PushSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model UserCoachSettings
   */

  export type AggregateUserCoachSettings = {
    _count: UserCoachSettingsCountAggregateOutputType | null
    _min: UserCoachSettingsMinAggregateOutputType | null
    _max: UserCoachSettingsMaxAggregateOutputType | null
  }

  export type UserCoachSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goalsText: string | null
    coachingStyle: string | null
    updatedAt: Date | null
  }

  export type UserCoachSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goalsText: string | null
    coachingStyle: string | null
    updatedAt: Date | null
  }

  export type UserCoachSettingsCountAggregateOutputType = {
    id: number
    userId: number
    goalsText: number
    coachingStyle: number
    updatedAt: number
    _all: number
  }


  export type UserCoachSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    goalsText?: true
    coachingStyle?: true
    updatedAt?: true
  }

  export type UserCoachSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    goalsText?: true
    coachingStyle?: true
    updatedAt?: true
  }

  export type UserCoachSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    goalsText?: true
    coachingStyle?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCoachSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoachSettings to aggregate.
     */
    where?: UserCoachSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoachSettings to fetch.
     */
    orderBy?: UserCoachSettingsOrderByWithRelationInput | UserCoachSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCoachSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoachSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoachSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCoachSettings
    **/
    _count?: true | UserCoachSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCoachSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCoachSettingsMaxAggregateInputType
  }

  export type GetUserCoachSettingsAggregateType<T extends UserCoachSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCoachSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCoachSettings[P]>
      : GetScalarType<T[P], AggregateUserCoachSettings[P]>
  }




  export type UserCoachSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCoachSettingsWhereInput
    orderBy?: UserCoachSettingsOrderByWithAggregationInput | UserCoachSettingsOrderByWithAggregationInput[]
    by: UserCoachSettingsScalarFieldEnum[] | UserCoachSettingsScalarFieldEnum
    having?: UserCoachSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCoachSettingsCountAggregateInputType | true
    _min?: UserCoachSettingsMinAggregateInputType
    _max?: UserCoachSettingsMaxAggregateInputType
  }

  export type UserCoachSettingsGroupByOutputType = {
    id: string
    userId: string
    goalsText: string
    coachingStyle: string
    updatedAt: Date
    _count: UserCoachSettingsCountAggregateOutputType | null
    _min: UserCoachSettingsMinAggregateOutputType | null
    _max: UserCoachSettingsMaxAggregateOutputType | null
  }

  type GetUserCoachSettingsGroupByPayload<T extends UserCoachSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCoachSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCoachSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCoachSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserCoachSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserCoachSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalsText?: boolean
    coachingStyle?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoachSettings"]>

  export type UserCoachSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalsText?: boolean
    coachingStyle?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoachSettings"]>

  export type UserCoachSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    goalsText?: boolean
    coachingStyle?: boolean
    updatedAt?: boolean
  }

  export type UserCoachSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCoachSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCoachSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCoachSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goalsText: string
      coachingStyle: string
      updatedAt: Date
    }, ExtArgs["result"]["userCoachSettings"]>
    composites: {}
  }

  type UserCoachSettingsGetPayload<S extends boolean | null | undefined | UserCoachSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserCoachSettingsPayload, S>

  type UserCoachSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCoachSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCoachSettingsCountAggregateInputType | true
    }

  export interface UserCoachSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCoachSettings'], meta: { name: 'UserCoachSettings' } }
    /**
     * Find zero or one UserCoachSettings that matches the filter.
     * @param {UserCoachSettingsFindUniqueArgs} args - Arguments to find a UserCoachSettings
     * @example
     * // Get one UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCoachSettingsFindUniqueArgs>(args: SelectSubset<T, UserCoachSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCoachSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCoachSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserCoachSettings
     * @example
     * // Get one UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCoachSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCoachSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCoachSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCoachSettingsFindFirstArgs} args - Arguments to find a UserCoachSettings
     * @example
     * // Get one UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCoachSettingsFindFirstArgs>(args?: SelectSubset<T, UserCoachSettingsFindFirstArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCoachSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCoachSettingsFindFirstOrThrowArgs} args - Arguments to find a UserCoachSettings
     * @example
     * // Get one UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCoachSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCoachSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCoachSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCoachSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.findMany()
     * 
     * // Get first 10 UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCoachSettingsWithIdOnly = await prisma.userCoachSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCoachSettingsFindManyArgs>(args?: SelectSubset<T, UserCoachSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCoachSettings.
     * @param {UserCoachSettingsCreateArgs} args - Arguments to create a UserCoachSettings.
     * @example
     * // Create one UserCoachSettings
     * const UserCoachSettings = await prisma.userCoachSettings.create({
     *   data: {
     *     // ... data to create a UserCoachSettings
     *   }
     * })
     * 
     */
    create<T extends UserCoachSettingsCreateArgs>(args: SelectSubset<T, UserCoachSettingsCreateArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCoachSettings.
     * @param {UserCoachSettingsCreateManyArgs} args - Arguments to create many UserCoachSettings.
     * @example
     * // Create many UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCoachSettingsCreateManyArgs>(args?: SelectSubset<T, UserCoachSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCoachSettings and returns the data saved in the database.
     * @param {UserCoachSettingsCreateManyAndReturnArgs} args - Arguments to create many UserCoachSettings.
     * @example
     * // Create many UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCoachSettings and only return the `id`
     * const userCoachSettingsWithIdOnly = await prisma.userCoachSettings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCoachSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCoachSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCoachSettings.
     * @param {UserCoachSettingsDeleteArgs} args - Arguments to delete one UserCoachSettings.
     * @example
     * // Delete one UserCoachSettings
     * const UserCoachSettings = await prisma.userCoachSettings.delete({
     *   where: {
     *     // ... filter to delete one UserCoachSettings
     *   }
     * })
     * 
     */
    delete<T extends UserCoachSettingsDeleteArgs>(args: SelectSubset<T, UserCoachSettingsDeleteArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCoachSettings.
     * @param {UserCoachSettingsUpdateArgs} args - Arguments to update one UserCoachSettings.
     * @example
     * // Update one UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCoachSettingsUpdateArgs>(args: SelectSubset<T, UserCoachSettingsUpdateArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCoachSettings.
     * @param {UserCoachSettingsDeleteManyArgs} args - Arguments to filter UserCoachSettings to delete.
     * @example
     * // Delete a few UserCoachSettings
     * const { count } = await prisma.userCoachSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCoachSettingsDeleteManyArgs>(args?: SelectSubset<T, UserCoachSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCoachSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCoachSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCoachSettingsUpdateManyArgs>(args: SelectSubset<T, UserCoachSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCoachSettings.
     * @param {UserCoachSettingsUpsertArgs} args - Arguments to update or create a UserCoachSettings.
     * @example
     * // Update or create a UserCoachSettings
     * const userCoachSettings = await prisma.userCoachSettings.upsert({
     *   create: {
     *     // ... data to create a UserCoachSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCoachSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserCoachSettingsUpsertArgs>(args: SelectSubset<T, UserCoachSettingsUpsertArgs<ExtArgs>>): Prisma__UserCoachSettingsClient<$Result.GetResult<Prisma.$UserCoachSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCoachSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCoachSettingsCountArgs} args - Arguments to filter UserCoachSettings to count.
     * @example
     * // Count the number of UserCoachSettings
     * const count = await prisma.userCoachSettings.count({
     *   where: {
     *     // ... the filter for the UserCoachSettings we want to count
     *   }
     * })
    **/
    count<T extends UserCoachSettingsCountArgs>(
      args?: Subset<T, UserCoachSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCoachSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCoachSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCoachSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCoachSettingsAggregateArgs>(args: Subset<T, UserCoachSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserCoachSettingsAggregateType<T>>

    /**
     * Group by UserCoachSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCoachSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserCoachSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCoachSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserCoachSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCoachSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCoachSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCoachSettings model
   */
  readonly fields: UserCoachSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCoachSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCoachSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserCoachSettings model
   */ 
  interface UserCoachSettingsFieldRefs {
    readonly id: FieldRef<"UserCoachSettings", 'String'>
    readonly userId: FieldRef<"UserCoachSettings", 'String'>
    readonly goalsText: FieldRef<"UserCoachSettings", 'String'>
    readonly coachingStyle: FieldRef<"UserCoachSettings", 'String'>
    readonly updatedAt: FieldRef<"UserCoachSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCoachSettings findUnique
   */
  export type UserCoachSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserCoachSettings to fetch.
     */
    where: UserCoachSettingsWhereUniqueInput
  }

  /**
   * UserCoachSettings findUniqueOrThrow
   */
  export type UserCoachSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserCoachSettings to fetch.
     */
    where: UserCoachSettingsWhereUniqueInput
  }

  /**
   * UserCoachSettings findFirst
   */
  export type UserCoachSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserCoachSettings to fetch.
     */
    where?: UserCoachSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoachSettings to fetch.
     */
    orderBy?: UserCoachSettingsOrderByWithRelationInput | UserCoachSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoachSettings.
     */
    cursor?: UserCoachSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoachSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoachSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoachSettings.
     */
    distinct?: UserCoachSettingsScalarFieldEnum | UserCoachSettingsScalarFieldEnum[]
  }

  /**
   * UserCoachSettings findFirstOrThrow
   */
  export type UserCoachSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserCoachSettings to fetch.
     */
    where?: UserCoachSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoachSettings to fetch.
     */
    orderBy?: UserCoachSettingsOrderByWithRelationInput | UserCoachSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoachSettings.
     */
    cursor?: UserCoachSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoachSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoachSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoachSettings.
     */
    distinct?: UserCoachSettingsScalarFieldEnum | UserCoachSettingsScalarFieldEnum[]
  }

  /**
   * UserCoachSettings findMany
   */
  export type UserCoachSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserCoachSettings to fetch.
     */
    where?: UserCoachSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoachSettings to fetch.
     */
    orderBy?: UserCoachSettingsOrderByWithRelationInput | UserCoachSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCoachSettings.
     */
    cursor?: UserCoachSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoachSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoachSettings.
     */
    skip?: number
    distinct?: UserCoachSettingsScalarFieldEnum | UserCoachSettingsScalarFieldEnum[]
  }

  /**
   * UserCoachSettings create
   */
  export type UserCoachSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCoachSettings.
     */
    data: XOR<UserCoachSettingsCreateInput, UserCoachSettingsUncheckedCreateInput>
  }

  /**
   * UserCoachSettings createMany
   */
  export type UserCoachSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCoachSettings.
     */
    data: UserCoachSettingsCreateManyInput | UserCoachSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCoachSettings createManyAndReturn
   */
  export type UserCoachSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCoachSettings.
     */
    data: UserCoachSettingsCreateManyInput | UserCoachSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCoachSettings update
   */
  export type UserCoachSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCoachSettings.
     */
    data: XOR<UserCoachSettingsUpdateInput, UserCoachSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserCoachSettings to update.
     */
    where: UserCoachSettingsWhereUniqueInput
  }

  /**
   * UserCoachSettings updateMany
   */
  export type UserCoachSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCoachSettings.
     */
    data: XOR<UserCoachSettingsUpdateManyMutationInput, UserCoachSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserCoachSettings to update
     */
    where?: UserCoachSettingsWhereInput
  }

  /**
   * UserCoachSettings upsert
   */
  export type UserCoachSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCoachSettings to update in case it exists.
     */
    where: UserCoachSettingsWhereUniqueInput
    /**
     * In case the UserCoachSettings found by the `where` argument doesn't exist, create a new UserCoachSettings with this data.
     */
    create: XOR<UserCoachSettingsCreateInput, UserCoachSettingsUncheckedCreateInput>
    /**
     * In case the UserCoachSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCoachSettingsUpdateInput, UserCoachSettingsUncheckedUpdateInput>
  }

  /**
   * UserCoachSettings delete
   */
  export type UserCoachSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserCoachSettings to delete.
     */
    where: UserCoachSettingsWhereUniqueInput
  }

  /**
   * UserCoachSettings deleteMany
   */
  export type UserCoachSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoachSettings to delete
     */
    where?: UserCoachSettingsWhereInput
  }

  /**
   * UserCoachSettings without action
   */
  export type UserCoachSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoachSettings
     */
    select?: UserCoachSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCoachSettingsInclude<ExtArgs> | null
  }


  /**
   * Model CoachingMessage
   */

  export type AggregateCoachingMessage = {
    _count: CoachingMessageCountAggregateOutputType | null
    _min: CoachingMessageMinAggregateOutputType | null
    _max: CoachingMessageMaxAggregateOutputType | null
  }

  export type CoachingMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CoachingMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CoachingMessageCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    sessionLifts: number
    createdAt: number
    _all: number
  }


  export type CoachingMessageMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type CoachingMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    createdAt?: true
  }

  export type CoachingMessageCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    sessionLifts?: true
    createdAt?: true
    _all?: true
  }

  export type CoachingMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingMessage to aggregate.
     */
    where?: CoachingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingMessages to fetch.
     */
    orderBy?: CoachingMessageOrderByWithRelationInput | CoachingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachingMessages
    **/
    _count?: true | CoachingMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachingMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachingMessageMaxAggregateInputType
  }

  export type GetCoachingMessageAggregateType<T extends CoachingMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachingMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachingMessage[P]>
      : GetScalarType<T[P], AggregateCoachingMessage[P]>
  }




  export type CoachingMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingMessageWhereInput
    orderBy?: CoachingMessageOrderByWithAggregationInput | CoachingMessageOrderByWithAggregationInput[]
    by: CoachingMessageScalarFieldEnum[] | CoachingMessageScalarFieldEnum
    having?: CoachingMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachingMessageCountAggregateInputType | true
    _min?: CoachingMessageMinAggregateInputType
    _max?: CoachingMessageMaxAggregateInputType
  }

  export type CoachingMessageGroupByOutputType = {
    id: string
    userId: string
    content: string
    sessionLifts: JsonValue
    createdAt: Date
    _count: CoachingMessageCountAggregateOutputType | null
    _min: CoachingMessageMinAggregateOutputType | null
    _max: CoachingMessageMaxAggregateOutputType | null
  }

  type GetCoachingMessageGroupByPayload<T extends CoachingMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachingMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachingMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachingMessageGroupByOutputType[P]>
            : GetScalarType<T[P], CoachingMessageGroupByOutputType[P]>
        }
      >
    >


  export type CoachingMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    sessionLifts?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingMessage"]>

  export type CoachingMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    sessionLifts?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingMessage"]>

  export type CoachingMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    sessionLifts?: boolean
    createdAt?: boolean
  }

  export type CoachingMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachingMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachingMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachingMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      sessionLifts: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["coachingMessage"]>
    composites: {}
  }

  type CoachingMessageGetPayload<S extends boolean | null | undefined | CoachingMessageDefaultArgs> = $Result.GetResult<Prisma.$CoachingMessagePayload, S>

  type CoachingMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoachingMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoachingMessageCountAggregateInputType | true
    }

  export interface CoachingMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachingMessage'], meta: { name: 'CoachingMessage' } }
    /**
     * Find zero or one CoachingMessage that matches the filter.
     * @param {CoachingMessageFindUniqueArgs} args - Arguments to find a CoachingMessage
     * @example
     * // Get one CoachingMessage
     * const coachingMessage = await prisma.coachingMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachingMessageFindUniqueArgs>(args: SelectSubset<T, CoachingMessageFindUniqueArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CoachingMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoachingMessageFindUniqueOrThrowArgs} args - Arguments to find a CoachingMessage
     * @example
     * // Get one CoachingMessage
     * const coachingMessage = await prisma.coachingMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachingMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachingMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CoachingMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingMessageFindFirstArgs} args - Arguments to find a CoachingMessage
     * @example
     * // Get one CoachingMessage
     * const coachingMessage = await prisma.coachingMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachingMessageFindFirstArgs>(args?: SelectSubset<T, CoachingMessageFindFirstArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CoachingMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingMessageFindFirstOrThrowArgs} args - Arguments to find a CoachingMessage
     * @example
     * // Get one CoachingMessage
     * const coachingMessage = await prisma.coachingMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachingMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachingMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CoachingMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachingMessages
     * const coachingMessages = await prisma.coachingMessage.findMany()
     * 
     * // Get first 10 CoachingMessages
     * const coachingMessages = await prisma.coachingMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachingMessageWithIdOnly = await prisma.coachingMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachingMessageFindManyArgs>(args?: SelectSubset<T, CoachingMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CoachingMessage.
     * @param {CoachingMessageCreateArgs} args - Arguments to create a CoachingMessage.
     * @example
     * // Create one CoachingMessage
     * const CoachingMessage = await prisma.coachingMessage.create({
     *   data: {
     *     // ... data to create a CoachingMessage
     *   }
     * })
     * 
     */
    create<T extends CoachingMessageCreateArgs>(args: SelectSubset<T, CoachingMessageCreateArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CoachingMessages.
     * @param {CoachingMessageCreateManyArgs} args - Arguments to create many CoachingMessages.
     * @example
     * // Create many CoachingMessages
     * const coachingMessage = await prisma.coachingMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachingMessageCreateManyArgs>(args?: SelectSubset<T, CoachingMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachingMessages and returns the data saved in the database.
     * @param {CoachingMessageCreateManyAndReturnArgs} args - Arguments to create many CoachingMessages.
     * @example
     * // Create many CoachingMessages
     * const coachingMessage = await prisma.coachingMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachingMessages and only return the `id`
     * const coachingMessageWithIdOnly = await prisma.coachingMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachingMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachingMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CoachingMessage.
     * @param {CoachingMessageDeleteArgs} args - Arguments to delete one CoachingMessage.
     * @example
     * // Delete one CoachingMessage
     * const CoachingMessage = await prisma.coachingMessage.delete({
     *   where: {
     *     // ... filter to delete one CoachingMessage
     *   }
     * })
     * 
     */
    delete<T extends CoachingMessageDeleteArgs>(args: SelectSubset<T, CoachingMessageDeleteArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CoachingMessage.
     * @param {CoachingMessageUpdateArgs} args - Arguments to update one CoachingMessage.
     * @example
     * // Update one CoachingMessage
     * const coachingMessage = await prisma.coachingMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachingMessageUpdateArgs>(args: SelectSubset<T, CoachingMessageUpdateArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CoachingMessages.
     * @param {CoachingMessageDeleteManyArgs} args - Arguments to filter CoachingMessages to delete.
     * @example
     * // Delete a few CoachingMessages
     * const { count } = await prisma.coachingMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachingMessageDeleteManyArgs>(args?: SelectSubset<T, CoachingMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachingMessages
     * const coachingMessage = await prisma.coachingMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachingMessageUpdateManyArgs>(args: SelectSubset<T, CoachingMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoachingMessage.
     * @param {CoachingMessageUpsertArgs} args - Arguments to update or create a CoachingMessage.
     * @example
     * // Update or create a CoachingMessage
     * const coachingMessage = await prisma.coachingMessage.upsert({
     *   create: {
     *     // ... data to create a CoachingMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachingMessage we want to update
     *   }
     * })
     */
    upsert<T extends CoachingMessageUpsertArgs>(args: SelectSubset<T, CoachingMessageUpsertArgs<ExtArgs>>): Prisma__CoachingMessageClient<$Result.GetResult<Prisma.$CoachingMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CoachingMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingMessageCountArgs} args - Arguments to filter CoachingMessages to count.
     * @example
     * // Count the number of CoachingMessages
     * const count = await prisma.coachingMessage.count({
     *   where: {
     *     // ... the filter for the CoachingMessages we want to count
     *   }
     * })
    **/
    count<T extends CoachingMessageCountArgs>(
      args?: Subset<T, CoachingMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachingMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachingMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachingMessageAggregateArgs>(args: Subset<T, CoachingMessageAggregateArgs>): Prisma.PrismaPromise<GetCoachingMessageAggregateType<T>>

    /**
     * Group by CoachingMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingMessageGroupByArgs} args - Group by arguments.
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
      T extends CoachingMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachingMessageGroupByArgs['orderBy'] }
        : { orderBy?: CoachingMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachingMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachingMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachingMessage model
   */
  readonly fields: CoachingMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachingMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachingMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CoachingMessage model
   */ 
  interface CoachingMessageFieldRefs {
    readonly id: FieldRef<"CoachingMessage", 'String'>
    readonly userId: FieldRef<"CoachingMessage", 'String'>
    readonly content: FieldRef<"CoachingMessage", 'String'>
    readonly sessionLifts: FieldRef<"CoachingMessage", 'Json'>
    readonly createdAt: FieldRef<"CoachingMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachingMessage findUnique
   */
  export type CoachingMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * Filter, which CoachingMessage to fetch.
     */
    where: CoachingMessageWhereUniqueInput
  }

  /**
   * CoachingMessage findUniqueOrThrow
   */
  export type CoachingMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * Filter, which CoachingMessage to fetch.
     */
    where: CoachingMessageWhereUniqueInput
  }

  /**
   * CoachingMessage findFirst
   */
  export type CoachingMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * Filter, which CoachingMessage to fetch.
     */
    where?: CoachingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingMessages to fetch.
     */
    orderBy?: CoachingMessageOrderByWithRelationInput | CoachingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingMessages.
     */
    cursor?: CoachingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingMessages.
     */
    distinct?: CoachingMessageScalarFieldEnum | CoachingMessageScalarFieldEnum[]
  }

  /**
   * CoachingMessage findFirstOrThrow
   */
  export type CoachingMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * Filter, which CoachingMessage to fetch.
     */
    where?: CoachingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingMessages to fetch.
     */
    orderBy?: CoachingMessageOrderByWithRelationInput | CoachingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingMessages.
     */
    cursor?: CoachingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingMessages.
     */
    distinct?: CoachingMessageScalarFieldEnum | CoachingMessageScalarFieldEnum[]
  }

  /**
   * CoachingMessage findMany
   */
  export type CoachingMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * Filter, which CoachingMessages to fetch.
     */
    where?: CoachingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingMessages to fetch.
     */
    orderBy?: CoachingMessageOrderByWithRelationInput | CoachingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachingMessages.
     */
    cursor?: CoachingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingMessages.
     */
    skip?: number
    distinct?: CoachingMessageScalarFieldEnum | CoachingMessageScalarFieldEnum[]
  }

  /**
   * CoachingMessage create
   */
  export type CoachingMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachingMessage.
     */
    data: XOR<CoachingMessageCreateInput, CoachingMessageUncheckedCreateInput>
  }

  /**
   * CoachingMessage createMany
   */
  export type CoachingMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachingMessages.
     */
    data: CoachingMessageCreateManyInput | CoachingMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachingMessage createManyAndReturn
   */
  export type CoachingMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CoachingMessages.
     */
    data: CoachingMessageCreateManyInput | CoachingMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingMessage update
   */
  export type CoachingMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachingMessage.
     */
    data: XOR<CoachingMessageUpdateInput, CoachingMessageUncheckedUpdateInput>
    /**
     * Choose, which CoachingMessage to update.
     */
    where: CoachingMessageWhereUniqueInput
  }

  /**
   * CoachingMessage updateMany
   */
  export type CoachingMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachingMessages.
     */
    data: XOR<CoachingMessageUpdateManyMutationInput, CoachingMessageUncheckedUpdateManyInput>
    /**
     * Filter which CoachingMessages to update
     */
    where?: CoachingMessageWhereInput
  }

  /**
   * CoachingMessage upsert
   */
  export type CoachingMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachingMessage to update in case it exists.
     */
    where: CoachingMessageWhereUniqueInput
    /**
     * In case the CoachingMessage found by the `where` argument doesn't exist, create a new CoachingMessage with this data.
     */
    create: XOR<CoachingMessageCreateInput, CoachingMessageUncheckedCreateInput>
    /**
     * In case the CoachingMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachingMessageUpdateInput, CoachingMessageUncheckedUpdateInput>
  }

  /**
   * CoachingMessage delete
   */
  export type CoachingMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
    /**
     * Filter which CoachingMessage to delete.
     */
    where: CoachingMessageWhereUniqueInput
  }

  /**
   * CoachingMessage deleteMany
   */
  export type CoachingMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingMessages to delete
     */
    where?: CoachingMessageWhereInput
  }

  /**
   * CoachingMessage without action
   */
  export type CoachingMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingMessage
     */
    select?: CoachingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingMessageInclude<ExtArgs> | null
  }


  /**
   * Model PendingCoaching
   */

  export type AggregatePendingCoaching = {
    _count: PendingCoachingCountAggregateOutputType | null
    _min: PendingCoachingMinAggregateOutputType | null
    _max: PendingCoachingMaxAggregateOutputType | null
  }

  export type PendingCoachingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    scheduledAt: Date | null
    sessionStart: Date | null
    updatedAt: Date | null
  }

  export type PendingCoachingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    scheduledAt: Date | null
    sessionStart: Date | null
    updatedAt: Date | null
  }

  export type PendingCoachingCountAggregateOutputType = {
    id: number
    userId: number
    scheduledAt: number
    sessionStart: number
    updatedAt: number
    _all: number
  }


  export type PendingCoachingMinAggregateInputType = {
    id?: true
    userId?: true
    scheduledAt?: true
    sessionStart?: true
    updatedAt?: true
  }

  export type PendingCoachingMaxAggregateInputType = {
    id?: true
    userId?: true
    scheduledAt?: true
    sessionStart?: true
    updatedAt?: true
  }

  export type PendingCoachingCountAggregateInputType = {
    id?: true
    userId?: true
    scheduledAt?: true
    sessionStart?: true
    updatedAt?: true
    _all?: true
  }

  export type PendingCoachingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingCoaching to aggregate.
     */
    where?: PendingCoachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCoachings to fetch.
     */
    orderBy?: PendingCoachingOrderByWithRelationInput | PendingCoachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingCoachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCoachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCoachings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingCoachings
    **/
    _count?: true | PendingCoachingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingCoachingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingCoachingMaxAggregateInputType
  }

  export type GetPendingCoachingAggregateType<T extends PendingCoachingAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingCoaching]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingCoaching[P]>
      : GetScalarType<T[P], AggregatePendingCoaching[P]>
  }




  export type PendingCoachingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingCoachingWhereInput
    orderBy?: PendingCoachingOrderByWithAggregationInput | PendingCoachingOrderByWithAggregationInput[]
    by: PendingCoachingScalarFieldEnum[] | PendingCoachingScalarFieldEnum
    having?: PendingCoachingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingCoachingCountAggregateInputType | true
    _min?: PendingCoachingMinAggregateInputType
    _max?: PendingCoachingMaxAggregateInputType
  }

  export type PendingCoachingGroupByOutputType = {
    id: string
    userId: string
    scheduledAt: Date
    sessionStart: Date
    updatedAt: Date
    _count: PendingCoachingCountAggregateOutputType | null
    _min: PendingCoachingMinAggregateOutputType | null
    _max: PendingCoachingMaxAggregateOutputType | null
  }

  type GetPendingCoachingGroupByPayload<T extends PendingCoachingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingCoachingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingCoachingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingCoachingGroupByOutputType[P]>
            : GetScalarType<T[P], PendingCoachingGroupByOutputType[P]>
        }
      >
    >


  export type PendingCoachingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scheduledAt?: boolean
    sessionStart?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingCoaching"]>

  export type PendingCoachingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scheduledAt?: boolean
    sessionStart?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingCoaching"]>

  export type PendingCoachingSelectScalar = {
    id?: boolean
    userId?: boolean
    scheduledAt?: boolean
    sessionStart?: boolean
    updatedAt?: boolean
  }

  export type PendingCoachingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PendingCoachingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PendingCoachingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingCoaching"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      scheduledAt: Date
      sessionStart: Date
      updatedAt: Date
    }, ExtArgs["result"]["pendingCoaching"]>
    composites: {}
  }

  type PendingCoachingGetPayload<S extends boolean | null | undefined | PendingCoachingDefaultArgs> = $Result.GetResult<Prisma.$PendingCoachingPayload, S>

  type PendingCoachingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PendingCoachingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingCoachingCountAggregateInputType | true
    }

  export interface PendingCoachingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingCoaching'], meta: { name: 'PendingCoaching' } }
    /**
     * Find zero or one PendingCoaching that matches the filter.
     * @param {PendingCoachingFindUniqueArgs} args - Arguments to find a PendingCoaching
     * @example
     * // Get one PendingCoaching
     * const pendingCoaching = await prisma.pendingCoaching.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingCoachingFindUniqueArgs>(args: SelectSubset<T, PendingCoachingFindUniqueArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PendingCoaching that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PendingCoachingFindUniqueOrThrowArgs} args - Arguments to find a PendingCoaching
     * @example
     * // Get one PendingCoaching
     * const pendingCoaching = await prisma.pendingCoaching.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingCoachingFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingCoachingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PendingCoaching that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCoachingFindFirstArgs} args - Arguments to find a PendingCoaching
     * @example
     * // Get one PendingCoaching
     * const pendingCoaching = await prisma.pendingCoaching.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingCoachingFindFirstArgs>(args?: SelectSubset<T, PendingCoachingFindFirstArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PendingCoaching that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCoachingFindFirstOrThrowArgs} args - Arguments to find a PendingCoaching
     * @example
     * // Get one PendingCoaching
     * const pendingCoaching = await prisma.pendingCoaching.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingCoachingFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingCoachingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PendingCoachings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCoachingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingCoachings
     * const pendingCoachings = await prisma.pendingCoaching.findMany()
     * 
     * // Get first 10 PendingCoachings
     * const pendingCoachings = await prisma.pendingCoaching.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingCoachingWithIdOnly = await prisma.pendingCoaching.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingCoachingFindManyArgs>(args?: SelectSubset<T, PendingCoachingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PendingCoaching.
     * @param {PendingCoachingCreateArgs} args - Arguments to create a PendingCoaching.
     * @example
     * // Create one PendingCoaching
     * const PendingCoaching = await prisma.pendingCoaching.create({
     *   data: {
     *     // ... data to create a PendingCoaching
     *   }
     * })
     * 
     */
    create<T extends PendingCoachingCreateArgs>(args: SelectSubset<T, PendingCoachingCreateArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PendingCoachings.
     * @param {PendingCoachingCreateManyArgs} args - Arguments to create many PendingCoachings.
     * @example
     * // Create many PendingCoachings
     * const pendingCoaching = await prisma.pendingCoaching.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingCoachingCreateManyArgs>(args?: SelectSubset<T, PendingCoachingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingCoachings and returns the data saved in the database.
     * @param {PendingCoachingCreateManyAndReturnArgs} args - Arguments to create many PendingCoachings.
     * @example
     * // Create many PendingCoachings
     * const pendingCoaching = await prisma.pendingCoaching.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingCoachings and only return the `id`
     * const pendingCoachingWithIdOnly = await prisma.pendingCoaching.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingCoachingCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingCoachingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PendingCoaching.
     * @param {PendingCoachingDeleteArgs} args - Arguments to delete one PendingCoaching.
     * @example
     * // Delete one PendingCoaching
     * const PendingCoaching = await prisma.pendingCoaching.delete({
     *   where: {
     *     // ... filter to delete one PendingCoaching
     *   }
     * })
     * 
     */
    delete<T extends PendingCoachingDeleteArgs>(args: SelectSubset<T, PendingCoachingDeleteArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PendingCoaching.
     * @param {PendingCoachingUpdateArgs} args - Arguments to update one PendingCoaching.
     * @example
     * // Update one PendingCoaching
     * const pendingCoaching = await prisma.pendingCoaching.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingCoachingUpdateArgs>(args: SelectSubset<T, PendingCoachingUpdateArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PendingCoachings.
     * @param {PendingCoachingDeleteManyArgs} args - Arguments to filter PendingCoachings to delete.
     * @example
     * // Delete a few PendingCoachings
     * const { count } = await prisma.pendingCoaching.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingCoachingDeleteManyArgs>(args?: SelectSubset<T, PendingCoachingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingCoachings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCoachingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingCoachings
     * const pendingCoaching = await prisma.pendingCoaching.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingCoachingUpdateManyArgs>(args: SelectSubset<T, PendingCoachingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingCoaching.
     * @param {PendingCoachingUpsertArgs} args - Arguments to update or create a PendingCoaching.
     * @example
     * // Update or create a PendingCoaching
     * const pendingCoaching = await prisma.pendingCoaching.upsert({
     *   create: {
     *     // ... data to create a PendingCoaching
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingCoaching we want to update
     *   }
     * })
     */
    upsert<T extends PendingCoachingUpsertArgs>(args: SelectSubset<T, PendingCoachingUpsertArgs<ExtArgs>>): Prisma__PendingCoachingClient<$Result.GetResult<Prisma.$PendingCoachingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PendingCoachings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCoachingCountArgs} args - Arguments to filter PendingCoachings to count.
     * @example
     * // Count the number of PendingCoachings
     * const count = await prisma.pendingCoaching.count({
     *   where: {
     *     // ... the filter for the PendingCoachings we want to count
     *   }
     * })
    **/
    count<T extends PendingCoachingCountArgs>(
      args?: Subset<T, PendingCoachingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingCoachingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingCoaching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCoachingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendingCoachingAggregateArgs>(args: Subset<T, PendingCoachingAggregateArgs>): Prisma.PrismaPromise<GetPendingCoachingAggregateType<T>>

    /**
     * Group by PendingCoaching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCoachingGroupByArgs} args - Group by arguments.
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
      T extends PendingCoachingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingCoachingGroupByArgs['orderBy'] }
        : { orderBy?: PendingCoachingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendingCoachingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingCoachingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingCoaching model
   */
  readonly fields: PendingCoachingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingCoaching.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingCoachingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PendingCoaching model
   */ 
  interface PendingCoachingFieldRefs {
    readonly id: FieldRef<"PendingCoaching", 'String'>
    readonly userId: FieldRef<"PendingCoaching", 'String'>
    readonly scheduledAt: FieldRef<"PendingCoaching", 'DateTime'>
    readonly sessionStart: FieldRef<"PendingCoaching", 'DateTime'>
    readonly updatedAt: FieldRef<"PendingCoaching", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendingCoaching findUnique
   */
  export type PendingCoachingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * Filter, which PendingCoaching to fetch.
     */
    where: PendingCoachingWhereUniqueInput
  }

  /**
   * PendingCoaching findUniqueOrThrow
   */
  export type PendingCoachingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * Filter, which PendingCoaching to fetch.
     */
    where: PendingCoachingWhereUniqueInput
  }

  /**
   * PendingCoaching findFirst
   */
  export type PendingCoachingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * Filter, which PendingCoaching to fetch.
     */
    where?: PendingCoachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCoachings to fetch.
     */
    orderBy?: PendingCoachingOrderByWithRelationInput | PendingCoachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingCoachings.
     */
    cursor?: PendingCoachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCoachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCoachings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingCoachings.
     */
    distinct?: PendingCoachingScalarFieldEnum | PendingCoachingScalarFieldEnum[]
  }

  /**
   * PendingCoaching findFirstOrThrow
   */
  export type PendingCoachingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * Filter, which PendingCoaching to fetch.
     */
    where?: PendingCoachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCoachings to fetch.
     */
    orderBy?: PendingCoachingOrderByWithRelationInput | PendingCoachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingCoachings.
     */
    cursor?: PendingCoachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCoachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCoachings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingCoachings.
     */
    distinct?: PendingCoachingScalarFieldEnum | PendingCoachingScalarFieldEnum[]
  }

  /**
   * PendingCoaching findMany
   */
  export type PendingCoachingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * Filter, which PendingCoachings to fetch.
     */
    where?: PendingCoachingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingCoachings to fetch.
     */
    orderBy?: PendingCoachingOrderByWithRelationInput | PendingCoachingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingCoachings.
     */
    cursor?: PendingCoachingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingCoachings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingCoachings.
     */
    skip?: number
    distinct?: PendingCoachingScalarFieldEnum | PendingCoachingScalarFieldEnum[]
  }

  /**
   * PendingCoaching create
   */
  export type PendingCoachingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * The data needed to create a PendingCoaching.
     */
    data: XOR<PendingCoachingCreateInput, PendingCoachingUncheckedCreateInput>
  }

  /**
   * PendingCoaching createMany
   */
  export type PendingCoachingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingCoachings.
     */
    data: PendingCoachingCreateManyInput | PendingCoachingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingCoaching createManyAndReturn
   */
  export type PendingCoachingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PendingCoachings.
     */
    data: PendingCoachingCreateManyInput | PendingCoachingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingCoaching update
   */
  export type PendingCoachingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * The data needed to update a PendingCoaching.
     */
    data: XOR<PendingCoachingUpdateInput, PendingCoachingUncheckedUpdateInput>
    /**
     * Choose, which PendingCoaching to update.
     */
    where: PendingCoachingWhereUniqueInput
  }

  /**
   * PendingCoaching updateMany
   */
  export type PendingCoachingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingCoachings.
     */
    data: XOR<PendingCoachingUpdateManyMutationInput, PendingCoachingUncheckedUpdateManyInput>
    /**
     * Filter which PendingCoachings to update
     */
    where?: PendingCoachingWhereInput
  }

  /**
   * PendingCoaching upsert
   */
  export type PendingCoachingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * The filter to search for the PendingCoaching to update in case it exists.
     */
    where: PendingCoachingWhereUniqueInput
    /**
     * In case the PendingCoaching found by the `where` argument doesn't exist, create a new PendingCoaching with this data.
     */
    create: XOR<PendingCoachingCreateInput, PendingCoachingUncheckedCreateInput>
    /**
     * In case the PendingCoaching was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingCoachingUpdateInput, PendingCoachingUncheckedUpdateInput>
  }

  /**
   * PendingCoaching delete
   */
  export type PendingCoachingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
    /**
     * Filter which PendingCoaching to delete.
     */
    where: PendingCoachingWhereUniqueInput
  }

  /**
   * PendingCoaching deleteMany
   */
  export type PendingCoachingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingCoachings to delete
     */
    where?: PendingCoachingWhereInput
  }

  /**
   * PendingCoaching without action
   */
  export type PendingCoachingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCoaching
     */
    select?: PendingCoachingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingCoachingInclude<ExtArgs> | null
  }


  /**
   * Model PendingNotification
   */

  export type AggregatePendingNotification = {
    _count: PendingNotificationCountAggregateOutputType | null
    _min: PendingNotificationMinAggregateOutputType | null
    _max: PendingNotificationMaxAggregateOutputType | null
  }

  export type PendingNotificationMinAggregateOutputType = {
    id: string | null
    liftOwnerId: string | null
    liftId: string | null
    actorId: string | null
    sendAfter: Date | null
    sent: boolean | null
    createdAt: Date | null
  }

  export type PendingNotificationMaxAggregateOutputType = {
    id: string | null
    liftOwnerId: string | null
    liftId: string | null
    actorId: string | null
    sendAfter: Date | null
    sent: boolean | null
    createdAt: Date | null
  }

  export type PendingNotificationCountAggregateOutputType = {
    id: number
    liftOwnerId: number
    liftId: number
    actorId: number
    comments: number
    reactions: number
    sendAfter: number
    sent: number
    createdAt: number
    _all: number
  }


  export type PendingNotificationMinAggregateInputType = {
    id?: true
    liftOwnerId?: true
    liftId?: true
    actorId?: true
    sendAfter?: true
    sent?: true
    createdAt?: true
  }

  export type PendingNotificationMaxAggregateInputType = {
    id?: true
    liftOwnerId?: true
    liftId?: true
    actorId?: true
    sendAfter?: true
    sent?: true
    createdAt?: true
  }

  export type PendingNotificationCountAggregateInputType = {
    id?: true
    liftOwnerId?: true
    liftId?: true
    actorId?: true
    comments?: true
    reactions?: true
    sendAfter?: true
    sent?: true
    createdAt?: true
    _all?: true
  }

  export type PendingNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingNotification to aggregate.
     */
    where?: PendingNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingNotifications to fetch.
     */
    orderBy?: PendingNotificationOrderByWithRelationInput | PendingNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingNotifications
    **/
    _count?: true | PendingNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingNotificationMaxAggregateInputType
  }

  export type GetPendingNotificationAggregateType<T extends PendingNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingNotification[P]>
      : GetScalarType<T[P], AggregatePendingNotification[P]>
  }




  export type PendingNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingNotificationWhereInput
    orderBy?: PendingNotificationOrderByWithAggregationInput | PendingNotificationOrderByWithAggregationInput[]
    by: PendingNotificationScalarFieldEnum[] | PendingNotificationScalarFieldEnum
    having?: PendingNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingNotificationCountAggregateInputType | true
    _min?: PendingNotificationMinAggregateInputType
    _max?: PendingNotificationMaxAggregateInputType
  }

  export type PendingNotificationGroupByOutputType = {
    id: string
    liftOwnerId: string
    liftId: string
    actorId: string
    comments: string[]
    reactions: string[]
    sendAfter: Date
    sent: boolean
    createdAt: Date
    _count: PendingNotificationCountAggregateOutputType | null
    _min: PendingNotificationMinAggregateOutputType | null
    _max: PendingNotificationMaxAggregateOutputType | null
  }

  type GetPendingNotificationGroupByPayload<T extends PendingNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], PendingNotificationGroupByOutputType[P]>
        }
      >
    >


  export type PendingNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liftOwnerId?: boolean
    liftId?: boolean
    actorId?: boolean
    comments?: boolean
    reactions?: boolean
    sendAfter?: boolean
    sent?: boolean
    createdAt?: boolean
    liftOwner?: boolean | UserDefaultArgs<ExtArgs>
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingNotification"]>

  export type PendingNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liftOwnerId?: boolean
    liftId?: boolean
    actorId?: boolean
    comments?: boolean
    reactions?: boolean
    sendAfter?: boolean
    sent?: boolean
    createdAt?: boolean
    liftOwner?: boolean | UserDefaultArgs<ExtArgs>
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingNotification"]>

  export type PendingNotificationSelectScalar = {
    id?: boolean
    liftOwnerId?: boolean
    liftId?: boolean
    actorId?: boolean
    comments?: boolean
    reactions?: boolean
    sendAfter?: boolean
    sent?: boolean
    createdAt?: boolean
  }

  export type PendingNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liftOwner?: boolean | UserDefaultArgs<ExtArgs>
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PendingNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liftOwner?: boolean | UserDefaultArgs<ExtArgs>
    lift?: boolean | LiftDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PendingNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingNotification"
    objects: {
      liftOwner: Prisma.$UserPayload<ExtArgs>
      lift: Prisma.$LiftPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liftOwnerId: string
      liftId: string
      actorId: string
      comments: string[]
      reactions: string[]
      sendAfter: Date
      sent: boolean
      createdAt: Date
    }, ExtArgs["result"]["pendingNotification"]>
    composites: {}
  }

  type PendingNotificationGetPayload<S extends boolean | null | undefined | PendingNotificationDefaultArgs> = $Result.GetResult<Prisma.$PendingNotificationPayload, S>

  type PendingNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PendingNotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingNotificationCountAggregateInputType | true
    }

  export interface PendingNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingNotification'], meta: { name: 'PendingNotification' } }
    /**
     * Find zero or one PendingNotification that matches the filter.
     * @param {PendingNotificationFindUniqueArgs} args - Arguments to find a PendingNotification
     * @example
     * // Get one PendingNotification
     * const pendingNotification = await prisma.pendingNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingNotificationFindUniqueArgs>(args: SelectSubset<T, PendingNotificationFindUniqueArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PendingNotification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PendingNotificationFindUniqueOrThrowArgs} args - Arguments to find a PendingNotification
     * @example
     * // Get one PendingNotification
     * const pendingNotification = await prisma.pendingNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PendingNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingNotificationFindFirstArgs} args - Arguments to find a PendingNotification
     * @example
     * // Get one PendingNotification
     * const pendingNotification = await prisma.pendingNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingNotificationFindFirstArgs>(args?: SelectSubset<T, PendingNotificationFindFirstArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PendingNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingNotificationFindFirstOrThrowArgs} args - Arguments to find a PendingNotification
     * @example
     * // Get one PendingNotification
     * const pendingNotification = await prisma.pendingNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PendingNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingNotifications
     * const pendingNotifications = await prisma.pendingNotification.findMany()
     * 
     * // Get first 10 PendingNotifications
     * const pendingNotifications = await prisma.pendingNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingNotificationWithIdOnly = await prisma.pendingNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingNotificationFindManyArgs>(args?: SelectSubset<T, PendingNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PendingNotification.
     * @param {PendingNotificationCreateArgs} args - Arguments to create a PendingNotification.
     * @example
     * // Create one PendingNotification
     * const PendingNotification = await prisma.pendingNotification.create({
     *   data: {
     *     // ... data to create a PendingNotification
     *   }
     * })
     * 
     */
    create<T extends PendingNotificationCreateArgs>(args: SelectSubset<T, PendingNotificationCreateArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PendingNotifications.
     * @param {PendingNotificationCreateManyArgs} args - Arguments to create many PendingNotifications.
     * @example
     * // Create many PendingNotifications
     * const pendingNotification = await prisma.pendingNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingNotificationCreateManyArgs>(args?: SelectSubset<T, PendingNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingNotifications and returns the data saved in the database.
     * @param {PendingNotificationCreateManyAndReturnArgs} args - Arguments to create many PendingNotifications.
     * @example
     * // Create many PendingNotifications
     * const pendingNotification = await prisma.pendingNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingNotifications and only return the `id`
     * const pendingNotificationWithIdOnly = await prisma.pendingNotification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PendingNotification.
     * @param {PendingNotificationDeleteArgs} args - Arguments to delete one PendingNotification.
     * @example
     * // Delete one PendingNotification
     * const PendingNotification = await prisma.pendingNotification.delete({
     *   where: {
     *     // ... filter to delete one PendingNotification
     *   }
     * })
     * 
     */
    delete<T extends PendingNotificationDeleteArgs>(args: SelectSubset<T, PendingNotificationDeleteArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PendingNotification.
     * @param {PendingNotificationUpdateArgs} args - Arguments to update one PendingNotification.
     * @example
     * // Update one PendingNotification
     * const pendingNotification = await prisma.pendingNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingNotificationUpdateArgs>(args: SelectSubset<T, PendingNotificationUpdateArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PendingNotifications.
     * @param {PendingNotificationDeleteManyArgs} args - Arguments to filter PendingNotifications to delete.
     * @example
     * // Delete a few PendingNotifications
     * const { count } = await prisma.pendingNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingNotificationDeleteManyArgs>(args?: SelectSubset<T, PendingNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingNotifications
     * const pendingNotification = await prisma.pendingNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingNotificationUpdateManyArgs>(args: SelectSubset<T, PendingNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingNotification.
     * @param {PendingNotificationUpsertArgs} args - Arguments to update or create a PendingNotification.
     * @example
     * // Update or create a PendingNotification
     * const pendingNotification = await prisma.pendingNotification.upsert({
     *   create: {
     *     // ... data to create a PendingNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingNotification we want to update
     *   }
     * })
     */
    upsert<T extends PendingNotificationUpsertArgs>(args: SelectSubset<T, PendingNotificationUpsertArgs<ExtArgs>>): Prisma__PendingNotificationClient<$Result.GetResult<Prisma.$PendingNotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PendingNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingNotificationCountArgs} args - Arguments to filter PendingNotifications to count.
     * @example
     * // Count the number of PendingNotifications
     * const count = await prisma.pendingNotification.count({
     *   where: {
     *     // ... the filter for the PendingNotifications we want to count
     *   }
     * })
    **/
    count<T extends PendingNotificationCountArgs>(
      args?: Subset<T, PendingNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendingNotificationAggregateArgs>(args: Subset<T, PendingNotificationAggregateArgs>): Prisma.PrismaPromise<GetPendingNotificationAggregateType<T>>

    /**
     * Group by PendingNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingNotificationGroupByArgs} args - Group by arguments.
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
      T extends PendingNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingNotificationGroupByArgs['orderBy'] }
        : { orderBy?: PendingNotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendingNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingNotification model
   */
  readonly fields: PendingNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    liftOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    lift<T extends LiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LiftDefaultArgs<ExtArgs>>): Prisma__LiftClient<$Result.GetResult<Prisma.$LiftPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PendingNotification model
   */ 
  interface PendingNotificationFieldRefs {
    readonly id: FieldRef<"PendingNotification", 'String'>
    readonly liftOwnerId: FieldRef<"PendingNotification", 'String'>
    readonly liftId: FieldRef<"PendingNotification", 'String'>
    readonly actorId: FieldRef<"PendingNotification", 'String'>
    readonly comments: FieldRef<"PendingNotification", 'String[]'>
    readonly reactions: FieldRef<"PendingNotification", 'String[]'>
    readonly sendAfter: FieldRef<"PendingNotification", 'DateTime'>
    readonly sent: FieldRef<"PendingNotification", 'Boolean'>
    readonly createdAt: FieldRef<"PendingNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendingNotification findUnique
   */
  export type PendingNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PendingNotification to fetch.
     */
    where: PendingNotificationWhereUniqueInput
  }

  /**
   * PendingNotification findUniqueOrThrow
   */
  export type PendingNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PendingNotification to fetch.
     */
    where: PendingNotificationWhereUniqueInput
  }

  /**
   * PendingNotification findFirst
   */
  export type PendingNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PendingNotification to fetch.
     */
    where?: PendingNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingNotifications to fetch.
     */
    orderBy?: PendingNotificationOrderByWithRelationInput | PendingNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingNotifications.
     */
    cursor?: PendingNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingNotifications.
     */
    distinct?: PendingNotificationScalarFieldEnum | PendingNotificationScalarFieldEnum[]
  }

  /**
   * PendingNotification findFirstOrThrow
   */
  export type PendingNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PendingNotification to fetch.
     */
    where?: PendingNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingNotifications to fetch.
     */
    orderBy?: PendingNotificationOrderByWithRelationInput | PendingNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingNotifications.
     */
    cursor?: PendingNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingNotifications.
     */
    distinct?: PendingNotificationScalarFieldEnum | PendingNotificationScalarFieldEnum[]
  }

  /**
   * PendingNotification findMany
   */
  export type PendingNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * Filter, which PendingNotifications to fetch.
     */
    where?: PendingNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingNotifications to fetch.
     */
    orderBy?: PendingNotificationOrderByWithRelationInput | PendingNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingNotifications.
     */
    cursor?: PendingNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingNotifications.
     */
    skip?: number
    distinct?: PendingNotificationScalarFieldEnum | PendingNotificationScalarFieldEnum[]
  }

  /**
   * PendingNotification create
   */
  export type PendingNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a PendingNotification.
     */
    data: XOR<PendingNotificationCreateInput, PendingNotificationUncheckedCreateInput>
  }

  /**
   * PendingNotification createMany
   */
  export type PendingNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingNotifications.
     */
    data: PendingNotificationCreateManyInput | PendingNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingNotification createManyAndReturn
   */
  export type PendingNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PendingNotifications.
     */
    data: PendingNotificationCreateManyInput | PendingNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingNotification update
   */
  export type PendingNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a PendingNotification.
     */
    data: XOR<PendingNotificationUpdateInput, PendingNotificationUncheckedUpdateInput>
    /**
     * Choose, which PendingNotification to update.
     */
    where: PendingNotificationWhereUniqueInput
  }

  /**
   * PendingNotification updateMany
   */
  export type PendingNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingNotifications.
     */
    data: XOR<PendingNotificationUpdateManyMutationInput, PendingNotificationUncheckedUpdateManyInput>
    /**
     * Filter which PendingNotifications to update
     */
    where?: PendingNotificationWhereInput
  }

  /**
   * PendingNotification upsert
   */
  export type PendingNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the PendingNotification to update in case it exists.
     */
    where: PendingNotificationWhereUniqueInput
    /**
     * In case the PendingNotification found by the `where` argument doesn't exist, create a new PendingNotification with this data.
     */
    create: XOR<PendingNotificationCreateInput, PendingNotificationUncheckedCreateInput>
    /**
     * In case the PendingNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingNotificationUpdateInput, PendingNotificationUncheckedUpdateInput>
  }

  /**
   * PendingNotification delete
   */
  export type PendingNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
    /**
     * Filter which PendingNotification to delete.
     */
    where: PendingNotificationWhereUniqueInput
  }

  /**
   * PendingNotification deleteMany
   */
  export type PendingNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingNotifications to delete
     */
    where?: PendingNotificationWhereInput
  }

  /**
   * PendingNotification without action
   */
  export type PendingNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingNotification
     */
    select?: PendingNotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingNotificationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LiftScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    weight: 'weight',
    reps: 'reps',
    oneRM: 'oneRM',
    loggedAt: 'loggedAt'
  };

  export type LiftScalarFieldEnum = (typeof LiftScalarFieldEnum)[keyof typeof LiftScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    liftId: 'liftId',
    authorId: 'authorId',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    liftId: 'liftId',
    authorId: 'authorId',
    emoji: 'emoji',
    createdAt: 'createdAt'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const InviteCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    usedBy: 'usedBy',
    usedAt: 'usedAt'
  };

  export type InviteCodeScalarFieldEnum = (typeof InviteCodeScalarFieldEnum)[keyof typeof InviteCodeScalarFieldEnum]


  export const DailyUpdateScalarFieldEnum: {
    id: 'id',
    content: 'content',
    generatedAt: 'generatedAt'
  };

  export type DailyUpdateScalarFieldEnum = (typeof DailyUpdateScalarFieldEnum)[keyof typeof DailyUpdateScalarFieldEnum]


  export const PushSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    createdAt: 'createdAt'
  };

  export type PushSubscriptionScalarFieldEnum = (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum]


  export const UserCoachSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    goalsText: 'goalsText',
    coachingStyle: 'coachingStyle',
    updatedAt: 'updatedAt'
  };

  export type UserCoachSettingsScalarFieldEnum = (typeof UserCoachSettingsScalarFieldEnum)[keyof typeof UserCoachSettingsScalarFieldEnum]


  export const CoachingMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    sessionLifts: 'sessionLifts',
    createdAt: 'createdAt'
  };

  export type CoachingMessageScalarFieldEnum = (typeof CoachingMessageScalarFieldEnum)[keyof typeof CoachingMessageScalarFieldEnum]


  export const PendingCoachingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scheduledAt: 'scheduledAt',
    sessionStart: 'sessionStart',
    updatedAt: 'updatedAt'
  };

  export type PendingCoachingScalarFieldEnum = (typeof PendingCoachingScalarFieldEnum)[keyof typeof PendingCoachingScalarFieldEnum]


  export const PendingNotificationScalarFieldEnum: {
    id: 'id',
    liftOwnerId: 'liftOwnerId',
    liftId: 'liftId',
    actorId: 'actorId',
    comments: 'comments',
    reactions: 'reactions',
    sendAfter: 'sendAfter',
    sent: 'sent',
    createdAt: 'createdAt'
  };

  export type PendingNotificationScalarFieldEnum = (typeof PendingNotificationScalarFieldEnum)[keyof typeof PendingNotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lifts?: LiftListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
    ownedPendingNotifications?: PendingNotificationListRelationFilter
    actorPendingNotifications?: PendingNotificationListRelationFilter
    coachSettings?: XOR<UserCoachSettingsNullableRelationFilter, UserCoachSettingsWhereInput> | null
    coachingMessages?: CoachingMessageListRelationFilter
    pendingCoaching?: XOR<PendingCoachingNullableRelationFilter, PendingCoachingWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    lifts?: LiftOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    pushSubscriptions?: PushSubscriptionOrderByRelationAggregateInput
    ownedPendingNotifications?: PendingNotificationOrderByRelationAggregateInput
    actorPendingNotifications?: PendingNotificationOrderByRelationAggregateInput
    coachSettings?: UserCoachSettingsOrderByWithRelationInput
    coachingMessages?: CoachingMessageOrderByRelationAggregateInput
    pendingCoaching?: PendingCoachingOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lifts?: LiftListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    pushSubscriptions?: PushSubscriptionListRelationFilter
    ownedPendingNotifications?: PendingNotificationListRelationFilter
    actorPendingNotifications?: PendingNotificationListRelationFilter
    coachSettings?: XOR<UserCoachSettingsNullableRelationFilter, UserCoachSettingsWhereInput> | null
    coachingMessages?: CoachingMessageListRelationFilter
    pendingCoaching?: XOR<PendingCoachingNullableRelationFilter, PendingCoachingWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LiftWhereInput = {
    AND?: LiftWhereInput | LiftWhereInput[]
    OR?: LiftWhereInput[]
    NOT?: LiftWhereInput | LiftWhereInput[]
    id?: StringFilter<"Lift"> | string
    userId?: StringFilter<"Lift"> | string
    type?: StringFilter<"Lift"> | string
    weight?: FloatFilter<"Lift"> | number
    reps?: IntFilter<"Lift"> | number
    oneRM?: FloatFilter<"Lift"> | number
    loggedAt?: DateTimeFilter<"Lift"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    pendingNotifications?: PendingNotificationListRelationFilter
  }

  export type LiftOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    oneRM?: SortOrder
    loggedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    pendingNotifications?: PendingNotificationOrderByRelationAggregateInput
  }

  export type LiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiftWhereInput | LiftWhereInput[]
    OR?: LiftWhereInput[]
    NOT?: LiftWhereInput | LiftWhereInput[]
    userId?: StringFilter<"Lift"> | string
    type?: StringFilter<"Lift"> | string
    weight?: FloatFilter<"Lift"> | number
    reps?: IntFilter<"Lift"> | number
    oneRM?: FloatFilter<"Lift"> | number
    loggedAt?: DateTimeFilter<"Lift"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
    pendingNotifications?: PendingNotificationListRelationFilter
  }, "id">

  export type LiftOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    oneRM?: SortOrder
    loggedAt?: SortOrder
    _count?: LiftCountOrderByAggregateInput
    _avg?: LiftAvgOrderByAggregateInput
    _max?: LiftMaxOrderByAggregateInput
    _min?: LiftMinOrderByAggregateInput
    _sum?: LiftSumOrderByAggregateInput
  }

  export type LiftScalarWhereWithAggregatesInput = {
    AND?: LiftScalarWhereWithAggregatesInput | LiftScalarWhereWithAggregatesInput[]
    OR?: LiftScalarWhereWithAggregatesInput[]
    NOT?: LiftScalarWhereWithAggregatesInput | LiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lift"> | string
    userId?: StringWithAggregatesFilter<"Lift"> | string
    type?: StringWithAggregatesFilter<"Lift"> | string
    weight?: FloatWithAggregatesFilter<"Lift"> | number
    reps?: IntWithAggregatesFilter<"Lift"> | number
    oneRM?: FloatWithAggregatesFilter<"Lift"> | number
    loggedAt?: DateTimeWithAggregatesFilter<"Lift"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    liftId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    lift?: XOR<LiftRelationFilter, LiftWhereInput>
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    lift?: LiftOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    liftId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    lift?: XOR<LiftRelationFilter, LiftWhereInput>
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    liftId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    body?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    id?: StringFilter<"Reaction"> | string
    liftId?: StringFilter<"Reaction"> | string
    authorId?: StringFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    lift?: XOR<LiftRelationFilter, LiftWhereInput>
    author?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    lift?: LiftOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    liftId_authorId_emoji?: ReactionLiftIdAuthorIdEmojiCompoundUniqueInput
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    liftId?: StringFilter<"Reaction"> | string
    authorId?: StringFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    lift?: XOR<LiftRelationFilter, LiftWhereInput>
    author?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "liftId_authorId_emoji">

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reaction"> | string
    liftId?: StringWithAggregatesFilter<"Reaction"> | string
    authorId?: StringWithAggregatesFilter<"Reaction"> | string
    emoji?: StringWithAggregatesFilter<"Reaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
  }

  export type InviteCodeWhereInput = {
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    id?: StringFilter<"InviteCode"> | string
    code?: StringFilter<"InviteCode"> | string
    usedBy?: StringNullableFilter<"InviteCode"> | string | null
    usedAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
  }

  export type InviteCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    usedBy?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
  }

  export type InviteCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    usedBy?: StringNullableFilter<"InviteCode"> | string | null
    usedAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
  }, "id" | "code">

  export type InviteCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    usedBy?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    _count?: InviteCodeCountOrderByAggregateInput
    _max?: InviteCodeMaxOrderByAggregateInput
    _min?: InviteCodeMinOrderByAggregateInput
  }

  export type InviteCodeScalarWhereWithAggregatesInput = {
    AND?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    OR?: InviteCodeScalarWhereWithAggregatesInput[]
    NOT?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InviteCode"> | string
    code?: StringWithAggregatesFilter<"InviteCode"> | string
    usedBy?: StringNullableWithAggregatesFilter<"InviteCode"> | string | null
    usedAt?: DateTimeNullableWithAggregatesFilter<"InviteCode"> | Date | string | null
  }

  export type DailyUpdateWhereInput = {
    AND?: DailyUpdateWhereInput | DailyUpdateWhereInput[]
    OR?: DailyUpdateWhereInput[]
    NOT?: DailyUpdateWhereInput | DailyUpdateWhereInput[]
    id?: StringFilter<"DailyUpdate"> | string
    content?: StringFilter<"DailyUpdate"> | string
    generatedAt?: DateTimeFilter<"DailyUpdate"> | Date | string
  }

  export type DailyUpdateOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
  }

  export type DailyUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyUpdateWhereInput | DailyUpdateWhereInput[]
    OR?: DailyUpdateWhereInput[]
    NOT?: DailyUpdateWhereInput | DailyUpdateWhereInput[]
    content?: StringFilter<"DailyUpdate"> | string
    generatedAt?: DateTimeFilter<"DailyUpdate"> | Date | string
  }, "id">

  export type DailyUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
    _count?: DailyUpdateCountOrderByAggregateInput
    _max?: DailyUpdateMaxOrderByAggregateInput
    _min?: DailyUpdateMinOrderByAggregateInput
  }

  export type DailyUpdateScalarWhereWithAggregatesInput = {
    AND?: DailyUpdateScalarWhereWithAggregatesInput | DailyUpdateScalarWhereWithAggregatesInput[]
    OR?: DailyUpdateScalarWhereWithAggregatesInput[]
    NOT?: DailyUpdateScalarWhereWithAggregatesInput | DailyUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyUpdate"> | string
    content?: StringWithAggregatesFilter<"DailyUpdate"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"DailyUpdate"> | Date | string
  }

  export type PushSubscriptionWhereInput = {
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    id?: StringFilter<"PushSubscription"> | string
    userId?: StringFilter<"PushSubscription"> | string
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PushSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    endpoint?: string
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    userId?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "endpoint">

  export type PushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    _count?: PushSubscriptionCountOrderByAggregateInput
    _max?: PushSubscriptionMaxOrderByAggregateInput
    _min?: PushSubscriptionMinOrderByAggregateInput
  }

  export type PushSubscriptionScalarWhereWithAggregatesInput = {
    AND?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    OR?: PushSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PushSubscription"> | string
    userId?: StringWithAggregatesFilter<"PushSubscription"> | string
    endpoint?: StringWithAggregatesFilter<"PushSubscription"> | string
    p256dh?: StringWithAggregatesFilter<"PushSubscription"> | string
    auth?: StringWithAggregatesFilter<"PushSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
  }

  export type UserCoachSettingsWhereInput = {
    AND?: UserCoachSettingsWhereInput | UserCoachSettingsWhereInput[]
    OR?: UserCoachSettingsWhereInput[]
    NOT?: UserCoachSettingsWhereInput | UserCoachSettingsWhereInput[]
    id?: StringFilter<"UserCoachSettings"> | string
    userId?: StringFilter<"UserCoachSettings"> | string
    goalsText?: StringFilter<"UserCoachSettings"> | string
    coachingStyle?: StringFilter<"UserCoachSettings"> | string
    updatedAt?: DateTimeFilter<"UserCoachSettings"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserCoachSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalsText?: SortOrder
    coachingStyle?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserCoachSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserCoachSettingsWhereInput | UserCoachSettingsWhereInput[]
    OR?: UserCoachSettingsWhereInput[]
    NOT?: UserCoachSettingsWhereInput | UserCoachSettingsWhereInput[]
    goalsText?: StringFilter<"UserCoachSettings"> | string
    coachingStyle?: StringFilter<"UserCoachSettings"> | string
    updatedAt?: DateTimeFilter<"UserCoachSettings"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserCoachSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalsText?: SortOrder
    coachingStyle?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCoachSettingsCountOrderByAggregateInput
    _max?: UserCoachSettingsMaxOrderByAggregateInput
    _min?: UserCoachSettingsMinOrderByAggregateInput
  }

  export type UserCoachSettingsScalarWhereWithAggregatesInput = {
    AND?: UserCoachSettingsScalarWhereWithAggregatesInput | UserCoachSettingsScalarWhereWithAggregatesInput[]
    OR?: UserCoachSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserCoachSettingsScalarWhereWithAggregatesInput | UserCoachSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCoachSettings"> | string
    userId?: StringWithAggregatesFilter<"UserCoachSettings"> | string
    goalsText?: StringWithAggregatesFilter<"UserCoachSettings"> | string
    coachingStyle?: StringWithAggregatesFilter<"UserCoachSettings"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCoachSettings"> | Date | string
  }

  export type CoachingMessageWhereInput = {
    AND?: CoachingMessageWhereInput | CoachingMessageWhereInput[]
    OR?: CoachingMessageWhereInput[]
    NOT?: CoachingMessageWhereInput | CoachingMessageWhereInput[]
    id?: StringFilter<"CoachingMessage"> | string
    userId?: StringFilter<"CoachingMessage"> | string
    content?: StringFilter<"CoachingMessage"> | string
    sessionLifts?: JsonFilter<"CoachingMessage">
    createdAt?: DateTimeFilter<"CoachingMessage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CoachingMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    sessionLifts?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoachingMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoachingMessageWhereInput | CoachingMessageWhereInput[]
    OR?: CoachingMessageWhereInput[]
    NOT?: CoachingMessageWhereInput | CoachingMessageWhereInput[]
    userId?: StringFilter<"CoachingMessage"> | string
    content?: StringFilter<"CoachingMessage"> | string
    sessionLifts?: JsonFilter<"CoachingMessage">
    createdAt?: DateTimeFilter<"CoachingMessage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CoachingMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    sessionLifts?: SortOrder
    createdAt?: SortOrder
    _count?: CoachingMessageCountOrderByAggregateInput
    _max?: CoachingMessageMaxOrderByAggregateInput
    _min?: CoachingMessageMinOrderByAggregateInput
  }

  export type CoachingMessageScalarWhereWithAggregatesInput = {
    AND?: CoachingMessageScalarWhereWithAggregatesInput | CoachingMessageScalarWhereWithAggregatesInput[]
    OR?: CoachingMessageScalarWhereWithAggregatesInput[]
    NOT?: CoachingMessageScalarWhereWithAggregatesInput | CoachingMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachingMessage"> | string
    userId?: StringWithAggregatesFilter<"CoachingMessage"> | string
    content?: StringWithAggregatesFilter<"CoachingMessage"> | string
    sessionLifts?: JsonWithAggregatesFilter<"CoachingMessage">
    createdAt?: DateTimeWithAggregatesFilter<"CoachingMessage"> | Date | string
  }

  export type PendingCoachingWhereInput = {
    AND?: PendingCoachingWhereInput | PendingCoachingWhereInput[]
    OR?: PendingCoachingWhereInput[]
    NOT?: PendingCoachingWhereInput | PendingCoachingWhereInput[]
    id?: StringFilter<"PendingCoaching"> | string
    userId?: StringFilter<"PendingCoaching"> | string
    scheduledAt?: DateTimeFilter<"PendingCoaching"> | Date | string
    sessionStart?: DateTimeFilter<"PendingCoaching"> | Date | string
    updatedAt?: DateTimeFilter<"PendingCoaching"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PendingCoachingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    sessionStart?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PendingCoachingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PendingCoachingWhereInput | PendingCoachingWhereInput[]
    OR?: PendingCoachingWhereInput[]
    NOT?: PendingCoachingWhereInput | PendingCoachingWhereInput[]
    scheduledAt?: DateTimeFilter<"PendingCoaching"> | Date | string
    sessionStart?: DateTimeFilter<"PendingCoaching"> | Date | string
    updatedAt?: DateTimeFilter<"PendingCoaching"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PendingCoachingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    sessionStart?: SortOrder
    updatedAt?: SortOrder
    _count?: PendingCoachingCountOrderByAggregateInput
    _max?: PendingCoachingMaxOrderByAggregateInput
    _min?: PendingCoachingMinOrderByAggregateInput
  }

  export type PendingCoachingScalarWhereWithAggregatesInput = {
    AND?: PendingCoachingScalarWhereWithAggregatesInput | PendingCoachingScalarWhereWithAggregatesInput[]
    OR?: PendingCoachingScalarWhereWithAggregatesInput[]
    NOT?: PendingCoachingScalarWhereWithAggregatesInput | PendingCoachingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingCoaching"> | string
    userId?: StringWithAggregatesFilter<"PendingCoaching"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"PendingCoaching"> | Date | string
    sessionStart?: DateTimeWithAggregatesFilter<"PendingCoaching"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PendingCoaching"> | Date | string
  }

  export type PendingNotificationWhereInput = {
    AND?: PendingNotificationWhereInput | PendingNotificationWhereInput[]
    OR?: PendingNotificationWhereInput[]
    NOT?: PendingNotificationWhereInput | PendingNotificationWhereInput[]
    id?: StringFilter<"PendingNotification"> | string
    liftOwnerId?: StringFilter<"PendingNotification"> | string
    liftId?: StringFilter<"PendingNotification"> | string
    actorId?: StringFilter<"PendingNotification"> | string
    comments?: StringNullableListFilter<"PendingNotification">
    reactions?: StringNullableListFilter<"PendingNotification">
    sendAfter?: DateTimeFilter<"PendingNotification"> | Date | string
    sent?: BoolFilter<"PendingNotification"> | boolean
    createdAt?: DateTimeFilter<"PendingNotification"> | Date | string
    liftOwner?: XOR<UserRelationFilter, UserWhereInput>
    lift?: XOR<LiftRelationFilter, LiftWhereInput>
    actor?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PendingNotificationOrderByWithRelationInput = {
    id?: SortOrder
    liftOwnerId?: SortOrder
    liftId?: SortOrder
    actorId?: SortOrder
    comments?: SortOrder
    reactions?: SortOrder
    sendAfter?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    liftOwner?: UserOrderByWithRelationInput
    lift?: LiftOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type PendingNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendingNotificationWhereInput | PendingNotificationWhereInput[]
    OR?: PendingNotificationWhereInput[]
    NOT?: PendingNotificationWhereInput | PendingNotificationWhereInput[]
    liftOwnerId?: StringFilter<"PendingNotification"> | string
    liftId?: StringFilter<"PendingNotification"> | string
    actorId?: StringFilter<"PendingNotification"> | string
    comments?: StringNullableListFilter<"PendingNotification">
    reactions?: StringNullableListFilter<"PendingNotification">
    sendAfter?: DateTimeFilter<"PendingNotification"> | Date | string
    sent?: BoolFilter<"PendingNotification"> | boolean
    createdAt?: DateTimeFilter<"PendingNotification"> | Date | string
    liftOwner?: XOR<UserRelationFilter, UserWhereInput>
    lift?: XOR<LiftRelationFilter, LiftWhereInput>
    actor?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PendingNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    liftOwnerId?: SortOrder
    liftId?: SortOrder
    actorId?: SortOrder
    comments?: SortOrder
    reactions?: SortOrder
    sendAfter?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
    _count?: PendingNotificationCountOrderByAggregateInput
    _max?: PendingNotificationMaxOrderByAggregateInput
    _min?: PendingNotificationMinOrderByAggregateInput
  }

  export type PendingNotificationScalarWhereWithAggregatesInput = {
    AND?: PendingNotificationScalarWhereWithAggregatesInput | PendingNotificationScalarWhereWithAggregatesInput[]
    OR?: PendingNotificationScalarWhereWithAggregatesInput[]
    NOT?: PendingNotificationScalarWhereWithAggregatesInput | PendingNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingNotification"> | string
    liftOwnerId?: StringWithAggregatesFilter<"PendingNotification"> | string
    liftId?: StringWithAggregatesFilter<"PendingNotification"> | string
    actorId?: StringWithAggregatesFilter<"PendingNotification"> | string
    comments?: StringNullableListFilter<"PendingNotification">
    reactions?: StringNullableListFilter<"PendingNotification">
    sendAfter?: DateTimeWithAggregatesFilter<"PendingNotification"> | Date | string
    sent?: BoolWithAggregatesFilter<"PendingNotification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PendingNotification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiftCreateInput = {
    id?: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    user: UserCreateNestedOneWithoutLiftsInput
    comments?: CommentCreateNestedManyWithoutLiftInput
    reactions?: ReactionCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftInput
  }

  export type LiftUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLiftInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftInput
  }

  export type LiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLiftsNestedInput
    comments?: CommentUpdateManyWithoutLiftNestedInput
    reactions?: ReactionUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUpdateManyWithoutLiftNestedInput
  }

  export type LiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLiftNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftNestedInput
  }

  export type LiftCreateManyInput = {
    id?: string
    userId: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
  }

  export type LiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    lift: LiftCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    liftId: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lift?: LiftUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    liftId: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    lift: LiftCreateNestedOneWithoutReactionsInput
    author: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    id?: string
    liftId: string
    authorId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lift?: LiftUpdateOneRequiredWithoutReactionsNestedInput
    author?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateManyInput = {
    id?: string
    liftId: string
    authorId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeCreateInput = {
    id?: string
    code: string
    usedBy?: string | null
    usedAt?: Date | string | null
  }

  export type InviteCodeUncheckedCreateInput = {
    id?: string
    code: string
    usedBy?: string | null
    usedAt?: Date | string | null
  }

  export type InviteCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCodeCreateManyInput = {
    id?: string
    code: string
    usedBy?: string | null
    usedAt?: Date | string | null
  }

  export type InviteCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    usedBy?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DailyUpdateCreateInput = {
    id?: string
    content: string
    generatedAt?: Date | string
  }

  export type DailyUpdateUncheckedCreateInput = {
    id?: string
    content: string
    generatedAt?: Date | string
  }

  export type DailyUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUpdateCreateManyInput = {
    id?: string
    content: string
    generatedAt?: Date | string
  }

  export type DailyUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPushSubscriptionsInput
  }

  export type PushSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput
  }

  export type PushSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateManyInput = {
    id?: string
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCoachSettingsCreateInput = {
    id?: string
    goalsText?: string
    coachingStyle?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachSettingsInput
  }

  export type UserCoachSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    goalsText?: string
    coachingStyle?: string
    updatedAt?: Date | string
  }

  export type UserCoachSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalsText?: StringFieldUpdateOperationsInput | string
    coachingStyle?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachSettingsNestedInput
  }

  export type UserCoachSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalsText?: StringFieldUpdateOperationsInput | string
    coachingStyle?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCoachSettingsCreateManyInput = {
    id?: string
    userId: string
    goalsText?: string
    coachingStyle?: string
    updatedAt?: Date | string
  }

  export type UserCoachSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalsText?: StringFieldUpdateOperationsInput | string
    coachingStyle?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCoachSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalsText?: StringFieldUpdateOperationsInput | string
    coachingStyle?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingMessageCreateInput = {
    id?: string
    content: string
    sessionLifts: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCoachingMessagesInput
  }

  export type CoachingMessageUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    sessionLifts: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CoachingMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sessionLifts?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachingMessagesNestedInput
  }

  export type CoachingMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sessionLifts?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingMessageCreateManyInput = {
    id?: string
    userId: string
    content: string
    sessionLifts: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CoachingMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sessionLifts?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sessionLifts?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingCoachingCreateInput = {
    id?: string
    scheduledAt: Date | string
    sessionStart: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendingCoachingInput
  }

  export type PendingCoachingUncheckedCreateInput = {
    id?: string
    userId: string
    scheduledAt: Date | string
    sessionStart: Date | string
    updatedAt?: Date | string
  }

  export type PendingCoachingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendingCoachingNestedInput
  }

  export type PendingCoachingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingCoachingCreateManyInput = {
    id?: string
    userId: string
    scheduledAt: Date | string
    sessionStart: Date | string
    updatedAt?: Date | string
  }

  export type PendingCoachingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingCoachingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationCreateInput = {
    id?: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
    liftOwner: UserCreateNestedOneWithoutOwnedPendingNotificationsInput
    lift: LiftCreateNestedOneWithoutPendingNotificationsInput
    actor: UserCreateNestedOneWithoutActorPendingNotificationsInput
  }

  export type PendingNotificationUncheckedCreateInput = {
    id?: string
    liftOwnerId: string
    liftId: string
    actorId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type PendingNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liftOwner?: UserUpdateOneRequiredWithoutOwnedPendingNotificationsNestedInput
    lift?: LiftUpdateOneRequiredWithoutPendingNotificationsNestedInput
    actor?: UserUpdateOneRequiredWithoutActorPendingNotificationsNestedInput
  }

  export type PendingNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftOwnerId?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationCreateManyInput = {
    id?: string
    liftOwnerId: string
    liftId: string
    actorId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type PendingNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftOwnerId?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LiftListRelationFilter = {
    every?: LiftWhereInput
    some?: LiftWhereInput
    none?: LiftWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type PushSubscriptionListRelationFilter = {
    every?: PushSubscriptionWhereInput
    some?: PushSubscriptionWhereInput
    none?: PushSubscriptionWhereInput
  }

  export type PendingNotificationListRelationFilter = {
    every?: PendingNotificationWhereInput
    some?: PendingNotificationWhereInput
    none?: PendingNotificationWhereInput
  }

  export type UserCoachSettingsNullableRelationFilter = {
    is?: UserCoachSettingsWhereInput | null
    isNot?: UserCoachSettingsWhereInput | null
  }

  export type CoachingMessageListRelationFilter = {
    every?: CoachingMessageWhereInput
    some?: CoachingMessageWhereInput
    none?: CoachingMessageWhereInput
  }

  export type PendingCoachingNullableRelationFilter = {
    is?: PendingCoachingWhereInput | null
    isNot?: PendingCoachingWhereInput | null
  }

  export type LiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PushSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendingNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachingMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LiftCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    oneRM?: SortOrder
    loggedAt?: SortOrder
  }

  export type LiftAvgOrderByAggregateInput = {
    weight?: SortOrder
    reps?: SortOrder
    oneRM?: SortOrder
  }

  export type LiftMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    oneRM?: SortOrder
    loggedAt?: SortOrder
  }

  export type LiftMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    oneRM?: SortOrder
    loggedAt?: SortOrder
  }

  export type LiftSumOrderByAggregateInput = {
    weight?: SortOrder
    reps?: SortOrder
    oneRM?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type LiftRelationFilter = {
    is?: LiftWhereInput
    isNot?: LiftWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionLiftIdAuthorIdEmojiCompoundUniqueInput = {
    liftId: string
    authorId: string
    emoji: string
  }

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder
    liftId?: SortOrder
    authorId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InviteCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedBy?: SortOrder
    usedAt?: SortOrder
  }

  export type InviteCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedBy?: SortOrder
    usedAt?: SortOrder
  }

  export type InviteCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    usedBy?: SortOrder
    usedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DailyUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
  }

  export type DailyUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
  }

  export type DailyUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
  }

  export type PushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
  }

  export type PushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
  }

  export type PushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCoachSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalsText?: SortOrder
    coachingStyle?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCoachSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalsText?: SortOrder
    coachingStyle?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCoachSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalsText?: SortOrder
    coachingStyle?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CoachingMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    sessionLifts?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachingMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachingMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PendingCoachingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    sessionStart?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingCoachingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    sessionStart?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingCoachingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    sessionStart?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PendingNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    liftOwnerId?: SortOrder
    liftId?: SortOrder
    actorId?: SortOrder
    comments?: SortOrder
    reactions?: SortOrder
    sendAfter?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    liftOwnerId?: SortOrder
    liftId?: SortOrder
    actorId?: SortOrder
    sendAfter?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
  }

  export type PendingNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    liftOwnerId?: SortOrder
    liftId?: SortOrder
    actorId?: SortOrder
    sendAfter?: SortOrder
    sent?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LiftCreateNestedManyWithoutUserInput = {
    create?: XOR<LiftCreateWithoutUserInput, LiftUncheckedCreateWithoutUserInput> | LiftCreateWithoutUserInput[] | LiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiftCreateOrConnectWithoutUserInput | LiftCreateOrConnectWithoutUserInput[]
    createMany?: LiftCreateManyUserInputEnvelope
    connect?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PushSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type PendingNotificationCreateNestedManyWithoutLiftOwnerInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftOwnerInput, PendingNotificationUncheckedCreateWithoutLiftOwnerInput> | PendingNotificationCreateWithoutLiftOwnerInput[] | PendingNotificationUncheckedCreateWithoutLiftOwnerInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftOwnerInput | PendingNotificationCreateOrConnectWithoutLiftOwnerInput[]
    createMany?: PendingNotificationCreateManyLiftOwnerInputEnvelope
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
  }

  export type PendingNotificationCreateNestedManyWithoutActorInput = {
    create?: XOR<PendingNotificationCreateWithoutActorInput, PendingNotificationUncheckedCreateWithoutActorInput> | PendingNotificationCreateWithoutActorInput[] | PendingNotificationUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutActorInput | PendingNotificationCreateOrConnectWithoutActorInput[]
    createMany?: PendingNotificationCreateManyActorInputEnvelope
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
  }

  export type UserCoachSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCoachSettingsCreateWithoutUserInput, UserCoachSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCoachSettingsCreateOrConnectWithoutUserInput
    connect?: UserCoachSettingsWhereUniqueInput
  }

  export type CoachingMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingMessageCreateWithoutUserInput, CoachingMessageUncheckedCreateWithoutUserInput> | CoachingMessageCreateWithoutUserInput[] | CoachingMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingMessageCreateOrConnectWithoutUserInput | CoachingMessageCreateOrConnectWithoutUserInput[]
    createMany?: CoachingMessageCreateManyUserInputEnvelope
    connect?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
  }

  export type PendingCoachingCreateNestedOneWithoutUserInput = {
    create?: XOR<PendingCoachingCreateWithoutUserInput, PendingCoachingUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendingCoachingCreateOrConnectWithoutUserInput
    connect?: PendingCoachingWhereUniqueInput
  }

  export type LiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LiftCreateWithoutUserInput, LiftUncheckedCreateWithoutUserInput> | LiftCreateWithoutUserInput[] | LiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiftCreateOrConnectWithoutUserInput | LiftCreateOrConnectWithoutUserInput[]
    createMany?: LiftCreateManyUserInputEnvelope
    connect?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PushSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftOwnerInput, PendingNotificationUncheckedCreateWithoutLiftOwnerInput> | PendingNotificationCreateWithoutLiftOwnerInput[] | PendingNotificationUncheckedCreateWithoutLiftOwnerInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftOwnerInput | PendingNotificationCreateOrConnectWithoutLiftOwnerInput[]
    createMany?: PendingNotificationCreateManyLiftOwnerInputEnvelope
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
  }

  export type PendingNotificationUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<PendingNotificationCreateWithoutActorInput, PendingNotificationUncheckedCreateWithoutActorInput> | PendingNotificationCreateWithoutActorInput[] | PendingNotificationUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutActorInput | PendingNotificationCreateOrConnectWithoutActorInput[]
    createMany?: PendingNotificationCreateManyActorInputEnvelope
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
  }

  export type UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCoachSettingsCreateWithoutUserInput, UserCoachSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCoachSettingsCreateOrConnectWithoutUserInput
    connect?: UserCoachSettingsWhereUniqueInput
  }

  export type CoachingMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingMessageCreateWithoutUserInput, CoachingMessageUncheckedCreateWithoutUserInput> | CoachingMessageCreateWithoutUserInput[] | CoachingMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingMessageCreateOrConnectWithoutUserInput | CoachingMessageCreateOrConnectWithoutUserInput[]
    createMany?: CoachingMessageCreateManyUserInputEnvelope
    connect?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
  }

  export type PendingCoachingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PendingCoachingCreateWithoutUserInput, PendingCoachingUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendingCoachingCreateOrConnectWithoutUserInput
    connect?: PendingCoachingWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<LiftCreateWithoutUserInput, LiftUncheckedCreateWithoutUserInput> | LiftCreateWithoutUserInput[] | LiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiftCreateOrConnectWithoutUserInput | LiftCreateOrConnectWithoutUserInput[]
    upsert?: LiftUpsertWithWhereUniqueWithoutUserInput | LiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LiftCreateManyUserInputEnvelope
    set?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    disconnect?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    delete?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    connect?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    update?: LiftUpdateWithWhereUniqueWithoutUserInput | LiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LiftUpdateManyWithWhereWithoutUserInput | LiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LiftScalarWhereInput | LiftScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutAuthorInput | ReactionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutAuthorInput | ReactionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutAuthorInput | ReactionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PushSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type PendingNotificationUpdateManyWithoutLiftOwnerNestedInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftOwnerInput, PendingNotificationUncheckedCreateWithoutLiftOwnerInput> | PendingNotificationCreateWithoutLiftOwnerInput[] | PendingNotificationUncheckedCreateWithoutLiftOwnerInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftOwnerInput | PendingNotificationCreateOrConnectWithoutLiftOwnerInput[]
    upsert?: PendingNotificationUpsertWithWhereUniqueWithoutLiftOwnerInput | PendingNotificationUpsertWithWhereUniqueWithoutLiftOwnerInput[]
    createMany?: PendingNotificationCreateManyLiftOwnerInputEnvelope
    set?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    disconnect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    delete?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    update?: PendingNotificationUpdateWithWhereUniqueWithoutLiftOwnerInput | PendingNotificationUpdateWithWhereUniqueWithoutLiftOwnerInput[]
    updateMany?: PendingNotificationUpdateManyWithWhereWithoutLiftOwnerInput | PendingNotificationUpdateManyWithWhereWithoutLiftOwnerInput[]
    deleteMany?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
  }

  export type PendingNotificationUpdateManyWithoutActorNestedInput = {
    create?: XOR<PendingNotificationCreateWithoutActorInput, PendingNotificationUncheckedCreateWithoutActorInput> | PendingNotificationCreateWithoutActorInput[] | PendingNotificationUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutActorInput | PendingNotificationCreateOrConnectWithoutActorInput[]
    upsert?: PendingNotificationUpsertWithWhereUniqueWithoutActorInput | PendingNotificationUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: PendingNotificationCreateManyActorInputEnvelope
    set?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    disconnect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    delete?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    update?: PendingNotificationUpdateWithWhereUniqueWithoutActorInput | PendingNotificationUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: PendingNotificationUpdateManyWithWhereWithoutActorInput | PendingNotificationUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
  }

  export type UserCoachSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCoachSettingsCreateWithoutUserInput, UserCoachSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCoachSettingsCreateOrConnectWithoutUserInput
    upsert?: UserCoachSettingsUpsertWithoutUserInput
    disconnect?: UserCoachSettingsWhereInput | boolean
    delete?: UserCoachSettingsWhereInput | boolean
    connect?: UserCoachSettingsWhereUniqueInput
    update?: XOR<XOR<UserCoachSettingsUpdateToOneWithWhereWithoutUserInput, UserCoachSettingsUpdateWithoutUserInput>, UserCoachSettingsUncheckedUpdateWithoutUserInput>
  }

  export type CoachingMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingMessageCreateWithoutUserInput, CoachingMessageUncheckedCreateWithoutUserInput> | CoachingMessageCreateWithoutUserInput[] | CoachingMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingMessageCreateOrConnectWithoutUserInput | CoachingMessageCreateOrConnectWithoutUserInput[]
    upsert?: CoachingMessageUpsertWithWhereUniqueWithoutUserInput | CoachingMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingMessageCreateManyUserInputEnvelope
    set?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    disconnect?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    delete?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    connect?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    update?: CoachingMessageUpdateWithWhereUniqueWithoutUserInput | CoachingMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingMessageUpdateManyWithWhereWithoutUserInput | CoachingMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingMessageScalarWhereInput | CoachingMessageScalarWhereInput[]
  }

  export type PendingCoachingUpdateOneWithoutUserNestedInput = {
    create?: XOR<PendingCoachingCreateWithoutUserInput, PendingCoachingUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendingCoachingCreateOrConnectWithoutUserInput
    upsert?: PendingCoachingUpsertWithoutUserInput
    disconnect?: PendingCoachingWhereInput | boolean
    delete?: PendingCoachingWhereInput | boolean
    connect?: PendingCoachingWhereUniqueInput
    update?: XOR<XOR<PendingCoachingUpdateToOneWithWhereWithoutUserInput, PendingCoachingUpdateWithoutUserInput>, PendingCoachingUncheckedUpdateWithoutUserInput>
  }

  export type LiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LiftCreateWithoutUserInput, LiftUncheckedCreateWithoutUserInput> | LiftCreateWithoutUserInput[] | LiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiftCreateOrConnectWithoutUserInput | LiftCreateOrConnectWithoutUserInput[]
    upsert?: LiftUpsertWithWhereUniqueWithoutUserInput | LiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LiftCreateManyUserInputEnvelope
    set?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    disconnect?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    delete?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    connect?: LiftWhereUniqueInput | LiftWhereUniqueInput[]
    update?: LiftUpdateWithWhereUniqueWithoutUserInput | LiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LiftUpdateManyWithWhereWithoutUserInput | LiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LiftScalarWhereInput | LiftScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutAuthorInput | ReactionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutAuthorInput | ReactionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutAuthorInput | ReactionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftOwnerInput, PendingNotificationUncheckedCreateWithoutLiftOwnerInput> | PendingNotificationCreateWithoutLiftOwnerInput[] | PendingNotificationUncheckedCreateWithoutLiftOwnerInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftOwnerInput | PendingNotificationCreateOrConnectWithoutLiftOwnerInput[]
    upsert?: PendingNotificationUpsertWithWhereUniqueWithoutLiftOwnerInput | PendingNotificationUpsertWithWhereUniqueWithoutLiftOwnerInput[]
    createMany?: PendingNotificationCreateManyLiftOwnerInputEnvelope
    set?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    disconnect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    delete?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    update?: PendingNotificationUpdateWithWhereUniqueWithoutLiftOwnerInput | PendingNotificationUpdateWithWhereUniqueWithoutLiftOwnerInput[]
    updateMany?: PendingNotificationUpdateManyWithWhereWithoutLiftOwnerInput | PendingNotificationUpdateManyWithWhereWithoutLiftOwnerInput[]
    deleteMany?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
  }

  export type PendingNotificationUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<PendingNotificationCreateWithoutActorInput, PendingNotificationUncheckedCreateWithoutActorInput> | PendingNotificationCreateWithoutActorInput[] | PendingNotificationUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutActorInput | PendingNotificationCreateOrConnectWithoutActorInput[]
    upsert?: PendingNotificationUpsertWithWhereUniqueWithoutActorInput | PendingNotificationUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: PendingNotificationCreateManyActorInputEnvelope
    set?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    disconnect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    delete?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    update?: PendingNotificationUpdateWithWhereUniqueWithoutActorInput | PendingNotificationUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: PendingNotificationUpdateManyWithWhereWithoutActorInput | PendingNotificationUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
  }

  export type UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCoachSettingsCreateWithoutUserInput, UserCoachSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCoachSettingsCreateOrConnectWithoutUserInput
    upsert?: UserCoachSettingsUpsertWithoutUserInput
    disconnect?: UserCoachSettingsWhereInput | boolean
    delete?: UserCoachSettingsWhereInput | boolean
    connect?: UserCoachSettingsWhereUniqueInput
    update?: XOR<XOR<UserCoachSettingsUpdateToOneWithWhereWithoutUserInput, UserCoachSettingsUpdateWithoutUserInput>, UserCoachSettingsUncheckedUpdateWithoutUserInput>
  }

  export type CoachingMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingMessageCreateWithoutUserInput, CoachingMessageUncheckedCreateWithoutUserInput> | CoachingMessageCreateWithoutUserInput[] | CoachingMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingMessageCreateOrConnectWithoutUserInput | CoachingMessageCreateOrConnectWithoutUserInput[]
    upsert?: CoachingMessageUpsertWithWhereUniqueWithoutUserInput | CoachingMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingMessageCreateManyUserInputEnvelope
    set?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    disconnect?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    delete?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    connect?: CoachingMessageWhereUniqueInput | CoachingMessageWhereUniqueInput[]
    update?: CoachingMessageUpdateWithWhereUniqueWithoutUserInput | CoachingMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingMessageUpdateManyWithWhereWithoutUserInput | CoachingMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingMessageScalarWhereInput | CoachingMessageScalarWhereInput[]
  }

  export type PendingCoachingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PendingCoachingCreateWithoutUserInput, PendingCoachingUncheckedCreateWithoutUserInput>
    connectOrCreate?: PendingCoachingCreateOrConnectWithoutUserInput
    upsert?: PendingCoachingUpsertWithoutUserInput
    disconnect?: PendingCoachingWhereInput | boolean
    delete?: PendingCoachingWhereInput | boolean
    connect?: PendingCoachingWhereUniqueInput
    update?: XOR<XOR<PendingCoachingUpdateToOneWithWhereWithoutUserInput, PendingCoachingUpdateWithoutUserInput>, PendingCoachingUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutLiftsInput = {
    create?: XOR<UserCreateWithoutLiftsInput, UserUncheckedCreateWithoutLiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiftsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutLiftInput = {
    create?: XOR<CommentCreateWithoutLiftInput, CommentUncheckedCreateWithoutLiftInput> | CommentCreateWithoutLiftInput[] | CommentUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLiftInput | CommentCreateOrConnectWithoutLiftInput[]
    createMany?: CommentCreateManyLiftInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutLiftInput = {
    create?: XOR<ReactionCreateWithoutLiftInput, ReactionUncheckedCreateWithoutLiftInput> | ReactionCreateWithoutLiftInput[] | ReactionUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutLiftInput | ReactionCreateOrConnectWithoutLiftInput[]
    createMany?: ReactionCreateManyLiftInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PendingNotificationCreateNestedManyWithoutLiftInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftInput, PendingNotificationUncheckedCreateWithoutLiftInput> | PendingNotificationCreateWithoutLiftInput[] | PendingNotificationUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftInput | PendingNotificationCreateOrConnectWithoutLiftInput[]
    createMany?: PendingNotificationCreateManyLiftInputEnvelope
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutLiftInput = {
    create?: XOR<CommentCreateWithoutLiftInput, CommentUncheckedCreateWithoutLiftInput> | CommentCreateWithoutLiftInput[] | CommentUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLiftInput | CommentCreateOrConnectWithoutLiftInput[]
    createMany?: CommentCreateManyLiftInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutLiftInput = {
    create?: XOR<ReactionCreateWithoutLiftInput, ReactionUncheckedCreateWithoutLiftInput> | ReactionCreateWithoutLiftInput[] | ReactionUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutLiftInput | ReactionCreateOrConnectWithoutLiftInput[]
    createMany?: ReactionCreateManyLiftInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PendingNotificationUncheckedCreateNestedManyWithoutLiftInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftInput, PendingNotificationUncheckedCreateWithoutLiftInput> | PendingNotificationCreateWithoutLiftInput[] | PendingNotificationUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftInput | PendingNotificationCreateOrConnectWithoutLiftInput[]
    createMany?: PendingNotificationCreateManyLiftInputEnvelope
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutLiftsNestedInput = {
    create?: XOR<UserCreateWithoutLiftsInput, UserUncheckedCreateWithoutLiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiftsInput
    upsert?: UserUpsertWithoutLiftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLiftsInput, UserUpdateWithoutLiftsInput>, UserUncheckedUpdateWithoutLiftsInput>
  }

  export type CommentUpdateManyWithoutLiftNestedInput = {
    create?: XOR<CommentCreateWithoutLiftInput, CommentUncheckedCreateWithoutLiftInput> | CommentCreateWithoutLiftInput[] | CommentUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLiftInput | CommentCreateOrConnectWithoutLiftInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutLiftInput | CommentUpsertWithWhereUniqueWithoutLiftInput[]
    createMany?: CommentCreateManyLiftInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutLiftInput | CommentUpdateWithWhereUniqueWithoutLiftInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutLiftInput | CommentUpdateManyWithWhereWithoutLiftInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutLiftNestedInput = {
    create?: XOR<ReactionCreateWithoutLiftInput, ReactionUncheckedCreateWithoutLiftInput> | ReactionCreateWithoutLiftInput[] | ReactionUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutLiftInput | ReactionCreateOrConnectWithoutLiftInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutLiftInput | ReactionUpsertWithWhereUniqueWithoutLiftInput[]
    createMany?: ReactionCreateManyLiftInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutLiftInput | ReactionUpdateWithWhereUniqueWithoutLiftInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutLiftInput | ReactionUpdateManyWithWhereWithoutLiftInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PendingNotificationUpdateManyWithoutLiftNestedInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftInput, PendingNotificationUncheckedCreateWithoutLiftInput> | PendingNotificationCreateWithoutLiftInput[] | PendingNotificationUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftInput | PendingNotificationCreateOrConnectWithoutLiftInput[]
    upsert?: PendingNotificationUpsertWithWhereUniqueWithoutLiftInput | PendingNotificationUpsertWithWhereUniqueWithoutLiftInput[]
    createMany?: PendingNotificationCreateManyLiftInputEnvelope
    set?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    disconnect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    delete?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    update?: PendingNotificationUpdateWithWhereUniqueWithoutLiftInput | PendingNotificationUpdateWithWhereUniqueWithoutLiftInput[]
    updateMany?: PendingNotificationUpdateManyWithWhereWithoutLiftInput | PendingNotificationUpdateManyWithWhereWithoutLiftInput[]
    deleteMany?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutLiftNestedInput = {
    create?: XOR<CommentCreateWithoutLiftInput, CommentUncheckedCreateWithoutLiftInput> | CommentCreateWithoutLiftInput[] | CommentUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutLiftInput | CommentCreateOrConnectWithoutLiftInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutLiftInput | CommentUpsertWithWhereUniqueWithoutLiftInput[]
    createMany?: CommentCreateManyLiftInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutLiftInput | CommentUpdateWithWhereUniqueWithoutLiftInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutLiftInput | CommentUpdateManyWithWhereWithoutLiftInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutLiftNestedInput = {
    create?: XOR<ReactionCreateWithoutLiftInput, ReactionUncheckedCreateWithoutLiftInput> | ReactionCreateWithoutLiftInput[] | ReactionUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutLiftInput | ReactionCreateOrConnectWithoutLiftInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutLiftInput | ReactionUpsertWithWhereUniqueWithoutLiftInput[]
    createMany?: ReactionCreateManyLiftInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutLiftInput | ReactionUpdateWithWhereUniqueWithoutLiftInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutLiftInput | ReactionUpdateManyWithWhereWithoutLiftInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PendingNotificationUncheckedUpdateManyWithoutLiftNestedInput = {
    create?: XOR<PendingNotificationCreateWithoutLiftInput, PendingNotificationUncheckedCreateWithoutLiftInput> | PendingNotificationCreateWithoutLiftInput[] | PendingNotificationUncheckedCreateWithoutLiftInput[]
    connectOrCreate?: PendingNotificationCreateOrConnectWithoutLiftInput | PendingNotificationCreateOrConnectWithoutLiftInput[]
    upsert?: PendingNotificationUpsertWithWhereUniqueWithoutLiftInput | PendingNotificationUpsertWithWhereUniqueWithoutLiftInput[]
    createMany?: PendingNotificationCreateManyLiftInputEnvelope
    set?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    disconnect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    delete?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    connect?: PendingNotificationWhereUniqueInput | PendingNotificationWhereUniqueInput[]
    update?: PendingNotificationUpdateWithWhereUniqueWithoutLiftInput | PendingNotificationUpdateWithWhereUniqueWithoutLiftInput[]
    updateMany?: PendingNotificationUpdateManyWithWhereWithoutLiftInput | PendingNotificationUpdateManyWithWhereWithoutLiftInput[]
    deleteMany?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
  }

  export type LiftCreateNestedOneWithoutCommentsInput = {
    create?: XOR<LiftCreateWithoutCommentsInput, LiftUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: LiftCreateOrConnectWithoutCommentsInput
    connect?: LiftWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type LiftUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<LiftCreateWithoutCommentsInput, LiftUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: LiftCreateOrConnectWithoutCommentsInput
    upsert?: LiftUpsertWithoutCommentsInput
    connect?: LiftWhereUniqueInput
    update?: XOR<XOR<LiftUpdateToOneWithWhereWithoutCommentsInput, LiftUpdateWithoutCommentsInput>, LiftUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type LiftCreateNestedOneWithoutReactionsInput = {
    create?: XOR<LiftCreateWithoutReactionsInput, LiftUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: LiftCreateOrConnectWithoutReactionsInput
    connect?: LiftWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type LiftUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<LiftCreateWithoutReactionsInput, LiftUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: LiftCreateOrConnectWithoutReactionsInput
    upsert?: LiftUpsertWithoutReactionsInput
    connect?: LiftWhereUniqueInput
    update?: XOR<XOR<LiftUpdateToOneWithWhereWithoutReactionsInput, LiftUpdateWithoutReactionsInput>, LiftUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserCreateNestedOneWithoutPushSubscriptionsInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    upsert?: UserUpsertWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPushSubscriptionsInput, UserUpdateWithoutPushSubscriptionsInput>, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutCoachSettingsInput = {
    create?: XOR<UserCreateWithoutCoachSettingsInput, UserUncheckedCreateWithoutCoachSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoachSettingsNestedInput = {
    create?: XOR<UserCreateWithoutCoachSettingsInput, UserUncheckedCreateWithoutCoachSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachSettingsInput
    upsert?: UserUpsertWithoutCoachSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachSettingsInput, UserUpdateWithoutCoachSettingsInput>, UserUncheckedUpdateWithoutCoachSettingsInput>
  }

  export type UserCreateNestedOneWithoutCoachingMessagesInput = {
    create?: XOR<UserCreateWithoutCoachingMessagesInput, UserUncheckedCreateWithoutCoachingMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoachingMessagesNestedInput = {
    create?: XOR<UserCreateWithoutCoachingMessagesInput, UserUncheckedCreateWithoutCoachingMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingMessagesInput
    upsert?: UserUpsertWithoutCoachingMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachingMessagesInput, UserUpdateWithoutCoachingMessagesInput>, UserUncheckedUpdateWithoutCoachingMessagesInput>
  }

  export type UserCreateNestedOneWithoutPendingCoachingInput = {
    create?: XOR<UserCreateWithoutPendingCoachingInput, UserUncheckedCreateWithoutPendingCoachingInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendingCoachingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPendingCoachingNestedInput = {
    create?: XOR<UserCreateWithoutPendingCoachingInput, UserUncheckedCreateWithoutPendingCoachingInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendingCoachingInput
    upsert?: UserUpsertWithoutPendingCoachingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPendingCoachingInput, UserUpdateWithoutPendingCoachingInput>, UserUncheckedUpdateWithoutPendingCoachingInput>
  }

  export type PendingNotificationCreatecommentsInput = {
    set: string[]
  }

  export type PendingNotificationCreatereactionsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutOwnedPendingNotificationsInput = {
    create?: XOR<UserCreateWithoutOwnedPendingNotificationsInput, UserUncheckedCreateWithoutOwnedPendingNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedPendingNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type LiftCreateNestedOneWithoutPendingNotificationsInput = {
    create?: XOR<LiftCreateWithoutPendingNotificationsInput, LiftUncheckedCreateWithoutPendingNotificationsInput>
    connectOrCreate?: LiftCreateOrConnectWithoutPendingNotificationsInput
    connect?: LiftWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActorPendingNotificationsInput = {
    create?: XOR<UserCreateWithoutActorPendingNotificationsInput, UserUncheckedCreateWithoutActorPendingNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActorPendingNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type PendingNotificationUpdatecommentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PendingNotificationUpdatereactionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOwnedPendingNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedPendingNotificationsInput, UserUncheckedCreateWithoutOwnedPendingNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedPendingNotificationsInput
    upsert?: UserUpsertWithoutOwnedPendingNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedPendingNotificationsInput, UserUpdateWithoutOwnedPendingNotificationsInput>, UserUncheckedUpdateWithoutOwnedPendingNotificationsInput>
  }

  export type LiftUpdateOneRequiredWithoutPendingNotificationsNestedInput = {
    create?: XOR<LiftCreateWithoutPendingNotificationsInput, LiftUncheckedCreateWithoutPendingNotificationsInput>
    connectOrCreate?: LiftCreateOrConnectWithoutPendingNotificationsInput
    upsert?: LiftUpsertWithoutPendingNotificationsInput
    connect?: LiftWhereUniqueInput
    update?: XOR<XOR<LiftUpdateToOneWithWhereWithoutPendingNotificationsInput, LiftUpdateWithoutPendingNotificationsInput>, LiftUncheckedUpdateWithoutPendingNotificationsInput>
  }

  export type UserUpdateOneRequiredWithoutActorPendingNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutActorPendingNotificationsInput, UserUncheckedCreateWithoutActorPendingNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActorPendingNotificationsInput
    upsert?: UserUpsertWithoutActorPendingNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActorPendingNotificationsInput, UserUpdateWithoutActorPendingNotificationsInput>, UserUncheckedUpdateWithoutActorPendingNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LiftCreateWithoutUserInput = {
    id?: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutLiftInput
    reactions?: ReactionCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftInput
  }

  export type LiftUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLiftInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftInput
  }

  export type LiftCreateOrConnectWithoutUserInput = {
    where: LiftWhereUniqueInput
    create: XOR<LiftCreateWithoutUserInput, LiftUncheckedCreateWithoutUserInput>
  }

  export type LiftCreateManyUserInputEnvelope = {
    data: LiftCreateManyUserInput | LiftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    body: string
    createdAt?: Date | string
    lift: LiftCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    liftId: string
    body: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutAuthorInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    lift: LiftCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutAuthorInput = {
    id?: string
    liftId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutAuthorInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput>
  }

  export type ReactionCreateManyAuthorInputEnvelope = {
    data: ReactionCreateManyAuthorInput | ReactionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PushSubscriptionCreateWithoutUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PushSubscriptionCreateOrConnectWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionCreateManyUserInputEnvelope = {
    data: PushSubscriptionCreateManyUserInput | PushSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PendingNotificationCreateWithoutLiftOwnerInput = {
    id?: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
    lift: LiftCreateNestedOneWithoutPendingNotificationsInput
    actor: UserCreateNestedOneWithoutActorPendingNotificationsInput
  }

  export type PendingNotificationUncheckedCreateWithoutLiftOwnerInput = {
    id?: string
    liftId: string
    actorId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type PendingNotificationCreateOrConnectWithoutLiftOwnerInput = {
    where: PendingNotificationWhereUniqueInput
    create: XOR<PendingNotificationCreateWithoutLiftOwnerInput, PendingNotificationUncheckedCreateWithoutLiftOwnerInput>
  }

  export type PendingNotificationCreateManyLiftOwnerInputEnvelope = {
    data: PendingNotificationCreateManyLiftOwnerInput | PendingNotificationCreateManyLiftOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PendingNotificationCreateWithoutActorInput = {
    id?: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
    liftOwner: UserCreateNestedOneWithoutOwnedPendingNotificationsInput
    lift: LiftCreateNestedOneWithoutPendingNotificationsInput
  }

  export type PendingNotificationUncheckedCreateWithoutActorInput = {
    id?: string
    liftOwnerId: string
    liftId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type PendingNotificationCreateOrConnectWithoutActorInput = {
    where: PendingNotificationWhereUniqueInput
    create: XOR<PendingNotificationCreateWithoutActorInput, PendingNotificationUncheckedCreateWithoutActorInput>
  }

  export type PendingNotificationCreateManyActorInputEnvelope = {
    data: PendingNotificationCreateManyActorInput | PendingNotificationCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type UserCoachSettingsCreateWithoutUserInput = {
    id?: string
    goalsText?: string
    coachingStyle?: string
    updatedAt?: Date | string
  }

  export type UserCoachSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    goalsText?: string
    coachingStyle?: string
    updatedAt?: Date | string
  }

  export type UserCoachSettingsCreateOrConnectWithoutUserInput = {
    where: UserCoachSettingsWhereUniqueInput
    create: XOR<UserCoachSettingsCreateWithoutUserInput, UserCoachSettingsUncheckedCreateWithoutUserInput>
  }

  export type CoachingMessageCreateWithoutUserInput = {
    id?: string
    content: string
    sessionLifts: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CoachingMessageUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    sessionLifts: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CoachingMessageCreateOrConnectWithoutUserInput = {
    where: CoachingMessageWhereUniqueInput
    create: XOR<CoachingMessageCreateWithoutUserInput, CoachingMessageUncheckedCreateWithoutUserInput>
  }

  export type CoachingMessageCreateManyUserInputEnvelope = {
    data: CoachingMessageCreateManyUserInput | CoachingMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PendingCoachingCreateWithoutUserInput = {
    id?: string
    scheduledAt: Date | string
    sessionStart: Date | string
    updatedAt?: Date | string
  }

  export type PendingCoachingUncheckedCreateWithoutUserInput = {
    id?: string
    scheduledAt: Date | string
    sessionStart: Date | string
    updatedAt?: Date | string
  }

  export type PendingCoachingCreateOrConnectWithoutUserInput = {
    where: PendingCoachingWhereUniqueInput
    create: XOR<PendingCoachingCreateWithoutUserInput, PendingCoachingUncheckedCreateWithoutUserInput>
  }

  export type LiftUpsertWithWhereUniqueWithoutUserInput = {
    where: LiftWhereUniqueInput
    update: XOR<LiftUpdateWithoutUserInput, LiftUncheckedUpdateWithoutUserInput>
    create: XOR<LiftCreateWithoutUserInput, LiftUncheckedCreateWithoutUserInput>
  }

  export type LiftUpdateWithWhereUniqueWithoutUserInput = {
    where: LiftWhereUniqueInput
    data: XOR<LiftUpdateWithoutUserInput, LiftUncheckedUpdateWithoutUserInput>
  }

  export type LiftUpdateManyWithWhereWithoutUserInput = {
    where: LiftScalarWhereInput
    data: XOR<LiftUpdateManyMutationInput, LiftUncheckedUpdateManyWithoutUserInput>
  }

  export type LiftScalarWhereInput = {
    AND?: LiftScalarWhereInput | LiftScalarWhereInput[]
    OR?: LiftScalarWhereInput[]
    NOT?: LiftScalarWhereInput | LiftScalarWhereInput[]
    id?: StringFilter<"Lift"> | string
    userId?: StringFilter<"Lift"> | string
    type?: StringFilter<"Lift"> | string
    weight?: FloatFilter<"Lift"> | number
    reps?: IntFilter<"Lift"> | number
    oneRM?: FloatFilter<"Lift"> | number
    loggedAt?: DateTimeFilter<"Lift"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    liftId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    body?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutAuthorInput, ReactionUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutAuthorInput, ReactionUncheckedUpdateWithoutAuthorInput>
  }

  export type ReactionUpdateManyWithWhereWithoutAuthorInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    id?: StringFilter<"Reaction"> | string
    liftId?: StringFilter<"Reaction"> | string
    authorId?: StringFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
  }

  export type PushSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    update: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    data: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type PushSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: PushSubscriptionScalarWhereInput
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type PushSubscriptionScalarWhereInput = {
    AND?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    OR?: PushSubscriptionScalarWhereInput[]
    NOT?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    id?: StringFilter<"PushSubscription"> | string
    userId?: StringFilter<"PushSubscription"> | string
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
  }

  export type PendingNotificationUpsertWithWhereUniqueWithoutLiftOwnerInput = {
    where: PendingNotificationWhereUniqueInput
    update: XOR<PendingNotificationUpdateWithoutLiftOwnerInput, PendingNotificationUncheckedUpdateWithoutLiftOwnerInput>
    create: XOR<PendingNotificationCreateWithoutLiftOwnerInput, PendingNotificationUncheckedCreateWithoutLiftOwnerInput>
  }

  export type PendingNotificationUpdateWithWhereUniqueWithoutLiftOwnerInput = {
    where: PendingNotificationWhereUniqueInput
    data: XOR<PendingNotificationUpdateWithoutLiftOwnerInput, PendingNotificationUncheckedUpdateWithoutLiftOwnerInput>
  }

  export type PendingNotificationUpdateManyWithWhereWithoutLiftOwnerInput = {
    where: PendingNotificationScalarWhereInput
    data: XOR<PendingNotificationUpdateManyMutationInput, PendingNotificationUncheckedUpdateManyWithoutLiftOwnerInput>
  }

  export type PendingNotificationScalarWhereInput = {
    AND?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
    OR?: PendingNotificationScalarWhereInput[]
    NOT?: PendingNotificationScalarWhereInput | PendingNotificationScalarWhereInput[]
    id?: StringFilter<"PendingNotification"> | string
    liftOwnerId?: StringFilter<"PendingNotification"> | string
    liftId?: StringFilter<"PendingNotification"> | string
    actorId?: StringFilter<"PendingNotification"> | string
    comments?: StringNullableListFilter<"PendingNotification">
    reactions?: StringNullableListFilter<"PendingNotification">
    sendAfter?: DateTimeFilter<"PendingNotification"> | Date | string
    sent?: BoolFilter<"PendingNotification"> | boolean
    createdAt?: DateTimeFilter<"PendingNotification"> | Date | string
  }

  export type PendingNotificationUpsertWithWhereUniqueWithoutActorInput = {
    where: PendingNotificationWhereUniqueInput
    update: XOR<PendingNotificationUpdateWithoutActorInput, PendingNotificationUncheckedUpdateWithoutActorInput>
    create: XOR<PendingNotificationCreateWithoutActorInput, PendingNotificationUncheckedCreateWithoutActorInput>
  }

  export type PendingNotificationUpdateWithWhereUniqueWithoutActorInput = {
    where: PendingNotificationWhereUniqueInput
    data: XOR<PendingNotificationUpdateWithoutActorInput, PendingNotificationUncheckedUpdateWithoutActorInput>
  }

  export type PendingNotificationUpdateManyWithWhereWithoutActorInput = {
    where: PendingNotificationScalarWhereInput
    data: XOR<PendingNotificationUpdateManyMutationInput, PendingNotificationUncheckedUpdateManyWithoutActorInput>
  }

  export type UserCoachSettingsUpsertWithoutUserInput = {
    update: XOR<UserCoachSettingsUpdateWithoutUserInput, UserCoachSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserCoachSettingsCreateWithoutUserInput, UserCoachSettingsUncheckedCreateWithoutUserInput>
    where?: UserCoachSettingsWhereInput
  }

  export type UserCoachSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserCoachSettingsWhereInput
    data: XOR<UserCoachSettingsUpdateWithoutUserInput, UserCoachSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCoachSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalsText?: StringFieldUpdateOperationsInput | string
    coachingStyle?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCoachSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalsText?: StringFieldUpdateOperationsInput | string
    coachingStyle?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: CoachingMessageWhereUniqueInput
    update: XOR<CoachingMessageUpdateWithoutUserInput, CoachingMessageUncheckedUpdateWithoutUserInput>
    create: XOR<CoachingMessageCreateWithoutUserInput, CoachingMessageUncheckedCreateWithoutUserInput>
  }

  export type CoachingMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: CoachingMessageWhereUniqueInput
    data: XOR<CoachingMessageUpdateWithoutUserInput, CoachingMessageUncheckedUpdateWithoutUserInput>
  }

  export type CoachingMessageUpdateManyWithWhereWithoutUserInput = {
    where: CoachingMessageScalarWhereInput
    data: XOR<CoachingMessageUpdateManyMutationInput, CoachingMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type CoachingMessageScalarWhereInput = {
    AND?: CoachingMessageScalarWhereInput | CoachingMessageScalarWhereInput[]
    OR?: CoachingMessageScalarWhereInput[]
    NOT?: CoachingMessageScalarWhereInput | CoachingMessageScalarWhereInput[]
    id?: StringFilter<"CoachingMessage"> | string
    userId?: StringFilter<"CoachingMessage"> | string
    content?: StringFilter<"CoachingMessage"> | string
    sessionLifts?: JsonFilter<"CoachingMessage">
    createdAt?: DateTimeFilter<"CoachingMessage"> | Date | string
  }

  export type PendingCoachingUpsertWithoutUserInput = {
    update: XOR<PendingCoachingUpdateWithoutUserInput, PendingCoachingUncheckedUpdateWithoutUserInput>
    create: XOR<PendingCoachingCreateWithoutUserInput, PendingCoachingUncheckedCreateWithoutUserInput>
    where?: PendingCoachingWhereInput
  }

  export type PendingCoachingUpdateToOneWithWhereWithoutUserInput = {
    where?: PendingCoachingWhereInput
    data: XOR<PendingCoachingUpdateWithoutUserInput, PendingCoachingUncheckedUpdateWithoutUserInput>
  }

  export type PendingCoachingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingCoachingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLiftsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLiftsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLiftsInput, UserUncheckedCreateWithoutLiftsInput>
  }

  export type CommentCreateWithoutLiftInput = {
    id?: string
    body: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutLiftInput = {
    id?: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutLiftInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutLiftInput, CommentUncheckedCreateWithoutLiftInput>
  }

  export type CommentCreateManyLiftInputEnvelope = {
    data: CommentCreateManyLiftInput | CommentCreateManyLiftInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutLiftInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutLiftInput = {
    id?: string
    authorId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutLiftInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutLiftInput, ReactionUncheckedCreateWithoutLiftInput>
  }

  export type ReactionCreateManyLiftInputEnvelope = {
    data: ReactionCreateManyLiftInput | ReactionCreateManyLiftInput[]
    skipDuplicates?: boolean
  }

  export type PendingNotificationCreateWithoutLiftInput = {
    id?: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
    liftOwner: UserCreateNestedOneWithoutOwnedPendingNotificationsInput
    actor: UserCreateNestedOneWithoutActorPendingNotificationsInput
  }

  export type PendingNotificationUncheckedCreateWithoutLiftInput = {
    id?: string
    liftOwnerId: string
    actorId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type PendingNotificationCreateOrConnectWithoutLiftInput = {
    where: PendingNotificationWhereUniqueInput
    create: XOR<PendingNotificationCreateWithoutLiftInput, PendingNotificationUncheckedCreateWithoutLiftInput>
  }

  export type PendingNotificationCreateManyLiftInputEnvelope = {
    data: PendingNotificationCreateManyLiftInput | PendingNotificationCreateManyLiftInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLiftsInput = {
    update: XOR<UserUpdateWithoutLiftsInput, UserUncheckedUpdateWithoutLiftsInput>
    create: XOR<UserCreateWithoutLiftsInput, UserUncheckedCreateWithoutLiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLiftsInput, UserUncheckedUpdateWithoutLiftsInput>
  }

  export type UserUpdateWithoutLiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutLiftInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutLiftInput, CommentUncheckedUpdateWithoutLiftInput>
    create: XOR<CommentCreateWithoutLiftInput, CommentUncheckedCreateWithoutLiftInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutLiftInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutLiftInput, CommentUncheckedUpdateWithoutLiftInput>
  }

  export type CommentUpdateManyWithWhereWithoutLiftInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutLiftInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutLiftInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutLiftInput, ReactionUncheckedUpdateWithoutLiftInput>
    create: XOR<ReactionCreateWithoutLiftInput, ReactionUncheckedCreateWithoutLiftInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutLiftInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutLiftInput, ReactionUncheckedUpdateWithoutLiftInput>
  }

  export type ReactionUpdateManyWithWhereWithoutLiftInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutLiftInput>
  }

  export type PendingNotificationUpsertWithWhereUniqueWithoutLiftInput = {
    where: PendingNotificationWhereUniqueInput
    update: XOR<PendingNotificationUpdateWithoutLiftInput, PendingNotificationUncheckedUpdateWithoutLiftInput>
    create: XOR<PendingNotificationCreateWithoutLiftInput, PendingNotificationUncheckedCreateWithoutLiftInput>
  }

  export type PendingNotificationUpdateWithWhereUniqueWithoutLiftInput = {
    where: PendingNotificationWhereUniqueInput
    data: XOR<PendingNotificationUpdateWithoutLiftInput, PendingNotificationUncheckedUpdateWithoutLiftInput>
  }

  export type PendingNotificationUpdateManyWithWhereWithoutLiftInput = {
    where: PendingNotificationScalarWhereInput
    data: XOR<PendingNotificationUpdateManyMutationInput, PendingNotificationUncheckedUpdateManyWithoutLiftInput>
  }

  export type LiftCreateWithoutCommentsInput = {
    id?: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    user: UserCreateNestedOneWithoutLiftsInput
    reactions?: ReactionCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftInput
  }

  export type LiftUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    reactions?: ReactionUncheckedCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftInput
  }

  export type LiftCreateOrConnectWithoutCommentsInput = {
    where: LiftWhereUniqueInput
    create: XOR<LiftCreateWithoutCommentsInput, LiftUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type LiftUpsertWithoutCommentsInput = {
    update: XOR<LiftUpdateWithoutCommentsInput, LiftUncheckedUpdateWithoutCommentsInput>
    create: XOR<LiftCreateWithoutCommentsInput, LiftUncheckedCreateWithoutCommentsInput>
    where?: LiftWhereInput
  }

  export type LiftUpdateToOneWithWhereWithoutCommentsInput = {
    where?: LiftWhereInput
    data: XOR<LiftUpdateWithoutCommentsInput, LiftUncheckedUpdateWithoutCommentsInput>
  }

  export type LiftUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLiftsNestedInput
    reactions?: ReactionUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUpdateManyWithoutLiftNestedInput
  }

  export type LiftUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUncheckedUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LiftCreateWithoutReactionsInput = {
    id?: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    user: UserCreateNestedOneWithoutLiftsInput
    comments?: CommentCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftInput
  }

  export type LiftUncheckedCreateWithoutReactionsInput = {
    id?: string
    userId: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLiftInput
    pendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftInput
  }

  export type LiftCreateOrConnectWithoutReactionsInput = {
    where: LiftWhereUniqueInput
    create: XOR<LiftCreateWithoutReactionsInput, LiftUncheckedCreateWithoutReactionsInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type LiftUpsertWithoutReactionsInput = {
    update: XOR<LiftUpdateWithoutReactionsInput, LiftUncheckedUpdateWithoutReactionsInput>
    create: XOR<LiftCreateWithoutReactionsInput, LiftUncheckedCreateWithoutReactionsInput>
    where?: LiftWhereInput
  }

  export type LiftUpdateToOneWithWhereWithoutReactionsInput = {
    where?: LiftWhereInput
    data: XOR<LiftUpdateWithoutReactionsInput, LiftUncheckedUpdateWithoutReactionsInput>
  }

  export type LiftUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLiftsNestedInput
    comments?: CommentUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUpdateManyWithoutLiftNestedInput
  }

  export type LiftUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftNestedInput
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPushSubscriptionsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPushSubscriptionsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPushSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
  }

  export type UserUpsertWithoutPushSubscriptionsInput = {
    update: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPushSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type UserUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPushSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCoachSettingsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoachSettingsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoachSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachSettingsInput, UserUncheckedCreateWithoutCoachSettingsInput>
  }

  export type UserUpsertWithoutCoachSettingsInput = {
    update: XOR<UserUpdateWithoutCoachSettingsInput, UserUncheckedUpdateWithoutCoachSettingsInput>
    create: XOR<UserCreateWithoutCoachSettingsInput, UserUncheckedCreateWithoutCoachSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachSettingsInput, UserUncheckedUpdateWithoutCoachSettingsInput>
  }

  export type UserUpdateWithoutCoachSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCoachingMessagesInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoachingMessagesInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoachingMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachingMessagesInput, UserUncheckedCreateWithoutCoachingMessagesInput>
  }

  export type UserUpsertWithoutCoachingMessagesInput = {
    update: XOR<UserUpdateWithoutCoachingMessagesInput, UserUncheckedUpdateWithoutCoachingMessagesInput>
    create: XOR<UserCreateWithoutCoachingMessagesInput, UserUncheckedCreateWithoutCoachingMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachingMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachingMessagesInput, UserUncheckedUpdateWithoutCoachingMessagesInput>
  }

  export type UserUpdateWithoutCoachingMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachingMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPendingCoachingInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPendingCoachingInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPendingCoachingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPendingCoachingInput, UserUncheckedCreateWithoutPendingCoachingInput>
  }

  export type UserUpsertWithoutPendingCoachingInput = {
    update: XOR<UserUpdateWithoutPendingCoachingInput, UserUncheckedUpdateWithoutPendingCoachingInput>
    create: XOR<UserCreateWithoutPendingCoachingInput, UserUncheckedCreateWithoutPendingCoachingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPendingCoachingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPendingCoachingInput, UserUncheckedUpdateWithoutPendingCoachingInput>
  }

  export type UserUpdateWithoutPendingCoachingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPendingCoachingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOwnedPendingNotificationsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    actorPendingNotifications?: PendingNotificationCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedPendingNotificationsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    actorPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutActorInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedPendingNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedPendingNotificationsInput, UserUncheckedCreateWithoutOwnedPendingNotificationsInput>
  }

  export type LiftCreateWithoutPendingNotificationsInput = {
    id?: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    user: UserCreateNestedOneWithoutLiftsInput
    comments?: CommentCreateNestedManyWithoutLiftInput
    reactions?: ReactionCreateNestedManyWithoutLiftInput
  }

  export type LiftUncheckedCreateWithoutPendingNotificationsInput = {
    id?: string
    userId: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLiftInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutLiftInput
  }

  export type LiftCreateOrConnectWithoutPendingNotificationsInput = {
    where: LiftWhereUniqueInput
    create: XOR<LiftCreateWithoutPendingNotificationsInput, LiftUncheckedCreateWithoutPendingNotificationsInput>
  }

  export type UserCreateWithoutActorPendingNotificationsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationCreateNestedManyWithoutLiftOwnerInput
    coachSettings?: UserCoachSettingsCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActorPendingNotificationsInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    lifts?: LiftUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    ownedPendingNotifications?: PendingNotificationUncheckedCreateNestedManyWithoutLiftOwnerInput
    coachSettings?: UserCoachSettingsUncheckedCreateNestedOneWithoutUserInput
    coachingMessages?: CoachingMessageUncheckedCreateNestedManyWithoutUserInput
    pendingCoaching?: PendingCoachingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActorPendingNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActorPendingNotificationsInput, UserUncheckedCreateWithoutActorPendingNotificationsInput>
  }

  export type UserUpsertWithoutOwnedPendingNotificationsInput = {
    update: XOR<UserUpdateWithoutOwnedPendingNotificationsInput, UserUncheckedUpdateWithoutOwnedPendingNotificationsInput>
    create: XOR<UserCreateWithoutOwnedPendingNotificationsInput, UserUncheckedCreateWithoutOwnedPendingNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedPendingNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedPendingNotificationsInput, UserUncheckedUpdateWithoutOwnedPendingNotificationsInput>
  }

  export type UserUpdateWithoutOwnedPendingNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    actorPendingNotifications?: PendingNotificationUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedPendingNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    actorPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutActorNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LiftUpsertWithoutPendingNotificationsInput = {
    update: XOR<LiftUpdateWithoutPendingNotificationsInput, LiftUncheckedUpdateWithoutPendingNotificationsInput>
    create: XOR<LiftCreateWithoutPendingNotificationsInput, LiftUncheckedCreateWithoutPendingNotificationsInput>
    where?: LiftWhereInput
  }

  export type LiftUpdateToOneWithWhereWithoutPendingNotificationsInput = {
    where?: LiftWhereInput
    data: XOR<LiftUpdateWithoutPendingNotificationsInput, LiftUncheckedUpdateWithoutPendingNotificationsInput>
  }

  export type LiftUpdateWithoutPendingNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLiftsNestedInput
    comments?: CommentUpdateManyWithoutLiftNestedInput
    reactions?: ReactionUpdateManyWithoutLiftNestedInput
  }

  export type LiftUncheckedUpdateWithoutPendingNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLiftNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutLiftNestedInput
  }

  export type UserUpsertWithoutActorPendingNotificationsInput = {
    update: XOR<UserUpdateWithoutActorPendingNotificationsInput, UserUncheckedUpdateWithoutActorPendingNotificationsInput>
    create: XOR<UserCreateWithoutActorPendingNotificationsInput, UserUncheckedCreateWithoutActorPendingNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActorPendingNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActorPendingNotificationsInput, UserUncheckedUpdateWithoutActorPendingNotificationsInput>
  }

  export type UserUpdateWithoutActorPendingNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUpdateManyWithoutLiftOwnerNestedInput
    coachSettings?: UserCoachSettingsUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActorPendingNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lifts?: LiftUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    ownedPendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftOwnerNestedInput
    coachSettings?: UserCoachSettingsUncheckedUpdateOneWithoutUserNestedInput
    coachingMessages?: CoachingMessageUncheckedUpdateManyWithoutUserNestedInput
    pendingCoaching?: PendingCoachingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LiftCreateManyUserInput = {
    id?: string
    type: string
    weight: number
    reps: number
    oneRM: number
    loggedAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    liftId: string
    body: string
    createdAt?: Date | string
  }

  export type ReactionCreateManyAuthorInput = {
    id?: string
    liftId: string
    emoji: string
    createdAt?: Date | string
  }

  export type PushSubscriptionCreateManyUserInput = {
    id?: string
    endpoint: string
    p256dh: string
    auth: string
    createdAt?: Date | string
  }

  export type PendingNotificationCreateManyLiftOwnerInput = {
    id?: string
    liftId: string
    actorId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type PendingNotificationCreateManyActorInput = {
    id?: string
    liftOwnerId: string
    liftId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type CoachingMessageCreateManyUserInput = {
    id?: string
    content: string
    sessionLifts: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LiftUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutLiftNestedInput
    reactions?: ReactionUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUpdateManyWithoutLiftNestedInput
  }

  export type LiftUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLiftNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutLiftNestedInput
    pendingNotifications?: PendingNotificationUncheckedUpdateManyWithoutLiftNestedInput
  }

  export type LiftUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    oneRM?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lift?: LiftUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lift?: LiftUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationUpdateWithoutLiftOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lift?: LiftUpdateOneRequiredWithoutPendingNotificationsNestedInput
    actor?: UserUpdateOneRequiredWithoutActorPendingNotificationsNestedInput
  }

  export type PendingNotificationUncheckedUpdateWithoutLiftOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationUncheckedUpdateManyWithoutLiftOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liftOwner?: UserUpdateOneRequiredWithoutOwnedPendingNotificationsNestedInput
    lift?: LiftUpdateOneRequiredWithoutPendingNotificationsNestedInput
  }

  export type PendingNotificationUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftOwnerId?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftOwnerId?: StringFieldUpdateOperationsInput | string
    liftId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sessionLifts?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sessionLifts?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sessionLifts?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyLiftInput = {
    id?: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type ReactionCreateManyLiftInput = {
    id?: string
    authorId: string
    emoji: string
    createdAt?: Date | string
  }

  export type PendingNotificationCreateManyLiftInput = {
    id?: string
    liftOwnerId: string
    actorId: string
    comments?: PendingNotificationCreatecommentsInput | string[]
    reactions?: PendingNotificationCreatereactionsInput | string[]
    sendAfter: Date | string
    sent?: boolean
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationUpdateWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liftOwner?: UserUpdateOneRequiredWithoutOwnedPendingNotificationsNestedInput
    actor?: UserUpdateOneRequiredWithoutActorPendingNotificationsNestedInput
  }

  export type PendingNotificationUncheckedUpdateWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftOwnerId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingNotificationUncheckedUpdateManyWithoutLiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    liftOwnerId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    comments?: PendingNotificationUpdatecommentsInput | string[]
    reactions?: PendingNotificationUpdatereactionsInput | string[]
    sendAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LiftCountOutputTypeDefaultArgs instead
     */
    export type LiftCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LiftCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LiftDefaultArgs instead
     */
    export type LiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LiftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReactionDefaultArgs instead
     */
    export type ReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InviteCodeDefaultArgs instead
     */
    export type InviteCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InviteCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyUpdateDefaultArgs instead
     */
    export type DailyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyUpdateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PushSubscriptionDefaultArgs instead
     */
    export type PushSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PushSubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCoachSettingsDefaultArgs instead
     */
    export type UserCoachSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCoachSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoachingMessageDefaultArgs instead
     */
    export type CoachingMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoachingMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PendingCoachingDefaultArgs instead
     */
    export type PendingCoachingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PendingCoachingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PendingNotificationDefaultArgs instead
     */
    export type PendingNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PendingNotificationDefaultArgs<ExtArgs>

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