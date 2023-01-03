import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProjectArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
