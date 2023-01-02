import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersCreateWithoutProjectInput } from './projects-on-users-create-without-project.input';

@InputType()
export class ProjectsOnUsersCreateOrConnectWithoutProjectInput {

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:false})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    where!: ProjectsOnUsersWhereUniqueInput;

    @Field(() => ProjectsOnUsersCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectsOnUsersCreateWithoutProjectInput)
    create!: ProjectsOnUsersCreateWithoutProjectInput;
}
