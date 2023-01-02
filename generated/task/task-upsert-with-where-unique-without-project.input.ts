import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutProjectInput } from './task-update-without-project.input';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutProjectInput, {nullable:false})
    @Type(() => TaskUpdateWithoutProjectInput)
    update!: TaskUpdateWithoutProjectInput;

    @Field(() => TaskCreateWithoutProjectInput, {nullable:false})
    @Type(() => TaskCreateWithoutProjectInput)
    create!: TaskCreateWithoutProjectInput;
}
