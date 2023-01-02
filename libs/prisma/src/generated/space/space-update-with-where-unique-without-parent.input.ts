import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceUpdateWithoutParentInput } from './space-update-without-parent.input';

@InputType()
export class SpaceUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceUpdateWithoutParentInput, {nullable:false})
    @Type(() => SpaceUpdateWithoutParentInput)
    data!: SpaceUpdateWithoutParentInput;
}
