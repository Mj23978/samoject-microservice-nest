import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsCreateWithoutProjectInput } from './project-settings-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectSettingsCreateOrConnectWithoutProjectInput } from './project-settings-create-or-connect-without-project.input';
import { ProjectSettingsUpsertWithoutProjectInput } from './project-settings-upsert-without-project.input';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { ProjectSettingsUpdateWithoutProjectInput } from './project-settings-update-without-project.input';

@InputType()
export class ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput {

    @Field(() => ProjectSettingsCreateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectSettingsCreateWithoutProjectInput)
    create?: ProjectSettingsCreateWithoutProjectInput;

    @Field(() => ProjectSettingsCreateOrConnectWithoutProjectInput, {nullable:true})
    @Type(() => ProjectSettingsCreateOrConnectWithoutProjectInput)
    connectOrCreate?: ProjectSettingsCreateOrConnectWithoutProjectInput;

    @Field(() => ProjectSettingsUpsertWithoutProjectInput, {nullable:true})
    @Type(() => ProjectSettingsUpsertWithoutProjectInput)
    upsert?: ProjectSettingsUpsertWithoutProjectInput;

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:true})
    @Type(() => ProjectSettingsWhereUniqueInput)
    connect?: ProjectSettingsWhereUniqueInput;

    @Field(() => ProjectSettingsUpdateWithoutProjectInput, {nullable:true})
    @Type(() => ProjectSettingsUpdateWithoutProjectInput)
    update?: ProjectSettingsUpdateWithoutProjectInput;
}
