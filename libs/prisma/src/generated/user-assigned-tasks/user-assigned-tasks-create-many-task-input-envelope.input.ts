import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksCreateManyTaskInput } from './user-assigned-tasks-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class UserAssignedTasksCreateManyTaskInputEnvelope {

    @Field(() => [UserAssignedTasksCreateManyTaskInput], {nullable:false})
    @Type(() => UserAssignedTasksCreateManyTaskInput)
    data!: Array<UserAssignedTasksCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
