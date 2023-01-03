import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceUpdateWithoutSubspacesInput } from './space-update-without-subspaces.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutSubspacesInput } from './space-create-without-subspaces.input';

@InputType()
export class SpaceUpsertWithoutSubspacesInput {

    @Field(() => SpaceUpdateWithoutSubspacesInput, {nullable:false})
    @Type(() => SpaceUpdateWithoutSubspacesInput)
    update!: SpaceUpdateWithoutSubspacesInput;

    @Field(() => SpaceCreateWithoutSubspacesInput, {nullable:false})
    @Type(() => SpaceCreateWithoutSubspacesInput)
    create!: SpaceCreateWithoutSubspacesInput;
}
