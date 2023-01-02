import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUser_AInput } from './user-update-without-user-a.input';
import { UserCreateWithoutUser_AInput } from './user-create-without-user-a.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutUser_AInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUser_AInput, {nullable:false})
    @Type(() => UserUpdateWithoutUser_AInput)
    update!: UserUpdateWithoutUser_AInput;

    @Field(() => UserCreateWithoutUser_AInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_AInput)
    create!: UserCreateWithoutUser_AInput;
}
