import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateWithoutProjectInput } from './projects-on-users-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersCreateOrConnectWithoutProjectInput } from './projects-on-users-create-or-connect-without-project.input';
import { ProjectsOnUsersCreateManyProjectInputEnvelope } from './projects-on-users-create-many-project-input-envelope.input';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';

@InputType()
export class ProjectsOnUsersCreateNestedManyWithoutProjectInput {

    @Field(() => [ProjectsOnUsersCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateWithoutProjectInput)
    create?: Array<ProjectsOnUsersCreateWithoutProjectInput>;

    @Field(() => [ProjectsOnUsersCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectsOnUsersCreateOrConnectWithoutProjectInput>;

    @Field(() => ProjectsOnUsersCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectsOnUsersCreateManyProjectInputEnvelope)
    createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope;

    @Field(() => [ProjectsOnUsersWhereUniqueInput], {nullable:true})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    connect?: Array<ProjectsOnUsersWhereUniqueInput>;
}
