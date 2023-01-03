import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutSubMessagesInput } from './message-create-without-sub-messages.input';

@InputType()
export class MessageCreateOrConnectWithoutSubMessagesInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutSubMessagesInput, {nullable:false})
    @Type(() => MessageCreateWithoutSubMessagesInput)
    create!: MessageCreateWithoutSubMessagesInput;
}
