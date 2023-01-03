import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';

@InputType()
export class ChatRelationFilter {

    @Field(() => ChatWhereInput, {nullable:true})
    is?: ChatWhereInput;

    @Field(() => ChatWhereInput, {nullable:true})
    isNot?: ChatWhereInput;
}
