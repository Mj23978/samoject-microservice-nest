import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereInput } from './workspace-settings-where.input';

@InputType()
export class WorkspaceSettingsRelationFilter {

    @Field(() => WorkspaceSettingsWhereInput, {nullable:true})
    is?: WorkspaceSettingsWhereInput;

    @Field(() => WorkspaceSettingsWhereInput, {nullable:true})
    isNot?: WorkspaceSettingsWhereInput;
}
