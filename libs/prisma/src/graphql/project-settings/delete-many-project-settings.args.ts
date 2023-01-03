import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsWhereInput } from './project-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProjectSettingsArgs {

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    @Type(() => ProjectSettingsWhereInput)
    where?: ProjectSettingsWhereInput;
}
