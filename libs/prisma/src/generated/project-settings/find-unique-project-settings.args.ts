import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProjectSettingsArgs {

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:false})
    @Type(() => ProjectSettingsWhereUniqueInput)
    where!: ProjectSettingsWhereUniqueInput;
}
