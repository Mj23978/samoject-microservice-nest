import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProjectsOnUsersScalarWhereInput {

    @Field(() => [ProjectsOnUsersScalarWhereInput], {nullable:true})
    AND?: Array<ProjectsOnUsersScalarWhereInput>;

    @Field(() => [ProjectsOnUsersScalarWhereInput], {nullable:true})
    OR?: Array<ProjectsOnUsersScalarWhereInput>;

    @Field(() => [ProjectsOnUsersScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectsOnUsersScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    projectId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}
