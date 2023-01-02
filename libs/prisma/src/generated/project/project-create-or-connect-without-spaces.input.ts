import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSpacesInput } from './project-create-without-spaces.input';

@InputType()
export class ProjectCreateOrConnectWithoutSpacesInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutSpacesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSpacesInput)
    create!: ProjectCreateWithoutSpacesInput;
}
