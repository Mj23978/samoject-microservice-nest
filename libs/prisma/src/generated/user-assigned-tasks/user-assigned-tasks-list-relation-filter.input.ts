import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserAssignedTasksWhereInput } from './user-assigned-tasks-where.input';

@InputType()
export class UserAssignedTasksListRelationFilter {

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    every?: UserAssignedTasksWhereInput;

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    some?: UserAssignedTasksWhereInput;

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    none?: UserAssignedTasksWhereInput;
}
