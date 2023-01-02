import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersCreateManyProjectInput } from './projects-on-users-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectsOnUsersCreateManyProjectInputEnvelope {

    @Field(() => [ProjectsOnUsersCreateManyProjectInput], {nullable:false})
    @Type(() => ProjectsOnUsersCreateManyProjectInput)
    data!: Array<ProjectsOnUsersCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
