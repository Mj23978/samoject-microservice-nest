import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWorkspacesInput } from './user-create-without-workspaces.input';

@InputType()
export class UserCreateOrConnectWithoutWorkspacesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWorkspacesInput, {nullable:false})
    @Type(() => UserCreateWithoutWorkspacesInput)
    create!: UserCreateWithoutWorkspacesInput;
}
