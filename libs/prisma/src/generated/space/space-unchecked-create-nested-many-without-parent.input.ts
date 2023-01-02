import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutParentInput } from './space-create-without-parent.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutParentInput } from './space-create-or-connect-without-parent.input';
import { SpaceCreateManyParentInputEnvelope } from './space-create-many-parent-input-envelope.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';

@InputType()
export class SpaceUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [SpaceCreateWithoutParentInput], {nullable:true})
    @Type(() => SpaceCreateWithoutParentInput)
    create?: Array<SpaceCreateWithoutParentInput>;

    @Field(() => [SpaceCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<SpaceCreateOrConnectWithoutParentInput>;

    @Field(() => SpaceCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => SpaceCreateManyParentInputEnvelope)
    createMany?: SpaceCreateManyParentInputEnvelope;

    @Field(() => [SpaceWhereUniqueInput], {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: Array<SpaceWhereUniqueInput>;
}
