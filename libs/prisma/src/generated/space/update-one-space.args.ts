import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceUpdateInput } from './space-update.input';
import { Type } from 'class-transformer';
import { SpaceWhereUniqueInput } from './space-where-unique.input';

@ArgsType()
export class UpdateOneSpaceArgs {

    @Field(() => SpaceUpdateInput, {nullable:false})
    @Type(() => SpaceUpdateInput)
    data!: SpaceUpdateInput;

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;
}
