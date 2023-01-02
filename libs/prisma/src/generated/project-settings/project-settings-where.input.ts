import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';

@InputType()
export class ProjectSettingsWhereInput {

    @Field(() => [ProjectSettingsWhereInput], {nullable:true})
    AND?: Array<ProjectSettingsWhereInput>;

    @Field(() => [ProjectSettingsWhereInput], {nullable:true})
    OR?: Array<ProjectSettingsWhereInput>;

    @Field(() => [ProjectSettingsWhereInput], {nullable:true})
    NOT?: Array<ProjectSettingsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    localId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    projectId?: StringFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;
}
