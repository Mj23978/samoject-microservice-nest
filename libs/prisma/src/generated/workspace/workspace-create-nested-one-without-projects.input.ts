import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutProjectsInput } from './workspace-create-without-projects.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateOrConnectWithoutProjectsInput } from './workspace-create-or-connect-without-projects.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';

@InputType()
export class WorkspaceCreateNestedOneWithoutProjectsInput {

    @Field(() => WorkspaceCreateWithoutProjectsInput, {nullable:true})
    @Type(() => WorkspaceCreateWithoutProjectsInput)
    create?: WorkspaceCreateWithoutProjectsInput;

    @Field(() => WorkspaceCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => WorkspaceCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: WorkspaceCreateOrConnectWithoutProjectsInput;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceWhereUniqueInput)
    connect?: WorkspaceWhereUniqueInput;
}
