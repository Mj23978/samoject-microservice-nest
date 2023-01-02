import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMessageArgs {

    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: MessageWhereInput;
}
