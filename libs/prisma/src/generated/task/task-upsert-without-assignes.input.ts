import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutAssignesInput } from './task-update-without-assignes.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutAssignesInput } from './task-create-without-assignes.input';

@InputType()
export class TaskUpsertWithoutAssignesInput {

    @Field(() => TaskUpdateWithoutAssignesInput, {nullable:false})
    @Type(() => TaskUpdateWithoutAssignesInput)
    update!: TaskUpdateWithoutAssignesInput;

    @Field(() => TaskCreateWithoutAssignesInput, {nullable:false})
    @Type(() => TaskCreateWithoutAssignesInput)
    create!: TaskCreateWithoutAssignesInput;
}
