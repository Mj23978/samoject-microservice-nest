import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatUpdateManyMutationInput } from './chat-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChatWhereInput } from './chat-where.input';

@ArgsType()
export class UpdateManyChatArgs {

    @Field(() => ChatUpdateManyMutationInput, {nullable:false})
    @Type(() => ChatUpdateManyMutationInput)
    data!: ChatUpdateManyMutationInput;

    @Field(() => ChatWhereInput, {nullable:true})
    @Type(() => ChatWhereInput)
    where?: ChatWhereInput;
}
