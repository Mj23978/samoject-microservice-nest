import { registerEnumType } from '@nestjs/graphql';

export enum WorkspaceScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    settingsId = "settingsId",
    userId = "userId"
}


registerEnumType(WorkspaceScalarFieldEnum, { name: 'WorkspaceScalarFieldEnum', description: undefined })
