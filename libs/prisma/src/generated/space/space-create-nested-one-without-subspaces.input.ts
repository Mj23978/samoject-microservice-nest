import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutSubspacesInput } from './space-create-without-subspaces.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutSubspacesInput } from './space-create-or-connect-without-subspaces.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';

@InputType()
export class SpaceCreateNestedOneWithoutSubspacesInput {

    @Field(() => SpaceCreateWithoutSubspacesInput, {nullable:true})
    @Type(() => SpaceCreateWithoutSubspacesInput)
    create?: SpaceCreateWithoutSubspacesInput;

    @Field(() => SpaceCreateOrConnectWithoutSubspacesInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutSubspacesInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutSubspacesInput;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;
}
