import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutParentInput } from './space-create-without-parent.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutParentInput } from './space-create-or-connect-without-parent.input';
import { SpaceUpsertWithWhereUniqueWithoutParentInput } from './space-upsert-with-where-unique-without-parent.input';
import { SpaceCreateManyParentInputEnvelope } from './space-create-many-parent-input-envelope.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { SpaceUpdateWithWhereUniqueWithoutParentInput } from './space-update-with-where-unique-without-parent.input';
import { SpaceUpdateManyWithWhereWithoutParentInput } from './space-update-many-with-where-without-parent.input';
import { SpaceScalarWhereInput } from './space-scalar-where.input';

@InputType()
export class SpaceUpdateManyWithoutParentNestedInput {

    @Field(() => [SpaceCreateWithoutParentInput], {nullable:true})
    @Type(() => SpaceCreateWithoutParentInput)
    create?: Array<SpaceCreateWithoutParentInput>;

    @Field(() => [SpaceCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<SpaceCreateOrConnectWithoutParentInput>;

    @Field(() => [SpaceUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => SpaceUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<SpaceUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => SpaceCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => SpaceCreateManyParentInputEnvelope)
    createMany?: SpaceCreateManyParentInputEnvelope;

    @Field(() => [SpaceWhereUniqueInput], {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    set?: Array<SpaceWhereUniqueInput>;

    @Field(() => [SpaceWhereUniqueInput], {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    disconnect?: Array<SpaceWhereUniqueInput>;

    @Field(() => [SpaceWhereUniqueInput], {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    delete?: Array<SpaceWhereUniqueInput>;

    @Field(() => [SpaceWhereUniqueInput], {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: Array<SpaceWhereUniqueInput>;

    @Field(() => [SpaceUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => SpaceUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<SpaceUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [SpaceUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => SpaceUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<SpaceUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [SpaceScalarWhereInput], {nullable:true})
    @Type(() => SpaceScalarWhereInput)
    deleteMany?: Array<SpaceScalarWhereInput>;
}
