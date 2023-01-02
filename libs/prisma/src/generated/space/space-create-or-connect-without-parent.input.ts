import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutParentInput } from './space-create-without-parent.input';

@InputType()
export class SpaceCreateOrConnectWithoutParentInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceCreateWithoutParentInput, {nullable:false})
    @Type(() => SpaceCreateWithoutParentInput)
    create!: SpaceCreateWithoutParentInput;
}
