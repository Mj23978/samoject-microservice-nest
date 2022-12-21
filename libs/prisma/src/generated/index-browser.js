
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.1.0
 * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
 */
Prisma.prismaVersion = {
  client: "4.1.0",
  engine: "8d8414deb360336e4698a65aa45a1fbaf1ce13d8"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  password: 'password',
  firstname: 'firstname',
  lastname: 'lastname',
  username: 'username',
  active: 'active',
  role: 'role',
  chatId: 'chatId'
});

exports.Prisma.TaskScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  creatorId: 'creatorId',
  parentId: 'parentId',
  status: 'status',
  details: 'details',
  chatId: 'chatId'
});

exports.Prisma.SpaceScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  viewId: 'viewId',
  projectId: 'projectId',
  settingsId: 'settingsId',
  spaceType: 'spaceType',
  parentId: 'parentId',
  chatId: 'chatId'
});

exports.Prisma.SpaceViewScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  localId: 'localId',
  spaceId: 'spaceId'
});

exports.Prisma.SpaceSettingsScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  localId: 'localId',
  spaceId: 'spaceId'
});

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  description: 'description',
  settingsId: 'settingsId',
  workspaceId: 'workspaceId',
  ownerId: 'ownerId',
  chatId: 'chatId'
});

exports.Prisma.ProjectSettingsScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  localId: 'localId',
  projectId: 'projectId'
});

exports.Prisma.WorkspaceScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  settingsId: 'settingsId',
  userId: 'userId'
});

exports.Prisma.WorkspaceSettingsScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  localId: 'localId',
  workspaceId: 'workspaceId'
});

exports.Prisma.ProjectsOnUsersScalarFieldEnum = makeEnum({
  projectId: 'projectId',
  userId: 'userId',
  assignedAt: 'assignedAt',
  assignedBy: 'assignedBy'
});

exports.Prisma.UserAssignedTasksScalarFieldEnum = makeEnum({
  taskId: 'taskId',
  userId: 'userId',
  assignedAt: 'assignedAt',
  assignedBy: 'assignedBy'
});

exports.Prisma.MessageScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  content: 'content',
  contentType: 'contentType',
  type: 'type',
  senderId: 'senderId',
  parentId: 'parentId',
  chatId: 'chatId'
});

exports.Prisma.ChatScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.Role = makeEnum({
  ADMIN: 'ADMIN',
  USER: 'USER'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
