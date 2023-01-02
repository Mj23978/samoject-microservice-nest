import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSettingsInput } from './project-create-without-settings.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSettingsInput } from './project-create-or-connect-without-settings.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectUncheckedCreateNestedOneWithoutSettingsInput {

    @Field(() => ProjectCreateWithoutSettingsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSettingsInput)
    create?: ProjectCreateWithoutSettingsInput;

    @Field(() => ProjectCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSettingsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;
}
