import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersUpdateWithoutUserInput } from './projects-on-users-update-without-user.input';

@InputType()
export class ProjectsOnUsersUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:false})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    where!: ProjectsOnUsersWhereUniqueInput;

    @Field(() => ProjectsOnUsersUpdateWithoutUserInput, {nullable:false})
    @Type(() => ProjectsOnUsersUpdateWithoutUserInput)
    data!: ProjectsOnUsersUpdateWithoutUserInput;
}
