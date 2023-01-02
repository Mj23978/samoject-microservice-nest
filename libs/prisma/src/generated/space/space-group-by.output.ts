import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SpaceCountAggregate } from './space-count-aggregate.output';
import { SpaceMinAggregate } from './space-min-aggregate.output';
import { SpaceMaxAggregate } from './space-max-aggregate.output';

@ObjectType()
export class SpaceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    viewId!: string;

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    spaceType!: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => SpaceCountAggregate, {nullable:true})
    _count?: SpaceCountAggregate;

    @Field(() => SpaceMinAggregate, {nullable:true})
    _min?: SpaceMinAggregate;

    @Field(() => SpaceMaxAggregate, {nullable:true})
    _max?: SpaceMaxAggregate;
}
