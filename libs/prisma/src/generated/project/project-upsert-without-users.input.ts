import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutUsersInput } from './project-update-without-users.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutUsersInput } from './project-create-without-users.input';

@InputType()
export class ProjectUpsertWithoutUsersInput {

    @Field(() => ProjectUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutUsersInput)
    update!: ProjectUpdateWithoutUsersInput;

    @Field(() => ProjectCreateWithoutUsersInput, {nullable:false})
    @Type(() => ProjectCreateWithoutUsersInput)
    create!: ProjectCreateWithoutUsersInput;
}
