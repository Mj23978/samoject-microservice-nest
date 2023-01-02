import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SpaceMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    viewId?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    settingsId?: true;

    @Field(() => Boolean, {nullable:true})
    spaceType?: true;

    @Field(() => Boolean, {nullable:true})
    parentId?: true;

    @Field(() => Boolean, {nullable:true})
    chatId?: true;
}
