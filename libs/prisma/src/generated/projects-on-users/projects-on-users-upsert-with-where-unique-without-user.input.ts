import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersUpdateWithoutUserInput } from './projects-on-users-update-without-user.input';
import { ProjectsOnUsersCreateWithoutUserInput } from './projects-on-users-create-without-user.input';

@InputType()
export class ProjectsOnUsersUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:false})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    where!: ProjectsOnUsersWhereUniqueInput;

    @Field(() => ProjectsOnUsersUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProjectsOnUsersUpdateWithoutUserInput)
    update!: ProjectsOnUsersUpdateWithoutUserInput;

    @Field(() => ProjectsOnUsersCreateWithoutUserInput, {nullable:false})
    @Type(() => ProjectsOnUsersCreateWithoutUserInput)
    create!: ProjectsOnUsersCreateWithoutUserInput;
}
