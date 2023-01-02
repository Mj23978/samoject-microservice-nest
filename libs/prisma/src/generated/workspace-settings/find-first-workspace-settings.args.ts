import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkspaceSettingsWhereInput } from './workspace-settings-where.input';
import { Type } from 'class-transformer';
import { WorkspaceSettingsOrderByWithRelationInput } from './workspace-settings-order-by-with-relation.input';
import { WorkspaceSettingsWhereUniqueInput } from './workspace-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkspaceSettingsScalarFieldEnum } from './workspace-settings-scalar-field.enum';

@ArgsType()
export class FindFirstWorkspaceSettingsArgs {

    @Field(() => WorkspaceSettingsWhereInput, {nullable:true})
    @Type(() => WorkspaceSettingsWhereInput)
    where?: WorkspaceSettingsWhereInput;

    @Field(() => [WorkspaceSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkspaceSettingsOrderByWithRelationInput>;

    @Field(() => WorkspaceSettingsWhereUniqueInput, {nullable:true})
    cursor?: WorkspaceSettingsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WorkspaceSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WorkspaceSettingsScalarFieldEnum>;
}
