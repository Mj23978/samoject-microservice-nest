import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectSettingsCreateWithoutProjectInput } from './project-settings-create-without-project.input';

@InputType()
export class ProjectSettingsCreateOrConnectWithoutProjectInput {

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:false})
    @Type(() => ProjectSettingsWhereUniqueInput)
    where!: ProjectSettingsWhereUniqueInput;

    @Field(() => ProjectSettingsCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectSettingsCreateWithoutProjectInput)
    create!: ProjectSettingsCreateWithoutProjectInput;
}
