import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewUpdateManyMutationInput } from './space-view-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SpaceViewWhereInput } from './space-view-where.input';

@ArgsType()
export class UpdateManySpaceViewArgs {

    @Field(() => SpaceViewUpdateManyMutationInput, {nullable:false})
    @Type(() => SpaceViewUpdateManyMutationInput)
    data!: SpaceViewUpdateManyMutationInput;

    @Field(() => SpaceViewWhereInput, {nullable:true})
    @Type(() => SpaceViewWhereInput)
    where?: SpaceViewWhereInput;
}
