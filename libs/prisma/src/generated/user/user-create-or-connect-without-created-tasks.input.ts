import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedTasksInput } from './user-create-without-created-tasks.input';

@InputType()
export class UserCreateOrConnectWithoutCreatedTasksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCreatedTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedTasksInput)
    create!: UserCreateWithoutCreatedTasksInput;
}
