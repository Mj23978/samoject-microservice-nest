import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutOwnedProjectsInput } from './user-create-without-owned-projects.input';

@InputType()
export class UserCreateOrConnectWithoutOwnedProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOwnedProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutOwnedProjectsInput)
    create!: UserCreateWithoutOwnedProjectsInput;
}
