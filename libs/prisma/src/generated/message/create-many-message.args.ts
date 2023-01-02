import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageCreateManyInput } from './message-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMessageArgs {

    @Field(() => [MessageCreateManyInput], {nullable:false})
    @Type(() => MessageCreateManyInput)
    data!: Array<MessageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
