import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SpaceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    viewId?: string;

    @Field(() => String, {nullable:true})
    settingsId?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;
}
