import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutSubMessagesInput } from './message-create-without-sub-messages.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutSubMessagesInput } from './message-create-or-connect-without-sub-messages.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedOneWithoutSubMessagesInput {

    @Field(() => MessageCreateWithoutSubMessagesInput, {nullable:true})
    @Type(() => MessageCreateWithoutSubMessagesInput)
    create?: MessageCreateWithoutSubMessagesInput;

    @Field(() => MessageCreateOrConnectWithoutSubMessagesInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutSubMessagesInput)
    connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;
}
