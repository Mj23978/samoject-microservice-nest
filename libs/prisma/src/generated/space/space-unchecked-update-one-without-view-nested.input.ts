import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutViewInput } from './space-create-without-view.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutViewInput } from './space-create-or-connect-without-view.input';
import { SpaceUpsertWithoutViewInput } from './space-upsert-without-view.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { SpaceUpdateWithoutViewInput } from './space-update-without-view.input';

@InputType()
export class SpaceUncheckedUpdateOneWithoutViewNestedInput {

    @Field(() => SpaceCreateWithoutViewInput, {nullable:true})
    @Type(() => SpaceCreateWithoutViewInput)
    create?: SpaceCreateWithoutViewInput;

    @Field(() => SpaceCreateOrConnectWithoutViewInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutViewInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutViewInput;

    @Field(() => SpaceUpsertWithoutViewInput, {nullable:true})
    @Type(() => SpaceUpsertWithoutViewInput)
    upsert?: SpaceUpsertWithoutViewInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;

    @Field(() => SpaceUpdateWithoutViewInput, {nullable:true})
    @Type(() => SpaceUpdateWithoutViewInput)
    update?: SpaceUpdateWithoutViewInput;
}
