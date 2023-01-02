import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewWhereInput } from './space-view-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySpaceViewArgs {

    @Field(() => SpaceViewWhereInput, {nullable:true})
    @Type(() => SpaceViewWhereInput)
    where?: SpaceViewWhereInput;
}
