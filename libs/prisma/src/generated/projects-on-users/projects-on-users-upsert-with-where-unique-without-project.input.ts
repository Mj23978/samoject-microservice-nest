import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersUpdateWithoutProjectInput } from './projects-on-users-update-without-project.input';
import { ProjectsOnUsersCreateWithoutProjectInput } from './projects-on-users-create-without-project.input';

@InputType()
export class ProjectsOnUsersUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:false})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    where!: ProjectsOnUsersWhereUniqueInput;

    @Field(() => ProjectsOnUsersUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectsOnUsersUpdateWithoutProjectInput)
    update!: ProjectsOnUsersUpdateWithoutProjectInput;

    @Field(() => ProjectsOnUsersCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectsOnUsersCreateWithoutProjectInput)
    create!: ProjectsOnUsersCreateWithoutProjectInput;
}
