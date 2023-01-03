import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksTaskIdUserIdCompoundUniqueInput } from './user-assigned-tasks-task-id-user-id-compound-unique.input';

@InputType()
export class UserAssignedTasksWhereUniqueInput {

    @Field(() => UserAssignedTasksTaskIdUserIdCompoundUniqueInput, {nullable:true})
    taskId_userId?: UserAssignedTasksTaskIdUserIdCompoundUniqueInput;
}
