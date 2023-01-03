import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceUpdateManyMutationInput } from './space-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SpaceWhereInput } from './space-where.input';

@ArgsType()
export class UpdateManySpaceArgs {

    @Field(() => SpaceUpdateManyMutationInput, {nullable:false})
    @Type(() => SpaceUpdateManyMutationInput)
    data!: SpaceUpdateManyMutationInput;

    @Field(() => SpaceWhereInput, {nullable:true})
    @Type(() => SpaceWhereInput)
    where?: SpaceWhereInput;
}
