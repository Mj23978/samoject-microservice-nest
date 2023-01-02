import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Project } from '../project/project.model';
import { User } from '../user/user.model';

@ObjectType()
export class ProjectsOnUsers {

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => Project, {nullable:false})
    project?: Project;

    @Field(() => User, {nullable:false})
    user?: User;
}
