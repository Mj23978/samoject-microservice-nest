import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutParentInput } from './message-update-without-parent.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutParentInput, {nullable:false})
    @Type(() => MessageUpdateWithoutParentInput)
    data!: MessageUpdateWithoutParentInput;
}
