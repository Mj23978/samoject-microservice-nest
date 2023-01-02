import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutParentInput } from './message-create-without-parent.input';

@InputType()
export class MessageCreateOrConnectWithoutParentInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutParentInput, {nullable:false})
    @Type(() => MessageCreateWithoutParentInput)
    create!: MessageCreateWithoutParentInput;
}
