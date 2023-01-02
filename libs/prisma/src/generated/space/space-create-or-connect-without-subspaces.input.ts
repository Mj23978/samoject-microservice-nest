import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutSubspacesInput } from './space-create-without-subspaces.input';

@InputType()
export class SpaceCreateOrConnectWithoutSubspacesInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceCreateWithoutSubspacesInput, {nullable:false})
    @Type(() => SpaceCreateWithoutSubspacesInput)
    create!: SpaceCreateWithoutSubspacesInput;
}
