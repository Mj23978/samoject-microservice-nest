import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAssignedTasksWhereInput } from './user-assigned-tasks-where.input';
import { Type } from 'class-transformer';
import { UserAssignedTasksOrderByWithRelationInput } from './user-assigned-tasks-order-by-with-relation.input';
import { UserAssignedTasksWhereUniqueInput } from './user-assigned-tasks-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAssignedTasksScalarFieldEnum } from './user-assigned-tasks-scalar-field.enum';

@ArgsType()
export class FindFirstUserAssignedTasksArgs {

    @Field(() => UserAssignedTasksWhereInput, {nullable:true})
    @Type(() => UserAssignedTasksWhereInput)
    where?: UserAssignedTasksWhereInput;

    @Field(() => [UserAssignedTasksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserAssignedTasksOrderByWithRelationInput>;

    @Field(() => UserAssignedTasksWhereUniqueInput, {nullable:true})
    cursor?: UserAssignedTasksWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserAssignedTasksScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserAssignedTasksScalarFieldEnum>;
}
