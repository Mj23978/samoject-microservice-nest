import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageUpdateManyMutationInput } from './message-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MessageWhereInput } from './message-where.input';

@ArgsType()
export class UpdateManyMessageArgs {

    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageUpdateManyMutationInput)
    data!: MessageUpdateManyMutationInput;

    @Field(() => MessageWhereInput, {nullable:true})
    @Type(() => MessageWhereInput)
    where?: MessageWhereInput;
}
