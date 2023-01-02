import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksCreateWithoutUserInput } from './user-assigned-tasks-create-without-user.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksCreateOrConnectWithoutUserInput } from './user-assigned-tasks-create-or-connect-without-user.input';
import { UserAssignedTasksCreateManyUserInputEnvelope } from './user-assigned-tasks-create-many-user-input-envelope.input';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';

@InputType()
export class UserAssignedTasksUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserAssignedTasksCreateWithoutUserInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateWithoutUserInput)
    create?: Array<UserAssignedTasksCreateWithoutUserInput>;

    @Field(() => [UserAssignedTasksCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserAssignedTasksCreateOrConnectWithoutUserInput>;

    @Field(() => UserAssignedTasksCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserAssignedTasksCreateManyUserInputEnvelope)
    createMany?: UserAssignedTasksCreateManyUserInputEnvelope;

    @Field(() => [UserAssignedTasksWhereUniqueInput], {nullable:true})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    connect?: Array<UserAssignedTasksWhereUniqueInput>;
}
