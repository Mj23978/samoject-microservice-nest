import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkspacesInput } from './user-create-without-workspaces.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWorkspacesInput } from './user-create-or-connect-without-workspaces.input';
import { UserUpsertWithoutWorkspacesInput } from './user-upsert-without-workspaces.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWorkspacesInput } from './user-update-without-workspaces.input';

@InputType()
export class UserUpdateOneRequiredWithoutWorkspacesNestedInput {

    @Field(() => UserCreateWithoutWorkspacesInput, {nullable:true})
    @Type(() => UserCreateWithoutWorkspacesInput)
    create?: UserCreateWithoutWorkspacesInput;

    @Field(() => UserCreateOrConnectWithoutWorkspacesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWorkspacesInput)
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput;

    @Field(() => UserUpsertWithoutWorkspacesInput, {nullable:true})
    @Type(() => UserUpsertWithoutWorkspacesInput)
    upsert?: UserUpsertWithoutWorkspacesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWorkspacesInput, {nullable:true})
    @Type(() => UserUpdateWithoutWorkspacesInput)
    update?: UserUpdateWithoutWorkspacesInput;
}
