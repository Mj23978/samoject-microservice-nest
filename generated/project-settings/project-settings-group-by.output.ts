import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectSettingsCountAggregate } from './project-settings-count-aggregate.output';
import { ProjectSettingsMinAggregate } from './project-settings-min-aggregate.output';
import { ProjectSettingsMaxAggregate } from './project-settings-max-aggregate.output';

@ObjectType()
export class ProjectSettingsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => ProjectSettingsCountAggregate, {nullable:true})
    _count?: ProjectSettingsCountAggregate;

    @Field(() => ProjectSettingsMinAggregate, {nullable:true})
    _min?: ProjectSettingsMinAggregate;

    @Field(() => ProjectSettingsMaxAggregate, {nullable:true})
    _max?: ProjectSettingsMaxAggregate;
}
