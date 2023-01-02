import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWorkspacesInput } from './user-update-without-workspaces.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWorkspacesInput } from './user-create-without-workspaces.input';

@InputType()
export class UserUpsertWithoutWorkspacesInput {

    @Field(() => UserUpdateWithoutWorkspacesInput, {nullable:false})
    @Type(() => UserUpdateWithoutWorkspacesInput)
    update!: UserUpdateWithoutWorkspacesInput;

    @Field(() => UserCreateWithoutWorkspacesInput, {nullable:false})
    @Type(() => UserCreateWithoutWorkspacesInput)
    create!: UserCreateWithoutWorkspacesInput;
}
