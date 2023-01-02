import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersProjectIdUserIdCompoundUniqueInput } from './projects-on-users-project-id-user-id-compound-unique.input';

@InputType()
export class ProjectsOnUsersWhereUniqueInput {

    @Field(() => ProjectsOnUsersProjectIdUserIdCompoundUniqueInput, {nullable:true})
    projectId_userId?: ProjectsOnUsersProjectIdUserIdCompoundUniqueInput;
}
