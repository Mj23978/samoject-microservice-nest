import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceViewCreateWithoutSpaceInput } from './space-view-create-without-space.input';

@InputType()
export class SpaceViewCreateOrConnectWithoutSpaceInput {

    @Field(() => SpaceViewWhereUniqueInput, {nullable:false})
    @Type(() => SpaceViewWhereUniqueInput)
    where!: SpaceViewWhereUniqueInput;

    @Field(() => SpaceViewCreateWithoutSpaceInput, {nullable:false})
    @Type(() => SpaceViewCreateWithoutSpaceInput)
    create!: SpaceViewCreateWithoutSpaceInput;
}
