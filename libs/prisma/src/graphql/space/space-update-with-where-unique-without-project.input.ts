import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceWhereUniqueInput } from './space-where-unique.input';
import { Type } from 'class-transformer';
import { SpaceUpdateWithoutProjectInput } from './space-update-without-project.input';

@InputType()
export class SpaceUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => SpaceWhereUniqueInput, {nullable:false})
    @Type(() => SpaceWhereUniqueInput)
    where!: SpaceWhereUniqueInput;

    @Field(() => SpaceUpdateWithoutProjectInput, {nullable:false})
    @Type(() => SpaceUpdateWithoutProjectInput)
    data!: SpaceUpdateWithoutProjectInput;
}
