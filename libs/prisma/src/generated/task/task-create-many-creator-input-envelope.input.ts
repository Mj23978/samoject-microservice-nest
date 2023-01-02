import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyCreatorInput } from './task-create-many-creator.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyCreatorInputEnvelope {

    @Field(() => [TaskCreateManyCreatorInput], {nullable:false})
    @Type(() => TaskCreateManyCreatorInput)
    data!: Array<TaskCreateManyCreatorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
