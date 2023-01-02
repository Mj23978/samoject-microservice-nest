import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutSettingsInput } from './project-update-without-settings.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSettingsInput } from './project-create-without-settings.input';

@InputType()
export class ProjectUpsertWithoutSettingsInput {

    @Field(() => ProjectUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutSettingsInput)
    update!: ProjectUpdateWithoutSettingsInput;

    @Field(() => ProjectCreateWithoutSettingsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSettingsInput)
    create!: ProjectCreateWithoutSettingsInput;
}
