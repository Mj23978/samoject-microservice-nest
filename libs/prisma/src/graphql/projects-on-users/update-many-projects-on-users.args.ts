import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersUpdateManyMutationInput } from './projects-on-users-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersWhereInput } from './projects-on-users-where.input';

@ArgsType()
export class UpdateManyProjectsOnUsersArgs {

    @Field(() => ProjectsOnUsersUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectsOnUsersUpdateManyMutationInput)
    data!: ProjectsOnUsersUpdateManyMutationInput;

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    @Type(() => ProjectsOnUsersWhereInput)
    where?: ProjectsOnUsersWhereInput;
}
