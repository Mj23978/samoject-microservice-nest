import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectRelationFilter {

    @Field(() => ProjectWhereInput, {nullable:true})
    is?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    isNot?: ProjectWhereInput;
}
