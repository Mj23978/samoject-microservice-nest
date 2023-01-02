import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreatedTasksInput } from './user-update-without-created-tasks.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedTasksInput } from './user-create-without-created-tasks.input';

@InputType()
export class UserUpsertWithoutCreatedTasksInput {

    @Field(() => UserUpdateWithoutCreatedTasksInput, {nullable:false})
    @Type(() => UserUpdateWithoutCreatedTasksInput)
    update!: UserUpdateWithoutCreatedTasksInput;

    @Field(() => UserCreateWithoutCreatedTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedTasksInput)
    create!: UserCreateWithoutCreatedTasksInput;
}
