import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ProjectsOnUsersWhereInput {

    @Field(() => [ProjectsOnUsersWhereInput], {nullable:true})
    AND?: Array<ProjectsOnUsersWhereInput>;

    @Field(() => [ProjectsOnUsersWhereInput], {nullable:true})
    OR?: Array<ProjectsOnUsersWhereInput>;

    @Field(() => [ProjectsOnUsersWhereInput], {nullable:true})
    NOT?: Array<ProjectsOnUsersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    projectId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
