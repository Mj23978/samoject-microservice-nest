import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WorkspaceSettingsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    localId?: true;

    @Field(() => Boolean, {nullable:true})
    workspaceId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
