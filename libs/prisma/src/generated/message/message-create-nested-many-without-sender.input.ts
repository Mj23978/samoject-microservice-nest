import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutSenderInput } from './message-create-without-sender.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutSenderInput } from './message-create-or-connect-without-sender.input';
import { MessageCreateManySenderInputEnvelope } from './message-create-many-sender-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutSenderInput {

    @Field(() => [MessageCreateWithoutSenderInput], {nullable:true})
    @Type(() => MessageCreateWithoutSenderInput)
    create?: Array<MessageCreateWithoutSenderInput>;

    @Field(() => [MessageCreateOrConnectWithoutSenderInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutSenderInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutSenderInput>;

    @Field(() => MessageCreateManySenderInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManySenderInputEnvelope)
    createMany?: MessageCreateManySenderInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}
