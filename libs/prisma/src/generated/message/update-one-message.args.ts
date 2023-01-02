import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageUpdateInput } from './message-update.input';
import { Type } from 'class-transformer';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class UpdateOneMessageArgs {

    @Field(() => MessageUpdateInput, {nullable:false})
    @Type(() => MessageUpdateInput)
    data!: MessageUpdateInput;

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: MessageWhereUniqueInput;
}
