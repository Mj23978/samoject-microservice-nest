import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectSettingsWhereInput } from './project-settings-where.input';
import { Type } from 'class-transformer';
import { ProjectSettingsOrderByWithRelationInput } from './project-settings-order-by-with-relation.input';
import { ProjectSettingsWhereUniqueInput } from './project-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectSettingsScalarFieldEnum } from './project-settings-scalar-field.enum';

@ArgsType()
export class FindManyProjectSettingsArgs {

    @Field(() => ProjectSettingsWhereInput, {nullable:true})
    @Type(() => ProjectSettingsWhereInput)
    where?: ProjectSettingsWhereInput;

    @Field(() => [ProjectSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectSettingsOrderByWithRelationInput>;

    @Field(() => ProjectSettingsWhereUniqueInput, {nullable:true})
    cursor?: ProjectSettingsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectSettingsScalarFieldEnum>;
}
