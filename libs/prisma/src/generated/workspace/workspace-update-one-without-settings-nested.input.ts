import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutSettingsInput } from './workspace-create-without-settings.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateOrConnectWithoutSettingsInput } from './workspace-create-or-connect-without-settings.input';
import { WorkspaceUpsertWithoutSettingsInput } from './workspace-upsert-without-settings.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceUpdateWithoutSettingsInput } from './workspace-update-without-settings.input';

@InputType()
export class WorkspaceUpdateOneWithoutSettingsNestedInput {

    @Field(() => WorkspaceCreateWithoutSettingsInput, {nullable:true})
    @Type(() => WorkspaceCreateWithoutSettingsInput)
    create?: WorkspaceCreateWithoutSettingsInput;

    @Field(() => WorkspaceCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => WorkspaceCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSettingsInput;

    @Field(() => WorkspaceUpsertWithoutSettingsInput, {nullable:true})
    @Type(() => WorkspaceUpsertWithoutSettingsInput)
    upsert?: WorkspaceUpsertWithoutSettingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceWhereUniqueInput)
    connect?: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceUpdateWithoutSettingsInput, {nullable:true})
    @Type(() => WorkspaceUpdateWithoutSettingsInput)
    update?: WorkspaceUpdateWithoutSettingsInput;
}
