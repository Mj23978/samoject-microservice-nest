import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceViewCreateInput } from './space-view-create.input';
import { SpaceViewUpdateInput } from './space-view-update.input';

@ArgsType()
export class UpsertOneSpaceViewArgs {

    @Field(() => SpaceViewWhereUniqueInput, {nullable:false})
    @Type(() => SpaceViewWhereUniqueInput)
    where!: SpaceViewWhereUniqueInput;

    @Field(() => SpaceViewCreateInput, {nullable:false})
    @Type(() => SpaceViewCreateInput)
    create!: SpaceViewCreateInput;

    @Field(() => SpaceViewUpdateInput, {nullable:false})
    @Type(() => SpaceViewUpdateInput)
    update!: SpaceViewUpdateInput;
}
