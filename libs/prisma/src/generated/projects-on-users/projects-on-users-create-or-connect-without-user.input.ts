import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersWhereUniqueInput } from './projects-on-users-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectsOnUsersCreateWithoutUserInput } from './projects-on-users-create-without-user.input';

@InputType()
export class ProjectsOnUsersCreateOrConnectWithoutUserInput {

    @Field(() => ProjectsOnUsersWhereUniqueInput, {nullable:false})
    @Type(() => ProjectsOnUsersWhereUniqueInput)
    where!: ProjectsOnUsersWhereUniqueInput;

    @Field(() => ProjectsOnUsersCreateWithoutUserInput, {nullable:false})
    @Type(() => ProjectsOnUsersCreateWithoutUserInput)
    create!: ProjectsOnUsersCreateWithoutUserInput;
}
