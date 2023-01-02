import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCreatorInput } from './task-create-without-creator.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutCreatorInput } from './task-create-or-connect-without-creator.input';
import { TaskUpsertWithWhereUniqueWithoutCreatorInput } from './task-upsert-with-where-unique-without-creator.input';
import { TaskCreateManyCreatorInputEnvelope } from './task-create-many-creator-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutCreatorInput } from './task-update-with-where-unique-without-creator.input';
import { TaskUpdateManyWithWhereWithoutCreatorInput } from './task-update-many-with-where-without-creator.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutCreatorNestedInput {

    @Field(() => [TaskCreateWithoutCreatorInput], {nullable:true})
    @Type(() => TaskCreateWithoutCreatorInput)
    create?: Array<TaskCreateWithoutCreatorInput>;

    @Field(() => [TaskCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutCreatorInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutCreatorInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutCreatorInput>;

    @Field(() => TaskCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyCreatorInputEnvelope)
    createMany?: TaskCreateManyCreatorInputEnvelope;

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

    @Field(() => [TaskUpdateWithWhereUniqueWithoutCreatorInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutCreatorInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutCreatorInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutCreatorInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutCreatorInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutCreatorInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
