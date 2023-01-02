import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateInput } from './projects-on-users-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectsOnUsersArgs {

    @Field(() => ProjectsOnUsersCreateInput, {nullable:false})
    @Type(() => ProjectsOnUsersCreateInput)
    data!: ProjectsOnUsersCreateInput;
}
