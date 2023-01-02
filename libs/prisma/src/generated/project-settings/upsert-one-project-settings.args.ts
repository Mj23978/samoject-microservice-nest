import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectSettingsCreateInput } from './project-settings-create.input';
import { ProjectSettingsUpdateInput } from './project-settings-update.input';

@ArgsType()
export class UpsertOneProjectSettingsArgs {

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:false})
    @Type(() => ProjectSettingsWhereUniqueInput)
    where!: ProjectSettingsWhereUniqueInput;

    @Field(() => ProjectSettingsCreateInput, {nullable:false})
    @Type(() => ProjectSettingsCreateInput)
    create!: ProjectSettingsCreateInput;

    @Field(() => ProjectSettingsUpdateInput, {nullable:false})
    @Type(() => ProjectSettingsUpdateInput)
    update!: ProjectSettingsUpdateInput;
}
