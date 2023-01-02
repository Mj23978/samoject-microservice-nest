import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutCreatorInput } from './task-create-without-creator.input';

@InputType()
export class TaskCreateOrConnectWithoutCreatorInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutCreatorInput, {nullable:false})
    @Type(() => TaskCreateWithoutCreatorInput)
    create!: TaskCreateWithoutCreatorInput;
}
