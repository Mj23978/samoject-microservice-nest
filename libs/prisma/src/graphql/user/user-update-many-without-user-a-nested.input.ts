import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_AInput } from './user-create-without-user-a.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_AInput } from './user-create-or-connect-without-user-a.input';
import { UserUpsertWithWhereUniqueWithoutUser_AInput } from './user-upsert-with-where-unique-without-user-a.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutUser_AInput } from './user-update-with-where-unique-without-user-a.input';
import { UserUpdateManyWithWhereWithoutUser_AInput } from './user-update-many-with-where-without-user-a.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutUser_ANestedInput {

    @Field(() => [UserCreateWithoutUser_AInput], {nullable:true})
    @Type(() => UserCreateWithoutUser_AInput)
    create?: Array<UserCreateWithoutUser_AInput>;

    @Field(() => [UserCreateOrConnectWithoutUser_AInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUser_AInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutUser_AInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutUser_AInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutUser_AInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutUser_AInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutUser_AInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutUser_AInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutUser_AInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutUser_AInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutUser_AInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutUser_AInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
