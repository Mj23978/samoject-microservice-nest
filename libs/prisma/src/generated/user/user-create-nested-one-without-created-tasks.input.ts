import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedTasksInput } from './user-create-without-created-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCreatedTasksInput } from './user-create-or-connect-without-created-tasks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCreatedTasksInput {

    @Field(() => UserCreateWithoutCreatedTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutCreatedTasksInput)
    create?: UserCreateWithoutCreatedTasksInput;

    @Field(() => UserCreateOrConnectWithoutCreatedTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCreatedTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
