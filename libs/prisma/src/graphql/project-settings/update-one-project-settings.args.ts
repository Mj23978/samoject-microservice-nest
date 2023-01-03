import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsUpdateInput } from './project-settings-update.input';
import { Type } from 'class-transformer';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';

@ArgsType()
export class UpdateOneProjectSettingsArgs {

    @Field(() => ProjectSettingsUpdateInput, {nullable:false})
    @Type(() => ProjectSettingsUpdateInput)
    data!: ProjectSettingsUpdateInput;

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:false})
    @Type(() => ProjectSettingsWhereUniqueInput)
    where!: ProjectSettingsWhereUniqueInput;
}
