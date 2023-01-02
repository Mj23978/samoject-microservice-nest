import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_AInput } from './user-create-without-user-a.input';

@InputType()
export class UserCreateOrConnectWithoutUser_AInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUser_AInput, {nullable:false})
    @Type(() => UserCreateWithoutUser_AInput)
    create!: UserCreateWithoutUser_AInput;
}
