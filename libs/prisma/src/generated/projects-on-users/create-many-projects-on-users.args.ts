import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateManyInput } from './projects-on-users-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectsOnUsersArgs {

    @Field(() => [ProjectsOnUsersCreateManyInput], {nullable:false})
    @Type(() => ProjectsOnUsersCreateManyInput)
    data!: Array<ProjectsOnUsersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
