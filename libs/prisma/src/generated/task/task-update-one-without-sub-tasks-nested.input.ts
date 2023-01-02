import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutSubTasksInput } from './task-create-without-sub-tasks.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutSubTasksInput } from './task-create-or-connect-without-sub-tasks.input';
import { TaskUpsertWithoutSubTasksInput } from './task-upsert-without-sub-tasks.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutSubTasksInput } from './task-update-without-sub-tasks.input';

@InputType()
export class TaskUpdateOneWithoutSubTasksNestedInput {

    @Field(() => TaskCreateWithoutSubTasksInput, {nullable:true})
    @Type(() => TaskCreateWithoutSubTasksInput)
    create?: TaskCreateWithoutSubTasksInput;

    @Field(() => TaskCreateOrConnectWithoutSubTasksInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutSubTasksInput)
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput;

    @Field(() => TaskUpsertWithoutSubTasksInput, {nullable:true})
    @Type(() => TaskUpsertWithoutSubTasksInput)
    upsert?: TaskUpsertWithoutSubTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutSubTasksInput, {nullable:true})
    @Type(() => TaskUpdateWithoutSubTasksInput)
    update?: TaskUpdateWithoutSubTasksInput;
}
