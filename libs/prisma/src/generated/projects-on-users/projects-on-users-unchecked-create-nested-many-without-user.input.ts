import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateWithoutUserInput } from './projects-on-users-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersCreateOrConnectWithoutUserInput } from './projects-on-users-create-or-connect-without-user.input';
import { ProjectsOnUsersCreateManyUserInputEnvelope } from './projects-on-users-create-many-user-input-envelope.input';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';

@InputType()
export class ProjectsOnUsersUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ProjectsOnUsersCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateWithoutUserInput)
    create?: Array<ProjectsOnUsersCreateWithoutUserInput>;

    @Field(() => [ProjectsOnUsersCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectsOnUsersCreateOrConnectWithoutUserInput>;

    @Field(() => ProjectsOnUsersCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectsOnUsersCreateManyUserInputEnvelope)
    createMany?: ProjectsOnUsersCreateManyUserInputEnvelope;

    @Field(() => [ProjectsOnUsersWhereUniqueInput], {nullable:true})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    connect?: Array<ProjectsOnUsersWhereUniqueInput>;
}
