import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceViewCreateWithoutSpaceInput } from './space-view-create-without-space.input';
import { Type } from 'class-transformer';
import { SpaceViewCreateOrConnectWithoutSpaceInput } from './space-view-create-or-connect-without-space.input';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';

@InputType()
export class SpaceViewCreateNestedOneWithoutSpaceInput {

    @Field(() => SpaceViewCreateWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceViewCreateWithoutSpaceInput)
    create?: SpaceViewCreateWithoutSpaceInput;

    @Field(() => SpaceViewCreateOrConnectWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceViewCreateOrConnectWithoutSpaceInput)
    connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput;

    @Field(() => SpaceViewWhereUniqueInput, {nullable:true})
    @Type(() => SpaceViewWhereUniqueInput)
    connect?: SpaceViewWhereUniqueInput;
}
