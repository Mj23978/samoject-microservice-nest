import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectsInput } from './user-create-or-connect-without-projects.input';
import { UserUpsertWithoutProjectsInput } from './user-upsert-without-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProjectsInput } from './user-update-without-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => UserCreateWithoutProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutProjectsInput)
    create?: UserCreateWithoutProjectsInput;

    @Field(() => UserCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput;

    @Field(() => UserUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutProjectsInput)
    upsert?: UserUpsertWithoutProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProjectsInput, {nullable:true})
    @Type(() => UserUpdateWithoutProjectsInput)
    update?: UserUpdateWithoutProjectsInput;
}
