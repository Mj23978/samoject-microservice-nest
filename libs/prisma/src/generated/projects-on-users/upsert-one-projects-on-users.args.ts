import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersCreateInput } from './projects-on-users-create.input';
import { ProjectsOnUsersUpdateInput } from './projects-on-users-update.input';

@ArgsType()
export class UpsertOneProjectsOnUsersArgs {

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:false})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    where!: ProjectsOnUsersWhereUniqueInput;

    @Field(() => ProjectsOnUsersCreateInput, {nullable:false})
    @Type(() => ProjectsOnUsersCreateInput)
    create!: ProjectsOnUsersCreateInput;

    @Field(() => ProjectsOnUsersUpdateInput, {nullable:false})
    @Type(() => ProjectsOnUsersUpdateInput)
    update!: ProjectsOnUsersUpdateInput;
}
