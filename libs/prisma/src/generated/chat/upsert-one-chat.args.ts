import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateInput } from './chat-create.input';
import { ChatUpdateInput } from './chat-update.input';

@ArgsType()
export class UpsertOneChatArgs {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: ChatWhereUniqueInput;

    @Field(() => ChatCreateInput, {nullable:false})
    @Type(() => ChatCreateInput)
    create!: ChatCreateInput;

    @Field(() => ChatUpdateInput, {nullable:false})
    @Type(() => ChatUpdateInput)
    update!: ChatUpdateInput;
}
