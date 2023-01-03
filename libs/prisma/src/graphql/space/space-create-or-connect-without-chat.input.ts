import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutChatInput } from './space-create-without-chat.input';

@InputType()
export class SpaceCreateOrConnectWithoutChatInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceCreateWithoutChatInput, {nullable:false})
    @Type(() => SpaceCreateWithoutChatInput)
    create!: SpaceCreateWithoutChatInput;
}
