import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyProjectInput } from './task-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyProjectInputEnvelope {

    @Field(() => [TaskCreateManyProjectInput], {nullable:false})
    @Type(() => TaskCreateManyProjectInput)
    data!: Array<TaskCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
