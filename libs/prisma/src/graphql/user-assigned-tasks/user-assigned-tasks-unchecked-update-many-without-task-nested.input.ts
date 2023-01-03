import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksCreateWithoutTaskInput } from './user-assigned-tasks-create-without-task.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksCreateOrConnectWithoutTaskInput } from './user-assigned-tasks-create-or-connect-without-task.input';
import { UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput } from './user-assigned-tasks-upsert-with-where-unique-without-task.input';
import { UserAssignedTasksCreateManyTaskInputEnvelope } from './user-assigned-tasks-create-many-task-input-envelope.input';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput } from './user-assigned-tasks-update-with-where-unique-without-task.input';
import { UserAssignedTasksUpdateManyWithWhereWithoutTaskInput } from './user-assigned-tasks-update-many-with-where-without-task.input';
import { UserAssignedTasksScalarWhereInput } from './user-assigned-tasks-scalar-where.input';

@InputType()
export class UserAssignedTasksUncheckedUpdateManyWithoutTaskNestedInput {

    @Field(() => [UserAssignedTasksCreateWithoutTaskInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateWithoutTaskInput)
    create?: Array<UserAssignedTasksCreateWithoutTaskInput>;

    @Field(() => [UserAssignedTasksCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<UserAssignedTasksCreateOrConnectWithoutTaskInput>;

    @Field(() => [UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<UserAssignedTasksUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => UserAssignedTasksCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => UserAssignedTasksCreateManyTaskInputEnvelope)
    createMany?: UserAssignedTasksCreateManyTaskInputEnvelope;

    @Field(() => [UserAssignedTasksWhereUniqueInput], {nullable:true})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    set?: Array<UserAssignedTasksWhereUniqueInput>;

    @Field(() => [UserAssignedTasksWhereUniqueInput], {nullable:true})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    disconnect?: Array<UserAssignedTasksWhereUniqueInput>;

    @Field(() => [UserAssignedTasksWhereUniqueInput], {nullable:true})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    delete?: Array<UserAssignedTasksWhereUniqueInput>;

    @Field(() => [UserAssignedTasksWhereUniqueInput], {nullable:true})
    @Type(() => UserAssignedTasksWhereUniqueInput)
    connect?: Array<UserAssignedTasksWhereUniqueInput>;

    @Field(() => [UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<UserAssignedTasksUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [UserAssignedTasksUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => UserAssignedTasksUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<UserAssignedTasksUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [UserAssignedTasksScalarWhereInput], {nullable:true})
    @Type(() => UserAssignedTasksScalarWhereInput)
    deleteMany?: Array<UserAssignedTasksScalarWhereInput>;
}
