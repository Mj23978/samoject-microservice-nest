import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { MessageOrderByRelationAggregateInput } from './message-order-by-relation-aggregate.input';

@InputType()
export class MessageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    chat?: ChatOrderByWithRelationInput;

    @Field(() => MessageOrderByWithRelationInput, {nullable:true})
    parent?: MessageOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    sender?: UserOrderByWithRelationInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    subMessages?: MessageOrderByRelationAggregateInput;
}
