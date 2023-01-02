import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectSettingsWhereInput } from './project-settings-where.input';

@InputType()
export class ProjectSettingsRelationFilter {

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    is?: ProjectSettingsWhereInput;

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    isNot?: ProjectSettingsWhereInput;
}
