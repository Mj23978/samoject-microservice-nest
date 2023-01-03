import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersScalarWhereInput } from './projects-on-users-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersUpdateManyMutationInput } from './projects-on-users-update-many-mutation.input';

@InputType()
export class ProjectsOnUsersUpdateManyWithWhereWithoutUserInput {

    @Field(() => ProjectsOnUsersScalarWhereInput, {nullable:false})
    @Type(() => ProjectsOnUsersScalarWhereInput)
    where!: ProjectsOnUsersScalarWhereInput;

    @Field(() => ProjectsOnUsersUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectsOnUsersUpdateManyMutationInput)
    data!: ProjectsOnUsersUpdateManyMutationInput;
}
