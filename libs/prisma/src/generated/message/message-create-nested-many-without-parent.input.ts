import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutParentInput } from './message-create-without-parent.input';
import { Type } from 'class-transformer';
import { MessageCreateOrConnectWithoutParentInput } from './message-create-or-connect-without-parent.input';
import { MessageCreateManyParentInputEnvelope } from './message-create-many-parent-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateNestedManyWithoutParentInput {

    @Field(() => [MessageCreateWithoutParentInput], {nullable:true})
    @Type(() => MessageCreateWithoutParentInput)
    create?: Array<MessageCreateWithoutParentInput>;

    @Field(() => [MessageCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => MessageCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<MessageCreateOrConnectWithoutParentInput>;

    @Field(() => MessageCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => MessageCreateManyParentInputEnvelope)
    createMany?: MessageCreateManyParentInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    @Type(() => MessageWhereUniqueInput)
    connect?: Array<MessageWhereUniqueInput>;
}
