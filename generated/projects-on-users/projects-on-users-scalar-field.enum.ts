import { registerEnumType } from '@nestjs/graphql';

export enum ProjectsOnUsersScalarFieldEnum {
    projectId = "projectId",
    userId = "userId",
    assignedAt = "assignedAt",
    assignedBy = "assignedBy"
}


registerEnumType(ProjectsOnUsersScalarFieldEnum, { name: 'ProjectsOnUsersScalarFieldEnum', description: undefined })
