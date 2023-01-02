import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SpaceCreateManyProjectInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    viewId!: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    spaceType!: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;
}
