import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_BInput } from './user-create-without-user-b.input';

@InputType()
export class UserCreateOrConnectWithoutUser_BInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUser_BInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_BInput)
    create!: UserCreateWithoutUser_BInput;
}
