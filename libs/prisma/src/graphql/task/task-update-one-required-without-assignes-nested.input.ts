import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutAssignesInput } from './task-create-without-assignes.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutAssignesInput } from './task-create-or-connect-without-assignes.input';
import { TaskUpsertWithoutAssignesInput } from './task-upsert-without-assignes.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutAssignesInput } from './task-update-without-assignes.input';

@InputType()
export class TaskUpdateOneRequiredWithoutAssignesNestedInput {

    @Field(() => TaskCreateWithoutAssignesInput, {nullable:true})
    @Type(() => TaskCreateWithoutAssignesInput)
    create?: TaskCreateWithoutAssignesInput;

    @Field(() => TaskCreateOrConnectWithoutAssignesInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutAssignesInput)
    connectOrCreate?: TaskCreateOrConnectWithoutAssignesInput;

    @Field(() => TaskUpsertWithoutAssignesInput, {nullable:true})
    @Type(() => TaskUpsertWithoutAssignesInput)
    upsert?: TaskUpsertWithoutAssignesInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutAssignesInput, {nullable:true})
    @Type(() => TaskUpdateWithoutAssignesInput)
    update?: TaskUpdateWithoutAssignesInput;
}
