import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutProjectInput } from './task-create-or-connect-without-project.input';
import { TaskUpsertWithWhereUniqueWithoutProjectInput } from './task-upsert-with-where-unique-without-project.input';
import { TaskCreateManyProjectInputEnvelope } from './task-create-many-project-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutProjectInput } from './task-update-with-where-unique-without-project.input';
import { TaskUpdateManyWithWhereWithoutProjectInput } from './task-update-many-with-where-without-project.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutProjectNestedInput {

    @Field(() => [TaskCreateWithoutProjectInput], {nullable:true})
    @Type(() => TaskCreateWithoutProjectInput)
    create?: Array<TaskCreateWithoutProjectInput>;

    @Field(() => [TaskCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutProjectInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => TaskCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyProjectInputEnvelope)
    createMany?: TaskCreateManyProjectInputEnvelope;

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

    @Field(() => [TaskUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
