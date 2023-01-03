import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutUsersInput } from './project-create-without-users.input';

@InputType()
export class ProjectCreateOrConnectWithoutUsersInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutUsersInput, {nullable:false})
    @Type(() => ProjectCreateWithoutUsersInput)
    create!: ProjectCreateWithoutUsersInput;
}
