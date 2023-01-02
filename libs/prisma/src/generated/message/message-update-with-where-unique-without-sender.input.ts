import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutSenderInput } from './message-update-without-sender.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutSenderInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutSenderInput, {nullable:false})
    @Type(() => MessageUpdateWithoutSenderInput)
    data!: MessageUpdateWithoutSenderInput;
}
