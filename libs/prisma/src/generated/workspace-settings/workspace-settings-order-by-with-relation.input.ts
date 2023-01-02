import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkspaceOrderByWithRelationInput } from '../workspace/workspace-order-by-with-relation.input';

@InputType()
export class WorkspaceSettingsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    localId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workspaceId?: keyof typeof SortOrder;

    @Field(() => WorkspaceOrderByWithRelationInput, {nullable:true})
    workspace?: WorkspaceOrderByWithRelationInput;
}
