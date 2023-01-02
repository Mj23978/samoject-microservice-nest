import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutSettingsInput } from './workspace-create-without-settings.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateOrConnectWithoutSettingsInput } from './workspace-create-or-connect-without-settings.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';

@InputType()
export class WorkspaceUncheckedCreateNestedOneWithoutSettingsInput {

    @Field(() => WorkspaceCreateWithoutSettingsInput, {nullable:true})
    @Type(() => WorkspaceCreateWithoutSettingsInput)
    create?: WorkspaceCreateWithoutSettingsInput;

    @Field(() => WorkspaceCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => WorkspaceCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceWhereUniqueInput)
    connect?: WorkspaceWhereUniqueInput;
}
