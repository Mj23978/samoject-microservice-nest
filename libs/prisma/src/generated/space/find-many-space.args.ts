import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceWhereInput } from './space-where.input';
import { Type } from 'class-transformer';
import { SpaceOrderByWithRelationInput } from './space-order-by-with-relation.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpaceScalarFieldEnum } from './space-scalar-field.enum';

@ArgsType()
export class FindManySpaceArgs {

    @Field(() => SpaceWhereInput, {nullable:true})
    @Type(() => SpaceWhereInput)
    where?: SpaceWhereInput;

    @Field(() => [SpaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SpaceOrderByWithRelationInput>;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    cursor?: SpaceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SpaceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SpaceScalarFieldEnum>;
}
