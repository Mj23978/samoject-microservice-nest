import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereInput } from './space-where.input';

@InputType()
export class SpaceRelationFilter {

    @Field(() => SpaceWhereInput, {nullable:true})
    is?: SpaceWhereInput;

    @Field(() => SpaceWhereInput, {nullable:true})
    isNot?: SpaceWhereInput;
}
