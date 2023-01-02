import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutProjectsInput } from './workspace-create-without-projects.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateOrConnectWithoutProjectsInput } from './workspace-create-or-connect-without-projects.input';
import { WorkspaceUpsertWithoutProjectsInput } from './workspace-upsert-without-projects.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceUpdateWithoutProjectsInput } from './workspace-update-without-projects.input';

@InputType()
export class WorkspaceUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => WorkspaceCreateWithoutProjectsInput, {nullable:true})
    @Type(() => WorkspaceCreateWithoutProjectsInput)
    create?: WorkspaceCreateWithoutProjectsInput;

    @Field(() => WorkspaceCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => WorkspaceCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: WorkspaceCreateOrConnectWithoutProjectsInput;

    @Field(() => WorkspaceUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => WorkspaceUpsertWithoutProjectsInput)
    upsert?: WorkspaceUpsertWithoutProjectsInput;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceWhereUniqueInput)
    connect?: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceUpdateWithoutProjectsInput, {nullable:true})
    @Type(() => WorkspaceUpdateWithoutProjectsInput)
    update?: WorkspaceUpdateWithoutProjectsInput;
}
