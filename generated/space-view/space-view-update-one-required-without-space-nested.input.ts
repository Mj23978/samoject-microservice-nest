import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceViewCreateWithoutSpaceInput } from './space-view-create-without-space.input';
import { Type } from 'class-transformer';
import { SpaceViewCreateOrConnectWithoutSpaceInput } from './space-view-create-or-connect-without-space.input';
import { SpaceViewUpsertWithoutSpaceInput } from './space-view-upsert-without-space.input';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';
import { SpaceViewUpdateWithoutSpaceInput } from './space-view-update-without-space.input';

@InputType()
export class SpaceViewUpdateOneRequiredWithoutSpaceNestedInput {

    @Field(() => SpaceViewCreateWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceViewCreateWithoutSpaceInput)
    create?: SpaceViewCreateWithoutSpaceInput;

    @Field(() => SpaceViewCreateOrConnectWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceViewCreateOrConnectWithoutSpaceInput)
    connectOrCreate?: SpaceViewCreateOrConnectWithoutSpaceInput;

    @Field(() => SpaceViewUpsertWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceViewUpsertWithoutSpaceInput)
    upsert?: SpaceViewUpsertWithoutSpaceInput;

    @Field(() => SpaceViewWhereUniqueInput, {nullable:true})
    @Type(() => SpaceViewWhereUniqueInput)
    connect?: SpaceViewWhereUniqueInput;

    @Field(() => SpaceViewUpdateWithoutSpaceInput, {nullable:true})
    @Type(() => SpaceViewUpdateWithoutSpaceInput)
    update?: SpaceViewUpdateWithoutSpaceInput;
}
