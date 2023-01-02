import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutProjectInput } from './space-create-without-project.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutProjectInput } from './space-create-or-connect-without-project.input';
import { SpaceUpsertWithWhereUniqueWithoutProjectInput } from './space-upsert-with-where-unique-without-project.input';
import { SpaceCreateManyProjectInputEnvelope } from './space-create-many-project-input-envelope.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { SpaceUpdateWithWhereUniqueWithoutProjectInput } from './space-update-with-where-unique-without-project.input';
import { SpaceUpdateManyWithWhereWithoutProjectInput } from './space-update-many-with-where-without-project.input';
import { SpaceScalarWhereInput } from './space-scalar-where.input';

@InputType()
export class SpaceUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [SpaceCreateWithoutProjectInput], {nullable:true})
    @Type(() => SpaceCreateWithoutProjectInput)
    create?: Array<SpaceCreateWithoutProjectInput>;

    @Field(() => [SpaceCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<SpaceCreateOrConnectWithoutProjectInput>;

    @Field(() => [SpaceUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => SpaceUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<SpaceUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => SpaceCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => SpaceCreateManyProjectInputEnvelope)
    createMany?: SpaceCreateManyProjectInputEnvelope;

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

    @Field(() => [SpaceUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => SpaceUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<SpaceUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [SpaceUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => SpaceUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<SpaceUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [SpaceScalarWhereInput], {nullable:true})
    @Type(() => SpaceScalarWhereInput)
    deleteMany?: Array<SpaceScalarWhereInput>;
}
