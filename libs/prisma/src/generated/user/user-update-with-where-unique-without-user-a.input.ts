import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUser_AInput } from './user-update-without-user-a.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutUser_AInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUser_AInput, {nullable:false})
    @Type(() => UserUpdateWithoutUser_AInput)
    data!: UserUpdateWithoutUser_AInput;
}
