import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Task } from '../task/task.model';
import { User } from '../user/user.model';

@ObjectType()
export class UserAssignedTasks {

    @Field(() => String, {nullable:false})
    taskId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => Task, {nullable:false})
    task?: Task;

    @Field(() => User, {nullable:false})
    user?: User;
}
