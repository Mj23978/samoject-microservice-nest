import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectScalarWhereInput } from './project-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateManyMutationInput } from './project-update-many-mutation.input';

@InputType()
export class ProjectUpdateManyWithWhereWithoutWorkspaceInput {

    @Field(() => ProjectScalarWhereInput, {nullable:false})
    @Type(() => ProjectScalarWhereInput)
    where!: ProjectScalarWhereInput;

    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectUpdateManyMutationInput)
    data!: ProjectUpdateManyMutationInput;
}
