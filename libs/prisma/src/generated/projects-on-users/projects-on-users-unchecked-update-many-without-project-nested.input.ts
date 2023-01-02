import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateWithoutProjectInput } from './projects-on-users-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersCreateOrConnectWithoutProjectInput } from './projects-on-users-create-or-connect-without-project.input';
import { ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput } from './projects-on-users-upsert-with-where-unique-without-project.input';
import { ProjectsOnUsersCreateManyProjectInputEnvelope } from './projects-on-users-create-many-project-input-envelope.input';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput } from './projects-on-users-update-with-where-unique-without-project.input';
import { ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput } from './projects-on-users-update-many-with-where-without-project.input';
import { ProjectsOnUsersScalarWhereInput } from './projects-on-users-scalar-where.input';

@InputType()
export class ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [ProjectsOnUsersCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateWithoutProjectInput)
    create?: Array<ProjectsOnUsersCreateWithoutProjectInput>;

    @Field(() => [ProjectsOnUsersCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectsOnUsersCreateOrConnectWithoutProjectInput>;

    @Field(() => [ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ProjectsOnUsersCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectsOnUsersCreateManyProjectInputEnvelope)
    createMany?: ProjectsOnUsersCreateManyProjectInputEnvelope;

    @Field(() => [ProjectsOnUsersWhereUniqueInput], {nullable:true})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    set?: Array<ProjectsOnUsersWhereUniqueInput>;

    @Field(() => [ProjectsOnUsersWhereUniqueInput], {nullable:true})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    disconnect?: Array<ProjectsOnUsersWhereUniqueInput>;

    @Field(() => [ProjectsOnUsersWhereUniqueInput], {nullable:true})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    delete?: Array<ProjectsOnUsersWhereUniqueInput>;

    @Field(() => [ProjectsOnUsersWhereUniqueInput], {nullable:true})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    connect?: Array<ProjectsOnUsersWhereUniqueInput>;

    @Field(() => [ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ProjectsOnUsersUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ProjectsOnUsersUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ProjectsOnUsersScalarWhereInput], {nullable:true})
    @Type(() => ProjectsOnUsersScalarWhereInput)
    deleteMany?: Array<ProjectsOnUsersScalarWhereInput>;
}
