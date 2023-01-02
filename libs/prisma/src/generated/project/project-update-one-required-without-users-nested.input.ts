import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutUsersInput } from './project-create-without-users.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutUsersInput } from './project-create-or-connect-without-users.input';
import { ProjectUpsertWithoutUsersInput } from './project-upsert-without-users.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutUsersInput } from './project-update-without-users.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutUsersNestedInput {

    @Field(() => ProjectCreateWithoutUsersInput, {nullable:true})
    @Type(() => ProjectCreateWithoutUsersInput)
    create?: ProjectCreateWithoutUsersInput;

    @Field(() => ProjectCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutUsersInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput;

    @Field(() => ProjectUpsertWithoutUsersInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutUsersInput)
    upsert?: ProjectUpsertWithoutUsersInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutUsersInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutUsersInput)
    update?: ProjectUpdateWithoutUsersInput;
}
