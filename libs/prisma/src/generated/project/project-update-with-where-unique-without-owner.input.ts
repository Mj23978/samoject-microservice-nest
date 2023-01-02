import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutOwnerInput } from './project-update-without-owner.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutOwnerInput)
    data!: ProjectUpdateWithoutOwnerInput;
}
