import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyParentInput } from './message-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManyParentInputEnvelope {

    @Field(() => [MessageCreateManyParentInput], {nullable:false})
    @Type(() => MessageCreateManyParentInput)
    data!: Array<MessageCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
