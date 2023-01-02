import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';

@InputType()
export class MessageRelationFilter {

    @Field(() => MessageWhereInput, {nullable:true})
    is?: MessageWhereInput;

    @Field(() => MessageWhereInput, {nullable:true})
    isNot?: MessageWhereInput;
}
