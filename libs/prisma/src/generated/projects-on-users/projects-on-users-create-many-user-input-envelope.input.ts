import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateManyUserInput } from './projects-on-users-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectsOnUsersCreateManyUserInputEnvelope {

    @Field(() => [ProjectsOnUsersCreateManyUserInput], {nullable:false})
    @Type(() => ProjectsOnUsersCreateManyUserInput)
    data!: Array<ProjectsOnUsersCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
