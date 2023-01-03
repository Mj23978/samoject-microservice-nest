import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignedTasksInput } from './user-create-without-assigned-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignedTasksInput } from './user-create-or-connect-without-assigned-tasks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAssignedTasksInput {

    @Field(() => UserCreateWithoutAssignedTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutAssignedTasksInput)
    create?: UserCreateWithoutAssignedTasksInput;

    @Field(() => UserCreateOrConnectWithoutAssignedTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignedTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
