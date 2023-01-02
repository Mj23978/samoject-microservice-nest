import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';
import { SpaceOrderByWithRelationInput } from '../space/space-order-by-with-relation.input';
import { TaskOrderByWithRelationInput } from '../task/task-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ChatOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    Project?: ProjectOrderByWithRelationInput;

    @Field(() => SpaceOrderByWithRelationInput, {nullable:true})
    Space?: SpaceOrderByWithRelationInput;

    @Field(() => TaskOrderByWithRelationInput, {nullable:true})
    Task?: TaskOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;
}
