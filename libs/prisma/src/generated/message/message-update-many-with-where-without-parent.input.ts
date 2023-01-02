import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageScalarWhereInput } from './message-scalar-where.input';
import { Type } from 'class-transformer';
import { MessageUpdateManyMutationInput } from './message-update-many-mutation.input';

@InputType()
export class MessageUpdateManyWithWhereWithoutParentInput {

    @Field(() => MessageScalarWhereInput, {nullable:false})
    @Type(() => MessageScalarWhereInput)
    where!: MessageScalarWhereInput;

    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    @Type(() => MessageUpdateManyMutationInput)
    data!: MessageUpdateManyMutationInput;
}
