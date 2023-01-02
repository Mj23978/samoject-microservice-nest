import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';

@InputType()
export class TaskCreateOrConnectWithoutProjectInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutProjectInput, {nullable:false})
    @Type(() => TaskCreateWithoutProjectInput)
    create!: TaskCreateWithoutProjectInput;
}
