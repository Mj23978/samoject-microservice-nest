import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereInput } from './projects-on-users-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProjectsOnUsersArgs {

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    @Type(() => ProjectsOnUsersWhereInput)
    where?: ProjectsOnUsersWhereInput;
}
