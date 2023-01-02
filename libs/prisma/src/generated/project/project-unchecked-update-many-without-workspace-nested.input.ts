import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutWorkspaceInput } from './project-create-without-workspace.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutWorkspaceInput } from './project-create-or-connect-without-workspace.input';
import { ProjectUpsertWithWhereUniqueWithoutWorkspaceInput } from './project-upsert-with-where-unique-without-workspace.input';
import { ProjectCreateManyWorkspaceInputEnvelope } from './project-create-many-workspace-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutWorkspaceInput } from './project-update-with-where-unique-without-workspace.input';
import { ProjectUpdateManyWithWhereWithoutWorkspaceInput } from './project-update-many-with-where-without-workspace.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutWorkspaceNestedInput {

    @Field(() => [ProjectCreateWithoutWorkspaceInput], {nullable:true})
    @Type(() => ProjectCreateWithoutWorkspaceInput)
    create?: Array<ProjectCreateWithoutWorkspaceInput>;

    @Field(() => [ProjectCreateOrConnectWithoutWorkspaceInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutWorkspaceInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutWorkspaceInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutWorkspaceInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutWorkspaceInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutWorkspaceInput>;

    @Field(() => ProjectCreateManyWorkspaceInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyWorkspaceInputEnvelope)
    createMany?: ProjectCreateManyWorkspaceInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutWorkspaceInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutWorkspaceInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutWorkspaceInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutWorkspaceInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutWorkspaceInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutWorkspaceInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
