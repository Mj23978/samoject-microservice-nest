import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutSubTasksInput } from './task-create-without-sub-tasks.input';

@InputType()
export class TaskCreateOrConnectWithoutSubTasksInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutSubTasksInput, {nullable:false})
    @Type(() => TaskCreateWithoutSubTasksInput)
    create!: TaskCreateWithoutSubTasksInput;
}
