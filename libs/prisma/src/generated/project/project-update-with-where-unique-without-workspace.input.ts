import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutWorkspaceInput } from './project-update-without-workspace.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutWorkspaceInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutWorkspaceInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutWorkspaceInput)
    data!: ProjectUpdateWithoutWorkspaceInput;
}
