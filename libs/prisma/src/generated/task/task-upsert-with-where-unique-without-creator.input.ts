import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutCreatorInput } from './task-update-without-creator.input';
import { TaskCreateWithoutCreatorInput } from './task-create-without-creator.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutCreatorInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutCreatorInput, {nullable:false})
    @Type(() => TaskUpdateWithoutCreatorInput)
    update!: TaskUpdateWithoutCreatorInput;

    @Field(() => TaskCreateWithoutCreatorInput, {nullable:false})
    @Type(() => TaskCreateWithoutCreatorInput)
    create!: TaskCreateWithoutCreatorInput;
}
