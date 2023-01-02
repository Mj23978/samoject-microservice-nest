import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectListRelationFilter {

    @Field(() => ProjectWhereInput, {nullable:true})
    every?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    some?: ProjectWhereInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    none?: ProjectWhereInput;
}
