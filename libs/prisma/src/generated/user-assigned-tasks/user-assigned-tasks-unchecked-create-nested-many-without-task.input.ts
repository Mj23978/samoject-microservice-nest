import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksCreateWithoutTaskInput } from './user-assigned-tasks-create-without-task.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksCreateOrConnectWithoutTaskInput } from './user-assigned-tasks-create-or-connect-without-task.input';
import { UserAssignedTasksCreateManyTaskInputEnvelope } from './user-assigned-tasks-create-many-task-input-envelope.input';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';

@InputType()
export class UserAssignedTasksUncheckedCreateNestedManyWithoutTaskInput {

    @Field(() => [UserAssignedTasksCreateWithoutTaskInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateWithoutTaskInput)
    create?: Array<UserAssignedTasksCreateWithoutTaskInput>;

    @Field(() => [UserAssignedTasksCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<UserAssignedTasksCreateOrConnectWithoutTaskInput>;

    @Field(() => UserAssignedTasksCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => UserAssignedTasksCreateManyTaskInputEnvelope)
    createMany?: UserAssignedTasksCreateManyTaskInputEnvelope;

    @Field(() => [UserAssignedTasksWhereUniqueInput], {nullable:true})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    connect?: Array<UserAssignedTasksWhereUniqueInput>;
}
