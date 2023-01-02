import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsUpdateManyMutationInput } from './project-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectSettingsWhereInput } from './project-settings-where.input';

@ArgsType()
export class UpdateManyProjectSettingsArgs {

    @Field(() => ProjectSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectSettingsUpdateManyMutationInput)
    data!: ProjectSettingsUpdateManyMutationInput;

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    @Type(() => ProjectSettingsWhereInput)
    where?: ProjectSettingsWhereInput;
}
