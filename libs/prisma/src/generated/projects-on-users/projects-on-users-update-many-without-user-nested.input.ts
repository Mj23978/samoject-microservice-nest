import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateWithoutUserInput } from './projects-on-users-create-without-user.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersCreateOrConnectWithoutUserInput } from './projects-on-users-create-or-connect-without-user.input';
import { ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput } from './projects-on-users-upsert-with-where-unique-without-user.input';
import { ProjectsOnUsersCreateManyUserInputEnvelope } from './projects-on-users-create-many-user-input-envelope.input';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput } from './projects-on-users-update-with-where-unique-without-user.input';
import { ProjectsOnUsersUpdateManyWithWhereWithoutUserInput } from './projects-on-users-update-many-with-where-without-user.input';
import { ProjectsOnUsersScalarWhereInput } from './projects-on-users-scalar-where.input';

@InputType()
export class ProjectsOnUsersUpdateManyWithoutUserNestedInput {

    @Field(() => [ProjectsOnUsersCreateWithoutUserInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateWithoutUserInput)
    create?: Array<ProjectsOnUsersCreateWithoutUserInput>;

    @Field(() => [ProjectsOnUsersCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ProjectsOnUsersCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ProjectsOnUsersCreateOrConnectWithoutUserInput>;

    @Field(() => [ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ProjectsOnUsersCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ProjectsOnUsersCreateManyUserInputEnvelope)
    createMany?: ProjectsOnUsersCreateManyUserInputEnvelope;

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

    @Field(() => [ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ProjectsOnUsersUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ProjectsOnUsersUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ProjectsOnUsersUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ProjectsOnUsersScalarWhereInput], {nullable:true})
    @Type(() => ProjectsOnUsersScalarWhereInput)
    deleteMany?: Array<ProjectsOnUsersScalarWhereInput>;
}
