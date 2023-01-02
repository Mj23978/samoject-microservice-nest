import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewUpdateInput } from './space-view-update.input';
import { Type } from 'class-transformer';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';

@ArgsType()
export class UpdateOneSpaceViewArgs {

    @Field(() => SpaceViewUpdateInput, {nullable:false})
    @Type(() => SpaceViewUpdateInput)
    data!: SpaceViewUpdateInput;

    @Field(() => SpaceViewWhereUniqueInput, {nullable:false})
    @Type(() => SpaceViewWhereUniqueInput)
    where!: SpaceViewWhereUniqueInput;
}
