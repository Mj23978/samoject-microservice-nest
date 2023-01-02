import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutSubspacesInput } from './space-create-without-subspaces.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutSubspacesInput } from './space-create-or-connect-without-subspaces.input';
import { SpaceUpsertWithoutSubspacesInput } from './space-upsert-without-subspaces.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { SpaceUpdateWithoutSubspacesInput } from './space-update-without-subspaces.input';

@InputType()
export class SpaceUpdateOneWithoutSubspacesNestedInput {

    @Field(() => SpaceCreateWithoutSubspacesInput, {nullable:true})
    @Type(() => SpaceCreateWithoutSubspacesInput)
    create?: SpaceCreateWithoutSubspacesInput;

    @Field(() => SpaceCreateOrConnectWithoutSubspacesInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutSubspacesInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput;

    @Field(() => SpaceUpsertWithoutSubspacesInput, {nullable:true})
    @Type(() => SpaceUpsertWithoutSubspacesInput)
    upsert?: SpaceUpsertWithoutSubspacesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;

    @Field(() => SpaceUpdateWithoutSubspacesInput, {nullable:true})
    @Type(() => SpaceUpdateWithoutSubspacesInput)
    update?: SpaceUpdateWithoutSubspacesInput;
}
