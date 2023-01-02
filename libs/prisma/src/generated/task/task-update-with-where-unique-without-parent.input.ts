import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutParentInput } from './task-update-without-parent.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutParentInput, {nullable:false})
    @Type(() => TaskUpdateWithoutParentInput)
    data!: TaskUpdateWithoutParentInput;
}
