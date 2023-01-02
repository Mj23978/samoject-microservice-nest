import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceUpdateWithoutProjectsInput } from './workspace-update-without-projects.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateWithoutProjectsInput } from './workspace-create-without-projects.input';

@InputType()
export class WorkspaceUpsertWithoutProjectsInput {

    @Field(() => WorkspaceUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => WorkspaceUpdateWithoutProjectsInput)
    update!: WorkspaceUpdateWithoutProjectsInput;

    @Field(() => WorkspaceCreateWithoutProjectsInput, {nullable:false})
    @Type(() => WorkspaceCreateWithoutProjectsInput)
    create!: WorkspaceCreateWithoutProjectsInput;
}
