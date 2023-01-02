import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutAssignesInput } from './task-create-without-assignes.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutAssignesInput } from './task-create-or-connect-without-assignes.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutAssignesInput {

    @Field(() => TaskCreateWithoutAssignesInput, {nullable:true})
    @Type(() => TaskCreateWithoutAssignesInput)
    create?: TaskCreateWithoutAssignesInput;

    @Field(() => TaskCreateOrConnectWithoutAssignesInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutAssignesInput)
    connectOrCreate?: TaskCreateOrConnectWithoutAssignesInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
