import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAssignedTasksInput } from './user-create-without-assigned-tasks.input';

@InputType()
export class UserCreateOrConnectWithoutAssignedTasksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAssignedTasksInput, {nullable:false})
    @Type(() => UserCreateWithoutAssignedTasksInput)
    create!: UserCreateWithoutAssignedTasksInput;
}
