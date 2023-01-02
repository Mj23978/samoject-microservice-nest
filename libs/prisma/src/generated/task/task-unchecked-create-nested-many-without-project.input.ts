import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutProjectInput } from './task-create-or-connect-without-project.input';
import { TaskCreateManyProjectInputEnvelope } from './task-create-many-project-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [TaskCreateWithoutProjectInput], {nullable:true})
    @Type(() => TaskCreateWithoutProjectInput)
    create?: Array<TaskCreateWithoutProjectInput>;

    @Field(() => [TaskCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutProjectInput>;

    @Field(() => TaskCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyProjectInputEnvelope)
    createMany?: TaskCreateManyProjectInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
