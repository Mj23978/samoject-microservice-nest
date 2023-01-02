import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceCreateManyInput } from './space-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySpaceArgs {

    @Field(() => [SpaceCreateManyInput], {nullable:false})
    @Type(() => SpaceCreateManyInput)
    data!: Array<SpaceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
