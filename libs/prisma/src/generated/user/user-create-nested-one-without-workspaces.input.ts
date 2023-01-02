import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWorkspacesInput } from './user-create-without-workspaces.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWorkspacesInput } from './user-create-or-connect-without-workspaces.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutWorkspacesInput {

    @Field(() => UserCreateWithoutWorkspacesInput, {nullable:true})
    @Type(() => UserCreateWithoutWorkspacesInput)
    create?: UserCreateWithoutWorkspacesInput;

    @Field(() => UserCreateOrConnectWithoutWorkspacesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWorkspacesInput)
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
