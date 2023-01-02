import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereInput } from './space-where.input';

@InputType()
export class SpaceListRelationFilter {

    @Field(() => SpaceWhereInput, {nullable:true})
    every?: SpaceWhereInput;

    @Field(() => SpaceWhereInput, {nullable:true})
    some?: SpaceWhereInput;

    @Field(() => SpaceWhereInput, {nullable:true})
    none?: SpaceWhereInput;
}
