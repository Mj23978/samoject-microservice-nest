import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyWorkspaceInput } from './project-create-many-workspace.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyWorkspaceInputEnvelope {

    @Field(() => [ProjectCreateManyWorkspaceInput], {nullable:false})
    @Type(() => ProjectCreateManyWorkspaceInput)
    data!: Array<ProjectCreateManyWorkspaceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
