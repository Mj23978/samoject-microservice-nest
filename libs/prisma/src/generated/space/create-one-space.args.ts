import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceCreateInput } from './space-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSpaceArgs {

    @Field(() => SpaceCreateInput, {nullable:false})
    @Type(() => SpaceCreateInput)
    data!: SpaceCreateInput;
}
