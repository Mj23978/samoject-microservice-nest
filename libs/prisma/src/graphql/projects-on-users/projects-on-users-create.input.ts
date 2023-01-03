import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutUsersInput } from '../project/project-create-nested-one-without-users.input';
import { UserCreateNestedOneWithoutProjectsInput } from '../user/user-create-nested-one-without-projects.input';

@InputType()
export class ProjectsOnUsersCreateInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => ProjectCreateNestedOneWithoutUsersInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutUsersInput;

    @Field(() => UserCreateNestedOneWithoutProjectsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProjectsInput;
}
