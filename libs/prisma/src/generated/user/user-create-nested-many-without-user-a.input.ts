import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_AInput } from './user-create-without-user-a.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_AInput } from './user-create-or-connect-without-user-a.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutUser_AInput {

    @Field(() => [UserCreateWithoutUser_AInput], {nullable:true})
    @Type(() => UserCreateWithoutUser_AInput)
    create?: Array<UserCreateWithoutUser_AInput>;

    @Field(() => [UserCreateOrConnectWithoutUser_AInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUser_AInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutUser_AInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
