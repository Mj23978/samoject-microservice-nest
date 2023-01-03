import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatCreateInput } from './chat-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChatArgs {

    @Field(() => ChatCreateInput, {nullable:false})
    @Type(() => ChatCreateInput)
    data!: ChatCreateInput;
}
