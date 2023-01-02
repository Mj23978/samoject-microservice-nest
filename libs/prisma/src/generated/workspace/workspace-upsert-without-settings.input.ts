import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceUpdateWithoutSettingsInput } from './workspace-update-without-settings.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateWithoutSettingsInput } from './workspace-create-without-settings.input';

@InputType()
export class WorkspaceUpsertWithoutSettingsInput {

    @Field(() => WorkspaceUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => WorkspaceUpdateWithoutSettingsInput)
    update!: WorkspaceUpdateWithoutSettingsInput;

    @Field(() => WorkspaceCreateWithoutSettingsInput, {nullable:false})
    @Type(() => WorkspaceCreateWithoutSettingsInput)
    create!: WorkspaceCreateWithoutSettingsInput;
}
