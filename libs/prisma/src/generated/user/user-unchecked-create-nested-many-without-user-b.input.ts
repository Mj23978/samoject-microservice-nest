import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_BInput } from './user-create-without-user-b.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_BInput } from './user-create-or-connect-without-user-b.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutUser_BInput {

    @Field(() => [UserCreateWithoutUser_BInput], {nullable:true})
    @Type(() => UserCreateWithoutUser_BInput)
    create?: Array<UserCreateWithoutUser_BInput>;

    @Field(() => [UserCreateOrConnectWithoutUser_BInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUser_BInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutUser_BInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
