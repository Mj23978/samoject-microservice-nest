import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProjectsInput } from './user-create-or-connect-without-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProjectsInput {

    @Field(() => UserCreateWithoutProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutProjectsInput)
    create?: UserCreateWithoutProjectsInput;

    @Field(() => UserCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
