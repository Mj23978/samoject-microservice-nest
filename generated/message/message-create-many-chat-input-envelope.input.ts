import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyChatInput } from './message-create-many-chat.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManyChatInputEnvelope {

    @Field(() => [MessageCreateManyChatInput], {nullable:false})
    @Type(() => MessageCreateManyChatInput)
    data!: Array<MessageCreateManyChatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
