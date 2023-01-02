import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSubTasksInput } from './task-create-without-sub-tasks.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutSubTasksInput } from './task-create-or-connect-without-sub-tasks.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutSubTasksInput {

    @Field(() => TaskCreateWithoutSubTasksInput, {nullable:true})
    @Type(() => TaskCreateWithoutSubTasksInput)
    create?: TaskCreateWithoutSubTasksInput;

    @Field(() => TaskCreateOrConnectWithoutSubTasksInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutSubTasksInput)
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
