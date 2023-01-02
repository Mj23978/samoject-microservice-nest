import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectCreateManyInput } from './project-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectArgs {

    @Field(() => [ProjectCreateManyInput], {nullable:false})
    @Type(() => ProjectCreateManyInput)
    data!: Array<ProjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
