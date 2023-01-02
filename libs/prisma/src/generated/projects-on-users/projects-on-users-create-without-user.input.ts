import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutUsersInput } from '../project/project-create-nested-one-without-users.input';

@InputType()
export class ProjectsOnUsersCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => ProjectCreateNestedOneWithoutUsersInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutUsersInput;
}
