import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereInput } from './projects-on-users-where.input';

@InputType()
export class ProjectsOnUsersListRelationFilter {

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    every?: ProjectsOnUsersWhereInput;

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    some?: ProjectsOnUsersWhereInput;

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    none?: ProjectsOnUsersWhereInput;
}
