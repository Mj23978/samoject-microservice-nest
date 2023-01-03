import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Task: crudResolvers.TaskCrudResolver,
  Space: crudResolvers.SpaceCrudResolver,
  SpaceView: crudResolvers.SpaceViewCrudResolver,
  SpaceSettings: crudResolvers.SpaceSettingsCrudResolver,
  Project: crudResolvers.ProjectCrudResolver,
  ProjectSettings: crudResolvers.ProjectSettingsCrudResolver,
  Workspace: crudResolvers.WorkspaceCrudResolver,
  WorkspaceSettings: crudResolvers.WorkspaceSettingsCrudResolver,
  ProjectsOnUsers: crudResolvers.ProjectsOnUsersCrudResolver,
  UserAssignedTasks: crudResolvers.UserAssignedTasksCrudResolver,
  Message: crudResolvers.MessageCrudResolver,
  Chat: crudResolvers.ChatCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Task: {
    aggregateTask: actionResolvers.AggregateTaskResolver,
    createManyTask: actionResolvers.CreateManyTaskResolver,
    createOneTask: actionResolvers.CreateOneTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    deleteOneTask: actionResolvers.DeleteOneTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    findFirstTaskOrThrow: actionResolvers.FindFirstTaskOrThrowResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    task: actionResolvers.FindUniqueTaskResolver,
    getTask: actionResolvers.FindUniqueTaskOrThrowResolver,
    groupByTask: actionResolvers.GroupByTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    updateOneTask: actionResolvers.UpdateOneTaskResolver,
    upsertOneTask: actionResolvers.UpsertOneTaskResolver
  },
  Space: {
    aggregateSpace: actionResolvers.AggregateSpaceResolver,
    createManySpace: actionResolvers.CreateManySpaceResolver,
    createOneSpace: actionResolvers.CreateOneSpaceResolver,
    deleteManySpace: actionResolvers.DeleteManySpaceResolver,
    deleteOneSpace: actionResolvers.DeleteOneSpaceResolver,
    findFirstSpace: actionResolvers.FindFirstSpaceResolver,
    findFirstSpaceOrThrow: actionResolvers.FindFirstSpaceOrThrowResolver,
    spaces: actionResolvers.FindManySpaceResolver,
    space: actionResolvers.FindUniqueSpaceResolver,
    getSpace: actionResolvers.FindUniqueSpaceOrThrowResolver,
    groupBySpace: actionResolvers.GroupBySpaceResolver,
    updateManySpace: actionResolvers.UpdateManySpaceResolver,
    updateOneSpace: actionResolvers.UpdateOneSpaceResolver,
    upsertOneSpace: actionResolvers.UpsertOneSpaceResolver
  },
  SpaceView: {
    aggregateSpaceView: actionResolvers.AggregateSpaceViewResolver,
    createManySpaceView: actionResolvers.CreateManySpaceViewResolver,
    createOneSpaceView: actionResolvers.CreateOneSpaceViewResolver,
    deleteManySpaceView: actionResolvers.DeleteManySpaceViewResolver,
    deleteOneSpaceView: actionResolvers.DeleteOneSpaceViewResolver,
    findFirstSpaceView: actionResolvers.FindFirstSpaceViewResolver,
    findFirstSpaceViewOrThrow: actionResolvers.FindFirstSpaceViewOrThrowResolver,
    spaceViews: actionResolvers.FindManySpaceViewResolver,
    spaceView: actionResolvers.FindUniqueSpaceViewResolver,
    getSpaceView: actionResolvers.FindUniqueSpaceViewOrThrowResolver,
    groupBySpaceView: actionResolvers.GroupBySpaceViewResolver,
    updateManySpaceView: actionResolvers.UpdateManySpaceViewResolver,
    updateOneSpaceView: actionResolvers.UpdateOneSpaceViewResolver,
    upsertOneSpaceView: actionResolvers.UpsertOneSpaceViewResolver
  },
  SpaceSettings: {
    aggregateSpaceSettings: actionResolvers.AggregateSpaceSettingsResolver,
    createManySpaceSettings: actionResolvers.CreateManySpaceSettingsResolver,
    createOneSpaceSettings: actionResolvers.CreateOneSpaceSettingsResolver,
    deleteManySpaceSettings: actionResolvers.DeleteManySpaceSettingsResolver,
    deleteOneSpaceSettings: actionResolvers.DeleteOneSpaceSettingsResolver,
    findFirstSpaceSettings: actionResolvers.FindFirstSpaceSettingsResolver,
    findFirstSpaceSettingsOrThrow: actionResolvers.FindFirstSpaceSettingsOrThrowResolver,
    findManySpaceSettings: actionResolvers.FindManySpaceSettingsResolver,
    findUniqueSpaceSettings: actionResolvers.FindUniqueSpaceSettingsResolver,
    findUniqueSpaceSettingsOrThrow: actionResolvers.FindUniqueSpaceSettingsOrThrowResolver,
    groupBySpaceSettings: actionResolvers.GroupBySpaceSettingsResolver,
    updateManySpaceSettings: actionResolvers.UpdateManySpaceSettingsResolver,
    updateOneSpaceSettings: actionResolvers.UpdateOneSpaceSettingsResolver,
    upsertOneSpaceSettings: actionResolvers.UpsertOneSpaceSettingsResolver
  },
  Project: {
    aggregateProject: actionResolvers.AggregateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    createOneProject: actionResolvers.CreateOneProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    deleteOneProject: actionResolvers.DeleteOneProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    findFirstProjectOrThrow: actionResolvers.FindFirstProjectOrThrowResolver,
    projects: actionResolvers.FindManyProjectResolver,
    project: actionResolvers.FindUniqueProjectResolver,
    getProject: actionResolvers.FindUniqueProjectOrThrowResolver,
    groupByProject: actionResolvers.GroupByProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    updateOneProject: actionResolvers.UpdateOneProjectResolver,
    upsertOneProject: actionResolvers.UpsertOneProjectResolver
  },
  ProjectSettings: {
    aggregateProjectSettings: actionResolvers.AggregateProjectSettingsResolver,
    createManyProjectSettings: actionResolvers.CreateManyProjectSettingsResolver,
    createOneProjectSettings: actionResolvers.CreateOneProjectSettingsResolver,
    deleteManyProjectSettings: actionResolvers.DeleteManyProjectSettingsResolver,
    deleteOneProjectSettings: actionResolvers.DeleteOneProjectSettingsResolver,
    findFirstProjectSettings: actionResolvers.FindFirstProjectSettingsResolver,
    findFirstProjectSettingsOrThrow: actionResolvers.FindFirstProjectSettingsOrThrowResolver,
    findManyProjectSettings: actionResolvers.FindManyProjectSettingsResolver,
    findUniqueProjectSettings: actionResolvers.FindUniqueProjectSettingsResolver,
    findUniqueProjectSettingsOrThrow: actionResolvers.FindUniqueProjectSettingsOrThrowResolver,
    groupByProjectSettings: actionResolvers.GroupByProjectSettingsResolver,
    updateManyProjectSettings: actionResolvers.UpdateManyProjectSettingsResolver,
    updateOneProjectSettings: actionResolvers.UpdateOneProjectSettingsResolver,
    upsertOneProjectSettings: actionResolvers.UpsertOneProjectSettingsResolver
  },
  Workspace: {
    aggregateWorkspace: actionResolvers.AggregateWorkspaceResolver,
    createManyWorkspace: actionResolvers.CreateManyWorkspaceResolver,
    createOneWorkspace: actionResolvers.CreateOneWorkspaceResolver,
    deleteManyWorkspace: actionResolvers.DeleteManyWorkspaceResolver,
    deleteOneWorkspace: actionResolvers.DeleteOneWorkspaceResolver,
    findFirstWorkspace: actionResolvers.FindFirstWorkspaceResolver,
    findFirstWorkspaceOrThrow: actionResolvers.FindFirstWorkspaceOrThrowResolver,
    workspaces: actionResolvers.FindManyWorkspaceResolver,
    workspace: actionResolvers.FindUniqueWorkspaceResolver,
    getWorkspace: actionResolvers.FindUniqueWorkspaceOrThrowResolver,
    groupByWorkspace: actionResolvers.GroupByWorkspaceResolver,
    updateManyWorkspace: actionResolvers.UpdateManyWorkspaceResolver,
    updateOneWorkspace: actionResolvers.UpdateOneWorkspaceResolver,
    upsertOneWorkspace: actionResolvers.UpsertOneWorkspaceResolver
  },
  WorkspaceSettings: {
    aggregateWorkspaceSettings: actionResolvers.AggregateWorkspaceSettingsResolver,
    createManyWorkspaceSettings: actionResolvers.CreateManyWorkspaceSettingsResolver,
    createOneWorkspaceSettings: actionResolvers.CreateOneWorkspaceSettingsResolver,
    deleteManyWorkspaceSettings: actionResolvers.DeleteManyWorkspaceSettingsResolver,
    deleteOneWorkspaceSettings: actionResolvers.DeleteOneWorkspaceSettingsResolver,
    findFirstWorkspaceSettings: actionResolvers.FindFirstWorkspaceSettingsResolver,
    findFirstWorkspaceSettingsOrThrow: actionResolvers.FindFirstWorkspaceSettingsOrThrowResolver,
    findManyWorkspaceSettings: actionResolvers.FindManyWorkspaceSettingsResolver,
    findUniqueWorkspaceSettings: actionResolvers.FindUniqueWorkspaceSettingsResolver,
    findUniqueWorkspaceSettingsOrThrow: actionResolvers.FindUniqueWorkspaceSettingsOrThrowResolver,
    groupByWorkspaceSettings: actionResolvers.GroupByWorkspaceSettingsResolver,
    updateManyWorkspaceSettings: actionResolvers.UpdateManyWorkspaceSettingsResolver,
    updateOneWorkspaceSettings: actionResolvers.UpdateOneWorkspaceSettingsResolver,
    upsertOneWorkspaceSettings: actionResolvers.UpsertOneWorkspaceSettingsResolver
  },
  ProjectsOnUsers: {
    aggregateProjectsOnUsers: actionResolvers.AggregateProjectsOnUsersResolver,
    createManyProjectsOnUsers: actionResolvers.CreateManyProjectsOnUsersResolver,
    createOneProjectsOnUsers: actionResolvers.CreateOneProjectsOnUsersResolver,
    deleteManyProjectsOnUsers: actionResolvers.DeleteManyProjectsOnUsersResolver,
    deleteOneProjectsOnUsers: actionResolvers.DeleteOneProjectsOnUsersResolver,
    findFirstProjectsOnUsers: actionResolvers.FindFirstProjectsOnUsersResolver,
    findFirstProjectsOnUsersOrThrow: actionResolvers.FindFirstProjectsOnUsersOrThrowResolver,
    findManyProjectsOnUsers: actionResolvers.FindManyProjectsOnUsersResolver,
    findUniqueProjectsOnUsers: actionResolvers.FindUniqueProjectsOnUsersResolver,
    findUniqueProjectsOnUsersOrThrow: actionResolvers.FindUniqueProjectsOnUsersOrThrowResolver,
    groupByProjectsOnUsers: actionResolvers.GroupByProjectsOnUsersResolver,
    updateManyProjectsOnUsers: actionResolvers.UpdateManyProjectsOnUsersResolver,
    updateOneProjectsOnUsers: actionResolvers.UpdateOneProjectsOnUsersResolver,
    upsertOneProjectsOnUsers: actionResolvers.UpsertOneProjectsOnUsersResolver
  },
  UserAssignedTasks: {
    aggregateUserAssignedTasks: actionResolvers.AggregateUserAssignedTasksResolver,
    createManyUserAssignedTasks: actionResolvers.CreateManyUserAssignedTasksResolver,
    createOneUserAssignedTasks: actionResolvers.CreateOneUserAssignedTasksResolver,
    deleteManyUserAssignedTasks: actionResolvers.DeleteManyUserAssignedTasksResolver,
    deleteOneUserAssignedTasks: actionResolvers.DeleteOneUserAssignedTasksResolver,
    findFirstUserAssignedTasks: actionResolvers.FindFirstUserAssignedTasksResolver,
    findFirstUserAssignedTasksOrThrow: actionResolvers.FindFirstUserAssignedTasksOrThrowResolver,
    findManyUserAssignedTasks: actionResolvers.FindManyUserAssignedTasksResolver,
    findUniqueUserAssignedTasks: actionResolvers.FindUniqueUserAssignedTasksResolver,
    findUniqueUserAssignedTasksOrThrow: actionResolvers.FindUniqueUserAssignedTasksOrThrowResolver,
    groupByUserAssignedTasks: actionResolvers.GroupByUserAssignedTasksResolver,
    updateManyUserAssignedTasks: actionResolvers.UpdateManyUserAssignedTasksResolver,
    updateOneUserAssignedTasks: actionResolvers.UpdateOneUserAssignedTasksResolver,
    upsertOneUserAssignedTasks: actionResolvers.UpsertOneUserAssignedTasksResolver
  },
  Message: {
    aggregateMessage: actionResolvers.AggregateMessageResolver,
    createManyMessage: actionResolvers.CreateManyMessageResolver,
    createOneMessage: actionResolvers.CreateOneMessageResolver,
    deleteManyMessage: actionResolvers.DeleteManyMessageResolver,
    deleteOneMessage: actionResolvers.DeleteOneMessageResolver,
    findFirstMessage: actionResolvers.FindFirstMessageResolver,
    findFirstMessageOrThrow: actionResolvers.FindFirstMessageOrThrowResolver,
    messages: actionResolvers.FindManyMessageResolver,
    message: actionResolvers.FindUniqueMessageResolver,
    getMessage: actionResolvers.FindUniqueMessageOrThrowResolver,
    groupByMessage: actionResolvers.GroupByMessageResolver,
    updateManyMessage: actionResolvers.UpdateManyMessageResolver,
    updateOneMessage: actionResolvers.UpdateOneMessageResolver,
    upsertOneMessage: actionResolvers.UpsertOneMessageResolver
  },
  Chat: {
    aggregateChat: actionResolvers.AggregateChatResolver,
    createManyChat: actionResolvers.CreateManyChatResolver,
    createOneChat: actionResolvers.CreateOneChatResolver,
    deleteManyChat: actionResolvers.DeleteManyChatResolver,
    deleteOneChat: actionResolvers.DeleteOneChatResolver,
    findFirstChat: actionResolvers.FindFirstChatResolver,
    findFirstChatOrThrow: actionResolvers.FindFirstChatOrThrowResolver,
    chats: actionResolvers.FindManyChatResolver,
    chat: actionResolvers.FindUniqueChatResolver,
    getChat: actionResolvers.FindUniqueChatOrThrowResolver,
    groupByChat: actionResolvers.GroupByChatResolver,
    updateManyChat: actionResolvers.UpdateManyChatResolver,
    updateOneChat: actionResolvers.UpdateOneChatResolver,
    upsertOneChat: actionResolvers.UpsertOneChatResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Task: ["aggregateTask", "createManyTask", "createOneTask", "deleteManyTask", "deleteOneTask", "findFirstTask", "findFirstTaskOrThrow", "tasks", "task", "getTask", "groupByTask", "updateManyTask", "updateOneTask", "upsertOneTask"],
  Space: ["aggregateSpace", "createManySpace", "createOneSpace", "deleteManySpace", "deleteOneSpace", "findFirstSpace", "findFirstSpaceOrThrow", "spaces", "space", "getSpace", "groupBySpace", "updateManySpace", "updateOneSpace", "upsertOneSpace"],
  SpaceView: ["aggregateSpaceView", "createManySpaceView", "createOneSpaceView", "deleteManySpaceView", "deleteOneSpaceView", "findFirstSpaceView", "findFirstSpaceViewOrThrow", "spaceViews", "spaceView", "getSpaceView", "groupBySpaceView", "updateManySpaceView", "updateOneSpaceView", "upsertOneSpaceView"],
  SpaceSettings: ["aggregateSpaceSettings", "createManySpaceSettings", "createOneSpaceSettings", "deleteManySpaceSettings", "deleteOneSpaceSettings", "findFirstSpaceSettings", "findFirstSpaceSettingsOrThrow", "findManySpaceSettings", "findUniqueSpaceSettings", "findUniqueSpaceSettingsOrThrow", "groupBySpaceSettings", "updateManySpaceSettings", "updateOneSpaceSettings", "upsertOneSpaceSettings"],
  Project: ["aggregateProject", "createManyProject", "createOneProject", "deleteManyProject", "deleteOneProject", "findFirstProject", "findFirstProjectOrThrow", "projects", "project", "getProject", "groupByProject", "updateManyProject", "updateOneProject", "upsertOneProject"],
  ProjectSettings: ["aggregateProjectSettings", "createManyProjectSettings", "createOneProjectSettings", "deleteManyProjectSettings", "deleteOneProjectSettings", "findFirstProjectSettings", "findFirstProjectSettingsOrThrow", "findManyProjectSettings", "findUniqueProjectSettings", "findUniqueProjectSettingsOrThrow", "groupByProjectSettings", "updateManyProjectSettings", "updateOneProjectSettings", "upsertOneProjectSettings"],
  Workspace: ["aggregateWorkspace", "createManyWorkspace", "createOneWorkspace", "deleteManyWorkspace", "deleteOneWorkspace", "findFirstWorkspace", "findFirstWorkspaceOrThrow", "workspaces", "workspace", "getWorkspace", "groupByWorkspace", "updateManyWorkspace", "updateOneWorkspace", "upsertOneWorkspace"],
  WorkspaceSettings: ["aggregateWorkspaceSettings", "createManyWorkspaceSettings", "createOneWorkspaceSettings", "deleteManyWorkspaceSettings", "deleteOneWorkspaceSettings", "findFirstWorkspaceSettings", "findFirstWorkspaceSettingsOrThrow", "findManyWorkspaceSettings", "findUniqueWorkspaceSettings", "findUniqueWorkspaceSettingsOrThrow", "groupByWorkspaceSettings", "updateManyWorkspaceSettings", "updateOneWorkspaceSettings", "upsertOneWorkspaceSettings"],
  ProjectsOnUsers: ["aggregateProjectsOnUsers", "createManyProjectsOnUsers", "createOneProjectsOnUsers", "deleteManyProjectsOnUsers", "deleteOneProjectsOnUsers", "findFirstProjectsOnUsers", "findFirstProjectsOnUsersOrThrow", "findManyProjectsOnUsers", "findUniqueProjectsOnUsers", "findUniqueProjectsOnUsersOrThrow", "groupByProjectsOnUsers", "updateManyProjectsOnUsers", "updateOneProjectsOnUsers", "upsertOneProjectsOnUsers"],
  UserAssignedTasks: ["aggregateUserAssignedTasks", "createManyUserAssignedTasks", "createOneUserAssignedTasks", "deleteManyUserAssignedTasks", "deleteOneUserAssignedTasks", "findFirstUserAssignedTasks", "findFirstUserAssignedTasksOrThrow", "findManyUserAssignedTasks", "findUniqueUserAssignedTasks", "findUniqueUserAssignedTasksOrThrow", "groupByUserAssignedTasks", "updateManyUserAssignedTasks", "updateOneUserAssignedTasks", "upsertOneUserAssignedTasks"],
  Message: ["aggregateMessage", "createManyMessage", "createOneMessage", "deleteManyMessage", "deleteOneMessage", "findFirstMessage", "findFirstMessageOrThrow", "messages", "message", "getMessage", "groupByMessage", "updateManyMessage", "updateOneMessage", "upsertOneMessage"],
  Chat: ["aggregateChat", "createManyChat", "createOneChat", "deleteManyChat", "deleteOneChat", "findFirstChat", "findFirstChatOrThrow", "chats", "chat", "getChat", "groupByChat", "updateManyChat", "updateOneChat", "upsertOneChat"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTaskArgs: ["data", "skipDuplicates"],
  CreateOneTaskArgs: ["data"],
  DeleteManyTaskArgs: ["where"],
  DeleteOneTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTaskOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTaskArgs: ["where"],
  FindUniqueTaskOrThrowArgs: ["where"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTaskArgs: ["data", "where"],
  UpdateOneTaskArgs: ["data", "where"],
  UpsertOneTaskArgs: ["where", "create", "update"],
  AggregateSpaceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySpaceArgs: ["data", "skipDuplicates"],
  CreateOneSpaceArgs: ["data"],
  DeleteManySpaceArgs: ["where"],
  DeleteOneSpaceArgs: ["where"],
  FindFirstSpaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSpaceOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySpaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSpaceArgs: ["where"],
  FindUniqueSpaceOrThrowArgs: ["where"],
  GroupBySpaceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySpaceArgs: ["data", "where"],
  UpdateOneSpaceArgs: ["data", "where"],
  UpsertOneSpaceArgs: ["where", "create", "update"],
  AggregateSpaceViewArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySpaceViewArgs: ["data", "skipDuplicates"],
  CreateOneSpaceViewArgs: ["data"],
  DeleteManySpaceViewArgs: ["where"],
  DeleteOneSpaceViewArgs: ["where"],
  FindFirstSpaceViewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSpaceViewOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySpaceViewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSpaceViewArgs: ["where"],
  FindUniqueSpaceViewOrThrowArgs: ["where"],
  GroupBySpaceViewArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySpaceViewArgs: ["data", "where"],
  UpdateOneSpaceViewArgs: ["data", "where"],
  UpsertOneSpaceViewArgs: ["where", "create", "update"],
  AggregateSpaceSettingsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySpaceSettingsArgs: ["data", "skipDuplicates"],
  CreateOneSpaceSettingsArgs: ["data"],
  DeleteManySpaceSettingsArgs: ["where"],
  DeleteOneSpaceSettingsArgs: ["where"],
  FindFirstSpaceSettingsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSpaceSettingsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySpaceSettingsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSpaceSettingsArgs: ["where"],
  FindUniqueSpaceSettingsOrThrowArgs: ["where"],
  GroupBySpaceSettingsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySpaceSettingsArgs: ["data", "where"],
  UpdateOneSpaceSettingsArgs: ["data", "where"],
  UpsertOneSpaceSettingsArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProjectArgs: ["data", "skipDuplicates"],
  CreateOneProjectArgs: ["data"],
  DeleteManyProjectArgs: ["where"],
  DeleteOneProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProjectOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProjectArgs: ["where"],
  FindUniqueProjectOrThrowArgs: ["where"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProjectArgs: ["data", "where"],
  UpdateOneProjectArgs: ["data", "where"],
  UpsertOneProjectArgs: ["where", "create", "update"],
  AggregateProjectSettingsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProjectSettingsArgs: ["data", "skipDuplicates"],
  CreateOneProjectSettingsArgs: ["data"],
  DeleteManyProjectSettingsArgs: ["where"],
  DeleteOneProjectSettingsArgs: ["where"],
  FindFirstProjectSettingsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProjectSettingsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectSettingsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProjectSettingsArgs: ["where"],
  FindUniqueProjectSettingsOrThrowArgs: ["where"],
  GroupByProjectSettingsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProjectSettingsArgs: ["data", "where"],
  UpdateOneProjectSettingsArgs: ["data", "where"],
  UpsertOneProjectSettingsArgs: ["where", "create", "update"],
  AggregateWorkspaceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWorkspaceArgs: ["data", "skipDuplicates"],
  CreateOneWorkspaceArgs: ["data"],
  DeleteManyWorkspaceArgs: ["where"],
  DeleteOneWorkspaceArgs: ["where"],
  FindFirstWorkspaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWorkspaceOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWorkspaceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWorkspaceArgs: ["where"],
  FindUniqueWorkspaceOrThrowArgs: ["where"],
  GroupByWorkspaceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWorkspaceArgs: ["data", "where"],
  UpdateOneWorkspaceArgs: ["data", "where"],
  UpsertOneWorkspaceArgs: ["where", "create", "update"],
  AggregateWorkspaceSettingsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWorkspaceSettingsArgs: ["data", "skipDuplicates"],
  CreateOneWorkspaceSettingsArgs: ["data"],
  DeleteManyWorkspaceSettingsArgs: ["where"],
  DeleteOneWorkspaceSettingsArgs: ["where"],
  FindFirstWorkspaceSettingsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWorkspaceSettingsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWorkspaceSettingsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWorkspaceSettingsArgs: ["where"],
  FindUniqueWorkspaceSettingsOrThrowArgs: ["where"],
  GroupByWorkspaceSettingsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWorkspaceSettingsArgs: ["data", "where"],
  UpdateOneWorkspaceSettingsArgs: ["data", "where"],
  UpsertOneWorkspaceSettingsArgs: ["where", "create", "update"],
  AggregateProjectsOnUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProjectsOnUsersArgs: ["data", "skipDuplicates"],
  CreateOneProjectsOnUsersArgs: ["data"],
  DeleteManyProjectsOnUsersArgs: ["where"],
  DeleteOneProjectsOnUsersArgs: ["where"],
  FindFirstProjectsOnUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProjectsOnUsersOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectsOnUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProjectsOnUsersArgs: ["where"],
  FindUniqueProjectsOnUsersOrThrowArgs: ["where"],
  GroupByProjectsOnUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProjectsOnUsersArgs: ["data", "where"],
  UpdateOneProjectsOnUsersArgs: ["data", "where"],
  UpsertOneProjectsOnUsersArgs: ["where", "create", "update"],
  AggregateUserAssignedTasksArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserAssignedTasksArgs: ["data", "skipDuplicates"],
  CreateOneUserAssignedTasksArgs: ["data"],
  DeleteManyUserAssignedTasksArgs: ["where"],
  DeleteOneUserAssignedTasksArgs: ["where"],
  FindFirstUserAssignedTasksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserAssignedTasksOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserAssignedTasksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserAssignedTasksArgs: ["where"],
  FindUniqueUserAssignedTasksOrThrowArgs: ["where"],
  GroupByUserAssignedTasksArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserAssignedTasksArgs: ["data", "where"],
  UpdateOneUserAssignedTasksArgs: ["data", "where"],
  UpsertOneUserAssignedTasksArgs: ["where", "create", "update"],
  AggregateMessageArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMessageArgs: ["data", "skipDuplicates"],
  CreateOneMessageArgs: ["data"],
  DeleteManyMessageArgs: ["where"],
  DeleteOneMessageArgs: ["where"],
  FindFirstMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMessageOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMessageArgs: ["where"],
  FindUniqueMessageOrThrowArgs: ["where"],
  GroupByMessageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMessageArgs: ["data", "where"],
  UpdateOneMessageArgs: ["data", "where"],
  UpsertOneMessageArgs: ["where", "create", "update"],
  AggregateChatArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyChatArgs: ["data", "skipDuplicates"],
  CreateOneChatArgs: ["data"],
  DeleteManyChatArgs: ["where"],
  DeleteOneChatArgs: ["where"],
  FindFirstChatArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstChatOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyChatArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueChatArgs: ["where"],
  FindUniqueChatOrThrowArgs: ["where"],
  GroupByChatArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyChatArgs: ["data", "where"],
  UpdateOneChatArgs: ["data", "where"],
  UpsertOneChatArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Task: relationResolvers.TaskRelationsResolver,
  Space: relationResolvers.SpaceRelationsResolver,
  SpaceView: relationResolvers.SpaceViewRelationsResolver,
  SpaceSettings: relationResolvers.SpaceSettingsRelationsResolver,
  Project: relationResolvers.ProjectRelationsResolver,
  ProjectSettings: relationResolvers.ProjectSettingsRelationsResolver,
  Workspace: relationResolvers.WorkspaceRelationsResolver,
  WorkspaceSettings: relationResolvers.WorkspaceSettingsRelationsResolver,
  ProjectsOnUsers: relationResolvers.ProjectsOnUsersRelationsResolver,
  UserAssignedTasks: relationResolvers.UserAssignedTasksRelationsResolver,
  Message: relationResolvers.MessageRelationsResolver,
  Chat: relationResolvers.ChatRelationsResolver
};
const relationResolversInfo = {
  User: ["chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  Task: ["chat", "creator", "parent", "project", "subTasks", "assignes"],
  Space: ["chat", "parent", "project", "settings", "view", "subspaces"],
  SpaceView: ["space"],
  SpaceSettings: ["space"],
  Project: ["chat", "owner", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectSettings: ["project"],
  Workspace: ["settings", "user", "projects"],
  WorkspaceSettings: ["workspace"],
  ProjectsOnUsers: ["project", "user"],
  UserAssignedTasks: ["task", "user"],
  Message: ["chat", "parent", "sender", "subMessages"],
  Chat: ["messages", "Project", "Space", "Task", "User"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  Task: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  Space: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceView: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettings: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  Project: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectSettings: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  Workspace: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceSettings: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  ProjectsOnUsers: ["projectId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasks: ["taskId", "userId", "assignedAt", "assignedBy"],
  Message: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  Chat: ["id", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role", "_count", "_min", "_max"],
  AggregateTask: ["_count", "_min", "_max"],
  TaskGroupBy: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId", "_count", "_min", "_max"],
  AggregateSpace: ["_count", "_min", "_max"],
  SpaceGroupBy: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId", "_count", "_min", "_max"],
  AggregateSpaceView: ["_count", "_min", "_max"],
  SpaceViewGroupBy: ["id", "createdAt", "updatedAt", "localId", "spaceId", "_count", "_min", "_max"],
  AggregateSpaceSettings: ["_count", "_min", "_max"],
  SpaceSettingsGroupBy: ["id", "createdAt", "updatedAt", "localId", "spaceId", "_count", "_min", "_max"],
  AggregateProject: ["_count", "_min", "_max"],
  ProjectGroupBy: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId", "_count", "_min", "_max"],
  AggregateProjectSettings: ["_count", "_min", "_max"],
  ProjectSettingsGroupBy: ["id", "createdAt", "updatedAt", "localId", "projectId", "_count", "_min", "_max"],
  AggregateWorkspace: ["_count", "_min", "_max"],
  WorkspaceGroupBy: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId", "_count", "_min", "_max"],
  AggregateWorkspaceSettings: ["_count", "_min", "_max"],
  WorkspaceSettingsGroupBy: ["id", "createdAt", "updatedAt", "localId", "workspaceId", "_count", "_min", "_max"],
  AggregateProjectsOnUsers: ["_count", "_min", "_max"],
  ProjectsOnUsersGroupBy: ["projectId", "userId", "assignedAt", "assignedBy", "_count", "_min", "_max"],
  AggregateUserAssignedTasks: ["_count", "_min", "_max"],
  UserAssignedTasksGroupBy: ["taskId", "userId", "assignedAt", "assignedBy", "_count", "_min", "_max"],
  AggregateMessage: ["_count", "_min", "_max"],
  MessageGroupBy: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId", "_count", "_min", "_max"],
  AggregateChat: ["_count", "_min", "_max"],
  ChatGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "User_B", "User_A"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role", "_all"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  TaskCount: ["subTasks", "assignes"],
  TaskCountAggregate: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId", "_all"],
  TaskMinAggregate: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  TaskMaxAggregate: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  SpaceCount: ["subspaces"],
  SpaceCountAggregate: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId", "_all"],
  SpaceMinAggregate: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceMaxAggregate: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceViewCountAggregate: ["id", "createdAt", "updatedAt", "localId", "spaceId", "_all"],
  SpaceViewMinAggregate: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceViewMaxAggregate: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsCountAggregate: ["id", "createdAt", "updatedAt", "localId", "spaceId", "_all"],
  SpaceSettingsMinAggregate: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsMaxAggregate: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  ProjectCount: ["users", "spaces", "tasks"],
  ProjectCountAggregate: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId", "_all"],
  ProjectMinAggregate: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectMaxAggregate: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectSettingsCountAggregate: ["id", "createdAt", "updatedAt", "localId", "projectId", "_all"],
  ProjectSettingsMinAggregate: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  ProjectSettingsMaxAggregate: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  WorkspaceCount: ["projects"],
  WorkspaceCountAggregate: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId", "_all"],
  WorkspaceMinAggregate: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceMaxAggregate: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceSettingsCountAggregate: ["id", "createdAt", "updatedAt", "localId", "workspaceId", "_all"],
  WorkspaceSettingsMinAggregate: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  WorkspaceSettingsMaxAggregate: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  ProjectsOnUsersCountAggregate: ["projectId", "userId", "assignedAt", "assignedBy", "_all"],
  ProjectsOnUsersMinAggregate: ["projectId", "userId", "assignedAt", "assignedBy"],
  ProjectsOnUsersMaxAggregate: ["projectId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasksCountAggregate: ["taskId", "userId", "assignedAt", "assignedBy", "_all"],
  UserAssignedTasksMinAggregate: ["taskId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasksMaxAggregate: ["taskId", "userId", "assignedAt", "assignedBy"],
  MessageCount: ["subMessages"],
  MessageCountAggregate: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId", "_all"],
  MessageMinAggregate: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  MessageMaxAggregate: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  ChatCount: ["messages"],
  ChatCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  ChatMinAggregate: ["id", "createdAt", "updatedAt"],
  ChatMaxAggregate: ["id", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserWhereUniqueInput: ["id", "email", "chatId"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  TaskWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId", "chat", "creator", "parent", "project", "subTasks", "assignes"],
  TaskOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId", "chat", "creator", "parent", "project", "subTasks", "assignes"],
  TaskWhereUniqueInput: ["id", "chatId"],
  TaskOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId", "_count", "_max", "_min"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  SpaceWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId", "chat", "parent", "project", "settings", "view", "subspaces"],
  SpaceOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId", "chat", "parent", "project", "settings", "view", "subspaces"],
  SpaceWhereUniqueInput: ["id", "viewId", "settingsId", "chatId"],
  SpaceOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId", "_count", "_max", "_min"],
  SpaceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceViewWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceViewOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceViewWhereUniqueInput: ["id"],
  SpaceViewOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "_count", "_max", "_min"],
  SpaceViewScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceSettingsOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceSettingsWhereUniqueInput: ["id"],
  SpaceSettingsOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "_count", "_max", "_min"],
  SpaceSettingsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "spaceId"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId", "chat", "owner", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId", "chat", "owner", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectWhereUniqueInput: ["id", "settingsId", "chatId"],
  ProjectOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId", "_count", "_max", "_min"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectSettingsWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "projectId", "project"],
  ProjectSettingsOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "localId", "projectId", "project"],
  ProjectSettingsWhereUniqueInput: ["id"],
  ProjectSettingsOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "localId", "projectId", "_count", "_max", "_min"],
  ProjectSettingsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "projectId"],
  WorkspaceWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "settingsId", "userId", "settings", "user", "projects"],
  WorkspaceOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId", "settings", "user", "projects"],
  WorkspaceWhereUniqueInput: ["id", "settingsId", "userId"],
  WorkspaceOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId", "_count", "_max", "_min"],
  WorkspaceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceSettingsWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "workspaceId", "workspace"],
  WorkspaceSettingsOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId", "workspace"],
  WorkspaceSettingsWhereUniqueInput: ["id"],
  WorkspaceSettingsOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId", "_count", "_max", "_min"],
  WorkspaceSettingsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "localId", "workspaceId"],
  ProjectsOnUsersWhereInput: ["AND", "OR", "NOT", "projectId", "userId", "assignedAt", "assignedBy", "project", "user"],
  ProjectsOnUsersOrderByWithRelationInput: ["projectId", "userId", "assignedAt", "assignedBy", "project", "user"],
  ProjectsOnUsersWhereUniqueInput: ["projectId_userId"],
  ProjectsOnUsersOrderByWithAggregationInput: ["projectId", "userId", "assignedAt", "assignedBy", "_count", "_max", "_min"],
  ProjectsOnUsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "projectId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasksWhereInput: ["AND", "OR", "NOT", "taskId", "userId", "assignedAt", "assignedBy", "task", "user"],
  UserAssignedTasksOrderByWithRelationInput: ["taskId", "userId", "assignedAt", "assignedBy", "task", "user"],
  UserAssignedTasksWhereUniqueInput: ["taskId_userId"],
  UserAssignedTasksOrderByWithAggregationInput: ["taskId", "userId", "assignedAt", "assignedBy", "_count", "_max", "_min"],
  UserAssignedTasksScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "taskId", "userId", "assignedAt", "assignedBy"],
  MessageWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId", "chat", "parent", "sender", "subMessages"],
  MessageOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId", "chat", "parent", "sender", "subMessages"],
  MessageWhereUniqueInput: ["id"],
  MessageOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId", "_count", "_max", "_min"],
  MessageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  ChatWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "messages", "Project", "Space", "Task", "User"],
  ChatOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Space", "Task", "User"],
  ChatWhereUniqueInput: ["id"],
  ChatOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "_count", "_max", "_min"],
  ChatScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  UserCreateInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserUpdateInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  UserUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role"],
  TaskCreateInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "project", "subTasks", "assignes"],
  TaskUpdateInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "project", "subTasks", "assignes"],
  TaskCreateManyInput: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  TaskUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "status", "details"],
  SpaceCreateInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "settings", "view", "subspaces"],
  SpaceUpdateInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "settings", "view", "subspaces"],
  SpaceCreateManyInput: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "spaceType"],
  SpaceViewCreateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceViewUpdateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceViewCreateManyInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceViewUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsCreateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceSettingsUpdateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId", "space"],
  SpaceSettingsCreateManyInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  ProjectCreateInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectUpdateInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectCreateManyInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title", "description"],
  ProjectSettingsCreateInput: ["id", "createdAt", "updatedAt", "localId", "projectId", "project"],
  ProjectSettingsUpdateInput: ["id", "createdAt", "updatedAt", "localId", "projectId", "project"],
  ProjectSettingsCreateManyInput: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  ProjectSettingsUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  WorkspaceCreateInput: ["id", "createdAt", "updatedAt", "title", "settings", "user", "projects"],
  WorkspaceUpdateInput: ["id", "createdAt", "updatedAt", "title", "settings", "user", "projects"],
  WorkspaceCreateManyInput: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title"],
  WorkspaceSettingsCreateInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId", "workspace"],
  WorkspaceSettingsUpdateInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId", "workspace"],
  WorkspaceSettingsCreateManyInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  WorkspaceSettingsUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  ProjectsOnUsersCreateInput: ["assignedAt", "assignedBy", "project", "user"],
  ProjectsOnUsersUpdateInput: ["assignedAt", "assignedBy", "project", "user"],
  ProjectsOnUsersCreateManyInput: ["projectId", "userId", "assignedAt", "assignedBy"],
  ProjectsOnUsersUpdateManyMutationInput: ["assignedAt", "assignedBy"],
  UserAssignedTasksCreateInput: ["assignedAt", "assignedBy", "task", "user"],
  UserAssignedTasksUpdateInput: ["assignedAt", "assignedBy", "task", "user"],
  UserAssignedTasksCreateManyInput: ["taskId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasksUpdateManyMutationInput: ["assignedAt", "assignedBy"],
  MessageCreateInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "parent", "sender", "subMessages"],
  MessageUpdateInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "parent", "sender", "subMessages"],
  MessageCreateManyInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  MessageUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type"],
  ChatCreateInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Space", "Task", "User"],
  ChatUpdateInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Space", "Task", "User"],
  ChatCreateManyInput: ["id", "createdAt", "updatedAt"],
  ChatUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  ChatRelationFilter: ["is", "isNot"],
  MessageListRelationFilter: ["every", "some", "none"],
  ProjectListRelationFilter: ["every", "some", "none"],
  ProjectsOnUsersListRelationFilter: ["every", "some", "none"],
  TaskListRelationFilter: ["every", "some", "none"],
  UserAssignedTasksListRelationFilter: ["every", "some", "none"],
  WorkspaceRelationFilter: ["is", "isNot"],
  UserListRelationFilter: ["every", "some", "none"],
  MessageOrderByRelationAggregateInput: ["_count"],
  ProjectOrderByRelationAggregateInput: ["_count"],
  ProjectsOnUsersOrderByRelationAggregateInput: ["_count"],
  TaskOrderByRelationAggregateInput: ["_count"],
  UserAssignedTasksOrderByRelationAggregateInput: ["_count"],
  UserOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  TaskRelationFilter: ["is", "isNot"],
  ProjectRelationFilter: ["is", "isNot"],
  TaskCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  TaskMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  TaskMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  SpaceRelationFilter: ["is", "isNot"],
  SpaceSettingsRelationFilter: ["is", "isNot"],
  SpaceViewRelationFilter: ["is", "isNot"],
  SpaceListRelationFilter: ["every", "some", "none"],
  SpaceOrderByRelationAggregateInput: ["_count"],
  SpaceCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceViewCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceViewMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceViewMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  ProjectSettingsRelationFilter: ["is", "isNot"],
  ProjectCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectSettingsCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  ProjectSettingsMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  ProjectSettingsMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  WorkspaceSettingsRelationFilter: ["is", "isNot"],
  WorkspaceCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "settingsId", "userId"],
  WorkspaceSettingsCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  WorkspaceSettingsMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  WorkspaceSettingsMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  ProjectsOnUsersProjectIdUserIdCompoundUniqueInput: ["projectId", "userId"],
  ProjectsOnUsersCountOrderByAggregateInput: ["projectId", "userId", "assignedAt", "assignedBy"],
  ProjectsOnUsersMaxOrderByAggregateInput: ["projectId", "userId", "assignedAt", "assignedBy"],
  ProjectsOnUsersMinOrderByAggregateInput: ["projectId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasksTaskIdUserIdCompoundUniqueInput: ["taskId", "userId"],
  UserAssignedTasksCountOrderByAggregateInput: ["taskId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasksMaxOrderByAggregateInput: ["taskId", "userId", "assignedAt", "assignedBy"],
  UserAssignedTasksMinOrderByAggregateInput: ["taskId", "userId", "assignedAt", "assignedBy"],
  MessageRelationFilter: ["is", "isNot"],
  MessageCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  MessageMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  MessageMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  ChatCountOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  ChatMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  ChatMinOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  ChatCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  MessageCreateNestedManyWithoutSenderInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectsOnUsersCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  TaskCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserAssignedTasksCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  WorkspaceCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutUser_AInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutUser_BInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  ChatUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MessageUpdateManyWithoutSenderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProjectUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProjectsOnUsersUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TaskUpdateManyWithoutCreatorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserAssignedTasksUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WorkspaceUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateManyWithoutUser_ANestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutUser_BNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ChatCreateNestedOneWithoutTaskInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutCreatedTasksInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutSubTasksInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserAssignedTasksCreateNestedManyWithoutTaskInput: ["create", "connectOrCreate", "createMany", "connect"],
  ChatUpdateOneWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutCreatedTasksNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskUpdateOneWithoutSubTasksNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectUpdateOneWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskUpdateManyWithoutParentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserAssignedTasksUpdateManyWithoutTaskNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ChatCreateNestedOneWithoutSpaceInput: ["create", "connectOrCreate", "connect"],
  SpaceCreateNestedOneWithoutSubspacesInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedOneWithoutSpacesInput: ["create", "connectOrCreate", "connect"],
  SpaceSettingsCreateNestedOneWithoutSpaceInput: ["create", "connectOrCreate", "connect"],
  SpaceViewCreateNestedOneWithoutSpaceInput: ["create", "connectOrCreate", "connect"],
  SpaceCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  ChatUpdateOneWithoutSpaceNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SpaceUpdateOneWithoutSubspacesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectUpdateOneRequiredWithoutSpacesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SpaceViewUpdateOneRequiredWithoutSpaceNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SpaceUpdateManyWithoutParentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SpaceCreateNestedOneWithoutViewInput: ["create", "connectOrCreate", "connect"],
  SpaceUpdateOneWithoutViewNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SpaceCreateNestedOneWithoutSettingsInput: ["create", "connectOrCreate", "connect"],
  SpaceUpdateOneWithoutSettingsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ChatCreateNestedOneWithoutProjectInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutOwnedProjectsInput: ["create", "connectOrCreate", "connect"],
  ProjectSettingsCreateNestedOneWithoutProjectInput: ["create", "connectOrCreate", "connect"],
  WorkspaceCreateNestedOneWithoutProjectsInput: ["create", "connectOrCreate", "connect"],
  ProjectsOnUsersCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  SpaceCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  TaskCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  ChatUpdateOneWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneRequiredWithoutOwnedProjectsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WorkspaceUpdateOneRequiredWithoutProjectsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProjectsOnUsersUpdateManyWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SpaceUpdateManyWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TaskUpdateManyWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProjectCreateNestedOneWithoutSettingsInput: ["create", "connectOrCreate", "connect"],
  ProjectUpdateOneWithoutSettingsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutWorkspacesInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedManyWithoutWorkspaceInput: ["create", "connectOrCreate", "createMany", "connect"],
  WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutWorkspacesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProjectUpdateManyWithoutWorkspaceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WorkspaceCreateNestedOneWithoutSettingsInput: ["create", "connectOrCreate", "connect"],
  WorkspaceUpdateOneWithoutSettingsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutProjectsInput: ["create", "connectOrCreate", "connect"],
  ProjectUpdateOneRequiredWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutProjectsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TaskCreateNestedOneWithoutAssignesInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutAssignedTasksInput: ["create", "connectOrCreate", "connect"],
  TaskUpdateOneRequiredWithoutAssignesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutAssignedTasksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ChatCreateNestedOneWithoutMessagesInput: ["create", "connectOrCreate", "connect"],
  MessageCreateNestedOneWithoutSubMessagesInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  MessageCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  ChatUpdateOneRequiredWithoutMessagesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MessageUpdateOneWithoutSubMessagesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MessageUpdateManyWithoutParentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MessageCreateNestedManyWithoutChatInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectCreateNestedOneWithoutChatInput: ["create", "connectOrCreate", "connect"],
  SpaceCreateNestedOneWithoutChatInput: ["create", "connectOrCreate", "connect"],
  TaskCreateNestedOneWithoutChatInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutChatInput: ["create", "connectOrCreate", "connect"],
  MessageUpdateManyWithoutChatNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProjectUpdateOneWithoutChatNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SpaceUpdateOneWithoutChatNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TaskUpdateOneWithoutChatNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutChatNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ChatCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Space", "Task"],
  ChatCreateOrConnectWithoutUserInput: ["where", "create"],
  MessageCreateWithoutSenderInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "parent", "subMessages"],
  MessageCreateOrConnectWithoutSenderInput: ["where", "create"],
  MessageCreateManySenderInputEnvelope: ["data", "skipDuplicates"],
  ProjectCreateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectCreateOrConnectWithoutOwnerInput: ["where", "create"],
  ProjectCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  ProjectsOnUsersCreateWithoutUserInput: ["assignedAt", "assignedBy", "project"],
  ProjectsOnUsersCreateOrConnectWithoutUserInput: ["where", "create"],
  ProjectsOnUsersCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  TaskCreateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "parent", "project", "subTasks", "assignes"],
  TaskCreateOrConnectWithoutCreatorInput: ["where", "create"],
  TaskCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  UserAssignedTasksCreateWithoutUserInput: ["assignedAt", "assignedBy", "task"],
  UserAssignedTasksCreateOrConnectWithoutUserInput: ["where", "create"],
  UserAssignedTasksCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  WorkspaceCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "title", "settings", "projects"],
  WorkspaceCreateOrConnectWithoutUserInput: ["where", "create"],
  UserCreateWithoutUser_AInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B"],
  UserCreateOrConnectWithoutUser_AInput: ["where", "create"],
  UserCreateWithoutUser_BInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_A"],
  UserCreateOrConnectWithoutUser_BInput: ["where", "create"],
  ChatUpsertWithoutUserInput: ["update", "create"],
  ChatUpdateWithoutUserInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Space", "Task"],
  MessageUpsertWithWhereUniqueWithoutSenderInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutSenderInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutSenderInput: ["where", "data"],
  MessageScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId", "chatId"],
  ProjectUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  ProjectScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "ownerId", "chatId"],
  ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ProjectsOnUsersUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ProjectsOnUsersScalarWhereInput: ["AND", "OR", "NOT", "projectId", "userId", "assignedAt", "assignedBy"],
  TaskUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "projectId", "creatorId", "parentId", "status", "details", "chatId"],
  UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserAssignedTasksUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserAssignedTasksScalarWhereInput: ["AND", "OR", "NOT", "taskId", "userId", "assignedAt", "assignedBy"],
  WorkspaceUpsertWithoutUserInput: ["update", "create"],
  WorkspaceUpdateWithoutUserInput: ["id", "createdAt", "updatedAt", "title", "settings", "projects"],
  UserUpsertWithWhereUniqueWithoutUser_AInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutUser_AInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutUser_AInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "chatId", "role"],
  UserUpsertWithWhereUniqueWithoutUser_BInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutUser_BInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutUser_BInput: ["where", "data"],
  ChatCreateWithoutTaskInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Space", "User"],
  ChatCreateOrConnectWithoutTaskInput: ["where", "create"],
  UserCreateWithoutCreatedTasksInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserCreateOrConnectWithoutCreatedTasksInput: ["where", "create"],
  TaskCreateWithoutSubTasksInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "project", "assignes"],
  TaskCreateOrConnectWithoutSubTasksInput: ["where", "create"],
  ProjectCreateWithoutTasksInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "users", "spaces"],
  ProjectCreateOrConnectWithoutTasksInput: ["where", "create"],
  TaskCreateWithoutParentInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "project", "subTasks", "assignes"],
  TaskCreateOrConnectWithoutParentInput: ["where", "create"],
  TaskCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  UserAssignedTasksCreateWithoutTaskInput: ["assignedAt", "assignedBy", "user"],
  UserAssignedTasksCreateOrConnectWithoutTaskInput: ["where", "create"],
  UserAssignedTasksCreateManyTaskInputEnvelope: ["data", "skipDuplicates"],
  ChatUpsertWithoutTaskInput: ["update", "create"],
  ChatUpdateWithoutTaskInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Space", "User"],
  UserUpsertWithoutCreatedTasksInput: ["update", "create"],
  UserUpdateWithoutCreatedTasksInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "assignedTasks", "workspaces", "User_B", "User_A"],
  TaskUpsertWithoutSubTasksInput: ["update", "create"],
  TaskUpdateWithoutSubTasksInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "project", "assignes"],
  ProjectUpsertWithoutTasksInput: ["update", "create"],
  ProjectUpdateWithoutTasksInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "users", "spaces"],
  TaskUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput: ["where", "update", "create"],
  UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput: ["where", "data"],
  UserAssignedTasksUpdateManyWithWhereWithoutTaskInput: ["where", "data"],
  ChatCreateWithoutSpaceInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Task", "User"],
  ChatCreateOrConnectWithoutSpaceInput: ["where", "create"],
  SpaceCreateWithoutSubspacesInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "settings", "view"],
  SpaceCreateOrConnectWithoutSubspacesInput: ["where", "create"],
  ProjectCreateWithoutSpacesInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "users", "tasks"],
  ProjectCreateOrConnectWithoutSpacesInput: ["where", "create"],
  SpaceSettingsCreateWithoutSpaceInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceSettingsCreateOrConnectWithoutSpaceInput: ["where", "create"],
  SpaceViewCreateWithoutSpaceInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceViewCreateOrConnectWithoutSpaceInput: ["where", "create"],
  SpaceCreateWithoutParentInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "project", "settings", "view", "subspaces"],
  SpaceCreateOrConnectWithoutParentInput: ["where", "create"],
  SpaceCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  ChatUpsertWithoutSpaceInput: ["update", "create"],
  ChatUpdateWithoutSpaceInput: ["id", "createdAt", "updatedAt", "messages", "Project", "Task", "User"],
  SpaceUpsertWithoutSubspacesInput: ["update", "create"],
  SpaceUpdateWithoutSubspacesInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "settings", "view"],
  ProjectUpsertWithoutSpacesInput: ["update", "create"],
  ProjectUpdateWithoutSpacesInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "users", "tasks"],
  SpaceSettingsUpsertWithoutSpaceInput: ["update", "create"],
  SpaceSettingsUpdateWithoutSpaceInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceViewUpsertWithoutSpaceInput: ["update", "create"],
  SpaceViewUpdateWithoutSpaceInput: ["id", "createdAt", "updatedAt", "localId", "spaceId"],
  SpaceUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  SpaceUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  SpaceUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  SpaceScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "parentId", "chatId"],
  SpaceCreateWithoutViewInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "settings", "subspaces"],
  SpaceCreateOrConnectWithoutViewInput: ["where", "create"],
  SpaceUpsertWithoutViewInput: ["update", "create"],
  SpaceUpdateWithoutViewInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "settings", "subspaces"],
  SpaceCreateWithoutSettingsInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "view", "subspaces"],
  SpaceCreateOrConnectWithoutSettingsInput: ["where", "create"],
  SpaceUpsertWithoutSettingsInput: ["update", "create"],
  SpaceUpdateWithoutSettingsInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "project", "view", "subspaces"],
  ChatCreateWithoutProjectInput: ["id", "createdAt", "updatedAt", "messages", "Space", "Task", "User"],
  ChatCreateOrConnectWithoutProjectInput: ["where", "create"],
  UserCreateWithoutOwnedProjectsInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserCreateOrConnectWithoutOwnedProjectsInput: ["where", "create"],
  ProjectSettingsCreateWithoutProjectInput: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  ProjectSettingsCreateOrConnectWithoutProjectInput: ["where", "create"],
  WorkspaceCreateWithoutProjectsInput: ["id", "createdAt", "updatedAt", "title", "settings", "user"],
  WorkspaceCreateOrConnectWithoutProjectsInput: ["where", "create"],
  ProjectsOnUsersCreateWithoutProjectInput: ["assignedAt", "assignedBy", "user"],
  ProjectsOnUsersCreateOrConnectWithoutProjectInput: ["where", "create"],
  ProjectsOnUsersCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  SpaceCreateWithoutProjectInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "settings", "view", "subspaces"],
  SpaceCreateOrConnectWithoutProjectInput: ["where", "create"],
  SpaceCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  TaskCreateWithoutProjectInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "subTasks", "assignes"],
  TaskCreateOrConnectWithoutProjectInput: ["where", "create"],
  TaskCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  ChatUpsertWithoutProjectInput: ["update", "create"],
  ChatUpdateWithoutProjectInput: ["id", "createdAt", "updatedAt", "messages", "Space", "Task", "User"],
  UserUpsertWithoutOwnedProjectsInput: ["update", "create"],
  UserUpdateWithoutOwnedProjectsInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  ProjectSettingsUpsertWithoutProjectInput: ["update", "create"],
  ProjectSettingsUpdateWithoutProjectInput: ["id", "createdAt", "updatedAt", "localId", "projectId"],
  WorkspaceUpsertWithoutProjectsInput: ["update", "create"],
  WorkspaceUpdateWithoutProjectsInput: ["id", "createdAt", "updatedAt", "title", "settings", "user"],
  ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  SpaceUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  SpaceUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  SpaceUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  TaskUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  ProjectCreateWithoutSettingsInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "workspace", "users", "spaces", "tasks"],
  ProjectCreateOrConnectWithoutSettingsInput: ["where", "create"],
  ProjectUpsertWithoutSettingsInput: ["update", "create"],
  ProjectUpdateWithoutSettingsInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "workspace", "users", "spaces", "tasks"],
  WorkspaceSettingsCreateWithoutWorkspaceInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  WorkspaceSettingsCreateOrConnectWithoutWorkspaceInput: ["where", "create"],
  UserCreateWithoutWorkspacesInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "User_B", "User_A"],
  UserCreateOrConnectWithoutWorkspacesInput: ["where", "create"],
  ProjectCreateWithoutWorkspaceInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "users", "spaces", "tasks"],
  ProjectCreateOrConnectWithoutWorkspaceInput: ["where", "create"],
  ProjectCreateManyWorkspaceInputEnvelope: ["data", "skipDuplicates"],
  WorkspaceSettingsUpsertWithoutWorkspaceInput: ["update", "create"],
  WorkspaceSettingsUpdateWithoutWorkspaceInput: ["id", "createdAt", "updatedAt", "localId", "workspaceId"],
  UserUpsertWithoutWorkspacesInput: ["update", "create"],
  UserUpdateWithoutWorkspacesInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "User_B", "User_A"],
  ProjectUpsertWithWhereUniqueWithoutWorkspaceInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutWorkspaceInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutWorkspaceInput: ["where", "data"],
  WorkspaceCreateWithoutSettingsInput: ["id", "createdAt", "updatedAt", "title", "user", "projects"],
  WorkspaceCreateOrConnectWithoutSettingsInput: ["where", "create"],
  WorkspaceUpsertWithoutSettingsInput: ["update", "create"],
  WorkspaceUpdateWithoutSettingsInput: ["id", "createdAt", "updatedAt", "title", "user", "projects"],
  ProjectCreateWithoutUsersInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "spaces", "tasks"],
  ProjectCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserCreateWithoutProjectsInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserCreateOrConnectWithoutProjectsInput: ["where", "create"],
  ProjectUpsertWithoutUsersInput: ["update", "create"],
  ProjectUpdateWithoutUsersInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "workspace", "spaces", "tasks"],
  UserUpsertWithoutProjectsInput: ["update", "create"],
  UserUpdateWithoutProjectsInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  TaskCreateWithoutAssignesInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "project", "subTasks"],
  TaskCreateOrConnectWithoutAssignesInput: ["where", "create"],
  UserCreateWithoutAssignedTasksInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "workspaces", "User_B", "User_A"],
  UserCreateOrConnectWithoutAssignedTasksInput: ["where", "create"],
  TaskUpsertWithoutAssignesInput: ["update", "create"],
  TaskUpdateWithoutAssignesInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "project", "subTasks"],
  UserUpsertWithoutAssignedTasksInput: ["update", "create"],
  UserUpdateWithoutAssignedTasksInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "workspaces", "User_B", "User_A"],
  ChatCreateWithoutMessagesInput: ["id", "createdAt", "updatedAt", "Project", "Space", "Task", "User"],
  ChatCreateOrConnectWithoutMessagesInput: ["where", "create"],
  MessageCreateWithoutSubMessagesInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "parent", "sender"],
  MessageCreateOrConnectWithoutSubMessagesInput: ["where", "create"],
  UserCreateWithoutCommentsInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  MessageCreateWithoutParentInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "sender", "subMessages"],
  MessageCreateOrConnectWithoutParentInput: ["where", "create"],
  MessageCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  ChatUpsertWithoutMessagesInput: ["update", "create"],
  ChatUpdateWithoutMessagesInput: ["id", "createdAt", "updatedAt", "Project", "Space", "Task", "User"],
  MessageUpsertWithoutSubMessagesInput: ["update", "create"],
  MessageUpdateWithoutSubMessagesInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "parent", "sender"],
  UserUpsertWithoutCommentsInput: ["update", "create"],
  UserUpdateWithoutCommentsInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  MessageUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  MessageCreateWithoutChatInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "parent", "sender", "subMessages"],
  MessageCreateOrConnectWithoutChatInput: ["where", "create"],
  MessageCreateManyChatInputEnvelope: ["data", "skipDuplicates"],
  ProjectCreateWithoutChatInput: ["id", "createdAt", "updatedAt", "title", "description", "owner", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectCreateOrConnectWithoutChatInput: ["where", "create"],
  SpaceCreateWithoutChatInput: ["id", "createdAt", "updatedAt", "spaceType", "parent", "project", "settings", "view", "subspaces"],
  SpaceCreateOrConnectWithoutChatInput: ["where", "create"],
  TaskCreateWithoutChatInput: ["id", "createdAt", "updatedAt", "status", "details", "creator", "parent", "project", "subTasks", "assignes"],
  TaskCreateOrConnectWithoutChatInput: ["where", "create"],
  UserCreateWithoutChatInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  UserCreateOrConnectWithoutChatInput: ["where", "create"],
  MessageUpsertWithWhereUniqueWithoutChatInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutChatInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutChatInput: ["where", "data"],
  ProjectUpsertWithoutChatInput: ["update", "create"],
  ProjectUpdateWithoutChatInput: ["id", "createdAt", "updatedAt", "title", "description", "owner", "settings", "workspace", "users", "spaces", "tasks"],
  SpaceUpsertWithoutChatInput: ["update", "create"],
  SpaceUpdateWithoutChatInput: ["id", "createdAt", "updatedAt", "spaceType", "parent", "project", "settings", "view", "subspaces"],
  TaskUpsertWithoutChatInput: ["update", "create"],
  TaskUpdateWithoutChatInput: ["id", "createdAt", "updatedAt", "status", "details", "creator", "parent", "project", "subTasks", "assignes"],
  UserUpsertWithoutChatInput: ["update", "create"],
  UserUpdateWithoutChatInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B", "User_A"],
  MessageCreateManySenderInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "parentId", "chatId"],
  ProjectCreateManyOwnerInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "workspaceId", "chatId"],
  ProjectsOnUsersCreateManyUserInput: ["projectId", "assignedAt", "assignedBy"],
  TaskCreateManyCreatorInput: ["id", "createdAt", "updatedAt", "projectId", "parentId", "status", "details", "chatId"],
  UserAssignedTasksCreateManyUserInput: ["taskId", "assignedAt", "assignedBy"],
  MessageUpdateWithoutSenderInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "parent", "subMessages"],
  ProjectUpdateWithoutOwnerInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "settings", "workspace", "users", "spaces", "tasks"],
  ProjectsOnUsersUpdateWithoutUserInput: ["assignedAt", "assignedBy", "project"],
  TaskUpdateWithoutCreatorInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "parent", "project", "subTasks", "assignes"],
  UserAssignedTasksUpdateWithoutUserInput: ["assignedAt", "assignedBy", "task"],
  UserUpdateWithoutUser_AInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_B"],
  UserUpdateWithoutUser_BInput: ["id", "createdAt", "updatedAt", "email", "password", "firstname", "lastname", "username", "active", "role", "chat", "comments", "ownedProjects", "projects", "createdTasks", "assignedTasks", "workspaces", "User_A"],
  TaskCreateManyParentInput: ["id", "createdAt", "updatedAt", "projectId", "creatorId", "status", "details", "chatId"],
  UserAssignedTasksCreateManyTaskInput: ["userId", "assignedAt", "assignedBy"],
  TaskUpdateWithoutParentInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "project", "subTasks", "assignes"],
  UserAssignedTasksUpdateWithoutTaskInput: ["assignedAt", "assignedBy", "user"],
  SpaceCreateManyParentInput: ["id", "createdAt", "updatedAt", "viewId", "projectId", "settingsId", "spaceType", "chatId"],
  SpaceUpdateWithoutParentInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "project", "settings", "view", "subspaces"],
  ProjectsOnUsersCreateManyProjectInput: ["userId", "assignedAt", "assignedBy"],
  SpaceCreateManyProjectInput: ["id", "createdAt", "updatedAt", "viewId", "settingsId", "spaceType", "parentId", "chatId"],
  TaskCreateManyProjectInput: ["id", "createdAt", "updatedAt", "creatorId", "parentId", "status", "details", "chatId"],
  ProjectsOnUsersUpdateWithoutProjectInput: ["assignedAt", "assignedBy", "user"],
  SpaceUpdateWithoutProjectInput: ["id", "createdAt", "updatedAt", "spaceType", "chat", "parent", "settings", "view", "subspaces"],
  TaskUpdateWithoutProjectInput: ["id", "createdAt", "updatedAt", "status", "details", "chat", "creator", "parent", "subTasks", "assignes"],
  ProjectCreateManyWorkspaceInput: ["id", "createdAt", "updatedAt", "title", "description", "settingsId", "ownerId", "chatId"],
  ProjectUpdateWithoutWorkspaceInput: ["id", "createdAt", "updatedAt", "title", "description", "chat", "owner", "settings", "users", "spaces", "tasks"],
  MessageCreateManyParentInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "chatId"],
  MessageUpdateWithoutParentInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "chat", "sender", "subMessages"],
  MessageCreateManyChatInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "senderId", "parentId"],
  MessageUpdateWithoutChatInput: ["id", "createdAt", "updatedAt", "content", "contentType", "type", "parent", "sender", "subMessages"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

