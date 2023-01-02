import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereInput } from './projects-on-users-where.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersOrderByWithRelationInput } from './projects-on-users-order-by-with-relation.input';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectsOnUsersScalarFieldEnum } from './projects-on-users-scalar-field.enum';

@ArgsType()
export class FindFirstProjectsOnUsersArgs {

    @Field(() => ProjectsOnUsersWhereInput, {nullable:true})
    @Type(() => ProjectsOnUsersWhereInput)
    where?: ProjectsOnUsersWhereInput;

    @Field(() => [ProjectsOnUsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectsOnUsersOrderByWithRelationInput>;

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:true})
    cursor?: ProjectsOnUsersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectsOnUsersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectsOnUsersScalarFieldEnum>;
}
