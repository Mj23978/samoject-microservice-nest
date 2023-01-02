import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutSubTasksInput } from './task-update-without-sub-tasks.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutSubTasksInput } from './task-create-without-sub-tasks.input';

@InputType()
export class TaskUpsertWithoutSubTasksInput {

    @Field(() => TaskUpdateWithoutSubTasksInput, {nullable:false})
    @Type(() => TaskUpdateWithoutSubTasksInput)
    update!: TaskUpdateWithoutSubTasksInput;

    @Field(() => TaskCreateWithoutSubTasksInput, {nullable:false})
    @Type(() => TaskCreateWithoutSubTasksInput)
    create!: TaskCreateWithoutSubTasksInput;
}
