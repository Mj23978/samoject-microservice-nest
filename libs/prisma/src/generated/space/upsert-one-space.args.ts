import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceCreateInput } from './space-create.input';
import { SpaceUpdateInput } from './space-update.input';

@ArgsType()
export class UpsertOneSpaceArgs {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceCreateInput, {nullable:false})
    @Type(() => SpaceCreateInput)
    create!: SpaceCreateInput;

    @Field(() => SpaceUpdateInput, {nullable:false})
    @Type(() => SpaceUpdateInput)
    update!: SpaceUpdateInput;
}
