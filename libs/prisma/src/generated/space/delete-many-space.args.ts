import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpaceWhereInput } from './space-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySpaceArgs {

    @Field(() => SpaceWhereInput, {nullable:true})
    @Type(() => SpaceWhereInput)
    where?: SpaceWhereInput;
}
