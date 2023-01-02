import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceScalarWhereInput } from './space-scalar-where.input';
import { Type } from 'class-transformer';
import { SpaceUpdateManyMutationInput } from './space-update-many-mutation.input';

@InputType()
export class SpaceUpdateManyWithWhereWithoutParentInput {

    @Field(() => SpaceScalarWhereInput, {nullable:false})
    @Type(() => SpaceScalarWhereInput)
    where!: SpaceScalarWhereInput;

    @Field(() => SpaceUpdateManyMutationInput, {nullable:false})
    @Type(() => SpaceUpdateManyMutationInput)
    data!: SpaceUpdateManyMutationInput;
}
