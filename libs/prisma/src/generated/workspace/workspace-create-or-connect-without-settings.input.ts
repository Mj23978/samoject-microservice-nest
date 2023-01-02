import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateWithoutSettingsInput } from './workspace-create-without-settings.input';

@InputType()
export class WorkspaceCreateOrConnectWithoutSettingsInput {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    @Type(() => WorkspaceWhereUniqueInput)
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceCreateWithoutSettingsInput, {nullable:false})
    @Type(() => WorkspaceCreateWithoutSettingsInput)
    create!: WorkspaceCreateWithoutSettingsInput;
}
