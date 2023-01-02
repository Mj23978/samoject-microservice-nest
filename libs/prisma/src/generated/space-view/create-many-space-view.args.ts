import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceViewCreateManyInput } from './space-view-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySpaceViewArgs {

    @Field(() => [SpaceViewCreateManyInput], {nullable:false})
    @Type(() => SpaceViewCreateManyInput)
    data!: Array<SpaceViewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
