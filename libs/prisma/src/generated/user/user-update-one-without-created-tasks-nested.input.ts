import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedTasksInput } from './user-create-without-created-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCreatedTasksInput } from './user-create-or-connect-without-created-tasks.input';
import { UserUpsertWithoutCreatedTasksInput } from './user-upsert-without-created-tasks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCreatedTasksInput } from './user-update-without-created-tasks.input';

@InputType()
export class UserUpdateOneWithoutCreatedTasksNestedInput {

    @Field(() => UserCreateWithoutCreatedTasksInput, {nullable:true})
    @Type(() => UserCreateWithoutCreatedTasksInput)
    create?: UserCreateWithoutCreatedTasksInput;

    @Field(() => UserCreateOrConnectWithoutCreatedTasksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCreatedTasksInput)
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput;

    @Field(() => UserUpsertWithoutCreatedTasksInput, {nullable:true})
    @Type(() => UserUpsertWithoutCreatedTasksInput)
    upsert?: UserUpsertWithoutCreatedTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCreatedTasksInput, {nullable:true})
    @Type(() => UserUpdateWithoutCreatedTasksInput)
    update?: UserUpdateWithoutCreatedTasksInput;
}
