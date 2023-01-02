import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskCreateManyCreatorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    details!: string;

    @Field(() => String, {nullable:true})
    chatId?: string;
}
