import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectCreateInput } from './project-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectArgs {

    @Field(() => ProjectCreateInput, {nullable:false})
    @Type(() => ProjectCreateInput)
    data!: ProjectCreateInput;
}
