import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutSubMessagesInput } from './message-create-without-sub-messages.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutSubMessagesInput } from './message-create-or-connect-without-sub-messages.input';
import { MessageUpsertWithoutSubMessagesInput } from './message-upsert-without-sub-messages.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutSubMessagesInput } from './message-update-without-sub-messages.input';

@InputType()
export class MessageUpdateOneWithoutSubMessagesNestedInput {

    @Field(() => MessageCreateWithoutSubMessagesInput, {nullable:true})
    @Type(() => MessageCreateWithoutSubMessagesInput)
    create?: MessageCreateWithoutSubMessagesInput;

    @Field(() => MessageCreateOrConnectWithoutSubMessagesInput, {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutSubMessagesInput)
    connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput;

    @Field(() => MessageUpsertWithoutSubMessagesInput, {nullable:true})
    @Type(() => MessageUpsertWithoutSubMessagesInput)
    upsert?: MessageUpsertWithoutSubMessagesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutSubMessagesInput, {nullable:true})
    @Type(() => MessageUpdateWithoutSubMessagesInput)
    update?: MessageUpdateWithoutSubMessagesInput;
}
