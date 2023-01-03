import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectsOnUsersUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    assignedAt?: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;
}
