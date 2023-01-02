import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCreatorInput } from './task-create-without-creator.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutCreatorInput } from './task-create-or-connect-without-creator.input';
import { TaskCreateManyCreatorInputEnvelope } from './task-create-many-creator-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutCreatorInput {

    @Field(() => [TaskCreateWithoutCreatorInput], {nullable:true})
    @Type(() => TaskCreateWithoutCreatorInput)
    create?: Array<TaskCreateWithoutCreatorInput>;

    @Field(() => [TaskCreateOrConnectWithoutCreatorInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutCreatorInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutCreatorInput>;

    @Field(() => TaskCreateManyCreatorInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyCreatorInputEnvelope)
    createMany?: TaskCreateManyCreatorInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
