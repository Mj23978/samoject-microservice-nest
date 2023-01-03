import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSpacesInput } from './project-create-without-spaces.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSpacesInput } from './project-create-or-connect-without-spaces.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutSpacesInput {

    @Field(() => ProjectCreateWithoutSpacesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSpacesInput)
    create?: ProjectCreateWithoutSpacesInput;

    @Field(() => ProjectCreateOrConnectWithoutSpacesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSpacesInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSpacesInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;
}
