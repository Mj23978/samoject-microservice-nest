import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateWithoutProjectsInput } from './workspace-create-without-projects.input';

@InputType()
export class WorkspaceCreateOrConnectWithoutProjectsInput {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    @Type(() => WorkspaceWhereUniqueInput)
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceCreateWithoutProjectsInput, {nullable:false})
    @Type(() => WorkspaceCreateWithoutProjectsInput)
    create!: WorkspaceCreateWithoutProjectsInput;
}
