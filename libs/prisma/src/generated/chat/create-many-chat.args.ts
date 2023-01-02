import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatCreateManyInput } from './chat-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChatArgs {

    @Field(() => [ChatCreateManyInput], {nullable:false})
    @Type(() => ChatCreateManyInput)
    data!: Array<ChatCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
