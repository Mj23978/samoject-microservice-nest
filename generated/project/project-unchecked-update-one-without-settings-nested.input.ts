import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSettingsInput } from './project-create-without-settings.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSettingsInput } from './project-create-or-connect-without-settings.input';
import { ProjectUpsertWithoutSettingsInput } from './project-upsert-without-settings.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutSettingsInput } from './project-update-without-settings.input';

@InputType()
export class ProjectUncheckedUpdateOneWithoutSettingsNestedInput {

    @Field(() => ProjectCreateWithoutSettingsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSettingsInput)
    create?: ProjectCreateWithoutSettingsInput;

    @Field(() => ProjectCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput;

    @Field(() => ProjectUpsertWithoutSettingsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutSettingsInput)
    upsert?: ProjectUpsertWithoutSettingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutSettingsInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutSettingsInput)
    update?: ProjectUpdateWithoutSettingsInput;
}
