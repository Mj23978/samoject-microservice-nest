import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProjectsInput } from '../user/user-create-nested-one-without-projects.input';

@InputType()
export class ProjectsOnUsersCreateWithoutProjectInput {

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => UserCreateNestedOneWithoutProjectsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProjectsInput;
}
