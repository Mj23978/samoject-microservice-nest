import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { Type } from 'class-transformer';
import { ChatOrderByWithRelationInput } from './chat-order-by-with-relation.input';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatScalarFieldEnum } from './chat-scalar-field.enum';

@ArgsType()
export class FindManyChatArgs {

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;

    @Field(() => [ChatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatOrderByWithRelationInput>;

    @Field(() => ChatWhereUniqueInput, {nullable:true})
    cursor?: ChatWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChatScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChatScalarFieldEnum>;
}
