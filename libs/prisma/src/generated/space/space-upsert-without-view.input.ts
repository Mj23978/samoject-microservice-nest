import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceUpdateWithoutViewInput } from './space-update-without-view.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutViewInput } from './space-create-without-view.input';

@InputType()
export class SpaceUpsertWithoutViewInput {

    @Field(() => SpaceUpdateWithoutViewInput, {nullable:false})
    @Type(() => SpaceUpdateWithoutViewInput)
    update!: SpaceUpdateWithoutViewInput;

    @Field(() => SpaceCreateWithoutViewInput, {nullable:false})
    @Type(() => SpaceCreateWithoutViewInput)
    create!: SpaceCreateWithoutViewInput;
}
