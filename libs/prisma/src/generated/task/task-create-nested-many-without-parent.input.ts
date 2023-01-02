import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutParentInput } from './task-create-without-parent.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutParentInput } from './task-create-or-connect-without-parent.input';
import { TaskCreateManyParentInputEnvelope } from './task-create-many-parent-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutParentInput {

    @Field(() => [TaskCreateWithoutParentInput], {nullable:true})
    @Type(() => TaskCreateWithoutParentInput)
    create?: Array<TaskCreateWithoutParentInput>;

    @Field(() => [TaskCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutParentInput>;

    @Field(() => TaskCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyParentInputEnvelope)
    createMany?: TaskCreateManyParentInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
