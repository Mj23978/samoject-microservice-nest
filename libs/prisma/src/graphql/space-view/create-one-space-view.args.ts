import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewCreateInput } from './space-view-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSpaceViewArgs {

    @Field(() => SpaceViewCreateInput, {nullable:false})
    @Type(() => SpaceViewCreateInput)
    data!: SpaceViewCreateInput;
}
