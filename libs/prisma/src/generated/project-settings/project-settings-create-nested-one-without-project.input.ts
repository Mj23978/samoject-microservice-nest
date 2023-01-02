import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsCreateWithoutProjectInput } from './project-settings-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from './project-settings-create-or-connect-without-project.input';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';

@InputType()
export class ProjectSettingsCreateNestedOneWithoutProjectInput {

    @Field(() => ProjectSettingsCreateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectSettingsCreateWithoutProjectInput)
    create?: ProjectSettingsCreateWithoutProjectInput;

    @Field(() => ProjectSettingsCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ProjectSettingsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput;

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:true})
    @Type(() => ProjectSettingsWhereUniqueInput)
    connect?: ProjectSettingsWhereUniqueInput;
}
