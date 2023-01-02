import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutUsersInput } from './project-create-without-users.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutUsersInput } from './project-create-or-connect-without-users.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutUsersInput {

    @Field(() => ProjectCreateWithoutUsersInput, {nullable:true})
    @Type(() => ProjectCreateWithoutUsersInput)
    create?: ProjectCreateWithoutUsersInput;

    @Field(() => ProjectCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutUsersInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;
}
