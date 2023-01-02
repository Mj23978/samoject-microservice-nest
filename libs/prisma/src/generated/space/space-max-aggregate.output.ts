import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SpaceMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    viewId?: string;

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => String, {nullable:true})
    settingsId?: string;

    @Field(() => String, {nullable:true})
    spaceType?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;
}
