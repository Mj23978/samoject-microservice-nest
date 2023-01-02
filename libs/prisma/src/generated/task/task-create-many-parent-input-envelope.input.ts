import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyParentInput } from './task-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyParentInputEnvelope {

    @Field(() => [TaskCreateManyParentInput], {nullable:false})
    @Type(() => TaskCreateManyParentInput)
    data!: Array<TaskCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
