import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutSpacesInput } from './project-update-without-spaces.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSpacesInput } from './project-create-without-spaces.input';

@InputType()
export class ProjectUpsertWithoutSpacesInput {

    @Field(() => ProjectUpdateWithoutSpacesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutSpacesInput)
    update!: ProjectUpdateWithoutSpacesInput;

    @Field(() => ProjectCreateWithoutSpacesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSpacesInput)
    create!: ProjectCreateWithoutSpacesInput;
}
