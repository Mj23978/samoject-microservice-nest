import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSettingsInput } from './project-create-without-settings.input';

@InputType()
export class ProjectCreateOrConnectWithoutSettingsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutSettingsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSettingsInput)
    create!: ProjectCreateWithoutSettingsInput;
}
