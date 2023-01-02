import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsCreateInput } from './project-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectSettingsArgs {

    @Field(() => ProjectSettingsCreateInput, {nullable:false})
    @Type(() => ProjectSettingsCreateInput)
    data!: ProjectSettingsCreateInput;
}
