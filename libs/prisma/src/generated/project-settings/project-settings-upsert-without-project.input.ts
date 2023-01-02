import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsUpdateWithoutProjectInput } from './project-settings-update-without-project.input';
import { Type } from 'class-transformer';
import { ProjectSettingsCreateWithoutProjectInput } from './project-settings-create-without-project.input';

@InputType()
export class ProjectSettingsUpsertWithoutProjectInput {

    @Field(() => ProjectSettingsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectSettingsUpdateWithoutProjectInput)
    update!: ProjectSettingsUpdateWithoutProjectInput;

    @Field(() => ProjectSettingsCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectSettingsCreateWithoutProjectInput)
    create!: ProjectSettingsCreateWithoutProjectInput;
}
