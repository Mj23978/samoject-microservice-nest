import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceUpdateWithoutParentInput } from './space-update-without-parent.input';
import { SpaceCreateWithoutParentInput } from './space-create-without-parent.input';

@InputType()
export class SpaceUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceUpdateWithoutParentInput, {nullable:false})
    @Type(() => SpaceUpdateWithoutParentInput)
    update!: SpaceUpdateWithoutParentInput;

    @Field(() => SpaceCreateWithoutParentInput, {nullable:false})
    @Type(() => SpaceCreateWithoutParentInput)
    create!: SpaceCreateWithoutParentInput;
}
