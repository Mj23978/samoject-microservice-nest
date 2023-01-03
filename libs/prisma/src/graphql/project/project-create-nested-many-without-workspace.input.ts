import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutWorkspaceInput } from './project-create-without-workspace.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutWorkspaceInput } from './project-create-or-connect-without-workspace.input';
import { ProjectCreateManyWorkspaceInputEnvelope } from './project-create-many-workspace-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutWorkspaceInput {

    @Field(() => [ProjectCreateWithoutWorkspaceInput], {nullable:true})
    @Type(() => ProjectCreateWithoutWorkspaceInput)
    create?: Array<ProjectCreateWithoutWorkspaceInput>;

    @Field(() => [ProjectCreateOrConnectWithoutWorkspaceInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutWorkspaceInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutWorkspaceInput>;

    @Field(() => ProjectCreateManyWorkspaceInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyWorkspaceInputEnvelope)
    createMany?: ProjectCreateManyWorkspaceInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}
