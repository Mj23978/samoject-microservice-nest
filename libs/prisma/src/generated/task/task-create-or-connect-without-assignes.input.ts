import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutAssignesInput } from './task-create-without-assignes.input';

@InputType()
export class TaskCreateOrConnectWithoutAssignesInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutAssignesInput, {nullable:false})
    @Type(() => TaskCreateWithoutAssignesInput)
    create!: TaskCreateWithoutAssignesInput;
}
