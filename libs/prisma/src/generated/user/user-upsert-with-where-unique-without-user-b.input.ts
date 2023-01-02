import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUser_BInput } from './user-update-without-user-b.input';
import { UserCreateWithoutUser_BInput } from './user-create-without-user-b.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutUser_BInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUser_BInput, {nullable:false})
    @Type(() => UserUpdateWithoutUser_BInput)
    update!: UserUpdateWithoutUser_BInput;

    @Field(() => UserCreateWithoutUser_BInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_BInput)
    create!: UserCreateWithoutUser_BInput;
}
