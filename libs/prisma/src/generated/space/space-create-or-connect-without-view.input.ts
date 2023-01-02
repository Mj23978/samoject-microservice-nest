import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutViewInput } from './space-create-without-view.input';

@InputType()
export class SpaceCreateOrConnectWithoutViewInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceCreateWithoutViewInput, {nullable:false})
    @Type(() => SpaceCreateWithoutViewInput)
    create!: SpaceCreateWithoutViewInput;
}
