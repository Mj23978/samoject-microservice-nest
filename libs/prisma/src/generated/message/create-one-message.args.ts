import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageCreateInput } from './message-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMessageArgs {

    @Field(() => MessageCreateInput, {nullable:false})
    @Type(() => MessageCreateInput)
    data!: MessageCreateInput;
}
