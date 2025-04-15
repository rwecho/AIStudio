
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
 * Model Draft
 * 
 */
export type Draft = $Result.DefaultSelection<Prisma.$DraftPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model ArticleTranslation
 * 
 */
export type ArticleTranslation = $Result.DefaultSelection<Prisma.$ArticleTranslationPayload>
/**
 * Model Reference
 * 
 */
export type Reference = $Result.DefaultSelection<Prisma.$ReferencePayload>
/**
 * Model WechatPublish
 * 
 */
export type WechatPublish = $Result.DefaultSelection<Prisma.$WechatPublishPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ArticleStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]


export const WechatPublishStatus: {
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  FAILED: 'FAILED'
};

export type WechatPublishStatus = (typeof WechatPublishStatus)[keyof typeof WechatPublishStatus]

}

export type ArticleStatus = $Enums.ArticleStatus

export const ArticleStatus: typeof $Enums.ArticleStatus

export type WechatPublishStatus = $Enums.WechatPublishStatus

export const WechatPublishStatus: typeof $Enums.WechatPublishStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drafts
 * const drafts = await prisma.draft.findMany()
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
   * // Fetch zero or more Drafts
   * const drafts = await prisma.draft.findMany()
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
   * `prisma.draft`: Exposes CRUD operations for the **Draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drafts
    * const drafts = await prisma.draft.findMany()
    * ```
    */
  get draft(): Prisma.DraftDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.articleTranslation`: Exposes CRUD operations for the **ArticleTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleTranslations
    * const articleTranslations = await prisma.articleTranslation.findMany()
    * ```
    */
  get articleTranslation(): Prisma.ArticleTranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reference`: Exposes CRUD operations for the **Reference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more References
    * const references = await prisma.reference.findMany()
    * ```
    */
  get reference(): Prisma.ReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wechatPublish`: Exposes CRUD operations for the **WechatPublish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WechatPublishes
    * const wechatPublishes = await prisma.wechatPublish.findMany()
    * ```
    */
  get wechatPublish(): Prisma.WechatPublishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
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
    Draft: 'Draft',
    Article: 'Article',
    ArticleTranslation: 'ArticleTranslation',
    Reference: 'Reference',
    WechatPublish: 'WechatPublish',
    Comment: 'Comment'
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
      modelProps: "draft" | "article" | "articleTranslation" | "reference" | "wechatPublish" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Draft: {
        payload: Prisma.$DraftPayload<ExtArgs>
        fields: Prisma.DraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          findFirst: {
            args: Prisma.DraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          findMany: {
            args: Prisma.DraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>[]
          }
          create: {
            args: Prisma.DraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          createMany: {
            args: Prisma.DraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>[]
          }
          delete: {
            args: Prisma.DraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          update: {
            args: Prisma.DraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          deleteMany: {
            args: Prisma.DraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>[]
          }
          upsert: {
            args: Prisma.DraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          aggregate: {
            args: Prisma.DraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraft>
          }
          groupBy: {
            args: Prisma.DraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<DraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.DraftCountArgs<ExtArgs>
            result: $Utils.Optional<DraftCountAggregateOutputType> | number
          }
        }
      }
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
      ArticleTranslation: {
        payload: Prisma.$ArticleTranslationPayload<ExtArgs>
        fields: Prisma.ArticleTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>
          }
          findFirst: {
            args: Prisma.ArticleTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>
          }
          findMany: {
            args: Prisma.ArticleTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>[]
          }
          create: {
            args: Prisma.ArticleTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>
          }
          createMany: {
            args: Prisma.ArticleTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>[]
          }
          delete: {
            args: Prisma.ArticleTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>
          }
          update: {
            args: Prisma.ArticleTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>
          }
          deleteMany: {
            args: Prisma.ArticleTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleTranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>[]
          }
          upsert: {
            args: Prisma.ArticleTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>
          }
          aggregate: {
            args: Prisma.ArticleTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleTranslation>
          }
          groupBy: {
            args: Prisma.ArticleTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleTranslationCountAggregateOutputType> | number
          }
        }
      }
      Reference: {
        payload: Prisma.$ReferencePayload<ExtArgs>
        fields: Prisma.ReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          findFirst: {
            args: Prisma.ReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          findMany: {
            args: Prisma.ReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          create: {
            args: Prisma.ReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          createMany: {
            args: Prisma.ReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          delete: {
            args: Prisma.ReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          update: {
            args: Prisma.ReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          deleteMany: {
            args: Prisma.ReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          upsert: {
            args: Prisma.ReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          aggregate: {
            args: Prisma.ReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReference>
          }
          groupBy: {
            args: Prisma.ReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ReferenceCountAggregateOutputType> | number
          }
        }
      }
      WechatPublish: {
        payload: Prisma.$WechatPublishPayload<ExtArgs>
        fields: Prisma.WechatPublishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WechatPublishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WechatPublishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>
          }
          findFirst: {
            args: Prisma.WechatPublishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WechatPublishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>
          }
          findMany: {
            args: Prisma.WechatPublishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>[]
          }
          create: {
            args: Prisma.WechatPublishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>
          }
          createMany: {
            args: Prisma.WechatPublishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WechatPublishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>[]
          }
          delete: {
            args: Prisma.WechatPublishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>
          }
          update: {
            args: Prisma.WechatPublishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>
          }
          deleteMany: {
            args: Prisma.WechatPublishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WechatPublishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WechatPublishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>[]
          }
          upsert: {
            args: Prisma.WechatPublishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WechatPublishPayload>
          }
          aggregate: {
            args: Prisma.WechatPublishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWechatPublish>
          }
          groupBy: {
            args: Prisma.WechatPublishGroupByArgs<ExtArgs>
            result: $Utils.Optional<WechatPublishGroupByOutputType>[]
          }
          count: {
            args: Prisma.WechatPublishCountArgs<ExtArgs>
            result: $Utils.Optional<WechatPublishCountAggregateOutputType> | number
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
    draft?: DraftOmit
    article?: ArticleOmit
    articleTranslation?: ArticleTranslationOmit
    reference?: ReferenceOmit
    wechatPublish?: WechatPublishOmit
    comment?: CommentOmit
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
    translations: number
    Comment: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | ArticleCountOutputTypeCountTranslationsArgs
    Comment?: boolean | ArticleCountOutputTypeCountCommentArgs
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
  export type ArticleCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleTranslationWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type ArticleTranslationCountOutputType
   */

  export type ArticleTranslationCountOutputType = {
    references: number
  }

  export type ArticleTranslationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    references?: boolean | ArticleTranslationCountOutputTypeCountReferencesArgs
  }

  // Custom InputTypes
  /**
   * ArticleTranslationCountOutputType without action
   */
  export type ArticleTranslationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslationCountOutputType
     */
    select?: ArticleTranslationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleTranslationCountOutputType without action
   */
  export type ArticleTranslationCountOutputTypeCountReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Draft
   */

  export type AggregateDraft = {
    _count: DraftCountAggregateOutputType | null
    _min: DraftMinAggregateOutputType | null
    _max: DraftMaxAggregateOutputType | null
  }

  export type DraftMinAggregateOutputType = {
    id: string | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DraftMaxAggregateOutputType = {
    id: string | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DraftCountAggregateOutputType = {
    id: number
    author: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DraftMinAggregateInputType = {
    id?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DraftMaxAggregateInputType = {
    id?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DraftCountAggregateInputType = {
    id?: true
    author?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draft to aggregate.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drafts
    **/
    _count?: true | DraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DraftMaxAggregateInputType
  }

  export type GetDraftAggregateType<T extends DraftAggregateArgs> = {
        [P in keyof T & keyof AggregateDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraft[P]>
      : GetScalarType<T[P], AggregateDraft[P]>
  }




  export type DraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftWhereInput
    orderBy?: DraftOrderByWithAggregationInput | DraftOrderByWithAggregationInput[]
    by: DraftScalarFieldEnum[] | DraftScalarFieldEnum
    having?: DraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DraftCountAggregateInputType | true
    _min?: DraftMinAggregateInputType
    _max?: DraftMaxAggregateInputType
  }

  export type DraftGroupByOutputType = {
    id: string
    author: string | null
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: DraftCountAggregateOutputType | null
    _min: DraftMinAggregateOutputType | null
    _max: DraftMaxAggregateOutputType | null
  }

  type GetDraftGroupByPayload<T extends DraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DraftGroupByOutputType[P]>
            : GetScalarType<T[P], DraftGroupByOutputType[P]>
        }
      >
    >


  export type DraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["draft"]>

  export type DraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["draft"]>

  export type DraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["draft"]>

  export type DraftSelectScalar = {
    id?: boolean
    author?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["draft"]>

  export type $DraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Draft"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author: string | null
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["draft"]>
    composites: {}
  }

  type DraftGetPayload<S extends boolean | null | undefined | DraftDefaultArgs> = $Result.GetResult<Prisma.$DraftPayload, S>

  type DraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DraftCountAggregateInputType | true
    }

  export interface DraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Draft'], meta: { name: 'Draft' } }
    /**
     * Find zero or one Draft that matches the filter.
     * @param {DraftFindUniqueArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DraftFindUniqueArgs>(args: SelectSubset<T, DraftFindUniqueArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Draft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DraftFindUniqueOrThrowArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DraftFindUniqueOrThrowArgs>(args: SelectSubset<T, DraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindFirstArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DraftFindFirstArgs>(args?: SelectSubset<T, DraftFindFirstArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindFirstOrThrowArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DraftFindFirstOrThrowArgs>(args?: SelectSubset<T, DraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drafts
     * const drafts = await prisma.draft.findMany()
     * 
     * // Get first 10 Drafts
     * const drafts = await prisma.draft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const draftWithIdOnly = await prisma.draft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DraftFindManyArgs>(args?: SelectSubset<T, DraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Draft.
     * @param {DraftCreateArgs} args - Arguments to create a Draft.
     * @example
     * // Create one Draft
     * const Draft = await prisma.draft.create({
     *   data: {
     *     // ... data to create a Draft
     *   }
     * })
     * 
     */
    create<T extends DraftCreateArgs>(args: SelectSubset<T, DraftCreateArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drafts.
     * @param {DraftCreateManyArgs} args - Arguments to create many Drafts.
     * @example
     * // Create many Drafts
     * const draft = await prisma.draft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DraftCreateManyArgs>(args?: SelectSubset<T, DraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drafts and returns the data saved in the database.
     * @param {DraftCreateManyAndReturnArgs} args - Arguments to create many Drafts.
     * @example
     * // Create many Drafts
     * const draft = await prisma.draft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drafts and only return the `id`
     * const draftWithIdOnly = await prisma.draft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DraftCreateManyAndReturnArgs>(args?: SelectSubset<T, DraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Draft.
     * @param {DraftDeleteArgs} args - Arguments to delete one Draft.
     * @example
     * // Delete one Draft
     * const Draft = await prisma.draft.delete({
     *   where: {
     *     // ... filter to delete one Draft
     *   }
     * })
     * 
     */
    delete<T extends DraftDeleteArgs>(args: SelectSubset<T, DraftDeleteArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Draft.
     * @param {DraftUpdateArgs} args - Arguments to update one Draft.
     * @example
     * // Update one Draft
     * const draft = await prisma.draft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DraftUpdateArgs>(args: SelectSubset<T, DraftUpdateArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drafts.
     * @param {DraftDeleteManyArgs} args - Arguments to filter Drafts to delete.
     * @example
     * // Delete a few Drafts
     * const { count } = await prisma.draft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DraftDeleteManyArgs>(args?: SelectSubset<T, DraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drafts
     * const draft = await prisma.draft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DraftUpdateManyArgs>(args: SelectSubset<T, DraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drafts and returns the data updated in the database.
     * @param {DraftUpdateManyAndReturnArgs} args - Arguments to update many Drafts.
     * @example
     * // Update many Drafts
     * const draft = await prisma.draft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drafts and only return the `id`
     * const draftWithIdOnly = await prisma.draft.updateManyAndReturn({
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
    updateManyAndReturn<T extends DraftUpdateManyAndReturnArgs>(args: SelectSubset<T, DraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Draft.
     * @param {DraftUpsertArgs} args - Arguments to update or create a Draft.
     * @example
     * // Update or create a Draft
     * const draft = await prisma.draft.upsert({
     *   create: {
     *     // ... data to create a Draft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Draft we want to update
     *   }
     * })
     */
    upsert<T extends DraftUpsertArgs>(args: SelectSubset<T, DraftUpsertArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftCountArgs} args - Arguments to filter Drafts to count.
     * @example
     * // Count the number of Drafts
     * const count = await prisma.draft.count({
     *   where: {
     *     // ... the filter for the Drafts we want to count
     *   }
     * })
    **/
    count<T extends DraftCountArgs>(
      args?: Subset<T, DraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DraftAggregateArgs>(args: Subset<T, DraftAggregateArgs>): Prisma.PrismaPromise<GetDraftAggregateType<T>>

    /**
     * Group by Draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftGroupByArgs} args - Group by arguments.
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
      T extends DraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DraftGroupByArgs['orderBy'] }
        : { orderBy?: DraftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Draft model
   */
  readonly fields: DraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Draft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Draft model
   */
  interface DraftFieldRefs {
    readonly id: FieldRef<"Draft", 'String'>
    readonly author: FieldRef<"Draft", 'String'>
    readonly data: FieldRef<"Draft", 'Json'>
    readonly createdAt: FieldRef<"Draft", 'DateTime'>
    readonly updatedAt: FieldRef<"Draft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Draft findUnique
   */
  export type DraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft findUniqueOrThrow
   */
  export type DraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft findFirst
   */
  export type DraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drafts.
     */
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft findFirstOrThrow
   */
  export type DraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drafts.
     */
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft findMany
   */
  export type DraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter, which Drafts to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft create
   */
  export type DraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data needed to create a Draft.
     */
    data: XOR<DraftCreateInput, DraftUncheckedCreateInput>
  }

  /**
   * Draft createMany
   */
  export type DraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drafts.
     */
    data: DraftCreateManyInput | DraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Draft createManyAndReturn
   */
  export type DraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data used to create many Drafts.
     */
    data: DraftCreateManyInput | DraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Draft update
   */
  export type DraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data needed to update a Draft.
     */
    data: XOR<DraftUpdateInput, DraftUncheckedUpdateInput>
    /**
     * Choose, which Draft to update.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft updateMany
   */
  export type DraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drafts.
     */
    data: XOR<DraftUpdateManyMutationInput, DraftUncheckedUpdateManyInput>
    /**
     * Filter which Drafts to update
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to update.
     */
    limit?: number
  }

  /**
   * Draft updateManyAndReturn
   */
  export type DraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data used to update Drafts.
     */
    data: XOR<DraftUpdateManyMutationInput, DraftUncheckedUpdateManyInput>
    /**
     * Filter which Drafts to update
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to update.
     */
    limit?: number
  }

  /**
   * Draft upsert
   */
  export type DraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The filter to search for the Draft to update in case it exists.
     */
    where: DraftWhereUniqueInput
    /**
     * In case the Draft found by the `where` argument doesn't exist, create a new Draft with this data.
     */
    create: XOR<DraftCreateInput, DraftUncheckedCreateInput>
    /**
     * In case the Draft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DraftUpdateInput, DraftUncheckedUpdateInput>
  }

  /**
   * Draft delete
   */
  export type DraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Filter which Draft to delete.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft deleteMany
   */
  export type DraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drafts to delete
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to delete.
     */
    limit?: number
  }

  /**
   * Draft without action
   */
  export type DraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
  }


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
    views: number | null
    likes: number | null
  }

  export type ArticleSumAggregateOutputType = {
    views: number | null
    likes: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
    author: string | null
    status: $Enums.ArticleStatus | null
    views: number | null
    likes: number | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
    author: string | null
    status: $Enums.ArticleStatus | null
    views: number | null
    likes: number | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    author: number
    status: number
    views: number
    likes: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    views?: true
    likes?: true
  }

  export type ArticleSumAggregateInputType = {
    views?: true
    likes?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    author?: true
    status?: true
    views?: true
    likes?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    author?: true
    status?: true
    views?: true
    likes?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    author?: true
    status?: true
    views?: true
    likes?: true
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
    id: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    author: string | null
    status: $Enums.ArticleStatus
    views: number
    likes: number
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
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    author?: boolean
    status?: boolean
    views?: boolean
    likes?: boolean
    translations?: boolean | Article$translationsArgs<ExtArgs>
    wechatPublish?: boolean | Article$wechatPublishArgs<ExtArgs>
    Comment?: boolean | Article$CommentArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    author?: boolean
    status?: boolean
    views?: boolean
    likes?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    author?: boolean
    status?: boolean
    views?: boolean
    likes?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    author?: boolean
    status?: boolean
    views?: boolean
    likes?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "publishedAt" | "author" | "status" | "views" | "likes", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | Article$translationsArgs<ExtArgs>
    wechatPublish?: boolean | Article$wechatPublishArgs<ExtArgs>
    Comment?: boolean | Article$CommentArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      translations: Prisma.$ArticleTranslationPayload<ExtArgs>[]
      wechatPublish: Prisma.$WechatPublishPayload<ExtArgs> | null
      Comment: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
      author: string | null
      status: $Enums.ArticleStatus
      views: number
      likes: number
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
    translations<T extends Article$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Article$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wechatPublish<T extends Article$wechatPublishArgs<ExtArgs> = {}>(args?: Subset<T, Article$wechatPublishArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Comment<T extends Article$CommentArgs<ExtArgs> = {}>(args?: Subset<T, Article$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
    readonly publishedAt: FieldRef<"Article", 'DateTime'>
    readonly author: FieldRef<"Article", 'String'>
    readonly status: FieldRef<"Article", 'ArticleStatus'>
    readonly views: FieldRef<"Article", 'Int'>
    readonly likes: FieldRef<"Article", 'Int'>
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
   * Article.translations
   */
  export type Article$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    where?: ArticleTranslationWhereInput
    orderBy?: ArticleTranslationOrderByWithRelationInput | ArticleTranslationOrderByWithRelationInput[]
    cursor?: ArticleTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleTranslationScalarFieldEnum | ArticleTranslationScalarFieldEnum[]
  }

  /**
   * Article.wechatPublish
   */
  export type Article$wechatPublishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    where?: WechatPublishWhereInput
  }

  /**
   * Article.Comment
   */
  export type Article$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model ArticleTranslation
   */

  export type AggregateArticleTranslation = {
    _count: ArticleTranslationCountAggregateOutputType | null
    _min: ArticleTranslationMinAggregateOutputType | null
    _max: ArticleTranslationMaxAggregateOutputType | null
  }

  export type ArticleTranslationMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    lang: string | null
    title: string | null
    summary: string | null
    content: string | null
    coverPrompt: string | null
    cover: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleTranslationMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    lang: string | null
    title: string | null
    summary: string | null
    content: string | null
    coverPrompt: string | null
    cover: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleTranslationCountAggregateOutputType = {
    id: number
    articleId: number
    lang: number
    title: number
    summary: number
    content: number
    coverPrompt: number
    cover: number
    categories: number
    keywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleTranslationMinAggregateInputType = {
    id?: true
    articleId?: true
    lang?: true
    title?: true
    summary?: true
    content?: true
    coverPrompt?: true
    cover?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleTranslationMaxAggregateInputType = {
    id?: true
    articleId?: true
    lang?: true
    title?: true
    summary?: true
    content?: true
    coverPrompt?: true
    cover?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleTranslationCountAggregateInputType = {
    id?: true
    articleId?: true
    lang?: true
    title?: true
    summary?: true
    content?: true
    coverPrompt?: true
    cover?: true
    categories?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleTranslation to aggregate.
     */
    where?: ArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTranslations to fetch.
     */
    orderBy?: ArticleTranslationOrderByWithRelationInput | ArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleTranslations
    **/
    _count?: true | ArticleTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleTranslationMaxAggregateInputType
  }

  export type GetArticleTranslationAggregateType<T extends ArticleTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleTranslation[P]>
      : GetScalarType<T[P], AggregateArticleTranslation[P]>
  }




  export type ArticleTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleTranslationWhereInput
    orderBy?: ArticleTranslationOrderByWithAggregationInput | ArticleTranslationOrderByWithAggregationInput[]
    by: ArticleTranslationScalarFieldEnum[] | ArticleTranslationScalarFieldEnum
    having?: ArticleTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleTranslationCountAggregateInputType | true
    _min?: ArticleTranslationMinAggregateInputType
    _max?: ArticleTranslationMaxAggregateInputType
  }

  export type ArticleTranslationGroupByOutputType = {
    id: string
    articleId: string
    lang: string
    title: string
    summary: string | null
    content: string
    coverPrompt: string | null
    cover: string | null
    categories: string[]
    keywords: string[]
    createdAt: Date
    updatedAt: Date
    _count: ArticleTranslationCountAggregateOutputType | null
    _min: ArticleTranslationMinAggregateOutputType | null
    _max: ArticleTranslationMaxAggregateOutputType | null
  }

  type GetArticleTranslationGroupByPayload<T extends ArticleTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleTranslationGroupByOutputType[P]>
        }
      >
    >


  export type ArticleTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    coverPrompt?: boolean
    cover?: boolean
    categories?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    references?: boolean | ArticleTranslation$referencesArgs<ExtArgs>
    _count?: boolean | ArticleTranslationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleTranslation"]>

  export type ArticleTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    coverPrompt?: boolean
    cover?: boolean
    categories?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleTranslation"]>

  export type ArticleTranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    coverPrompt?: boolean
    cover?: boolean
    categories?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleTranslation"]>

  export type ArticleTranslationSelectScalar = {
    id?: boolean
    articleId?: boolean
    lang?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    coverPrompt?: boolean
    cover?: boolean
    categories?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleTranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "lang" | "title" | "summary" | "content" | "coverPrompt" | "cover" | "categories" | "keywords" | "createdAt" | "updatedAt", ExtArgs["result"]["articleTranslation"]>
  export type ArticleTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    references?: boolean | ArticleTranslation$referencesArgs<ExtArgs>
    _count?: boolean | ArticleTranslationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleTranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $ArticleTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleTranslation"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      references: Prisma.$ReferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      lang: string
      title: string
      summary: string | null
      content: string
      coverPrompt: string | null
      cover: string | null
      categories: string[]
      keywords: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleTranslation"]>
    composites: {}
  }

  type ArticleTranslationGetPayload<S extends boolean | null | undefined | ArticleTranslationDefaultArgs> = $Result.GetResult<Prisma.$ArticleTranslationPayload, S>

  type ArticleTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleTranslationCountAggregateInputType | true
    }

  export interface ArticleTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleTranslation'], meta: { name: 'ArticleTranslation' } }
    /**
     * Find zero or one ArticleTranslation that matches the filter.
     * @param {ArticleTranslationFindUniqueArgs} args - Arguments to find a ArticleTranslation
     * @example
     * // Get one ArticleTranslation
     * const articleTranslation = await prisma.articleTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleTranslationFindUniqueArgs>(args: SelectSubset<T, ArticleTranslationFindUniqueArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleTranslation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleTranslationFindUniqueOrThrowArgs} args - Arguments to find a ArticleTranslation
     * @example
     * // Get one ArticleTranslation
     * const articleTranslation = await prisma.articleTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTranslationFindFirstArgs} args - Arguments to find a ArticleTranslation
     * @example
     * // Get one ArticleTranslation
     * const articleTranslation = await prisma.articleTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleTranslationFindFirstArgs>(args?: SelectSubset<T, ArticleTranslationFindFirstArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTranslationFindFirstOrThrowArgs} args - Arguments to find a ArticleTranslation
     * @example
     * // Get one ArticleTranslation
     * const articleTranslation = await prisma.articleTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleTranslations
     * const articleTranslations = await prisma.articleTranslation.findMany()
     * 
     * // Get first 10 ArticleTranslations
     * const articleTranslations = await prisma.articleTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleTranslationWithIdOnly = await prisma.articleTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleTranslationFindManyArgs>(args?: SelectSubset<T, ArticleTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleTranslation.
     * @param {ArticleTranslationCreateArgs} args - Arguments to create a ArticleTranslation.
     * @example
     * // Create one ArticleTranslation
     * const ArticleTranslation = await prisma.articleTranslation.create({
     *   data: {
     *     // ... data to create a ArticleTranslation
     *   }
     * })
     * 
     */
    create<T extends ArticleTranslationCreateArgs>(args: SelectSubset<T, ArticleTranslationCreateArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleTranslations.
     * @param {ArticleTranslationCreateManyArgs} args - Arguments to create many ArticleTranslations.
     * @example
     * // Create many ArticleTranslations
     * const articleTranslation = await prisma.articleTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleTranslationCreateManyArgs>(args?: SelectSubset<T, ArticleTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleTranslations and returns the data saved in the database.
     * @param {ArticleTranslationCreateManyAndReturnArgs} args - Arguments to create many ArticleTranslations.
     * @example
     * // Create many ArticleTranslations
     * const articleTranslation = await prisma.articleTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleTranslations and only return the `id`
     * const articleTranslationWithIdOnly = await prisma.articleTranslation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleTranslation.
     * @param {ArticleTranslationDeleteArgs} args - Arguments to delete one ArticleTranslation.
     * @example
     * // Delete one ArticleTranslation
     * const ArticleTranslation = await prisma.articleTranslation.delete({
     *   where: {
     *     // ... filter to delete one ArticleTranslation
     *   }
     * })
     * 
     */
    delete<T extends ArticleTranslationDeleteArgs>(args: SelectSubset<T, ArticleTranslationDeleteArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleTranslation.
     * @param {ArticleTranslationUpdateArgs} args - Arguments to update one ArticleTranslation.
     * @example
     * // Update one ArticleTranslation
     * const articleTranslation = await prisma.articleTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleTranslationUpdateArgs>(args: SelectSubset<T, ArticleTranslationUpdateArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleTranslations.
     * @param {ArticleTranslationDeleteManyArgs} args - Arguments to filter ArticleTranslations to delete.
     * @example
     * // Delete a few ArticleTranslations
     * const { count } = await prisma.articleTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleTranslationDeleteManyArgs>(args?: SelectSubset<T, ArticleTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleTranslations
     * const articleTranslation = await prisma.articleTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleTranslationUpdateManyArgs>(args: SelectSubset<T, ArticleTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleTranslations and returns the data updated in the database.
     * @param {ArticleTranslationUpdateManyAndReturnArgs} args - Arguments to update many ArticleTranslations.
     * @example
     * // Update many ArticleTranslations
     * const articleTranslation = await prisma.articleTranslation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleTranslations and only return the `id`
     * const articleTranslationWithIdOnly = await prisma.articleTranslation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticleTranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleTranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleTranslation.
     * @param {ArticleTranslationUpsertArgs} args - Arguments to update or create a ArticleTranslation.
     * @example
     * // Update or create a ArticleTranslation
     * const articleTranslation = await prisma.articleTranslation.upsert({
     *   create: {
     *     // ... data to create a ArticleTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleTranslation we want to update
     *   }
     * })
     */
    upsert<T extends ArticleTranslationUpsertArgs>(args: SelectSubset<T, ArticleTranslationUpsertArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTranslationCountArgs} args - Arguments to filter ArticleTranslations to count.
     * @example
     * // Count the number of ArticleTranslations
     * const count = await prisma.articleTranslation.count({
     *   where: {
     *     // ... the filter for the ArticleTranslations we want to count
     *   }
     * })
    **/
    count<T extends ArticleTranslationCountArgs>(
      args?: Subset<T, ArticleTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleTranslationAggregateArgs>(args: Subset<T, ArticleTranslationAggregateArgs>): Prisma.PrismaPromise<GetArticleTranslationAggregateType<T>>

    /**
     * Group by ArticleTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleTranslationGroupByArgs} args - Group by arguments.
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
      T extends ArticleTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleTranslationGroupByArgs['orderBy'] }
        : { orderBy?: ArticleTranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleTranslation model
   */
  readonly fields: ArticleTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    references<T extends ArticleTranslation$referencesArgs<ExtArgs> = {}>(args?: Subset<T, ArticleTranslation$referencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ArticleTranslation model
   */
  interface ArticleTranslationFieldRefs {
    readonly id: FieldRef<"ArticleTranslation", 'String'>
    readonly articleId: FieldRef<"ArticleTranslation", 'String'>
    readonly lang: FieldRef<"ArticleTranslation", 'String'>
    readonly title: FieldRef<"ArticleTranslation", 'String'>
    readonly summary: FieldRef<"ArticleTranslation", 'String'>
    readonly content: FieldRef<"ArticleTranslation", 'String'>
    readonly coverPrompt: FieldRef<"ArticleTranslation", 'String'>
    readonly cover: FieldRef<"ArticleTranslation", 'String'>
    readonly categories: FieldRef<"ArticleTranslation", 'String[]'>
    readonly keywords: FieldRef<"ArticleTranslation", 'String[]'>
    readonly createdAt: FieldRef<"ArticleTranslation", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleTranslation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleTranslation findUnique
   */
  export type ArticleTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTranslation to fetch.
     */
    where: ArticleTranslationWhereUniqueInput
  }

  /**
   * ArticleTranslation findUniqueOrThrow
   */
  export type ArticleTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTranslation to fetch.
     */
    where: ArticleTranslationWhereUniqueInput
  }

  /**
   * ArticleTranslation findFirst
   */
  export type ArticleTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTranslation to fetch.
     */
    where?: ArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTranslations to fetch.
     */
    orderBy?: ArticleTranslationOrderByWithRelationInput | ArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleTranslations.
     */
    cursor?: ArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleTranslations.
     */
    distinct?: ArticleTranslationScalarFieldEnum | ArticleTranslationScalarFieldEnum[]
  }

  /**
   * ArticleTranslation findFirstOrThrow
   */
  export type ArticleTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTranslation to fetch.
     */
    where?: ArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTranslations to fetch.
     */
    orderBy?: ArticleTranslationOrderByWithRelationInput | ArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleTranslations.
     */
    cursor?: ArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleTranslations.
     */
    distinct?: ArticleTranslationScalarFieldEnum | ArticleTranslationScalarFieldEnum[]
  }

  /**
   * ArticleTranslation findMany
   */
  export type ArticleTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleTranslations to fetch.
     */
    where?: ArticleTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleTranslations to fetch.
     */
    orderBy?: ArticleTranslationOrderByWithRelationInput | ArticleTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleTranslations.
     */
    cursor?: ArticleTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleTranslations.
     */
    skip?: number
    distinct?: ArticleTranslationScalarFieldEnum | ArticleTranslationScalarFieldEnum[]
  }

  /**
   * ArticleTranslation create
   */
  export type ArticleTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleTranslation.
     */
    data: XOR<ArticleTranslationCreateInput, ArticleTranslationUncheckedCreateInput>
  }

  /**
   * ArticleTranslation createMany
   */
  export type ArticleTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleTranslations.
     */
    data: ArticleTranslationCreateManyInput | ArticleTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleTranslation createManyAndReturn
   */
  export type ArticleTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleTranslations.
     */
    data: ArticleTranslationCreateManyInput | ArticleTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleTranslation update
   */
  export type ArticleTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleTranslation.
     */
    data: XOR<ArticleTranslationUpdateInput, ArticleTranslationUncheckedUpdateInput>
    /**
     * Choose, which ArticleTranslation to update.
     */
    where: ArticleTranslationWhereUniqueInput
  }

  /**
   * ArticleTranslation updateMany
   */
  export type ArticleTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleTranslations.
     */
    data: XOR<ArticleTranslationUpdateManyMutationInput, ArticleTranslationUncheckedUpdateManyInput>
    /**
     * Filter which ArticleTranslations to update
     */
    where?: ArticleTranslationWhereInput
    /**
     * Limit how many ArticleTranslations to update.
     */
    limit?: number
  }

  /**
   * ArticleTranslation updateManyAndReturn
   */
  export type ArticleTranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * The data used to update ArticleTranslations.
     */
    data: XOR<ArticleTranslationUpdateManyMutationInput, ArticleTranslationUncheckedUpdateManyInput>
    /**
     * Filter which ArticleTranslations to update
     */
    where?: ArticleTranslationWhereInput
    /**
     * Limit how many ArticleTranslations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleTranslation upsert
   */
  export type ArticleTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleTranslation to update in case it exists.
     */
    where: ArticleTranslationWhereUniqueInput
    /**
     * In case the ArticleTranslation found by the `where` argument doesn't exist, create a new ArticleTranslation with this data.
     */
    create: XOR<ArticleTranslationCreateInput, ArticleTranslationUncheckedCreateInput>
    /**
     * In case the ArticleTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleTranslationUpdateInput, ArticleTranslationUncheckedUpdateInput>
  }

  /**
   * ArticleTranslation delete
   */
  export type ArticleTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
    /**
     * Filter which ArticleTranslation to delete.
     */
    where: ArticleTranslationWhereUniqueInput
  }

  /**
   * ArticleTranslation deleteMany
   */
  export type ArticleTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleTranslations to delete
     */
    where?: ArticleTranslationWhereInput
    /**
     * Limit how many ArticleTranslations to delete.
     */
    limit?: number
  }

  /**
   * ArticleTranslation.references
   */
  export type ArticleTranslation$referencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    where?: ReferenceWhereInput
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    cursor?: ReferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * ArticleTranslation without action
   */
  export type ArticleTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleTranslation
     */
    select?: ArticleTranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleTranslation
     */
    omit?: ArticleTranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleTranslationInclude<ExtArgs> | null
  }


  /**
   * Model Reference
   */

  export type AggregateReference = {
    _count: ReferenceCountAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  export type ReferenceMinAggregateOutputType = {
    id: string | null
    articleTranslationId: string | null
    caption: string | null
    url: string | null
  }

  export type ReferenceMaxAggregateOutputType = {
    id: string | null
    articleTranslationId: string | null
    caption: string | null
    url: string | null
  }

  export type ReferenceCountAggregateOutputType = {
    id: number
    articleTranslationId: number
    caption: number
    url: number
    _all: number
  }


  export type ReferenceMinAggregateInputType = {
    id?: true
    articleTranslationId?: true
    caption?: true
    url?: true
  }

  export type ReferenceMaxAggregateInputType = {
    id?: true
    articleTranslationId?: true
    caption?: true
    url?: true
  }

  export type ReferenceCountAggregateInputType = {
    id?: true
    articleTranslationId?: true
    caption?: true
    url?: true
    _all?: true
  }

  export type ReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reference to aggregate.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned References
    **/
    _count?: true | ReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferenceMaxAggregateInputType
  }

  export type GetReferenceAggregateType<T extends ReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReference[P]>
      : GetScalarType<T[P], AggregateReference[P]>
  }




  export type ReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceWhereInput
    orderBy?: ReferenceOrderByWithAggregationInput | ReferenceOrderByWithAggregationInput[]
    by: ReferenceScalarFieldEnum[] | ReferenceScalarFieldEnum
    having?: ReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferenceCountAggregateInputType | true
    _min?: ReferenceMinAggregateInputType
    _max?: ReferenceMaxAggregateInputType
  }

  export type ReferenceGroupByOutputType = {
    id: string
    articleTranslationId: string
    caption: string
    url: string
    _count: ReferenceCountAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  type GetReferenceGroupByPayload<T extends ReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
        }
      >
    >


  export type ReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleTranslationId?: boolean
    caption?: boolean
    url?: boolean
    articleTranslation?: boolean | ArticleTranslationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleTranslationId?: boolean
    caption?: boolean
    url?: boolean
    articleTranslation?: boolean | ArticleTranslationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleTranslationId?: boolean
    caption?: boolean
    url?: boolean
    articleTranslation?: boolean | ArticleTranslationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectScalar = {
    id?: boolean
    articleTranslationId?: boolean
    caption?: boolean
    url?: boolean
  }

  export type ReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleTranslationId" | "caption" | "url", ExtArgs["result"]["reference"]>
  export type ReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articleTranslation?: boolean | ArticleTranslationDefaultArgs<ExtArgs>
  }
  export type ReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articleTranslation?: boolean | ArticleTranslationDefaultArgs<ExtArgs>
  }
  export type ReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articleTranslation?: boolean | ArticleTranslationDefaultArgs<ExtArgs>
  }

  export type $ReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reference"
    objects: {
      articleTranslation: Prisma.$ArticleTranslationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleTranslationId: string
      caption: string
      url: string
    }, ExtArgs["result"]["reference"]>
    composites: {}
  }

  type ReferenceGetPayload<S extends boolean | null | undefined | ReferenceDefaultArgs> = $Result.GetResult<Prisma.$ReferencePayload, S>

  type ReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferenceCountAggregateInputType | true
    }

  export interface ReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reference'], meta: { name: 'Reference' } }
    /**
     * Find zero or one Reference that matches the filter.
     * @param {ReferenceFindUniqueArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferenceFindUniqueArgs>(args: SelectSubset<T, ReferenceFindUniqueArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferenceFindUniqueOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindFirstArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferenceFindFirstArgs>(args?: SelectSubset<T, ReferenceFindFirstArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindFirstOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more References that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all References
     * const references = await prisma.reference.findMany()
     * 
     * // Get first 10 References
     * const references = await prisma.reference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referenceWithIdOnly = await prisma.reference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferenceFindManyArgs>(args?: SelectSubset<T, ReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reference.
     * @param {ReferenceCreateArgs} args - Arguments to create a Reference.
     * @example
     * // Create one Reference
     * const Reference = await prisma.reference.create({
     *   data: {
     *     // ... data to create a Reference
     *   }
     * })
     * 
     */
    create<T extends ReferenceCreateArgs>(args: SelectSubset<T, ReferenceCreateArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many References.
     * @param {ReferenceCreateManyArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferenceCreateManyArgs>(args?: SelectSubset<T, ReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many References and returns the data saved in the database.
     * @param {ReferenceCreateManyAndReturnArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reference.
     * @param {ReferenceDeleteArgs} args - Arguments to delete one Reference.
     * @example
     * // Delete one Reference
     * const Reference = await prisma.reference.delete({
     *   where: {
     *     // ... filter to delete one Reference
     *   }
     * })
     * 
     */
    delete<T extends ReferenceDeleteArgs>(args: SelectSubset<T, ReferenceDeleteArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reference.
     * @param {ReferenceUpdateArgs} args - Arguments to update one Reference.
     * @example
     * // Update one Reference
     * const reference = await prisma.reference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferenceUpdateArgs>(args: SelectSubset<T, ReferenceUpdateArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more References.
     * @param {ReferenceDeleteManyArgs} args - Arguments to filter References to delete.
     * @example
     * // Delete a few References
     * const { count } = await prisma.reference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferenceDeleteManyArgs>(args?: SelectSubset<T, ReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferenceUpdateManyArgs>(args: SelectSubset<T, ReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References and returns the data updated in the database.
     * @param {ReferenceUpdateManyAndReturnArgs} args - Arguments to update many References.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reference.
     * @param {ReferenceUpsertArgs} args - Arguments to update or create a Reference.
     * @example
     * // Update or create a Reference
     * const reference = await prisma.reference.upsert({
     *   create: {
     *     // ... data to create a Reference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reference we want to update
     *   }
     * })
     */
    upsert<T extends ReferenceUpsertArgs>(args: SelectSubset<T, ReferenceUpsertArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceCountArgs} args - Arguments to filter References to count.
     * @example
     * // Count the number of References
     * const count = await prisma.reference.count({
     *   where: {
     *     // ... the filter for the References we want to count
     *   }
     * })
    **/
    count<T extends ReferenceCountArgs>(
      args?: Subset<T, ReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferenceAggregateArgs>(args: Subset<T, ReferenceAggregateArgs>): Prisma.PrismaPromise<GetReferenceAggregateType<T>>

    /**
     * Group by Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceGroupByArgs} args - Group by arguments.
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
      T extends ReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferenceGroupByArgs['orderBy'] }
        : { orderBy?: ReferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reference model
   */
  readonly fields: ReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articleTranslation<T extends ArticleTranslationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleTranslationDefaultArgs<ExtArgs>>): Prisma__ArticleTranslationClient<$Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reference model
   */
  interface ReferenceFieldRefs {
    readonly id: FieldRef<"Reference", 'String'>
    readonly articleTranslationId: FieldRef<"Reference", 'String'>
    readonly caption: FieldRef<"Reference", 'String'>
    readonly url: FieldRef<"Reference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reference findUnique
   */
  export type ReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference findUniqueOrThrow
   */
  export type ReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference findFirst
   */
  export type ReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference findFirstOrThrow
   */
  export type ReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference findMany
   */
  export type ReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference create
   */
  export type ReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Reference.
     */
    data: XOR<ReferenceCreateInput, ReferenceUncheckedCreateInput>
  }

  /**
   * Reference createMany
   */
  export type ReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many References.
     */
    data: ReferenceCreateManyInput | ReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reference createManyAndReturn
   */
  export type ReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many References.
     */
    data: ReferenceCreateManyInput | ReferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reference update
   */
  export type ReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Reference.
     */
    data: XOR<ReferenceUpdateInput, ReferenceUncheckedUpdateInput>
    /**
     * Choose, which Reference to update.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference updateMany
   */
  export type ReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update References.
     */
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
  }

  /**
   * Reference updateManyAndReturn
   */
  export type ReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * The data used to update References.
     */
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reference upsert
   */
  export type ReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Reference to update in case it exists.
     */
    where: ReferenceWhereUniqueInput
    /**
     * In case the Reference found by the `where` argument doesn't exist, create a new Reference with this data.
     */
    create: XOR<ReferenceCreateInput, ReferenceUncheckedCreateInput>
    /**
     * In case the Reference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferenceUpdateInput, ReferenceUncheckedUpdateInput>
  }

  /**
   * Reference delete
   */
  export type ReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter which Reference to delete.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference deleteMany
   */
  export type ReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which References to delete
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to delete.
     */
    limit?: number
  }

  /**
   * Reference without action
   */
  export type ReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
  }


  /**
   * Model WechatPublish
   */

  export type AggregateWechatPublish = {
    _count: WechatPublishCountAggregateOutputType | null
    _min: WechatPublishMinAggregateOutputType | null
    _max: WechatPublishMaxAggregateOutputType | null
  }

  export type WechatPublishMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    status: $Enums.WechatPublishStatus | null
    content: string | null
    error: string | null
    mediaId: string | null
    publishId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WechatPublishMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    status: $Enums.WechatPublishStatus | null
    content: string | null
    error: string | null
    mediaId: string | null
    publishId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WechatPublishCountAggregateOutputType = {
    id: number
    articleId: number
    status: number
    content: number
    error: number
    mediaId: number
    publishId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WechatPublishMinAggregateInputType = {
    id?: true
    articleId?: true
    status?: true
    content?: true
    error?: true
    mediaId?: true
    publishId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WechatPublishMaxAggregateInputType = {
    id?: true
    articleId?: true
    status?: true
    content?: true
    error?: true
    mediaId?: true
    publishId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WechatPublishCountAggregateInputType = {
    id?: true
    articleId?: true
    status?: true
    content?: true
    error?: true
    mediaId?: true
    publishId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WechatPublishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WechatPublish to aggregate.
     */
    where?: WechatPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WechatPublishes to fetch.
     */
    orderBy?: WechatPublishOrderByWithRelationInput | WechatPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WechatPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WechatPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WechatPublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WechatPublishes
    **/
    _count?: true | WechatPublishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WechatPublishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WechatPublishMaxAggregateInputType
  }

  export type GetWechatPublishAggregateType<T extends WechatPublishAggregateArgs> = {
        [P in keyof T & keyof AggregateWechatPublish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWechatPublish[P]>
      : GetScalarType<T[P], AggregateWechatPublish[P]>
  }




  export type WechatPublishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WechatPublishWhereInput
    orderBy?: WechatPublishOrderByWithAggregationInput | WechatPublishOrderByWithAggregationInput[]
    by: WechatPublishScalarFieldEnum[] | WechatPublishScalarFieldEnum
    having?: WechatPublishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WechatPublishCountAggregateInputType | true
    _min?: WechatPublishMinAggregateInputType
    _max?: WechatPublishMaxAggregateInputType
  }

  export type WechatPublishGroupByOutputType = {
    id: string
    articleId: string
    status: $Enums.WechatPublishStatus
    content: string
    error: string | null
    mediaId: string | null
    publishId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WechatPublishCountAggregateOutputType | null
    _min: WechatPublishMinAggregateOutputType | null
    _max: WechatPublishMaxAggregateOutputType | null
  }

  type GetWechatPublishGroupByPayload<T extends WechatPublishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WechatPublishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WechatPublishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WechatPublishGroupByOutputType[P]>
            : GetScalarType<T[P], WechatPublishGroupByOutputType[P]>
        }
      >
    >


  export type WechatPublishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    status?: boolean
    content?: boolean
    error?: boolean
    mediaId?: boolean
    publishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wechatPublish"]>

  export type WechatPublishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    status?: boolean
    content?: boolean
    error?: boolean
    mediaId?: boolean
    publishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wechatPublish"]>

  export type WechatPublishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    status?: boolean
    content?: boolean
    error?: boolean
    mediaId?: boolean
    publishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wechatPublish"]>

  export type WechatPublishSelectScalar = {
    id?: boolean
    articleId?: boolean
    status?: boolean
    content?: boolean
    error?: boolean
    mediaId?: boolean
    publishId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WechatPublishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "status" | "content" | "error" | "mediaId" | "publishId" | "createdAt" | "updatedAt", ExtArgs["result"]["wechatPublish"]>
  export type WechatPublishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type WechatPublishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type WechatPublishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $WechatPublishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WechatPublish"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      status: $Enums.WechatPublishStatus
      content: string
      error: string | null
      mediaId: string | null
      publishId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wechatPublish"]>
    composites: {}
  }

  type WechatPublishGetPayload<S extends boolean | null | undefined | WechatPublishDefaultArgs> = $Result.GetResult<Prisma.$WechatPublishPayload, S>

  type WechatPublishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WechatPublishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WechatPublishCountAggregateInputType | true
    }

  export interface WechatPublishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WechatPublish'], meta: { name: 'WechatPublish' } }
    /**
     * Find zero or one WechatPublish that matches the filter.
     * @param {WechatPublishFindUniqueArgs} args - Arguments to find a WechatPublish
     * @example
     * // Get one WechatPublish
     * const wechatPublish = await prisma.wechatPublish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WechatPublishFindUniqueArgs>(args: SelectSubset<T, WechatPublishFindUniqueArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WechatPublish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WechatPublishFindUniqueOrThrowArgs} args - Arguments to find a WechatPublish
     * @example
     * // Get one WechatPublish
     * const wechatPublish = await prisma.wechatPublish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WechatPublishFindUniqueOrThrowArgs>(args: SelectSubset<T, WechatPublishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WechatPublish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WechatPublishFindFirstArgs} args - Arguments to find a WechatPublish
     * @example
     * // Get one WechatPublish
     * const wechatPublish = await prisma.wechatPublish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WechatPublishFindFirstArgs>(args?: SelectSubset<T, WechatPublishFindFirstArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WechatPublish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WechatPublishFindFirstOrThrowArgs} args - Arguments to find a WechatPublish
     * @example
     * // Get one WechatPublish
     * const wechatPublish = await prisma.wechatPublish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WechatPublishFindFirstOrThrowArgs>(args?: SelectSubset<T, WechatPublishFindFirstOrThrowArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WechatPublishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WechatPublishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WechatPublishes
     * const wechatPublishes = await prisma.wechatPublish.findMany()
     * 
     * // Get first 10 WechatPublishes
     * const wechatPublishes = await prisma.wechatPublish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wechatPublishWithIdOnly = await prisma.wechatPublish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WechatPublishFindManyArgs>(args?: SelectSubset<T, WechatPublishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WechatPublish.
     * @param {WechatPublishCreateArgs} args - Arguments to create a WechatPublish.
     * @example
     * // Create one WechatPublish
     * const WechatPublish = await prisma.wechatPublish.create({
     *   data: {
     *     // ... data to create a WechatPublish
     *   }
     * })
     * 
     */
    create<T extends WechatPublishCreateArgs>(args: SelectSubset<T, WechatPublishCreateArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WechatPublishes.
     * @param {WechatPublishCreateManyArgs} args - Arguments to create many WechatPublishes.
     * @example
     * // Create many WechatPublishes
     * const wechatPublish = await prisma.wechatPublish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WechatPublishCreateManyArgs>(args?: SelectSubset<T, WechatPublishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WechatPublishes and returns the data saved in the database.
     * @param {WechatPublishCreateManyAndReturnArgs} args - Arguments to create many WechatPublishes.
     * @example
     * // Create many WechatPublishes
     * const wechatPublish = await prisma.wechatPublish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WechatPublishes and only return the `id`
     * const wechatPublishWithIdOnly = await prisma.wechatPublish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WechatPublishCreateManyAndReturnArgs>(args?: SelectSubset<T, WechatPublishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WechatPublish.
     * @param {WechatPublishDeleteArgs} args - Arguments to delete one WechatPublish.
     * @example
     * // Delete one WechatPublish
     * const WechatPublish = await prisma.wechatPublish.delete({
     *   where: {
     *     // ... filter to delete one WechatPublish
     *   }
     * })
     * 
     */
    delete<T extends WechatPublishDeleteArgs>(args: SelectSubset<T, WechatPublishDeleteArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WechatPublish.
     * @param {WechatPublishUpdateArgs} args - Arguments to update one WechatPublish.
     * @example
     * // Update one WechatPublish
     * const wechatPublish = await prisma.wechatPublish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WechatPublishUpdateArgs>(args: SelectSubset<T, WechatPublishUpdateArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WechatPublishes.
     * @param {WechatPublishDeleteManyArgs} args - Arguments to filter WechatPublishes to delete.
     * @example
     * // Delete a few WechatPublishes
     * const { count } = await prisma.wechatPublish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WechatPublishDeleteManyArgs>(args?: SelectSubset<T, WechatPublishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WechatPublishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WechatPublishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WechatPublishes
     * const wechatPublish = await prisma.wechatPublish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WechatPublishUpdateManyArgs>(args: SelectSubset<T, WechatPublishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WechatPublishes and returns the data updated in the database.
     * @param {WechatPublishUpdateManyAndReturnArgs} args - Arguments to update many WechatPublishes.
     * @example
     * // Update many WechatPublishes
     * const wechatPublish = await prisma.wechatPublish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WechatPublishes and only return the `id`
     * const wechatPublishWithIdOnly = await prisma.wechatPublish.updateManyAndReturn({
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
    updateManyAndReturn<T extends WechatPublishUpdateManyAndReturnArgs>(args: SelectSubset<T, WechatPublishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WechatPublish.
     * @param {WechatPublishUpsertArgs} args - Arguments to update or create a WechatPublish.
     * @example
     * // Update or create a WechatPublish
     * const wechatPublish = await prisma.wechatPublish.upsert({
     *   create: {
     *     // ... data to create a WechatPublish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WechatPublish we want to update
     *   }
     * })
     */
    upsert<T extends WechatPublishUpsertArgs>(args: SelectSubset<T, WechatPublishUpsertArgs<ExtArgs>>): Prisma__WechatPublishClient<$Result.GetResult<Prisma.$WechatPublishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WechatPublishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WechatPublishCountArgs} args - Arguments to filter WechatPublishes to count.
     * @example
     * // Count the number of WechatPublishes
     * const count = await prisma.wechatPublish.count({
     *   where: {
     *     // ... the filter for the WechatPublishes we want to count
     *   }
     * })
    **/
    count<T extends WechatPublishCountArgs>(
      args?: Subset<T, WechatPublishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WechatPublishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WechatPublish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WechatPublishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WechatPublishAggregateArgs>(args: Subset<T, WechatPublishAggregateArgs>): Prisma.PrismaPromise<GetWechatPublishAggregateType<T>>

    /**
     * Group by WechatPublish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WechatPublishGroupByArgs} args - Group by arguments.
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
      T extends WechatPublishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WechatPublishGroupByArgs['orderBy'] }
        : { orderBy?: WechatPublishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WechatPublishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWechatPublishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WechatPublish model
   */
  readonly fields: WechatPublishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WechatPublish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WechatPublishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WechatPublish model
   */
  interface WechatPublishFieldRefs {
    readonly id: FieldRef<"WechatPublish", 'String'>
    readonly articleId: FieldRef<"WechatPublish", 'String'>
    readonly status: FieldRef<"WechatPublish", 'WechatPublishStatus'>
    readonly content: FieldRef<"WechatPublish", 'String'>
    readonly error: FieldRef<"WechatPublish", 'String'>
    readonly mediaId: FieldRef<"WechatPublish", 'String'>
    readonly publishId: FieldRef<"WechatPublish", 'String'>
    readonly createdAt: FieldRef<"WechatPublish", 'DateTime'>
    readonly updatedAt: FieldRef<"WechatPublish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WechatPublish findUnique
   */
  export type WechatPublishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * Filter, which WechatPublish to fetch.
     */
    where: WechatPublishWhereUniqueInput
  }

  /**
   * WechatPublish findUniqueOrThrow
   */
  export type WechatPublishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * Filter, which WechatPublish to fetch.
     */
    where: WechatPublishWhereUniqueInput
  }

  /**
   * WechatPublish findFirst
   */
  export type WechatPublishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * Filter, which WechatPublish to fetch.
     */
    where?: WechatPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WechatPublishes to fetch.
     */
    orderBy?: WechatPublishOrderByWithRelationInput | WechatPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WechatPublishes.
     */
    cursor?: WechatPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WechatPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WechatPublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WechatPublishes.
     */
    distinct?: WechatPublishScalarFieldEnum | WechatPublishScalarFieldEnum[]
  }

  /**
   * WechatPublish findFirstOrThrow
   */
  export type WechatPublishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * Filter, which WechatPublish to fetch.
     */
    where?: WechatPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WechatPublishes to fetch.
     */
    orderBy?: WechatPublishOrderByWithRelationInput | WechatPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WechatPublishes.
     */
    cursor?: WechatPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WechatPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WechatPublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WechatPublishes.
     */
    distinct?: WechatPublishScalarFieldEnum | WechatPublishScalarFieldEnum[]
  }

  /**
   * WechatPublish findMany
   */
  export type WechatPublishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * Filter, which WechatPublishes to fetch.
     */
    where?: WechatPublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WechatPublishes to fetch.
     */
    orderBy?: WechatPublishOrderByWithRelationInput | WechatPublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WechatPublishes.
     */
    cursor?: WechatPublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WechatPublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WechatPublishes.
     */
    skip?: number
    distinct?: WechatPublishScalarFieldEnum | WechatPublishScalarFieldEnum[]
  }

  /**
   * WechatPublish create
   */
  export type WechatPublishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * The data needed to create a WechatPublish.
     */
    data: XOR<WechatPublishCreateInput, WechatPublishUncheckedCreateInput>
  }

  /**
   * WechatPublish createMany
   */
  export type WechatPublishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WechatPublishes.
     */
    data: WechatPublishCreateManyInput | WechatPublishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WechatPublish createManyAndReturn
   */
  export type WechatPublishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * The data used to create many WechatPublishes.
     */
    data: WechatPublishCreateManyInput | WechatPublishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WechatPublish update
   */
  export type WechatPublishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * The data needed to update a WechatPublish.
     */
    data: XOR<WechatPublishUpdateInput, WechatPublishUncheckedUpdateInput>
    /**
     * Choose, which WechatPublish to update.
     */
    where: WechatPublishWhereUniqueInput
  }

  /**
   * WechatPublish updateMany
   */
  export type WechatPublishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WechatPublishes.
     */
    data: XOR<WechatPublishUpdateManyMutationInput, WechatPublishUncheckedUpdateManyInput>
    /**
     * Filter which WechatPublishes to update
     */
    where?: WechatPublishWhereInput
    /**
     * Limit how many WechatPublishes to update.
     */
    limit?: number
  }

  /**
   * WechatPublish updateManyAndReturn
   */
  export type WechatPublishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * The data used to update WechatPublishes.
     */
    data: XOR<WechatPublishUpdateManyMutationInput, WechatPublishUncheckedUpdateManyInput>
    /**
     * Filter which WechatPublishes to update
     */
    where?: WechatPublishWhereInput
    /**
     * Limit how many WechatPublishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WechatPublish upsert
   */
  export type WechatPublishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * The filter to search for the WechatPublish to update in case it exists.
     */
    where: WechatPublishWhereUniqueInput
    /**
     * In case the WechatPublish found by the `where` argument doesn't exist, create a new WechatPublish with this data.
     */
    create: XOR<WechatPublishCreateInput, WechatPublishUncheckedCreateInput>
    /**
     * In case the WechatPublish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WechatPublishUpdateInput, WechatPublishUncheckedUpdateInput>
  }

  /**
   * WechatPublish delete
   */
  export type WechatPublishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
    /**
     * Filter which WechatPublish to delete.
     */
    where: WechatPublishWhereUniqueInput
  }

  /**
   * WechatPublish deleteMany
   */
  export type WechatPublishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WechatPublishes to delete
     */
    where?: WechatPublishWhereInput
    /**
     * Limit how many WechatPublishes to delete.
     */
    limit?: number
  }

  /**
   * WechatPublish without action
   */
  export type WechatPublishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WechatPublish
     */
    select?: WechatPublishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WechatPublish
     */
    omit?: WechatPublishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WechatPublishInclude<ExtArgs> | null
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
    articleId: string | null
    content: string | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    content: string | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    articleId: number
    content: number
    author: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    articleId?: true
    content?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    articleId?: true
    content?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    articleId?: true
    content?: true
    author?: true
    createdAt?: true
    updatedAt?: true
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
    articleId: string
    content: string
    author: string
    createdAt: Date
    updatedAt: Date
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
    articleId?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    articleId?: boolean
    content?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "content" | "author" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      content: string
      author: string
      createdAt: Date
      updatedAt: Date
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
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly articleId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly author: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DraftScalarFieldEnum: {
    id: 'id',
    author: 'author',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DraftScalarFieldEnum = (typeof DraftScalarFieldEnum)[keyof typeof DraftScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt',
    author: 'author',
    status: 'status',
    views: 'views',
    likes: 'likes'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ArticleTranslationScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    lang: 'lang',
    title: 'title',
    summary: 'summary',
    content: 'content',
    coverPrompt: 'coverPrompt',
    cover: 'cover',
    categories: 'categories',
    keywords: 'keywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleTranslationScalarFieldEnum = (typeof ArticleTranslationScalarFieldEnum)[keyof typeof ArticleTranslationScalarFieldEnum]


  export const ReferenceScalarFieldEnum: {
    id: 'id',
    articleTranslationId: 'articleTranslationId',
    caption: 'caption',
    url: 'url'
  };

  export type ReferenceScalarFieldEnum = (typeof ReferenceScalarFieldEnum)[keyof typeof ReferenceScalarFieldEnum]


  export const WechatPublishScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    status: 'status',
    content: 'content',
    error: 'error',
    mediaId: 'mediaId',
    publishId: 'publishId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WechatPublishScalarFieldEnum = (typeof WechatPublishScalarFieldEnum)[keyof typeof WechatPublishScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    content: 'content',
    author: 'author',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ArticleStatus'
   */
  export type EnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus'>
    


  /**
   * Reference to a field of type 'ArticleStatus[]'
   */
  export type ListEnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WechatPublishStatus'
   */
  export type EnumWechatPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WechatPublishStatus'>
    


  /**
   * Reference to a field of type 'WechatPublishStatus[]'
   */
  export type ListEnumWechatPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WechatPublishStatus[]'>
    


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


  export type DraftWhereInput = {
    AND?: DraftWhereInput | DraftWhereInput[]
    OR?: DraftWhereInput[]
    NOT?: DraftWhereInput | DraftWhereInput[]
    id?: StringFilter<"Draft"> | string
    author?: StringNullableFilter<"Draft"> | string | null
    data?: JsonFilter<"Draft">
    createdAt?: DateTimeFilter<"Draft"> | Date | string
    updatedAt?: DateTimeFilter<"Draft"> | Date | string
  }

  export type DraftOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DraftWhereInput | DraftWhereInput[]
    OR?: DraftWhereInput[]
    NOT?: DraftWhereInput | DraftWhereInput[]
    author?: StringNullableFilter<"Draft"> | string | null
    data?: JsonFilter<"Draft">
    createdAt?: DateTimeFilter<"Draft"> | Date | string
    updatedAt?: DateTimeFilter<"Draft"> | Date | string
  }, "id">

  export type DraftOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DraftCountOrderByAggregateInput
    _max?: DraftMaxOrderByAggregateInput
    _min?: DraftMinOrderByAggregateInput
  }

  export type DraftScalarWhereWithAggregatesInput = {
    AND?: DraftScalarWhereWithAggregatesInput | DraftScalarWhereWithAggregatesInput[]
    OR?: DraftScalarWhereWithAggregatesInput[]
    NOT?: DraftScalarWhereWithAggregatesInput | DraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Draft"> | string
    author?: StringNullableWithAggregatesFilter<"Draft"> | string | null
    data?: JsonWithAggregatesFilter<"Draft">
    createdAt?: DateTimeWithAggregatesFilter<"Draft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Draft"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    author?: StringNullableFilter<"Article"> | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    views?: IntFilter<"Article"> | number
    likes?: IntFilter<"Article"> | number
    translations?: ArticleTranslationListRelationFilter
    wechatPublish?: XOR<WechatPublishNullableScalarRelationFilter, WechatPublishWhereInput> | null
    Comment?: CommentListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    status?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    translations?: ArticleTranslationOrderByRelationAggregateInput
    wechatPublish?: WechatPublishOrderByWithRelationInput
    Comment?: CommentOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    author?: StringNullableFilter<"Article"> | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    views?: IntFilter<"Article"> | number
    likes?: IntFilter<"Article"> | number
    translations?: ArticleTranslationListRelationFilter
    wechatPublish?: XOR<WechatPublishNullableScalarRelationFilter, WechatPublishWhereInput> | null
    Comment?: CommentListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    status?: SortOrder
    views?: SortOrder
    likes?: SortOrder
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
    id?: StringWithAggregatesFilter<"Article"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    author?: StringNullableWithAggregatesFilter<"Article"> | string | null
    status?: EnumArticleStatusWithAggregatesFilter<"Article"> | $Enums.ArticleStatus
    views?: IntWithAggregatesFilter<"Article"> | number
    likes?: IntWithAggregatesFilter<"Article"> | number
  }

  export type ArticleTranslationWhereInput = {
    AND?: ArticleTranslationWhereInput | ArticleTranslationWhereInput[]
    OR?: ArticleTranslationWhereInput[]
    NOT?: ArticleTranslationWhereInput | ArticleTranslationWhereInput[]
    id?: StringFilter<"ArticleTranslation"> | string
    articleId?: StringFilter<"ArticleTranslation"> | string
    lang?: StringFilter<"ArticleTranslation"> | string
    title?: StringFilter<"ArticleTranslation"> | string
    summary?: StringNullableFilter<"ArticleTranslation"> | string | null
    content?: StringFilter<"ArticleTranslation"> | string
    coverPrompt?: StringNullableFilter<"ArticleTranslation"> | string | null
    cover?: StringNullableFilter<"ArticleTranslation"> | string | null
    categories?: StringNullableListFilter<"ArticleTranslation">
    keywords?: StringNullableListFilter<"ArticleTranslation">
    createdAt?: DateTimeFilter<"ArticleTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleTranslation"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    references?: ReferenceListRelationFilter
  }

  export type ArticleTranslationOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    content?: SortOrder
    coverPrompt?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    categories?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
    references?: ReferenceOrderByRelationAggregateInput
  }

  export type ArticleTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    articleId_lang?: ArticleTranslationArticleIdLangCompoundUniqueInput
    AND?: ArticleTranslationWhereInput | ArticleTranslationWhereInput[]
    OR?: ArticleTranslationWhereInput[]
    NOT?: ArticleTranslationWhereInput | ArticleTranslationWhereInput[]
    articleId?: StringFilter<"ArticleTranslation"> | string
    lang?: StringFilter<"ArticleTranslation"> | string
    title?: StringFilter<"ArticleTranslation"> | string
    summary?: StringNullableFilter<"ArticleTranslation"> | string | null
    content?: StringFilter<"ArticleTranslation"> | string
    coverPrompt?: StringNullableFilter<"ArticleTranslation"> | string | null
    cover?: StringNullableFilter<"ArticleTranslation"> | string | null
    categories?: StringNullableListFilter<"ArticleTranslation">
    keywords?: StringNullableListFilter<"ArticleTranslation">
    createdAt?: DateTimeFilter<"ArticleTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleTranslation"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    references?: ReferenceListRelationFilter
  }, "id" | "articleId_lang">

  export type ArticleTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    content?: SortOrder
    coverPrompt?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    categories?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleTranslationCountOrderByAggregateInput
    _max?: ArticleTranslationMaxOrderByAggregateInput
    _min?: ArticleTranslationMinOrderByAggregateInput
  }

  export type ArticleTranslationScalarWhereWithAggregatesInput = {
    AND?: ArticleTranslationScalarWhereWithAggregatesInput | ArticleTranslationScalarWhereWithAggregatesInput[]
    OR?: ArticleTranslationScalarWhereWithAggregatesInput[]
    NOT?: ArticleTranslationScalarWhereWithAggregatesInput | ArticleTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArticleTranslation"> | string
    articleId?: StringWithAggregatesFilter<"ArticleTranslation"> | string
    lang?: StringWithAggregatesFilter<"ArticleTranslation"> | string
    title?: StringWithAggregatesFilter<"ArticleTranslation"> | string
    summary?: StringNullableWithAggregatesFilter<"ArticleTranslation"> | string | null
    content?: StringWithAggregatesFilter<"ArticleTranslation"> | string
    coverPrompt?: StringNullableWithAggregatesFilter<"ArticleTranslation"> | string | null
    cover?: StringNullableWithAggregatesFilter<"ArticleTranslation"> | string | null
    categories?: StringNullableListFilter<"ArticleTranslation">
    keywords?: StringNullableListFilter<"ArticleTranslation">
    createdAt?: DateTimeWithAggregatesFilter<"ArticleTranslation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleTranslation"> | Date | string
  }

  export type ReferenceWhereInput = {
    AND?: ReferenceWhereInput | ReferenceWhereInput[]
    OR?: ReferenceWhereInput[]
    NOT?: ReferenceWhereInput | ReferenceWhereInput[]
    id?: StringFilter<"Reference"> | string
    articleTranslationId?: StringFilter<"Reference"> | string
    caption?: StringFilter<"Reference"> | string
    url?: StringFilter<"Reference"> | string
    articleTranslation?: XOR<ArticleTranslationScalarRelationFilter, ArticleTranslationWhereInput>
  }

  export type ReferenceOrderByWithRelationInput = {
    id?: SortOrder
    articleTranslationId?: SortOrder
    caption?: SortOrder
    url?: SortOrder
    articleTranslation?: ArticleTranslationOrderByWithRelationInput
  }

  export type ReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferenceWhereInput | ReferenceWhereInput[]
    OR?: ReferenceWhereInput[]
    NOT?: ReferenceWhereInput | ReferenceWhereInput[]
    articleTranslationId?: StringFilter<"Reference"> | string
    caption?: StringFilter<"Reference"> | string
    url?: StringFilter<"Reference"> | string
    articleTranslation?: XOR<ArticleTranslationScalarRelationFilter, ArticleTranslationWhereInput>
  }, "id">

  export type ReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    articleTranslationId?: SortOrder
    caption?: SortOrder
    url?: SortOrder
    _count?: ReferenceCountOrderByAggregateInput
    _max?: ReferenceMaxOrderByAggregateInput
    _min?: ReferenceMinOrderByAggregateInput
  }

  export type ReferenceScalarWhereWithAggregatesInput = {
    AND?: ReferenceScalarWhereWithAggregatesInput | ReferenceScalarWhereWithAggregatesInput[]
    OR?: ReferenceScalarWhereWithAggregatesInput[]
    NOT?: ReferenceScalarWhereWithAggregatesInput | ReferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reference"> | string
    articleTranslationId?: StringWithAggregatesFilter<"Reference"> | string
    caption?: StringWithAggregatesFilter<"Reference"> | string
    url?: StringWithAggregatesFilter<"Reference"> | string
  }

  export type WechatPublishWhereInput = {
    AND?: WechatPublishWhereInput | WechatPublishWhereInput[]
    OR?: WechatPublishWhereInput[]
    NOT?: WechatPublishWhereInput | WechatPublishWhereInput[]
    id?: StringFilter<"WechatPublish"> | string
    articleId?: StringFilter<"WechatPublish"> | string
    status?: EnumWechatPublishStatusFilter<"WechatPublish"> | $Enums.WechatPublishStatus
    content?: StringFilter<"WechatPublish"> | string
    error?: StringNullableFilter<"WechatPublish"> | string | null
    mediaId?: StringNullableFilter<"WechatPublish"> | string | null
    publishId?: StringNullableFilter<"WechatPublish"> | string | null
    createdAt?: DateTimeFilter<"WechatPublish"> | Date | string
    updatedAt?: DateTimeFilter<"WechatPublish"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type WechatPublishOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    error?: SortOrderInput | SortOrder
    mediaId?: SortOrderInput | SortOrder
    publishId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
  }

  export type WechatPublishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    articleId?: string
    AND?: WechatPublishWhereInput | WechatPublishWhereInput[]
    OR?: WechatPublishWhereInput[]
    NOT?: WechatPublishWhereInput | WechatPublishWhereInput[]
    status?: EnumWechatPublishStatusFilter<"WechatPublish"> | $Enums.WechatPublishStatus
    content?: StringFilter<"WechatPublish"> | string
    error?: StringNullableFilter<"WechatPublish"> | string | null
    mediaId?: StringNullableFilter<"WechatPublish"> | string | null
    publishId?: StringNullableFilter<"WechatPublish"> | string | null
    createdAt?: DateTimeFilter<"WechatPublish"> | Date | string
    updatedAt?: DateTimeFilter<"WechatPublish"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "id" | "articleId">

  export type WechatPublishOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    error?: SortOrderInput | SortOrder
    mediaId?: SortOrderInput | SortOrder
    publishId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WechatPublishCountOrderByAggregateInput
    _max?: WechatPublishMaxOrderByAggregateInput
    _min?: WechatPublishMinOrderByAggregateInput
  }

  export type WechatPublishScalarWhereWithAggregatesInput = {
    AND?: WechatPublishScalarWhereWithAggregatesInput | WechatPublishScalarWhereWithAggregatesInput[]
    OR?: WechatPublishScalarWhereWithAggregatesInput[]
    NOT?: WechatPublishScalarWhereWithAggregatesInput | WechatPublishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WechatPublish"> | string
    articleId?: StringWithAggregatesFilter<"WechatPublish"> | string
    status?: EnumWechatPublishStatusWithAggregatesFilter<"WechatPublish"> | $Enums.WechatPublishStatus
    content?: StringWithAggregatesFilter<"WechatPublish"> | string
    error?: StringNullableWithAggregatesFilter<"WechatPublish"> | string | null
    mediaId?: StringNullableWithAggregatesFilter<"WechatPublish"> | string | null
    publishId?: StringNullableWithAggregatesFilter<"WechatPublish"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WechatPublish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WechatPublish"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    articleId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    articleId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    articleId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    author?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type DraftCreateInput = {
    id?: string
    author?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftUncheckedCreateInput = {
    id?: string
    author?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftCreateManyInput = {
    id?: string
    author?: string | null
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    translations?: ArticleTranslationCreateNestedManyWithoutArticleInput
    wechatPublish?: WechatPublishCreateNestedOneWithoutArticleInput
    Comment?: CommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    translations?: ArticleTranslationUncheckedCreateNestedManyWithoutArticleInput
    wechatPublish?: WechatPublishUncheckedCreateNestedOneWithoutArticleInput
    Comment?: CommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    translations?: ArticleTranslationUpdateManyWithoutArticleNestedInput
    wechatPublish?: WechatPublishUpdateOneWithoutArticleNestedInput
    Comment?: CommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    translations?: ArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput
    wechatPublish?: WechatPublishUncheckedUpdateOneWithoutArticleNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleTranslationCreateInput = {
    id?: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutTranslationsInput
    references?: ReferenceCreateNestedManyWithoutArticleTranslationInput
  }

  export type ArticleTranslationUncheckedCreateInput = {
    id?: string
    articleId: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: ReferenceUncheckedCreateNestedManyWithoutArticleTranslationInput
  }

  export type ArticleTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutTranslationsNestedInput
    references?: ReferenceUpdateManyWithoutArticleTranslationNestedInput
  }

  export type ArticleTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: ReferenceUncheckedUpdateManyWithoutArticleTranslationNestedInput
  }

  export type ArticleTranslationCreateManyInput = {
    id?: string
    articleId: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferenceCreateInput = {
    id?: string
    caption: string
    url: string
    articleTranslation: ArticleTranslationCreateNestedOneWithoutReferencesInput
  }

  export type ReferenceUncheckedCreateInput = {
    id?: string
    articleTranslationId: string
    caption: string
    url: string
  }

  export type ReferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    articleTranslation?: ArticleTranslationUpdateOneRequiredWithoutReferencesNestedInput
  }

  export type ReferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleTranslationId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceCreateManyInput = {
    id?: string
    articleTranslationId: string
    caption: string
    url: string
  }

  export type ReferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleTranslationId?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type WechatPublishCreateInput = {
    id?: string
    status?: $Enums.WechatPublishStatus
    content: string
    error?: string | null
    mediaId?: string | null
    publishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutWechatPublishInput
  }

  export type WechatPublishUncheckedCreateInput = {
    id?: string
    articleId: string
    status?: $Enums.WechatPublishStatus
    content: string
    error?: string | null
    mediaId?: string | null
    publishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WechatPublishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWechatPublishStatusFieldUpdateOperationsInput | $Enums.WechatPublishStatus
    content?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutWechatPublishNestedInput
  }

  export type WechatPublishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumWechatPublishStatusFieldUpdateOperationsInput | $Enums.WechatPublishStatus
    content?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WechatPublishCreateManyInput = {
    id?: string
    articleId: string
    status?: $Enums.WechatPublishStatus
    content: string
    error?: string | null
    mediaId?: string | null
    publishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WechatPublishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWechatPublishStatusFieldUpdateOperationsInput | $Enums.WechatPublishStatus
    content?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WechatPublishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    status?: EnumWechatPublishStatusFieldUpdateOperationsInput | $Enums.WechatPublishStatus
    content?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    articleId: string
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    articleId: string
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DraftCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type EnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
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

  export type ArticleTranslationListRelationFilter = {
    every?: ArticleTranslationWhereInput
    some?: ArticleTranslationWhereInput
    none?: ArticleTranslationWhereInput
  }

  export type WechatPublishNullableScalarRelationFilter = {
    is?: WechatPublishWhereInput | null
    isNot?: WechatPublishWhereInput | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ArticleTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrder
    status?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    views?: SortOrder
    likes?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrder
    status?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
    author?: SortOrder
    status?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    views?: SortOrder
    likes?: SortOrder
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

  export type EnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type ReferenceListRelationFilter = {
    every?: ReferenceWhereInput
    some?: ReferenceWhereInput
    none?: ReferenceWhereInput
  }

  export type ReferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleTranslationArticleIdLangCompoundUniqueInput = {
    articleId: string
    lang: string
  }

  export type ArticleTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverPrompt?: SortOrder
    cover?: SortOrder
    categories?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverPrompt?: SortOrder
    cover?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    lang?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    coverPrompt?: SortOrder
    cover?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleTranslationScalarRelationFilter = {
    is?: ArticleTranslationWhereInput
    isNot?: ArticleTranslationWhereInput
  }

  export type ReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    articleTranslationId?: SortOrder
    caption?: SortOrder
    url?: SortOrder
  }

  export type ReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    articleTranslationId?: SortOrder
    caption?: SortOrder
    url?: SortOrder
  }

  export type ReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    articleTranslationId?: SortOrder
    caption?: SortOrder
    url?: SortOrder
  }

  export type EnumWechatPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WechatPublishStatus | EnumWechatPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWechatPublishStatusFilter<$PrismaModel> | $Enums.WechatPublishStatus
  }

  export type WechatPublishCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    error?: SortOrder
    mediaId?: SortOrder
    publishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WechatPublishMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    error?: SortOrder
    mediaId?: SortOrder
    publishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WechatPublishMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    status?: SortOrder
    content?: SortOrder
    error?: SortOrder
    mediaId?: SortOrder
    publishId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWechatPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WechatPublishStatus | EnumWechatPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWechatPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.WechatPublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWechatPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumWechatPublishStatusFilter<$PrismaModel>
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    content?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticleTranslationCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleTranslationCreateWithoutArticleInput, ArticleTranslationUncheckedCreateWithoutArticleInput> | ArticleTranslationCreateWithoutArticleInput[] | ArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTranslationCreateOrConnectWithoutArticleInput | ArticleTranslationCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleTranslationCreateManyArticleInputEnvelope
    connect?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
  }

  export type WechatPublishCreateNestedOneWithoutArticleInput = {
    create?: XOR<WechatPublishCreateWithoutArticleInput, WechatPublishUncheckedCreateWithoutArticleInput>
    connectOrCreate?: WechatPublishCreateOrConnectWithoutArticleInput
    connect?: WechatPublishWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ArticleTranslationUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleTranslationCreateWithoutArticleInput, ArticleTranslationUncheckedCreateWithoutArticleInput> | ArticleTranslationCreateWithoutArticleInput[] | ArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTranslationCreateOrConnectWithoutArticleInput | ArticleTranslationCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleTranslationCreateManyArticleInputEnvelope
    connect?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
  }

  export type WechatPublishUncheckedCreateNestedOneWithoutArticleInput = {
    create?: XOR<WechatPublishCreateWithoutArticleInput, WechatPublishUncheckedCreateWithoutArticleInput>
    connectOrCreate?: WechatPublishCreateOrConnectWithoutArticleInput
    connect?: WechatPublishWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumArticleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ArticleStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticleTranslationUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleTranslationCreateWithoutArticleInput, ArticleTranslationUncheckedCreateWithoutArticleInput> | ArticleTranslationCreateWithoutArticleInput[] | ArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTranslationCreateOrConnectWithoutArticleInput | ArticleTranslationCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput | ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleTranslationCreateManyArticleInputEnvelope
    set?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    disconnect?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    delete?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    connect?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    update?: ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput | ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleTranslationUpdateManyWithWhereWithoutArticleInput | ArticleTranslationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleTranslationScalarWhereInput | ArticleTranslationScalarWhereInput[]
  }

  export type WechatPublishUpdateOneWithoutArticleNestedInput = {
    create?: XOR<WechatPublishCreateWithoutArticleInput, WechatPublishUncheckedCreateWithoutArticleInput>
    connectOrCreate?: WechatPublishCreateOrConnectWithoutArticleInput
    upsert?: WechatPublishUpsertWithoutArticleInput
    disconnect?: WechatPublishWhereInput | boolean
    delete?: WechatPublishWhereInput | boolean
    connect?: WechatPublishWhereUniqueInput
    update?: XOR<XOR<WechatPublishUpdateToOneWithWhereWithoutArticleInput, WechatPublishUpdateWithoutArticleInput>, WechatPublishUncheckedUpdateWithoutArticleInput>
  }

  export type CommentUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput | CommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticleInput | CommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticleInput | CommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleTranslationCreateWithoutArticleInput, ArticleTranslationUncheckedCreateWithoutArticleInput> | ArticleTranslationCreateWithoutArticleInput[] | ArticleTranslationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleTranslationCreateOrConnectWithoutArticleInput | ArticleTranslationCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput | ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleTranslationCreateManyArticleInputEnvelope
    set?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    disconnect?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    delete?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    connect?: ArticleTranslationWhereUniqueInput | ArticleTranslationWhereUniqueInput[]
    update?: ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput | ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleTranslationUpdateManyWithWhereWithoutArticleInput | ArticleTranslationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleTranslationScalarWhereInput | ArticleTranslationScalarWhereInput[]
  }

  export type WechatPublishUncheckedUpdateOneWithoutArticleNestedInput = {
    create?: XOR<WechatPublishCreateWithoutArticleInput, WechatPublishUncheckedCreateWithoutArticleInput>
    connectOrCreate?: WechatPublishCreateOrConnectWithoutArticleInput
    upsert?: WechatPublishUpsertWithoutArticleInput
    disconnect?: WechatPublishWhereInput | boolean
    delete?: WechatPublishWhereInput | boolean
    connect?: WechatPublishWhereUniqueInput
    update?: XOR<XOR<WechatPublishUpdateToOneWithWhereWithoutArticleInput, WechatPublishUpdateWithoutArticleInput>, WechatPublishUncheckedUpdateWithoutArticleInput>
  }

  export type CommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput> | CommentCreateWithoutArticleInput[] | CommentUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArticleInput | CommentCreateOrConnectWithoutArticleInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArticleInput | CommentUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: CommentCreateManyArticleInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArticleInput | CommentUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArticleInput | CommentUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ArticleTranslationCreatecategoriesInput = {
    set: string[]
  }

  export type ArticleTranslationCreatekeywordsInput = {
    set: string[]
  }

  export type ArticleCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<ArticleCreateWithoutTranslationsInput, ArticleUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutTranslationsInput
    connect?: ArticleWhereUniqueInput
  }

  export type ReferenceCreateNestedManyWithoutArticleTranslationInput = {
    create?: XOR<ReferenceCreateWithoutArticleTranslationInput, ReferenceUncheckedCreateWithoutArticleTranslationInput> | ReferenceCreateWithoutArticleTranslationInput[] | ReferenceUncheckedCreateWithoutArticleTranslationInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutArticleTranslationInput | ReferenceCreateOrConnectWithoutArticleTranslationInput[]
    createMany?: ReferenceCreateManyArticleTranslationInputEnvelope
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
  }

  export type ReferenceUncheckedCreateNestedManyWithoutArticleTranslationInput = {
    create?: XOR<ReferenceCreateWithoutArticleTranslationInput, ReferenceUncheckedCreateWithoutArticleTranslationInput> | ReferenceCreateWithoutArticleTranslationInput[] | ReferenceUncheckedCreateWithoutArticleTranslationInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutArticleTranslationInput | ReferenceCreateOrConnectWithoutArticleTranslationInput[]
    createMany?: ReferenceCreateManyArticleTranslationInputEnvelope
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
  }

  export type ArticleTranslationUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArticleTranslationUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArticleUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<ArticleCreateWithoutTranslationsInput, ArticleUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutTranslationsInput
    upsert?: ArticleUpsertWithoutTranslationsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutTranslationsInput, ArticleUpdateWithoutTranslationsInput>, ArticleUncheckedUpdateWithoutTranslationsInput>
  }

  export type ReferenceUpdateManyWithoutArticleTranslationNestedInput = {
    create?: XOR<ReferenceCreateWithoutArticleTranslationInput, ReferenceUncheckedCreateWithoutArticleTranslationInput> | ReferenceCreateWithoutArticleTranslationInput[] | ReferenceUncheckedCreateWithoutArticleTranslationInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutArticleTranslationInput | ReferenceCreateOrConnectWithoutArticleTranslationInput[]
    upsert?: ReferenceUpsertWithWhereUniqueWithoutArticleTranslationInput | ReferenceUpsertWithWhereUniqueWithoutArticleTranslationInput[]
    createMany?: ReferenceCreateManyArticleTranslationInputEnvelope
    set?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    disconnect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    delete?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    update?: ReferenceUpdateWithWhereUniqueWithoutArticleTranslationInput | ReferenceUpdateWithWhereUniqueWithoutArticleTranslationInput[]
    updateMany?: ReferenceUpdateManyWithWhereWithoutArticleTranslationInput | ReferenceUpdateManyWithWhereWithoutArticleTranslationInput[]
    deleteMany?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
  }

  export type ReferenceUncheckedUpdateManyWithoutArticleTranslationNestedInput = {
    create?: XOR<ReferenceCreateWithoutArticleTranslationInput, ReferenceUncheckedCreateWithoutArticleTranslationInput> | ReferenceCreateWithoutArticleTranslationInput[] | ReferenceUncheckedCreateWithoutArticleTranslationInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutArticleTranslationInput | ReferenceCreateOrConnectWithoutArticleTranslationInput[]
    upsert?: ReferenceUpsertWithWhereUniqueWithoutArticleTranslationInput | ReferenceUpsertWithWhereUniqueWithoutArticleTranslationInput[]
    createMany?: ReferenceCreateManyArticleTranslationInputEnvelope
    set?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    disconnect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    delete?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    update?: ReferenceUpdateWithWhereUniqueWithoutArticleTranslationInput | ReferenceUpdateWithWhereUniqueWithoutArticleTranslationInput[]
    updateMany?: ReferenceUpdateManyWithWhereWithoutArticleTranslationInput | ReferenceUpdateManyWithWhereWithoutArticleTranslationInput[]
    deleteMany?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
  }

  export type ArticleTranslationCreateNestedOneWithoutReferencesInput = {
    create?: XOR<ArticleTranslationCreateWithoutReferencesInput, ArticleTranslationUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: ArticleTranslationCreateOrConnectWithoutReferencesInput
    connect?: ArticleTranslationWhereUniqueInput
  }

  export type ArticleTranslationUpdateOneRequiredWithoutReferencesNestedInput = {
    create?: XOR<ArticleTranslationCreateWithoutReferencesInput, ArticleTranslationUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: ArticleTranslationCreateOrConnectWithoutReferencesInput
    upsert?: ArticleTranslationUpsertWithoutReferencesInput
    connect?: ArticleTranslationWhereUniqueInput
    update?: XOR<XOR<ArticleTranslationUpdateToOneWithWhereWithoutReferencesInput, ArticleTranslationUpdateWithoutReferencesInput>, ArticleTranslationUncheckedUpdateWithoutReferencesInput>
  }

  export type ArticleCreateNestedOneWithoutWechatPublishInput = {
    create?: XOR<ArticleCreateWithoutWechatPublishInput, ArticleUncheckedCreateWithoutWechatPublishInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutWechatPublishInput
    connect?: ArticleWhereUniqueInput
  }

  export type EnumWechatPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.WechatPublishStatus
  }

  export type ArticleUpdateOneRequiredWithoutWechatPublishNestedInput = {
    create?: XOR<ArticleCreateWithoutWechatPublishInput, ArticleUncheckedCreateWithoutWechatPublishInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutWechatPublishInput
    upsert?: ArticleUpsertWithoutWechatPublishInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutWechatPublishInput, ArticleUpdateWithoutWechatPublishInput>, ArticleUncheckedUpdateWithoutWechatPublishInput>
  }

  export type ArticleCreateNestedOneWithoutCommentInput = {
    create?: XOR<ArticleCreateWithoutCommentInput, ArticleUncheckedCreateWithoutCommentInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentInput
    connect?: ArticleWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<ArticleCreateWithoutCommentInput, ArticleUncheckedCreateWithoutCommentInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentInput
    upsert?: ArticleUpsertWithoutCommentInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutCommentInput, ArticleUpdateWithoutCommentInput>, ArticleUncheckedUpdateWithoutCommentInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
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

  export type NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
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

  export type NestedEnumWechatPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WechatPublishStatus | EnumWechatPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWechatPublishStatusFilter<$PrismaModel> | $Enums.WechatPublishStatus
  }

  export type NestedEnumWechatPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WechatPublishStatus | EnumWechatPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WechatPublishStatus[] | ListEnumWechatPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWechatPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.WechatPublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWechatPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumWechatPublishStatusFilter<$PrismaModel>
  }

  export type ArticleTranslationCreateWithoutArticleInput = {
    id?: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: ReferenceCreateNestedManyWithoutArticleTranslationInput
  }

  export type ArticleTranslationUncheckedCreateWithoutArticleInput = {
    id?: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: ReferenceUncheckedCreateNestedManyWithoutArticleTranslationInput
  }

  export type ArticleTranslationCreateOrConnectWithoutArticleInput = {
    where: ArticleTranslationWhereUniqueInput
    create: XOR<ArticleTranslationCreateWithoutArticleInput, ArticleTranslationUncheckedCreateWithoutArticleInput>
  }

  export type ArticleTranslationCreateManyArticleInputEnvelope = {
    data: ArticleTranslationCreateManyArticleInput | ArticleTranslationCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type WechatPublishCreateWithoutArticleInput = {
    id?: string
    status?: $Enums.WechatPublishStatus
    content: string
    error?: string | null
    mediaId?: string | null
    publishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WechatPublishUncheckedCreateWithoutArticleInput = {
    id?: string
    status?: $Enums.WechatPublishStatus
    content: string
    error?: string | null
    mediaId?: string | null
    publishId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WechatPublishCreateOrConnectWithoutArticleInput = {
    where: WechatPublishWhereUniqueInput
    create: XOR<WechatPublishCreateWithoutArticleInput, WechatPublishUncheckedCreateWithoutArticleInput>
  }

  export type CommentCreateWithoutArticleInput = {
    id?: string
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutArticleInput = {
    id?: string
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutArticleInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentCreateManyArticleInputEnvelope = {
    data: CommentCreateManyArticleInput | CommentCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleTranslationWhereUniqueInput
    update: XOR<ArticleTranslationUpdateWithoutArticleInput, ArticleTranslationUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleTranslationCreateWithoutArticleInput, ArticleTranslationUncheckedCreateWithoutArticleInput>
  }

  export type ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleTranslationWhereUniqueInput
    data: XOR<ArticleTranslationUpdateWithoutArticleInput, ArticleTranslationUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleTranslationUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleTranslationScalarWhereInput
    data: XOR<ArticleTranslationUpdateManyMutationInput, ArticleTranslationUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleTranslationScalarWhereInput = {
    AND?: ArticleTranslationScalarWhereInput | ArticleTranslationScalarWhereInput[]
    OR?: ArticleTranslationScalarWhereInput[]
    NOT?: ArticleTranslationScalarWhereInput | ArticleTranslationScalarWhereInput[]
    id?: StringFilter<"ArticleTranslation"> | string
    articleId?: StringFilter<"ArticleTranslation"> | string
    lang?: StringFilter<"ArticleTranslation"> | string
    title?: StringFilter<"ArticleTranslation"> | string
    summary?: StringNullableFilter<"ArticleTranslation"> | string | null
    content?: StringFilter<"ArticleTranslation"> | string
    coverPrompt?: StringNullableFilter<"ArticleTranslation"> | string | null
    cover?: StringNullableFilter<"ArticleTranslation"> | string | null
    categories?: StringNullableListFilter<"ArticleTranslation">
    keywords?: StringNullableListFilter<"ArticleTranslation">
    createdAt?: DateTimeFilter<"ArticleTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleTranslation"> | Date | string
  }

  export type WechatPublishUpsertWithoutArticleInput = {
    update: XOR<WechatPublishUpdateWithoutArticleInput, WechatPublishUncheckedUpdateWithoutArticleInput>
    create: XOR<WechatPublishCreateWithoutArticleInput, WechatPublishUncheckedCreateWithoutArticleInput>
    where?: WechatPublishWhereInput
  }

  export type WechatPublishUpdateToOneWithWhereWithoutArticleInput = {
    where?: WechatPublishWhereInput
    data: XOR<WechatPublishUpdateWithoutArticleInput, WechatPublishUncheckedUpdateWithoutArticleInput>
  }

  export type WechatPublishUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWechatPublishStatusFieldUpdateOperationsInput | $Enums.WechatPublishStatus
    content?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WechatPublishUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumWechatPublishStatusFieldUpdateOperationsInput | $Enums.WechatPublishStatus
    content?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    publishId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
    create: XOR<CommentCreateWithoutArticleInput, CommentUncheckedCreateWithoutArticleInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArticleInput, CommentUncheckedUpdateWithoutArticleInput>
  }

  export type CommentUpdateManyWithWhereWithoutArticleInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutArticleInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    articleId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type ArticleCreateWithoutTranslationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    wechatPublish?: WechatPublishCreateNestedOneWithoutArticleInput
    Comment?: CommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutTranslationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    wechatPublish?: WechatPublishUncheckedCreateNestedOneWithoutArticleInput
    Comment?: CommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutTranslationsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutTranslationsInput, ArticleUncheckedCreateWithoutTranslationsInput>
  }

  export type ReferenceCreateWithoutArticleTranslationInput = {
    id?: string
    caption: string
    url: string
  }

  export type ReferenceUncheckedCreateWithoutArticleTranslationInput = {
    id?: string
    caption: string
    url: string
  }

  export type ReferenceCreateOrConnectWithoutArticleTranslationInput = {
    where: ReferenceWhereUniqueInput
    create: XOR<ReferenceCreateWithoutArticleTranslationInput, ReferenceUncheckedCreateWithoutArticleTranslationInput>
  }

  export type ReferenceCreateManyArticleTranslationInputEnvelope = {
    data: ReferenceCreateManyArticleTranslationInput | ReferenceCreateManyArticleTranslationInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithoutTranslationsInput = {
    update: XOR<ArticleUpdateWithoutTranslationsInput, ArticleUncheckedUpdateWithoutTranslationsInput>
    create: XOR<ArticleCreateWithoutTranslationsInput, ArticleUncheckedCreateWithoutTranslationsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutTranslationsInput, ArticleUncheckedUpdateWithoutTranslationsInput>
  }

  export type ArticleUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    wechatPublish?: WechatPublishUpdateOneWithoutArticleNestedInput
    Comment?: CommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    wechatPublish?: WechatPublishUncheckedUpdateOneWithoutArticleNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ReferenceUpsertWithWhereUniqueWithoutArticleTranslationInput = {
    where: ReferenceWhereUniqueInput
    update: XOR<ReferenceUpdateWithoutArticleTranslationInput, ReferenceUncheckedUpdateWithoutArticleTranslationInput>
    create: XOR<ReferenceCreateWithoutArticleTranslationInput, ReferenceUncheckedCreateWithoutArticleTranslationInput>
  }

  export type ReferenceUpdateWithWhereUniqueWithoutArticleTranslationInput = {
    where: ReferenceWhereUniqueInput
    data: XOR<ReferenceUpdateWithoutArticleTranslationInput, ReferenceUncheckedUpdateWithoutArticleTranslationInput>
  }

  export type ReferenceUpdateManyWithWhereWithoutArticleTranslationInput = {
    where: ReferenceScalarWhereInput
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyWithoutArticleTranslationInput>
  }

  export type ReferenceScalarWhereInput = {
    AND?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
    OR?: ReferenceScalarWhereInput[]
    NOT?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
    id?: StringFilter<"Reference"> | string
    articleTranslationId?: StringFilter<"Reference"> | string
    caption?: StringFilter<"Reference"> | string
    url?: StringFilter<"Reference"> | string
  }

  export type ArticleTranslationCreateWithoutReferencesInput = {
    id?: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    article: ArticleCreateNestedOneWithoutTranslationsInput
  }

  export type ArticleTranslationUncheckedCreateWithoutReferencesInput = {
    id?: string
    articleId: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleTranslationCreateOrConnectWithoutReferencesInput = {
    where: ArticleTranslationWhereUniqueInput
    create: XOR<ArticleTranslationCreateWithoutReferencesInput, ArticleTranslationUncheckedCreateWithoutReferencesInput>
  }

  export type ArticleTranslationUpsertWithoutReferencesInput = {
    update: XOR<ArticleTranslationUpdateWithoutReferencesInput, ArticleTranslationUncheckedUpdateWithoutReferencesInput>
    create: XOR<ArticleTranslationCreateWithoutReferencesInput, ArticleTranslationUncheckedCreateWithoutReferencesInput>
    where?: ArticleTranslationWhereInput
  }

  export type ArticleTranslationUpdateToOneWithWhereWithoutReferencesInput = {
    where?: ArticleTranslationWhereInput
    data: XOR<ArticleTranslationUpdateWithoutReferencesInput, ArticleTranslationUncheckedUpdateWithoutReferencesInput>
  }

  export type ArticleTranslationUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type ArticleTranslationUncheckedUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateWithoutWechatPublishInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    translations?: ArticleTranslationCreateNestedManyWithoutArticleInput
    Comment?: CommentCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutWechatPublishInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    translations?: ArticleTranslationUncheckedCreateNestedManyWithoutArticleInput
    Comment?: CommentUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutWechatPublishInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutWechatPublishInput, ArticleUncheckedCreateWithoutWechatPublishInput>
  }

  export type ArticleUpsertWithoutWechatPublishInput = {
    update: XOR<ArticleUpdateWithoutWechatPublishInput, ArticleUncheckedUpdateWithoutWechatPublishInput>
    create: XOR<ArticleCreateWithoutWechatPublishInput, ArticleUncheckedCreateWithoutWechatPublishInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutWechatPublishInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutWechatPublishInput, ArticleUncheckedUpdateWithoutWechatPublishInput>
  }

  export type ArticleUpdateWithoutWechatPublishInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    translations?: ArticleTranslationUpdateManyWithoutArticleNestedInput
    Comment?: CommentUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutWechatPublishInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    translations?: ArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateWithoutCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    translations?: ArticleTranslationCreateNestedManyWithoutArticleInput
    wechatPublish?: WechatPublishCreateNestedOneWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCommentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    author?: string | null
    status?: $Enums.ArticleStatus
    views?: number
    likes?: number
    translations?: ArticleTranslationUncheckedCreateNestedManyWithoutArticleInput
    wechatPublish?: WechatPublishUncheckedCreateNestedOneWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCommentInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCommentInput, ArticleUncheckedCreateWithoutCommentInput>
  }

  export type ArticleUpsertWithoutCommentInput = {
    update: XOR<ArticleUpdateWithoutCommentInput, ArticleUncheckedUpdateWithoutCommentInput>
    create: XOR<ArticleCreateWithoutCommentInput, ArticleUncheckedCreateWithoutCommentInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutCommentInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutCommentInput, ArticleUncheckedUpdateWithoutCommentInput>
  }

  export type ArticleUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    translations?: ArticleTranslationUpdateManyWithoutArticleNestedInput
    wechatPublish?: WechatPublishUpdateOneWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    translations?: ArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput
    wechatPublish?: WechatPublishUncheckedUpdateOneWithoutArticleNestedInput
  }

  export type ArticleTranslationCreateManyArticleInput = {
    id?: string
    lang: string
    title: string
    summary?: string | null
    content: string
    coverPrompt?: string | null
    cover?: string | null
    categories?: ArticleTranslationCreatecategoriesInput | string[]
    keywords?: ArticleTranslationCreatekeywordsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyArticleInput = {
    id?: string
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleTranslationUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: ReferenceUpdateManyWithoutArticleTranslationNestedInput
  }

  export type ArticleTranslationUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: ReferenceUncheckedUpdateManyWithoutArticleTranslationNestedInput
  }

  export type ArticleTranslationUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: ArticleTranslationUpdatecategoriesInput | string[]
    keywords?: ArticleTranslationUpdatekeywordsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferenceCreateManyArticleTranslationInput = {
    id?: string
    caption: string
    url: string
  }

  export type ReferenceUpdateWithoutArticleTranslationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateWithoutArticleTranslationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateManyWithoutArticleTranslationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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