
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
 * Model Article
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Comment
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Testimonial
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model User
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
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
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
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
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Article: 'Article',
    Comment: 'Comment',
    Follow: 'Follow',
    Testimonial: 'Testimonial',
    User: 'User',
    Message: 'Message',
    Profile: 'Profile'
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
      modelProps: "article" | "comment" | "follow" | "testimonial" | "user" | "message" | "profile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
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
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
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
    article?: ArticleOmit
    comment?: CommentOmit
    follow?: FollowOmit
    testimonial?: TestimonialOmit
    user?: UserOmit
    message?: MessageOmit
    profile?: ProfileOmit
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
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    comments: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ArticleCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type TestimonialCountOutputType
   */

  export type TestimonialCountOutputType = {
    comments: number
  }

  export type TestimonialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TestimonialCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * TestimonialCountOutputType without action
   */
  export type TestimonialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestimonialCountOutputType
     */
    select?: TestimonialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestimonialCountOutputType without action
   */
  export type TestimonialCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    articles: number
    comments: number
    follows_follows_followed_userTousers: number
    follows_follows_following_userTousers: number
    profiles: number
    testimonials: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    follows_follows_followed_userTousers?: boolean | UserCountOutputTypeCountFollows_follows_followed_userTousersArgs
    follows_follows_following_userTousers?: boolean | UserCountOutputTypeCountFollows_follows_following_userTousersArgs
    profiles?: boolean | UserCountOutputTypeCountProfilesArgs
    testimonials?: boolean | UserCountOutputTypeCountTestimonialsArgs
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
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
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
  export type UserCountOutputTypeCountFollows_follows_followed_userTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollows_follows_following_userTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type ArticleMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    body: string | null
    user_id: bigint | null
    status: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    body: string | null
    user_id: bigint | null
    status: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    body: number
    user_id: number
    status: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    user_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    user_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    user_id?: true
    status?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: bigint
    title: string
    body: string
    user_id: bigint
    status: string
    created_at: Date | null
    modified_at: Date | null
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Article$commentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "user_id" | "status" | "created_at" | "modified_at", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Article$commentsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      body: string
      user_id: bigint
      status: string
      created_at: Date | null
      modified_at: Date | null
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Article$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Article$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'BigInt'>
    readonly title: FieldRef<"Article", 'String'>
    readonly body: FieldRef<"Article", 'String'>
    readonly user_id: FieldRef<"Article", 'BigInt'>
    readonly status: FieldRef<"Article", 'String'>
    readonly created_at: FieldRef<"Article", 'DateTime'>
    readonly modified_at: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.comments
   */
  export type Article$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    article_id: number | null
    testimonial_id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    article_id: bigint | null
    testimonial_id: bigint | null
  }

  export type CommentMinAggregateOutputType = {
    id: bigint | null
    body: string | null
    user_id: bigint | null
    article_id: bigint | null
    testimonial_id: bigint | null
    status: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: bigint | null
    body: string | null
    user_id: bigint | null
    article_id: bigint | null
    testimonial_id: bigint | null
    status: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    body: number
    user_id: number
    article_id: number
    testimonial_id: number
    status: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    user_id?: true
    article_id?: true
    testimonial_id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    user_id?: true
    article_id?: true
    testimonial_id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    body?: true
    user_id?: true
    article_id?: true
    testimonial_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    body?: true
    user_id?: true
    article_id?: true
    testimonial_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    body?: true
    user_id?: true
    article_id?: true
    testimonial_id?: true
    status?: true
    created_at?: true
    modified_at?: true
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
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
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
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: bigint
    body: string
    user_id: bigint
    article_id: bigint | null
    testimonial_id: bigint | null
    status: string
    created_at: Date | null
    modified_at: Date | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
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
    body?: boolean
    user_id?: boolean
    article_id?: boolean
    testimonial_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    articles?: boolean | Comment$articlesArgs<ExtArgs>
    testimonials?: boolean | Comment$testimonialsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    user_id?: boolean
    article_id?: boolean
    testimonial_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    articles?: boolean | Comment$articlesArgs<ExtArgs>
    testimonials?: boolean | Comment$testimonialsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    user_id?: boolean
    article_id?: boolean
    testimonial_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    articles?: boolean | Comment$articlesArgs<ExtArgs>
    testimonials?: boolean | Comment$testimonialsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    body?: boolean
    user_id?: boolean
    article_id?: boolean
    testimonial_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "user_id" | "article_id" | "testimonial_id" | "status" | "created_at" | "modified_at", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Comment$articlesArgs<ExtArgs>
    testimonials?: boolean | Comment$testimonialsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Comment$articlesArgs<ExtArgs>
    testimonials?: boolean | Comment$testimonialsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Comment$articlesArgs<ExtArgs>
    testimonials?: boolean | Comment$testimonialsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs> | null
      testimonials: Prisma.$TestimonialPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      body: string
      user_id: bigint
      article_id: bigint | null
      testimonial_id: bigint | null
      status: string
      created_at: Date | null
      modified_at: Date | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Comment$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$articlesArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    testimonials<T extends Comment$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$testimonialsArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Comment", 'BigInt'>
    readonly body: FieldRef<"Comment", 'String'>
    readonly user_id: FieldRef<"Comment", 'BigInt'>
    readonly article_id: FieldRef<"Comment", 'BigInt'>
    readonly testimonial_id: FieldRef<"Comment", 'BigInt'>
    readonly status: FieldRef<"Comment", 'String'>
    readonly created_at: FieldRef<"Comment", 'DateTime'>
    readonly modified_at: FieldRef<"Comment", 'DateTime'>
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.articles
   */
  export type Comment$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
  }

  /**
   * Comment.testimonials
   */
  export type Comment$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    where?: TestimonialWhereInput
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowAvgAggregateOutputType = {
    id: number | null
    following_user: number | null
    followed_user: number | null
  }

  export type FollowSumAggregateOutputType = {
    id: bigint | null
    following_user: bigint | null
    followed_user: bigint | null
  }

  export type FollowMinAggregateOutputType = {
    id: bigint | null
    following_user: bigint | null
    followed_user: bigint | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: bigint | null
    following_user: bigint | null
    followed_user: bigint | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    following_user: number
    followed_user: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type FollowAvgAggregateInputType = {
    id?: true
    following_user?: true
    followed_user?: true
  }

  export type FollowSumAggregateInputType = {
    id?: true
    following_user?: true
    followed_user?: true
  }

  export type FollowMinAggregateInputType = {
    id?: true
    following_user?: true
    followed_user?: true
    created_at?: true
    modified_at?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    following_user?: true
    followed_user?: true
    created_at?: true
    modified_at?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    following_user?: true
    followed_user?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _avg?: FollowAvgAggregateInputType
    _sum?: FollowSumAggregateInputType
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: bigint
    following_user: bigint
    followed_user: bigint
    created_at: Date | null
    modified_at: Date | null
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    following_user?: boolean
    followed_user?: boolean
    created_at?: boolean
    modified_at?: boolean
    users_follows_followed_userTousers?: boolean | UserDefaultArgs<ExtArgs>
    users_follows_following_userTousers?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    following_user?: boolean
    followed_user?: boolean
    created_at?: boolean
    modified_at?: boolean
    users_follows_followed_userTousers?: boolean | UserDefaultArgs<ExtArgs>
    users_follows_following_userTousers?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    following_user?: boolean
    followed_user?: boolean
    created_at?: boolean
    modified_at?: boolean
    users_follows_followed_userTousers?: boolean | UserDefaultArgs<ExtArgs>
    users_follows_following_userTousers?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    id?: boolean
    following_user?: boolean
    followed_user?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "following_user" | "followed_user" | "created_at" | "modified_at", ExtArgs["result"]["follow"]>
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_follows_followed_userTousers?: boolean | UserDefaultArgs<ExtArgs>
    users_follows_following_userTousers?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_follows_followed_userTousers?: boolean | UserDefaultArgs<ExtArgs>
    users_follows_following_userTousers?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_follows_followed_userTousers?: boolean | UserDefaultArgs<ExtArgs>
    users_follows_following_userTousers?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      users_follows_followed_userTousers: Prisma.$UserPayload<ExtArgs>
      users_follows_following_userTousers: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      following_user: bigint
      followed_user: bigint
      created_at: Date | null
      modified_at: Date | null
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
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
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_follows_followed_userTousers<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_follows_following_userTousers<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'BigInt'>
    readonly following_user: FieldRef<"Follow", 'BigInt'>
    readonly followed_user: FieldRef<"Follow", 'BigInt'>
    readonly created_at: FieldRef<"Follow", 'DateTime'>
    readonly modified_at: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow updateManyAndReturn
   */
  export type FollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    body: string | null
    user_id: bigint | null
    status: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    body: string | null
    user_id: bigint | null
    status: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    title: number
    body: number
    user_id: number
    status: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TestimonialSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    user_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    user_id?: true
    status?: true
    created_at?: true
    modified_at?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    user_id?: true
    status?: true
    created_at?: true
    modified_at?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: bigint
    title: string
    body: string
    user_id: bigint
    status: string
    created_at: Date | null
    modified_at: Date | null
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    comments?: boolean | Testimonial$commentsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TestimonialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type TestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "user_id" | "status" | "created_at" | "modified_at", ExtArgs["result"]["testimonial"]>
  export type TestimonialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Testimonial$commentsArgs<ExtArgs>
    users?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TestimonialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestimonialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestimonialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      body: string
      user_id: bigint
      status: string
      created_at: Date | null
      modified_at: Date | null
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
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
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Testimonial$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Testimonial$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Testimonial model
   */
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'BigInt'>
    readonly title: FieldRef<"Testimonial", 'String'>
    readonly body: FieldRef<"Testimonial", 'String'>
    readonly user_id: FieldRef<"Testimonial", 'BigInt'>
    readonly status: FieldRef<"Testimonial", 'String'>
    readonly created_at: FieldRef<"Testimonial", 'DateTime'>
    readonly modified_at: FieldRef<"Testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial createManyAndReturn
   */
  export type TestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial updateManyAndReturn
   */
  export type TestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonial.comments
   */
  export type Testimonial$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    supprime: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    supprime: number | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    modified_at: Date | null
    role: string | null
    supprime: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    modified_at: Date | null
    role: string | null
    supprime: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    created_at: number
    modified_at: number
    role: number
    supprime: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    supprime?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    supprime?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    created_at?: true
    modified_at?: true
    role?: true
    supprime?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    created_at?: true
    modified_at?: true
    role?: true
    supprime?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    created_at?: true
    modified_at?: true
    role?: true
    supprime?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    firstname: string
    lastname: string
    email: string
    password: string
    created_at: Date | null
    modified_at: Date | null
    role: string
    supprime: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    supprime?: boolean
    articles?: boolean | User$articlesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    follows_follows_followed_userTousers?: boolean | User$follows_follows_followed_userTousersArgs<ExtArgs>
    follows_follows_following_userTousers?: boolean | User$follows_follows_following_userTousersArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    testimonials?: boolean | User$testimonialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    supprime?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    supprime?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    modified_at?: boolean
    role?: boolean
    supprime?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "created_at" | "modified_at" | "role" | "supprime", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | User$articlesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    follows_follows_followed_userTousers?: boolean | User$follows_follows_followed_userTousersArgs<ExtArgs>
    follows_follows_following_userTousers?: boolean | User$follows_follows_following_userTousersArgs<ExtArgs>
    profiles?: boolean | User$profilesArgs<ExtArgs>
    testimonials?: boolean | User$testimonialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      follows_follows_followed_userTousers: Prisma.$FollowPayload<ExtArgs>[]
      follows_follows_following_userTousers: Prisma.$FollowPayload<ExtArgs>[]
      profiles: Prisma.$ProfilePayload<ExtArgs>[]
      testimonials: Prisma.$TestimonialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      firstname: string
      lastname: string
      email: string
      password: string
      created_at: Date | null
      modified_at: Date | null
      role: string
      supprime: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follows_follows_followed_userTousers<T extends User$follows_follows_followed_userTousersArgs<ExtArgs> = {}>(args?: Subset<T, User$follows_follows_followed_userTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follows_follows_following_userTousers<T extends User$follows_follows_following_userTousersArgs<ExtArgs> = {}>(args?: Subset<T, User$follows_follows_following_userTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends User$profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testimonials<T extends User$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, User$testimonialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'BigInt'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly modified_at: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
    readonly supprime: FieldRef<"User", 'Int'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
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
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
   * User.follows_follows_followed_userTousers
   */
  export type User$follows_follows_followed_userTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.follows_follows_following_userTousers
   */
  export type User$follows_follows_following_userTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.profiles
   */
  export type User$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * User.testimonials
   */
  export type User$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    cursor?: TestimonialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    treated: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: bigint | null
    treated: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: bigint | null
    nom: string | null
    email: string | null
    phone: string | null
    message: string | null
    treated: number | null
    created: Date | null
    modified: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: bigint | null
    nom: string | null
    email: string | null
    phone: string | null
    message: string | null
    treated: number | null
    created: Date | null
    modified: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    phone: number
    message: number
    treated: number
    created: number
    modified: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    treated?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    treated?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    phone?: true
    message?: true
    treated?: true
    created?: true
    modified?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    phone?: true
    message?: true
    treated?: true
    created?: true
    modified?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    phone?: true
    message?: true
    treated?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: bigint
    nom: string
    email: string
    phone: string
    message: string
    treated: number
    created: Date | null
    modified: Date | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    treated?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    treated?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    treated?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    treated?: boolean
    created?: boolean
    modified?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "phone" | "message" | "treated" | "created" | "modified", ExtArgs["result"]["message"]>

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nom: string
      email: string
      phone: string
      message: string
      treated: number
      created: Date | null
      modified: Date | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'BigInt'>
    readonly nom: FieldRef<"Message", 'String'>
    readonly email: FieldRef<"Message", 'String'>
    readonly phone: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly treated: FieldRef<"Message", 'Int'>
    readonly created: FieldRef<"Message", 'DateTime'>
    readonly modified: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    active: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    active: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    modified_at: Date | null
    pseudo: string | null
    firstname: string | null
    lastname: string | null
    picture: string | null
    bio: string | null
    user_id: bigint | null
    active: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    modified_at: Date | null
    pseudo: string | null
    firstname: string | null
    lastname: string | null
    picture: string | null
    bio: string | null
    user_id: bigint | null
    active: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    created_at: number
    modified_at: number
    pseudo: number
    firstname: number
    lastname: number
    picture: number
    bio: number
    user_id: number
    active: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    user_id?: true
    active?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    user_id?: true
    active?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    created_at?: true
    modified_at?: true
    pseudo?: true
    firstname?: true
    lastname?: true
    picture?: true
    bio?: true
    user_id?: true
    active?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    created_at?: true
    modified_at?: true
    pseudo?: true
    firstname?: true
    lastname?: true
    picture?: true
    bio?: true
    user_id?: true
    active?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    created_at?: true
    modified_at?: true
    pseudo?: true
    firstname?: true
    lastname?: true
    picture?: true
    bio?: true
    user_id?: true
    active?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: bigint
    created_at: Date
    modified_at: Date
    pseudo: string | null
    firstname: string | null
    lastname: string | null
    picture: string | null
    bio: string | null
    user_id: bigint
    active: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    modified_at?: boolean
    pseudo?: boolean
    firstname?: boolean
    lastname?: boolean
    picture?: boolean
    bio?: boolean
    user_id?: boolean
    active?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    modified_at?: boolean
    pseudo?: boolean
    firstname?: boolean
    lastname?: boolean
    picture?: boolean
    bio?: boolean
    user_id?: boolean
    active?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    modified_at?: boolean
    pseudo?: boolean
    firstname?: boolean
    lastname?: boolean
    picture?: boolean
    bio?: boolean
    user_id?: boolean
    active?: boolean
    users?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    created_at?: boolean
    modified_at?: boolean
    pseudo?: boolean
    firstname?: boolean
    lastname?: boolean
    picture?: boolean
    bio?: boolean
    user_id?: boolean
    active?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "modified_at" | "pseudo" | "firstname" | "lastname" | "picture" | "bio" | "user_id" | "active", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      modified_at: Date
      pseudo: string | null
      firstname: string | null
      lastname: string | null
      picture: string | null
      bio: string | null
      user_id: bigint
      active: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'BigInt'>
    readonly created_at: FieldRef<"Profile", 'DateTime'>
    readonly modified_at: FieldRef<"Profile", 'DateTime'>
    readonly pseudo: FieldRef<"Profile", 'String'>
    readonly firstname: FieldRef<"Profile", 'String'>
    readonly lastname: FieldRef<"Profile", 'String'>
    readonly picture: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly user_id: FieldRef<"Profile", 'BigInt'>
    readonly active: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
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


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    user_id: 'user_id',
    status: 'status',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    body: 'body',
    user_id: 'user_id',
    article_id: 'article_id',
    testimonial_id: 'testimonial_id',
    status: 'status',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    following_user: 'following_user',
    followed_user: 'followed_user',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    user_id: 'user_id',
    status: 'status',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    modified_at: 'modified_at',
    role: 'role',
    supprime: 'supprime'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    phone: 'phone',
    message: 'message',
    treated: 'treated',
    created: 'created',
    modified: 'modified'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    modified_at: 'modified_at',
    pseudo: 'pseudo',
    firstname: 'firstname',
    lastname: 'lastname',
    picture: 'picture',
    bio: 'bio',
    user_id: 'user_id',
    active: 'active'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: BigIntFilter<"Article"> | bigint | number
    title?: StringFilter<"Article"> | string
    body?: StringFilter<"Article"> | string
    user_id?: BigIntFilter<"Article"> | bigint | number
    status?: StringFilter<"Article"> | string
    created_at?: DateTimeNullableFilter<"Article"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Article"> | Date | string | null
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    users?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    body?: StringFilter<"Article"> | string
    user_id?: BigIntFilter<"Article"> | bigint | number
    status?: StringFilter<"Article"> | string
    created_at?: DateTimeNullableFilter<"Article"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Article"> | Date | string | null
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Article"> | bigint | number
    title?: StringWithAggregatesFilter<"Article"> | string
    body?: StringWithAggregatesFilter<"Article"> | string
    user_id?: BigIntWithAggregatesFilter<"Article"> | bigint | number
    status?: StringWithAggregatesFilter<"Article"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: BigIntFilter<"Comment"> | bigint | number
    body?: StringFilter<"Comment"> | string
    user_id?: BigIntFilter<"Comment"> | bigint | number
    article_id?: BigIntNullableFilter<"Comment"> | bigint | number | null
    testimonial_id?: BigIntNullableFilter<"Comment"> | bigint | number | null
    status?: StringFilter<"Comment"> | string
    created_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    articles?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
    testimonials?: XOR<TestimonialNullableScalarRelationFilter, TestimonialWhereInput> | null
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrderInput | SortOrder
    testimonial_id?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    articles?: ArticleOrderByWithRelationInput
    testimonials?: TestimonialOrderByWithRelationInput
    users?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    body?: StringFilter<"Comment"> | string
    user_id?: BigIntFilter<"Comment"> | bigint | number
    article_id?: BigIntNullableFilter<"Comment"> | bigint | number | null
    testimonial_id?: BigIntNullableFilter<"Comment"> | bigint | number | null
    status?: StringFilter<"Comment"> | string
    created_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    articles?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
    testimonials?: XOR<TestimonialNullableScalarRelationFilter, TestimonialWhereInput> | null
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrderInput | SortOrder
    testimonial_id?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
    body?: StringWithAggregatesFilter<"Comment"> | string
    user_id?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
    article_id?: BigIntNullableWithAggregatesFilter<"Comment"> | bigint | number | null
    testimonial_id?: BigIntNullableWithAggregatesFilter<"Comment"> | bigint | number | null
    status?: StringWithAggregatesFilter<"Comment"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: BigIntFilter<"Follow"> | bigint | number
    following_user?: BigIntFilter<"Follow"> | bigint | number
    followed_user?: BigIntFilter<"Follow"> | bigint | number
    created_at?: DateTimeNullableFilter<"Follow"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Follow"> | Date | string | null
    users_follows_followed_userTousers?: XOR<UserScalarRelationFilter, UserWhereInput>
    users_follows_following_userTousers?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    following_user?: SortOrder
    followed_user?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    users_follows_followed_userTousers?: UserOrderByWithRelationInput
    users_follows_following_userTousers?: UserOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    following_user?: BigIntFilter<"Follow"> | bigint | number
    followed_user?: BigIntFilter<"Follow"> | bigint | number
    created_at?: DateTimeNullableFilter<"Follow"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Follow"> | Date | string | null
    users_follows_followed_userTousers?: XOR<UserScalarRelationFilter, UserWhereInput>
    users_follows_following_userTousers?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    following_user?: SortOrder
    followed_user?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    _count?: FollowCountOrderByAggregateInput
    _avg?: FollowAvgOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
    _sum?: FollowSumOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Follow"> | bigint | number
    following_user?: BigIntWithAggregatesFilter<"Follow"> | bigint | number
    followed_user?: BigIntWithAggregatesFilter<"Follow"> | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Follow"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"Follow"> | Date | string | null
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: BigIntFilter<"Testimonial"> | bigint | number
    title?: StringFilter<"Testimonial"> | string
    body?: StringFilter<"Testimonial"> | string
    user_id?: BigIntFilter<"Testimonial"> | bigint | number
    status?: StringFilter<"Testimonial"> | string
    created_at?: DateTimeNullableFilter<"Testimonial"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Testimonial"> | Date | string | null
    comments?: CommentListRelationFilter
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    comments?: CommentOrderByRelationAggregateInput
    users?: UserOrderByWithRelationInput
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    title?: StringFilter<"Testimonial"> | string
    body?: StringFilter<"Testimonial"> | string
    user_id?: BigIntFilter<"Testimonial"> | bigint | number
    status?: StringFilter<"Testimonial"> | string
    created_at?: DateTimeNullableFilter<"Testimonial"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Testimonial"> | Date | string | null
    comments?: CommentListRelationFilter
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _avg?: TestimonialAvgOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
    _sum?: TestimonialSumOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Testimonial"> | bigint | number
    title?: StringWithAggregatesFilter<"Testimonial"> | string
    body?: StringWithAggregatesFilter<"Testimonial"> | string
    user_id?: BigIntWithAggregatesFilter<"Testimonial"> | bigint | number
    status?: StringWithAggregatesFilter<"Testimonial"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Testimonial"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"Testimonial"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    supprime?: IntFilter<"User"> | number
    articles?: ArticleListRelationFilter
    comments?: CommentListRelationFilter
    follows_follows_followed_userTousers?: FollowListRelationFilter
    follows_follows_following_userTousers?: FollowListRelationFilter
    profiles?: ProfileListRelationFilter
    testimonials?: TestimonialListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    role?: SortOrder
    supprime?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    follows_follows_followed_userTousers?: FollowOrderByRelationAggregateInput
    follows_follows_following_userTousers?: FollowOrderByRelationAggregateInput
    profiles?: ProfileOrderByRelationAggregateInput
    testimonials?: TestimonialOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    supprime?: IntFilter<"User"> | number
    articles?: ArticleListRelationFilter
    comments?: CommentListRelationFilter
    follows_follows_followed_userTousers?: FollowListRelationFilter
    follows_follows_following_userTousers?: FollowListRelationFilter
    profiles?: ProfileListRelationFilter
    testimonials?: TestimonialListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    role?: SortOrder
    supprime?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    supprime?: IntWithAggregatesFilter<"User"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: BigIntFilter<"Message"> | bigint | number
    nom?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    phone?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    treated?: IntFilter<"Message"> | number
    created?: DateTimeNullableFilter<"Message"> | Date | string | null
    modified?: DateTimeNullableFilter<"Message"> | Date | string | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    treated?: SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    nom?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    phone?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    treated?: IntFilter<"Message"> | number
    created?: DateTimeNullableFilter<"Message"> | Date | string | null
    modified?: DateTimeNullableFilter<"Message"> | Date | string | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    treated?: SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Message"> | bigint | number
    nom?: StringWithAggregatesFilter<"Message"> | string
    email?: StringWithAggregatesFilter<"Message"> | string
    phone?: StringWithAggregatesFilter<"Message"> | string
    message?: StringWithAggregatesFilter<"Message"> | string
    treated?: IntWithAggregatesFilter<"Message"> | number
    created?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: BigIntFilter<"Profile"> | bigint | number
    created_at?: DateTimeFilter<"Profile"> | Date | string
    modified_at?: DateTimeFilter<"Profile"> | Date | string
    pseudo?: StringNullableFilter<"Profile"> | string | null
    firstname?: StringNullableFilter<"Profile"> | string | null
    lastname?: StringNullableFilter<"Profile"> | string | null
    picture?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    user_id?: BigIntFilter<"Profile"> | bigint | number
    active?: IntFilter<"Profile"> | number
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    pseudo?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    user_id?: SortOrder
    active?: SortOrder
    users?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id?: bigint | number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    created_at?: DateTimeFilter<"Profile"> | Date | string
    modified_at?: DateTimeFilter<"Profile"> | Date | string
    pseudo?: StringNullableFilter<"Profile"> | string | null
    firstname?: StringNullableFilter<"Profile"> | string | null
    lastname?: StringNullableFilter<"Profile"> | string | null
    picture?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    active?: IntFilter<"Profile"> | number
    users?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    pseudo?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    user_id?: SortOrder
    active?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Profile"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    modified_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    pseudo?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    firstname?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    user_id?: BigIntWithAggregatesFilter<"Profile"> | bigint | number
    active?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type ArticleCreateInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    users: UserCreateNestedOneWithoutArticlesInput
    comments?: CommentCreateNestedManyWithoutArticlesInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: bigint | number
    title: string
    body: string
    user_id: bigint | number
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateOneRequiredWithoutArticlesNestedInput
    comments?: CommentUpdateManyWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: bigint | number
    title: string
    body: string
    user_id: bigint | number
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ArticleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateInput = {
    id?: bigint | number
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    articles?: ArticleCreateNestedOneWithoutCommentsInput
    testimonials?: TestimonialCreateNestedOneWithoutCommentsInput
    users: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: bigint | number
    body: string
    user_id: bigint | number
    article_id?: bigint | number | null
    testimonial_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUpdateOneWithoutCommentsNestedInput
    testimonials?: TestimonialUpdateOneWithoutCommentsNestedInput
    users?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    testimonial_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateManyInput = {
    id?: bigint | number
    body: string
    user_id: bigint | number
    article_id?: bigint | number | null
    testimonial_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    testimonial_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowCreateInput = {
    id?: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
    users_follows_followed_userTousers: UserCreateNestedOneWithoutFollows_follows_followed_userTousersInput
    users_follows_following_userTousers: UserCreateNestedOneWithoutFollows_follows_following_userTousersInput
  }

  export type FollowUncheckedCreateInput = {
    id?: bigint | number
    following_user: bigint | number
    followed_user: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type FollowUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_follows_followed_userTousers?: UserUpdateOneRequiredWithoutFollows_follows_followed_userTousersNestedInput
    users_follows_following_userTousers?: UserUpdateOneRequiredWithoutFollows_follows_following_userTousersNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    following_user?: BigIntFieldUpdateOperationsInput | bigint | number
    followed_user?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowCreateManyInput = {
    id?: bigint | number
    following_user: bigint | number
    followed_user: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type FollowUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    following_user?: BigIntFieldUpdateOperationsInput | bigint | number
    followed_user?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestimonialCreateInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    comments?: CommentCreateNestedManyWithoutTestimonialsInput
    users: UserCreateNestedOneWithoutTestimonialsInput
  }

  export type TestimonialUncheckedCreateInput = {
    id?: bigint | number
    title: string
    body: string
    user_id: bigint | number
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTestimonialsInput
  }

  export type TestimonialUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutTestimonialsNestedInput
    users?: UserUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutTestimonialsNestedInput
  }

  export type TestimonialCreateManyInput = {
    id?: bigint | number
    title: string
    body: string
    user_id: bigint | number
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type TestimonialUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleCreateNestedManyWithoutUsersInput
    comments?: CommentCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleUncheckedCreateNestedManyWithoutUsersInput
    comments?: CommentUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileUncheckedCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUpdateManyWithoutUsersNestedInput
    comments?: CommentUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUncheckedUpdateManyWithoutUsersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUncheckedUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    id?: bigint | number
    nom: string
    email: string
    phone: string
    message: string
    treated?: number
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type MessageUncheckedCreateInput = {
    id?: bigint | number
    nom: string
    email: string
    phone: string
    message: string
    treated?: number
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type MessageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    treated?: IntFieldUpdateOperationsInput | number
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    treated?: IntFieldUpdateOperationsInput | number
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateManyInput = {
    id?: bigint | number
    nom: string
    email: string
    phone: string
    message: string
    treated?: number
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    treated?: IntFieldUpdateOperationsInput | number
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    treated?: IntFieldUpdateOperationsInput | number
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    modified_at?: Date | string
    pseudo?: string | null
    firstname?: string | null
    lastname?: string | null
    picture?: string | null
    bio?: string | null
    active?: number
    users: UserCreateNestedOneWithoutProfilesInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    modified_at?: Date | string
    pseudo?: string | null
    firstname?: string | null
    lastname?: string | null
    picture?: string | null
    bio?: string | null
    user_id: bigint | number
    active?: number
  }

  export type ProfileUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    modified_at?: Date | string
    pseudo?: string | null
    firstname?: string | null
    lastname?: string | null
    picture?: string | null
    bio?: string | null
    user_id: bigint | number
    active?: number
  }

  export type ProfileUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ArticleNullableScalarRelationFilter = {
    is?: ArticleWhereInput | null
    isNot?: ArticleWhereInput | null
  }

  export type TestimonialNullableScalarRelationFilter = {
    is?: TestimonialWhereInput | null
    isNot?: TestimonialWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
    testimonial_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
    testimonial_id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
    testimonial_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
    testimonial_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    article_id?: SortOrder
    testimonial_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    following_user?: SortOrder
    followed_user?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type FollowAvgOrderByAggregateInput = {
    id?: SortOrder
    following_user?: SortOrder
    followed_user?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    following_user?: SortOrder
    followed_user?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    following_user?: SortOrder
    followed_user?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type FollowSumOrderByAggregateInput = {
    id?: SortOrder
    following_user?: SortOrder
    followed_user?: SortOrder
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type TestimonialAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type TestimonialSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type TestimonialListRelationFilter = {
    every?: TestimonialWhereInput
    some?: TestimonialWhereInput
    none?: TestimonialWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestimonialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    supprime?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    supprime?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    supprime?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    role?: SortOrder
    supprime?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    supprime?: SortOrder
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

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    treated?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    treated?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    treated?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    treated?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    treated?: SortOrder
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

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    pseudo?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    picture?: SortOrder
    bio?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    pseudo?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    picture?: SortOrder
    bio?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    pseudo?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    picture?: SortOrder
    bio?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
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

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutArticlesInput = {
    create?: XOR<CommentCreateWithoutArticlesInput, CommentUncheckedCreateWithoutArticlesInput> | CommentCreateWithoutArticlesInput[] | CommentUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticlesInput | CommentCreateOrConnectWithoutArticlesInput[]
    createMany?: CommentCreateManyArticlesInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<CommentCreateWithoutArticlesInput, CommentUncheckedCreateWithoutArticlesInput> | CommentCreateWithoutArticlesInput[] | CommentUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticlesInput | CommentCreateOrConnectWithoutArticlesInput[]
    createMany?: CommentCreateManyArticlesInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type CommentUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<CommentCreateWithoutArticlesInput, CommentUncheckedCreateWithoutArticlesInput> | CommentCreateWithoutArticlesInput[] | CommentUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticlesInput | CommentCreateOrConnectWithoutArticlesInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticlesInput | CommentUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: CommentCreateManyArticlesInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticlesInput | CommentUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticlesInput | CommentUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<CommentCreateWithoutArticlesInput, CommentUncheckedCreateWithoutArticlesInput> | CommentCreateWithoutArticlesInput[] | CommentUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticlesInput | CommentCreateOrConnectWithoutArticlesInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticlesInput | CommentUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: CommentCreateManyArticlesInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticlesInput | CommentUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticlesInput | CommentUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    connect?: ArticleWhereUniqueInput
  }

  export type TestimonialCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TestimonialCreateWithoutCommentsInput, TestimonialUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TestimonialCreateOrConnectWithoutCommentsInput
    connect?: TestimonialWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput
    upsert?: ArticleUpsertWithoutCommentsInput
    disconnect?: ArticleWhereInput | boolean
    delete?: ArticleWhereInput | boolean
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutCommentsInput, ArticleUpdateWithoutCommentsInput>, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type TestimonialUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<TestimonialCreateWithoutCommentsInput, TestimonialUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TestimonialCreateOrConnectWithoutCommentsInput
    upsert?: TestimonialUpsertWithoutCommentsInput
    disconnect?: TestimonialWhereInput | boolean
    delete?: TestimonialWhereInput | boolean
    connect?: TestimonialWhereUniqueInput
    update?: XOR<XOR<TestimonialUpdateToOneWithWhereWithoutCommentsInput, TestimonialUpdateWithoutCommentsInput>, TestimonialUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserCreateNestedOneWithoutFollows_follows_followed_userTousersInput = {
    create?: XOR<UserCreateWithoutFollows_follows_followed_userTousersInput, UserUncheckedCreateWithoutFollows_follows_followed_userTousersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollows_follows_followed_userTousersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollows_follows_following_userTousersInput = {
    create?: XOR<UserCreateWithoutFollows_follows_following_userTousersInput, UserUncheckedCreateWithoutFollows_follows_following_userTousersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollows_follows_following_userTousersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollows_follows_followed_userTousersNestedInput = {
    create?: XOR<UserCreateWithoutFollows_follows_followed_userTousersInput, UserUncheckedCreateWithoutFollows_follows_followed_userTousersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollows_follows_followed_userTousersInput
    upsert?: UserUpsertWithoutFollows_follows_followed_userTousersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollows_follows_followed_userTousersInput, UserUpdateWithoutFollows_follows_followed_userTousersInput>, UserUncheckedUpdateWithoutFollows_follows_followed_userTousersInput>
  }

  export type UserUpdateOneRequiredWithoutFollows_follows_following_userTousersNestedInput = {
    create?: XOR<UserCreateWithoutFollows_follows_following_userTousersInput, UserUncheckedCreateWithoutFollows_follows_following_userTousersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollows_follows_following_userTousersInput
    upsert?: UserUpsertWithoutFollows_follows_following_userTousersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollows_follows_following_userTousersInput, UserUpdateWithoutFollows_follows_following_userTousersInput>, UserUncheckedUpdateWithoutFollows_follows_following_userTousersInput>
  }

  export type CommentCreateNestedManyWithoutTestimonialsInput = {
    create?: XOR<CommentCreateWithoutTestimonialsInput, CommentUncheckedCreateWithoutTestimonialsInput> | CommentCreateWithoutTestimonialsInput[] | CommentUncheckedCreateWithoutTestimonialsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTestimonialsInput | CommentCreateOrConnectWithoutTestimonialsInput[]
    createMany?: CommentCreateManyTestimonialsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTestimonialsInput = {
    create?: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestimonialsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutTestimonialsInput = {
    create?: XOR<CommentCreateWithoutTestimonialsInput, CommentUncheckedCreateWithoutTestimonialsInput> | CommentCreateWithoutTestimonialsInput[] | CommentUncheckedCreateWithoutTestimonialsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTestimonialsInput | CommentCreateOrConnectWithoutTestimonialsInput[]
    createMany?: CommentCreateManyTestimonialsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutTestimonialsNestedInput = {
    create?: XOR<CommentCreateWithoutTestimonialsInput, CommentUncheckedCreateWithoutTestimonialsInput> | CommentCreateWithoutTestimonialsInput[] | CommentUncheckedCreateWithoutTestimonialsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTestimonialsInput | CommentCreateOrConnectWithoutTestimonialsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTestimonialsInput | CommentUpsertWithWhereUniqueWithoutTestimonialsInput[]
    createMany?: CommentCreateManyTestimonialsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTestimonialsInput | CommentUpdateWithWhereUniqueWithoutTestimonialsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTestimonialsInput | CommentUpdateManyWithWhereWithoutTestimonialsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTestimonialsNestedInput = {
    create?: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestimonialsInput
    upsert?: UserUpsertWithoutTestimonialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestimonialsInput, UserUpdateWithoutTestimonialsInput>, UserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type CommentUncheckedUpdateManyWithoutTestimonialsNestedInput = {
    create?: XOR<CommentCreateWithoutTestimonialsInput, CommentUncheckedCreateWithoutTestimonialsInput> | CommentCreateWithoutTestimonialsInput[] | CommentUncheckedCreateWithoutTestimonialsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTestimonialsInput | CommentCreateOrConnectWithoutTestimonialsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTestimonialsInput | CommentUpsertWithWhereUniqueWithoutTestimonialsInput[]
    createMany?: CommentCreateManyTestimonialsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTestimonialsInput | CommentUpdateWithWhereUniqueWithoutTestimonialsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTestimonialsInput | CommentUpdateManyWithWhereWithoutTestimonialsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ArticleCreateNestedManyWithoutUsersInput = {
    create?: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput> | ArticleCreateWithoutUsersInput[] | ArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput | ArticleCreateOrConnectWithoutUsersInput[]
    createMany?: ArticleCreateManyUsersInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentCreateWithoutUsersInput, CommentUncheckedCreateWithoutUsersInput> | CommentCreateWithoutUsersInput[] | CommentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUsersInput | CommentCreateOrConnectWithoutUsersInput[]
    createMany?: CommentCreateManyUsersInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutUsers_follows_followed_userTousersInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput> | FollowCreateWithoutUsers_follows_followed_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_followed_userTousersInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutUsers_follows_following_userTousersInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_following_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput> | FollowCreateWithoutUsers_follows_following_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_following_userTousersInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type ProfileCreateNestedManyWithoutUsersInput = {
    create?: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput> | ProfileCreateWithoutUsersInput[] | ProfileUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUsersInput | ProfileCreateOrConnectWithoutUsersInput[]
    createMany?: ProfileCreateManyUsersInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type TestimonialCreateNestedManyWithoutUsersInput = {
    create?: XOR<TestimonialCreateWithoutUsersInput, TestimonialUncheckedCreateWithoutUsersInput> | TestimonialCreateWithoutUsersInput[] | TestimonialUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutUsersInput | TestimonialCreateOrConnectWithoutUsersInput[]
    createMany?: TestimonialCreateManyUsersInputEnvelope
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput> | ArticleCreateWithoutUsersInput[] | ArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput | ArticleCreateOrConnectWithoutUsersInput[]
    createMany?: ArticleCreateManyUsersInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentCreateWithoutUsersInput, CommentUncheckedCreateWithoutUsersInput> | CommentCreateWithoutUsersInput[] | CommentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUsersInput | CommentCreateOrConnectWithoutUsersInput[]
    createMany?: CommentCreateManyUsersInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutUsers_follows_followed_userTousersInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput> | FollowCreateWithoutUsers_follows_followed_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_followed_userTousersInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutUsers_follows_following_userTousersInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_following_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput> | FollowCreateWithoutUsers_follows_following_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_following_userTousersInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput> | ProfileCreateWithoutUsersInput[] | ProfileUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUsersInput | ProfileCreateOrConnectWithoutUsersInput[]
    createMany?: ProfileCreateManyUsersInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type TestimonialUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TestimonialCreateWithoutUsersInput, TestimonialUncheckedCreateWithoutUsersInput> | TestimonialCreateWithoutUsersInput[] | TestimonialUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutUsersInput | TestimonialCreateOrConnectWithoutUsersInput[]
    createMany?: TestimonialCreateManyUsersInputEnvelope
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput> | ArticleCreateWithoutUsersInput[] | ArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput | ArticleCreateOrConnectWithoutUsersInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUsersInput | ArticleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ArticleCreateManyUsersInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUsersInput | ArticleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUsersInput | ArticleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentCreateWithoutUsersInput, CommentUncheckedCreateWithoutUsersInput> | CommentCreateWithoutUsersInput[] | CommentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUsersInput | CommentCreateOrConnectWithoutUsersInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUsersInput | CommentUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentCreateManyUsersInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUsersInput | CommentUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUsersInput | CommentUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutUsers_follows_followed_userTousersNestedInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput> | FollowCreateWithoutUsers_follows_followed_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutUsers_follows_followed_userTousersInput | FollowUpsertWithWhereUniqueWithoutUsers_follows_followed_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_followed_userTousersInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutUsers_follows_followed_userTousersInput | FollowUpdateWithWhereUniqueWithoutUsers_follows_followed_userTousersInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutUsers_follows_followed_userTousersInput | FollowUpdateManyWithWhereWithoutUsers_follows_followed_userTousersInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutUsers_follows_following_userTousersNestedInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_following_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput> | FollowCreateWithoutUsers_follows_following_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutUsers_follows_following_userTousersInput | FollowUpsertWithWhereUniqueWithoutUsers_follows_following_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_following_userTousersInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutUsers_follows_following_userTousersInput | FollowUpdateWithWhereUniqueWithoutUsers_follows_following_userTousersInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutUsers_follows_following_userTousersInput | FollowUpdateManyWithWhereWithoutUsers_follows_following_userTousersInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type ProfileUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput> | ProfileCreateWithoutUsersInput[] | ProfileUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUsersInput | ProfileCreateOrConnectWithoutUsersInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUsersInput | ProfileUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ProfileCreateManyUsersInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUsersInput | ProfileUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUsersInput | ProfileUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type TestimonialUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TestimonialCreateWithoutUsersInput, TestimonialUncheckedCreateWithoutUsersInput> | TestimonialCreateWithoutUsersInput[] | TestimonialUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutUsersInput | TestimonialCreateOrConnectWithoutUsersInput[]
    upsert?: TestimonialUpsertWithWhereUniqueWithoutUsersInput | TestimonialUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TestimonialCreateManyUsersInputEnvelope
    set?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    disconnect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    delete?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    update?: TestimonialUpdateWithWhereUniqueWithoutUsersInput | TestimonialUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TestimonialUpdateManyWithWhereWithoutUsersInput | TestimonialUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput> | ArticleCreateWithoutUsersInput[] | ArticleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput | ArticleCreateOrConnectWithoutUsersInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUsersInput | ArticleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ArticleCreateManyUsersInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUsersInput | ArticleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUsersInput | ArticleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentCreateWithoutUsersInput, CommentUncheckedCreateWithoutUsersInput> | CommentCreateWithoutUsersInput[] | CommentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUsersInput | CommentCreateOrConnectWithoutUsersInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUsersInput | CommentUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentCreateManyUsersInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUsersInput | CommentUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUsersInput | CommentUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersNestedInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput> | FollowCreateWithoutUsers_follows_followed_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutUsers_follows_followed_userTousersInput | FollowUpsertWithWhereUniqueWithoutUsers_follows_followed_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_followed_userTousersInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutUsers_follows_followed_userTousersInput | FollowUpdateWithWhereUniqueWithoutUsers_follows_followed_userTousersInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutUsers_follows_followed_userTousersInput | FollowUpdateManyWithWhereWithoutUsers_follows_followed_userTousersInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersNestedInput = {
    create?: XOR<FollowCreateWithoutUsers_follows_following_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput> | FollowCreateWithoutUsers_follows_following_userTousersInput[] | FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput | FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutUsers_follows_following_userTousersInput | FollowUpsertWithWhereUniqueWithoutUsers_follows_following_userTousersInput[]
    createMany?: FollowCreateManyUsers_follows_following_userTousersInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutUsers_follows_following_userTousersInput | FollowUpdateWithWhereUniqueWithoutUsers_follows_following_userTousersInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutUsers_follows_following_userTousersInput | FollowUpdateManyWithWhereWithoutUsers_follows_following_userTousersInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput> | ProfileCreateWithoutUsersInput[] | ProfileUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutUsersInput | ProfileCreateOrConnectWithoutUsersInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutUsersInput | ProfileUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ProfileCreateManyUsersInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutUsersInput | ProfileUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutUsersInput | ProfileUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type TestimonialUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TestimonialCreateWithoutUsersInput, TestimonialUncheckedCreateWithoutUsersInput> | TestimonialCreateWithoutUsersInput[] | TestimonialUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutUsersInput | TestimonialCreateOrConnectWithoutUsersInput[]
    upsert?: TestimonialUpsertWithWhereUniqueWithoutUsersInput | TestimonialUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TestimonialCreateManyUsersInputEnvelope
    set?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    disconnect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    delete?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    update?: TestimonialUpdateWithWhereUniqueWithoutUsersInput | TestimonialUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TestimonialUpdateManyWithWhereWithoutUsersInput | TestimonialUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfilesInput
    upsert?: UserUpsertWithoutProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfilesInput, UserUpdateWithoutProfilesInput>, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type UserCreateWithoutArticlesInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    comments?: CommentCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    comments?: CommentUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileUncheckedCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type CommentCreateWithoutArticlesInput = {
    id?: bigint | number
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    testimonials?: TestimonialCreateNestedOneWithoutCommentsInput
    users: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutArticlesInput = {
    id?: bigint | number
    body: string
    user_id: bigint | number
    testimonial_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentCreateOrConnectWithoutArticlesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArticlesInput, CommentUncheckedCreateWithoutArticlesInput>
  }

  export type CommentCreateManyArticlesInputEnvelope = {
    data: CommentCreateManyArticlesInput | CommentCreateManyArticlesInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    comments?: CommentUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUncheckedUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutArticlesInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArticlesInput, CommentUncheckedUpdateWithoutArticlesInput>
    create: XOR<CommentCreateWithoutArticlesInput, CommentUncheckedCreateWithoutArticlesInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArticlesInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArticlesInput, CommentUncheckedUpdateWithoutArticlesInput>
  }

  export type CommentUpdateManyWithWhereWithoutArticlesInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutArticlesInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: BigIntFilter<"Comment"> | bigint | number
    body?: StringFilter<"Comment"> | string
    user_id?: BigIntFilter<"Comment"> | bigint | number
    article_id?: BigIntNullableFilter<"Comment"> | bigint | number | null
    testimonial_id?: BigIntNullableFilter<"Comment"> | bigint | number | null
    status?: StringFilter<"Comment"> | string
    created_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Comment"> | Date | string | null
  }

  export type ArticleCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    users: UserCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    body: string
    user_id: bigint | number
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ArticleCreateOrConnectWithoutCommentsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
  }

  export type TestimonialCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    users: UserCreateNestedOneWithoutTestimonialsInput
  }

  export type TestimonialUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    body: string
    user_id: bigint | number
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type TestimonialCreateOrConnectWithoutCommentsInput = {
    where: TestimonialWhereUniqueInput
    create: XOR<TestimonialCreateWithoutCommentsInput, TestimonialUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileUncheckedCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ArticleUpsertWithoutCommentsInput = {
    update: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArticleCreateWithoutCommentsInput, ArticleUncheckedCreateWithoutCommentsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutCommentsInput, ArticleUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticleUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestimonialUpsertWithoutCommentsInput = {
    update: XOR<TestimonialUpdateWithoutCommentsInput, TestimonialUncheckedUpdateWithoutCommentsInput>
    create: XOR<TestimonialCreateWithoutCommentsInput, TestimonialUncheckedCreateWithoutCommentsInput>
    where?: TestimonialWhereInput
  }

  export type TestimonialUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TestimonialWhereInput
    data: XOR<TestimonialUpdateWithoutCommentsInput, TestimonialUncheckedUpdateWithoutCommentsInput>
  }

  export type TestimonialUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type TestimonialUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUncheckedUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutFollows_follows_followed_userTousersInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleCreateNestedManyWithoutUsersInput
    comments?: CommentCreateNestedManyWithoutUsersInput
    follows_follows_following_userTousers?: FollowCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutFollows_follows_followed_userTousersInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleUncheckedCreateNestedManyWithoutUsersInput
    comments?: CommentUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_following_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileUncheckedCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutFollows_follows_followed_userTousersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollows_follows_followed_userTousersInput, UserUncheckedCreateWithoutFollows_follows_followed_userTousersInput>
  }

  export type UserCreateWithoutFollows_follows_following_userTousersInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleCreateNestedManyWithoutUsersInput
    comments?: CommentCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    profiles?: ProfileCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutFollows_follows_following_userTousersInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleUncheckedCreateNestedManyWithoutUsersInput
    comments?: CommentUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    profiles?: ProfileUncheckedCreateNestedManyWithoutUsersInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutFollows_follows_following_userTousersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollows_follows_following_userTousersInput, UserUncheckedCreateWithoutFollows_follows_following_userTousersInput>
  }

  export type UserUpsertWithoutFollows_follows_followed_userTousersInput = {
    update: XOR<UserUpdateWithoutFollows_follows_followed_userTousersInput, UserUncheckedUpdateWithoutFollows_follows_followed_userTousersInput>
    create: XOR<UserCreateWithoutFollows_follows_followed_userTousersInput, UserUncheckedCreateWithoutFollows_follows_followed_userTousersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollows_follows_followed_userTousersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollows_follows_followed_userTousersInput, UserUncheckedUpdateWithoutFollows_follows_followed_userTousersInput>
  }

  export type UserUpdateWithoutFollows_follows_followed_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUpdateManyWithoutUsersNestedInput
    comments?: CommentUpdateManyWithoutUsersNestedInput
    follows_follows_following_userTousers?: FollowUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutFollows_follows_followed_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUncheckedUpdateManyWithoutUsersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_following_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUncheckedUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUpsertWithoutFollows_follows_following_userTousersInput = {
    update: XOR<UserUpdateWithoutFollows_follows_following_userTousersInput, UserUncheckedUpdateWithoutFollows_follows_following_userTousersInput>
    create: XOR<UserCreateWithoutFollows_follows_following_userTousersInput, UserUncheckedCreateWithoutFollows_follows_following_userTousersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollows_follows_following_userTousersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollows_follows_following_userTousersInput, UserUncheckedUpdateWithoutFollows_follows_following_userTousersInput>
  }

  export type UserUpdateWithoutFollows_follows_following_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUpdateManyWithoutUsersNestedInput
    comments?: CommentUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    profiles?: ProfileUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutFollows_follows_following_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUncheckedUpdateManyWithoutUsersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    profiles?: ProfileUncheckedUpdateManyWithoutUsersNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentCreateWithoutTestimonialsInput = {
    id?: bigint | number
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    articles?: ArticleCreateNestedOneWithoutCommentsInput
    users: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTestimonialsInput = {
    id?: bigint | number
    body: string
    user_id: bigint | number
    article_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentCreateOrConnectWithoutTestimonialsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTestimonialsInput, CommentUncheckedCreateWithoutTestimonialsInput>
  }

  export type CommentCreateManyTestimonialsInputEnvelope = {
    data: CommentCreateManyTestimonialsInput | CommentCreateManyTestimonialsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTestimonialsInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleCreateNestedManyWithoutUsersInput
    comments?: CommentCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTestimonialsInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleUncheckedCreateNestedManyWithoutUsersInput
    comments?: CommentUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_following_userTousersInput
    profiles?: ProfileUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutTestimonialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutTestimonialsInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTestimonialsInput, CommentUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<CommentCreateWithoutTestimonialsInput, CommentUncheckedCreateWithoutTestimonialsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTestimonialsInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTestimonialsInput, CommentUncheckedUpdateWithoutTestimonialsInput>
  }

  export type CommentUpdateManyWithWhereWithoutTestimonialsInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTestimonialsInput>
  }

  export type UserUpsertWithoutTestimonialsInput = {
    update: XOR<UserUpdateWithoutTestimonialsInput, UserUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestimonialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestimonialsInput, UserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type UserUpdateWithoutTestimonialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUpdateManyWithoutUsersNestedInput
    comments?: CommentUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTestimonialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUncheckedUpdateManyWithoutUsersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    profiles?: ProfileUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ArticleCreateWithoutUsersInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    comments?: CommentCreateNestedManyWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticleCreateOrConnectWithoutUsersInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput>
  }

  export type ArticleCreateManyUsersInputEnvelope = {
    data: ArticleCreateManyUsersInput | ArticleCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUsersInput = {
    id?: bigint | number
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    articles?: ArticleCreateNestedOneWithoutCommentsInput
    testimonials?: TestimonialCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    body: string
    article_id?: bigint | number | null
    testimonial_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentCreateOrConnectWithoutUsersInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUsersInput, CommentUncheckedCreateWithoutUsersInput>
  }

  export type CommentCreateManyUsersInputEnvelope = {
    data: CommentCreateManyUsersInput | CommentCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutUsers_follows_followed_userTousersInput = {
    id?: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
    users_follows_following_userTousers: UserCreateNestedOneWithoutFollows_follows_following_userTousersInput
  }

  export type FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput = {
    id?: bigint | number
    following_user: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type FollowCreateOrConnectWithoutUsers_follows_followed_userTousersInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput>
  }

  export type FollowCreateManyUsers_follows_followed_userTousersInputEnvelope = {
    data: FollowCreateManyUsers_follows_followed_userTousersInput | FollowCreateManyUsers_follows_followed_userTousersInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutUsers_follows_following_userTousersInput = {
    id?: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
    users_follows_followed_userTousers: UserCreateNestedOneWithoutFollows_follows_followed_userTousersInput
  }

  export type FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput = {
    id?: bigint | number
    followed_user: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type FollowCreateOrConnectWithoutUsers_follows_following_userTousersInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutUsers_follows_following_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput>
  }

  export type FollowCreateManyUsers_follows_following_userTousersInputEnvelope = {
    data: FollowCreateManyUsers_follows_following_userTousersInput | FollowCreateManyUsers_follows_following_userTousersInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUsersInput = {
    id?: bigint | number
    created_at?: Date | string
    modified_at?: Date | string
    pseudo?: string | null
    firstname?: string | null
    lastname?: string | null
    picture?: string | null
    bio?: string | null
    active?: number
  }

  export type ProfileUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    created_at?: Date | string
    modified_at?: Date | string
    pseudo?: string | null
    firstname?: string | null
    lastname?: string | null
    picture?: string | null
    bio?: string | null
    active?: number
  }

  export type ProfileCreateOrConnectWithoutUsersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput>
  }

  export type ProfileCreateManyUsersInputEnvelope = {
    data: ProfileCreateManyUsersInput | ProfileCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type TestimonialCreateWithoutUsersInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    comments?: CommentCreateNestedManyWithoutTestimonialsInput
  }

  export type TestimonialUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTestimonialsInput
  }

  export type TestimonialCreateOrConnectWithoutUsersInput = {
    where: TestimonialWhereUniqueInput
    create: XOR<TestimonialCreateWithoutUsersInput, TestimonialUncheckedCreateWithoutUsersInput>
  }

  export type TestimonialCreateManyUsersInputEnvelope = {
    data: TestimonialCreateManyUsersInput | TestimonialCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutUsersInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutUsersInput, ArticleUncheckedUpdateWithoutUsersInput>
    create: XOR<ArticleCreateWithoutUsersInput, ArticleUncheckedCreateWithoutUsersInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutUsersInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutUsersInput, ArticleUncheckedUpdateWithoutUsersInput>
  }

  export type ArticleUpdateManyWithWhereWithoutUsersInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutUsersInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: BigIntFilter<"Article"> | bigint | number
    title?: StringFilter<"Article"> | string
    body?: StringFilter<"Article"> | string
    user_id?: BigIntFilter<"Article"> | bigint | number
    status?: StringFilter<"Article"> | string
    created_at?: DateTimeNullableFilter<"Article"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Article"> | Date | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUsersInput, CommentUncheckedUpdateWithoutUsersInput>
    create: XOR<CommentCreateWithoutUsersInput, CommentUncheckedCreateWithoutUsersInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUsersInput, CommentUncheckedUpdateWithoutUsersInput>
  }

  export type CommentUpdateManyWithWhereWithoutUsersInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUsersInput>
  }

  export type FollowUpsertWithWhereUniqueWithoutUsers_follows_followed_userTousersInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedUpdateWithoutUsers_follows_followed_userTousersInput>
    create: XOR<FollowCreateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_followed_userTousersInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutUsers_follows_followed_userTousersInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutUsers_follows_followed_userTousersInput, FollowUncheckedUpdateWithoutUsers_follows_followed_userTousersInput>
  }

  export type FollowUpdateManyWithWhereWithoutUsers_follows_followed_userTousersInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    id?: BigIntFilter<"Follow"> | bigint | number
    following_user?: BigIntFilter<"Follow"> | bigint | number
    followed_user?: BigIntFilter<"Follow"> | bigint | number
    created_at?: DateTimeNullableFilter<"Follow"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Follow"> | Date | string | null
  }

  export type FollowUpsertWithWhereUniqueWithoutUsers_follows_following_userTousersInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutUsers_follows_following_userTousersInput, FollowUncheckedUpdateWithoutUsers_follows_following_userTousersInput>
    create: XOR<FollowCreateWithoutUsers_follows_following_userTousersInput, FollowUncheckedCreateWithoutUsers_follows_following_userTousersInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutUsers_follows_following_userTousersInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutUsers_follows_following_userTousersInput, FollowUncheckedUpdateWithoutUsers_follows_following_userTousersInput>
  }

  export type FollowUpdateManyWithWhereWithoutUsers_follows_following_userTousersInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersInput>
  }

  export type ProfileUpsertWithWhereUniqueWithoutUsersInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUsersInput, ProfileUncheckedUpdateWithoutUsersInput>
    create: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUsersInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUsersInput, ProfileUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUsersInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutUsersInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: BigIntFilter<"Profile"> | bigint | number
    created_at?: DateTimeFilter<"Profile"> | Date | string
    modified_at?: DateTimeFilter<"Profile"> | Date | string
    pseudo?: StringNullableFilter<"Profile"> | string | null
    firstname?: StringNullableFilter<"Profile"> | string | null
    lastname?: StringNullableFilter<"Profile"> | string | null
    picture?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    user_id?: BigIntFilter<"Profile"> | bigint | number
    active?: IntFilter<"Profile"> | number
  }

  export type TestimonialUpsertWithWhereUniqueWithoutUsersInput = {
    where: TestimonialWhereUniqueInput
    update: XOR<TestimonialUpdateWithoutUsersInput, TestimonialUncheckedUpdateWithoutUsersInput>
    create: XOR<TestimonialCreateWithoutUsersInput, TestimonialUncheckedCreateWithoutUsersInput>
  }

  export type TestimonialUpdateWithWhereUniqueWithoutUsersInput = {
    where: TestimonialWhereUniqueInput
    data: XOR<TestimonialUpdateWithoutUsersInput, TestimonialUncheckedUpdateWithoutUsersInput>
  }

  export type TestimonialUpdateManyWithWhereWithoutUsersInput = {
    where: TestimonialScalarWhereInput
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyWithoutUsersInput>
  }

  export type TestimonialScalarWhereInput = {
    AND?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
    OR?: TestimonialScalarWhereInput[]
    NOT?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
    id?: BigIntFilter<"Testimonial"> | bigint | number
    title?: StringFilter<"Testimonial"> | string
    body?: StringFilter<"Testimonial"> | string
    user_id?: BigIntFilter<"Testimonial"> | bigint | number
    status?: StringFilter<"Testimonial"> | string
    created_at?: DateTimeNullableFilter<"Testimonial"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Testimonial"> | Date | string | null
  }

  export type UserCreateWithoutProfilesInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleCreateNestedManyWithoutUsersInput
    comments?: CommentCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowCreateNestedManyWithoutUsers_follows_following_userTousersInput
    testimonials?: TestimonialCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutProfilesInput = {
    id?: bigint | number
    firstname: string
    lastname: string
    email: string
    password: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
    role: string
    supprime?: number
    articles?: ArticleUncheckedCreateNestedManyWithoutUsersInput
    comments?: CommentUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_followed_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_followed_userTousersInput
    follows_follows_following_userTousers?: FollowUncheckedCreateNestedManyWithoutUsers_follows_following_userTousersInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
  }

  export type UserUpsertWithoutProfilesInput = {
    update: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
    create: XOR<UserCreateWithoutProfilesInput, UserUncheckedCreateWithoutProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfilesInput, UserUncheckedUpdateWithoutProfilesInput>
  }

  export type UserUpdateWithoutProfilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUpdateManyWithoutUsersNestedInput
    comments?: CommentUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    testimonials?: TestimonialUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    supprime?: IntFieldUpdateOperationsInput | number
    articles?: ArticleUncheckedUpdateManyWithoutUsersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_followed_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersNestedInput
    follows_follows_following_userTousers?: FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentCreateManyArticlesInput = {
    id?: bigint | number
    body: string
    user_id: bigint | number
    testimonial_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    testimonials?: TestimonialUpdateOneWithoutCommentsNestedInput
    users?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    testimonial_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyWithoutArticlesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    testimonial_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateManyTestimonialsInput = {
    id?: bigint | number
    body: string
    user_id: bigint | number
    article_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentUpdateWithoutTestimonialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUpdateOneWithoutCommentsNestedInput
    users?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTestimonialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyWithoutTestimonialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    article_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleCreateManyUsersInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type CommentCreateManyUsersInput = {
    id?: bigint | number
    body: string
    article_id?: bigint | number | null
    testimonial_id?: bigint | number | null
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type FollowCreateManyUsers_follows_followed_userTousersInput = {
    id?: bigint | number
    following_user: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type FollowCreateManyUsers_follows_following_userTousersInput = {
    id?: bigint | number
    followed_user: bigint | number
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ProfileCreateManyUsersInput = {
    id?: bigint | number
    created_at?: Date | string
    modified_at?: Date | string
    pseudo?: string | null
    firstname?: string | null
    lastname?: string | null
    picture?: string | null
    bio?: string | null
    active?: number
  }

  export type TestimonialCreateManyUsersInput = {
    id?: bigint | number
    title: string
    body: string
    status: string
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ArticleUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUpdateOneWithoutCommentsNestedInput
    testimonials?: TestimonialUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    article_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    testimonial_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    body?: StringFieldUpdateOperationsInput | string
    article_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    testimonial_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUpdateWithoutUsers_follows_followed_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_follows_following_userTousers?: UserUpdateOneRequiredWithoutFollows_follows_following_userTousersNestedInput
  }

  export type FollowUncheckedUpdateWithoutUsers_follows_followed_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    following_user?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUncheckedUpdateManyWithoutUsers_follows_followed_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    following_user?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUpdateWithoutUsers_follows_following_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_follows_followed_userTousers?: UserUpdateOneRequiredWithoutFollows_follows_followed_userTousersNestedInput
  }

  export type FollowUncheckedUpdateWithoutUsers_follows_following_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    followed_user?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowUncheckedUpdateManyWithoutUsers_follows_following_userTousersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    followed_user?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: IntFieldUpdateOperationsInput | number
  }

  export type TestimonialUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutTestimonialsNestedInput
  }

  export type TestimonialUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutTestimonialsNestedInput
  }

  export type TestimonialUncheckedUpdateManyWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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