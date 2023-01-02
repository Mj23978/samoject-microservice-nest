import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersUpdateInput } from './projects-on-users-update.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';

@ArgsType()
export class UpdateOneProjectsOnUsersArgs {

    @Field(() => ProjectsOnUsersUpdateInput, {nullable:false})
    @Type(() => ProjectsOnUsersUpdateInput)
    data!: ProjectsOnUsersUpdateInput;

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:false})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    where!: ProjectsOnUsersWhereUniqueInput;
}
