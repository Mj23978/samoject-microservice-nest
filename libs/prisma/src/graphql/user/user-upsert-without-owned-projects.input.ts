import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOwnedProjectsInput } from './user-update-without-owned-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedProjectsInput } from './user-create-without-owned-projects.input';

@InputType()
export class UserUpsertWithoutOwnedProjectsInput {

    @Field(() => UserUpdateWithoutOwnedProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutOwnedProjectsInput)
    update!: UserUpdateWithoutOwnedProjectsInput;

    @Field(() => UserCreateWithoutOwnedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedProjectsInput)
    create!: UserCreateWithoutOwnedProjectsInput;
}
