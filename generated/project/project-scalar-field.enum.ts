import { registerEnumType } from '@nestjs/graphql';

export enum ProjectScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    description = "description",
    settingsId = "settingsId",
    workspaceId = "workspaceId",
    ownerId = "ownerId",
    chatId = "chatId"
}


registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })
