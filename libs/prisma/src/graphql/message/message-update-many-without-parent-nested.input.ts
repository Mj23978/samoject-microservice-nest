import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutParentInput } from './message-create-without-parent.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutParentInput } from './message-create-or-connect-without-parent.input';
import { MessageUpsertWithWhereUniqueWithoutParentInput } from './message-upsert-with-where-unique-without-parent.input';
import { MessageCreateManyParentInputEnvelope } from './message-create-many-parent-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutParentInput } from './message-update-with-where-unique-without-parent.input';
import { MessageUpdateManyWithWhereWithoutParentInput } from './message-update-many-with-where-without-parent.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutParentNestedInput {

    @Field(() => [MessageCreateWithoutParentInput], {nullable:true})
    @Type(() => MessageCreateWithoutParentInput)
    create?: Array<MessageCreateWithoutParentInput>;

    @Field(() => [MessageCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutParentInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => MessageUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => MessageCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyParentInputEnvelope)
    createMany?: MessageCreateManyParentInputEnvelope;

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

    @Field(() => [MessageUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => MessageUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<MessageUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => MessageUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<MessageUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    @Type(() => MessageScalarWhereInput)
    deleteMany?: Array<MessageScalarWhereInput>;
}
