
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  password: string
  firstname: string | null
  lastname: string | null
  username: string
  active: boolean
  chatId: string | null
  role: Role
}

/**
 * Model Task
 * 
 */
export type Task = {
  id: string
  createdAt: Date
  updatedAt: Date
  projectId: string | null
  creatorId: string | null
  parentId: string | null
  status: string
  details: string
  chatId: string | null
}

/**
 * Model Space
 * 
 */
export type Space = {
  id: string
  createdAt: Date
  updatedAt: Date
  viewId: string
  projectId: string
  settingsId: string
  spaceType: string
  parentId: string | null
  chatId: string | null
}

/**
 * Model SpaceView
 * 
 */
export type SpaceView = {
  id: string
  createdAt: Date
  updatedAt: Date
  localId: string
  spaceId: string
}

/**
 * Model SpaceSettings
 * 
 */
export type SpaceSettings = {
  id: string
  createdAt: Date
  updatedAt: Date
  localId: string
  spaceId: string
}

/**
 * Model Project
 * 
 */
export type Project = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  description: string | null
  settingsId: string
  workspaceId: string
  ownerId: string
  chatId: string | null
}

/**
 * Model ProjectSettings
 * 
 */
export type ProjectSettings = {
  id: string
  createdAt: Date
  updatedAt: Date
  localId: string
  projectId: string
}

/**
 * Model Workspace
 * 
 */
export type Workspace = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  settingsId: string
  userId: string
}

/**
 * Model WorkspaceSettings
 * 
 */
export type WorkspaceSettings = {
  id: string
  createdAt: Date
  updatedAt: Date
  localId: string
  workspaceId: string
}

/**
 * Model ProjectsOnUsers
 * 
 */
export type ProjectsOnUsers = {
  projectId: string
  userId: string
  assignedAt: Date
  assignedBy: string
}

/**
 * Model UserAssignedTasks
 * 
 */
export type UserAssignedTasks = {
  taskId: string
  userId: string
  assignedAt: Date
  assignedBy: string
}

/**
 * Model Message
 * 
 */
export type Message = {
  id: string
  createdAt: Date
  updatedAt: Date
  content: string
  contentType: string
  type: string
  senderId: string | null
  parentId: string | null
  chatId: string
}

/**
 * Model Chat
 * 
 */
export type Chat = {
  id: string
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<GlobalReject>;

  /**
   * `prisma.space`: Exposes CRUD operations for the **Space** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spaces
    * const spaces = await prisma.space.findMany()
    * ```
    */
  get space(): Prisma.SpaceDelegate<GlobalReject>;

  /**
   * `prisma.spaceView`: Exposes CRUD operations for the **SpaceView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpaceViews
    * const spaceViews = await prisma.spaceView.findMany()
    * ```
    */
  get spaceView(): Prisma.SpaceViewDelegate<GlobalReject>;

  /**
   * `prisma.spaceSettings`: Exposes CRUD operations for the **SpaceSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpaceSettings
    * const spaceSettings = await prisma.spaceSettings.findMany()
    * ```
    */
  get spaceSettings(): Prisma.SpaceSettingsDelegate<GlobalReject>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.projectSettings`: Exposes CRUD operations for the **ProjectSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSettings
    * const projectSettings = await prisma.projectSettings.findMany()
    * ```
    */
  get projectSettings(): Prisma.ProjectSettingsDelegate<GlobalReject>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<GlobalReject>;

  /**
   * `prisma.workspaceSettings`: Exposes CRUD operations for the **WorkspaceSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceSettings
    * const workspaceSettings = await prisma.workspaceSettings.findMany()
    * ```
    */
  get workspaceSettings(): Prisma.WorkspaceSettingsDelegate<GlobalReject>;

  /**
   * `prisma.projectsOnUsers`: Exposes CRUD operations for the **ProjectsOnUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectsOnUsers
    * const projectsOnUsers = await prisma.projectsOnUsers.findMany()
    * ```
    */
  get projectsOnUsers(): Prisma.ProjectsOnUsersDelegate<GlobalReject>;

  /**
   * `prisma.userAssignedTasks`: Exposes CRUD operations for the **UserAssignedTasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAssignedTasks
    * const userAssignedTasks = await prisma.userAssignedTasks.findMany()
    * ```
    */
  get userAssignedTasks(): Prisma.UserAssignedTasksDelegate<GlobalReject>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.0
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Task: 'Task',
    Space: 'Space',
    SpaceView: 'SpaceView',
    SpaceSettings: 'SpaceSettings',
    Project: 'Project',
    ProjectSettings: 'ProjectSettings',
    Workspace: 'Workspace',
    WorkspaceSettings: 'WorkspaceSettings',
    ProjectsOnUsers: 'ProjectsOnUsers',
    UserAssignedTasks: 'UserAssignedTasks',
    Message: 'Message',
    Chat: 'Chat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

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
    comments: number
    ownedProjects: number
    projects: number
    createdTasks: number
    assignedTasks: number
    User_B: number
    User_A: number
  }

  export type UserCountOutputTypeSelect = {
    comments?: boolean
    ownedProjects?: boolean
    projects?: boolean
    createdTasks?: boolean
    assignedTasks?: boolean
    User_B?: boolean
    User_A?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type TaskCountOutputType
   */


  export type TaskCountOutputType = {
    subTasks: number
    assignes: number
  }

  export type TaskCountOutputTypeSelect = {
    subTasks?: boolean
    assignes?: boolean
  }

  export type TaskCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TaskCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TaskCountOutputType
    : S extends undefined
    ? never
    : S extends TaskCountOutputTypeArgs
    ?'include' extends U
    ? TaskCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TaskCountOutputType ? TaskCountOutputType[P] : never
  } 
    : TaskCountOutputType
  : TaskCountOutputType




  // Custom InputTypes

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     * 
    **/
    select?: TaskCountOutputTypeSelect | null
  }



  /**
   * Count Type SpaceCountOutputType
   */


  export type SpaceCountOutputType = {
    subspaces: number
  }

  export type SpaceCountOutputTypeSelect = {
    subspaces?: boolean
  }

  export type SpaceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SpaceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SpaceCountOutputType
    : S extends undefined
    ? never
    : S extends SpaceCountOutputTypeArgs
    ?'include' extends U
    ? SpaceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SpaceCountOutputType ? SpaceCountOutputType[P] : never
  } 
    : SpaceCountOutputType
  : SpaceCountOutputType




  // Custom InputTypes

  /**
   * SpaceCountOutputType without action
   */
  export type SpaceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SpaceCountOutputType
     * 
    **/
    select?: SpaceCountOutputTypeSelect | null
  }



  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    users: number
    spaces: number
    tasks: number
  }

  export type ProjectCountOutputTypeSelect = {
    users?: boolean
    spaces?: boolean
    tasks?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProjectCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProjectCountOutputType
    : S extends undefined
    ? never
    : S extends ProjectCountOutputTypeArgs
    ?'include' extends U
    ? ProjectCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
    : ProjectCountOutputType
  : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     * 
    **/
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type WorkspaceCountOutputType
   */


  export type WorkspaceCountOutputType = {
    projects: number
  }

  export type WorkspaceCountOutputTypeSelect = {
    projects?: boolean
  }

  export type WorkspaceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | WorkspaceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? WorkspaceCountOutputType
    : S extends undefined
    ? never
    : S extends WorkspaceCountOutputTypeArgs
    ?'include' extends U
    ? WorkspaceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WorkspaceCountOutputType ? WorkspaceCountOutputType[P] : never
  } 
    : WorkspaceCountOutputType
  : WorkspaceCountOutputType




  // Custom InputTypes

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     * 
    **/
    select?: WorkspaceCountOutputTypeSelect | null
  }



  /**
   * Count Type MessageCountOutputType
   */


  export type MessageCountOutputType = {
    subMessages: number
  }

  export type MessageCountOutputTypeSelect = {
    subMessages?: boolean
  }

  export type MessageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MessageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MessageCountOutputType
    : S extends undefined
    ? never
    : S extends MessageCountOutputTypeArgs
    ?'include' extends U
    ? MessageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MessageCountOutputType ? MessageCountOutputType[P] : never
  } 
    : MessageCountOutputType
  : MessageCountOutputType




  // Custom InputTypes

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     * 
    **/
    select?: MessageCountOutputTypeSelect | null
  }



  /**
   * Count Type ChatCountOutputType
   */


  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect = {
    messages?: boolean
  }

  export type ChatCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ChatCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ChatCountOutputType
    : S extends undefined
    ? never
    : S extends ChatCountOutputTypeArgs
    ?'include' extends U
    ? ChatCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ChatCountOutputType ? ChatCountOutputType[P] : never
  } 
    : ChatCountOutputType
  : ChatCountOutputType




  // Custom InputTypes

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     * 
    **/
    select?: ChatCountOutputTypeSelect | null
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
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    active: boolean | null
    chatId: string | null
    role: Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    active: boolean | null
    chatId: string | null
    role: Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    firstname: number
    lastname: number
    username: number
    active: number
    chatId: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    username?: true
    active?: true
    chatId?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    username?: true
    active?: true
    chatId?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    username?: true
    active?: true
    chatId?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    firstname: string | null
    lastname: string | null
    username: string
    active: boolean
    chatId: string | null
    role: Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    active?: boolean
    chatId?: boolean
    role?: boolean
    chat?: boolean | ChatArgs
    comments?: boolean | MessageFindManyArgs
    ownedProjects?: boolean | ProjectFindManyArgs
    projects?: boolean | ProjectsOnUsersFindManyArgs
    createdTasks?: boolean | TaskFindManyArgs
    assignedTasks?: boolean | UserAssignedTasksFindManyArgs
    workspaces?: boolean | WorkspaceArgs
    User_B?: boolean | UserFindManyArgs
    User_A?: boolean | UserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    chat?: boolean | ChatArgs
    comments?: boolean | MessageFindManyArgs
    ownedProjects?: boolean | ProjectFindManyArgs
    projects?: boolean | ProjectsOnUsersFindManyArgs
    createdTasks?: boolean | TaskFindManyArgs
    assignedTasks?: boolean | UserAssignedTasksFindManyArgs
    workspaces?: boolean | WorkspaceArgs
    User_B?: boolean | UserFindManyArgs
    User_A?: boolean | UserFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'chat' ? ChatGetPayload<S['include'][P]> | null :
        P extends 'comments' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends 'ownedProjects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends 'projects' ? Array < ProjectsOnUsersGetPayload<S['include'][P]>>  :
        P extends 'createdTasks' ? Array < TaskGetPayload<S['include'][P]>>  :
        P extends 'assignedTasks' ? Array < UserAssignedTasksGetPayload<S['include'][P]>>  :
        P extends 'workspaces' ? WorkspaceGetPayload<S['include'][P]> | null :
        P extends 'User_B' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'User_A' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'chat' ? ChatGetPayload<S['select'][P]> | null :
        P extends 'comments' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends 'ownedProjects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends 'projects' ? Array < ProjectsOnUsersGetPayload<S['select'][P]>>  :
        P extends 'createdTasks' ? Array < TaskGetPayload<S['select'][P]>>  :
        P extends 'assignedTasks' ? Array < UserAssignedTasksGetPayload<S['select'][P]>>  :
        P extends 'workspaces' ? WorkspaceGetPayload<S['select'][P]> | null :
        P extends 'User_B' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'User_A' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chat<T extends ChatArgs = {}>(args?: Subset<T, ChatArgs>): CheckSelect<T, Prisma__ChatClient<Chat | null >, Prisma__ChatClient<ChatGetPayload<T> | null >>;

    comments<T extends MessageFindManyArgs = {}>(args?: Subset<T, MessageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Message>>, PrismaPromise<Array<MessageGetPayload<T>>>>;

    ownedProjects<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    projects<T extends ProjectsOnUsersFindManyArgs = {}>(args?: Subset<T, ProjectsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProjectsOnUsers>>, PrismaPromise<Array<ProjectsOnUsersGetPayload<T>>>>;

    createdTasks<T extends TaskFindManyArgs = {}>(args?: Subset<T, TaskFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Task>>, PrismaPromise<Array<TaskGetPayload<T>>>>;

    assignedTasks<T extends UserAssignedTasksFindManyArgs = {}>(args?: Subset<T, UserAssignedTasksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserAssignedTasks>>, PrismaPromise<Array<UserAssignedTasksGetPayload<T>>>>;

    workspaces<T extends WorkspaceArgs = {}>(args?: Subset<T, WorkspaceArgs>): CheckSelect<T, Prisma__WorkspaceClient<Workspace | null >, Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null >>;

    User_B<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    User_A<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Task
   */


  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    creatorId: string | null
    parentId: string | null
    status: string | null
    details: string | null
    chatId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    creatorId: string | null
    parentId: string | null
    status: string | null
    details: string | null
    chatId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    projectId: number
    creatorId: number
    parentId: number
    status: number
    details: number
    chatId: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    creatorId?: true
    parentId?: true
    status?: true
    details?: true
    chatId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    creatorId?: true
    parentId?: true
    status?: true
    details?: true
    chatId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    creatorId?: true
    parentId?: true
    status?: true
    details?: true
    chatId?: true
    _all?: true
  }

  export type TaskAggregateArgs = {
    /**
     * Filter which Task to aggregate.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs = {
    where?: TaskWhereInput
    orderBy?: Enumerable<TaskOrderByWithAggregationInput>
    by: Array<TaskScalarFieldEnum>
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }


  export type TaskGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    projectId: string | null
    creatorId: string | null
    parentId: string | null
    status: string
    details: string
    chatId: string | null
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    creatorId?: boolean
    parentId?: boolean
    status?: boolean
    details?: boolean
    chatId?: boolean
    chat?: boolean | ChatArgs
    creator?: boolean | UserArgs
    parent?: boolean | TaskArgs
    project?: boolean | ProjectArgs
    subTasks?: boolean | TaskFindManyArgs
    assignes?: boolean | UserAssignedTasksFindManyArgs
    _count?: boolean | TaskCountOutputTypeArgs
  }

  export type TaskInclude = {
    chat?: boolean | ChatArgs
    creator?: boolean | UserArgs
    parent?: boolean | TaskArgs
    project?: boolean | ProjectArgs
    subTasks?: boolean | TaskFindManyArgs
    assignes?: boolean | UserAssignedTasksFindManyArgs
    _count?: boolean | TaskCountOutputTypeArgs
  }

  export type TaskGetPayload<
    S extends boolean | null | undefined | TaskArgs,
    U = keyof S
      > = S extends true
        ? Task
    : S extends undefined
    ? never
    : S extends TaskArgs | TaskFindManyArgs
    ?'include' extends U
    ? Task  & {
    [P in TrueKeys<S['include']>]:
        P extends 'chat' ? ChatGetPayload<S['include'][P]> | null :
        P extends 'creator' ? UserGetPayload<S['include'][P]> | null :
        P extends 'parent' ? TaskGetPayload<S['include'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['include'][P]> | null :
        P extends 'subTasks' ? Array < TaskGetPayload<S['include'][P]>>  :
        P extends 'assignes' ? Array < UserAssignedTasksGetPayload<S['include'][P]>>  :
        P extends '_count' ? TaskCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'chat' ? ChatGetPayload<S['select'][P]> | null :
        P extends 'creator' ? UserGetPayload<S['select'][P]> | null :
        P extends 'parent' ? TaskGetPayload<S['select'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['select'][P]> | null :
        P extends 'subTasks' ? Array < TaskGetPayload<S['select'][P]>>  :
        P extends 'assignes' ? Array < UserAssignedTasksGetPayload<S['select'][P]>>  :
        P extends '_count' ? TaskCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Task ? Task[P] : never
  } 
    : Task
  : Task


  type TaskCountArgs = Merge<
    Omit<TaskFindManyArgs, 'select' | 'include'> & {
      select?: TaskCountAggregateInputType | true
    }
  >

  export interface TaskDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaskFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Task'> extends True ? CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>> : CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaskFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Task'> extends True ? CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>> : CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs>(
      args?: SelectSubset<T, TaskFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Task>>, PrismaPromise<Array<TaskGetPayload<T>>>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs>(
      args: SelectSubset<T, TaskCreateArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs>(
      args?: SelectSubset<T, TaskCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs>(
      args: SelectSubset<T, TaskDeleteArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs>(
      args: SelectSubset<T, TaskUpdateArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs>(
      args?: SelectSubset<T, TaskDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs>(
      args: SelectSubset<T, TaskUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs>(
      args: SelectSubset<T, TaskUpsertArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Find one Task that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Find the first Task that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TaskClient<Task>, Prisma__TaskClient<TaskGetPayload<T>>>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaskClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chat<T extends ChatArgs = {}>(args?: Subset<T, ChatArgs>): CheckSelect<T, Prisma__ChatClient<Chat | null >, Prisma__ChatClient<ChatGetPayload<T> | null >>;

    creator<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    parent<T extends TaskArgs = {}>(args?: Subset<T, TaskArgs>): CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>;

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    subTasks<T extends TaskFindManyArgs = {}>(args?: Subset<T, TaskFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Task>>, PrismaPromise<Array<TaskGetPayload<T>>>>;

    assignes<T extends UserAssignedTasksFindManyArgs = {}>(args?: Subset<T, UserAssignedTasksFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserAssignedTasks>>, PrismaPromise<Array<UserAssignedTasksGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Task base type for findUnique actions
   */
  export type TaskFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter, which Task to fetch.
     * 
    **/
    where: TaskWhereUniqueInput
  }

  /**
   * Task: findUnique
   */
  export interface TaskFindUniqueArgs extends TaskFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task base type for findFirst actions
   */
  export type TaskFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter, which Task to fetch.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     * 
    **/
    distinct?: Enumerable<TaskScalarFieldEnum>
  }

  /**
   * Task: findFirst
   */
  export interface TaskFindFirstArgs extends TaskFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task findMany
   */
  export type TaskFindManyArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter, which Tasks to fetch.
     * 
    **/
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     * 
    **/
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     * 
    **/
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task create
   */
  export type TaskCreateArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The data needed to create a Task.
     * 
    **/
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs = {
    /**
     * The data used to create many Tasks.
     * 
    **/
    data: Enumerable<TaskCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The data needed to update a Task.
     * 
    **/
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     * 
    **/
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs = {
    /**
     * The data used to update Tasks.
     * 
    **/
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     * 
    **/
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * The filter to search for the Task to update in case it exists.
     * 
    **/
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     * 
    **/
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
    /**
     * Filter which Task to delete.
     * 
    **/
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs = {
    /**
     * Filter which Tasks to delete
     * 
    **/
    where?: TaskWhereInput
  }


  /**
   * Task: findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs = TaskFindUniqueArgsBase
      

  /**
   * Task: findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs = TaskFindFirstArgsBase
      

  /**
   * Task without action
   */
  export type TaskArgs = {
    /**
     * Select specific fields to fetch from the Task
     * 
    **/
    select?: TaskSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TaskInclude | null
  }



  /**
   * Model Space
   */


  export type AggregateSpace = {
    _count: SpaceCountAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  export type SpaceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    viewId: string | null
    projectId: string | null
    settingsId: string | null
    spaceType: string | null
    parentId: string | null
    chatId: string | null
  }

  export type SpaceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    viewId: string | null
    projectId: string | null
    settingsId: string | null
    spaceType: string | null
    parentId: string | null
    chatId: string | null
  }

  export type SpaceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    viewId: number
    projectId: number
    settingsId: number
    spaceType: number
    parentId: number
    chatId: number
    _all: number
  }


  export type SpaceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    viewId?: true
    projectId?: true
    settingsId?: true
    spaceType?: true
    parentId?: true
    chatId?: true
  }

  export type SpaceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    viewId?: true
    projectId?: true
    settingsId?: true
    spaceType?: true
    parentId?: true
    chatId?: true
  }

  export type SpaceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    viewId?: true
    projectId?: true
    settingsId?: true
    spaceType?: true
    parentId?: true
    chatId?: true
    _all?: true
  }

  export type SpaceAggregateArgs = {
    /**
     * Filter which Space to aggregate.
     * 
    **/
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spaces
    **/
    _count?: true | SpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceMaxAggregateInputType
  }

  export type GetSpaceAggregateType<T extends SpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpace[P]>
      : GetScalarType<T[P], AggregateSpace[P]>
  }




  export type SpaceGroupByArgs = {
    where?: SpaceWhereInput
    orderBy?: Enumerable<SpaceOrderByWithAggregationInput>
    by: Array<SpaceScalarFieldEnum>
    having?: SpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceCountAggregateInputType | true
    _min?: SpaceMinAggregateInputType
    _max?: SpaceMaxAggregateInputType
  }


  export type SpaceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    viewId: string
    projectId: string
    settingsId: string
    spaceType: string
    parentId: string | null
    chatId: string | null
    _count: SpaceCountAggregateOutputType | null
    _min: SpaceMinAggregateOutputType | null
    _max: SpaceMaxAggregateOutputType | null
  }

  type GetSpaceGroupByPayload<T extends SpaceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceGroupByOutputType[P]>
        }
      >
    >


  export type SpaceSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    viewId?: boolean
    projectId?: boolean
    settingsId?: boolean
    spaceType?: boolean
    parentId?: boolean
    chatId?: boolean
    chat?: boolean | ChatArgs
    parent?: boolean | SpaceArgs
    project?: boolean | ProjectArgs
    settings?: boolean | SpaceSettingsArgs
    view?: boolean | SpaceViewArgs
    subspaces?: boolean | SpaceFindManyArgs
    _count?: boolean | SpaceCountOutputTypeArgs
  }

  export type SpaceInclude = {
    chat?: boolean | ChatArgs
    parent?: boolean | SpaceArgs
    project?: boolean | ProjectArgs
    settings?: boolean | SpaceSettingsArgs
    view?: boolean | SpaceViewArgs
    subspaces?: boolean | SpaceFindManyArgs
    _count?: boolean | SpaceCountOutputTypeArgs
  }

  export type SpaceGetPayload<
    S extends boolean | null | undefined | SpaceArgs,
    U = keyof S
      > = S extends true
        ? Space
    : S extends undefined
    ? never
    : S extends SpaceArgs | SpaceFindManyArgs
    ?'include' extends U
    ? Space  & {
    [P in TrueKeys<S['include']>]:
        P extends 'chat' ? ChatGetPayload<S['include'][P]> | null :
        P extends 'parent' ? SpaceGetPayload<S['include'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'settings' ? SpaceSettingsGetPayload<S['include'][P]> :
        P extends 'view' ? SpaceViewGetPayload<S['include'][P]> :
        P extends 'subspaces' ? Array < SpaceGetPayload<S['include'][P]>>  :
        P extends '_count' ? SpaceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'chat' ? ChatGetPayload<S['select'][P]> | null :
        P extends 'parent' ? SpaceGetPayload<S['select'][P]> | null :
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'settings' ? SpaceSettingsGetPayload<S['select'][P]> :
        P extends 'view' ? SpaceViewGetPayload<S['select'][P]> :
        P extends 'subspaces' ? Array < SpaceGetPayload<S['select'][P]>>  :
        P extends '_count' ? SpaceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Space ? Space[P] : never
  } 
    : Space
  : Space


  type SpaceCountArgs = Merge<
    Omit<SpaceFindManyArgs, 'select' | 'include'> & {
      select?: SpaceCountAggregateInputType | true
    }
  >

  export interface SpaceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Space that matches the filter.
     * @param {SpaceFindUniqueArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SpaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Space'> extends True ? CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>> : CheckSelect<T, Prisma__SpaceClient<Space | null >, Prisma__SpaceClient<SpaceGetPayload<T> | null >>

    /**
     * Find the first Space that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SpaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Space'> extends True ? CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>> : CheckSelect<T, Prisma__SpaceClient<Space | null >, Prisma__SpaceClient<SpaceGetPayload<T> | null >>

    /**
     * Find zero or more Spaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spaces
     * const spaces = await prisma.space.findMany()
     * 
     * // Get first 10 Spaces
     * const spaces = await prisma.space.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceWithIdOnly = await prisma.space.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpaceFindManyArgs>(
      args?: SelectSubset<T, SpaceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Space>>, PrismaPromise<Array<SpaceGetPayload<T>>>>

    /**
     * Create a Space.
     * @param {SpaceCreateArgs} args - Arguments to create a Space.
     * @example
     * // Create one Space
     * const Space = await prisma.space.create({
     *   data: {
     *     // ... data to create a Space
     *   }
     * })
     * 
    **/
    create<T extends SpaceCreateArgs>(
      args: SelectSubset<T, SpaceCreateArgs>
    ): CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>>

    /**
     * Create many Spaces.
     *     @param {SpaceCreateManyArgs} args - Arguments to create many Spaces.
     *     @example
     *     // Create many Spaces
     *     const space = await prisma.space.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpaceCreateManyArgs>(
      args?: SelectSubset<T, SpaceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Space.
     * @param {SpaceDeleteArgs} args - Arguments to delete one Space.
     * @example
     * // Delete one Space
     * const Space = await prisma.space.delete({
     *   where: {
     *     // ... filter to delete one Space
     *   }
     * })
     * 
    **/
    delete<T extends SpaceDeleteArgs>(
      args: SelectSubset<T, SpaceDeleteArgs>
    ): CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>>

    /**
     * Update one Space.
     * @param {SpaceUpdateArgs} args - Arguments to update one Space.
     * @example
     * // Update one Space
     * const space = await prisma.space.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpaceUpdateArgs>(
      args: SelectSubset<T, SpaceUpdateArgs>
    ): CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>>

    /**
     * Delete zero or more Spaces.
     * @param {SpaceDeleteManyArgs} args - Arguments to filter Spaces to delete.
     * @example
     * // Delete a few Spaces
     * const { count } = await prisma.space.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpaceDeleteManyArgs>(
      args?: SelectSubset<T, SpaceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spaces
     * const space = await prisma.space.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpaceUpdateManyArgs>(
      args: SelectSubset<T, SpaceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Space.
     * @param {SpaceUpsertArgs} args - Arguments to update or create a Space.
     * @example
     * // Update or create a Space
     * const space = await prisma.space.upsert({
     *   create: {
     *     // ... data to create a Space
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Space we want to update
     *   }
     * })
    **/
    upsert<T extends SpaceUpsertArgs>(
      args: SelectSubset<T, SpaceUpsertArgs>
    ): CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>>

    /**
     * Find one Space that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SpaceFindUniqueOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SpaceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>>

    /**
     * Find the first Space that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceFindFirstOrThrowArgs} args - Arguments to find a Space
     * @example
     * // Get one Space
     * const space = await prisma.space.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SpaceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SpaceClient<Space>, Prisma__SpaceClient<SpaceGetPayload<T>>>

    /**
     * Count the number of Spaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceCountArgs} args - Arguments to filter Spaces to count.
     * @example
     * // Count the number of Spaces
     * const count = await prisma.space.count({
     *   where: {
     *     // ... the filter for the Spaces we want to count
     *   }
     * })
    **/
    count<T extends SpaceCountArgs>(
      args?: Subset<T, SpaceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpaceAggregateArgs>(args: Subset<T, SpaceAggregateArgs>): PrismaPromise<GetSpaceAggregateType<T>>

    /**
     * Group by Space.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceGroupByArgs} args - Group by arguments.
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
      T extends SpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceGroupByArgs['orderBy'] }
        : { orderBy?: SpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Space.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpaceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chat<T extends ChatArgs = {}>(args?: Subset<T, ChatArgs>): CheckSelect<T, Prisma__ChatClient<Chat | null >, Prisma__ChatClient<ChatGetPayload<T> | null >>;

    parent<T extends SpaceArgs = {}>(args?: Subset<T, SpaceArgs>): CheckSelect<T, Prisma__SpaceClient<Space | null >, Prisma__SpaceClient<SpaceGetPayload<T> | null >>;

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    settings<T extends SpaceSettingsArgs = {}>(args?: Subset<T, SpaceSettingsArgs>): CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings | null >, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T> | null >>;

    view<T extends SpaceViewArgs = {}>(args?: Subset<T, SpaceViewArgs>): CheckSelect<T, Prisma__SpaceViewClient<SpaceView | null >, Prisma__SpaceViewClient<SpaceViewGetPayload<T> | null >>;

    subspaces<T extends SpaceFindManyArgs = {}>(args?: Subset<T, SpaceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Space>>, PrismaPromise<Array<SpaceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Space base type for findUnique actions
   */
  export type SpaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
    /**
     * Filter, which Space to fetch.
     * 
    **/
    where: SpaceWhereUniqueInput
  }

  /**
   * Space: findUnique
   */
  export interface SpaceFindUniqueArgs extends SpaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Space base type for findFirst actions
   */
  export type SpaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
    /**
     * Filter, which Space to fetch.
     * 
    **/
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spaces.
     * 
    **/
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spaces.
     * 
    **/
    distinct?: Enumerable<SpaceScalarFieldEnum>
  }

  /**
   * Space: findFirst
   */
  export interface SpaceFindFirstArgs extends SpaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Space findMany
   */
  export type SpaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
    /**
     * Filter, which Spaces to fetch.
     * 
    **/
    where?: SpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spaces to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spaces.
     * 
    **/
    cursor?: SpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spaces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SpaceScalarFieldEnum>
  }


  /**
   * Space create
   */
  export type SpaceCreateArgs = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
    /**
     * The data needed to create a Space.
     * 
    **/
    data: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
  }


  /**
   * Space createMany
   */
  export type SpaceCreateManyArgs = {
    /**
     * The data used to create many Spaces.
     * 
    **/
    data: Enumerable<SpaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Space update
   */
  export type SpaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
    /**
     * The data needed to update a Space.
     * 
    **/
    data: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
    /**
     * Choose, which Space to update.
     * 
    **/
    where: SpaceWhereUniqueInput
  }


  /**
   * Space updateMany
   */
  export type SpaceUpdateManyArgs = {
    /**
     * The data used to update Spaces.
     * 
    **/
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyInput>
    /**
     * Filter which Spaces to update
     * 
    **/
    where?: SpaceWhereInput
  }


  /**
   * Space upsert
   */
  export type SpaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
    /**
     * The filter to search for the Space to update in case it exists.
     * 
    **/
    where: SpaceWhereUniqueInput
    /**
     * In case the Space found by the `where` argument doesn't exist, create a new Space with this data.
     * 
    **/
    create: XOR<SpaceCreateInput, SpaceUncheckedCreateInput>
    /**
     * In case the Space was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SpaceUpdateInput, SpaceUncheckedUpdateInput>
  }


  /**
   * Space delete
   */
  export type SpaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
    /**
     * Filter which Space to delete.
     * 
    **/
    where: SpaceWhereUniqueInput
  }


  /**
   * Space deleteMany
   */
  export type SpaceDeleteManyArgs = {
    /**
     * Filter which Spaces to delete
     * 
    **/
    where?: SpaceWhereInput
  }


  /**
   * Space: findUniqueOrThrow
   */
  export type SpaceFindUniqueOrThrowArgs = SpaceFindUniqueArgsBase
      

  /**
   * Space: findFirstOrThrow
   */
  export type SpaceFindFirstOrThrowArgs = SpaceFindFirstArgsBase
      

  /**
   * Space without action
   */
  export type SpaceArgs = {
    /**
     * Select specific fields to fetch from the Space
     * 
    **/
    select?: SpaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceInclude | null
  }



  /**
   * Model SpaceView
   */


  export type AggregateSpaceView = {
    _count: SpaceViewCountAggregateOutputType | null
    _min: SpaceViewMinAggregateOutputType | null
    _max: SpaceViewMaxAggregateOutputType | null
  }

  export type SpaceViewMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    spaceId: string | null
  }

  export type SpaceViewMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    spaceId: string | null
  }

  export type SpaceViewCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    localId: number
    spaceId: number
    _all: number
  }


  export type SpaceViewMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    spaceId?: true
  }

  export type SpaceViewMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    spaceId?: true
  }

  export type SpaceViewCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    spaceId?: true
    _all?: true
  }

  export type SpaceViewAggregateArgs = {
    /**
     * Filter which SpaceView to aggregate.
     * 
    **/
    where?: SpaceViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceViews to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SpaceViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceViews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceViews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpaceViews
    **/
    _count?: true | SpaceViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceViewMaxAggregateInputType
  }

  export type GetSpaceViewAggregateType<T extends SpaceViewAggregateArgs> = {
        [P in keyof T & keyof AggregateSpaceView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpaceView[P]>
      : GetScalarType<T[P], AggregateSpaceView[P]>
  }




  export type SpaceViewGroupByArgs = {
    where?: SpaceViewWhereInput
    orderBy?: Enumerable<SpaceViewOrderByWithAggregationInput>
    by: Array<SpaceViewScalarFieldEnum>
    having?: SpaceViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceViewCountAggregateInputType | true
    _min?: SpaceViewMinAggregateInputType
    _max?: SpaceViewMaxAggregateInputType
  }


  export type SpaceViewGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    localId: string
    spaceId: string
    _count: SpaceViewCountAggregateOutputType | null
    _min: SpaceViewMinAggregateOutputType | null
    _max: SpaceViewMaxAggregateOutputType | null
  }

  type GetSpaceViewGroupByPayload<T extends SpaceViewGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SpaceViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceViewGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceViewGroupByOutputType[P]>
        }
      >
    >


  export type SpaceViewSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localId?: boolean
    spaceId?: boolean
    space?: boolean | SpaceArgs
  }

  export type SpaceViewInclude = {
    space?: boolean | SpaceArgs
  }

  export type SpaceViewGetPayload<
    S extends boolean | null | undefined | SpaceViewArgs,
    U = keyof S
      > = S extends true
        ? SpaceView
    : S extends undefined
    ? never
    : S extends SpaceViewArgs | SpaceViewFindManyArgs
    ?'include' extends U
    ? SpaceView  & {
    [P in TrueKeys<S['include']>]:
        P extends 'space' ? SpaceGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'space' ? SpaceGetPayload<S['select'][P]> | null :  P extends keyof SpaceView ? SpaceView[P] : never
  } 
    : SpaceView
  : SpaceView


  type SpaceViewCountArgs = Merge<
    Omit<SpaceViewFindManyArgs, 'select' | 'include'> & {
      select?: SpaceViewCountAggregateInputType | true
    }
  >

  export interface SpaceViewDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SpaceView that matches the filter.
     * @param {SpaceViewFindUniqueArgs} args - Arguments to find a SpaceView
     * @example
     * // Get one SpaceView
     * const spaceView = await prisma.spaceView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpaceViewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SpaceViewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SpaceView'> extends True ? CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>> : CheckSelect<T, Prisma__SpaceViewClient<SpaceView | null >, Prisma__SpaceViewClient<SpaceViewGetPayload<T> | null >>

    /**
     * Find the first SpaceView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceViewFindFirstArgs} args - Arguments to find a SpaceView
     * @example
     * // Get one SpaceView
     * const spaceView = await prisma.spaceView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpaceViewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SpaceViewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SpaceView'> extends True ? CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>> : CheckSelect<T, Prisma__SpaceViewClient<SpaceView | null >, Prisma__SpaceViewClient<SpaceViewGetPayload<T> | null >>

    /**
     * Find zero or more SpaceViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceViewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpaceViews
     * const spaceViews = await prisma.spaceView.findMany()
     * 
     * // Get first 10 SpaceViews
     * const spaceViews = await prisma.spaceView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceViewWithIdOnly = await prisma.spaceView.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpaceViewFindManyArgs>(
      args?: SelectSubset<T, SpaceViewFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SpaceView>>, PrismaPromise<Array<SpaceViewGetPayload<T>>>>

    /**
     * Create a SpaceView.
     * @param {SpaceViewCreateArgs} args - Arguments to create a SpaceView.
     * @example
     * // Create one SpaceView
     * const SpaceView = await prisma.spaceView.create({
     *   data: {
     *     // ... data to create a SpaceView
     *   }
     * })
     * 
    **/
    create<T extends SpaceViewCreateArgs>(
      args: SelectSubset<T, SpaceViewCreateArgs>
    ): CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>>

    /**
     * Create many SpaceViews.
     *     @param {SpaceViewCreateManyArgs} args - Arguments to create many SpaceViews.
     *     @example
     *     // Create many SpaceViews
     *     const spaceView = await prisma.spaceView.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpaceViewCreateManyArgs>(
      args?: SelectSubset<T, SpaceViewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SpaceView.
     * @param {SpaceViewDeleteArgs} args - Arguments to delete one SpaceView.
     * @example
     * // Delete one SpaceView
     * const SpaceView = await prisma.spaceView.delete({
     *   where: {
     *     // ... filter to delete one SpaceView
     *   }
     * })
     * 
    **/
    delete<T extends SpaceViewDeleteArgs>(
      args: SelectSubset<T, SpaceViewDeleteArgs>
    ): CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>>

    /**
     * Update one SpaceView.
     * @param {SpaceViewUpdateArgs} args - Arguments to update one SpaceView.
     * @example
     * // Update one SpaceView
     * const spaceView = await prisma.spaceView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpaceViewUpdateArgs>(
      args: SelectSubset<T, SpaceViewUpdateArgs>
    ): CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>>

    /**
     * Delete zero or more SpaceViews.
     * @param {SpaceViewDeleteManyArgs} args - Arguments to filter SpaceViews to delete.
     * @example
     * // Delete a few SpaceViews
     * const { count } = await prisma.spaceView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpaceViewDeleteManyArgs>(
      args?: SelectSubset<T, SpaceViewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpaceViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpaceViews
     * const spaceView = await prisma.spaceView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpaceViewUpdateManyArgs>(
      args: SelectSubset<T, SpaceViewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SpaceView.
     * @param {SpaceViewUpsertArgs} args - Arguments to update or create a SpaceView.
     * @example
     * // Update or create a SpaceView
     * const spaceView = await prisma.spaceView.upsert({
     *   create: {
     *     // ... data to create a SpaceView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpaceView we want to update
     *   }
     * })
    **/
    upsert<T extends SpaceViewUpsertArgs>(
      args: SelectSubset<T, SpaceViewUpsertArgs>
    ): CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>>

    /**
     * Find one SpaceView that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SpaceViewFindUniqueOrThrowArgs} args - Arguments to find a SpaceView
     * @example
     * // Get one SpaceView
     * const spaceView = await prisma.spaceView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpaceViewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SpaceViewFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>>

    /**
     * Find the first SpaceView that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceViewFindFirstOrThrowArgs} args - Arguments to find a SpaceView
     * @example
     * // Get one SpaceView
     * const spaceView = await prisma.spaceView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpaceViewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SpaceViewFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SpaceViewClient<SpaceView>, Prisma__SpaceViewClient<SpaceViewGetPayload<T>>>

    /**
     * Count the number of SpaceViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceViewCountArgs} args - Arguments to filter SpaceViews to count.
     * @example
     * // Count the number of SpaceViews
     * const count = await prisma.spaceView.count({
     *   where: {
     *     // ... the filter for the SpaceViews we want to count
     *   }
     * })
    **/
    count<T extends SpaceViewCountArgs>(
      args?: Subset<T, SpaceViewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpaceView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpaceViewAggregateArgs>(args: Subset<T, SpaceViewAggregateArgs>): PrismaPromise<GetSpaceViewAggregateType<T>>

    /**
     * Group by SpaceView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceViewGroupByArgs} args - Group by arguments.
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
      T extends SpaceViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceViewGroupByArgs['orderBy'] }
        : { orderBy?: SpaceViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SpaceViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceViewGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpaceView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpaceViewClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    space<T extends SpaceArgs = {}>(args?: Subset<T, SpaceArgs>): CheckSelect<T, Prisma__SpaceClient<Space | null >, Prisma__SpaceClient<SpaceGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SpaceView base type for findUnique actions
   */
  export type SpaceViewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
    /**
     * Filter, which SpaceView to fetch.
     * 
    **/
    where: SpaceViewWhereUniqueInput
  }

  /**
   * SpaceView: findUnique
   */
  export interface SpaceViewFindUniqueArgs extends SpaceViewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpaceView base type for findFirst actions
   */
  export type SpaceViewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
    /**
     * Filter, which SpaceView to fetch.
     * 
    **/
    where?: SpaceViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceViews to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceViews.
     * 
    **/
    cursor?: SpaceViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceViews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceViews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceViews.
     * 
    **/
    distinct?: Enumerable<SpaceViewScalarFieldEnum>
  }

  /**
   * SpaceView: findFirst
   */
  export interface SpaceViewFindFirstArgs extends SpaceViewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpaceView findMany
   */
  export type SpaceViewFindManyArgs = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
    /**
     * Filter, which SpaceViews to fetch.
     * 
    **/
    where?: SpaceViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceViews to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpaceViews.
     * 
    **/
    cursor?: SpaceViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceViews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceViews.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SpaceViewScalarFieldEnum>
  }


  /**
   * SpaceView create
   */
  export type SpaceViewCreateArgs = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
    /**
     * The data needed to create a SpaceView.
     * 
    **/
    data: XOR<SpaceViewCreateInput, SpaceViewUncheckedCreateInput>
  }


  /**
   * SpaceView createMany
   */
  export type SpaceViewCreateManyArgs = {
    /**
     * The data used to create many SpaceViews.
     * 
    **/
    data: Enumerable<SpaceViewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SpaceView update
   */
  export type SpaceViewUpdateArgs = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
    /**
     * The data needed to update a SpaceView.
     * 
    **/
    data: XOR<SpaceViewUpdateInput, SpaceViewUncheckedUpdateInput>
    /**
     * Choose, which SpaceView to update.
     * 
    **/
    where: SpaceViewWhereUniqueInput
  }


  /**
   * SpaceView updateMany
   */
  export type SpaceViewUpdateManyArgs = {
    /**
     * The data used to update SpaceViews.
     * 
    **/
    data: XOR<SpaceViewUpdateManyMutationInput, SpaceViewUncheckedUpdateManyInput>
    /**
     * Filter which SpaceViews to update
     * 
    **/
    where?: SpaceViewWhereInput
  }


  /**
   * SpaceView upsert
   */
  export type SpaceViewUpsertArgs = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
    /**
     * The filter to search for the SpaceView to update in case it exists.
     * 
    **/
    where: SpaceViewWhereUniqueInput
    /**
     * In case the SpaceView found by the `where` argument doesn't exist, create a new SpaceView with this data.
     * 
    **/
    create: XOR<SpaceViewCreateInput, SpaceViewUncheckedCreateInput>
    /**
     * In case the SpaceView was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SpaceViewUpdateInput, SpaceViewUncheckedUpdateInput>
  }


  /**
   * SpaceView delete
   */
  export type SpaceViewDeleteArgs = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
    /**
     * Filter which SpaceView to delete.
     * 
    **/
    where: SpaceViewWhereUniqueInput
  }


  /**
   * SpaceView deleteMany
   */
  export type SpaceViewDeleteManyArgs = {
    /**
     * Filter which SpaceViews to delete
     * 
    **/
    where?: SpaceViewWhereInput
  }


  /**
   * SpaceView: findUniqueOrThrow
   */
  export type SpaceViewFindUniqueOrThrowArgs = SpaceViewFindUniqueArgsBase
      

  /**
   * SpaceView: findFirstOrThrow
   */
  export type SpaceViewFindFirstOrThrowArgs = SpaceViewFindFirstArgsBase
      

  /**
   * SpaceView without action
   */
  export type SpaceViewArgs = {
    /**
     * Select specific fields to fetch from the SpaceView
     * 
    **/
    select?: SpaceViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceViewInclude | null
  }



  /**
   * Model SpaceSettings
   */


  export type AggregateSpaceSettings = {
    _count: SpaceSettingsCountAggregateOutputType | null
    _min: SpaceSettingsMinAggregateOutputType | null
    _max: SpaceSettingsMaxAggregateOutputType | null
  }

  export type SpaceSettingsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    spaceId: string | null
  }

  export type SpaceSettingsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    spaceId: string | null
  }

  export type SpaceSettingsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    localId: number
    spaceId: number
    _all: number
  }


  export type SpaceSettingsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    spaceId?: true
  }

  export type SpaceSettingsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    spaceId?: true
  }

  export type SpaceSettingsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    spaceId?: true
    _all?: true
  }

  export type SpaceSettingsAggregateArgs = {
    /**
     * Filter which SpaceSettings to aggregate.
     * 
    **/
    where?: SpaceSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SpaceSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceSettings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpaceSettings
    **/
    _count?: true | SpaceSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpaceSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpaceSettingsMaxAggregateInputType
  }

  export type GetSpaceSettingsAggregateType<T extends SpaceSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSpaceSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpaceSettings[P]>
      : GetScalarType<T[P], AggregateSpaceSettings[P]>
  }




  export type SpaceSettingsGroupByArgs = {
    where?: SpaceSettingsWhereInput
    orderBy?: Enumerable<SpaceSettingsOrderByWithAggregationInput>
    by: Array<SpaceSettingsScalarFieldEnum>
    having?: SpaceSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpaceSettingsCountAggregateInputType | true
    _min?: SpaceSettingsMinAggregateInputType
    _max?: SpaceSettingsMaxAggregateInputType
  }


  export type SpaceSettingsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    localId: string
    spaceId: string
    _count: SpaceSettingsCountAggregateOutputType | null
    _min: SpaceSettingsMinAggregateOutputType | null
    _max: SpaceSettingsMaxAggregateOutputType | null
  }

  type GetSpaceSettingsGroupByPayload<T extends SpaceSettingsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SpaceSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpaceSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpaceSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SpaceSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SpaceSettingsSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localId?: boolean
    spaceId?: boolean
    space?: boolean | SpaceArgs
  }

  export type SpaceSettingsInclude = {
    space?: boolean | SpaceArgs
  }

  export type SpaceSettingsGetPayload<
    S extends boolean | null | undefined | SpaceSettingsArgs,
    U = keyof S
      > = S extends true
        ? SpaceSettings
    : S extends undefined
    ? never
    : S extends SpaceSettingsArgs | SpaceSettingsFindManyArgs
    ?'include' extends U
    ? SpaceSettings  & {
    [P in TrueKeys<S['include']>]:
        P extends 'space' ? SpaceGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'space' ? SpaceGetPayload<S['select'][P]> | null :  P extends keyof SpaceSettings ? SpaceSettings[P] : never
  } 
    : SpaceSettings
  : SpaceSettings


  type SpaceSettingsCountArgs = Merge<
    Omit<SpaceSettingsFindManyArgs, 'select' | 'include'> & {
      select?: SpaceSettingsCountAggregateInputType | true
    }
  >

  export interface SpaceSettingsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SpaceSettings that matches the filter.
     * @param {SpaceSettingsFindUniqueArgs} args - Arguments to find a SpaceSettings
     * @example
     * // Get one SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpaceSettingsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SpaceSettingsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SpaceSettings'> extends True ? CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>> : CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings | null >, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T> | null >>

    /**
     * Find the first SpaceSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceSettingsFindFirstArgs} args - Arguments to find a SpaceSettings
     * @example
     * // Get one SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpaceSettingsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SpaceSettingsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SpaceSettings'> extends True ? CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>> : CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings | null >, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T> | null >>

    /**
     * Find zero or more SpaceSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceSettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.findMany()
     * 
     * // Get first 10 SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spaceSettingsWithIdOnly = await prisma.spaceSettings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpaceSettingsFindManyArgs>(
      args?: SelectSubset<T, SpaceSettingsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SpaceSettings>>, PrismaPromise<Array<SpaceSettingsGetPayload<T>>>>

    /**
     * Create a SpaceSettings.
     * @param {SpaceSettingsCreateArgs} args - Arguments to create a SpaceSettings.
     * @example
     * // Create one SpaceSettings
     * const SpaceSettings = await prisma.spaceSettings.create({
     *   data: {
     *     // ... data to create a SpaceSettings
     *   }
     * })
     * 
    **/
    create<T extends SpaceSettingsCreateArgs>(
      args: SelectSubset<T, SpaceSettingsCreateArgs>
    ): CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>>

    /**
     * Create many SpaceSettings.
     *     @param {SpaceSettingsCreateManyArgs} args - Arguments to create many SpaceSettings.
     *     @example
     *     // Create many SpaceSettings
     *     const spaceSettings = await prisma.spaceSettings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpaceSettingsCreateManyArgs>(
      args?: SelectSubset<T, SpaceSettingsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SpaceSettings.
     * @param {SpaceSettingsDeleteArgs} args - Arguments to delete one SpaceSettings.
     * @example
     * // Delete one SpaceSettings
     * const SpaceSettings = await prisma.spaceSettings.delete({
     *   where: {
     *     // ... filter to delete one SpaceSettings
     *   }
     * })
     * 
    **/
    delete<T extends SpaceSettingsDeleteArgs>(
      args: SelectSubset<T, SpaceSettingsDeleteArgs>
    ): CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>>

    /**
     * Update one SpaceSettings.
     * @param {SpaceSettingsUpdateArgs} args - Arguments to update one SpaceSettings.
     * @example
     * // Update one SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpaceSettingsUpdateArgs>(
      args: SelectSubset<T, SpaceSettingsUpdateArgs>
    ): CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>>

    /**
     * Delete zero or more SpaceSettings.
     * @param {SpaceSettingsDeleteManyArgs} args - Arguments to filter SpaceSettings to delete.
     * @example
     * // Delete a few SpaceSettings
     * const { count } = await prisma.spaceSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpaceSettingsDeleteManyArgs>(
      args?: SelectSubset<T, SpaceSettingsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpaceSettingsUpdateManyArgs>(
      args: SelectSubset<T, SpaceSettingsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SpaceSettings.
     * @param {SpaceSettingsUpsertArgs} args - Arguments to update or create a SpaceSettings.
     * @example
     * // Update or create a SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.upsert({
     *   create: {
     *     // ... data to create a SpaceSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpaceSettings we want to update
     *   }
     * })
    **/
    upsert<T extends SpaceSettingsUpsertArgs>(
      args: SelectSubset<T, SpaceSettingsUpsertArgs>
    ): CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>>

    /**
     * Find one SpaceSettings that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SpaceSettingsFindUniqueOrThrowArgs} args - Arguments to find a SpaceSettings
     * @example
     * // Get one SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpaceSettingsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SpaceSettingsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>>

    /**
     * Find the first SpaceSettings that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceSettingsFindFirstOrThrowArgs} args - Arguments to find a SpaceSettings
     * @example
     * // Get one SpaceSettings
     * const spaceSettings = await prisma.spaceSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpaceSettingsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SpaceSettingsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SpaceSettingsClient<SpaceSettings>, Prisma__SpaceSettingsClient<SpaceSettingsGetPayload<T>>>

    /**
     * Count the number of SpaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceSettingsCountArgs} args - Arguments to filter SpaceSettings to count.
     * @example
     * // Count the number of SpaceSettings
     * const count = await prisma.spaceSettings.count({
     *   where: {
     *     // ... the filter for the SpaceSettings we want to count
     *   }
     * })
    **/
    count<T extends SpaceSettingsCountArgs>(
      args?: Subset<T, SpaceSettingsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpaceSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpaceSettingsAggregateArgs>(args: Subset<T, SpaceSettingsAggregateArgs>): PrismaPromise<GetSpaceSettingsAggregateType<T>>

    /**
     * Group by SpaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpaceSettingsGroupByArgs} args - Group by arguments.
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
      T extends SpaceSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpaceSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SpaceSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SpaceSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpaceSettingsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpaceSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpaceSettingsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    space<T extends SpaceArgs = {}>(args?: Subset<T, SpaceArgs>): CheckSelect<T, Prisma__SpaceClient<Space | null >, Prisma__SpaceClient<SpaceGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SpaceSettings base type for findUnique actions
   */
  export type SpaceSettingsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
    /**
     * Filter, which SpaceSettings to fetch.
     * 
    **/
    where: SpaceSettingsWhereUniqueInput
  }

  /**
   * SpaceSettings: findUnique
   */
  export interface SpaceSettingsFindUniqueArgs extends SpaceSettingsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpaceSettings base type for findFirst actions
   */
  export type SpaceSettingsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
    /**
     * Filter, which SpaceSettings to fetch.
     * 
    **/
    where?: SpaceSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpaceSettings.
     * 
    **/
    cursor?: SpaceSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceSettings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpaceSettings.
     * 
    **/
    distinct?: Enumerable<SpaceSettingsScalarFieldEnum>
  }

  /**
   * SpaceSettings: findFirst
   */
  export interface SpaceSettingsFindFirstArgs extends SpaceSettingsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpaceSettings findMany
   */
  export type SpaceSettingsFindManyArgs = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
    /**
     * Filter, which SpaceSettings to fetch.
     * 
    **/
    where?: SpaceSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpaceSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<SpaceSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpaceSettings.
     * 
    **/
    cursor?: SpaceSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpaceSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpaceSettings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SpaceSettingsScalarFieldEnum>
  }


  /**
   * SpaceSettings create
   */
  export type SpaceSettingsCreateArgs = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
    /**
     * The data needed to create a SpaceSettings.
     * 
    **/
    data: XOR<SpaceSettingsCreateInput, SpaceSettingsUncheckedCreateInput>
  }


  /**
   * SpaceSettings createMany
   */
  export type SpaceSettingsCreateManyArgs = {
    /**
     * The data used to create many SpaceSettings.
     * 
    **/
    data: Enumerable<SpaceSettingsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SpaceSettings update
   */
  export type SpaceSettingsUpdateArgs = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
    /**
     * The data needed to update a SpaceSettings.
     * 
    **/
    data: XOR<SpaceSettingsUpdateInput, SpaceSettingsUncheckedUpdateInput>
    /**
     * Choose, which SpaceSettings to update.
     * 
    **/
    where: SpaceSettingsWhereUniqueInput
  }


  /**
   * SpaceSettings updateMany
   */
  export type SpaceSettingsUpdateManyArgs = {
    /**
     * The data used to update SpaceSettings.
     * 
    **/
    data: XOR<SpaceSettingsUpdateManyMutationInput, SpaceSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SpaceSettings to update
     * 
    **/
    where?: SpaceSettingsWhereInput
  }


  /**
   * SpaceSettings upsert
   */
  export type SpaceSettingsUpsertArgs = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
    /**
     * The filter to search for the SpaceSettings to update in case it exists.
     * 
    **/
    where: SpaceSettingsWhereUniqueInput
    /**
     * In case the SpaceSettings found by the `where` argument doesn't exist, create a new SpaceSettings with this data.
     * 
    **/
    create: XOR<SpaceSettingsCreateInput, SpaceSettingsUncheckedCreateInput>
    /**
     * In case the SpaceSettings was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SpaceSettingsUpdateInput, SpaceSettingsUncheckedUpdateInput>
  }


  /**
   * SpaceSettings delete
   */
  export type SpaceSettingsDeleteArgs = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
    /**
     * Filter which SpaceSettings to delete.
     * 
    **/
    where: SpaceSettingsWhereUniqueInput
  }


  /**
   * SpaceSettings deleteMany
   */
  export type SpaceSettingsDeleteManyArgs = {
    /**
     * Filter which SpaceSettings to delete
     * 
    **/
    where?: SpaceSettingsWhereInput
  }


  /**
   * SpaceSettings: findUniqueOrThrow
   */
  export type SpaceSettingsFindUniqueOrThrowArgs = SpaceSettingsFindUniqueArgsBase
      

  /**
   * SpaceSettings: findFirstOrThrow
   */
  export type SpaceSettingsFindFirstOrThrowArgs = SpaceSettingsFindFirstArgsBase
      

  /**
   * SpaceSettings without action
   */
  export type SpaceSettingsArgs = {
    /**
     * Select specific fields to fetch from the SpaceSettings
     * 
    **/
    select?: SpaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SpaceSettingsInclude | null
  }



  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    settingsId: string | null
    workspaceId: string | null
    ownerId: string | null
    chatId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    settingsId: string | null
    workspaceId: string | null
    ownerId: string | null
    chatId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    settingsId: number
    workspaceId: number
    ownerId: number
    chatId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    settingsId?: true
    workspaceId?: true
    ownerId?: true
    chatId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    settingsId?: true
    workspaceId?: true
    ownerId?: true
    chatId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    settingsId?: true
    workspaceId?: true
    ownerId?: true
    chatId?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: Array<ProjectScalarFieldEnum>
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string | null
    settingsId: string
    workspaceId: string
    ownerId: string
    chatId: string | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    settingsId?: boolean
    workspaceId?: boolean
    ownerId?: boolean
    chatId?: boolean
    chat?: boolean | ChatArgs
    owner?: boolean | UserArgs
    settings?: boolean | ProjectSettingsArgs
    workspace?: boolean | WorkspaceArgs
    users?: boolean | ProjectsOnUsersFindManyArgs
    spaces?: boolean | SpaceFindManyArgs
    tasks?: boolean | TaskFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectInclude = {
    chat?: boolean | ChatArgs
    owner?: boolean | UserArgs
    settings?: boolean | ProjectSettingsArgs
    workspace?: boolean | WorkspaceArgs
    users?: boolean | ProjectsOnUsersFindManyArgs
    spaces?: boolean | SpaceFindManyArgs
    tasks?: boolean | TaskFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectArgs,
    U = keyof S
      > = S extends true
        ? Project
    : S extends undefined
    ? never
    : S extends ProjectArgs | ProjectFindManyArgs
    ?'include' extends U
    ? Project  & {
    [P in TrueKeys<S['include']>]:
        P extends 'chat' ? ChatGetPayload<S['include'][P]> | null :
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'settings' ? ProjectSettingsGetPayload<S['include'][P]> :
        P extends 'workspace' ? WorkspaceGetPayload<S['include'][P]> :
        P extends 'users' ? Array < ProjectsOnUsersGetPayload<S['include'][P]>>  :
        P extends 'spaces' ? Array < SpaceGetPayload<S['include'][P]>>  :
        P extends 'tasks' ? Array < TaskGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'chat' ? ChatGetPayload<S['select'][P]> | null :
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'settings' ? ProjectSettingsGetPayload<S['select'][P]> :
        P extends 'workspace' ? WorkspaceGetPayload<S['select'][P]> :
        P extends 'users' ? Array < ProjectsOnUsersGetPayload<S['select'][P]>>  :
        P extends 'spaces' ? Array < SpaceGetPayload<S['select'][P]>>  :
        P extends 'tasks' ? Array < TaskGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Project ? Project[P] : never
  } 
    : Project
  : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Find one Project that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Find the first Project that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chat<T extends ChatArgs = {}>(args?: Subset<T, ChatArgs>): CheckSelect<T, Prisma__ChatClient<Chat | null >, Prisma__ChatClient<ChatGetPayload<T> | null >>;

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    settings<T extends ProjectSettingsArgs = {}>(args?: Subset<T, ProjectSettingsArgs>): CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings | null >, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T> | null >>;

    workspace<T extends WorkspaceArgs = {}>(args?: Subset<T, WorkspaceArgs>): CheckSelect<T, Prisma__WorkspaceClient<Workspace | null >, Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null >>;

    users<T extends ProjectsOnUsersFindManyArgs = {}>(args?: Subset<T, ProjectsOnUsersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProjectsOnUsers>>, PrismaPromise<Array<ProjectsOnUsersGetPayload<T>>>>;

    spaces<T extends SpaceFindManyArgs = {}>(args?: Subset<T, SpaceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Space>>, PrismaPromise<Array<SpaceGetPayload<T>>>>;

    tasks<T extends TaskFindManyArgs = {}>(args?: Subset<T, TaskFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Task>>, PrismaPromise<Array<TaskGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Project base type for findUnique actions
   */
  export type ProjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where: ProjectWhereUniqueInput
  }

  /**
   * Project: findUnique
   */
  export interface ProjectFindUniqueArgs extends ProjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project base type for findFirst actions
   */
  export type ProjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }

  /**
   * Project: findFirst
   */
  export interface ProjectFindFirstArgs extends ProjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     * 
    **/
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     * 
    **/
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     * 
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     * 
    **/
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project: findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs = ProjectFindUniqueArgsBase
      

  /**
   * Project: findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs = ProjectFindFirstArgsBase
      

  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model ProjectSettings
   */


  export type AggregateProjectSettings = {
    _count: ProjectSettingsCountAggregateOutputType | null
    _min: ProjectSettingsMinAggregateOutputType | null
    _max: ProjectSettingsMaxAggregateOutputType | null
  }

  export type ProjectSettingsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    projectId: string | null
  }

  export type ProjectSettingsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    projectId: string | null
  }

  export type ProjectSettingsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    localId: number
    projectId: number
    _all: number
  }


  export type ProjectSettingsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    projectId?: true
  }

  export type ProjectSettingsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    projectId?: true
  }

  export type ProjectSettingsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    projectId?: true
    _all?: true
  }

  export type ProjectSettingsAggregateArgs = {
    /**
     * Filter which ProjectSettings to aggregate.
     * 
    **/
    where?: ProjectSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSettings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSettings
    **/
    _count?: true | ProjectSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSettingsMaxAggregateInputType
  }

  export type GetProjectSettingsAggregateType<T extends ProjectSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSettings[P]>
      : GetScalarType<T[P], AggregateProjectSettings[P]>
  }




  export type ProjectSettingsGroupByArgs = {
    where?: ProjectSettingsWhereInput
    orderBy?: Enumerable<ProjectSettingsOrderByWithAggregationInput>
    by: Array<ProjectSettingsScalarFieldEnum>
    having?: ProjectSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSettingsCountAggregateInputType | true
    _min?: ProjectSettingsMinAggregateInputType
    _max?: ProjectSettingsMaxAggregateInputType
  }


  export type ProjectSettingsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    localId: string
    projectId: string
    _count: ProjectSettingsCountAggregateOutputType | null
    _min: ProjectSettingsMinAggregateOutputType | null
    _max: ProjectSettingsMaxAggregateOutputType | null
  }

  type GetProjectSettingsGroupByPayload<T extends ProjectSettingsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSettingsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSettingsSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localId?: boolean
    projectId?: boolean
    project?: boolean | ProjectArgs
  }

  export type ProjectSettingsInclude = {
    project?: boolean | ProjectArgs
  }

  export type ProjectSettingsGetPayload<
    S extends boolean | null | undefined | ProjectSettingsArgs,
    U = keyof S
      > = S extends true
        ? ProjectSettings
    : S extends undefined
    ? never
    : S extends ProjectSettingsArgs | ProjectSettingsFindManyArgs
    ?'include' extends U
    ? ProjectSettings  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<S['select'][P]> | null :  P extends keyof ProjectSettings ? ProjectSettings[P] : never
  } 
    : ProjectSettings
  : ProjectSettings


  type ProjectSettingsCountArgs = Merge<
    Omit<ProjectSettingsFindManyArgs, 'select' | 'include'> & {
      select?: ProjectSettingsCountAggregateInputType | true
    }
  >

  export interface ProjectSettingsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProjectSettings that matches the filter.
     * @param {ProjectSettingsFindUniqueArgs} args - Arguments to find a ProjectSettings
     * @example
     * // Get one ProjectSettings
     * const projectSettings = await prisma.projectSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectSettingsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectSettingsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProjectSettings'> extends True ? CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>> : CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings | null >, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T> | null >>

    /**
     * Find the first ProjectSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSettingsFindFirstArgs} args - Arguments to find a ProjectSettings
     * @example
     * // Get one ProjectSettings
     * const projectSettings = await prisma.projectSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectSettingsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectSettingsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProjectSettings'> extends True ? CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>> : CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings | null >, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T> | null >>

    /**
     * Find zero or more ProjectSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSettings
     * const projectSettings = await prisma.projectSettings.findMany()
     * 
     * // Get first 10 ProjectSettings
     * const projectSettings = await prisma.projectSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectSettingsWithIdOnly = await prisma.projectSettings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectSettingsFindManyArgs>(
      args?: SelectSubset<T, ProjectSettingsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProjectSettings>>, PrismaPromise<Array<ProjectSettingsGetPayload<T>>>>

    /**
     * Create a ProjectSettings.
     * @param {ProjectSettingsCreateArgs} args - Arguments to create a ProjectSettings.
     * @example
     * // Create one ProjectSettings
     * const ProjectSettings = await prisma.projectSettings.create({
     *   data: {
     *     // ... data to create a ProjectSettings
     *   }
     * })
     * 
    **/
    create<T extends ProjectSettingsCreateArgs>(
      args: SelectSubset<T, ProjectSettingsCreateArgs>
    ): CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>>

    /**
     * Create many ProjectSettings.
     *     @param {ProjectSettingsCreateManyArgs} args - Arguments to create many ProjectSettings.
     *     @example
     *     // Create many ProjectSettings
     *     const projectSettings = await prisma.projectSettings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectSettingsCreateManyArgs>(
      args?: SelectSubset<T, ProjectSettingsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectSettings.
     * @param {ProjectSettingsDeleteArgs} args - Arguments to delete one ProjectSettings.
     * @example
     * // Delete one ProjectSettings
     * const ProjectSettings = await prisma.projectSettings.delete({
     *   where: {
     *     // ... filter to delete one ProjectSettings
     *   }
     * })
     * 
    **/
    delete<T extends ProjectSettingsDeleteArgs>(
      args: SelectSubset<T, ProjectSettingsDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>>

    /**
     * Update one ProjectSettings.
     * @param {ProjectSettingsUpdateArgs} args - Arguments to update one ProjectSettings.
     * @example
     * // Update one ProjectSettings
     * const projectSettings = await prisma.projectSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectSettingsUpdateArgs>(
      args: SelectSubset<T, ProjectSettingsUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>>

    /**
     * Delete zero or more ProjectSettings.
     * @param {ProjectSettingsDeleteManyArgs} args - Arguments to filter ProjectSettings to delete.
     * @example
     * // Delete a few ProjectSettings
     * const { count } = await prisma.projectSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectSettingsDeleteManyArgs>(
      args?: SelectSubset<T, ProjectSettingsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSettings
     * const projectSettings = await prisma.projectSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectSettingsUpdateManyArgs>(
      args: SelectSubset<T, ProjectSettingsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectSettings.
     * @param {ProjectSettingsUpsertArgs} args - Arguments to update or create a ProjectSettings.
     * @example
     * // Update or create a ProjectSettings
     * const projectSettings = await prisma.projectSettings.upsert({
     *   create: {
     *     // ... data to create a ProjectSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSettings we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectSettingsUpsertArgs>(
      args: SelectSubset<T, ProjectSettingsUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>>

    /**
     * Find one ProjectSettings that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProjectSettingsFindUniqueOrThrowArgs} args - Arguments to find a ProjectSettings
     * @example
     * // Get one ProjectSettings
     * const projectSettings = await prisma.projectSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectSettingsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectSettingsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>>

    /**
     * Find the first ProjectSettings that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSettingsFindFirstOrThrowArgs} args - Arguments to find a ProjectSettings
     * @example
     * // Get one ProjectSettings
     * const projectSettings = await prisma.projectSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectSettingsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectSettingsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectSettingsClient<ProjectSettings>, Prisma__ProjectSettingsClient<ProjectSettingsGetPayload<T>>>

    /**
     * Count the number of ProjectSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSettingsCountArgs} args - Arguments to filter ProjectSettings to count.
     * @example
     * // Count the number of ProjectSettings
     * const count = await prisma.projectSettings.count({
     *   where: {
     *     // ... the filter for the ProjectSettings we want to count
     *   }
     * })
    **/
    count<T extends ProjectSettingsCountArgs>(
      args?: Subset<T, ProjectSettingsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectSettingsAggregateArgs>(args: Subset<T, ProjectSettingsAggregateArgs>): PrismaPromise<GetProjectSettingsAggregateType<T>>

    /**
     * Group by ProjectSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSettingsGroupByArgs} args - Group by arguments.
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
      T extends ProjectSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSettingsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSettingsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectSettingsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProjectSettings base type for findUnique actions
   */
  export type ProjectSettingsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
    /**
     * Filter, which ProjectSettings to fetch.
     * 
    **/
    where: ProjectSettingsWhereUniqueInput
  }

  /**
   * ProjectSettings: findUnique
   */
  export interface ProjectSettingsFindUniqueArgs extends ProjectSettingsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProjectSettings base type for findFirst actions
   */
  export type ProjectSettingsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
    /**
     * Filter, which ProjectSettings to fetch.
     * 
    **/
    where?: ProjectSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSettings.
     * 
    **/
    cursor?: ProjectSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSettings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSettings.
     * 
    **/
    distinct?: Enumerable<ProjectSettingsScalarFieldEnum>
  }

  /**
   * ProjectSettings: findFirst
   */
  export interface ProjectSettingsFindFirstArgs extends ProjectSettingsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProjectSettings findMany
   */
  export type ProjectSettingsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
    /**
     * Filter, which ProjectSettings to fetch.
     * 
    **/
    where?: ProjectSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSettings.
     * 
    **/
    cursor?: ProjectSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSettings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectSettingsScalarFieldEnum>
  }


  /**
   * ProjectSettings create
   */
  export type ProjectSettingsCreateArgs = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
    /**
     * The data needed to create a ProjectSettings.
     * 
    **/
    data: XOR<ProjectSettingsCreateInput, ProjectSettingsUncheckedCreateInput>
  }


  /**
   * ProjectSettings createMany
   */
  export type ProjectSettingsCreateManyArgs = {
    /**
     * The data used to create many ProjectSettings.
     * 
    **/
    data: Enumerable<ProjectSettingsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProjectSettings update
   */
  export type ProjectSettingsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
    /**
     * The data needed to update a ProjectSettings.
     * 
    **/
    data: XOR<ProjectSettingsUpdateInput, ProjectSettingsUncheckedUpdateInput>
    /**
     * Choose, which ProjectSettings to update.
     * 
    **/
    where: ProjectSettingsWhereUniqueInput
  }


  /**
   * ProjectSettings updateMany
   */
  export type ProjectSettingsUpdateManyArgs = {
    /**
     * The data used to update ProjectSettings.
     * 
    **/
    data: XOR<ProjectSettingsUpdateManyMutationInput, ProjectSettingsUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSettings to update
     * 
    **/
    where?: ProjectSettingsWhereInput
  }


  /**
   * ProjectSettings upsert
   */
  export type ProjectSettingsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
    /**
     * The filter to search for the ProjectSettings to update in case it exists.
     * 
    **/
    where: ProjectSettingsWhereUniqueInput
    /**
     * In case the ProjectSettings found by the `where` argument doesn't exist, create a new ProjectSettings with this data.
     * 
    **/
    create: XOR<ProjectSettingsCreateInput, ProjectSettingsUncheckedCreateInput>
    /**
     * In case the ProjectSettings was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectSettingsUpdateInput, ProjectSettingsUncheckedUpdateInput>
  }


  /**
   * ProjectSettings delete
   */
  export type ProjectSettingsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
    /**
     * Filter which ProjectSettings to delete.
     * 
    **/
    where: ProjectSettingsWhereUniqueInput
  }


  /**
   * ProjectSettings deleteMany
   */
  export type ProjectSettingsDeleteManyArgs = {
    /**
     * Filter which ProjectSettings to delete
     * 
    **/
    where?: ProjectSettingsWhereInput
  }


  /**
   * ProjectSettings: findUniqueOrThrow
   */
  export type ProjectSettingsFindUniqueOrThrowArgs = ProjectSettingsFindUniqueArgsBase
      

  /**
   * ProjectSettings: findFirstOrThrow
   */
  export type ProjectSettingsFindFirstOrThrowArgs = ProjectSettingsFindFirstArgsBase
      

  /**
   * ProjectSettings without action
   */
  export type ProjectSettingsArgs = {
    /**
     * Select specific fields to fetch from the ProjectSettings
     * 
    **/
    select?: ProjectSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectSettingsInclude | null
  }



  /**
   * Model Workspace
   */


  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    settingsId: string | null
    userId: string | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    settingsId: string | null
    userId: string | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    settingsId: number
    userId: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    settingsId?: true
    userId?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    settingsId?: true
    userId?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    settingsId?: true
    userId?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs = {
    /**
     * Filter which Workspace to aggregate.
     * 
    **/
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs = {
    where?: WorkspaceWhereInput
    orderBy?: Enumerable<WorkspaceOrderByWithAggregationInput>
    by: Array<WorkspaceScalarFieldEnum>
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }


  export type WorkspaceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    settingsId: string
    userId: string
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    settingsId?: boolean
    userId?: boolean
    settings?: boolean | WorkspaceSettingsArgs
    user?: boolean | UserArgs
    projects?: boolean | ProjectFindManyArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  }

  export type WorkspaceInclude = {
    settings?: boolean | WorkspaceSettingsArgs
    user?: boolean | UserArgs
    projects?: boolean | ProjectFindManyArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  }

  export type WorkspaceGetPayload<
    S extends boolean | null | undefined | WorkspaceArgs,
    U = keyof S
      > = S extends true
        ? Workspace
    : S extends undefined
    ? never
    : S extends WorkspaceArgs | WorkspaceFindManyArgs
    ?'include' extends U
    ? Workspace  & {
    [P in TrueKeys<S['include']>]:
        P extends 'settings' ? WorkspaceSettingsGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'projects' ? Array < ProjectGetPayload<S['include'][P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'settings' ? WorkspaceSettingsGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'projects' ? Array < ProjectGetPayload<S['select'][P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Workspace ? Workspace[P] : never
  } 
    : Workspace
  : Workspace


  type WorkspaceCountArgs = Merge<
    Omit<WorkspaceFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceCountAggregateInputType | true
    }
  >

  export interface WorkspaceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Workspace'> extends True ? CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>> : CheckSelect<T, Prisma__WorkspaceClient<Workspace | null >, Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null >>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Workspace'> extends True ? CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>> : CheckSelect<T, Prisma__WorkspaceClient<Workspace | null >, Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null >>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkspaceFindManyArgs>(
      args?: SelectSubset<T, WorkspaceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Workspace>>, PrismaPromise<Array<WorkspaceGetPayload<T>>>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceCreateArgs>(
      args: SelectSubset<T, WorkspaceCreateArgs>
    ): CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>>

    /**
     * Create many Workspaces.
     *     @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     *     @example
     *     // Create many Workspaces
     *     const workspace = await prisma.workspace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceDeleteArgs>(
      args: SelectSubset<T, WorkspaceDeleteArgs>
    ): CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceUpdateArgs>(
      args: SelectSubset<T, WorkspaceUpdateArgs>
    ): CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceUpsertArgs>(
      args: SelectSubset<T, WorkspaceUpsertArgs>
    ): CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>>

    /**
     * Find one Workspace that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>>

    /**
     * Find the first Workspace that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkspaceClient<Workspace>, Prisma__WorkspaceClient<WorkspaceGetPayload<T>>>

    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    settings<T extends WorkspaceSettingsArgs = {}>(args?: Subset<T, WorkspaceSettingsArgs>): CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings | null >, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    projects<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Workspace base type for findUnique actions
   */
  export type WorkspaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     * 
    **/
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace: findUnique
   */
  export interface WorkspaceFindUniqueArgs extends WorkspaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace base type for findFirst actions
   */
  export type WorkspaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     * 
    **/
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     * 
    **/
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     * 
    **/
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }

  /**
   * Workspace: findFirst
   */
  export interface WorkspaceFindFirstArgs extends WorkspaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspaces to fetch.
     * 
    **/
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     * 
    **/
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }


  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * The data needed to create a Workspace.
     * 
    **/
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }


  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs = {
    /**
     * The data used to create many Workspaces.
     * 
    **/
    data: Enumerable<WorkspaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * The data needed to update a Workspace.
     * 
    **/
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     * 
    **/
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs = {
    /**
     * The data used to update Workspaces.
     * 
    **/
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     * 
    **/
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     * 
    **/
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     * 
    **/
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }


  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
    /**
     * Filter which Workspace to delete.
     * 
    **/
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs = {
    /**
     * Filter which Workspaces to delete
     * 
    **/
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace: findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs = WorkspaceFindUniqueArgsBase
      

  /**
   * Workspace: findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs = WorkspaceFindFirstArgsBase
      

  /**
   * Workspace without action
   */
  export type WorkspaceArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     * 
    **/
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceInclude | null
  }



  /**
   * Model WorkspaceSettings
   */


  export type AggregateWorkspaceSettings = {
    _count: WorkspaceSettingsCountAggregateOutputType | null
    _min: WorkspaceSettingsMinAggregateOutputType | null
    _max: WorkspaceSettingsMaxAggregateOutputType | null
  }

  export type WorkspaceSettingsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    workspaceId: string | null
  }

  export type WorkspaceSettingsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    localId: string | null
    workspaceId: string | null
  }

  export type WorkspaceSettingsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    localId: number
    workspaceId: number
    _all: number
  }


  export type WorkspaceSettingsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    workspaceId?: true
  }

  export type WorkspaceSettingsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    workspaceId?: true
  }

  export type WorkspaceSettingsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    localId?: true
    workspaceId?: true
    _all?: true
  }

  export type WorkspaceSettingsAggregateArgs = {
    /**
     * Filter which WorkspaceSettings to aggregate.
     * 
    **/
    where?: WorkspaceSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WorkspaceSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceSettings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceSettings
    **/
    _count?: true | WorkspaceSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceSettingsMaxAggregateInputType
  }

  export type GetWorkspaceSettingsAggregateType<T extends WorkspaceSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceSettings[P]>
      : GetScalarType<T[P], AggregateWorkspaceSettings[P]>
  }




  export type WorkspaceSettingsGroupByArgs = {
    where?: WorkspaceSettingsWhereInput
    orderBy?: Enumerable<WorkspaceSettingsOrderByWithAggregationInput>
    by: Array<WorkspaceSettingsScalarFieldEnum>
    having?: WorkspaceSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceSettingsCountAggregateInputType | true
    _min?: WorkspaceSettingsMinAggregateInputType
    _max?: WorkspaceSettingsMaxAggregateInputType
  }


  export type WorkspaceSettingsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    localId: string
    workspaceId: string
    _count: WorkspaceSettingsCountAggregateOutputType | null
    _min: WorkspaceSettingsMinAggregateOutputType | null
    _max: WorkspaceSettingsMaxAggregateOutputType | null
  }

  type GetWorkspaceSettingsGroupByPayload<T extends WorkspaceSettingsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WorkspaceSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceSettingsGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSettingsSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    localId?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceArgs
  }

  export type WorkspaceSettingsInclude = {
    workspace?: boolean | WorkspaceArgs
  }

  export type WorkspaceSettingsGetPayload<
    S extends boolean | null | undefined | WorkspaceSettingsArgs,
    U = keyof S
      > = S extends true
        ? WorkspaceSettings
    : S extends undefined
    ? never
    : S extends WorkspaceSettingsArgs | WorkspaceSettingsFindManyArgs
    ?'include' extends U
    ? WorkspaceSettings  & {
    [P in TrueKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['select'][P]> | null :  P extends keyof WorkspaceSettings ? WorkspaceSettings[P] : never
  } 
    : WorkspaceSettings
  : WorkspaceSettings


  type WorkspaceSettingsCountArgs = Merge<
    Omit<WorkspaceSettingsFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceSettingsCountAggregateInputType | true
    }
  >

  export interface WorkspaceSettingsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one WorkspaceSettings that matches the filter.
     * @param {WorkspaceSettingsFindUniqueArgs} args - Arguments to find a WorkspaceSettings
     * @example
     * // Get one WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceSettingsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceSettingsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkspaceSettings'> extends True ? CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>> : CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings | null >, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T> | null >>

    /**
     * Find the first WorkspaceSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSettingsFindFirstArgs} args - Arguments to find a WorkspaceSettings
     * @example
     * // Get one WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceSettingsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceSettingsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkspaceSettings'> extends True ? CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>> : CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings | null >, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T> | null >>

    /**
     * Find zero or more WorkspaceSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.findMany()
     * 
     * // Get first 10 WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceSettingsWithIdOnly = await prisma.workspaceSettings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkspaceSettingsFindManyArgs>(
      args?: SelectSubset<T, WorkspaceSettingsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<WorkspaceSettings>>, PrismaPromise<Array<WorkspaceSettingsGetPayload<T>>>>

    /**
     * Create a WorkspaceSettings.
     * @param {WorkspaceSettingsCreateArgs} args - Arguments to create a WorkspaceSettings.
     * @example
     * // Create one WorkspaceSettings
     * const WorkspaceSettings = await prisma.workspaceSettings.create({
     *   data: {
     *     // ... data to create a WorkspaceSettings
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceSettingsCreateArgs>(
      args: SelectSubset<T, WorkspaceSettingsCreateArgs>
    ): CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>>

    /**
     * Create many WorkspaceSettings.
     *     @param {WorkspaceSettingsCreateManyArgs} args - Arguments to create many WorkspaceSettings.
     *     @example
     *     // Create many WorkspaceSettings
     *     const workspaceSettings = await prisma.workspaceSettings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceSettingsCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceSettingsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a WorkspaceSettings.
     * @param {WorkspaceSettingsDeleteArgs} args - Arguments to delete one WorkspaceSettings.
     * @example
     * // Delete one WorkspaceSettings
     * const WorkspaceSettings = await prisma.workspaceSettings.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceSettings
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceSettingsDeleteArgs>(
      args: SelectSubset<T, WorkspaceSettingsDeleteArgs>
    ): CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>>

    /**
     * Update one WorkspaceSettings.
     * @param {WorkspaceSettingsUpdateArgs} args - Arguments to update one WorkspaceSettings.
     * @example
     * // Update one WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceSettingsUpdateArgs>(
      args: SelectSubset<T, WorkspaceSettingsUpdateArgs>
    ): CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>>

    /**
     * Delete zero or more WorkspaceSettings.
     * @param {WorkspaceSettingsDeleteManyArgs} args - Arguments to filter WorkspaceSettings to delete.
     * @example
     * // Delete a few WorkspaceSettings
     * const { count } = await prisma.workspaceSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceSettingsDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceSettingsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceSettingsUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceSettingsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkspaceSettings.
     * @param {WorkspaceSettingsUpsertArgs} args - Arguments to update or create a WorkspaceSettings.
     * @example
     * // Update or create a WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.upsert({
     *   create: {
     *     // ... data to create a WorkspaceSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceSettings we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceSettingsUpsertArgs>(
      args: SelectSubset<T, WorkspaceSettingsUpsertArgs>
    ): CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>>

    /**
     * Find one WorkspaceSettings that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WorkspaceSettingsFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceSettings
     * @example
     * // Get one WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceSettingsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceSettingsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>>

    /**
     * Find the first WorkspaceSettings that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSettingsFindFirstOrThrowArgs} args - Arguments to find a WorkspaceSettings
     * @example
     * // Get one WorkspaceSettings
     * const workspaceSettings = await prisma.workspaceSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceSettingsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceSettingsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__WorkspaceSettingsClient<WorkspaceSettings>, Prisma__WorkspaceSettingsClient<WorkspaceSettingsGetPayload<T>>>

    /**
     * Count the number of WorkspaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSettingsCountArgs} args - Arguments to filter WorkspaceSettings to count.
     * @example
     * // Count the number of WorkspaceSettings
     * const count = await prisma.workspaceSettings.count({
     *   where: {
     *     // ... the filter for the WorkspaceSettings we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceSettingsCountArgs>(
      args?: Subset<T, WorkspaceSettingsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceSettingsAggregateArgs>(args: Subset<T, WorkspaceSettingsAggregateArgs>): PrismaPromise<GetWorkspaceSettingsAggregateType<T>>

    /**
     * Group by WorkspaceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSettingsGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceSettingsGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WorkspaceSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceSettingsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceSettingsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    workspace<T extends WorkspaceArgs = {}>(args?: Subset<T, WorkspaceArgs>): CheckSelect<T, Prisma__WorkspaceClient<Workspace | null >, Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * WorkspaceSettings base type for findUnique actions
   */
  export type WorkspaceSettingsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
    /**
     * Filter, which WorkspaceSettings to fetch.
     * 
    **/
    where: WorkspaceSettingsWhereUniqueInput
  }

  /**
   * WorkspaceSettings: findUnique
   */
  export interface WorkspaceSettingsFindUniqueArgs extends WorkspaceSettingsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceSettings base type for findFirst actions
   */
  export type WorkspaceSettingsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
    /**
     * Filter, which WorkspaceSettings to fetch.
     * 
    **/
    where?: WorkspaceSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceSettings.
     * 
    **/
    cursor?: WorkspaceSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceSettings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceSettings.
     * 
    **/
    distinct?: Enumerable<WorkspaceSettingsScalarFieldEnum>
  }

  /**
   * WorkspaceSettings: findFirst
   */
  export interface WorkspaceSettingsFindFirstArgs extends WorkspaceSettingsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceSettings findMany
   */
  export type WorkspaceSettingsFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
    /**
     * Filter, which WorkspaceSettings to fetch.
     * 
    **/
    where?: WorkspaceSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceSettings to fetch.
     * 
    **/
    orderBy?: Enumerable<WorkspaceSettingsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceSettings.
     * 
    **/
    cursor?: WorkspaceSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceSettings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceSettings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WorkspaceSettingsScalarFieldEnum>
  }


  /**
   * WorkspaceSettings create
   */
  export type WorkspaceSettingsCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
    /**
     * The data needed to create a WorkspaceSettings.
     * 
    **/
    data: XOR<WorkspaceSettingsCreateInput, WorkspaceSettingsUncheckedCreateInput>
  }


  /**
   * WorkspaceSettings createMany
   */
  export type WorkspaceSettingsCreateManyArgs = {
    /**
     * The data used to create many WorkspaceSettings.
     * 
    **/
    data: Enumerable<WorkspaceSettingsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkspaceSettings update
   */
  export type WorkspaceSettingsUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
    /**
     * The data needed to update a WorkspaceSettings.
     * 
    **/
    data: XOR<WorkspaceSettingsUpdateInput, WorkspaceSettingsUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceSettings to update.
     * 
    **/
    where: WorkspaceSettingsWhereUniqueInput
  }


  /**
   * WorkspaceSettings updateMany
   */
  export type WorkspaceSettingsUpdateManyArgs = {
    /**
     * The data used to update WorkspaceSettings.
     * 
    **/
    data: XOR<WorkspaceSettingsUpdateManyMutationInput, WorkspaceSettingsUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceSettings to update
     * 
    **/
    where?: WorkspaceSettingsWhereInput
  }


  /**
   * WorkspaceSettings upsert
   */
  export type WorkspaceSettingsUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
    /**
     * The filter to search for the WorkspaceSettings to update in case it exists.
     * 
    **/
    where: WorkspaceSettingsWhereUniqueInput
    /**
     * In case the WorkspaceSettings found by the `where` argument doesn't exist, create a new WorkspaceSettings with this data.
     * 
    **/
    create: XOR<WorkspaceSettingsCreateInput, WorkspaceSettingsUncheckedCreateInput>
    /**
     * In case the WorkspaceSettings was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WorkspaceSettingsUpdateInput, WorkspaceSettingsUncheckedUpdateInput>
  }


  /**
   * WorkspaceSettings delete
   */
  export type WorkspaceSettingsDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
    /**
     * Filter which WorkspaceSettings to delete.
     * 
    **/
    where: WorkspaceSettingsWhereUniqueInput
  }


  /**
   * WorkspaceSettings deleteMany
   */
  export type WorkspaceSettingsDeleteManyArgs = {
    /**
     * Filter which WorkspaceSettings to delete
     * 
    **/
    where?: WorkspaceSettingsWhereInput
  }


  /**
   * WorkspaceSettings: findUniqueOrThrow
   */
  export type WorkspaceSettingsFindUniqueOrThrowArgs = WorkspaceSettingsFindUniqueArgsBase
      

  /**
   * WorkspaceSettings: findFirstOrThrow
   */
  export type WorkspaceSettingsFindFirstOrThrowArgs = WorkspaceSettingsFindFirstArgsBase
      

  /**
   * WorkspaceSettings without action
   */
  export type WorkspaceSettingsArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceSettings
     * 
    **/
    select?: WorkspaceSettingsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WorkspaceSettingsInclude | null
  }



  /**
   * Model ProjectsOnUsers
   */


  export type AggregateProjectsOnUsers = {
    _count: ProjectsOnUsersCountAggregateOutputType | null
    _min: ProjectsOnUsersMinAggregateOutputType | null
    _max: ProjectsOnUsersMaxAggregateOutputType | null
  }

  export type ProjectsOnUsersMinAggregateOutputType = {
    projectId: string | null
    userId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type ProjectsOnUsersMaxAggregateOutputType = {
    projectId: string | null
    userId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type ProjectsOnUsersCountAggregateOutputType = {
    projectId: number
    userId: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type ProjectsOnUsersMinAggregateInputType = {
    projectId?: true
    userId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type ProjectsOnUsersMaxAggregateInputType = {
    projectId?: true
    userId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type ProjectsOnUsersCountAggregateInputType = {
    projectId?: true
    userId?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type ProjectsOnUsersAggregateArgs = {
    /**
     * Filter which ProjectsOnUsers to aggregate.
     * 
    **/
    where?: ProjectsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectsOnUsers
    **/
    _count?: true | ProjectsOnUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsOnUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsOnUsersMaxAggregateInputType
  }

  export type GetProjectsOnUsersAggregateType<T extends ProjectsOnUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectsOnUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectsOnUsers[P]>
      : GetScalarType<T[P], AggregateProjectsOnUsers[P]>
  }




  export type ProjectsOnUsersGroupByArgs = {
    where?: ProjectsOnUsersWhereInput
    orderBy?: Enumerable<ProjectsOnUsersOrderByWithAggregationInput>
    by: Array<ProjectsOnUsersScalarFieldEnum>
    having?: ProjectsOnUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsOnUsersCountAggregateInputType | true
    _min?: ProjectsOnUsersMinAggregateInputType
    _max?: ProjectsOnUsersMaxAggregateInputType
  }


  export type ProjectsOnUsersGroupByOutputType = {
    projectId: string
    userId: string
    assignedAt: Date
    assignedBy: string
    _count: ProjectsOnUsersCountAggregateOutputType | null
    _min: ProjectsOnUsersMinAggregateOutputType | null
    _max: ProjectsOnUsersMaxAggregateOutputType | null
  }

  type GetProjectsOnUsersGroupByPayload<T extends ProjectsOnUsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectsOnUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsOnUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsOnUsersGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsOnUsersGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsOnUsersSelect = {
    projectId?: boolean
    userId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    project?: boolean | ProjectArgs
    user?: boolean | UserArgs
  }

  export type ProjectsOnUsersInclude = {
    project?: boolean | ProjectArgs
    user?: boolean | UserArgs
  }

  export type ProjectsOnUsersGetPayload<
    S extends boolean | null | undefined | ProjectsOnUsersArgs,
    U = keyof S
      > = S extends true
        ? ProjectsOnUsers
    : S extends undefined
    ? never
    : S extends ProjectsOnUsersArgs | ProjectsOnUsersFindManyArgs
    ?'include' extends U
    ? ProjectsOnUsers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof ProjectsOnUsers ? ProjectsOnUsers[P] : never
  } 
    : ProjectsOnUsers
  : ProjectsOnUsers


  type ProjectsOnUsersCountArgs = Merge<
    Omit<ProjectsOnUsersFindManyArgs, 'select' | 'include'> & {
      select?: ProjectsOnUsersCountAggregateInputType | true
    }
  >

  export interface ProjectsOnUsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProjectsOnUsers that matches the filter.
     * @param {ProjectsOnUsersFindUniqueArgs} args - Arguments to find a ProjectsOnUsers
     * @example
     * // Get one ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectsOnUsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectsOnUsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProjectsOnUsers'> extends True ? CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers | null >, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T> | null >>

    /**
     * Find the first ProjectsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsOnUsersFindFirstArgs} args - Arguments to find a ProjectsOnUsers
     * @example
     * // Get one ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectsOnUsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectsOnUsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProjectsOnUsers'> extends True ? CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>> : CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers | null >, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T> | null >>

    /**
     * Find zero or more ProjectsOnUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsOnUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.findMany()
     * 
     * // Get first 10 ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectsOnUsersWithProjectIdOnly = await prisma.projectsOnUsers.findMany({ select: { projectId: true } })
     * 
    **/
    findMany<T extends ProjectsOnUsersFindManyArgs>(
      args?: SelectSubset<T, ProjectsOnUsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProjectsOnUsers>>, PrismaPromise<Array<ProjectsOnUsersGetPayload<T>>>>

    /**
     * Create a ProjectsOnUsers.
     * @param {ProjectsOnUsersCreateArgs} args - Arguments to create a ProjectsOnUsers.
     * @example
     * // Create one ProjectsOnUsers
     * const ProjectsOnUsers = await prisma.projectsOnUsers.create({
     *   data: {
     *     // ... data to create a ProjectsOnUsers
     *   }
     * })
     * 
    **/
    create<T extends ProjectsOnUsersCreateArgs>(
      args: SelectSubset<T, ProjectsOnUsersCreateArgs>
    ): CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>>

    /**
     * Create many ProjectsOnUsers.
     *     @param {ProjectsOnUsersCreateManyArgs} args - Arguments to create many ProjectsOnUsers.
     *     @example
     *     // Create many ProjectsOnUsers
     *     const projectsOnUsers = await prisma.projectsOnUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectsOnUsersCreateManyArgs>(
      args?: SelectSubset<T, ProjectsOnUsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectsOnUsers.
     * @param {ProjectsOnUsersDeleteArgs} args - Arguments to delete one ProjectsOnUsers.
     * @example
     * // Delete one ProjectsOnUsers
     * const ProjectsOnUsers = await prisma.projectsOnUsers.delete({
     *   where: {
     *     // ... filter to delete one ProjectsOnUsers
     *   }
     * })
     * 
    **/
    delete<T extends ProjectsOnUsersDeleteArgs>(
      args: SelectSubset<T, ProjectsOnUsersDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>>

    /**
     * Update one ProjectsOnUsers.
     * @param {ProjectsOnUsersUpdateArgs} args - Arguments to update one ProjectsOnUsers.
     * @example
     * // Update one ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectsOnUsersUpdateArgs>(
      args: SelectSubset<T, ProjectsOnUsersUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>>

    /**
     * Delete zero or more ProjectsOnUsers.
     * @param {ProjectsOnUsersDeleteManyArgs} args - Arguments to filter ProjectsOnUsers to delete.
     * @example
     * // Delete a few ProjectsOnUsers
     * const { count } = await prisma.projectsOnUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectsOnUsersDeleteManyArgs>(
      args?: SelectSubset<T, ProjectsOnUsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsOnUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectsOnUsersUpdateManyArgs>(
      args: SelectSubset<T, ProjectsOnUsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectsOnUsers.
     * @param {ProjectsOnUsersUpsertArgs} args - Arguments to update or create a ProjectsOnUsers.
     * @example
     * // Update or create a ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.upsert({
     *   create: {
     *     // ... data to create a ProjectsOnUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectsOnUsers we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectsOnUsersUpsertArgs>(
      args: SelectSubset<T, ProjectsOnUsersUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>>

    /**
     * Find one ProjectsOnUsers that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProjectsOnUsersFindUniqueOrThrowArgs} args - Arguments to find a ProjectsOnUsers
     * @example
     * // Get one ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectsOnUsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectsOnUsersFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>>

    /**
     * Find the first ProjectsOnUsers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsOnUsersFindFirstOrThrowArgs} args - Arguments to find a ProjectsOnUsers
     * @example
     * // Get one ProjectsOnUsers
     * const projectsOnUsers = await prisma.projectsOnUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectsOnUsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectsOnUsersFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectsOnUsersClient<ProjectsOnUsers>, Prisma__ProjectsOnUsersClient<ProjectsOnUsersGetPayload<T>>>

    /**
     * Count the number of ProjectsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsOnUsersCountArgs} args - Arguments to filter ProjectsOnUsers to count.
     * @example
     * // Count the number of ProjectsOnUsers
     * const count = await prisma.projectsOnUsers.count({
     *   where: {
     *     // ... the filter for the ProjectsOnUsers we want to count
     *   }
     * })
    **/
    count<T extends ProjectsOnUsersCountArgs>(
      args?: Subset<T, ProjectsOnUsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsOnUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsOnUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsOnUsersAggregateArgs>(args: Subset<T, ProjectsOnUsersAggregateArgs>): PrismaPromise<GetProjectsOnUsersAggregateType<T>>

    /**
     * Group by ProjectsOnUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsOnUsersGroupByArgs} args - Group by arguments.
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
      T extends ProjectsOnUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsOnUsersGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsOnUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectsOnUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsOnUsersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectsOnUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectsOnUsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProjectsOnUsers base type for findUnique actions
   */
  export type ProjectsOnUsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
    /**
     * Filter, which ProjectsOnUsers to fetch.
     * 
    **/
    where: ProjectsOnUsersWhereUniqueInput
  }

  /**
   * ProjectsOnUsers: findUnique
   */
  export interface ProjectsOnUsersFindUniqueArgs extends ProjectsOnUsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProjectsOnUsers base type for findFirst actions
   */
  export type ProjectsOnUsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
    /**
     * Filter, which ProjectsOnUsers to fetch.
     * 
    **/
    where?: ProjectsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectsOnUsers.
     * 
    **/
    cursor?: ProjectsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectsOnUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectsOnUsers.
     * 
    **/
    distinct?: Enumerable<ProjectsOnUsersScalarFieldEnum>
  }

  /**
   * ProjectsOnUsers: findFirst
   */
  export interface ProjectsOnUsersFindFirstArgs extends ProjectsOnUsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProjectsOnUsers findMany
   */
  export type ProjectsOnUsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
    /**
     * Filter, which ProjectsOnUsers to fetch.
     * 
    **/
    where?: ProjectsOnUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectsOnUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectsOnUsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectsOnUsers.
     * 
    **/
    cursor?: ProjectsOnUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectsOnUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectsOnUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectsOnUsersScalarFieldEnum>
  }


  /**
   * ProjectsOnUsers create
   */
  export type ProjectsOnUsersCreateArgs = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
    /**
     * The data needed to create a ProjectsOnUsers.
     * 
    **/
    data: XOR<ProjectsOnUsersCreateInput, ProjectsOnUsersUncheckedCreateInput>
  }


  /**
   * ProjectsOnUsers createMany
   */
  export type ProjectsOnUsersCreateManyArgs = {
    /**
     * The data used to create many ProjectsOnUsers.
     * 
    **/
    data: Enumerable<ProjectsOnUsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProjectsOnUsers update
   */
  export type ProjectsOnUsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
    /**
     * The data needed to update a ProjectsOnUsers.
     * 
    **/
    data: XOR<ProjectsOnUsersUpdateInput, ProjectsOnUsersUncheckedUpdateInput>
    /**
     * Choose, which ProjectsOnUsers to update.
     * 
    **/
    where: ProjectsOnUsersWhereUniqueInput
  }


  /**
   * ProjectsOnUsers updateMany
   */
  export type ProjectsOnUsersUpdateManyArgs = {
    /**
     * The data used to update ProjectsOnUsers.
     * 
    **/
    data: XOR<ProjectsOnUsersUpdateManyMutationInput, ProjectsOnUsersUncheckedUpdateManyInput>
    /**
     * Filter which ProjectsOnUsers to update
     * 
    **/
    where?: ProjectsOnUsersWhereInput
  }


  /**
   * ProjectsOnUsers upsert
   */
  export type ProjectsOnUsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
    /**
     * The filter to search for the ProjectsOnUsers to update in case it exists.
     * 
    **/
    where: ProjectsOnUsersWhereUniqueInput
    /**
     * In case the ProjectsOnUsers found by the `where` argument doesn't exist, create a new ProjectsOnUsers with this data.
     * 
    **/
    create: XOR<ProjectsOnUsersCreateInput, ProjectsOnUsersUncheckedCreateInput>
    /**
     * In case the ProjectsOnUsers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectsOnUsersUpdateInput, ProjectsOnUsersUncheckedUpdateInput>
  }


  /**
   * ProjectsOnUsers delete
   */
  export type ProjectsOnUsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
    /**
     * Filter which ProjectsOnUsers to delete.
     * 
    **/
    where: ProjectsOnUsersWhereUniqueInput
  }


  /**
   * ProjectsOnUsers deleteMany
   */
  export type ProjectsOnUsersDeleteManyArgs = {
    /**
     * Filter which ProjectsOnUsers to delete
     * 
    **/
    where?: ProjectsOnUsersWhereInput
  }


  /**
   * ProjectsOnUsers: findUniqueOrThrow
   */
  export type ProjectsOnUsersFindUniqueOrThrowArgs = ProjectsOnUsersFindUniqueArgsBase
      

  /**
   * ProjectsOnUsers: findFirstOrThrow
   */
  export type ProjectsOnUsersFindFirstOrThrowArgs = ProjectsOnUsersFindFirstArgsBase
      

  /**
   * ProjectsOnUsers without action
   */
  export type ProjectsOnUsersArgs = {
    /**
     * Select specific fields to fetch from the ProjectsOnUsers
     * 
    **/
    select?: ProjectsOnUsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectsOnUsersInclude | null
  }



  /**
   * Model UserAssignedTasks
   */


  export type AggregateUserAssignedTasks = {
    _count: UserAssignedTasksCountAggregateOutputType | null
    _min: UserAssignedTasksMinAggregateOutputType | null
    _max: UserAssignedTasksMaxAggregateOutputType | null
  }

  export type UserAssignedTasksMinAggregateOutputType = {
    taskId: string | null
    userId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserAssignedTasksMaxAggregateOutputType = {
    taskId: string | null
    userId: string | null
    assignedAt: Date | null
    assignedBy: string | null
  }

  export type UserAssignedTasksCountAggregateOutputType = {
    taskId: number
    userId: number
    assignedAt: number
    assignedBy: number
    _all: number
  }


  export type UserAssignedTasksMinAggregateInputType = {
    taskId?: true
    userId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserAssignedTasksMaxAggregateInputType = {
    taskId?: true
    userId?: true
    assignedAt?: true
    assignedBy?: true
  }

  export type UserAssignedTasksCountAggregateInputType = {
    taskId?: true
    userId?: true
    assignedAt?: true
    assignedBy?: true
    _all?: true
  }

  export type UserAssignedTasksAggregateArgs = {
    /**
     * Filter which UserAssignedTasks to aggregate.
     * 
    **/
    where?: UserAssignedTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssignedTasks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAssignedTasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserAssignedTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssignedTasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssignedTasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAssignedTasks
    **/
    _count?: true | UserAssignedTasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAssignedTasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAssignedTasksMaxAggregateInputType
  }

  export type GetUserAssignedTasksAggregateType<T extends UserAssignedTasksAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAssignedTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAssignedTasks[P]>
      : GetScalarType<T[P], AggregateUserAssignedTasks[P]>
  }




  export type UserAssignedTasksGroupByArgs = {
    where?: UserAssignedTasksWhereInput
    orderBy?: Enumerable<UserAssignedTasksOrderByWithAggregationInput>
    by: Array<UserAssignedTasksScalarFieldEnum>
    having?: UserAssignedTasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAssignedTasksCountAggregateInputType | true
    _min?: UserAssignedTasksMinAggregateInputType
    _max?: UserAssignedTasksMaxAggregateInputType
  }


  export type UserAssignedTasksGroupByOutputType = {
    taskId: string
    userId: string
    assignedAt: Date
    assignedBy: string
    _count: UserAssignedTasksCountAggregateOutputType | null
    _min: UserAssignedTasksMinAggregateOutputType | null
    _max: UserAssignedTasksMaxAggregateOutputType | null
  }

  type GetUserAssignedTasksGroupByPayload<T extends UserAssignedTasksGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserAssignedTasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAssignedTasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAssignedTasksGroupByOutputType[P]>
            : GetScalarType<T[P], UserAssignedTasksGroupByOutputType[P]>
        }
      >
    >


  export type UserAssignedTasksSelect = {
    taskId?: boolean
    userId?: boolean
    assignedAt?: boolean
    assignedBy?: boolean
    task?: boolean | TaskArgs
    user?: boolean | UserArgs
  }

  export type UserAssignedTasksInclude = {
    task?: boolean | TaskArgs
    user?: boolean | UserArgs
  }

  export type UserAssignedTasksGetPayload<
    S extends boolean | null | undefined | UserAssignedTasksArgs,
    U = keyof S
      > = S extends true
        ? UserAssignedTasks
    : S extends undefined
    ? never
    : S extends UserAssignedTasksArgs | UserAssignedTasksFindManyArgs
    ?'include' extends U
    ? UserAssignedTasks  & {
    [P in TrueKeys<S['include']>]:
        P extends 'task' ? TaskGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'task' ? TaskGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof UserAssignedTasks ? UserAssignedTasks[P] : never
  } 
    : UserAssignedTasks
  : UserAssignedTasks


  type UserAssignedTasksCountArgs = Merge<
    Omit<UserAssignedTasksFindManyArgs, 'select' | 'include'> & {
      select?: UserAssignedTasksCountAggregateInputType | true
    }
  >

  export interface UserAssignedTasksDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserAssignedTasks that matches the filter.
     * @param {UserAssignedTasksFindUniqueArgs} args - Arguments to find a UserAssignedTasks
     * @example
     * // Get one UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAssignedTasksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserAssignedTasksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserAssignedTasks'> extends True ? CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>> : CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks | null >, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T> | null >>

    /**
     * Find the first UserAssignedTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssignedTasksFindFirstArgs} args - Arguments to find a UserAssignedTasks
     * @example
     * // Get one UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAssignedTasksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserAssignedTasksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserAssignedTasks'> extends True ? CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>> : CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks | null >, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T> | null >>

    /**
     * Find zero or more UserAssignedTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssignedTasksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.findMany()
     * 
     * // Get first 10 UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const userAssignedTasksWithTaskIdOnly = await prisma.userAssignedTasks.findMany({ select: { taskId: true } })
     * 
    **/
    findMany<T extends UserAssignedTasksFindManyArgs>(
      args?: SelectSubset<T, UserAssignedTasksFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserAssignedTasks>>, PrismaPromise<Array<UserAssignedTasksGetPayload<T>>>>

    /**
     * Create a UserAssignedTasks.
     * @param {UserAssignedTasksCreateArgs} args - Arguments to create a UserAssignedTasks.
     * @example
     * // Create one UserAssignedTasks
     * const UserAssignedTasks = await prisma.userAssignedTasks.create({
     *   data: {
     *     // ... data to create a UserAssignedTasks
     *   }
     * })
     * 
    **/
    create<T extends UserAssignedTasksCreateArgs>(
      args: SelectSubset<T, UserAssignedTasksCreateArgs>
    ): CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>>

    /**
     * Create many UserAssignedTasks.
     *     @param {UserAssignedTasksCreateManyArgs} args - Arguments to create many UserAssignedTasks.
     *     @example
     *     // Create many UserAssignedTasks
     *     const userAssignedTasks = await prisma.userAssignedTasks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAssignedTasksCreateManyArgs>(
      args?: SelectSubset<T, UserAssignedTasksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserAssignedTasks.
     * @param {UserAssignedTasksDeleteArgs} args - Arguments to delete one UserAssignedTasks.
     * @example
     * // Delete one UserAssignedTasks
     * const UserAssignedTasks = await prisma.userAssignedTasks.delete({
     *   where: {
     *     // ... filter to delete one UserAssignedTasks
     *   }
     * })
     * 
    **/
    delete<T extends UserAssignedTasksDeleteArgs>(
      args: SelectSubset<T, UserAssignedTasksDeleteArgs>
    ): CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>>

    /**
     * Update one UserAssignedTasks.
     * @param {UserAssignedTasksUpdateArgs} args - Arguments to update one UserAssignedTasks.
     * @example
     * // Update one UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAssignedTasksUpdateArgs>(
      args: SelectSubset<T, UserAssignedTasksUpdateArgs>
    ): CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>>

    /**
     * Delete zero or more UserAssignedTasks.
     * @param {UserAssignedTasksDeleteManyArgs} args - Arguments to filter UserAssignedTasks to delete.
     * @example
     * // Delete a few UserAssignedTasks
     * const { count } = await prisma.userAssignedTasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAssignedTasksDeleteManyArgs>(
      args?: SelectSubset<T, UserAssignedTasksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAssignedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssignedTasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAssignedTasksUpdateManyArgs>(
      args: SelectSubset<T, UserAssignedTasksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAssignedTasks.
     * @param {UserAssignedTasksUpsertArgs} args - Arguments to update or create a UserAssignedTasks.
     * @example
     * // Update or create a UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.upsert({
     *   create: {
     *     // ... data to create a UserAssignedTasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAssignedTasks we want to update
     *   }
     * })
    **/
    upsert<T extends UserAssignedTasksUpsertArgs>(
      args: SelectSubset<T, UserAssignedTasksUpsertArgs>
    ): CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>>

    /**
     * Find one UserAssignedTasks that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserAssignedTasksFindUniqueOrThrowArgs} args - Arguments to find a UserAssignedTasks
     * @example
     * // Get one UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAssignedTasksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserAssignedTasksFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>>

    /**
     * Find the first UserAssignedTasks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssignedTasksFindFirstOrThrowArgs} args - Arguments to find a UserAssignedTasks
     * @example
     * // Get one UserAssignedTasks
     * const userAssignedTasks = await prisma.userAssignedTasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAssignedTasksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserAssignedTasksFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserAssignedTasksClient<UserAssignedTasks>, Prisma__UserAssignedTasksClient<UserAssignedTasksGetPayload<T>>>

    /**
     * Count the number of UserAssignedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssignedTasksCountArgs} args - Arguments to filter UserAssignedTasks to count.
     * @example
     * // Count the number of UserAssignedTasks
     * const count = await prisma.userAssignedTasks.count({
     *   where: {
     *     // ... the filter for the UserAssignedTasks we want to count
     *   }
     * })
    **/
    count<T extends UserAssignedTasksCountArgs>(
      args?: Subset<T, UserAssignedTasksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAssignedTasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAssignedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssignedTasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAssignedTasksAggregateArgs>(args: Subset<T, UserAssignedTasksAggregateArgs>): PrismaPromise<GetUserAssignedTasksAggregateType<T>>

    /**
     * Group by UserAssignedTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssignedTasksGroupByArgs} args - Group by arguments.
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
      T extends UserAssignedTasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAssignedTasksGroupByArgs['orderBy'] }
        : { orderBy?: UserAssignedTasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserAssignedTasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAssignedTasksGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAssignedTasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserAssignedTasksClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    task<T extends TaskArgs = {}>(args?: Subset<T, TaskArgs>): CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserAssignedTasks base type for findUnique actions
   */
  export type UserAssignedTasksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
    /**
     * Filter, which UserAssignedTasks to fetch.
     * 
    **/
    where: UserAssignedTasksWhereUniqueInput
  }

  /**
   * UserAssignedTasks: findUnique
   */
  export interface UserAssignedTasksFindUniqueArgs extends UserAssignedTasksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAssignedTasks base type for findFirst actions
   */
  export type UserAssignedTasksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
    /**
     * Filter, which UserAssignedTasks to fetch.
     * 
    **/
    where?: UserAssignedTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssignedTasks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAssignedTasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAssignedTasks.
     * 
    **/
    cursor?: UserAssignedTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssignedTasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssignedTasks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAssignedTasks.
     * 
    **/
    distinct?: Enumerable<UserAssignedTasksScalarFieldEnum>
  }

  /**
   * UserAssignedTasks: findFirst
   */
  export interface UserAssignedTasksFindFirstArgs extends UserAssignedTasksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserAssignedTasks findMany
   */
  export type UserAssignedTasksFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
    /**
     * Filter, which UserAssignedTasks to fetch.
     * 
    **/
    where?: UserAssignedTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssignedTasks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserAssignedTasksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAssignedTasks.
     * 
    **/
    cursor?: UserAssignedTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssignedTasks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssignedTasks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserAssignedTasksScalarFieldEnum>
  }


  /**
   * UserAssignedTasks create
   */
  export type UserAssignedTasksCreateArgs = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
    /**
     * The data needed to create a UserAssignedTasks.
     * 
    **/
    data: XOR<UserAssignedTasksCreateInput, UserAssignedTasksUncheckedCreateInput>
  }


  /**
   * UserAssignedTasks createMany
   */
  export type UserAssignedTasksCreateManyArgs = {
    /**
     * The data used to create many UserAssignedTasks.
     * 
    **/
    data: Enumerable<UserAssignedTasksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserAssignedTasks update
   */
  export type UserAssignedTasksUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
    /**
     * The data needed to update a UserAssignedTasks.
     * 
    **/
    data: XOR<UserAssignedTasksUpdateInput, UserAssignedTasksUncheckedUpdateInput>
    /**
     * Choose, which UserAssignedTasks to update.
     * 
    **/
    where: UserAssignedTasksWhereUniqueInput
  }


  /**
   * UserAssignedTasks updateMany
   */
  export type UserAssignedTasksUpdateManyArgs = {
    /**
     * The data used to update UserAssignedTasks.
     * 
    **/
    data: XOR<UserAssignedTasksUpdateManyMutationInput, UserAssignedTasksUncheckedUpdateManyInput>
    /**
     * Filter which UserAssignedTasks to update
     * 
    **/
    where?: UserAssignedTasksWhereInput
  }


  /**
   * UserAssignedTasks upsert
   */
  export type UserAssignedTasksUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
    /**
     * The filter to search for the UserAssignedTasks to update in case it exists.
     * 
    **/
    where: UserAssignedTasksWhereUniqueInput
    /**
     * In case the UserAssignedTasks found by the `where` argument doesn't exist, create a new UserAssignedTasks with this data.
     * 
    **/
    create: XOR<UserAssignedTasksCreateInput, UserAssignedTasksUncheckedCreateInput>
    /**
     * In case the UserAssignedTasks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserAssignedTasksUpdateInput, UserAssignedTasksUncheckedUpdateInput>
  }


  /**
   * UserAssignedTasks delete
   */
  export type UserAssignedTasksDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
    /**
     * Filter which UserAssignedTasks to delete.
     * 
    **/
    where: UserAssignedTasksWhereUniqueInput
  }


  /**
   * UserAssignedTasks deleteMany
   */
  export type UserAssignedTasksDeleteManyArgs = {
    /**
     * Filter which UserAssignedTasks to delete
     * 
    **/
    where?: UserAssignedTasksWhereInput
  }


  /**
   * UserAssignedTasks: findUniqueOrThrow
   */
  export type UserAssignedTasksFindUniqueOrThrowArgs = UserAssignedTasksFindUniqueArgsBase
      

  /**
   * UserAssignedTasks: findFirstOrThrow
   */
  export type UserAssignedTasksFindFirstOrThrowArgs = UserAssignedTasksFindFirstArgsBase
      

  /**
   * UserAssignedTasks without action
   */
  export type UserAssignedTasksArgs = {
    /**
     * Select specific fields to fetch from the UserAssignedTasks
     * 
    **/
    select?: UserAssignedTasksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserAssignedTasksInclude | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    contentType: string | null
    type: string | null
    senderId: string | null
    parentId: string | null
    chatId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    contentType: string | null
    type: string | null
    senderId: string | null
    parentId: string | null
    chatId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    contentType: number
    type: number
    senderId: number
    parentId: number
    chatId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    contentType?: true
    type?: true
    senderId?: true
    parentId?: true
    chatId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    contentType?: true
    type?: true
    senderId?: true
    parentId?: true
    chatId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    contentType?: true
    type?: true
    senderId?: true
    parentId?: true
    chatId?: true
    _all?: true
  }

  export type MessageAggregateArgs = {
    /**
     * Filter which Message to aggregate.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
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




  export type MessageGroupByArgs = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: Array<MessageScalarFieldEnum>
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    content: string
    contentType: string
    type: string
    senderId: string | null
    parentId: string | null
    chatId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    contentType?: boolean
    type?: boolean
    senderId?: boolean
    parentId?: boolean
    chatId?: boolean
    chat?: boolean | ChatArgs
    parent?: boolean | MessageArgs
    sender?: boolean | UserArgs
    subMessages?: boolean | MessageFindManyArgs
    _count?: boolean | MessageCountOutputTypeArgs
  }

  export type MessageInclude = {
    chat?: boolean | ChatArgs
    parent?: boolean | MessageArgs
    sender?: boolean | UserArgs
    subMessages?: boolean | MessageFindManyArgs
    _count?: boolean | MessageCountOutputTypeArgs
  }

  export type MessageGetPayload<
    S extends boolean | null | undefined | MessageArgs,
    U = keyof S
      > = S extends true
        ? Message
    : S extends undefined
    ? never
    : S extends MessageArgs | MessageFindManyArgs
    ?'include' extends U
    ? Message  & {
    [P in TrueKeys<S['include']>]:
        P extends 'chat' ? ChatGetPayload<S['include'][P]> :
        P extends 'parent' ? MessageGetPayload<S['include'][P]> | null :
        P extends 'sender' ? UserGetPayload<S['include'][P]> | null :
        P extends 'subMessages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? MessageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'chat' ? ChatGetPayload<S['select'][P]> :
        P extends 'parent' ? MessageGetPayload<S['select'][P]> | null :
        P extends 'sender' ? UserGetPayload<S['select'][P]> | null :
        P extends 'subMessages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends '_count' ? MessageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Message ? Message[P] : never
  } 
    : Message
  : Message


  type MessageCountArgs = Merge<
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }
  >

  export interface MessageDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends MessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>> : CheckSelect<T, Prisma__MessageClient<Message | null >, Prisma__MessageClient<MessageGetPayload<T> | null >>

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
    **/
    findFirst<T extends MessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>> : CheckSelect<T, Prisma__MessageClient<Message | null >, Prisma__MessageClient<MessageGetPayload<T> | null >>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Message>>, PrismaPromise<Array<MessageGetPayload<T>>>>

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
    **/
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

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
    **/
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

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
    **/
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Find one Message that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MessageClient<Message>, Prisma__MessageClient<MessageGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): PrismaPromise<GetMessageAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chat<T extends ChatArgs = {}>(args?: Subset<T, ChatArgs>): CheckSelect<T, Prisma__ChatClient<Chat | null >, Prisma__ChatClient<ChatGetPayload<T> | null >>;

    parent<T extends MessageArgs = {}>(args?: Subset<T, MessageArgs>): CheckSelect<T, Prisma__MessageClient<Message | null >, Prisma__MessageClient<MessageGetPayload<T> | null >>;

    sender<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    subMessages<T extends MessageFindManyArgs = {}>(args?: Subset<T, MessageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Message>>, PrismaPromise<Array<MessageGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where: MessageWhereUniqueInput
  }

  /**
   * Message: findUnique
   */
  export interface MessageFindUniqueArgs extends MessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     * 
    **/
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message: findFirst
   */
  export interface MessageFindFirstArgs extends MessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findMany
   */
  export type MessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter, which Messages to fetch.
     * 
    **/
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     * 
    **/
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     * 
    **/
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to create a Message.
     * 
    **/
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs = {
    /**
     * The data used to create many Messages.
     * 
    **/
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The data needed to update a Message.
     * 
    **/
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs = {
    /**
     * The data used to update Messages.
     * 
    **/
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * The filter to search for the Message to update in case it exists.
     * 
    **/
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     * 
    **/
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
    /**
     * Filter which Message to delete.
     * 
    **/
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     * 
    **/
    where?: MessageWhereInput
  }


  /**
   * Message: findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs = MessageFindUniqueArgsBase
      

  /**
   * Message: findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs = MessageFindFirstArgsBase
      

  /**
   * Message without action
   */
  export type MessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     * 
    **/
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MessageInclude | null
  }



  /**
   * Model Chat
   */


  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs = {
    /**
     * Filter which Chat to aggregate.
     * 
    **/
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     * 
    **/
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs = {
    where?: ChatWhereInput
    orderBy?: Enumerable<ChatOrderByWithAggregationInput>
    by: Array<ChatScalarFieldEnum>
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }


  export type ChatGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | MessageFindManyArgs
    Project?: boolean | ProjectArgs
    Space?: boolean | SpaceArgs
    Task?: boolean | TaskArgs
    User?: boolean | UserArgs
    _count?: boolean | ChatCountOutputTypeArgs
  }

  export type ChatInclude = {
    messages?: boolean | MessageFindManyArgs
    Project?: boolean | ProjectArgs
    Space?: boolean | SpaceArgs
    Task?: boolean | TaskArgs
    User?: boolean | UserArgs
    _count?: boolean | ChatCountOutputTypeArgs
  }

  export type ChatGetPayload<
    S extends boolean | null | undefined | ChatArgs,
    U = keyof S
      > = S extends true
        ? Chat
    : S extends undefined
    ? never
    : S extends ChatArgs | ChatFindManyArgs
    ?'include' extends U
    ? Chat  & {
    [P in TrueKeys<S['include']>]:
        P extends 'messages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends 'Project' ? ProjectGetPayload<S['include'][P]> | null :
        P extends 'Space' ? SpaceGetPayload<S['include'][P]> | null :
        P extends 'Task' ? TaskGetPayload<S['include'][P]> | null :
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends '_count' ? ChatCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'messages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends 'Project' ? ProjectGetPayload<S['select'][P]> | null :
        P extends 'Space' ? SpaceGetPayload<S['select'][P]> | null :
        P extends 'Task' ? TaskGetPayload<S['select'][P]> | null :
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends '_count' ? ChatCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Chat ? Chat[P] : never
  } 
    : Chat
  : Chat


  type ChatCountArgs = Merge<
    Omit<ChatFindManyArgs, 'select' | 'include'> & {
      select?: ChatCountAggregateInputType | true
    }
  >

  export interface ChatDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChatFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Chat'> extends True ? CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>> : CheckSelect<T, Prisma__ChatClient<Chat | null >, Prisma__ChatClient<ChatGetPayload<T> | null >>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChatFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Chat'> extends True ? CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>> : CheckSelect<T, Prisma__ChatClient<Chat | null >, Prisma__ChatClient<ChatGetPayload<T> | null >>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatFindManyArgs>(
      args?: SelectSubset<T, ChatFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Chat>>, PrismaPromise<Array<ChatGetPayload<T>>>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
    **/
    create<T extends ChatCreateArgs>(
      args: SelectSubset<T, ChatCreateArgs>
    ): CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>>

    /**
     * Create many Chats.
     *     @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     *     @example
     *     // Create many Chats
     *     const chat = await prisma.chat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatCreateManyArgs>(
      args?: SelectSubset<T, ChatCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
    **/
    delete<T extends ChatDeleteArgs>(
      args: SelectSubset<T, ChatDeleteArgs>
    ): CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatUpdateArgs>(
      args: SelectSubset<T, ChatUpdateArgs>
    ): CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatDeleteManyArgs>(
      args?: SelectSubset<T, ChatDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatUpdateManyArgs>(
      args: SelectSubset<T, ChatUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
    **/
    upsert<T extends ChatUpsertArgs>(
      args: SelectSubset<T, ChatUpsertArgs>
    ): CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>>

    /**
     * Find one Chat that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ChatFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>>

    /**
     * Find the first Chat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChatFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ChatClient<Chat>, Prisma__ChatClient<ChatGetPayload<T>>>

    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChatClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    messages<T extends MessageFindManyArgs = {}>(args?: Subset<T, MessageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Message>>, PrismaPromise<Array<MessageGetPayload<T>>>>;

    Project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>;

    Space<T extends SpaceArgs = {}>(args?: Subset<T, SpaceArgs>): CheckSelect<T, Prisma__SpaceClient<Space | null >, Prisma__SpaceClient<SpaceGetPayload<T> | null >>;

    Task<T extends TaskArgs = {}>(args?: Subset<T, TaskArgs>): CheckSelect<T, Prisma__TaskClient<Task | null >, Prisma__TaskClient<TaskGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Chat base type for findUnique actions
   */
  export type ChatFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     * 
    **/
    where: ChatWhereUniqueInput
  }

  /**
   * Chat: findUnique
   */
  export interface ChatFindUniqueArgs extends ChatFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chat base type for findFirst actions
   */
  export type ChatFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     * 
    **/
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     * 
    **/
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     * 
    **/
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     * 
    **/
    distinct?: Enumerable<ChatScalarFieldEnum>
  }

  /**
   * Chat: findFirst
   */
  export interface ChatFindFirstArgs extends ChatFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter, which Chats to fetch.
     * 
    **/
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     * 
    **/
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     * 
    **/
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ChatScalarFieldEnum>
  }


  /**
   * Chat create
   */
  export type ChatCreateArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * The data needed to create a Chat.
     * 
    **/
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }


  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs = {
    /**
     * The data used to create many Chats.
     * 
    **/
    data: Enumerable<ChatCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Chat update
   */
  export type ChatUpdateArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * The data needed to update a Chat.
     * 
    **/
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     * 
    **/
    where: ChatWhereUniqueInput
  }


  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs = {
    /**
     * The data used to update Chats.
     * 
    **/
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     * 
    **/
    where?: ChatWhereInput
  }


  /**
   * Chat upsert
   */
  export type ChatUpsertArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * The filter to search for the Chat to update in case it exists.
     * 
    **/
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     * 
    **/
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }


  /**
   * Chat delete
   */
  export type ChatDeleteArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
    /**
     * Filter which Chat to delete.
     * 
    **/
    where: ChatWhereUniqueInput
  }


  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs = {
    /**
     * Filter which Chats to delete
     * 
    **/
    where?: ChatWhereInput
  }


  /**
   * Chat: findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs = ChatFindUniqueArgsBase
      

  /**
   * Chat: findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs = ChatFindFirstArgsBase
      

  /**
   * Chat without action
   */
  export type ChatArgs = {
    /**
     * Select specific fields to fetch from the Chat
     * 
    **/
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChatInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    active: 'active',
    chatId: 'chatId',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    creatorId: 'creatorId',
    parentId: 'parentId',
    status: 'status',
    details: 'details',
    chatId: 'chatId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SpaceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    viewId: 'viewId',
    projectId: 'projectId',
    settingsId: 'settingsId',
    spaceType: 'spaceType',
    parentId: 'parentId',
    chatId: 'chatId'
  };

  export type SpaceScalarFieldEnum = (typeof SpaceScalarFieldEnum)[keyof typeof SpaceScalarFieldEnum]


  export const SpaceViewScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    localId: 'localId',
    spaceId: 'spaceId'
  };

  export type SpaceViewScalarFieldEnum = (typeof SpaceViewScalarFieldEnum)[keyof typeof SpaceViewScalarFieldEnum]


  export const SpaceSettingsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    localId: 'localId',
    spaceId: 'spaceId'
  };

  export type SpaceSettingsScalarFieldEnum = (typeof SpaceSettingsScalarFieldEnum)[keyof typeof SpaceSettingsScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    settingsId: 'settingsId',
    workspaceId: 'workspaceId',
    ownerId: 'ownerId',
    chatId: 'chatId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectSettingsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    localId: 'localId',
    projectId: 'projectId'
  };

  export type ProjectSettingsScalarFieldEnum = (typeof ProjectSettingsScalarFieldEnum)[keyof typeof ProjectSettingsScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    settingsId: 'settingsId',
    userId: 'userId'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspaceSettingsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    localId: 'localId',
    workspaceId: 'workspaceId'
  };

  export type WorkspaceSettingsScalarFieldEnum = (typeof WorkspaceSettingsScalarFieldEnum)[keyof typeof WorkspaceSettingsScalarFieldEnum]


  export const ProjectsOnUsersScalarFieldEnum: {
    projectId: 'projectId',
    userId: 'userId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type ProjectsOnUsersScalarFieldEnum = (typeof ProjectsOnUsersScalarFieldEnum)[keyof typeof ProjectsOnUsersScalarFieldEnum]


  export const UserAssignedTasksScalarFieldEnum: {
    taskId: 'taskId',
    userId: 'userId',
    assignedAt: 'assignedAt',
    assignedBy: 'assignedBy'
  };

  export type UserAssignedTasksScalarFieldEnum = (typeof UserAssignedTasksScalarFieldEnum)[keyof typeof UserAssignedTasksScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    contentType: 'contentType',
    type: 'type',
    senderId: 'senderId',
    parentId: 'parentId',
    chatId: 'chatId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    username?: StringFilter | string
    active?: BoolFilter | boolean
    chatId?: StringNullableFilter | string | null
    role?: EnumRoleFilter | Role
    chat?: XOR<ChatRelationFilter, ChatWhereInput> | null
    comments?: MessageListRelationFilter
    ownedProjects?: ProjectListRelationFilter
    projects?: ProjectsOnUsersListRelationFilter
    createdTasks?: TaskListRelationFilter
    assignedTasks?: UserAssignedTasksListRelationFilter
    workspaces?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput> | null
    User_B?: UserListRelationFilter
    User_A?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    active?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
    chat?: ChatOrderByWithRelationInput
    comments?: MessageOrderByRelationAggregateInput
    ownedProjects?: ProjectOrderByRelationAggregateInput
    projects?: ProjectsOnUsersOrderByRelationAggregateInput
    createdTasks?: TaskOrderByRelationAggregateInput
    assignedTasks?: UserAssignedTasksOrderByRelationAggregateInput
    workspaces?: WorkspaceOrderByWithRelationInput
    User_B?: UserOrderByRelationAggregateInput
    User_A?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    chatId?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    active?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    firstname?: StringNullableWithAggregatesFilter | string | null
    lastname?: StringNullableWithAggregatesFilter | string | null
    username?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    chatId?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRoleWithAggregatesFilter | Role
  }

  export type TaskWhereInput = {
    AND?: Enumerable<TaskWhereInput>
    OR?: Enumerable<TaskWhereInput>
    NOT?: Enumerable<TaskWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    projectId?: StringNullableFilter | string | null
    creatorId?: StringNullableFilter | string | null
    parentId?: StringNullableFilter | string | null
    status?: StringFilter | string
    details?: StringFilter | string
    chatId?: StringNullableFilter | string | null
    chat?: XOR<ChatRelationFilter, ChatWhereInput> | null
    creator?: XOR<UserRelationFilter, UserWhereInput> | null
    parent?: XOR<TaskRelationFilter, TaskWhereInput> | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
    subTasks?: TaskListRelationFilter
    assignes?: UserAssignedTasksListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    creatorId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    details?: SortOrder
    chatId?: SortOrder
    chat?: ChatOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    parent?: TaskOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    subTasks?: TaskOrderByRelationAggregateInput
    assignes?: UserAssignedTasksOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = {
    id?: string
    chatId?: string
  }

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    creatorId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    details?: SortOrder
    chatId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaskScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaskScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaskScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    projectId?: StringNullableWithAggregatesFilter | string | null
    creatorId?: StringNullableWithAggregatesFilter | string | null
    parentId?: StringNullableWithAggregatesFilter | string | null
    status?: StringWithAggregatesFilter | string
    details?: StringWithAggregatesFilter | string
    chatId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SpaceWhereInput = {
    AND?: Enumerable<SpaceWhereInput>
    OR?: Enumerable<SpaceWhereInput>
    NOT?: Enumerable<SpaceWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    viewId?: StringFilter | string
    projectId?: StringFilter | string
    settingsId?: StringFilter | string
    spaceType?: StringFilter | string
    parentId?: StringNullableFilter | string | null
    chatId?: StringNullableFilter | string | null
    chat?: XOR<ChatRelationFilter, ChatWhereInput> | null
    parent?: XOR<SpaceRelationFilter, SpaceWhereInput> | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    settings?: XOR<SpaceSettingsRelationFilter, SpaceSettingsWhereInput>
    view?: XOR<SpaceViewRelationFilter, SpaceViewWhereInput>
    subspaces?: SpaceListRelationFilter
  }

  export type SpaceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewId?: SortOrder
    projectId?: SortOrder
    settingsId?: SortOrder
    spaceType?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
    chat?: ChatOrderByWithRelationInput
    parent?: SpaceOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    settings?: SpaceSettingsOrderByWithRelationInput
    view?: SpaceViewOrderByWithRelationInput
    subspaces?: SpaceOrderByRelationAggregateInput
  }

  export type SpaceWhereUniqueInput = {
    id?: string
    viewId?: string
    settingsId?: string
    chatId?: string
  }

  export type SpaceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewId?: SortOrder
    projectId?: SortOrder
    settingsId?: SortOrder
    spaceType?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
    _count?: SpaceCountOrderByAggregateInput
    _max?: SpaceMaxOrderByAggregateInput
    _min?: SpaceMinOrderByAggregateInput
  }

  export type SpaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SpaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<SpaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SpaceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    viewId?: StringWithAggregatesFilter | string
    projectId?: StringWithAggregatesFilter | string
    settingsId?: StringWithAggregatesFilter | string
    spaceType?: StringWithAggregatesFilter | string
    parentId?: StringNullableWithAggregatesFilter | string | null
    chatId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SpaceViewWhereInput = {
    AND?: Enumerable<SpaceViewWhereInput>
    OR?: Enumerable<SpaceViewWhereInput>
    NOT?: Enumerable<SpaceViewWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    localId?: StringFilter | string
    spaceId?: StringFilter | string
    space?: XOR<SpaceRelationFilter, SpaceWhereInput> | null
  }

  export type SpaceViewOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
    space?: SpaceOrderByWithRelationInput
  }

  export type SpaceViewWhereUniqueInput = {
    id?: string
  }

  export type SpaceViewOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
    _count?: SpaceViewCountOrderByAggregateInput
    _max?: SpaceViewMaxOrderByAggregateInput
    _min?: SpaceViewMinOrderByAggregateInput
  }

  export type SpaceViewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SpaceViewScalarWhereWithAggregatesInput>
    OR?: Enumerable<SpaceViewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SpaceViewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    localId?: StringWithAggregatesFilter | string
    spaceId?: StringWithAggregatesFilter | string
  }

  export type SpaceSettingsWhereInput = {
    AND?: Enumerable<SpaceSettingsWhereInput>
    OR?: Enumerable<SpaceSettingsWhereInput>
    NOT?: Enumerable<SpaceSettingsWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    localId?: StringFilter | string
    spaceId?: StringFilter | string
    space?: XOR<SpaceRelationFilter, SpaceWhereInput> | null
  }

  export type SpaceSettingsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
    space?: SpaceOrderByWithRelationInput
  }

  export type SpaceSettingsWhereUniqueInput = {
    id?: string
  }

  export type SpaceSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
    _count?: SpaceSettingsCountOrderByAggregateInput
    _max?: SpaceSettingsMaxOrderByAggregateInput
    _min?: SpaceSettingsMinOrderByAggregateInput
  }

  export type SpaceSettingsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SpaceSettingsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SpaceSettingsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SpaceSettingsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    localId?: StringWithAggregatesFilter | string
    spaceId?: StringWithAggregatesFilter | string
  }

  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    settingsId?: StringFilter | string
    workspaceId?: StringFilter | string
    ownerId?: StringFilter | string
    chatId?: StringNullableFilter | string | null
    chat?: XOR<ChatRelationFilter, ChatWhereInput> | null
    owner?: XOR<UserRelationFilter, UserWhereInput>
    settings?: XOR<ProjectSettingsRelationFilter, ProjectSettingsWhereInput>
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    users?: ProjectsOnUsersListRelationFilter
    spaces?: SpaceListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    settingsId?: SortOrder
    workspaceId?: SortOrder
    ownerId?: SortOrder
    chatId?: SortOrder
    chat?: ChatOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    settings?: ProjectSettingsOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
    users?: ProjectsOnUsersOrderByRelationAggregateInput
    spaces?: SpaceOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = {
    id?: string
    settingsId?: string
    chatId?: string
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    settingsId?: SortOrder
    workspaceId?: SortOrder
    ownerId?: SortOrder
    chatId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    settingsId?: StringWithAggregatesFilter | string
    workspaceId?: StringWithAggregatesFilter | string
    ownerId?: StringWithAggregatesFilter | string
    chatId?: StringNullableWithAggregatesFilter | string | null
  }

  export type ProjectSettingsWhereInput = {
    AND?: Enumerable<ProjectSettingsWhereInput>
    OR?: Enumerable<ProjectSettingsWhereInput>
    NOT?: Enumerable<ProjectSettingsWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    localId?: StringFilter | string
    projectId?: StringFilter | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
  }

  export type ProjectSettingsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectSettingsWhereUniqueInput = {
    id?: string
  }

  export type ProjectSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    projectId?: SortOrder
    _count?: ProjectSettingsCountOrderByAggregateInput
    _max?: ProjectSettingsMaxOrderByAggregateInput
    _min?: ProjectSettingsMinOrderByAggregateInput
  }

  export type ProjectSettingsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectSettingsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectSettingsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectSettingsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    localId?: StringWithAggregatesFilter | string
    projectId?: StringWithAggregatesFilter | string
  }

  export type WorkspaceWhereInput = {
    AND?: Enumerable<WorkspaceWhereInput>
    OR?: Enumerable<WorkspaceWhereInput>
    NOT?: Enumerable<WorkspaceWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    settingsId?: StringFilter | string
    userId?: StringFilter | string
    settings?: XOR<WorkspaceSettingsRelationFilter, WorkspaceSettingsWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    projects?: ProjectListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    settingsId?: SortOrder
    userId?: SortOrder
    settings?: WorkspaceSettingsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = {
    id?: string
    settingsId?: string
    userId?: string
  }

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    settingsId?: SortOrder
    userId?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    settingsId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type WorkspaceSettingsWhereInput = {
    AND?: Enumerable<WorkspaceSettingsWhereInput>
    OR?: Enumerable<WorkspaceSettingsWhereInput>
    NOT?: Enumerable<WorkspaceSettingsWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    localId?: StringFilter | string
    workspaceId?: StringFilter | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput> | null
  }

  export type WorkspaceSettingsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type WorkspaceSettingsWhereUniqueInput = {
    id?: string
  }

  export type WorkspaceSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    workspaceId?: SortOrder
    _count?: WorkspaceSettingsCountOrderByAggregateInput
    _max?: WorkspaceSettingsMaxOrderByAggregateInput
    _min?: WorkspaceSettingsMinOrderByAggregateInput
  }

  export type WorkspaceSettingsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceSettingsScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceSettingsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceSettingsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    localId?: StringWithAggregatesFilter | string
    workspaceId?: StringWithAggregatesFilter | string
  }

  export type ProjectsOnUsersWhereInput = {
    AND?: Enumerable<ProjectsOnUsersWhereInput>
    OR?: Enumerable<ProjectsOnUsersWhereInput>
    NOT?: Enumerable<ProjectsOnUsersWhereInput>
    projectId?: StringFilter | string
    userId?: StringFilter | string
    assignedAt?: DateTimeFilter | Date | string
    assignedBy?: StringFilter | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProjectsOnUsersOrderByWithRelationInput = {
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectsOnUsersWhereUniqueInput = {
    projectId_userId?: ProjectsOnUsersProjectIdUserIdCompoundUniqueInput
  }

  export type ProjectsOnUsersOrderByWithAggregationInput = {
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    _count?: ProjectsOnUsersCountOrderByAggregateInput
    _max?: ProjectsOnUsersMaxOrderByAggregateInput
    _min?: ProjectsOnUsersMinOrderByAggregateInput
  }

  export type ProjectsOnUsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectsOnUsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectsOnUsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectsOnUsersScalarWhereWithAggregatesInput>
    projectId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    assignedAt?: DateTimeWithAggregatesFilter | Date | string
    assignedBy?: StringWithAggregatesFilter | string
  }

  export type UserAssignedTasksWhereInput = {
    AND?: Enumerable<UserAssignedTasksWhereInput>
    OR?: Enumerable<UserAssignedTasksWhereInput>
    NOT?: Enumerable<UserAssignedTasksWhereInput>
    taskId?: StringFilter | string
    userId?: StringFilter | string
    assignedAt?: DateTimeFilter | Date | string
    assignedBy?: StringFilter | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserAssignedTasksOrderByWithRelationInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserAssignedTasksWhereUniqueInput = {
    taskId_userId?: UserAssignedTasksTaskIdUserIdCompoundUniqueInput
  }

  export type UserAssignedTasksOrderByWithAggregationInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
    _count?: UserAssignedTasksCountOrderByAggregateInput
    _max?: UserAssignedTasksMaxOrderByAggregateInput
    _min?: UserAssignedTasksMinOrderByAggregateInput
  }

  export type UserAssignedTasksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserAssignedTasksScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserAssignedTasksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserAssignedTasksScalarWhereWithAggregatesInput>
    taskId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    assignedAt?: DateTimeWithAggregatesFilter | Date | string
    assignedBy?: StringWithAggregatesFilter | string
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    content?: StringFilter | string
    contentType?: StringFilter | string
    type?: StringFilter | string
    senderId?: StringNullableFilter | string | null
    parentId?: StringNullableFilter | string | null
    chatId?: StringFilter | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
    parent?: XOR<MessageRelationFilter, MessageWhereInput> | null
    sender?: XOR<UserRelationFilter, UserWhereInput> | null
    subMessages?: MessageListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
    chat?: ChatOrderByWithRelationInput
    parent?: MessageOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    subMessages?: MessageOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = {
    id?: string
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    content?: StringWithAggregatesFilter | string
    contentType?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    senderId?: StringNullableWithAggregatesFilter | string | null
    parentId?: StringNullableWithAggregatesFilter | string | null
    chatId?: StringWithAggregatesFilter | string
  }

  export type ChatWhereInput = {
    AND?: Enumerable<ChatWhereInput>
    OR?: Enumerable<ChatWhereInput>
    NOT?: Enumerable<ChatWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    messages?: MessageListRelationFilter
    Project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
    Space?: XOR<SpaceRelationFilter, SpaceWhereInput> | null
    Task?: XOR<TaskRelationFilter, TaskWhereInput> | null
    User?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    Project?: ProjectOrderByWithRelationInput
    Space?: SpaceOrderByWithRelationInput
    Task?: TaskOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = {
    id?: string
  }

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChatScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChatScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChatScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type TaskCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    details: string
    chat?: ChatCreateNestedOneWithoutTaskInput
    creator?: UserCreateNestedOneWithoutCreatedTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    creatorId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutTaskNestedInput
    creator?: UserUpdateOneWithoutCreatedTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    creatorId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpaceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceType: string
    chat?: ChatCreateNestedOneWithoutSpaceInput
    parent?: SpaceCreateNestedOneWithoutSubspacesInput
    project: ProjectCreateNestedOneWithoutSpacesInput
    settings: SpaceSettingsCreateNestedOneWithoutSpaceInput
    view: SpaceViewCreateNestedOneWithoutSpaceInput
    subspaces?: SpaceCreateNestedManyWithoutParentInput
  }

  export type SpaceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    projectId: string
    settingsId: string
    spaceType: string
    parentId?: string | null
    chatId?: string | null
    subspaces?: SpaceUncheckedCreateNestedManyWithoutParentInput
  }

  export type SpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutSpaceNestedInput
    parent?: SpaceUpdateOneWithoutSubspacesNestedInput
    project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput
    settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput
    view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput
    subspaces?: SpaceUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subspaces?: SpaceUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SpaceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    projectId: string
    settingsId: string
    spaceType: string
    parentId?: string | null
    chatId?: string | null
  }

  export type SpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpaceViewCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
    space?: SpaceCreateNestedOneWithoutViewInput
  }

  export type SpaceViewUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
    space?: SpaceUncheckedCreateNestedOneWithoutViewInput
  }

  export type SpaceViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    space?: SpaceUpdateOneWithoutViewNestedInput
  }

  export type SpaceViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    space?: SpaceUncheckedUpdateOneWithoutViewNestedInput
  }

  export type SpaceViewCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
  }

  export type SpaceViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceSettingsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
    space?: SpaceCreateNestedOneWithoutSettingsInput
  }

  export type SpaceSettingsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
    space?: SpaceUncheckedCreateNestedOneWithoutSettingsInput
  }

  export type SpaceSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    space?: SpaceUpdateOneWithoutSettingsNestedInput
  }

  export type SpaceSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
    space?: SpaceUncheckedUpdateOneWithoutSettingsNestedInput
  }

  export type SpaceSettingsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
  }

  export type SpaceSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    chat?: ChatCreateNestedOneWithoutProjectInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    settings: ProjectSettingsCreateNestedOneWithoutProjectInput
    workspace: WorkspaceCreateNestedOneWithoutProjectsInput
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput
    spaces?: SpaceCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    ownerId: string
    chatId?: string | null
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    ownerId: string
    chatId?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectSettingsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    projectId: string
    project?: ProjectCreateNestedOneWithoutSettingsInput
  }

  export type ProjectSettingsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    projectId: string
    project?: ProjectUncheckedCreateNestedOneWithoutSettingsInput
  }

  export type ProjectSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutSettingsNestedInput
  }

  export type ProjectSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    project?: ProjectUncheckedUpdateOneWithoutSettingsNestedInput
  }

  export type ProjectSettingsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    projectId: string
  }

  export type ProjectSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    settings: WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput
    user: UserCreateNestedOneWithoutWorkspacesInput
    projects?: ProjectCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    settingsId: string
    userId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    settings?: WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    projects?: ProjectUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    settingsId: string
    userId: string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceSettingsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    workspaceId: string
    workspace?: WorkspaceCreateNestedOneWithoutSettingsInput
  }

  export type WorkspaceSettingsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    workspaceId: string
    workspace?: WorkspaceUncheckedCreateNestedOneWithoutSettingsInput
  }

  export type WorkspaceSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneWithoutSettingsNestedInput
  }

  export type WorkspaceSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUncheckedUpdateOneWithoutSettingsNestedInput
  }

  export type WorkspaceSettingsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    workspaceId: string
  }

  export type WorkspaceSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsOnUsersCreateInput = {
    assignedAt?: Date | string
    assignedBy: string
    project: ProjectCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsOnUsersUncheckedCreateInput = {
    projectId: string
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type ProjectsOnUsersUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectsOnUsersUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsOnUsersCreateManyInput = {
    projectId: string
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type ProjectsOnUsersUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsOnUsersUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssignedTasksCreateInput = {
    assignedAt?: Date | string
    assignedBy: string
    task: TaskCreateNestedOneWithoutAssignesInput
    user: UserCreateNestedOneWithoutAssignedTasksInput
  }

  export type UserAssignedTasksUncheckedCreateInput = {
    taskId: string
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserAssignedTasksUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutAssignesNestedInput
    user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
  }

  export type UserAssignedTasksUncheckedUpdateInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssignedTasksCreateManyInput = {
    taskId: string
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserAssignedTasksUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssignedTasksUncheckedUpdateManyInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    chat: ChatCreateNestedOneWithoutMessagesInput
    parent?: MessageCreateNestedOneWithoutSubMessagesInput
    sender?: UserCreateNestedOneWithoutCommentsInput
    subMessages?: MessageCreateNestedManyWithoutParentInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    senderId?: string | null
    parentId?: string | null
    chatId: string
    subMessages?: MessageUncheckedCreateNestedManyWithoutParentInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    parent?: MessageUpdateOneWithoutSubMessagesNestedInput
    sender?: UserUpdateOneWithoutCommentsNestedInput
    subMessages?: MessageUpdateManyWithoutParentNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    subMessages?: MessageUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    senderId?: string | null
    parentId?: string | null
    chatId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    Project?: ProjectCreateNestedOneWithoutChatInput
    Space?: SpaceCreateNestedOneWithoutChatInput
    Task?: TaskCreateNestedOneWithoutChatInput
    User?: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    Project?: ProjectUncheckedCreateNestedOneWithoutChatInput
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput
    User?: UserUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    Project?: ProjectUpdateOneWithoutChatNestedInput
    Space?: SpaceUpdateOneWithoutChatNestedInput
    Task?: TaskUpdateOneWithoutChatNestedInput
    User?: UserUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    Project?: ProjectUncheckedUpdateOneWithoutChatNestedInput
    Space?: SpaceUncheckedUpdateOneWithoutChatNestedInput
    Task?: TaskUncheckedUpdateOneWithoutChatNestedInput
    User?: UserUncheckedUpdateOneWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type ChatRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectsOnUsersListRelationFilter = {
    every?: ProjectsOnUsersWhereInput
    some?: ProjectsOnUsersWhereInput
    none?: ProjectsOnUsersWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type UserAssignedTasksListRelationFilter = {
    every?: UserAssignedTasksWhereInput
    some?: UserAssignedTasksWhereInput
    none?: UserAssignedTasksWhereInput
  }

  export type WorkspaceRelationFilter = {
    is?: WorkspaceWhereInput | null
    isNot?: WorkspaceWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOnUsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAssignedTasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    active?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    active?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    active?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    creatorId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    details?: SortOrder
    chatId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    creatorId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    details?: SortOrder
    chatId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    creatorId?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    details?: SortOrder
    chatId?: SortOrder
  }

  export type SpaceRelationFilter = {
    is?: SpaceWhereInput | null
    isNot?: SpaceWhereInput | null
  }

  export type SpaceSettingsRelationFilter = {
    is?: SpaceSettingsWhereInput
    isNot?: SpaceSettingsWhereInput
  }

  export type SpaceViewRelationFilter = {
    is?: SpaceViewWhereInput
    isNot?: SpaceViewWhereInput
  }

  export type SpaceListRelationFilter = {
    every?: SpaceWhereInput
    some?: SpaceWhereInput
    none?: SpaceWhereInput
  }

  export type SpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpaceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewId?: SortOrder
    projectId?: SortOrder
    settingsId?: SortOrder
    spaceType?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
  }

  export type SpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewId?: SortOrder
    projectId?: SortOrder
    settingsId?: SortOrder
    spaceType?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
  }

  export type SpaceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    viewId?: SortOrder
    projectId?: SortOrder
    settingsId?: SortOrder
    spaceType?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
  }

  export type SpaceViewCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
  }

  export type SpaceViewMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
  }

  export type SpaceViewMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
  }

  export type SpaceSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
  }

  export type SpaceSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
  }

  export type SpaceSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    spaceId?: SortOrder
  }

  export type ProjectSettingsRelationFilter = {
    is?: ProjectSettingsWhereInput
    isNot?: ProjectSettingsWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    settingsId?: SortOrder
    workspaceId?: SortOrder
    ownerId?: SortOrder
    chatId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    settingsId?: SortOrder
    workspaceId?: SortOrder
    ownerId?: SortOrder
    chatId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    settingsId?: SortOrder
    workspaceId?: SortOrder
    ownerId?: SortOrder
    chatId?: SortOrder
  }

  export type ProjectSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    projectId?: SortOrder
  }

  export type WorkspaceSettingsRelationFilter = {
    is?: WorkspaceSettingsWhereInput
    isNot?: WorkspaceSettingsWhereInput
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    settingsId?: SortOrder
    userId?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    settingsId?: SortOrder
    userId?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    settingsId?: SortOrder
    userId?: SortOrder
  }

  export type WorkspaceSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    workspaceId?: SortOrder
  }

  export type WorkspaceSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    workspaceId?: SortOrder
  }

  export type WorkspaceSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    localId?: SortOrder
    workspaceId?: SortOrder
  }

  export type ProjectsOnUsersProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type ProjectsOnUsersCountOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type ProjectsOnUsersMaxOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type ProjectsOnUsersMinOrderByAggregateInput = {
    projectId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserAssignedTasksTaskIdUserIdCompoundUniqueInput = {
    taskId: string
    userId: string
  }

  export type UserAssignedTasksCountOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserAssignedTasksMaxOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type UserAssignedTasksMinOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    assignedBy?: SortOrder
  }

  export type MessageRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    parentId?: SortOrder
    chatId?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatCreateNestedOneWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput
    connect?: ChatWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectsOnUsersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutUserInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: ProjectsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
  }

  export type TaskCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Enumerable<TaskCreateWithoutCreatorInput>, Enumerable<TaskUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutCreatorInput>
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type UserAssignedTasksCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutUserInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutUserInput>
    createMany?: UserAssignedTasksCreateManyUserInputEnvelope
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
  }

  export type WorkspaceCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutUser_AInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_AInput>, Enumerable<UserUncheckedCreateWithoutUser_AInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_AInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutUser_BInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_BInput>, Enumerable<UserUncheckedCreateWithoutUser_BInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_BInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutUserInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutUserInput>
    createMany?: ProjectsOnUsersCreateManyUserInputEnvelope
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Enumerable<TaskCreateWithoutCreatorInput>, Enumerable<TaskUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutCreatorInput>
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutUserInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutUserInput>
    createMany?: UserAssignedTasksCreateManyUserInputEnvelope
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
  }

  export type WorkspaceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutUser_AInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_AInput>, Enumerable<UserUncheckedCreateWithoutUser_AInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_AInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutUser_BInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_BInput>, Enumerable<UserUncheckedCreateWithoutUser_BInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_BInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type ChatUpdateOneWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput
    upsert?: ChatUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectsOnUsersUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutUserInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProjectsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    delete?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    update?: Enumerable<ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProjectsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProjectsOnUsersScalarWhereInput>
  }

  export type TaskUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutCreatorInput>, Enumerable<TaskUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type UserAssignedTasksUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutUserInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserAssignedTasksCreateManyUserInputEnvelope
    set?: Enumerable<UserAssignedTasksWhereUniqueInput>
    disconnect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    delete?: Enumerable<UserAssignedTasksWhereUniqueInput>
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    update?: Enumerable<UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserAssignedTasksUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserAssignedTasksScalarWhereInput>
  }

  export type WorkspaceUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput
    upsert?: WorkspaceUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateManyWithoutUser_ANestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_AInput>, Enumerable<UserUncheckedCreateWithoutUser_AInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_AInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUser_AInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUser_AInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUser_AInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateManyWithoutUser_BNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_BInput>, Enumerable<UserUncheckedCreateWithoutUser_BInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_BInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUser_BInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUser_BInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUser_BInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutSenderInput>, Enumerable<MessageUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: MessageCreateManySenderInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutUserInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProjectsOnUsersCreateManyUserInputEnvelope
    set?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    delete?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    update?: Enumerable<ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProjectsOnUsersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProjectsOnUsersScalarWhereInput>
  }

  export type TaskUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutCreatorInput>, Enumerable<TaskUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutUserInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserAssignedTasksCreateManyUserInputEnvelope
    set?: Enumerable<UserAssignedTasksWhereUniqueInput>
    disconnect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    delete?: Enumerable<UserAssignedTasksWhereUniqueInput>
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    update?: Enumerable<UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserAssignedTasksUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserAssignedTasksScalarWhereInput>
  }

  export type WorkspaceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput
    upsert?: WorkspaceUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
  }

  export type UserUncheckedUpdateManyWithoutUser_ANestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_AInput>, Enumerable<UserUncheckedCreateWithoutUser_AInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_AInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUser_AInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUser_AInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUser_AInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutUser_BNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUser_BInput>, Enumerable<UserUncheckedCreateWithoutUser_BInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUser_BInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUser_BInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUser_BInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUser_BInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ChatCreateNestedOneWithoutTaskInput = {
    create?: XOR<ChatCreateWithoutTaskInput, ChatUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ChatCreateOrConnectWithoutTaskInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutSubTasksInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    connect?: TaskWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<TaskCreateWithoutParentInput>, Enumerable<TaskUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutParentInput>
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type UserAssignedTasksCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutTaskInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutTaskInput>
    createMany?: UserAssignedTasksCreateManyTaskInputEnvelope
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<TaskCreateWithoutParentInput>, Enumerable<TaskUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutParentInput>
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutTaskInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutTaskInput>
    createMany?: UserAssignedTasksCreateManyTaskInputEnvelope
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
  }

  export type ChatUpdateOneWithoutTaskNestedInput = {
    create?: XOR<ChatCreateWithoutTaskInput, ChatUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ChatCreateOrConnectWithoutTaskInput
    upsert?: ChatUpsertWithoutTaskInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<ChatUpdateWithoutTaskInput, ChatUncheckedUpdateWithoutTaskInput>
  }

  export type UserUpdateOneWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type TaskUpdateOneWithoutSubTasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    upsert?: TaskUpsertWithoutSubTasksInput
    disconnect?: boolean
    delete?: boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
  }

  export type ProjectUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type TaskUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutParentInput>, Enumerable<TaskUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutParentInput>
    createMany?: TaskCreateManyParentInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type UserAssignedTasksUpdateManyWithoutTaskNestedInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutTaskInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: UserAssignedTasksCreateManyTaskInputEnvelope
    set?: Enumerable<UserAssignedTasksWhereUniqueInput>
    disconnect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    delete?: Enumerable<UserAssignedTasksWhereUniqueInput>
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    update?: Enumerable<UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<UserAssignedTasksUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<UserAssignedTasksScalarWhereInput>
  }

  export type TaskUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutParentInput>, Enumerable<TaskUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutParentInput>
    createMany?: TaskCreateManyParentInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<Enumerable<UserAssignedTasksCreateWithoutTaskInput>, Enumerable<UserAssignedTasksUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<UserAssignedTasksCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: UserAssignedTasksCreateManyTaskInputEnvelope
    set?: Enumerable<UserAssignedTasksWhereUniqueInput>
    disconnect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    delete?: Enumerable<UserAssignedTasksWhereUniqueInput>
    connect?: Enumerable<UserAssignedTasksWhereUniqueInput>
    update?: Enumerable<UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<UserAssignedTasksUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<UserAssignedTasksScalarWhereInput>
  }

  export type ChatCreateNestedOneWithoutSpaceInput = {
    create?: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput
    connect?: ChatWhereUniqueInput
  }

  export type SpaceCreateNestedOneWithoutSubspacesInput = {
    create?: XOR<SpaceCreateWithoutSubspacesInput, SpaceUncheckedCreateWithoutSubspacesInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput
    connect?: SpaceWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSpacesInput = {
    create?: XOR<ProjectCreateWithoutSpacesInput, ProjectUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput
    connect?: ProjectWhereUniqueInput
  }

  export type SpaceSettingsCreateNestedOneWithoutSpaceInput = {
    create?: XOR<SpaceSettingsCreateWithoutSpaceInput, SpaceSettingsUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput
    connect?: SpaceSettingsWhereUniqueInput
  }

  export type SpaceViewCreateNestedOneWithoutSpaceInput = {
    create?: XOR<SpaceViewCreateWithoutSpaceInput, SpaceViewUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput
    connect?: SpaceViewWhereUniqueInput
  }

  export type SpaceCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutParentInput>, Enumerable<SpaceUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutParentInput>
    createMany?: SpaceCreateManyParentInputEnvelope
    connect?: Enumerable<SpaceWhereUniqueInput>
  }

  export type SpaceUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutParentInput>, Enumerable<SpaceUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutParentInput>
    createMany?: SpaceCreateManyParentInputEnvelope
    connect?: Enumerable<SpaceWhereUniqueInput>
  }

  export type ChatUpdateOneWithoutSpaceNestedInput = {
    create?: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput
    upsert?: ChatUpsertWithoutSpaceInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<ChatUpdateWithoutSpaceInput, ChatUncheckedUpdateWithoutSpaceInput>
  }

  export type SpaceUpdateOneWithoutSubspacesNestedInput = {
    create?: XOR<SpaceCreateWithoutSubspacesInput, SpaceUncheckedCreateWithoutSubspacesInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput
    upsert?: SpaceUpsertWithoutSubspacesInput
    disconnect?: boolean
    delete?: boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<SpaceUpdateWithoutSubspacesInput, SpaceUncheckedUpdateWithoutSubspacesInput>
  }

  export type ProjectUpdateOneRequiredWithoutSpacesNestedInput = {
    create?: XOR<ProjectCreateWithoutSpacesInput, ProjectUncheckedCreateWithoutSpacesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput
    upsert?: ProjectUpsertWithoutSpacesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutSpacesInput, ProjectUncheckedUpdateWithoutSpacesInput>
  }

  export type SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput = {
    create?: XOR<SpaceSettingsCreateWithoutSpaceInput, SpaceSettingsUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput
    upsert?: SpaceSettingsUpsertWithoutSpaceInput
    connect?: SpaceSettingsWhereUniqueInput
    update?: XOR<SpaceSettingsUpdateWithoutSpaceInput, SpaceSettingsUncheckedUpdateWithoutSpaceInput>
  }

  export type SpaceViewUpdateOneRequiredWithoutSpaceNestedInput = {
    create?: XOR<SpaceViewCreateWithoutSpaceInput, SpaceViewUncheckedCreateWithoutSpaceInput>
    connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput
    upsert?: SpaceViewUpsertWithoutSpaceInput
    connect?: SpaceViewWhereUniqueInput
    update?: XOR<SpaceViewUpdateWithoutSpaceInput, SpaceViewUncheckedUpdateWithoutSpaceInput>
  }

  export type SpaceUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutParentInput>, Enumerable<SpaceUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<SpaceUpsertWithWhereUniqueWithoutParentInput>
    createMany?: SpaceCreateManyParentInputEnvelope
    set?: Enumerable<SpaceWhereUniqueInput>
    disconnect?: Enumerable<SpaceWhereUniqueInput>
    delete?: Enumerable<SpaceWhereUniqueInput>
    connect?: Enumerable<SpaceWhereUniqueInput>
    update?: Enumerable<SpaceUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<SpaceUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<SpaceScalarWhereInput>
  }

  export type SpaceUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutParentInput>, Enumerable<SpaceUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<SpaceUpsertWithWhereUniqueWithoutParentInput>
    createMany?: SpaceCreateManyParentInputEnvelope
    set?: Enumerable<SpaceWhereUniqueInput>
    disconnect?: Enumerable<SpaceWhereUniqueInput>
    delete?: Enumerable<SpaceWhereUniqueInput>
    connect?: Enumerable<SpaceWhereUniqueInput>
    update?: Enumerable<SpaceUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<SpaceUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<SpaceScalarWhereInput>
  }

  export type SpaceCreateNestedOneWithoutViewInput = {
    create?: XOR<SpaceCreateWithoutViewInput, SpaceUncheckedCreateWithoutViewInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutViewInput
    connect?: SpaceWhereUniqueInput
  }

  export type SpaceUncheckedCreateNestedOneWithoutViewInput = {
    create?: XOR<SpaceCreateWithoutViewInput, SpaceUncheckedCreateWithoutViewInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutViewInput
    connect?: SpaceWhereUniqueInput
  }

  export type SpaceUpdateOneWithoutViewNestedInput = {
    create?: XOR<SpaceCreateWithoutViewInput, SpaceUncheckedCreateWithoutViewInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutViewInput
    upsert?: SpaceUpsertWithoutViewInput
    disconnect?: boolean
    delete?: boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<SpaceUpdateWithoutViewInput, SpaceUncheckedUpdateWithoutViewInput>
  }

  export type SpaceUncheckedUpdateOneWithoutViewNestedInput = {
    create?: XOR<SpaceCreateWithoutViewInput, SpaceUncheckedCreateWithoutViewInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutViewInput
    upsert?: SpaceUpsertWithoutViewInput
    disconnect?: boolean
    delete?: boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<SpaceUpdateWithoutViewInput, SpaceUncheckedUpdateWithoutViewInput>
  }

  export type SpaceCreateNestedOneWithoutSettingsInput = {
    create?: XOR<SpaceCreateWithoutSettingsInput, SpaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput
    connect?: SpaceWhereUniqueInput
  }

  export type SpaceUncheckedCreateNestedOneWithoutSettingsInput = {
    create?: XOR<SpaceCreateWithoutSettingsInput, SpaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput
    connect?: SpaceWhereUniqueInput
  }

  export type SpaceUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<SpaceCreateWithoutSettingsInput, SpaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput
    upsert?: SpaceUpsertWithoutSettingsInput
    disconnect?: boolean
    delete?: boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<SpaceUpdateWithoutSettingsInput, SpaceUncheckedUpdateWithoutSettingsInput>
  }

  export type SpaceUncheckedUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<SpaceCreateWithoutSettingsInput, SpaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutSettingsInput
    upsert?: SpaceUpsertWithoutSettingsInput
    disconnect?: boolean
    delete?: boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<SpaceUpdateWithoutSettingsInput, SpaceUncheckedUpdateWithoutSettingsInput>
  }

  export type ChatCreateNestedOneWithoutProjectInput = {
    create?: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOwnedProjectsInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectSettingsCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectSettingsCreateWithoutProjectInput, ProjectSettingsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput
    connect?: ProjectSettingsWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutProjectsInput = {
    create?: XOR<WorkspaceCreateWithoutProjectsInput, WorkspaceUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutProjectsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ProjectsOnUsersCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutProjectInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutProjectInput>
    createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
  }

  export type SpaceCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutProjectInput>, Enumerable<SpaceUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutProjectInput>
    createMany?: SpaceCreateManyProjectInputEnvelope
    connect?: Enumerable<SpaceWhereUniqueInput>
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutProjectInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutProjectInput>
    createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
  }

  export type SpaceUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutProjectInput>, Enumerable<SpaceUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutProjectInput>
    createMany?: SpaceCreateManyProjectInputEnvelope
    connect?: Enumerable<SpaceWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type ChatUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ChatCreateOrConnectWithoutProjectInput
    upsert?: ChatUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<ChatUpdateWithoutProjectInput, ChatUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    upsert?: UserUpsertWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<ProjectSettingsCreateWithoutProjectInput, ProjectSettingsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput
    upsert?: ProjectSettingsUpsertWithoutProjectInput
    connect?: ProjectSettingsWhereUniqueInput
    update?: XOR<ProjectSettingsUpdateWithoutProjectInput, ProjectSettingsUncheckedUpdateWithoutProjectInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutProjectsInput, WorkspaceUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutProjectsInput
    upsert?: WorkspaceUpsertWithoutProjectsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutProjectsInput, WorkspaceUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectsOnUsersUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutProjectInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope
    set?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    delete?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    update?: Enumerable<ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ProjectsOnUsersScalarWhereInput>
  }

  export type SpaceUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutProjectInput>, Enumerable<SpaceUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<SpaceUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: SpaceCreateManyProjectInputEnvelope
    set?: Enumerable<SpaceWhereUniqueInput>
    disconnect?: Enumerable<SpaceWhereUniqueInput>
    delete?: Enumerable<SpaceWhereUniqueInput>
    connect?: Enumerable<SpaceWhereUniqueInput>
    update?: Enumerable<SpaceUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<SpaceUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<SpaceScalarWhereInput>
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<ProjectsOnUsersCreateWithoutProjectInput>, Enumerable<ProjectsOnUsersUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<ProjectsOnUsersCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope
    set?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    disconnect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    delete?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    connect?: Enumerable<ProjectsOnUsersWhereUniqueInput>
    update?: Enumerable<ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<ProjectsOnUsersScalarWhereInput>
  }

  export type SpaceUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<SpaceCreateWithoutProjectInput>, Enumerable<SpaceUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<SpaceCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<SpaceUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: SpaceCreateManyProjectInputEnvelope
    set?: Enumerable<SpaceWhereUniqueInput>
    disconnect?: Enumerable<SpaceWhereUniqueInput>
    delete?: Enumerable<SpaceWhereUniqueInput>
    connect?: Enumerable<SpaceWhereUniqueInput>
    update?: Enumerable<SpaceUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<SpaceUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<SpaceScalarWhereInput>
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutProjectInput>, Enumerable<TaskUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutSettingsInput = {
    create?: XOR<ProjectCreateWithoutSettingsInput, ProjectUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedOneWithoutSettingsInput = {
    create?: XOR<ProjectCreateWithoutSettingsInput, ProjectUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<ProjectCreateWithoutSettingsInput, ProjectUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput
    upsert?: ProjectUpsertWithoutSettingsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutSettingsInput, ProjectUncheckedUpdateWithoutSettingsInput>
  }

  export type ProjectUncheckedUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<ProjectCreateWithoutSettingsInput, ProjectUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput
    upsert?: ProjectUpsertWithoutSettingsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutSettingsInput, ProjectUncheckedUpdateWithoutSettingsInput>
  }

  export type WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<WorkspaceSettingsCreateWithoutWorkspaceInput, WorkspaceSettingsUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput
    connect?: WorkspaceSettingsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutWorkspaceInput>, Enumerable<ProjectUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutWorkspaceInput>
    createMany?: ProjectCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutWorkspaceInput>, Enumerable<ProjectUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutWorkspaceInput>
    createMany?: ProjectCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceSettingsCreateWithoutWorkspaceInput, WorkspaceSettingsUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput
    upsert?: WorkspaceSettingsUpsertWithoutWorkspaceInput
    connect?: WorkspaceSettingsWhereUniqueInput
    update?: XOR<WorkspaceSettingsUpdateWithoutWorkspaceInput, WorkspaceSettingsUncheckedUpdateWithoutWorkspaceInput>
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type ProjectUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutWorkspaceInput>, Enumerable<ProjectUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: ProjectCreateManyWorkspaceInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutWorkspaceInput>, Enumerable<ProjectUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: ProjectCreateManyWorkspaceInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type WorkspaceCreateNestedOneWithoutSettingsInput = {
    create?: XOR<WorkspaceCreateWithoutSettingsInput, WorkspaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUncheckedCreateNestedOneWithoutSettingsInput = {
    create?: XOR<WorkspaceCreateWithoutSettingsInput, WorkspaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutSettingsInput, WorkspaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput
    upsert?: WorkspaceUpsertWithoutSettingsInput
    disconnect?: boolean
    delete?: boolean
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutSettingsInput, WorkspaceUncheckedUpdateWithoutSettingsInput>
  }

  export type WorkspaceUncheckedUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutSettingsInput, WorkspaceUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput
    upsert?: WorkspaceUpsertWithoutSettingsInput
    disconnect?: boolean
    delete?: boolean
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutSettingsInput, WorkspaceUncheckedUpdateWithoutSettingsInput>
  }

  export type ProjectCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput
    upsert?: ProjectUpsertWithoutUsersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type TaskCreateNestedOneWithoutAssignesInput = {
    create?: XOR<TaskCreateWithoutAssignesInput, TaskUncheckedCreateWithoutAssignesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignesInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutAssignesNestedInput = {
    create?: XOR<TaskCreateWithoutAssignesInput, TaskUncheckedCreateWithoutAssignesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignesInput
    upsert?: TaskUpsertWithoutAssignesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutAssignesInput, TaskUncheckedUpdateWithoutAssignesInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutSubMessagesInput = {
    create?: XOR<MessageCreateWithoutSubMessagesInput, MessageUncheckedCreateWithoutSubMessagesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<MessageCreateWithoutParentInput>, Enumerable<MessageUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutParentInput>
    createMany?: MessageCreateManyParentInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<MessageCreateWithoutParentInput>, Enumerable<MessageUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutParentInput>
    createMany?: MessageCreateManyParentInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageUpdateOneWithoutSubMessagesNestedInput = {
    create?: XOR<MessageCreateWithoutSubMessagesInput, MessageUncheckedCreateWithoutSubMessagesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput
    upsert?: MessageUpsertWithoutSubMessagesInput
    disconnect?: boolean
    delete?: boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<MessageUpdateWithoutSubMessagesInput, MessageUncheckedUpdateWithoutSubMessagesInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type MessageUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutParentInput>, Enumerable<MessageUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutParentInput>
    createMany?: MessageCreateManyParentInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutParentInput>, Enumerable<MessageUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutParentInput>
    createMany?: MessageCreateManyParentInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type ProjectCreateNestedOneWithoutChatInput = {
    create?: XOR<ProjectCreateWithoutChatInput, ProjectUncheckedCreateWithoutChatInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChatInput
    connect?: ProjectWhereUniqueInput
  }

  export type SpaceCreateNestedOneWithoutChatInput = {
    create?: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput
    connect?: SpaceWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutChatInput = {
    create?: XOR<TaskCreateWithoutChatInput, TaskUncheckedCreateWithoutChatInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChatInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedOneWithoutChatInput = {
    create?: XOR<ProjectCreateWithoutChatInput, ProjectUncheckedCreateWithoutChatInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChatInput
    connect?: ProjectWhereUniqueInput
  }

  export type SpaceUncheckedCreateNestedOneWithoutChatInput = {
    create?: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput
    connect?: SpaceWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedOneWithoutChatInput = {
    create?: XOR<TaskCreateWithoutChatInput, TaskUncheckedCreateWithoutChatInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChatInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutChatInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChatInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChatInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type ProjectUpdateOneWithoutChatNestedInput = {
    create?: XOR<ProjectCreateWithoutChatInput, ProjectUncheckedCreateWithoutChatInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChatInput
    upsert?: ProjectUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutChatInput, ProjectUncheckedUpdateWithoutChatInput>
  }

  export type SpaceUpdateOneWithoutChatNestedInput = {
    create?: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput
    upsert?: SpaceUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<SpaceUpdateWithoutChatInput, SpaceUncheckedUpdateWithoutChatInput>
  }

  export type TaskUpdateOneWithoutChatNestedInput = {
    create?: XOR<TaskCreateWithoutChatInput, TaskUncheckedCreateWithoutChatInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChatInput
    upsert?: TaskUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutChatInput, TaskUncheckedUpdateWithoutChatInput>
  }

  export type UserUpdateOneWithoutChatNestedInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    upsert?: UserUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChatInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChatInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type ProjectUncheckedUpdateOneWithoutChatNestedInput = {
    create?: XOR<ProjectCreateWithoutChatInput, ProjectUncheckedCreateWithoutChatInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChatInput
    upsert?: ProjectUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutChatInput, ProjectUncheckedUpdateWithoutChatInput>
  }

  export type SpaceUncheckedUpdateOneWithoutChatNestedInput = {
    create?: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
    connectOrCreate?: SpaceCreateOrConnectWithoutChatInput
    upsert?: SpaceUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: SpaceWhereUniqueInput
    update?: XOR<SpaceUpdateWithoutChatInput, SpaceUncheckedUpdateWithoutChatInput>
  }

  export type TaskUncheckedUpdateOneWithoutChatNestedInput = {
    create?: XOR<TaskCreateWithoutChatInput, TaskUncheckedCreateWithoutChatInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChatInput
    upsert?: TaskUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutChatInput, TaskUncheckedUpdateWithoutChatInput>
  }

  export type UserUncheckedUpdateOneWithoutChatNestedInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    upsert?: UserUpsertWithoutChatInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type ChatCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    Project?: ProjectCreateNestedOneWithoutChatInput
    Space?: SpaceCreateNestedOneWithoutChatInput
    Task?: TaskCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    Project?: ProjectUncheckedCreateNestedOneWithoutChatInput
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    chat: ChatCreateNestedOneWithoutMessagesInput
    parent?: MessageCreateNestedOneWithoutSubMessagesInput
    subMessages?: MessageCreateNestedManyWithoutParentInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    parentId?: string | null
    chatId: string
    subMessages?: MessageUncheckedCreateNestedManyWithoutParentInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: Enumerable<MessageCreateManySenderInput>
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    chat?: ChatCreateNestedOneWithoutProjectInput
    settings: ProjectSettingsCreateNestedOneWithoutProjectInput
    workspace: WorkspaceCreateNestedOneWithoutProjectsInput
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput
    spaces?: SpaceCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    chatId?: string | null
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: Enumerable<ProjectCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type ProjectsOnUsersCreateWithoutUserInput = {
    assignedAt?: Date | string
    assignedBy: string
    project: ProjectCreateNestedOneWithoutUsersInput
  }

  export type ProjectsOnUsersUncheckedCreateWithoutUserInput = {
    projectId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type ProjectsOnUsersCreateOrConnectWithoutUserInput = {
    where: ProjectsOnUsersWhereUniqueInput
    create: XOR<ProjectsOnUsersCreateWithoutUserInput, ProjectsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type ProjectsOnUsersCreateManyUserInputEnvelope = {
    data: Enumerable<ProjectsOnUsersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    details: string
    chat?: ChatCreateNestedOneWithoutTaskInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }

  export type TaskCreateManyCreatorInputEnvelope = {
    data: Enumerable<TaskCreateManyCreatorInput>
    skipDuplicates?: boolean
  }

  export type UserAssignedTasksCreateWithoutUserInput = {
    assignedAt?: Date | string
    assignedBy: string
    task: TaskCreateNestedOneWithoutAssignesInput
  }

  export type UserAssignedTasksUncheckedCreateWithoutUserInput = {
    taskId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserAssignedTasksCreateOrConnectWithoutUserInput = {
    where: UserAssignedTasksWhereUniqueInput
    create: XOR<UserAssignedTasksCreateWithoutUserInput, UserAssignedTasksUncheckedCreateWithoutUserInput>
  }

  export type UserAssignedTasksCreateManyUserInputEnvelope = {
    data: Enumerable<UserAssignedTasksCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    settings: WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput
    projects?: ProjectCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    settingsId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type UserCreateWithoutUser_AInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
  }

  export type UserUncheckedCreateWithoutUser_AInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
  }

  export type UserCreateOrConnectWithoutUser_AInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_AInput, UserUncheckedCreateWithoutUser_AInput>
  }

  export type UserCreateWithoutUser_BInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutUser_BInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutUser_BInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_BInput, UserUncheckedCreateWithoutUser_BInput>
  }

  export type ChatUpsertWithoutUserInput = {
    update: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    Project?: ProjectUpdateOneWithoutChatNestedInput
    Space?: SpaceUpdateOneWithoutChatNestedInput
    Task?: TaskUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    Project?: ProjectUncheckedUpdateOneWithoutChatNestedInput
    Space?: SpaceUncheckedUpdateOneWithoutChatNestedInput
    Task?: TaskUncheckedUpdateOneWithoutChatNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutCommentsInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    content?: StringFilter | string
    contentType?: StringFilter | string
    type?: StringFilter | string
    senderId?: StringNullableFilter | string | null
    parentId?: StringNullableFilter | string | null
    chatId?: StringFilter | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnedProjectsInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    settingsId?: StringFilter | string
    workspaceId?: StringFilter | string
    ownerId?: StringFilter | string
    chatId?: StringNullableFilter | string | null
  }

  export type ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectsOnUsersWhereUniqueInput
    update: XOR<ProjectsOnUsersUpdateWithoutUserInput, ProjectsOnUsersUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectsOnUsersCreateWithoutUserInput, ProjectsOnUsersUncheckedCreateWithoutUserInput>
  }

  export type ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectsOnUsersWhereUniqueInput
    data: XOR<ProjectsOnUsersUpdateWithoutUserInput, ProjectsOnUsersUncheckedUpdateWithoutUserInput>
  }

  export type ProjectsOnUsersUpdateManyWithWhereWithoutUserInput = {
    where: ProjectsOnUsersScalarWhereInput
    data: XOR<ProjectsOnUsersUpdateManyMutationInput, ProjectsOnUsersUncheckedUpdateManyWithoutProjectsInput>
  }

  export type ProjectsOnUsersScalarWhereInput = {
    AND?: Enumerable<ProjectsOnUsersScalarWhereInput>
    OR?: Enumerable<ProjectsOnUsersScalarWhereInput>
    NOT?: Enumerable<ProjectsOnUsersScalarWhereInput>
    projectId?: StringFilter | string
    userId?: StringFilter | string
    assignedAt?: DateTimeFilter | Date | string
    assignedBy?: StringFilter | string
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatorInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatedTasksInput>
  }

  export type TaskScalarWhereInput = {
    AND?: Enumerable<TaskScalarWhereInput>
    OR?: Enumerable<TaskScalarWhereInput>
    NOT?: Enumerable<TaskScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    projectId?: StringNullableFilter | string | null
    creatorId?: StringNullableFilter | string | null
    parentId?: StringNullableFilter | string | null
    status?: StringFilter | string
    details?: StringFilter | string
    chatId?: StringNullableFilter | string | null
  }

  export type UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAssignedTasksWhereUniqueInput
    update: XOR<UserAssignedTasksUpdateWithoutUserInput, UserAssignedTasksUncheckedUpdateWithoutUserInput>
    create: XOR<UserAssignedTasksCreateWithoutUserInput, UserAssignedTasksUncheckedCreateWithoutUserInput>
  }

  export type UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAssignedTasksWhereUniqueInput
    data: XOR<UserAssignedTasksUpdateWithoutUserInput, UserAssignedTasksUncheckedUpdateWithoutUserInput>
  }

  export type UserAssignedTasksUpdateManyWithWhereWithoutUserInput = {
    where: UserAssignedTasksScalarWhereInput
    data: XOR<UserAssignedTasksUpdateManyMutationInput, UserAssignedTasksUncheckedUpdateManyWithoutAssignedTasksInput>
  }

  export type UserAssignedTasksScalarWhereInput = {
    AND?: Enumerable<UserAssignedTasksScalarWhereInput>
    OR?: Enumerable<UserAssignedTasksScalarWhereInput>
    NOT?: Enumerable<UserAssignedTasksScalarWhereInput>
    taskId?: StringFilter | string
    userId?: StringFilter | string
    assignedAt?: DateTimeFilter | Date | string
    assignedBy?: StringFilter | string
  }

  export type WorkspaceUpsertWithoutUserInput = {
    update: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    settings?: WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput
    projects?: ProjectUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutUser_AInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUser_AInput, UserUncheckedUpdateWithoutUser_AInput>
    create: XOR<UserCreateWithoutUser_AInput, UserUncheckedCreateWithoutUser_AInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUser_AInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUser_AInput, UserUncheckedUpdateWithoutUser_AInput>
  }

  export type UserUpdateManyWithWhereWithoutUser_AInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUser_BInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    password?: StringFilter | string
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    username?: StringFilter | string
    active?: BoolFilter | boolean
    chatId?: StringNullableFilter | string | null
    role?: EnumRoleFilter | Role
  }

  export type UserUpsertWithWhereUniqueWithoutUser_BInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUser_BInput, UserUncheckedUpdateWithoutUser_BInput>
    create: XOR<UserCreateWithoutUser_BInput, UserUncheckedCreateWithoutUser_BInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUser_BInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUser_BInput, UserUncheckedUpdateWithoutUser_BInput>
  }

  export type UserUpdateManyWithWhereWithoutUser_BInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUser_AInput>
  }

  export type ChatCreateWithoutTaskInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    Project?: ProjectCreateNestedOneWithoutChatInput
    Space?: SpaceCreateNestedOneWithoutChatInput
    User?: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutTaskInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    Project?: ProjectUncheckedCreateNestedOneWithoutChatInput
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput
    User?: UserUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutTaskInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutTaskInput, ChatUncheckedCreateWithoutTaskInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type TaskCreateWithoutSubTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    details: string
    chat?: ChatCreateNestedOneWithoutTaskInput
    creator?: UserCreateNestedOneWithoutCreatedTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    creatorId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubTasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    chat?: ChatCreateNestedOneWithoutProjectInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    settings: ProjectSettingsCreateNestedOneWithoutProjectInput
    workspace: WorkspaceCreateNestedOneWithoutProjectsInput
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput
    spaces?: SpaceCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    ownerId: string
    chatId?: string | null
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type TaskCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    details: string
    chat?: ChatCreateNestedOneWithoutTaskInput
    creator?: UserCreateNestedOneWithoutCreatedTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    creatorId?: string | null
    status?: string
    details: string
    chatId?: string | null
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutParentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskCreateManyParentInputEnvelope = {
    data: Enumerable<TaskCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type UserAssignedTasksCreateWithoutTaskInput = {
    assignedAt?: Date | string
    assignedBy: string
    user: UserCreateNestedOneWithoutAssignedTasksInput
  }

  export type UserAssignedTasksUncheckedCreateWithoutTaskInput = {
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type UserAssignedTasksCreateOrConnectWithoutTaskInput = {
    where: UserAssignedTasksWhereUniqueInput
    create: XOR<UserAssignedTasksCreateWithoutTaskInput, UserAssignedTasksUncheckedCreateWithoutTaskInput>
  }

  export type UserAssignedTasksCreateManyTaskInputEnvelope = {
    data: Enumerable<UserAssignedTasksCreateManyTaskInput>
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithoutTaskInput = {
    update: XOR<ChatUpdateWithoutTaskInput, ChatUncheckedUpdateWithoutTaskInput>
    create: XOR<ChatCreateWithoutTaskInput, ChatUncheckedCreateWithoutTaskInput>
  }

  export type ChatUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    Project?: ProjectUpdateOneWithoutChatNestedInput
    Space?: SpaceUpdateOneWithoutChatNestedInput
    User?: UserUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    Project?: ProjectUncheckedUpdateOneWithoutChatNestedInput
    Space?: SpaceUncheckedUpdateOneWithoutChatNestedInput
    User?: UserUncheckedUpdateOneWithoutChatNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type TaskUpsertWithoutSubTasksInput = {
    update: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
  }

  export type TaskUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutTaskNestedInput
    creator?: UserUpdateOneWithoutCreatedTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    assignes?: UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSubTasksInput>
  }

  export type UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput = {
    where: UserAssignedTasksWhereUniqueInput
    update: XOR<UserAssignedTasksUpdateWithoutTaskInput, UserAssignedTasksUncheckedUpdateWithoutTaskInput>
    create: XOR<UserAssignedTasksCreateWithoutTaskInput, UserAssignedTasksUncheckedCreateWithoutTaskInput>
  }

  export type UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput = {
    where: UserAssignedTasksWhereUniqueInput
    data: XOR<UserAssignedTasksUpdateWithoutTaskInput, UserAssignedTasksUncheckedUpdateWithoutTaskInput>
  }

  export type UserAssignedTasksUpdateManyWithWhereWithoutTaskInput = {
    where: UserAssignedTasksScalarWhereInput
    data: XOR<UserAssignedTasksUpdateManyMutationInput, UserAssignedTasksUncheckedUpdateManyWithoutAssignesInput>
  }

  export type ChatCreateWithoutSpaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    Project?: ProjectCreateNestedOneWithoutChatInput
    Task?: TaskCreateNestedOneWithoutChatInput
    User?: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutSpaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    Project?: ProjectUncheckedCreateNestedOneWithoutChatInput
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput
    User?: UserUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutSpaceInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceCreateWithoutSubspacesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceType: string
    chat?: ChatCreateNestedOneWithoutSpaceInput
    parent?: SpaceCreateNestedOneWithoutSubspacesInput
    project: ProjectCreateNestedOneWithoutSpacesInput
    settings: SpaceSettingsCreateNestedOneWithoutSpaceInput
    view: SpaceViewCreateNestedOneWithoutSpaceInput
  }

  export type SpaceUncheckedCreateWithoutSubspacesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    projectId: string
    settingsId: string
    spaceType: string
    parentId?: string | null
    chatId?: string | null
  }

  export type SpaceCreateOrConnectWithoutSubspacesInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutSubspacesInput, SpaceUncheckedCreateWithoutSubspacesInput>
  }

  export type ProjectCreateWithoutSpacesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    chat?: ChatCreateNestedOneWithoutProjectInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    settings: ProjectSettingsCreateNestedOneWithoutProjectInput
    workspace: WorkspaceCreateNestedOneWithoutProjectsInput
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSpacesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    ownerId: string
    chatId?: string | null
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSpacesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSpacesInput, ProjectUncheckedCreateWithoutSpacesInput>
  }

  export type SpaceSettingsCreateWithoutSpaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
  }

  export type SpaceSettingsUncheckedCreateWithoutSpaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
  }

  export type SpaceSettingsCreateOrConnectWithoutSpaceInput = {
    where: SpaceSettingsWhereUniqueInput
    create: XOR<SpaceSettingsCreateWithoutSpaceInput, SpaceSettingsUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceViewCreateWithoutSpaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
  }

  export type SpaceViewUncheckedCreateWithoutSpaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    spaceId: string
  }

  export type SpaceViewCreateOrConnectWithoutSpaceInput = {
    where: SpaceViewWhereUniqueInput
    create: XOR<SpaceViewCreateWithoutSpaceInput, SpaceViewUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceType: string
    chat?: ChatCreateNestedOneWithoutSpaceInput
    project: ProjectCreateNestedOneWithoutSpacesInput
    settings: SpaceSettingsCreateNestedOneWithoutSpaceInput
    view: SpaceViewCreateNestedOneWithoutSpaceInput
    subspaces?: SpaceCreateNestedManyWithoutParentInput
  }

  export type SpaceUncheckedCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    projectId: string
    settingsId: string
    spaceType: string
    chatId?: string | null
    subspaces?: SpaceUncheckedCreateNestedManyWithoutParentInput
  }

  export type SpaceCreateOrConnectWithoutParentInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutParentInput, SpaceUncheckedCreateWithoutParentInput>
  }

  export type SpaceCreateManyParentInputEnvelope = {
    data: Enumerable<SpaceCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithoutSpaceInput = {
    update: XOR<ChatUpdateWithoutSpaceInput, ChatUncheckedUpdateWithoutSpaceInput>
    create: XOR<ChatCreateWithoutSpaceInput, ChatUncheckedCreateWithoutSpaceInput>
  }

  export type ChatUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    Project?: ProjectUpdateOneWithoutChatNestedInput
    Task?: TaskUpdateOneWithoutChatNestedInput
    User?: UserUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    Project?: ProjectUncheckedUpdateOneWithoutChatNestedInput
    Task?: TaskUncheckedUpdateOneWithoutChatNestedInput
    User?: UserUncheckedUpdateOneWithoutChatNestedInput
  }

  export type SpaceUpsertWithoutSubspacesInput = {
    update: XOR<SpaceUpdateWithoutSubspacesInput, SpaceUncheckedUpdateWithoutSubspacesInput>
    create: XOR<SpaceCreateWithoutSubspacesInput, SpaceUncheckedCreateWithoutSubspacesInput>
  }

  export type SpaceUpdateWithoutSubspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutSpaceNestedInput
    parent?: SpaceUpdateOneWithoutSubspacesNestedInput
    project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput
    settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput
    view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput
  }

  export type SpaceUncheckedUpdateWithoutSubspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpsertWithoutSpacesInput = {
    update: XOR<ProjectUpdateWithoutSpacesInput, ProjectUncheckedUpdateWithoutSpacesInput>
    create: XOR<ProjectCreateWithoutSpacesInput, ProjectUncheckedCreateWithoutSpacesInput>
  }

  export type ProjectUpdateWithoutSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SpaceSettingsUpsertWithoutSpaceInput = {
    update: XOR<SpaceSettingsUpdateWithoutSpaceInput, SpaceSettingsUncheckedUpdateWithoutSpaceInput>
    create: XOR<SpaceSettingsCreateWithoutSpaceInput, SpaceSettingsUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceSettingsUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceSettingsUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceViewUpsertWithoutSpaceInput = {
    update: XOR<SpaceViewUpdateWithoutSpaceInput, SpaceViewUncheckedUpdateWithoutSpaceInput>
    create: XOR<SpaceViewCreateWithoutSpaceInput, SpaceViewUncheckedCreateWithoutSpaceInput>
  }

  export type SpaceViewUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceViewUncheckedUpdateWithoutSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    spaceId?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceUpsertWithWhereUniqueWithoutParentInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutParentInput, SpaceUncheckedUpdateWithoutParentInput>
    create: XOR<SpaceCreateWithoutParentInput, SpaceUncheckedCreateWithoutParentInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutParentInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutParentInput, SpaceUncheckedUpdateWithoutParentInput>
  }

  export type SpaceUpdateManyWithWhereWithoutParentInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutSubspacesInput>
  }

  export type SpaceScalarWhereInput = {
    AND?: Enumerable<SpaceScalarWhereInput>
    OR?: Enumerable<SpaceScalarWhereInput>
    NOT?: Enumerable<SpaceScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    viewId?: StringFilter | string
    projectId?: StringFilter | string
    settingsId?: StringFilter | string
    spaceType?: StringFilter | string
    parentId?: StringNullableFilter | string | null
    chatId?: StringNullableFilter | string | null
  }

  export type SpaceCreateWithoutViewInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceType: string
    chat?: ChatCreateNestedOneWithoutSpaceInput
    parent?: SpaceCreateNestedOneWithoutSubspacesInput
    project: ProjectCreateNestedOneWithoutSpacesInput
    settings: SpaceSettingsCreateNestedOneWithoutSpaceInput
    subspaces?: SpaceCreateNestedManyWithoutParentInput
  }

  export type SpaceUncheckedCreateWithoutViewInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    settingsId: string
    spaceType: string
    parentId?: string | null
    chatId?: string | null
    subspaces?: SpaceUncheckedCreateNestedManyWithoutParentInput
  }

  export type SpaceCreateOrConnectWithoutViewInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutViewInput, SpaceUncheckedCreateWithoutViewInput>
  }

  export type SpaceUpsertWithoutViewInput = {
    update: XOR<SpaceUpdateWithoutViewInput, SpaceUncheckedUpdateWithoutViewInput>
    create: XOR<SpaceCreateWithoutViewInput, SpaceUncheckedCreateWithoutViewInput>
  }

  export type SpaceUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutSpaceNestedInput
    parent?: SpaceUpdateOneWithoutSubspacesNestedInput
    project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput
    settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput
    subspaces?: SpaceUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subspaces?: SpaceUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SpaceCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceType: string
    chat?: ChatCreateNestedOneWithoutSpaceInput
    parent?: SpaceCreateNestedOneWithoutSubspacesInput
    project: ProjectCreateNestedOneWithoutSpacesInput
    view: SpaceViewCreateNestedOneWithoutSpaceInput
    subspaces?: SpaceCreateNestedManyWithoutParentInput
  }

  export type SpaceUncheckedCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    projectId: string
    spaceType: string
    parentId?: string | null
    chatId?: string | null
    subspaces?: SpaceUncheckedCreateNestedManyWithoutParentInput
  }

  export type SpaceCreateOrConnectWithoutSettingsInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutSettingsInput, SpaceUncheckedCreateWithoutSettingsInput>
  }

  export type SpaceUpsertWithoutSettingsInput = {
    update: XOR<SpaceUpdateWithoutSettingsInput, SpaceUncheckedUpdateWithoutSettingsInput>
    create: XOR<SpaceCreateWithoutSettingsInput, SpaceUncheckedCreateWithoutSettingsInput>
  }

  export type SpaceUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutSpaceNestedInput
    parent?: SpaceUpdateOneWithoutSubspacesNestedInput
    project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput
    view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput
    subspaces?: SpaceUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subspaces?: SpaceUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ChatCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    Space?: SpaceCreateNestedOneWithoutChatInput
    Task?: TaskCreateNestedOneWithoutChatInput
    User?: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput
    User?: UserUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutProjectInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput>
  }

  export type UserCreateWithoutOwnedProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutOwnedProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutOwnedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
  }

  export type ProjectSettingsCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    projectId: string
  }

  export type ProjectSettingsUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    projectId: string
  }

  export type ProjectSettingsCreateOrConnectWithoutProjectInput = {
    where: ProjectSettingsWhereUniqueInput
    create: XOR<ProjectSettingsCreateWithoutProjectInput, ProjectSettingsUncheckedCreateWithoutProjectInput>
  }

  export type WorkspaceCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    settings: WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkspaceUncheckedCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    settingsId: string
    userId: string
  }

  export type WorkspaceCreateOrConnectWithoutProjectsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutProjectsInput, WorkspaceUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectsOnUsersCreateWithoutProjectInput = {
    assignedAt?: Date | string
    assignedBy: string
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsOnUsersUncheckedCreateWithoutProjectInput = {
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type ProjectsOnUsersCreateOrConnectWithoutProjectInput = {
    where: ProjectsOnUsersWhereUniqueInput
    create: XOR<ProjectsOnUsersCreateWithoutProjectInput, ProjectsOnUsersUncheckedCreateWithoutProjectInput>
  }

  export type ProjectsOnUsersCreateManyProjectInputEnvelope = {
    data: Enumerable<ProjectsOnUsersCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type SpaceCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceType: string
    chat?: ChatCreateNestedOneWithoutSpaceInput
    parent?: SpaceCreateNestedOneWithoutSubspacesInput
    settings: SpaceSettingsCreateNestedOneWithoutSpaceInput
    view: SpaceViewCreateNestedOneWithoutSpaceInput
    subspaces?: SpaceCreateNestedManyWithoutParentInput
  }

  export type SpaceUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    settingsId: string
    spaceType: string
    parentId?: string | null
    chatId?: string | null
    subspaces?: SpaceUncheckedCreateNestedManyWithoutParentInput
  }

  export type SpaceCreateOrConnectWithoutProjectInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutProjectInput, SpaceUncheckedCreateWithoutProjectInput>
  }

  export type SpaceCreateManyProjectInputEnvelope = {
    data: Enumerable<SpaceCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    details: string
    chat?: ChatCreateNestedOneWithoutTaskInput
    creator?: UserCreateNestedOneWithoutCreatedTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: Enumerable<TaskCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithoutProjectInput = {
    update: XOR<ChatUpdateWithoutProjectInput, ChatUncheckedUpdateWithoutProjectInput>
    create: XOR<ChatCreateWithoutProjectInput, ChatUncheckedCreateWithoutProjectInput>
  }

  export type ChatUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    Space?: SpaceUpdateOneWithoutChatNestedInput
    Task?: TaskUpdateOneWithoutChatNestedInput
    User?: UserUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    Space?: SpaceUncheckedUpdateOneWithoutChatNestedInput
    Task?: TaskUncheckedUpdateOneWithoutChatNestedInput
    User?: UserUncheckedUpdateOneWithoutChatNestedInput
  }

  export type UserUpsertWithoutOwnedProjectsInput = {
    update: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
  }

  export type UserUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type ProjectSettingsUpsertWithoutProjectInput = {
    update: XOR<ProjectSettingsUpdateWithoutProjectInput, ProjectSettingsUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectSettingsCreateWithoutProjectInput, ProjectSettingsUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSettingsUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSettingsUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceUpsertWithoutProjectsInput = {
    update: XOR<WorkspaceUpdateWithoutProjectsInput, WorkspaceUncheckedUpdateWithoutProjectsInput>
    create: XOR<WorkspaceCreateWithoutProjectsInput, WorkspaceUncheckedCreateWithoutProjectsInput>
  }

  export type WorkspaceUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    settings?: WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectsOnUsersWhereUniqueInput
    update: XOR<ProjectsOnUsersUpdateWithoutProjectInput, ProjectsOnUsersUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectsOnUsersCreateWithoutProjectInput, ProjectsOnUsersUncheckedCreateWithoutProjectInput>
  }

  export type ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectsOnUsersWhereUniqueInput
    data: XOR<ProjectsOnUsersUpdateWithoutProjectInput, ProjectsOnUsersUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectsOnUsersScalarWhereInput
    data: XOR<ProjectsOnUsersUpdateManyMutationInput, ProjectsOnUsersUncheckedUpdateManyWithoutUsersInput>
  }

  export type SpaceUpsertWithWhereUniqueWithoutProjectInput = {
    where: SpaceWhereUniqueInput
    update: XOR<SpaceUpdateWithoutProjectInput, SpaceUncheckedUpdateWithoutProjectInput>
    create: XOR<SpaceCreateWithoutProjectInput, SpaceUncheckedCreateWithoutProjectInput>
  }

  export type SpaceUpdateWithWhereUniqueWithoutProjectInput = {
    where: SpaceWhereUniqueInput
    data: XOR<SpaceUpdateWithoutProjectInput, SpaceUncheckedUpdateWithoutProjectInput>
  }

  export type SpaceUpdateManyWithWhereWithoutProjectInput = {
    where: SpaceScalarWhereInput
    data: XOR<SpaceUpdateManyMutationInput, SpaceUncheckedUpdateManyWithoutSpacesInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTasksInput>
  }

  export type ProjectCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    chat?: ChatCreateNestedOneWithoutProjectInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    workspace: WorkspaceCreateNestedOneWithoutProjectsInput
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput
    spaces?: SpaceCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    workspaceId: string
    ownerId: string
    chatId?: string | null
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSettingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSettingsInput, ProjectUncheckedCreateWithoutSettingsInput>
  }

  export type ProjectUpsertWithoutSettingsInput = {
    update: XOR<ProjectUpdateWithoutSettingsInput, ProjectUncheckedUpdateWithoutSettingsInput>
    create: XOR<ProjectCreateWithoutSettingsInput, ProjectUncheckedCreateWithoutSettingsInput>
  }

  export type ProjectUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type WorkspaceSettingsCreateWithoutWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    workspaceId: string
  }

  export type WorkspaceSettingsUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    localId: string
    workspaceId: string
  }

  export type WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceSettingsWhereUniqueInput
    create: XOR<WorkspaceSettingsCreateWithoutWorkspaceInput, WorkspaceSettingsUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type ProjectCreateWithoutWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    chat?: ChatCreateNestedOneWithoutProjectInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    settings: ProjectSettingsCreateNestedOneWithoutProjectInput
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput
    spaces?: SpaceCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    ownerId: string
    chatId?: string | null
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutWorkspaceInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutWorkspaceInput, ProjectUncheckedCreateWithoutWorkspaceInput>
  }

  export type ProjectCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<ProjectCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceSettingsUpsertWithoutWorkspaceInput = {
    update: XOR<WorkspaceSettingsUpdateWithoutWorkspaceInput, WorkspaceSettingsUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceSettingsCreateWithoutWorkspaceInput, WorkspaceSettingsUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceSettingsUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceSettingsUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    localId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutWorkspaceInput, ProjectUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ProjectCreateWithoutWorkspaceInput, ProjectUncheckedCreateWithoutWorkspaceInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutWorkspaceInput, ProjectUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ProjectUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectsInput>
  }

  export type WorkspaceCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    user: UserCreateNestedOneWithoutWorkspacesInput
    projects?: ProjectCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutSettingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    userId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutSettingsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutSettingsInput, WorkspaceUncheckedCreateWithoutSettingsInput>
  }

  export type WorkspaceUpsertWithoutSettingsInput = {
    update: XOR<WorkspaceUpdateWithoutSettingsInput, WorkspaceUncheckedUpdateWithoutSettingsInput>
    create: XOR<WorkspaceCreateWithoutSettingsInput, WorkspaceUncheckedCreateWithoutSettingsInput>
  }

  export type WorkspaceUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
    projects?: ProjectUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ProjectCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    chat?: ChatCreateNestedOneWithoutProjectInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    settings: ProjectSettingsCreateNestedOneWithoutProjectInput
    workspace: WorkspaceCreateNestedOneWithoutProjectsInput
    spaces?: SpaceCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    ownerId: string
    chatId?: string | null
    spaces?: SpaceUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutUsersInput = {
    update: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type ProjectUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput
    spaces?: SpaceUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type TaskCreateWithoutAssignesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    details: string
    chat?: ChatCreateNestedOneWithoutTaskInput
    creator?: UserCreateNestedOneWithoutCreatedTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
  }

  export type TaskUncheckedCreateWithoutAssignesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    creatorId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
  }

  export type TaskCreateOrConnectWithoutAssignesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignesInput, TaskUncheckedCreateWithoutAssignesInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type TaskUpsertWithoutAssignesInput = {
    update: XOR<TaskUpdateWithoutAssignesInput, TaskUncheckedUpdateWithoutAssignesInput>
    create: XOR<TaskCreateWithoutAssignesInput, TaskUncheckedCreateWithoutAssignesInput>
  }

  export type TaskUpdateWithoutAssignesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutTaskNestedInput
    creator?: UserUpdateOneWithoutCreatedTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectCreateNestedOneWithoutChatInput
    Space?: SpaceCreateNestedOneWithoutChatInput
    Task?: TaskCreateNestedOneWithoutChatInput
    User?: UserCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectUncheckedCreateNestedOneWithoutChatInput
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput
    User?: UserUncheckedCreateNestedOneWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type MessageCreateWithoutSubMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    chat: ChatCreateNestedOneWithoutMessagesInput
    parent?: MessageCreateNestedOneWithoutSubMessagesInput
    sender?: UserCreateNestedOneWithoutCommentsInput
  }

  export type MessageUncheckedCreateWithoutSubMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    senderId?: string | null
    parentId?: string | null
    chatId: string
  }

  export type MessageCreateOrConnectWithoutSubMessagesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSubMessagesInput, MessageUncheckedCreateWithoutSubMessagesInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    chat?: ChatCreateNestedOneWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    chatId?: string | null
    role: Role
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type MessageCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    chat: ChatCreateNestedOneWithoutMessagesInput
    sender?: UserCreateNestedOneWithoutCommentsInput
    subMessages?: MessageCreateNestedManyWithoutParentInput
  }

  export type MessageUncheckedCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    senderId?: string | null
    chatId: string
    subMessages?: MessageUncheckedCreateNestedManyWithoutParentInput
  }

  export type MessageCreateOrConnectWithoutParentInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutParentInput, MessageUncheckedCreateWithoutParentInput>
  }

  export type MessageCreateManyParentInputEnvelope = {
    data: Enumerable<MessageCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateOneWithoutChatNestedInput
    Space?: SpaceUpdateOneWithoutChatNestedInput
    Task?: TaskUpdateOneWithoutChatNestedInput
    User?: UserUpdateOneWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUncheckedUpdateOneWithoutChatNestedInput
    Space?: SpaceUncheckedUpdateOneWithoutChatNestedInput
    Task?: TaskUncheckedUpdateOneWithoutChatNestedInput
    User?: UserUncheckedUpdateOneWithoutChatNestedInput
  }

  export type MessageUpsertWithoutSubMessagesInput = {
    update: XOR<MessageUpdateWithoutSubMessagesInput, MessageUncheckedUpdateWithoutSubMessagesInput>
    create: XOR<MessageCreateWithoutSubMessagesInput, MessageUncheckedCreateWithoutSubMessagesInput>
  }

  export type MessageUpdateWithoutSubMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    parent?: MessageUpdateOneWithoutSubMessagesNestedInput
    sender?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type MessageUncheckedUpdateWithoutSubMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutParentInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutParentInput, MessageUncheckedUpdateWithoutParentInput>
    create: XOR<MessageCreateWithoutParentInput, MessageUncheckedCreateWithoutParentInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutParentInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutParentInput, MessageUncheckedUpdateWithoutParentInput>
  }

  export type MessageUpdateManyWithWhereWithoutParentInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSubMessagesInput>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    parent?: MessageCreateNestedOneWithoutSubMessagesInput
    sender?: UserCreateNestedOneWithoutCommentsInput
    subMessages?: MessageCreateNestedManyWithoutParentInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    senderId?: string | null
    parentId?: string | null
    subMessages?: MessageUncheckedCreateNestedManyWithoutParentInput
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: Enumerable<MessageCreateManyChatInput>
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    settings: ProjectSettingsCreateNestedOneWithoutProjectInput
    workspace: WorkspaceCreateNestedOneWithoutProjectsInput
    users?: ProjectsOnUsersCreateNestedManyWithoutProjectInput
    spaces?: SpaceCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    ownerId: string
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput
    spaces?: SpaceUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutChatInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutChatInput, ProjectUncheckedCreateWithoutChatInput>
  }

  export type SpaceCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spaceType: string
    parent?: SpaceCreateNestedOneWithoutSubspacesInput
    project: ProjectCreateNestedOneWithoutSpacesInput
    settings: SpaceSettingsCreateNestedOneWithoutSpaceInput
    view: SpaceViewCreateNestedOneWithoutSpaceInput
    subspaces?: SpaceCreateNestedManyWithoutParentInput
  }

  export type SpaceUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    projectId: string
    settingsId: string
    spaceType: string
    parentId?: string | null
    subspaces?: SpaceUncheckedCreateNestedManyWithoutParentInput
  }

  export type SpaceCreateOrConnectWithoutChatInput = {
    where: SpaceWhereUniqueInput
    create: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
  }

  export type TaskCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    details: string
    creator?: UserCreateNestedOneWithoutCreatedTasksInput
    parent?: TaskCreateNestedOneWithoutSubTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    subTasks?: TaskCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    creatorId?: string | null
    parentId?: string | null
    status?: string
    details: string
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    assignes?: UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutChatInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutChatInput, TaskUncheckedCreateWithoutChatInput>
  }

  export type UserCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    comments?: MessageCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersCreateNestedManyWithoutUserInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceCreateNestedOneWithoutUserInput
    User_B?: UserCreateNestedManyWithoutUser_AInput
    User_A?: UserCreateNestedManyWithoutUser_BInput
  }

  export type UserUncheckedCreateWithoutChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    firstname?: string | null
    lastname?: string | null
    username: string
    active: boolean
    role: Role
    comments?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput
    workspaces?: WorkspaceUncheckedCreateNestedOneWithoutUserInput
    User_B?: UserUncheckedCreateNestedManyWithoutUser_AInput
    User_A?: UserUncheckedCreateNestedManyWithoutUser_BInput
  }

  export type UserCreateOrConnectWithoutChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type ProjectUpsertWithoutChatInput = {
    update: XOR<ProjectUpdateWithoutChatInput, ProjectUncheckedUpdateWithoutChatInput>
    create: XOR<ProjectCreateWithoutChatInput, ProjectUncheckedCreateWithoutChatInput>
  }

  export type ProjectUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SpaceUpsertWithoutChatInput = {
    update: XOR<SpaceUpdateWithoutChatInput, SpaceUncheckedUpdateWithoutChatInput>
    create: XOR<SpaceCreateWithoutChatInput, SpaceUncheckedCreateWithoutChatInput>
  }

  export type SpaceUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parent?: SpaceUpdateOneWithoutSubspacesNestedInput
    project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput
    settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput
    view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput
    subspaces?: SpaceUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subspaces?: SpaceUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TaskUpsertWithoutChatInput = {
    update: XOR<TaskUpdateWithoutChatInput, TaskUncheckedUpdateWithoutChatInput>
    create: XOR<TaskCreateWithoutChatInput, TaskUncheckedCreateWithoutChatInput>
  }

  export type TaskUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneWithoutCreatedTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutChatInput = {
    update: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
  }

  export type UserUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    parentId?: string | null
    chatId: string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    workspaceId: string
    chatId?: string | null
  }

  export type ProjectsOnUsersCreateManyUserInput = {
    projectId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type TaskCreateManyCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
  }

  export type UserAssignedTasksCreateManyUserInput = {
    taskId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    parent?: MessageUpdateOneWithoutSubMessagesNestedInput
    subMessages?: MessageUpdateManyWithoutParentNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    subMessages?: MessageUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutProjectNestedInput
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectsOnUsersUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ProjectsOnUsersUncheckedUpdateWithoutUserInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsOnUsersUncheckedUpdateManyWithoutProjectsInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutTaskNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAssignedTasksUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutAssignesNestedInput
  }

  export type UserAssignedTasksUncheckedUpdateWithoutUserInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssignedTasksUncheckedUpdateManyWithoutAssignedTasksInput = {
    taskId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutUser_AInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_B?: UserUpdateManyWithoutUser_ANestedInput
  }

  export type UserUncheckedUpdateWithoutUser_AInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_B?: UserUncheckedUpdateManyWithoutUser_ANestedInput
  }

  export type UserUncheckedUpdateManyWithoutUser_BInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUpdateWithoutUser_BInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | Role
    chat?: ChatUpdateOneWithoutUserNestedInput
    comments?: MessageUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUpdateOneWithoutUserNestedInput
    User_A?: UserUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_BInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    comments?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput
    workspaces?: WorkspaceUncheckedUpdateOneWithoutUserNestedInput
    User_A?: UserUncheckedUpdateManyWithoutUser_BNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUser_AInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type TaskCreateManyParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    creatorId?: string | null
    status?: string
    details: string
    chatId?: string | null
  }

  export type UserAssignedTasksCreateManyTaskInput = {
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type TaskUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutTaskNestedInput
    creator?: UserUpdateOneWithoutCreatedTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAssignedTasksUpdateWithoutTaskInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
  }

  export type UserAssignedTasksUncheckedUpdateWithoutTaskInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssignedTasksUncheckedUpdateManyWithoutAssignesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceCreateManyParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    projectId: string
    settingsId: string
    spaceType: string
    chatId?: string | null
  }

  export type SpaceUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutSpaceNestedInput
    project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput
    settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput
    view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput
    subspaces?: SpaceUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subspaces?: SpaceUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutSubspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectsOnUsersCreateManyProjectInput = {
    userId: string
    assignedAt?: Date | string
    assignedBy: string
  }

  export type SpaceCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    viewId: string
    settingsId: string
    spaceType: string
    parentId?: string | null
    chatId?: string | null
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId?: string | null
    parentId?: string | null
    status?: string
    details: string
    chatId?: string | null
  }

  export type ProjectsOnUsersUpdateWithoutProjectInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectsOnUsersUncheckedUpdateWithoutProjectInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsOnUsersUncheckedUpdateManyWithoutUsersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SpaceUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spaceType?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutSpaceNestedInput
    parent?: SpaceUpdateOneWithoutSubspacesNestedInput
    settings?: SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput
    view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput
    subspaces?: SpaceUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subspaces?: SpaceUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SpaceUncheckedUpdateManyWithoutSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewId?: StringFieldUpdateOperationsInput | string
    settingsId?: StringFieldUpdateOperationsInput | string
    spaceType?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneWithoutTaskNestedInput
    creator?: UserUpdateOneWithoutCreatedTasksNestedInput
    parent?: TaskUpdateOneWithoutSubTasksNestedInput
    subTasks?: TaskUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    subTasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    assignes?: UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateManyWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    settingsId: string
    ownerId: string
    chatId?: string | null
  }

  export type ProjectUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    settingsId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyParentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    senderId?: string | null
    chatId: string
  }

  export type MessageUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneWithoutCommentsNestedInput
    subMessages?: MessageUpdateManyWithoutParentNestedInput
  }

  export type MessageUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    subMessages?: MessageUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSubMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    contentType?: string
    type?: string
    senderId?: string | null
    parentId?: string | null
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parent?: MessageUpdateOneWithoutSubMessagesNestedInput
    sender?: UserUpdateOneWithoutCommentsNestedInput
    subMessages?: MessageUpdateManyWithoutParentNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    subMessages?: MessageUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
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