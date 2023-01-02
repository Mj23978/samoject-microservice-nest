import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceViewWhereInput } from './space-view-where.input';

@InputType()
export class SpaceViewRelationFilter {

    @Field(() => SpaceViewWhereInput, {nullable:true})
    is?: SpaceViewWhereInput;

    @Field(() => SpaceViewWhereInput, {nullable:true})
    isNot?: SpaceViewWhereInput;
}
