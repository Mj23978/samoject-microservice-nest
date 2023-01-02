import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManySenderInput } from './message-create-many-sender.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManySenderInputEnvelope {

    @Field(() => [MessageCreateManySenderInput], {nullable:false})
    @Type(() => MessageCreateManySenderInput)
    data!: Array<MessageCreateManySenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
