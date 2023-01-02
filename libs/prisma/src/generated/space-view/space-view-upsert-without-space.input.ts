import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceViewUpdateWithoutSpaceInput } from './space-view-update-without-space.input';
import { Type } from 'class-transformer';
import { SpaceViewCreateWithoutSpaceInput } from './space-view-create-without-space.input';

@InputType()
export class SpaceViewUpsertWithoutSpaceInput {

    @Field(() => SpaceViewUpdateWithoutSpaceInput, {nullable:false})
    @Type(() => SpaceViewUpdateWithoutSpaceInput)
    update!: SpaceViewUpdateWithoutSpaceInput;

    @Field(() => SpaceViewCreateWithoutSpaceInput, {nullable:false})
    @Type(() => SpaceViewCreateWithoutSpaceInput)
    create!: SpaceViewCreateWithoutSpaceInput;
}
