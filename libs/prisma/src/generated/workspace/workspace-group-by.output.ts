import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkspaceCountAggregate } from './workspace-count-aggregate.output';
import { WorkspaceMinAggregate } from './workspace-min-aggregate.output';
import { WorkspaceMaxAggregate } from './workspace-max-aggregate.output';

@ObjectType()
export class WorkspaceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => WorkspaceCountAggregate, {nullable:true})
    _count?: WorkspaceCountAggregate;

    @Field(() => WorkspaceMinAggregate, {nullable:true})
    _min?: WorkspaceMinAggregate;

    @Field(() => WorkspaceMaxAggregate, {nullable:true})
    _max?: WorkspaceMaxAggregate;
}
