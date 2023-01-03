import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserAssignedTasksTaskIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    taskId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
