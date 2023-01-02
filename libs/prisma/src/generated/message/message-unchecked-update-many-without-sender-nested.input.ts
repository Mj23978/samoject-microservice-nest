import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutSenderInput } from './message-create-without-sender.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutSenderInput } from './message-create-or-connect-without-sender.input';
import { MessageUpsertWithWhereUniqueWithoutSenderInput } from './message-upsert-with-where-unique-without-sender.input';
import { MessageCreateManySenderInputEnvelope } from './message-create-many-sender-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutSenderInput } from './message-update-with-where-unique-without-sender.input';
import { MessageUpdateManyWithWhereWithoutSenderInput } from './message-update-many-with-where-without-sender.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutSenderNestedInput {

    @Field(() => [MessageCreateWithoutSenderInput], {nullable:true})
    @Type(() => MessageCreateWithoutSenderInput)
    create?: Array<MessageCreateWithoutSenderInput>;

    @Field(() => [MessageCreateOrConnectWithoutSenderInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutSenderInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutSenderInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutSenderInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutSenderInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutSenderInput>;

    @Field(() => MessageCreateManySenderInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManySenderInputEnvelope)
    createMany?: MessageCreateManySenderInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutSenderInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutSenderInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutSenderInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutSenderInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutSenderInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutSenderInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}
