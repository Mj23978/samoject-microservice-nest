import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutCreatorInput } from './task-update-without-creator.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutCreatorInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutCreatorInput, {nullable:false})
    @Type(() => TaskUpdateWithoutCreatorInput)
    data!: TaskUpdateWithoutCreatorInput;
}
