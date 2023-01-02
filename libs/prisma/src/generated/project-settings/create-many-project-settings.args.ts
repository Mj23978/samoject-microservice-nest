import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsCreateManyInput } from './project-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectSettingsArgs {

    @Field(() => [ProjectSettingsCreateManyInput], {nullable:false})
    @Type(() => ProjectSettingsCreateManyInput)
    data!: Array<ProjectSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
