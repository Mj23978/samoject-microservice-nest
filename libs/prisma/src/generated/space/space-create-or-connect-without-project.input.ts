import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceCreateWithoutProjectInput } from './space-create-without-project.input';

@InputType()
export class SpaceCreateOrConnectWithoutProjectInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceCreateWithoutProjectInput, {nullable:false})
    @Type(() => SpaceCreateWithoutProjectInput)
    create!: SpaceCreateWithoutProjectInput;
}
