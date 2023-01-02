import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksCreateWithoutUserInput } from './user-assigned-tasks-create-without-user.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksCreateOrConnectWithoutUserInput } from './user-assigned-tasks-create-or-connect-without-user.input';
import { UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput } from './user-assigned-tasks-upsert-with-where-unique-without-user.input';
import { UserAssignedTasksCreateManyUserInputEnvelope } from './user-assigned-tasks-create-many-user-input-envelope.input';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput } from './user-assigned-tasks-update-with-where-unique-without-user.input';
import { UserAssignedTasksUpdateManyWithWhereWithoutUserInput } from './user-assigned-tasks-update-many-with-where-without-user.input';
import { UserAssignedTasksScalarWhereInput } from './user-assigned-tasks-scalar-where.input';

@InputType()
export class UserAssignedTasksUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserAssignedTasksCreateWithoutUserInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateWithoutUserInput)
    create?: Array<UserAssignedTasksCreateWithoutUserInput>;

    @Field(() => [UserAssignedTasksCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserAssignedTasksCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserAssignedTasksCreateOrConnectWithoutUserInput>;

    @Field(() => [UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserAssignedTasksUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserAssignedTasksCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserAssignedTasksCreateManyUserInputEnvelope)
    createMany?: UserAssignedTasksCreateManyUserInputEnvelope;

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

    @Field(() => [UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserAssignedTasksUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserAssignedTasksUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserAssignedTasksUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserAssignedTasksUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserAssignedTasksScalarWhereInput], {nullable:true})
    @Type(() => UserAssignedTasksScalarWhereInput)
    deleteMany?: Array<UserAssignedTasksScalarWhereInput>;
}
