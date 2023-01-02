import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedProjectsInput } from './user-create-without-owned-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedProjectsInput } from './user-create-or-connect-without-owned-projects.input';
import { UserUpsertWithoutOwnedProjectsInput } from './user-upsert-without-owned-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOwnedProjectsInput } from './user-update-without-owned-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutOwnedProjectsNestedInput {

    @Field(() => UserCreateWithoutOwnedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedProjectsInput)
    create?: UserCreateWithoutOwnedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutOwnedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput;

    @Field(() => UserUpsertWithoutOwnedProjectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutOwnedProjectsInput)
    upsert?: UserUpsertWithoutOwnedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOwnedProjectsInput, {nullable:true})
    @Type(() => UserUpdateWithoutOwnedProjectsInput)
    update?: UserUpdateWithoutOwnedProjectsInput;
}
