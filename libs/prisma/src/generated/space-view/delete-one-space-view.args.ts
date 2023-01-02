import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewWhereUniqueInput } from './space-view-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSpaceViewArgs {

    @Field(() => SpaceViewWhereUniqueInput, {nullable:false})
    @Type(() => SpaceViewWhereUniqueInput)
    where!: SpaceViewWhereUniqueInput;
}
