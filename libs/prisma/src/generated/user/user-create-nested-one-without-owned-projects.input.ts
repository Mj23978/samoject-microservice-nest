import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOwnedProjectsInput } from './user-create-without-owned-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutOwnedProjectsInput } from './user-create-or-connect-without-owned-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOwnedProjectsInput {

    @Field(() => UserCreateWithoutOwnedProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutOwnedProjectsInput)
    create?: UserCreateWithoutOwnedProjectsInput;

    @Field(() => UserCreateOrConnectWithoutOwnedProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOwnedProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
