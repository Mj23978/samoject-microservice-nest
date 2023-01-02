import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUser_BInput } from './user-create-without-user-b.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUser_BInput } from './user-create-or-connect-without-user-b.input';
import { UserUpsertWithWhereUniqueWithoutUser_BInput } from './user-upsert-with-where-unique-without-user-b.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutUser_BInput } from './user-update-with-where-unique-without-user-b.input';
import { UserUpdateManyWithWhereWithoutUser_BInput } from './user-update-many-with-where-without-user-b.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutUser_BNestedInput {

    @Field(() => [UserCreateWithoutUser_BInput], {nullable:true})
    @Type(() => UserCreateWithoutUser_BInput)
    create?: Array<UserCreateWithoutUser_BInput>;

    @Field(() => [UserCreateOrConnectWithoutUser_BInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUser_BInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutUser_BInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutUser_BInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutUser_BInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutUser_BInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutUser_BInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutUser_BInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutUser_BInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutUser_BInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutUser_BInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutUser_BInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
