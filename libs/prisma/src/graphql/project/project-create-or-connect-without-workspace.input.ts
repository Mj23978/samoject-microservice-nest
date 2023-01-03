import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutWorkspaceInput } from './project-create-without-workspace.input';

@InputType()
export class ProjectCreateOrConnectWithoutWorkspaceInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutWorkspaceInput, {nullable:false})
    @Type(() => ProjectCreateWithoutWorkspaceInput)
    create!: ProjectCreateWithoutWorkspaceInput;
}
