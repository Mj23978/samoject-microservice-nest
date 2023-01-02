import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewWhereInput } from './space-view-where.input';
import { Type } from 'class-transformer';
import { SpaceViewOrderByWithRelationInput } from './space-view-order-by-with-relation.input';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpaceViewScalarFieldEnum } from './space-view-scalar-field.enum';

@ArgsType()
export class FindManySpaceViewArgs {

    @Field(() => SpaceViewWhereInput, {nullable:true})
    @Type(() => SpaceViewWhereInput)
    where?: SpaceViewWhereInput;

    @Field(() => [SpaceViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SpaceViewOrderByWithRelationInput>;

    @Field(() => SpaceViewWhereUniqueInput, {nullable:true})
    cursor?: SpaceViewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SpaceViewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SpaceViewScalarFieldEnum>;
}
