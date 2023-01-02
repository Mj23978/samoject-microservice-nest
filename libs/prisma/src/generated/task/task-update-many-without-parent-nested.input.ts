import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutParentInput } from './task-create-without-parent.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutParentInput } from './task-create-or-connect-without-parent.input';
import { TaskUpsertWithWhereUniqueWithoutParentInput } from './task-upsert-with-where-unique-without-parent.input';
import { TaskCreateManyParentInputEnvelope } from './task-create-many-parent-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutParentInput } from './task-update-with-where-unique-without-parent.input';
import { TaskUpdateManyWithWhereWithoutParentInput } from './task-update-many-with-where-without-parent.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutParentNestedInput {

    @Field(() => [TaskCreateWithoutParentInput], {nullable:true})
    @Type(() => TaskCreateWithoutParentInput)
    create?: Array<TaskCreateWithoutParentInput>;

    @Field(() => [TaskCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutParentInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => TaskCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyParentInputEnvelope)
    createMany?: TaskCreateManyParentInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
